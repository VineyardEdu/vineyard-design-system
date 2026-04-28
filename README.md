# vineyard-design-system

포도밭 국어논술(Podobat Korean-Language & Writing Academy) 내부 프로젝트들이 공유하는 디자인 시스템 저장소.

디자인 시스템 자체는 [**클로드디자인**](https://claude.ai) 과 함께 제작되며, 이 레포는 그 산출물을 보관하고 소비 프로젝트에 배포한다.

---

## 구조

```
vineyard-design-system/
├── podobat-design-system/         ← 클로드디자인 핸드오프 번들 (그대로 보관)
│   ├── README.md                   번들 메타: 코딩 에이전트용 안내 (일회성)
│   ├── chats/                      클로드디자인과의 대화 이력
│   └── project/                    실제 디자인 자산
│       ├── README.md                브랜드 컨텍스트 + 비주얼 가이드라인 ★
│       ├── SKILL.md                 Claude Code 스킬 메타
│       ├── colors_and_type.css      토큰 (색·타이포·radius·shadow·spacing)
│       ├── fonts/                   Pretendard woff2 9종
│       ├── assets/                  플랫 SVG 아이콘 + 3D PNG + 로고 + gradation
│       ├── preview/                 컴포넌트 HTML 스펙 (Button, Chip, Badge, Dropdown, Floating Widget, Form Inputs, Loading Spinner, Subject Tiles, Toasts 등)
│       └── ui_kits/                 홈페이지 화면 JSX 레퍼런스 (web/mobile)
├── docs/                          이 레포의 설계 문서 (consumer-guide, setup-discussion)
└── package.json
```

★ **브랜드 가이드라인은 [`podobat-design-system/project/README.md`](./podobat-design-system/project/README.md) 에 있다.** 루트의 `podobat-design-system/README.md` 는 클로드디자인이 매 번들에 자동으로 포함하는 핸드오프 메타 안내문이므로 디자인 정보를 찾을 때는 그 파일을 보지 말 것.

---

## 소비 방법 (다른 프로젝트에서)

### 1. 설치

```bash
npm install github:VineyardEdu/vineyard-design-system
# 또는 특정 버전/커밋:
# npm install github:VineyardEdu/vineyard-design-system#v0.1.0
```

> `pnpm`, `yarn` 도 같은 방식으로 동작.

### 2. 토큰 & 폰트 로드

프로젝트의 글로벌 CSS 엔트리에서:

```css
@import "vineyard-design-system/podobat-design-system/project/colors_and_type.css";
```

이 한 줄로 컬러/타이포/radius/shadow/spacing 토큰 + Pretendard 폰트가 모두 로드됨.

### 3. 아이콘 & 에셋 사용

```tsx
import chevronRight from "vineyard-design-system/podobat-design-system/project/assets/chevron-right.svg";

<img src={chevronRight} alt="다음" />
```

### 4. 컴포넌트 스펙 참고

각 컴포넌트를 구현할 때는 `podobat-design-system/project/preview/*.html` 의 마크업과 CSS 를 레퍼런스로 사용한다. 현재는 스펙(HTML + 인라인 CSS) 형태로만 제공되며, 컴포넌트별로 분리된 CSS 파일(`project/components/<name>.css`)은 클로드디자인 후속 라운드에서 추가될 예정.

---

## 업데이트 흐름

1. 클로드디자인에서 새 핸드오프 번들(tar.gz) 을 받는다.
2. 이 레포의 `podobat-design-system/` 폴더를 통째로 덮어쓴다 (번들의 최상위 디렉토리명이 동일하므로 그대로 추출).
3. 변경사항 검토 후 커밋, 버전 태그 (`v0.x.x`) 를 붙인다.
4. 소비 프로젝트의 `package.json` 에서 태그를 올려 반영한다.

---

## 설계 원칙

- **CSS-only 전달**: React 컴포넌트로 래핑하지 않고 CSS 클래스 + HTML 패턴으로 공유. 소비 프로젝트가 자신의 JSX 로 조립.
- **수동 손질 최소화**: 클로드디자인 산출물을 이 레포에서 임의 수정하지 않는다. 디자인 변경은 클로드디자인에서 해서 받아온다.
- **버전은 git tag**: npm 레지스트리 미사용. GitHub 주소 + 태그로 소비.

자세한 논의 이력은 [`docs/setup-discussion.md`](./docs/setup-discussion.md) 참고.
