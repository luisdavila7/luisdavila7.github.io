# Changelog

All notable changes to this site are documented here. Format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/). The current version is also shown in the footer of every page.

## v0.2.0 — 2026-08-25

First cleanup/unification pass over the existing site.

### Fixed
- `index.html` was missing `lang` and `viewport`; both pages now have correct `<html lang="en">` and a responsive viewport meta tag.
- Removed the dead, commented-out slideshow `<script>` block from `index.html` and its matching unused CSS (`.slideshow-container`, `.mySlides`, `.prev`/`.next`, `.dots-container`, `.fade`, …) from `styles/styles.css`.
- Fixed malformed self-closing anchor tags in `curriculum.html` (`<a href="…"/>text</a>`) — now valid, explicit `<a>…</a>` markup.
- Fixed a broken CSS value: `.project { border-radius: px; }` → `border-radius: 8px;`.
- Fixed several CSS selectors that used a comma where a descendant selector was intended (e.g. `.contact-section-header, h2` unintentionally targeted every `h2`/`p`/`<i>` on the page instead of just the ones inside that component). Scoped them correctly: `#welcome-section p`, `.contact-section-header h2`, `.contact-section-header p`, `.contact-section p`, `.btn-show-all i`, `.site-footer p`.
- Fixed broken relative paths: stylesheets were linked as `../styles/…` from files that sit in the same directory as `styles/` (only "worked" by accident because the browser clamps `../` at the domain root); now `./styles/…`.
- Replaced a fragile fixed `margin-top: 500px` hack (used to push résumé content below the mobile nav) with a normal-flow layout, so the CV page no longer breaks if the nav's height changes.
- Added `rel="noopener noreferrer"` to every `target="_blank"` link (security/perf best practice).

### Added
- `styles/base.css`: shared design system (color variables, one body font + one display font, reset, shared nav/footer/button styles) used by both pages, replacing two independently-styled pages that looked unrelated.
- Meaningful `alt` text on every image (tech-stack icons and project screenshots) instead of missing/generic `alt="project"`.
- `<meta name="description">` and basic Open Graph tags on both pages.
- A favicon (`media/favicon.svg`).
- A footer with a version indicator (`Site v0.2.0 · Changelog`) on both pages — `curriculum.html` had no footer before.
- This changelog.

### Changed
- `curriculum.html` now shares the same dark color palette and fonts as `index.html` instead of using an unrelated light theme.
- Normalized the root font-size to a single `62.5%` (1rem = 10px) base shared by both pages, replacing conflicting/overriding root font-size rules across breakpoints.
- FontAwesome kit script now loads with `defer`.
- Google Fonts are now requested once per page via a single `<link>` (Permanent Marker + Raleway) instead of mixing a `<link>` on one page and an `@import` on the other.

## v0.1.0 — baseline

Pre-existing site before this cleanup pass: two independently-built pages (`index.html` dark landing page, `curriculum.html` light résumé page), no shared stylesheet, no version tracking.
