// Basic HTML in JS Examples
//
// Demonstrates the fundamental usage of HTML syntax highlighting
// inside JavaScript template literals using the /*html*/ comment.
//
// All variations of the HTML comment work:
// - /*html*/  (lowercase, no spaces)
// - /* html */ (lowercase with spaces)
// - /*HTML*/  (uppercase, no spaces)
// - /* HTML */ (uppercase with spaces)

// Example 1: Basic HTML structure with lowercase comment
const basicElement = /*html*/ `
  <div class="card">
    <h1>Welcome to HTML in JS</h1>
    <p>This HTML is properly highlighted in your editor.</p>
  </div>
`;

// Example 2: HTML with spaces in comment
const cardWithImage = /* html */ `
  <div class="card">
    <img src="avatar.png" alt="User Avatar" />
    <h2>User Profile</h2>
    <p class="bio">A passionate developer</p>
    <span class="badge">Active</span>
  </div>
`;

// Example 3: Uppercase comment variant
const formElement = /*HTML*/ `
  <form class="login-form">
    <fieldset>
      <legend>Sign In</legend>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Sign In</button>
    </fieldset>
  </form>
`;

// Example 4: Complex nested structures
const navigationMenu = /* HTML */ `
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a href="/" class="logo">Logo</a>
      </div>
      <ul class="navbar-menu">
        <li><a href="/home" class="active">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </nav>
`;

// Example 5: HTML with semantic elements
const articleLayout = /*html*/ `
  <article class="post">
    <header>
      <h1>Understanding Template Literals</h1>
      <time datetime="2026-02-01">February 1, 2026</time>
      <p class="author">By John Doe</p>
    </header>
    <section class="content">
      <p>Template literals are a powerful feature...</p>
      <blockquote cite="https://example.com">
        This is an important quote.
      </blockquote>
    </section>
    <footer>
      <p>Tags: <span class="tag">javascript</span> <span class="tag">html</span></p>
    </footer>
  </article>
`;

// Example 6: HTML table with accessibility features
const dataTable = /* html */ `
  <table class="data-table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Johnson</td>
        <td>alice@example.com</td>
        <td><span class="badge badge-success">Active</span></td>
      </tr>
      <tr>
        <td>Bob Smith</td>
        <td>bob@example.com</td>
        <td><span class="badge badge-inactive">Inactive</span></td>
      </tr>
    </tbody>
  </table>
`;

// Example 7: SVG inline with HTML
const iconWithFallback = /*html*/ `
  <div class="icon-container">
    <svg class="icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12h8" stroke="white" stroke-width="2" />
    </svg>
    <span class="icon-label">Settings</span>
  </div>
`;

// Example 8: Responsive grid layout
const responsiveGrid = /* HTML */ `
  <div class="grid">
    <article class="grid-item">
      <img src="item-1.jpg" alt="Item 1" />
      <h3>Item One</h3>
      <p>Description for the first item</p>
    </article>
    <article class="grid-item">
      <img src="item-2.jpg" alt="Item 2" />
      <h3>Item Two</h3>
      <p>Description for the second item</p>
    </article>
    <article class="grid-item">
      <img src="item-3.jpg" alt="Item 3" />
      <h3>Item Three</h3>
      <p>Description for the third item</p>
    </article>
  </div>
`;

// Note: These examples are for demonstration purposes.
// To test highlighting, open this file in VS Code with the extension enabled.
// All HTML inside the template literals should be highlighted with proper colors.
