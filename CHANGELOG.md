# Changelog

All notable changes to this site are documented here. Format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/). The current version is also shown in the footer of every page.

## v1.1.0 — 2026-08-26

### Fixed
- Mobile nav bug: the fixed top nav on `index.html` wrapped across multiple lines on narrow phones (brand + 5 links), growing taller than the hero's fixed top padding and covering the eyebrow/name text. Root cause fixed, not padded around: the link list now collapses behind a hamburger toggle below 61.25em instead of wrapping.

### Added
- `scripts/main.js` — the site's first JavaScript, written as progressive enhancement (everything stays fully visible/usable with JS off):
  - CSS-only hamburger menu (checkbox pattern, no JS dependency for the toggle itself) replacing the wrapping mobile link list on both `index.html`'s top nav and `curriculum.html`'s sidebar nav.
  - Subtle nav shadow once the page is scrolled.
  - Scroll-reveal fade/rise-in for highlights, project cards (staggered), and the contact section, via `IntersectionObserver`.
- Soft radial-gradient glow behind the hero name (`#welcome-section::before`), replacing the flat background.
- Grayscale-by-default / full-color-on-hover treatment on project screenshots, so six visually unrelated images read as one curated set.

### Changed
- Hero name size increased (6.4rem → 8rem) with tighter line-height for a more confident, less "safe" hero.
- `curriculum.html`'s mobile nav also collapses behind the same hamburger pattern instead of stacking all 8 links inline above the résumé.

## v1.0.0 — 2026-08-25

Full visual redesign — the site's first "real" design system, replacing the original dark-navy/orange template look with an elegant, minimalist white/gray system. Content is unchanged; this is a visual-only pass.

### Changed
- New color palette across both pages: warm off-white background (`--paper`), white surfaces, near-black ink text, slate-gray muted text, hairline gray borders, and a single deep slate-navy accent (`--accent`) used sparingly for links, buttons, and highlight numbers — replacing the dark navy background and orange/red accent.
- New typography: **Space Grotesk** for headings/display text and **Inter** for body text, replacing the handwritten "Permanent Marker" display font and Raleway/Source Code Pro mix.
- `index.html` hero rebuilt: small uppercase "eyebrow" role label, the name itself as the large display heading (replacing "Welcome, I'm Luis"), two new call-to-action buttons ("View Résumé", "Contact Me"), and a minimal top nav (transparent/blurred hairline bar with a name brand mark) replacing the filled dark nav bar.
- Tech-stack row: replaced the 10 colorful logo images with minimal monochrome text chips (same technology list) — the raw logo colors clashed with the new light palette.
- Projects grid restyled as white hairline-bordered cards with hover lift/shadow and a small arrow-on-hover affordance; dropped the decorative `<...>` code-bracket styling around project titles.
- Highlights section, contact links, and footer restyled to match (pill-style outlined buttons, hairline dividers between stat columns on desktop).
- `curriculum.html` restyled to the same system: white sidebar with a hairline border instead of a filled dark panel, refined section spacing and typography hierarchy; also wrapped the Skills list items in a proper `<ul>` (previously bare `<li>` elements with no list container).
- `media/favicon.svg` recolored to match the new palette.

## v0.5.0 — 2026-08-25

Reframed the homepage around the new Product Owner / IT PM positioning introduced in v0.4.0.

### Added
- New "Highlights" section on `index.html` between the hero and the projects grid: four stat callouts pulled from the résumé (POS rollout scale, PMO budgets managed, AI agent adoption, years of experience), giving PM/product proof points top billing instead of only code repos. Added a matching "Highlights" nav link.
- A caption line above the tech-icon row ("Engineering roots that inform every product decision") so the language icons read as supporting evidence of technical depth rather than a mismatched "this is my day job."

### Changed
- Projects section header retitled from "This is my portfolio of projects" to "Engineering projects that keep my technical edge sharp," framing it as supporting evidence rather than the main pitch.

## v0.4.0 — 2026-08-25

Content update to `index.html`'s hero section, aligning it with the new role positioning introduced in v0.3.0.

### Changed
- Replaced the hero summary paragraph (previously "Computer Systems Engineering and Programmer-Analyst...") with a concise Product Owner / IT Project Manager positioning statement.
- Added a new role tagline line ("Product Owner · IT Implementation Lead · IT Project Manager") under the hero heading, styled via new `#role-tagline` rule in `styles/styles.css`.
- Updated `<title>`, meta description, and Open Graph tags on `index.html` to match the new positioning.

## v0.3.0 — 2026-08-25

Content update to `curriculum.html`, brought up to date with the current LinkedIn profile.

### Changed
- Headline, professional summary, and Languages proficiency levels updated.
- Work Experience section fully replaced with the current role history (Aramark Canada, Tecsys Inc., Universidad del Sinú, Cámara de Comercio de Cartagena, Massy Energy, CB&I, SIIR Group), in reverse-chronological order.
- Education: LaSalle AEC entry updated from in-progress to completed (2021–2023); institution names normalized.
- Certifications list replaced.
- Removed the exact street address from the public page, replaced with city/province only, now that the repository is public.
- Added `.gitignore` (`.claude/`, `*.pdf`) so personal source documents used to prepare content updates are never committed.

## v0.2.1 — 2026-08-25

Fixed image sizing/positioning bugs across the site.

### Fixed
- Tech-icon row (`#icon-tecnologies` / `.icon-profile`): the responsive breakpoints set each icon's width to 60%/58%/55% of the row, which meant only one giant icon fit per row on almost any screen ≤1200px wide (most laptops/tablets/phones) instead of a neat row of 10. Replaced with fixed sizes (6rem desktop, down to 4rem on mobile) and `object-fit: contain` so icons with different aspect ratios (square logos vs. the wide Node.js wordmark) render consistently, and switched the row to `justify-content: center` with a `gap` so it wraps cleanly at any width.
- Project screenshots (`.project-image`): `height: calc(100% - 6.8rem)` was computed against `.project`, which has no explicit height — so the rule silently did nothing and each screenshot rendered at its own natural aspect ratio, leaving the "Razor API - Movie Rate" card visibly shorter than the rest. Replaced with a fixed height (`20rem`, `18rem` on the smallest breakpoint) so `object-fit: cover` actually crops every screenshot to the same size and the grid lines up.

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
