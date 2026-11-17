# Changelog

All notable changes to this site are documented here. Format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/). The current version is also shown in the footer of every page.

## v2.1.1 — 2026-11-17

### Changed
- **Hero intro (`index.html`):** Explicitly foregrounded `Computer Science Engineer` at the start of `#welcome-profile`.
- **Capability Card 04 (`index.html`):** Updated the AI-first bullet to reflect designing AI-powered tools and business applications for operational challenges, and added `Aramark Canada` alongside `Collège LaSalle AEC · Systems Engineering`.
- Bumped `.site-version` to `v2.1.1` on both `index.html` and `curriculum.html`.

## v2.1.0 — 2026-11-17

### Changed
- **Translated Spanish employer names to English (`index.html`, `curriculum.html`):** Standardized `Universidad del Sinú` → `University of Sinú`, `Cámara de Comercio de Cartagena` → `Cartagena Chamber of Commerce`, and `Massy Energy Colombia S.A.S.` → `Massy Energy Colombia`.
- **Reordered spoken languages (`index.html`, `curriculum.html`):** Updated display order to `English · French · Spanish` (`EN · FR · ES` in the metrics strip, and `English, French, Spanish` in `curriculum.html`).
- **On-demand coding projects (`index.html`, `styles/main.css`):** Placed the 7 coding project cards inside a native HTML `<details>` disclosure collapsed by default behind a **"See my repository"** button directly below the languages/tools chip row, so technical screenshots don't dominate the initial scroll.
- **Restyled Organizations strip (`index.html`, `styles/main.css`):** Replaced the larger serif wordmarks with compact Inter sans-serif pill tags (`1.25rem`) under an `Organizations & Institutions` label.
- **Visual differentiation touches (`index.html`, `styles/main.css`):** Added a cerulean left accent rule on the hero intro and offset slate backdrop on the portrait, updated Capabilities cards to `01 /`–`04 /` numbered labels with icons and a top hover bar, and added domain/stack tags to Selected Roles cards.
- Bumped `.site-version` to `v2.1.0` in both pages.

## v2.0.0 — 2026-11-17

Major visual and structural redesign across both `index.html` and `curriculum.html`, adopting a cool navy, ice-slate, and cerulean editorial theme.

### Added
- `media/luis-davila-portrait.jpg`: LinkedIn studio portrait added to the Hero (`4:5` rounded editorial frame) on `index.html` and the résumé header on `curriculum.html`.
- New "Capabilities" section (`#capabilities`) on `index.html`: 2×2 editorial grid (Card A featured in deep navy `#143a5c`, Cards B–D in crisp white) summarizing Product Ownership, IT Implementation, PMO & Project Control, and AI-First / Engineering Roots.
- New "Experience" authority section (`#experience`) on `index.html`: 4 key metrics, 4 role highlight cards (Aramark Canada, Tecsys Inc., PMO & Product Manager roles, CB&I & Massy Energy Reficar), and an organization wordmark strip linking to `curriculum.html`.
- New "Process" section (`#process`) on `index.html`: full-bleed deep navy 5-step delivery workflow (`01 Listen & Align` through `05 Launch & Adopt`).
- Editorial 3-column footer on `index.html` with navigation, credentials, and connect links.

### Changed
- **Color palette (`styles/main.css` & `media/favicon.svg`):** Replaced the warm off-white/slate-navy theme with `#ffffff` (`--paper`), `#edf1f5` (`--cream` alternating bands), `#143a5c` (`--ink`), `#1f6e8c` (`--accent`), `#a9cedf` (`--accent-soft`), `#44596e` (`--muted`), and `#d8e0e8` (`--line`).
- **Typography:** Switched display font from Space Grotesk to **Fraunces** (light/italic editorial serif) paired with **Inter** for body copy and tracked uppercase eyebrows.
- **Sticky nav (`index.html`):** Updated with a two-tone `Luis Davila` wordmark and a `LET'S TALK` pill CTA while keeping the CSS-only accessible mobile toggle.
- **`curriculum.html`:** Aligned the sidebar nav, résumé hero, and bullet lists (`.resume-bullets`) with the new Fraunces + Inter navy/ice-slate system, and bumped `.site-version` to `v2.0.0` on both pages.

## v1.3.1 — 2026-08-28

### Fixed
- Project screenshot thumbnails (`.project-image`) were visibly cropped. Root cause: the thumbnail box is a wide ~2:1 frame (`height: 18rem`, `width: 100%`), but every screenshot is near-square to mildly landscape (0.96–1.47 ratio); `object-fit: cover` scaled each image to fill that wide box, cropping the top/bottom heavily. Switched to `object-fit: contain` with a `var(--paper)` fill behind the image, so the full screenshot is always visible — any mismatch between a screenshot's ratio and the frame now shows as a subtle neutral margin instead of lost content.

## v1.3.0 — 2026-08-28

### Added
- New "Delivery Certification Simulator" project card on `index.html`, added first in the grid (newest-first ordering). It's the first project card with two destinations instead of one: the screenshot opens the [live Vercel app](https://deliverycertificationsimulator.vercel.app/), and a small GitHub icon next to the title opens the [source repo](https://github.com/luisdavila7/Delivery_Cert_Simulator) separately.
- New reusable `.project-dual` / `.project-media-link` / `.project-footer` / `.project-repo-link` styles in `styles/main.css` for this dual-link pattern, since nested `<a>` tags aren't valid HTML — the card is a `<div class="project">` with two independent anchors instead of one wrapping `<a>`. Existing single-link project cards are untouched.

## v1.2.0 — 2026-08-26

### Fixed
- **Highlights and Projects sections were invisible.** Root cause: v1.1.0's scroll-reveal system hid `.reveal` elements at `opacity:0` the instant JS ran, and relied entirely on an `IntersectionObserver` callback to ever reveal them again — a fragile "hidden until something else succeeds" pattern. Removed it outright rather than patching it: content is now simply always visible, no JS-gated hidden state, so this class of bug can't recur. The hamburger nav, nav-scroll shadow, bold hero, and grayscale-hover project images from v1.1.0 are unaffected and unchanged.
- Mobile nav toggle was unreachable by keyboard (the checkbox was `display:none`, which removes it from the tab order entirely). Now visually hidden instead (off-screen, not display:none), so it's still focusable and operable via Tab + Space, with a visible focus ring and `aria-expanded`/`aria-controls` kept in sync via `scripts/main.js`.

### Changed — architecture cleanup
- **Unified `styles/base.css` + `styles/styles.css` + `styles/stylecv.css` into a single `styles/main.css`.** While merging, found and fixed a real landmine: both pages used `id="navbar"` for two structurally different nav components (index's top bar vs. curriculum's sidebar), which would have collided in one shared file. Fixed by driving curriculum's nav from a `.nav-sidebar` class instead of the id.
- Removed `_config.yml` (set an unused `jekyll-theme-tactile` theme — neither page has Jekyll front matter, so it was never actually applied) and added `.nojekyll` so GitHub Pages serves the site as plain static files instead of running it through an unnecessary Jekyll build.
- Deleted 24 unused files from `media/`: the 8 tech-logo icons made obsolete by the v1.0.0 chip redesign, plus 16 files (old alternate logos, a few completely unrelated leftover images) that were never referenced by any version of this site. Kept only the 7 files actually in use.
- Removed the dead `project-tile` class (never had a matching CSS rule) from the 6 project cards on `index.html`.

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
