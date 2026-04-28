# Podobat Design System (포도밭 국어논술)

A design system for **포도밭 국어논술 / Podobat Korean-Language & Writing Academy** — a Seoul-based academy teaching 국어 (Korean) and 논술 (writing/essay) to 초등 (elementary) and 중등 (middle-school) students. The public web product lives at **podobat.com**; the logo reads "포도나무" (vineyard/grapevine), hence the internal name "vineyard".

> 국어·논술의 뿌리를 만드는 포도밭 국어논술 — "The roots of Korean & writing."

## Sources

- **Codebase:** `vineyard-web-main/` — Next.js 15 + React 19 + Tailwind v4 marketing site. Key refs:
  - `src/app/colors.css` — color tokens (ported verbatim into `colors_and_type.css`)
  - `src/app/fonts.css` — Pretendard + web-/mobile- type scales
  - `src/components/common/*` — badge, chip, form-input, custom-select
  - `src/components/main/*` — homepage (banner, link grid, board, edu sections)
  - `src/components/icons/*` — inline SVG React icon components
  - `src/data/navigation.ts`, `korean-tab.ts`, `writing.ts` — real copy
- **Figma (virtual `.fig`):** 131 top-level frames. Naming convention `W-01`–`W-21` = web screens, `M-00`–`M-21` = mobile screens, plus `Colors`, `Fonts---web`, `Fonts---mobile`, `Logo`, `Graphic`, `Graphic-Quick-Menu`.

Both sources are read-only mounts. If you can't access them, ask the user to re-attach.

## Products / surfaces

This is a **single marketing/lookup web product** with two breakpoints:

1. **Web (≥768px)** — marketing homepage, about, course catalog, notices, login, mypage. Max container 1140px.
2. **Mobile (<768px)** — same IA; drawer menu, swipeable carousels, bottom-sheet modals. 50px sticky nav.

No native app. Admin dashboard exists behind auth (`/admin`) but is out of scope.

## Voice & tone (Korean)

Academic, warm, slightly literary. Headlines are short declaratives that **pair a structural verb with a humanistic noun**:

- 국어·논술의 뿌리를 만드는 — "making the roots of…"
- 구조 따라 생각을 펼치는 글쓰기 — "writing that unfurls thought along structure"
- 개념 따라 낯선 작품 보는 국어 — "Korean that meets unfamiliar works through concepts"
- 세상의 관찰에서 나의 세계로 — "from observing the world to one's own world"

Body uses polite neutral endings (…합니다 / …입니다). No emoji. No exclamations except brief CTAs. Prefers `word-break: keep-all` so Korean words never split mid-word.

## Content fundamentals

- **Language:** Korean first (`lang="ko"`). All copy shown to users is Korean. Code/comments in English + Korean.
- **Casing:** N/A for Korean; English labels (rare) use Title Case for nav, sentence case for body.
- **Address:** Second person implicit (drops subject). Uses 여러분 ("everyone") for group direct address, 우리 ("our") to build belonging.
- **Emoji:** None. Uses 3D icon PNGs + flat SVG icons instead.
- **Punctuation:** Korean quotes `"…"` or single `'…'`. Middle dot `·` for lists within a line (국어·논술). `/` for alt-labels in admin UI.
- **Numerals:** Arabic digits. Sizes labeled 초등 중학년 / 초등 고학년 / 중등.
- **CTAs:** Verb-noun — "자세히 보기", "더 알아보기", "문의하기", "+" plus-icon for "expand".

## Visual foundations

### Palette
- **Primary violet** (`#695189` deep, `#6e5dc7` indigo, `#eae7ff` tint) is the brand color. Headings and section titles use the deep **primary-0**; links/active states and primary CTA fill use **primary-1**; hover backgrounds use the **primary-2** tint.
- **Neutral gray ramp** 0→6 (dark to light) handles 90% of text + surface work. Page bg is pure white; alternate sections use `gray-6` (#f2f2f5).
- **Subject-accent pairs** (blue for 초등 논술, red for 중등 논술, green for 중등 국어) are used as `<color>-0` text on `<color>-1` fill — never alone as a flat fill color.
- **Orange `#fd5d0e`** is ONLY for error states and "생각 확장" callout labels.

### Typography
- **Pretendard** for everything — 9 weights, Korean + Latin. Two scales: `web-*` (h1-40 → c2-12) and `mobile-*` (h1-22 → c2-9). All letter-spacing tight at ≈ -0.2%.
- Headings use weights 700 **or** 300 (the light variants feel editorial); body settles at 400/500; small-bold emphasis at 600.
- `word-break: keep-all` is **global** for Korean layout.

### Imagery
- **Book covers** (from Korean publishers — 민음사, 창비, 비룡소…) are the dominant visual element in the real product, sitting on white or `gray-6` at 2:3 ratio with soft rounded corners. **Not included in this design system** — book cover imagery is domain content (managed in Supabase Storage), not a brand asset. Treat them as data, not decoration.
- **Hero banner** uses a full-bleed photograph with a semi-opaque `gray-40` overlay and white light headline on top.
- **3D "3dcon" icons** (idea, books, pen, puzzle, star, clock, magnifier…) are rendered PNGs with neutral lighting used as section decoration — shipped in `assets/3dcon/` because they're reused across home + about + the course-data layer.
- **Gradation PNGs** (primary/blue/red/green) are used as soft colored washes behind main link tiles — subtle, not glossy.
- No hand-drawn illustration, no patterns, no film grain. Photography is naturalistic, warm.

### Motion
- Page feels **still**. Transitions are short fades + linear translates (200–500ms). No bounce, no spring.
- Hover on tiles: `translateY(-16px)` lift (4 tailwind units). Hover on chips/buttons: swap to lavender `primary-2`. Active nav tabs animate an underline with `useTabIndicator`.
- Banner auto-advances at 10s. Korean tab card fades in with `fade-in` keyframe (20px up, 0.3s).

### Hover / press states
- **Tiles:** lift + colored shadow ring (`data-theme-border`: primary/blue/red/green at 40% alpha, `0 0 4px`). Border color also takes the 40% tint.
- **Buttons (primary):** `linear-gradient(0deg, rgba(49,46,52,.4), rgba(49,46,52,.4)) + primary-0` — i.e. darkens by 40% gray overlay.
- **Chips:** inactive white → `primary-2` lavender on hover; active `primary-1` bg with gray-6 text.
- **Icon buttons (nav, chevrons):** circle bg `primary-2` on hover; traffic-light-style no rotation.
- No scale-down press state. No ripple.

### Borders, shadows, radii
- **Radii:** 2 (badge) / 6 (input mobile) / 8 (card mobile) / 12 (card desktop, tile) / 16 (banner) / 9999 (chip, dot nav).
- **Borders:** 1px hairline `gray-5`; 0.667px on small mobile cards.
- **Shadows** are deliberately faint:
  - `0 0 1px rgba(49,46,52,.4)` hairline edge on chips/cards
  - `0 0 4px <accent-40>` hover focus ring
  - `0 0 20px rgba(0,0,0,.02)` whisper-soft card elevation
  - `0 1px 2px rgba(0,0,0,.05)` sticky top nav
- No inset shadows. No colored drop shadows.

### Transparency & blur
- Used only in three places: hero **`gray-40` scrim** over banner photos, mobile drawer **`black/50` overlay**, and **40%-alpha semantic colors** for hover focus rings. No backdrop-blur, no glassmorphism.

### Layout rules
- Everything centers in a **1140px** max container. Gutter 20px mobile, 0 desktop.
- Nav fixed top, 50 (mobile) / 70 (desktop) px tall, white with hairline shadow.
- Mobile menu slides from right, 310px wide, full height.
- Footer is a full-width `gray-6` band with logo + text links + legal text.

### Cards
- White fill, 1px `gray-5` border, 8–12px radius, no shadow by default; on hover get the 40%-alpha focus ring. Contents pad 16–24px.

## Iconography

**Three coexisting icon systems:**

1. **Flat SVG line icons** in `assets/*.svg` (e.g. `chevron-*`, `close`, `plus`, `menu`, `check`, `download`, `search`, `message-square`, `dot`, `dot4`). 24px canvas, 1.5–2px stroke, rounded caps. **Current**: use these via `<img src="assets/x.svg">` or inline — the full set is copied into `assets/`.
2. **3D rendered icons** in `assets/3dcon/*.png` — colorful 3D-look objects (idea lightbulb, books, pen, papers, star, puzzle, steps, arrow, clock, list, magnifier). Used as section decoration and in the `korean-tab` course-data layer.낯선 작품 보는 국어" section cards at ~64px. Never mix with flat SVGs in the same card.
3. **Brand/social logos** in `assets/logo/*.svg` — KakaoTalk, Naver, Naver Blog, YouTube. Also the core `assets/logo.svg` wordmark.

**No emoji. No Unicode icons. No icon font.** When an icon is missing, draw a 24×24 placeholder box with a thin border rather than inventing. All flat icons are currentColor-friendly (mostly `#312e34` / `#695189` — swap with CSS `filter` or replace fill as needed).

## Index / manifest

Root files:
- `README.md` — this file
- `colors_and_type.css` — tokens + Pretendard @font-face + `.web-*`/`.mobile-*` classes
- `SKILL.md` — skill front-matter for Claude-Code compatibility
- `fonts/` — 9 Pretendard woff2 weights
- `assets/` — logos, UI + 3D icons, gradation washes, status imagery
- `preview/` — Design-System-tab cards (colors, type, components, spacing, brand)
- `ui_kits/web/` — web product UI kit (React/JSX prototype)
- `ui_kits/mobile/` — mobile product UI kit (375×812 iOS frame)

## Caveats

- Book covers are **intentionally excluded** — they're domain content, not system assets (belong in Supabase Storage alongside the course data).
- Teacher photos likewise excluded — the Teachers tab uses placeholder skeletons.
- Admin screens, toast editor, and Supabase-wired flows from the codebase are intentionally skipped — this is a design kit, not a re-implementation.
