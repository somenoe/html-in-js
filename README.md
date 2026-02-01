# HTML in JS - VS Code Extension

> Forked from https://github.com/DeusCL/html-in-js

This extension enables HTML syntax highlighting inside JavaScript template literals when using the `/* HTML */` comment and enables Emmet abbreviations.

## Features

- HTML syntax highlighting in template literals
- Support for Emmet abbreviations
- Works in `.js` and `.html` files
- Support for JavaScript interpolation inside HTML (`${variable}`)
- Use the `/* HTML */` comment to enable Prettier formatting with [HTML Template Support](https://prettier.io/blog/2018/11/07/1.15.0.html#html-template-literal-in-javascript)
- Supports case-insensitive; e.g., `/*html*/`, `/* html */`, `/*HTML*/`, `/* HTML */`

## Usage

### In JavaScript files (.js)

```javascript
const element = /* HTML */ `
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
