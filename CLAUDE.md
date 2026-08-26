# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Luis Davila's personal portfolio + résumé: a static site with no build step, deployed via GitHub Pages at https://luisdavila7.github.io/. Two HTML pages, one shared stylesheet, one shared script.

## Commands

None. No package manager, no build/lint/test tooling — plain HTML/CSS/JS served as-is (`.nojekyll` at the root also skips GitHub Pages' Jekyll build). "Testing" a change means opening `index.html` / `curriculum.html` directly in a browser and checking the breakpoints listed below.

## Structure

- `index.html` — landing page (hero, highlights, projects, contact)
- `curriculum.html` — résumé/CV page
- `styles/main.css` — the **only** stylesheet, shared by both pages
- `scripts/main.js` — the **only** script, shared by both pages, strictly progressive enhancement
- `media/` — keep only files actually referenced by the two HTML pages; delete anything that stops being referenced
- `CHANGELOG.md` — every shipped change is logged here with a version number; the footer of both pages shows the current version (`.site-version`)

## Design system (`styles/main.css`)

- Palette: `--paper` (page bg), `--surface` (cards), `--ink` (text), `--muted` (secondary text), `--line` (hairline borders), `--accent` (one restrained slate-navy accent — deliberately not multiple colors).
- Type: Space Grotesk (`--font-display`, headings) + Inter (`--font-body`, everything else).
- Base font-size is `62.5%` (1rem = 10px).
- One file serves both pages: sections are comment-marked as shared / `index.html`-only / `curriculum.html`-only. Both pages' `<nav>` use `id="navbar"`, but they're **structurally different components** — index's top bar is styled via `.nav`, curriculum's sidebar via `.nav-sidebar`. Style by class, never by `#navbar` — the id is shared across pages, the classes are not.
- Mobile nav is a CSS-only checkbox/label hamburger (`.nav-toggle-checkbox` + `.nav-toggle-label`), not JS-driven open/close. The checkbox is visually hidden (off-screen, not `display:none`) so it stays keyboard-focusable.
- Breakpoints in use — reuse these rather than inventing new ones: `28.75em` (mobile), `30.625em`, `61.25em`/`980px` (nav hamburger switch on `index.html`), `75em`, and curriculum's `815px`/`400px` sidebar breakpoints.

## Working rules for this project

- Reply to the user in English regardless of the language they write in.
- Never edit files without first describing the plan and getting explicit approval — every round, not just the first one.
- Every shipped change gets a `CHANGELOG.md` entry and a version bump in **both** pages' `.site-version` footer line (kept in sync manually — there's no templating/build step).
- `.gitignore` excludes `.claude/` and `*.pdf` — personal source documents (résumé exports, etc.) used to prepare content updates must never be committed.
- Local git identity for this repo (not `--global`): `Luis Davila <78238334+luisdavila7@users.noreply.github.com>`, matching the existing commit history.

## Lessons from past bugs — don't repeat these

- **Never hide content pending a JS action.** A scroll-reveal effect once set `opacity:0` on sections until an `IntersectionObserver` callback fired; when that callback didn't run as expected, whole sections went permanently invisible. Content must always be visible by default — JS may only *add* effects, never gate visibility.
- **Watch CSS specificity when a shared utility class and a page-specific class touch the same property on the same element** (e.g. a generic reveal-style `transform` fighting a specific `:hover` `transform`). If a similar pattern is ever reintroduced, give each concrete element its own complete `transition`/property declaration rather than relying on one shared high-specificity rule.
- The `id="navbar"` collision above is why curriculum's sidebar nav is styled via `.nav-sidebar`, not the id — if a new nav-like component is ever added, give it its own class rather than reusing `#navbar`.

## Content notes

- `curriculum.html`'s résumé content is sourced from Luis's LinkedIn export. When it needs updating again, ask for an updated PDF/text rather than assuming — don't invent employment history, dates, or certifications.
- Site positioning is Product Owner / IT Implementation Lead / IT Project Manager (not "Programmer-Analyst" — that was the pre-2026 framing). Keep `index.html`'s hero and `curriculum.html`'s headline consistent with each other.
