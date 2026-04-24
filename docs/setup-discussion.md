# vineyard-design-system 초기 세팅 논의 정리

> 작성일: 2026-04-24
> 상태: 논의 진행 중 (결정 2개 대기)

---

## 배경

포도밭학원 모노레포 상황에는 **총 7개 프로젝트**가 있고, 각각 **별도 git 레포**다.

- **홈페이지**: `vineyard-web` (Next.js 15 + React 19 + pnpm, 디자인이 유일하게 정리·토큰화되어 있음)
- **백오피스**: `vineyard-back-office`
- **도구용 웹서비스 5개**: `vineyard-essay-grading`, `vineyard-homework-correction`, `vineyard-ocr-to-quiz`, `vineyard-report`, `vineyard-bookstore`

현재 홈페이지를 제외한 6개 프로젝트는 UI 통일성이 떨어진다. 홈페이지 디자인을 원천으로 디자인 시스템을 만들어, 다른 서비스에 일관되게 적용하는 것이 전체 목표다.

**이 레포(`vineyard-design-system`)의 역할**: 디자인 시스템 코드를 보관하는 저장소. 디자인 시스템 자체는 별도 도구 **클로드디자인**과 함께 제작 중이며, 이 레포는 산출물을 담고 7개 프로젝트에 배포하는 역할을 한다.

---

## 현재 레포 상태

```
vineyard-design-system/
└── podobat-design-system/        ← 클로드디자인 산출물 (복사해 온 상태)
    ├── README.md                  브랜드 컨텍스트 + 비주얼 가이드라인
    ├── SKILL.md                   Claude Code 스킬 메타데이터 (user-invocable: true)
    ├── colors_and_type.css        토큰 (색·타이포·radius·shadow·spacing)
    ├── fonts/                     Pretendard woff2 9종
    ├── assets/                    SVG 플랫 아이콘 + 3D PNG + 로고 + gradation
    ├── preview/                   컴포넌트 스펙 HTML 22개 (인라인 CSS)
    └── ui_kits/
        ├── web/                   홈페이지 화면 섹션 JSX (Nav, Banner, Courses...)
        └── mobile/                iOS 프레임 + 모바일 화면 섹션 JSX
```

git 초기화는 아직 안 되어 있음 (`git init` 전).

---

## 컴포넌트 자산 현황

클로드디자인 UI에 명시된 **컴포넌트 8종**:

| 컴포넌트 | HTML 스펙 (이 레포) | 실제 React 구현 (vineyard-web) |
|---------|---------------------|------------------------------|
| Buttons | `preview/buttons.html` | ❌ 공용 컴포넌트 없음 |
| Chips & Badges | `preview/chips-badges.html` | `chip.tsx`, `badge.tsx` |
| Dropdown / Select | `preview/dropdown.html` | `custom-select.tsx`, `form-select.tsx` |
| Floating Widget | `preview/floating-widget.html` | `floating-widget.tsx`, `floating-widget-button.tsx` |
| Form Inputs | `preview/form-inputs.html` | `form-input.tsx`, `file-upload.tsx` |
| Loading Spinner | `preview/spinner.html` | `loading-spinner.tsx` |
| Subject Tiles | `preview/subject-tiles.html` | ❌ (홈페이지 MainLinks/Courses에 녹아있을 가능성) |
| Toasts | `preview/toast.html` | ⚠️ `toast-editor/viewer.tsx` 는 TOAST UI Editor 래퍼. 다른 것임. |

### 두 층위 구분

- **디자인 스펙으로서의 컴포넌트**: ✅ 8개 모두 존재 (색/크기/hover·focus 상태 등 CSS 레벨에서 확정)
- **React 라이브러리로서의 컴포넌트**: ❌ 이 레포에는 0개. `vineyard-web/src/components/common/` 안에만 일부 존재.

---

## 핵심 결정: 모델 B — CSS-only 전달

### 두 가지 배포 모델 비교

**모델 A: React 컴포넌트 export**
```tsx
import { Button } from "vineyard-design-system"
```
- 클로드디자인이 HTML만 주므로, 누군가 HTML→React 번역 필요
- 클로드디자인 업데이트마다 번역도 갱신 필요
- 사용자가 원하지 않는 흐름 ❌

**모델 B: CSS 클래스 + 에셋만 제공** (채택)
```tsx
import "vineyard-design-system/tokens.css"
import "vineyard-design-system/components.css"

<button className="btn primary">자세히 보기</button>
```
- 클로드디자인 산출물이 **그대로** 계약 = CSS 클래스 이름
- 업데이트 시 **폴더 덮어쓰기만** → 코드 변경 0
- `preview/*.html` 이 사실상 사용설명서 = 소비자는 HTML 스니펫 복붙
- 사용자가 "손 안 대고 가져다 쓰고 싶다"는 요구에 맞음 ✅

### 동작(behavior)이 있는 컴포넌트 처리

- **순수 시각 (CSS로 충분)**: Button, Chip, Badge, Spinner, Subject Tiles
- **동작 필요**: Dropdown/Select, Toast, Floating Widget → 각 소비 프로젝트가 **로직은 자체 처리**(Radix, Headless UI, 자체 React state) + **스타일만 이 레포의 CSS 클래스 적용**

---

## 클로드디자인에 해야 할 요청 (1개)

현재 `preview/*.html` 의 스타일은 각 파일의 인라인 `<style>` 블록에 들어 있음. 모델 B로 가면 이걸 7개 프로젝트가 공유해야 하므로:

> **"컴포넌트 CSS를 외부 파일(`components.css`) 하나로 묶어서 출력해달라."**

이걸 요청하지 않으면 각 소비 프로젝트가 HTML에서 `<style>`을 긁어와야 해서 드리프트가 생김.

대안: 이 레포에 HTML→CSS 추출 스크립트를 1회성으로 둘 수도 있지만, 이것도 결국 사람 손이 들어가므로 클로드디자인 쪽 수정이 더 깔끔.

---

## 아직 결정 필요한 2가지

### 1. 디렉토리 구조: 중첩 유지 vs 평탄화

**옵션 A — 중첩 유지** (클로드디자인이 계속 갱신할 예정이면)
```
vineyard-design-system/
├── podobat-design-system/   ← 클로드디자인 산출물 그대로, 건드리지 않음
├── package.json              ← 7개 레포가 github: 로 import
├── index.css                 ← @import "./podobat-design-system/colors_and_type.css" 등
├── README.md                 
└── .gitignore
```
장점: 클로드디자인 출력을 통째로 덮어쓰기 쉬움.

**옵션 B — 평탄화** (초기 씨앗이고 이제부터 우리가 관리하면)
```
vineyard-design-system/
├── tokens.css                ← colors_and_type.css → 이동+개명
├── components.css            ← 클로드디자인이 새로 만들어줄 파일
├── fonts/
├── assets/
├── preview/                  ← 내부 문서용
├── ui_kits/                  ← 참고용
├── package.json
├── README.md
├── SKILL.md                  ← 스킬로도 계속 쓰려면 유지
└── .gitignore
```
장점: 단순, 한 단계 덜 중첩.

**결정 기준**: 클로드디자인이 `podobat-design-system/` 폴더를 주기적으로 재생성/갱신할 예정인지 여부.

### 2. 레포 공개: public vs private

| 방식 | 세팅 난이도 | 소비 방식 |
|------|------------|----------|
| **Public** | ★☆☆ 가장 쉬움 | `"pkg": "github:org/vineyard-design-system#v0.1.0"` 한 줄 |
| **Private + SSH** | ★★☆ 중간 | SSH 키 등록된 환경에서만 가능 (`git+ssh://...`) |
| **Private + GitHub Packages** | ★★★ 번거로움 | `npm publish` + `.npmrc` PAT 설정 |

**권장: Public**
- 민감 정보 없음 (색/타입 토큰 + 오픈소스 Pretendard + 아이콘 + CSS)
- 홈페이지(podobat.com)는 이미 공개되어 있으므로 디자인은 이미 공개된 상태
- 7개 소비 레포 CI/로컬 세팅 부담 0
- 조직 정책상 private이 기본이라면 SSH 방식(두 번째)도 실용적

---

## 이후 작업 로드맵

### 1차 (트랙 A): 토큰/폰트/에셋 배포 — 즉시
- git init, package.json, README
- 7개 프로젝트에 배포 방식 문서화
- 적어도 1개 소비 프로젝트에서 import 검증

### 2차 (트랙 B): 8개 컴포넌트 CSS 완성 — 점진
- 클로드디자인에 `components.css` 생성 요청
- 받아서 반영, 버전 태그
- 소비 프로젝트에서 Button, Chip 등 적용 검증

### 3차 (필요 시): 컴포넌트 JSX 래퍼 — 나중
- 각 소비 프로젝트에서 반복 markup이 부담되면 그때 React 래퍼 추가 검토
- 지금은 하지 않음 (사용자가 손 안 대고 가져다 쓰는 모델을 원함)

---

## 메모리에 저장된 핵심 원칙

- 이 레포는 **CSS/에셋/폰트 전달 채널**이며, 디자인 결정의 원천은 **클로드디자인**
- 사용자는 이 레포 코드를 **직접 수정하지 않고** 클로드디자인 산출물을 그대로 가져다 쓰길 원함
- 재사용 가능한 원자 컴포넌트의 **소스는 클로드디자인 산출물**, `vineyard-web/src/components/common/` 은 현재 홈페이지 전용 구현이지 공용 원천이 아님

---

## 다음 대화에서 이어갈 지점

1. 위 **결정 사항 2개** 확정 (구조 / 공개 여부)
2. 확정되면 `git init`, `package.json`, `README.md`, `.gitignore` 작성
3. 7개 소비 프로젝트 중 1개(예: `vineyard-back-office`)에 붙여 보는 검증
4. 클로드디자인에 `components.css` 요청
