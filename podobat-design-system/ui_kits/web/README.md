# Podobat Web UI Kit

React/JSX recreation of the podobat.com marketing site. Pixel-faithful to `vineyard-web-main`.

## Components
- `Nav.jsx` — sticky white header with dropdown menus (학원 소개, 수업 안내, 공지사항)
- `Banner.jsx` — full-width hero carousel with photo + gray-40 scrim + light headline
- `MainLinks.jsx` — 4-up gradation tile grid (학원 소개, 초등 논술, 중등 논술, 중등 국어)
- `Board.jsx` — notices/opening list with tabs
- `EduMethod.jsx` — "개념 따라 낯선 작품 보는 국어" 3D-icon feature cards
- `CourseCard.jsx` — book-cover curriculum card
- `Footer.jsx` — gray-6 footer with logo + legal

## Screens (click-thru in index.html)
1. **Home** — banner → links → notices → edu-method → course preview → footer
2. **About** — tabbed: 교육 철학 / 교육 방법 / 선생님 소개
3. **Courses** — tabbed: 초등 논술 / 중등 논술 / 중등 국어 — curriculum cards (no book grid; book data is domain content managed server-side)
4. **Notices** — tab filter + list table

Open `index.html` to navigate.
