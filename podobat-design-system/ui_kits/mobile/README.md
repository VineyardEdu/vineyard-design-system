# Podobat Mobile UI Kit

React/JSX recreation of the podobat.com **mobile** experience. Matches the `md:hidden` branches in `vineyard-web-main`.

Frames the design inside an iOS device bezel at 375×812. Touch nav, sticky top bar, drawer-from-right at 310px.

## Components
- `MobileFrame.jsx` — iOS frame wrapper with status bar + safe areas
- `MobileNav.jsx` — 50px top bar with hamburger → opens drawer
- `MobileDrawer.jsx` — slide-in right drawer (310px wide, black/50 scrim)
- `MobileBanner.jsx` — full-bleed hero, smaller type
- `MobileLinks.jsx` — 2×2 link tile grid with gradation backgrounds
- `MobileBoard.jsx` — swipe-tab board preview (home)
- `MobileEduMethod.jsx` — 3D-icon feature cards (home)
- `MobileAbout.jsx` — 4 tabs: 교육 철학 / 교육 방법 / 선생님 / 찾아오기
- `MobileCourses.jsx` — 4 tabs: 전체 / 초등 논술 / 중등 논술 / 중등 국어 — curriculum cards
- `MobileNotices.jsx` — 3-tab notice list
- `MobileFooter.jsx` — collapsible info footer

## Screens
Open `index.html` — navigate via the hamburger → drawer accordion to Home / About / Courses / Notices. Route is persisted via localStorage.
