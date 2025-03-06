## Goal

- A Library React-based Single Page Application (SPA) using Vite.
- The web app should appear "complete":
  - No fake screens/views/pages.
  - No placeholder text (e.g., "Lorem ipsum").
  - Appropriately designed visuals.
- The web app must include certain required and optional features (see below).
- The web app will be tested with:
  - `npm install` (once per project).
  - `npm run build`.
  - `npx -s serve dist`.
  - The app must function properly under this setup, not just when using `npm run dev`.

### Additional Notes

- Vite's default `.gitignore` excludes the `dist/` directory. Maintain this default behavior.

## Functionality

- The SPA must have multiple "pages" that replace most or all of the main content.
  - Navigation and branding can remain consistent between pages.
  - At least 3 pages are required, though more may be included to demonstrate features.
- A navigation system must allow users to move between pages without relying on the browser's "Back" button or refreshing the page.
- At least one form with validation must be included.
  - Some forms may not require validation, but at least one must enforce input restrictions.
- A `<title>` tag must accurately describe the application.

## Maintainability

- CSS class names should be semantically descriptive and follow kebab-case or BEM conventions.
- Avoid CSS Modules, styled-components, or similar methodologies; use standard `.css` files.
- CSS should be structured into multiple files, with organization that makes it easy to locate styles for specific elements.
- CSS selectors should primarily target classes, except for global defaults or uniquely identified elements (e.g., `#root`).
- React components must be in `.jsx` files, with filenames matching component names (MixedCase).
- JavaScript files not using JSX should have a `.js` extension.
- All `.jsx` and `.css` files should be consistently indented.
- While grading will be done in Chrome, avoid using CSS/JS features unsupported by major modern browsers.

## Legalities

- All external images and CSS must be stored in the repository; do not hotlink.
- Include an `images.txt` file listing image sources and their licenses.
  - Acceptable sources: [Unsplash](http://unsplash.com), [Placekitten](http://placekitten.com), or personally owned images.
  - Placekitten images should only be used when thematically appropriate.
- External code is generally prohibited, except for `css.gg`, which must be properly credited.

## Visual Design

- The app should have a cohesive and identifiable color palette.
- Different sections should have clear visual distinctions with appropriate whitespace and boundaries.
- The app should feel "complete":
  - No placeholder text or images.
  - No broken or non-existent links (except for social media placeholders).
  - Content must align with user expectations.

## Responsive & Adaptive Behavior

- The application must be readable and clear at viewport sizes between 360px and 1200px.
- At least one adaptive breakpoint should be implemented.

## Accessibility

- Use semantic HTML elements when applicable:
  - `<a>` for navigation.
  - `<button>` for interactive controls.
- Implement appropriate landmark elements (`<header>`, `<footer>`, `<main>`, `<nav>`).
- Headings (`<h1>`, `<h2>`, etc.) must follow a logical order without skipping levels.
- All foreground images must have meaningful `alt` attributes.
- Background images should not convey essential information.
- Font sizes should be in `rem` units, with a minimum of `0.75rem`.
- The app must remain readable when zoomed up to 200%.
- All interactive elements must be keyboard-accessible.
- A working skip link must be present to allow keyboard users to navigate directly to the main content.
- The design must meet WCAG AA contrast standards.
- Link text should be descriptive (avoid "click here").
- All form fields must have properly associated `<label>` elements.
- No information should be conveyed by color alone.
- No content should auto-rotate or auto-advance.
- Any animations should respect `prefers-reduced-motion` settings.

## Optional Features

- Dropdown navigation menu (triggered by click or hover/focus).
- Adaptive "hamburger menu" (shown at smaller viewports, replaced by a standard menu at larger viewports).
- Accordions or tabs (content is shown/hidden based on user interaction, with accessible markup).
- Theme selection (light/dark mode, applied across all pages).
- Cards or panels grouping images and text with notable styling.
- Image carousel (not recommended for UX but included as an option).
- A filterable/sortable gallery of items (at least one dynamic behavior: filter, sort, or another change in displayed items).
- A "complex" form interaction, such as:
  - A conditional input field appearing based on dropdown selection.
  - A "same as shipping address" checkbox autofilling the billing address fields.
  - A dependent dropdown where selecting a value in the first affects the available options in the second.
- A modal form that updates displayed data in the app.
  - The modal should be implemented using the `<dialog>` element.
  - The form must update application state, with visible effects outside the modal.

## Additional Requirements & Restrictions

- Enhancements to UI/UX that demonstrate an advanced understanding of design.
- Avoid HTML-based form validation (e.g., `type="email"` should be `type="text"`).
- Avoid using `float` except for text-wrapped images.
- Tables should only be used for tabular data.
- No CSS preprocessors (SASS, Less, etc.).
- No external CSS files (except for web fonts and `css.gg` icons, with attribution).
- Images must be from approved sources and documented in `images.txt`.
- No external JS libraries (e.g., `react-router`, component libraries).
- No use of `alert()`, `prompt()`, or blocking JavaScript.
- No redirects or client-side storage (`localStorage`, `sessionStorage`, cookies, etc.).
- No direct DOM manipulation outside of React state management.
- No reading the DOM outside of event handling (e.g., `event.target.value` for form inputs).

## React + Vite

This template provides a minimal setup for using React with Vite, including HMR and ESLint rules.
Currently available official plugins:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) (Babel-based Fast Refresh)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) (SWC-based Fast Refresh)

© Muyun Ji. Confidential and Proprietary. All Rights Reserved.


