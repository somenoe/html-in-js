# HTML in JS - VS Code Extension

> Forked from https://github.com/DeusCL/html-in-js

This extension enables HTML syntax highlighting inside JavaScript template literals when using the `/*html*/` comment (case-insensitive: `/*html*/`, `/* html */`, `/*HTML*/`, `/* HTML */`, etc.) and enables Emmet abbreviations.

## Features

- HTML syntax highlighting in template literals
- Support for Emmet abbreviations
- Works in `.js` and `.html` files
- Support for JavaScript interpolation inside HTML (`${variable}`)

## Usage

### In JavaScript files (.js)

```javascript
const element = /*html*/ `
  <div class="container">
    <h1>Hello World</h1>
    <p>This text is highlighted as HTML</p>
  </div>
`;

// Also works with uppercase and spaces:
const element2 = /* HTML */ `
  <div class="container">
    <h1>Hello World</h1>
    <p>This text is also highlighted as HTML</p>
  </div>
`;
```

### In HTML files with script tags

```html
<script type="module">
  const element = /* HTML */ `
    <div class="container">
      <h1>Hello World</h1>
      <p>This text is highlighted as HTML</p>
    </div>
  `;
</script>
```

In order to see emmet abbreviation suggestions you must have to setup the `<script>` tag as `<script type="module">`.

### Using `${variables}` inside the `/* HTML */` template literal

```html
<script type="module">
  const Component = (title, text, class="container") = /* HTML */ `
    <div class="${class}">
      <h1>${title}</h1>
      <p>${text}</p>
    </div>
  `;

  document.body.innerHTML += Component("Hello World", "This text is highlighted as HTML");
</script>
```

## Configuration

The extension supports various formats of the HTML comment:

- `/*html*/` (lowercase, no spaces)
- `/* html */` (lowercase with spaces)
- `/*HTML*/` (uppercase, no spaces)
- `/* HTML */` (uppercase with spaces)
- Any combination with different spacing

All variations are case-insensitive and will work automatically.

## Notes

- The extension automatically detects the HTML comment before template literals (case-insensitive)
- Highlighting works in both `.js` files and inside `<script>` tags in `.html` files
- Emmet is automatically activated when you're typing inside these template literals
