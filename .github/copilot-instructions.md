## Purpose
This repository is a small static personal website (HTML/CSS/JS) hosted as a GitHub Pages site (CNAME present). The goal of these instructions is to get an AI coding agent productive quickly when editing, previewing, or extending this site.

## Big picture
- Single-page static site: the site root is `index.html` and the UI is styled in `styles.css`.
- Lightweight client behavior is in `script.js` (the `RandomTextEffect` class controls the rotating title text).
- Static assets live in the `img/` folder. A `CNAME` file indicates a custom domain deployed with GitHub Pages.

## Key files
- [index.html](index.html): main content and structure.
- [styles.css](styles.css): global styles and responsive rules.
- [script.js](script.js): small client scripts; see the `professionalTitles` array for rotating titles.
- `img/`: image assets referenced from HTML.

## Project-specific patterns and conventions
- No build system or package manager: edits are applied directly to source files and deployed by pushing to the repository.
- Keep visual/layout changes in `styles.css` (avoid adding inline styles unless very small).
- JavaScript is plain ES6 — add code to `script.js` or create a short new script file and include it in `index.html`.
- DOM coupling: scripts rely on element ids/classes from `index.html` (e.g., the rotating title uses `id="randomText"`). Update both HTML and JS when renaming identifiers.

## How to preview locally
1. From the repository root run a simple HTTP server (macOS):

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

2. Confirm `index.html` loads and script behavior works (check DevTools console for errors).

## Deployment notes
- `CNAME` is present — this repo is configured for GitHub Pages with a custom domain. Deployment is through GitHub (push/PR to the branch the Pages site is configured to serve).

## External integrations to be aware of
- Google Fonts (in `index.html`): network-dependent typography.
- Simple Analytics (`https://scripts.simpleanalyticscdn.com/latest.js`) — privacy-first analytics loaded in the page.
- Embedded YouTube iframe(s) and many third-party image URLs — these are external and may affect privacy or load performance.

## Editing examples (quick, concrete)
- Change the rotating titles: edit the `professionalTitles` array in `script.js`.
- Add a new timeline entry: edit the HTML in the `timeline` section of `index.html` and place new images in `img/`.
- Replace profile image: swap `img/me.jpeg` and keep filename consistent or update `index.html` to the new path.

## Safety and styling guidance for PRs
- Keep changes focused and minimal for cosmetic edits (one visual change per PR).
- Prefer semantic HTML changes in `index.html` over adding many helper classes.
- If adding a script, keep it small and dependency-free; document intent at the top of new JS files.

## What this repo does NOT have (so don't assume)
- No Node tooling, bundlers, or tests in the repo. Don't introduce large build chains without justification.

If anything here is unclear or you want more examples (component snippets, suggested local dev scripts, or a tiny pre-flight checklist for PRs), tell me which part to expand. 
