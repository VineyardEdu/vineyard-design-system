# vineyard-design-system 초기 세팅 논의 정리

> 작성일: 2026-04-24
> 상태: 논의 진행 중 (결정 2개 대기)

---

## 배경

포도밭학원에는 여러 내부 프로젝트가 있고, 각각 **별도 git 레포**다. (2026-04-24 기준 총 7개. 향후 늘거나 줄 수 있음.)

- **홈페이지**: `vineyard-web` (Next.js 15 + React 19 + pnpm, 디자인이 유일하게 정리·토큰화되어 있음)
- **백오피스**: `vineyard-back-office`
- **도구용 웹서비스들**: `vineyard-essay-grading`, `vineyard-homework-correction`, `vineyard-ocr-to-quiz`, `vineyard-report`, `vineyard-bookstore`

현재 홈페이지를 제외한 나머지 프로젝트들은 UI 통일성이 떨어진다. 홈페이지 디자인을 원천으로 디자인 시스템을 만들어, 다른 서비스에 일관되게 적용하는 것이 전체 목표다.

**이 레포(`vineyard-design-system`)의 역할**: 디자인 시스템 코드를 보관하는 저장소. 디자인 시스템 자체는 별도 도구 **클로드디자인**과 함께 제작 중이며, 이 레포는 산출물을 담고 각 소비 프로젝트에 배포하는 역할을 한다.

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
- `preview/*.html` 이 사실상 사용설명서 = 각 소비 프로젝트는 HTML 스니펫 복붙
- 사용자가 "손 안 대고 가져다 쓰고 싶다"는 요구에 맞음 ✅

### 동작(behavior)이 있는 컴포넌트 처리

- **순수 시각 (CSS로 충분)**: Button, Chip, Badge, Spinner, Subject Tiles
- **동작 필요**: Dropdown/Select, Toast, Floating Widget → 각 소비 프로젝트가 **로직은 자체 처리**(Radix, Headless UI, 자체 React state) + **스타일만 이 레포의 CSS 클래스 적용**

---

## 클로드디자인에 해야 할 요청

현재 `preview/*.html` 의 스타일은 각 파일의 인라인 `<style>` 블록에 들어 있음. 모델 B로 가면 이걸 각 소비 프로젝트가 공유해야 하므로 외부 CSS 파일로 빼야 함.

**분리 원칙으로 요청**:

> `preview/*.html` 의 인라인 `<style>` 내용을 **컴포넌트별 CSS 파일**로 분리해서 `components/buttons.css`, `components/chips-badges.css`, `components/dropdown.css`, `components/floating-widget.css`, `components/form-inputs.css`, `components/spinner.css`, `components/subject-tiles.css`, `components/toast.css` 에 출력해주세요. `components/index.css` 에서 이 파일들을 `@import` 로 모아 단일 진입점을 제공해주세요. 각 `preview/*.html` 은 `<link>` 로 해당 컴포넌트 CSS 하나만 참조하도록 바꿔주세요.

**왜 통합 `components.css` 가 아니라 분리인가:**
- 클로드디자인이 컴포넌트별로 재생성하는 구조 → 통합 파일이면 한 컴포넌트 변경 시 다른 컴포넌트 영역까지 의도치 않게 재포맷될 위험
- git diff 가 컴포넌트 단위로 읽혀 업데이트 추적 명확
- `preview/*.html` ↔ `components/*.css` 1:1 매핑으로 의존성 투명
- 소비 프로젝트는 Next/Vite 번들러가 `@import` 를 다뤄주므로 분리 단점 거의 없음

> **주의**: 이 문서에서도 "내부 프로젝트" 같은 일반화 표현을 쓴다. 개수는 시간에 따라 변할 수 있으므로 하드코딩하지 않는다.

대안: 이 레포에 HTML→CSS 추출 스크립트를 1회성으로 둘 수도 있지만, 이것도 결국 사람 손이 들어가므로 클로드디자인 쪽 수정이 더 깔끔.

---

## 아직 결정 필요한 2가지

### 1. 디렉토리 구조: 중첩 유지 vs 평탄화

**옵션 A — 중첩 유지** (클로드디자인이 계속 갱신할 예정이면)
```
vineyard-design-system/
├── podobat-design-system/   ← 클로드디자인 산출물 그대로, 건드리지 않음
├── package.json              ← 각 소비 레포가 github: 로 import
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
- 각 소비 레포 CI/로컬 세팅 부담 0
- 조직 정책상 private이 기본이라면 SSH 방식(두 번째)도 실용적

---

## 이후 작업 로드맵

### 1차 (트랙 A): 토큰/폰트/에셋 배포 — 즉시
- git init, package.json, README
- 각 소비 프로젝트에 배포 방식 문서화
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
3. 소비 프로젝트 중 1개(예: `vineyard-back-office`)에 붙여 보는 검증
4. 클로드디자인에 `components.css` 요청

---

## 변경 이력

### v0.2.0 — 2026-04-28: 클로드디자인 핸드오프 번들 구조 수용

클로드디자인이 산출물을 `tar.gz` 핸드오프 번들 형태로 내보내기 시작했고, 이번 라운드의 디자인 결과물을 받아 적용함.

**번들 구조 변화:**
```
podobat-design-system/
├── README.md       (NEW — 코딩 에이전트용 핸드오프 메타)
├── chats/          (NEW — 클로드디자인 대화 이력)
└── project/        (기존 podobat-design-system/ 내용이 한 단계 깊어짐)
```

**디자인 변경 (콘텐츠 단위):**
- `project/ui_kits/mobile/index-print.html` 추가 — 모바일 UI 킷 PDF 익스포트용
- 그 외 모든 파일 byte-identical (이번 라운드는 사실상 패키징 변화)

**적용 결정 — 옵션 A (번들 구조 그대로 수용)** :
- 다음 업데이트 시 폴더 통째 덮어쓰기 가능 ("손 안 대기" 원칙 유지)
- 챗 이력 보존으로 디자인 결정 추적 가능
- 트레이드오프: 소비 import 경로 모두 1단계 깊어짐 (`/project/` 추가)

**파급 작업:**
- `README.md`, `docs/consumer-guide.md` 의 모든 import 경로에 `/project/` 추가
- 두 README 의 역할 차이 명시 (루트 podobat-design-system/README.md = 핸드오프 메타, project/README.md = 브랜드 가이드)
- 업데이트 흐름을 "tar.gz 번들 통째 덮어쓰기" 로 단순화

**아직 미반영:**
- `components/<name>.css` 분리 요청은 다음 라운드 클로드디자인 작업으로

### v0.3.0 — 2026-04-29: 컴포넌트 CSS 분리 + BEM 네임스페이싱

클로드디자인이 8개 원자 컴포넌트의 CSS 를 외부 파일로 분리해서 출력. 통합 `components.css` 가 아닌 컴포넌트별 분리 + `index.css` 단일 진입점 구조 채택 (앞서 결정한 분리 원칙대로).

**신규 파일**: `project/components/`
- `buttons.css`, `chips-badges.css`, `dropdown.css`, `floating-widget.css`, `form-inputs.css`, `spinner.css`, `subject-tiles.css`, `toast.css`
- `index.css` — 8개를 `@import` 로 모은 단일 진입점
- 각 파일 상단에 마크업 예시 주석 포함 (consumer 가 CSS 안 읽고도 사용법 파악 가능)

**클래스 네이밍 — BEM 컨벤션 채택**:

흔한 이름(`.primary`, `.active`, `.sm` 등) 단독 사용을 피하고 모두 BEM(`block__element--modifier`) 형태로 네임스페이싱. 소비 프로젝트의 다른 CSS 와 충돌 위험 제거.

| 이전 | 변경 후 |
|------|--------|
| `.btn.primary` | `.btn.btn--primary` |
| `.chip.active` | `.chip.chip--active` |
| `.b-blue` | `.badge--blue` |
| `.wrap/.trigger/.menu/.opt` (드롭다운) | `.dropdown / .dropdown__trigger / __menu / __opt` (+ `.dropdown--open`) |
| `.widget/.btn/.top/.pair` (플로팅) | `.fwidget/__btn/__top/__pair` (`.btn` 충돌 회피) |
| label/input 직접 셀렉터 | `.field__label / .field__input / .field__input--error / .field__error` |
| `.sm/.md/.lg/.xl` (스피너) | `.spinner--sm/--md/--lg/--xl`, 캡션은 `.spinner__caption` |
| `.tile.blue/.kicker.blue` | `.tile--blue / .tile__kicker--blue`, 텍스트는 `.tile__title/.tile__desc` |
| `.err/.ok/.info` (토스트) | `.toast--err/--ok/--info`, `.toast__dot/.toast__icon` |

**Preview HTML 갱신**: 8개 `preview/*.html` 모두 인라인 `<style>` 대신 `<link rel="stylesheet" href="../components/<name>.css">` 로 외부 참조. 잔여 `<style>` 은 preview-only 레이아웃 (`body padding`, `.row`, `.grid`) 만 남음.

**범위 밖 (이번 라운드 미적용)**:
- `ui_kits/*.jsx` 의 인라인 `style={{...}}` — 별도 라운드, 또는 미적용 (홈페이지 화면 컴포지션이라 다른 프로젝트가 import 하지 않음)
- `index.html` 의 글로벌 스타일 — 카탈로그용

**파급 작업:**
- `consumer-guide.md` 의 컴포넌트 섹션 전면 재작성 (인라인 style 예시 → BEM 클래스 예시)
- `README.md` 의 컴포넌트 섹션도 BEM 사용법으로 갱신, 디렉토리 트리에 `components/` 추가
- package.json 0.2.0 → 0.3.0

**다음 라운드 후보** (Claude Design 의 chat 마무리 제안 + 우리 측 우선순위):
1. `components/README.md` — 8개 컴포넌트의 전체 클래스 API 표 (consumer 가 CSS 안 읽고 작업 가능)
2. Modal/Dialog 컴포넌트 (codebase 에 `course-detail-modal.tsx` 있는데 디자인 시스템 누락)
3. Empty / Error / Skeleton 패턴
