# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static website for Pizzeria San Michele, located in San Michele di Feletto, Treviso, Italy. No build step, no package manager — open `index.html` directly in a browser or use any static file server (e.g. `npx serve .`).

## Architecture

Four files make up the entire site:

- **`index.html`** — all markup and content. Sections in order: nav, hero, philosophy, spaces, menu (accordion: specialità + classiche), desserts, footer.
- **`styles.css`** — all styles, single file with no preprocessor. Sections are commented (NAV, HERO, SHARED, PHILOSOPHY, SPACES, MENU, DESSERTS, FOOTER, ANIMATE, RESPONSIVE).
- **`translations.js`** — exports a `translations` object with keys `it`, `en`, `de`. Each key maps i18n string IDs to translated text.
- **`scripts.js`** — runtime JS only. Handles: i18n (`applyLanguage`), nav scroll class, IntersectionObserver for `.reveal` animations, accordion expand/collapse.

## Internationalisation

Text in `index.html` is **not** hardcoded — it uses `data-i18n`, `data-i18n-html` (for HTML content like `<br>/<em>`), and `data-i18n-aria` attributes. `scripts.js` reads `translations.js` and populates them at runtime. Language is detected from `localStorage` → `navigator.language` → defaults to `it`.

When adding or changing copy, update **all three languages** (`it`, `en`, `de`) in `translations.js`, and use the appropriate `data-i18n*` attribute in the HTML rather than writing text directly.

## Images

All images live in `images/`. The `favicon.svg` is used in the nav logo. The wordmark SVG (the full Pizzeria San Michele logotype) is inlined in `index.html` inside `.hero-brand`.

## Pending work (todos.txt)

- Opening hours and address need more visual prominence
- Indoor photos still needed; note that the terrace is summer-only
- Search `@todo` in code for inline markers
- Various SEO/structured-data text still placeholder
- Responsiveness and SEO audit pending
- Possible video/reels section (Instagram source)
- Possible reviews section
