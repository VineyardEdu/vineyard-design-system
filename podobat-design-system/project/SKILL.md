---
name: podobat-design
description: Use this skill to generate well-branded interfaces and assets for 포도밭 국어논술 (Podobat Korean-Language & Writing Academy), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key files:
- `README.md` — brand context, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — Pretendard @font-face + all color/type/radius/shadow/spacing tokens
- `fonts/` — 9 Pretendard woff2 weights (100–900)
- `assets/` — logo, flat SVG icons, 3D PNG icons, book covers, teacher photos, gradation washes
- `ui_kits/web/` — React/JSX recreation of podobat.com (home, about, courses, notices)
- `preview/` — per-token design-system cards (colors, type, spacing, components, brand)

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Link `colors_and_type.css` at the top of every file — everything else hangs off those tokens.

If working on production code, read the rules here to become an expert in designing with this brand: violet primary + subject-themed pairs, Pretendard only, `word-break: keep-all` for Korean layout, faint hairline shadows, no emoji, no gradient buttons except the gray-40-overlay hover state on `primary-0`.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience: elementary vs middle-school parents? surface: web vs mobile? tone: marketing headline vs notice copy?), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
