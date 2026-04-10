# ShopZone : Multi-Category E-Commerce App

> Built with React · Hosted on GitHub Pages · Made with ☕ and a lot of `npm install`

A clean, fully functional e-commerce web app where you can browse products across multiple categories, filter and sort them, view product details, add to cart, and manage your account with login and registration.

**Live Demo → [sumitroy38.github.io/ShopZone](https://sumitroy38.github.io/ShopZone)**

---

## 🔗 This is Part of a Two-Repo Project

| Repo | Role | Link |
|---|---|---|
| **ShopZone** (this repo) | React Frontend | [github.com/sumitroy38/ShopZone](https://github.com/sumitroy38/ShopZone) |
| **shopzone-api** | Node.js Backend | [github.com/sumitroy38/shopzone-api](https://github.com/sumitroy38/shopzone-api) |

The frontend currently runs on mock data from `src/data/products.js`.
The backend is built and ready — connect them by replacing the mock calls with real API requests (see the backend repo for endpoints).

---

## Pages & Features at a Glance

| Page | What's on it |
|---|---|
| Homepage | Hero banner, promo strip, category grid, featured & trending products |
| Products | Filter by category, sort by price/rating, live search |
| Product Detail | Image, quantity selector, add to cart, related products |
| Login | Form validation, password toggle, session persistence |
| Register | Full registration with confirm password check |
| About | Project story and stats |
| Contact | Working contact form |
| 404 | Because broken links happen |

---

## Project Structure

```
ShopZone/
├── public/
│   ├── index.html
│   └── 404.html
└── src/
    ├── components/
    │   ├── Categories/
    │   ├── Header/
    │   ├── Navbar/
    │   ├── ProductDetail/
    │   └── ProductList/
    ├── data/
    │   └── products.js        # Mock data (replace with API calls to connect backend)
    ├── pages/
    │   ├── HomePage/
    │   ├── ProductPage/
    │   ├── ProductDetailsPage/
    │   ├── LoginPage/
    │   ├── RegisterPage/
    │   ├── AboutPage/
    │   ├── ContactPage/
    │   └── ErrorPage/
    ├── App.js
    ├── index.js
    └── index.css
```

---

## Getting Started

```bash
git clone https://github.com/sumitroy38/ShopZone.git
cd ShopZone
npm install
npm start
```

Opens at `http://localhost:3000`.

> To use with the real backend, also clone and run [shopzone-api](https://github.com/sumitroy38/shopzone-api).

---

## Tech Stack

| What | Why |
|---|---|
| React 18 | UI library |
| React Router v6 | Client-side routing |
| Plain CSS | No frameworks, full control |
| React Context API | Global auth and cart state |
| localStorage | Persist login session |

---

## Author

**Sumit** · [@sumitroy38](https://github.com/sumitroy38)

---

## License

MIT — use it, fork it, build on it. Just don't forget where you got it from. 😄
