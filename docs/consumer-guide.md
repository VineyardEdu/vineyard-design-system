# vineyard-design-system 사용 가이드 (소비 프로젝트용)

> 이 문서는 **다른 프로젝트(bookstore, essay-grading, back-office 등)의 Claude Code** 가 읽으라고 만든 가이드다. 이 레포를 직접 만질 때가 아니라, 이 레포를 **가져다 쓸 때** 참고한다.

---

## 이 디자인 시스템이 뭔지

포도밭 국어논술의 **내부 프로젝트 공용 디자인 자산**. 홈페이지(`vineyard-web`) 를 원천으로, 토큰·폰트·아이콘·컴포넌트 CSS 스펙을 담고 있다.

- **레포**: https://github.com/VineyardEdu/vineyard-design-system
- **배포 방식**: npm 레지스트리 미사용. GitHub 주소로 직접 설치.
- **유지 주체**: 디자인 변경은 **클로드디자인** 측에서 이뤄짐. 이 레포의 내용을 소비 프로젝트에서 임의 수정하지 말 것.

---

## 플래닝 단계에서 (planning-gate Phase 2 관련)

**Drawing / Concept / Action Plan 을 짤 때** 다음을 전제로 설계한다:

1. **시각 언어를 처음부터 설계하지 않는다.** 색/타이포/radius/shadow/spacing 은 이 디자인 시스템의 토큰을 그대로 쓴다.
2. **UI 컴포넌트를 새로 발명하지 않는다.** 아래 8종이 이미 스펙화되어 있으니 우선 매핑한다:
   - Buttons, Chips & Badges, Dropdown/Select, Floating Widget, Form Inputs, Loading Spinner, Subject Tiles, Toasts
3. **기획에 필요한 UI 패턴이 이 리스트에 없다면** → "디자인 시스템 신규 컴포넌트 요청 후보" 로 따로 추적. 즉흥 구현하지 말 것.
4. **기술 스택 결정 시** Next.js / Vite 등 CSS `@import` 를 번들해주는 환경을 선택하면 소비가 쉬워진다. Tailwind 와 병용 가능.

---

## 설치

```bash
# npm
npm install github:VineyardEdu/vineyard-design-system

# 특정 버전/태그/커밋으로 고정 (권장)
npm install github:VineyardEdu/vineyard-design-system#v0.1.0

# pnpm / yarn 도 동일 문법
pnpm add github:VineyardEdu/vineyard-design-system
yarn add github:VineyardEdu/vineyard-design-system
```

---

## 사용

### 1. 토큰 + 폰트 로드

프로젝트의 글로벌 CSS 엔트리에 한 줄만 추가:

```css
@import "vineyard-design-system/podobat-design-system/project/colors_and_type.css";
```

이걸로 **색 변수(`--color-primary-0` 등) + Pretendard 웹폰트 + 타이포 클래스(`.web-h1-40` 등) + radius/shadow/spacing 변수** 가 모두 로드된다.

### 2. 색/타이포 사용

```tsx
// 토큰 변수로
<div style={{ background: "var(--color-primary-0)", color: "#fff" }}>...</div>

// 타이포 클래스로
<h1 className="web-h1-40">구조 따라 생각을 펼치는 글쓰기</h1>
<p className="web-b1-16">포도밭 국어논술은…</p>
```

### 3. 아이콘 / 에셋

```tsx
import chevronRight from "vineyard-design-system/podobat-design-system/project/assets/chevron-right.svg";
import logo from "vineyard-design-system/podobat-design-system/project/assets/logo.svg";

<img src={chevronRight} alt="" width={24} height={24} />
```

3D PNG 아이콘:
```tsx
import idea from "vineyard-design-system/podobat-design-system/project/assets/3dcon/idea.png";
```

### 4. 컴포넌트 사용

컴포넌트는 **CSS 클래스로 제공**된다 (React 래퍼 없음). 글로벌 CSS 엔트리에서 한 번 import 하고, 마크업에 클래스명만 붙이면 된다.

**전체 import**:
```css
@import "vineyard-design-system/podobat-design-system/project/colors_and_type.css";
@import "vineyard-design-system/podobat-design-system/project/components/index.css";
```

**필요한 컴포넌트만 선택 import**:
```css
@import "vineyard-design-system/podobat-design-system/project/components/buttons.css";
@import "vineyard-design-system/podobat-design-system/project/components/form-inputs.css";
```

**클래스 네이밍 컨벤션 (BEM)**:
- 베이스(Block): `.btn`, `.chip`, `.dropdown`, `.fwidget`, `.field`, `.spinner`, `.tile`, `.toast`
- 변형(Modifier): `.btn--primary`, `.chip--active`, `.toast--err`, `.spinner--lg`
- 하위 요소(Element): `.dropdown__menu`, `.fwidget__btn`, `.field__label`, `.toast__dot`

흔한 이름(`.primary`, `.active`, `.sm`)을 단독으로 쓰지 않아 소비 프로젝트의 다른 CSS 와 충돌하지 않는다.

**예시**:

```tsx
// Button
<button className="btn btn--primary">자세히 보기</button>
<button className="btn btn--secondary">문의하기</button>
<button className="btn btn--ghost">더 알아보기 →</button>
<button className="btn btn--primary btn--sm">+ 접수</button>
<button className="btn" disabled>비활성</button>

// Chip / Badge
<span className="chip chip--active">전체</span>
<span className="badge badge--blue">초등 논술</span>

// Form input
<label className="field">
  <span className="field__label">이름</span>
  <input className="field__input" />
</label>

// Toast
<div className="toast toast--err">
  <span className="toast__dot" />
  오류가 발생했습니다
</div>
```

각 컴포넌트의 전체 클래스 목록은 해당 `components/<name>.css` 파일 상단 주석을 참고. 시각 스펙은 `preview/<name>.html` 참고.

### 5. 홈페이지 화면 레퍼런스

전체 화면 레이아웃은 `ui_kits/web/*.jsx` 와 `ui_kits/mobile/*.jsx` 참고. 이건 **홈페이지 전용 컴포지션**이므로 그대로 쓰지 말고, 레이아웃 감각과 토큰 사용 패턴 학습용으로만 본다.

---

## 규칙 (Do / Don't)

### ✅ Do

- 토큰·폰트·아이콘은 디자인 시스템에서 가져와 쓴다
- 컴포넌트 구현 시 `preview/*.html` 의 마크업/CSS 를 최대한 그대로 따른다
- 새 버전 반영 시 `package.json` 의 `#v0.x.x` 태그를 올린다
- 브랜드 가이드라인(`podobat-design-system/project/README.md`) 의 tone/voice/layout 규칙을 따른다 — `word-break: keep-all`, 이모지 금지, 등

### ❌ Don't

- `node_modules/vineyard-design-system/` 내부 파일을 수정하지 않는다 (업데이트 시 소실)
- 디자인 시스템에 이미 있는 컴포넌트를 재발명하지 않는다 (먼저 `preview/` 확인)
- 색/radius/spacing 을 하드코딩하지 않는다 (변수 사용)
- 디자인 시스템 외 3rd party 아이콘 세트를 섞지 않는다 (일관성 훼손)
- 디자인 이슈는 이 레포에 PR 하지 말고 클로드디자인에 피드백한다

---

## 업데이트 반영 흐름

1. 클로드디자인이 새 산출물을 내놓거나, 이 레포가 새 태그(`v0.2.0` 등) 를 낸다
2. CHANGELOG 또는 릴리즈 노트 확인
3. 소비 프로젝트 `package.json` 의 태그 올리고 `npm install`
4. 렌더링에 영향이 있을 만한 변경(토큰 값 변화, 클래스명 변경 등)이 있으면 해당 부분 수동 검증

---

## 참고 파일

이 레포 안에서 함께 읽으면 좋은 것:

- `README.md` — 레포 개요
- `podobat-design-system/README.md` — 클로드디자인 핸드오프 메타 (코딩 에이전트 안내, 디자인 정보 아님)
- `podobat-design-system/project/README.md` — **브랜드·비주얼 가이드라인 ★** (Pretendard 사용, word-break 규칙, 컬러 의미 등)
- `podobat-design-system/project/SKILL.md` — Claude Code 스킬 메타
- `podobat-design-system/chats/` — 클로드디자인과의 대화 이력 (디자인 결정 추적용)
- `docs/setup-discussion.md` — 레포 세팅 배경과 결정 이력
