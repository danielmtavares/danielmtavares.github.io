# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page personal portfolio site deployed via GitHub Pages with a custom domain (`daninthe.cloud`). No build system, no package manager, no tests — edits go directly to source files and deploy on push.

## Key Files

- `index.html` — all page content and structure
- `styles.css` — global styles and responsive breakpoints (768px, 480px)
- `script.js` — `RandomTextEffect` class that rotates professional titles (uses `id="randomText"` in HTML)
- `img/` — image assets
- `CNAME` — custom domain config for GitHub Pages

## Local Preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Conventions

- No build tools, bundlers, or Node tooling. Don't introduce them without justification.
- Keep styles in `styles.css`; avoid inline styles.
- JavaScript is plain ES6. Add code to `script.js` or a new small script file included in `index.html`.
- DOM coupling: scripts reference element ids/classes from `index.html` (e.g., `id="randomText"`). Update both HTML and JS when renaming identifiers.
- Prefer semantic HTML over helper classes.
- Keep new scripts small and dependency-free.

## External Dependencies

- Google Fonts (Inter) loaded in `index.html`
- Simple Analytics (`simpleanalyticscdn.com`)
- Embedded YouTube iframes and third-party image URLs for project screenshots and social icons

## Common Edits

- **Rotating titles**: edit the `professionalTitles` array in `script.js`
- **Timeline entry**: add HTML in the `timeline` section of `index.html`, place logos in `img/`
- **Profile image**: replace `img/me.jpeg` or update the path in `index.html`
