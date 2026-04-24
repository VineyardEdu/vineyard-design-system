# vineyard-design-system

포도밭 국어논술(Podobat Korean-Language & Writing Academy) 내부 7개 프로젝트가 공유하는 디자인 시스템 저장소.

디자인 시스템 자체는 [**클로드디자인**](https://claude.ai) 과 함께 제작되며, 이 레포는 그 산출물을 보관하고 소비 프로젝트에 배포한다.

---

## 구조

```
vineyard-design-system/
├── podobat-design-system/     ← 클로드디자인 산출물 (그대로 보관)
│   ├── README.md               브랜드 컨텍스트 + 비주얼 가이드라인
│   ├── colors_and_type.css     토큰 (색·타이포·radius·shadow·spacing)
│   ├── fonts/                  Pretendard woff2 9종
│   ├── assets/                 플랫 SVG 아이콘 + 3D PNG + 로고 + gradation
│   ├── preview/                컴포넌트 HTML 스펙 (Button, Chip, Badge, Dropdown, Floating Widget, Form Inputs, Loading Spinner, Subject Tiles, Toasts 등)
│   └── ui_kits/                홈페이지 화면 JSX 레퍼런스 (web/mobile)
├── docs/                      이 레포의 설계 문서
└── package.json
```

자세한 브랜드 가이드라인은 [`podobat-design-system/README.md`](./podobat-design-system/README.md) 참고.

---

## 소비 방법 (다른 프로젝트에서)

### 1. 설치

```bash
npm install github:hanbeulYou/vineyard-design-system
# 또는 특정 버전/커밋:
# npm install github:hanbeulYou/vineyard-design-system#v0.1.0
```

> `pnpm`, `yarn` 도 같은 방식으로 동작.

### 2. 토큰 & 폰트 로드

프로젝트의 글로벌 CSS 엔트리에서:

```css
@import "vineyard-design-system/podobat-design-system/colors_and_type.css";
```

이 한 줄로 컬러/타이포/radius/shadow/spacing 토큰 + Pretendard 폰트가 모두 로드됨.

### 3. 아이콘 & 에셋 사용

```tsx
import chevronRight from "vineyard-design-system/podobat-design-system/assets/chevron-right.svg";

<img src={chevronRight} alt="다음" />
```

### 4. 컴포넌트 스펙 참고

각 컴포넌트를 구현할 때는 `podobat-design-system/preview/*.html` 의 마크업과 CSS 를 레퍼런스로 사용한다. 현재는 스펙(HTML + 인라인 CSS) 형태로만 제공되며, 통합된 `components.css` 는 추후 제공 예정.

---

## 업데이트 흐름

1. 클로드디자인에서 새 버전의 `podobat-design-system/` 산출물을 받는다.
2. 이 레포의 `podobat-design-system/` 을 덮어쓴다.
3. 변경사항 검토 후 커밋, 버전 태그 (`v0.2.0` 등) 를 붙인다.
4. 소비 프로젝트의 `package.json` 에서 태그를 올려 반영한다.

---

## 설계 원칙

- **CSS-only 전달**: React 컴포넌트로 래핑하지 않고 CSS 클래스 + HTML 패턴으로 공유. 소비 프로젝트가 자신의 JSX 로 조립.
- **수동 손질 최소화**: 클로드디자인 산출물을 이 레포에서 임의 수정하지 않는다. 디자인 변경은 클로드디자인에서 해서 받아온다.
- **버전은 git tag**: npm 레지스트리 미사용. GitHub 주소 + 태그로 소비.

자세한 논의 이력은 [`docs/setup-discussion.md`](./docs/setup-discussion.md) 참고.
