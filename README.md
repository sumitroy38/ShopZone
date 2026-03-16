# ShopZone - Multi-Category E-Commerce App

> Built with React · Hosted on GitHub Pages · Made with ☕ and a lot of `npm install`

A clean, fully functional e-commerce web app where you can browse products across multiple categories, filter and sort them, view product details, add to cart, and manage your account with login and registration.

This started as a BCA major project and grew into something actually usable. The folder structure is intentionally kept simple — no Redux, no TypeScript, just React doing what React does best.

**Live Demo → [sumitroy38.github.io/ShopZone](https://sumitroy38.github.io/ShopZone)**

---

## Pages & Features at a Glance

| Page | What's on it |
|------|-------------|
| Homepage | Hero banner, promo strip, category grid, featured & trending products |
|  Products | Filter by category, sort by price/rating, live search |
|  Product Detail | Image, quantity selector, add to cart, related products |
|  Login | Form validation, password toggle, session persistence |
|  Register | Full registration with confirm password check |
|  About | Project story and stats |
|  Contact | Working contact form |
|  404 | Because broken links happen |

---

##  Project Structure

```
ShopZone/
├── public/
│   ├── index.html
│   └── 404.html              # GitHub Pages SPA routing fix
└── src/
    ├── components/
    │   ├── Categories/        # Category grid with icons
    │   ├── Header/            # Top bar with logo, search, cart, auth
    │   ├── Navbar/            # Category navigation tabs
    │   ├── ProductDetail/     # Product detail component
    │   └── ProductList/       # Product card grid
    ├── data/
    │   └── products.js        # Mock product & category data
    ├── pages/
    │   ├── HomePage/
    │   ├── ProductPage/
    │   ├── ProductDetailsPage/
    │   ├── LoginPage/
    │   ├── RegisterPage/
    │   ├── AboutPage/
    │   ├── ContactPage/
    │   └── ErrorPage/
    ├── App.js                 # Routes + Auth + Cart context
    ├── index.js
    └── index.css              # Global styles & CSS variables
```

---

## Getting Started

Make sure you have **Node.js** installed, then:

```bash
# 1. Clone the repo
git clone https://github.com/sumitroy38/ShopZone.git
cd ShopZone

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

Opens at `http://localhost:3000`. That's it.

---

## Tech Stack

| What | Why |
|------|-----|
| React 18 | UI library |
| React Router v6 | Client-side routing |
| Plain CSS | No frameworks, full control over styling |
| React Context API | Global auth and cart state |
| localStorage | Persist login session across refreshes |

No Tailwind, no Redux, no unnecessary complexity — just React and CSS doing their job.

---

## Features

-  Homepage with hero section, promotions, and product sections
-  Browse by category — Electronics, Fashion, Beauty, Home & more
-  Live search on the products page
-  Sort by price (low → high, high → low) or top rated
-  Add to cart with quantity selector
-  Login and Register with full form validation
-  Auth state persists across page refreshes via localStorage
-  Responsive layout — works on mobile and desktop
-  Custom 404 page for unknown routes

---

## Customization Tips

**Change the color scheme** — all colors live as CSS variables in `src/index.css`. Just update `--accent` and `--primary` and the whole app follows.

**Swap out mock data** — edit `src/data/products.js` to plug in your own products and categories.

**Connect a real backend** — the login/register flows are ready for it. Replace the mock `await new Promise(...)` in `LoginPage.js` and `RegisterPage.js` with real `fetch()` calls to your API.

---

## Author

**Sumit** — Curious Mind

- GitHub → [@sumitroy38](https://github.com/sumitroy38)
- Project Link → [github.com/sumitroy38/ShopZone](https://github.com/sumitroy38/ShopZone)

If you find a bug or have a suggestion, feel free to open an issue or just reach out.

---

## License

MIT — use it, fork it, build on it. Just don't forget where you got it from. 😄
