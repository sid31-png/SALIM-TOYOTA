# Salim Auto Parts — Storefront

A premium, dark-luxury e-commerce storefront concept for a wholesale & retail spare-parts
shop specializing in **Toyota, Nissan, Lexus, and Infiniti**.

## File structure

```
SALIM-TOYOTA/
├── index.html            Production landing page markup (semantic HTML5)
├── styles.css             Full design system: tokens, components, responsive layout
├── app.js                 App logic: vehicle selector, search, filters, cart, stock states
├── test-prototype.html    Self-contained interactive demo (Tailwind CDN + Lucide, no build step)
└── README.md
```

## Running it

**Instant local test (no setup):**
Open `test-prototype.html` directly in your browser (double-click, or drag into a tab).
It's fully self-contained — Tailwind CSS and Lucide Icons load from CDN, everything else
is inline. Requires an internet connection for the two CDN scripts.

**Production repo files:**
Open `index.html` directly, or serve the folder with any static server, e.g.:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## What's implemented

- **Hero** — OEM/reference search (try `90915-YZZD4`) and a cascading Brand → Model → Year
  → Engine vehicle selector, tabbed in one finder card.
- **Retail / Wholesale (B2B) toggle** — switches unit pricing across every product card and
  the cart drawer, shows a wholesale banner, MOQ (minimum order quantity) notes, and free
  wholesale shipping.
- **Product grid** — two explicit states:
  - *In Stock*: active "Add to Cart" button.
  - *Not Available*: disabled button + "Not Available" badge + interactive "Notify Me"
    (collects an email via modal).
- **Cart simulator** — add/remove, quantity stepper, live subtotal/shipping/total, demo
  checkout.
- **Brand & category quick filters**, live search-as-you-type, sort, wishlist toggle.
- `test-prototype.html` additionally ships a **"Force All Out of Stock" demo switch** in the
  toolbar so you can instantly preview the "Not Available" UI across the whole catalog.

## Notes for going to production

- Product/vehicle data in `app.js` (`PRODUCTS`, `VEHICLE_DATA`) is mock data — wire it up to
  your real inventory/PIM API.
- Prices are illustrative (NGN). Swap the `Intl.NumberFormat` locale/currency in `app.js` as
  needed.
- Icons load from the Lucide CDN for simplicity; for a stricter production build, vendor the
  package via npm and tree-shake the icons actually used.
- No backend/auth/payment integration is included — the cart and checkout are client-side
  simulations only.
