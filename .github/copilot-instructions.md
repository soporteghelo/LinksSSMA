# Copilot Instructions for AESA Document Portal

## Overview
This project is a Google Apps Script web portal for AESA's document management, optimized for low-resource devices. It integrates Google Sheets as a database, with a frontend built from modular HTML files and a backend in `Code.gs`.

## Architecture
- **Backend (`Code.gs`)**: Handles HTTP requests, reads from Google Sheets (`DB_DOCUMENTOS`), applies server-side caching (5 min), and filters documents by `ESTADO` ('Activo').
- **Frontend**:
  - `Index.html`: Main layout and entry point.
  - `Styles.html`: Tailwind CSS config, custom colors/fonts, and global styles.
  - `JavaScript.html`: Client logic, search debounce, lazy image loading, progressive rendering, and category grouping.
  - `Preview.html`: Likely used for document previews.
- **Data Source**: Google Sheet with strict column structure (see README.md for details).

## Key Patterns & Conventions
- **Server-side Caching**: Use `CacheService` in `Code.gs` to avoid quota limits and speed up responses.
- **Frontend Debounce**: All search/filter operations use debounce (300ms) to prevent DOM overload.
- **Lazy Loading**: Images are loaded as needed to save bandwidth and prevent mobile browser crashes.
- **Category Grouping**: Documents are grouped and sorted by `CATEGORIA` and `ORDEN` fields.
- **Graceful Degradation**: Animations and effects (e.g., lantern effect) are disabled on mobile for performance.
- **Strict Data Filtering**: Only documents with `ESTADO` = 'Activo' are shown; others are ignored.
- **Fallback Images**: If `LINK_FOTO` is missing, a generic image is used.
- **Security**: All HTML/text from Sheets is parsed with `DOMParser` to prevent XSS.

## Developer Workflows
- **Deployment**: Deploy as a Google Apps Script web app. See README.md for step-by-step instructions.
- **HTML Modularization**: Update HTML/CSS/JS by editing the corresponding `.html` files and re-deploying.
- **Debugging**: Use `Logger.log` in `Code.gs` for backend debugging; frontend uses `console.log`.
- **Data Updates**: Update the Google Sheet directly; changes are reflected after cache expiry or manual cache clear.

## Integration Points
- **Google Sheets**: All document data is sourced from the `DB_DOCUMENTOS` sheet.
- **External Images/PDFs**: URLs in `LINK_FOTO` and `LINK_INFORMACION` must be public and valid.
- **Tailwind CSS**: Custom theme via CDN and config in `Styles.html`.

## Examples
- **Filtering Active Documents**: See `getActiveData` in `Code.gs`.
- **Category Icons**: See `CATEGORY_ICONS` in `JavaScript.html`.
- **Debounced Search**: See `handleSearchDebounced` in `JavaScript.html`.

## References
- [README.md](README.md): Data structure, deployment, image guidelines, and best practices.
- [Code.gs](Code.gs): Backend logic and caching.
- [JavaScript.html](JavaScript.html): Client logic and UI patterns.
- [Styles.html](Styles.html): Tailwind config and custom styles.

---

If any section is unclear or missing, please specify which part needs more detail or examples.
