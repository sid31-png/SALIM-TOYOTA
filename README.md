# Salim Auto Parts — Storefront (v2, PartSouq-inspired)

A PartSouq-inspired e-commerce storefront for a wholesale & retail spare-parts shop
specializing in **Toyota, Nissan, Lexus, and Infiniti**. Bilingual (French / Arabic with
full RTL), light + dark theme, and an OEM/VIN dual search hero.

## File structure

```
SALIM-TOYOTA/
├── index.html               Production landing page markup (semantic HTML5, data-i18n attrs)
├── assets/
│   ├── css/style.css         Design system: CSS vars for light/dark, RTL via logical properties
│   └── js/app.js             App logic: i18n, theme, OEM/VIN search, filters, cart, stock states
├── test-prototype.html       Self-contained interactive demo (Tailwind CDN + Lucide, no build step)
└── README.md
```

> Note: the brand-logo image URLs supplied in the request weren't real, fetchable image
> assets (they returned HTTP 403 and aren't public image links), so the storefront uses
> clean SVG monogram badges (TOY / NIS / LEX / INF) instead — reliable, trademark-safe, and
> renders with zero external dependencies. Swap in official vector logos in the `brand-mark`
> elements whenever you have licensed assets.

## Running it

**Instant local test (no setup):**
Open `test-prototype.html` directly in your browser. It's fully self-contained — Tailwind
CSS and Lucide Icons load from CDN, everything else (including both languages) is inline.
Requires an internet connection for the two CDN scripts.

**Production repo files:**
Open `index.html` directly, or serve the folder with any static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## What's implemented

- **PartSouq-style centered hero** with two search tabs:
  - **OEM / reference number** (try `90915-YZZD4`)
  - **VIN / chassis number** (try `JTMBK3FV000000001` for a Toyota Land Cruiser, or
    `JN1AZ0CP0BM000001` for a Nissan GT-R) — decodes against a small mock VIN table and
    filters the catalog to the matched vehicle.
- **Brand grid** (Toyota / Nissan / Lexus / Infiniti) that launches catalog browsing filtered
  to that brand.
- **Language switcher (FR / AR)** in the header — retranslates every UI string live and flips
  `dir="ltr"` ↔ `dir="rtl"`, switching to the Cairo/Tajawal Arabic type family. SKUs and prices
  stay left-to-right even inside the RTL layout for legibility.
- **Light / Dark theme toggle** — light gray/high-contrast by default, a premium deep-slate
  dark mode on click; persisted to `localStorage` in the production build.
- **Retail / Wholesale (B2B) toggle** — swaps unit pricing across every product card and the
  cart drawer, shows a wholesale banner and MOQ (minimum order quantity) notes.
- **Product grid** with two explicit stock states:
  - *In Stock*: active "Add to Cart" button.
  - *Not Available*: disabled button + "Not Available" badge + interactive "Notify Me /
    Demander la pièce" (collects an email via modal).
- **"Simulate Out of Stock" master switch** (top-right, gold pill with a flask icon) — forces
  every product card into the Not Available state instantly, for QA/demo purposes.
- **Cart simulator** — add/remove, quantity stepper, live subtotal/shipping/total, demo
  checkout, brand/category quick filters, live search-as-you-type, sort.

## Notes for going to production

- Product/vehicle/VIN data in `app.js` (`PRODUCTS`, `VIN_DATABASE`) is mock data — wire it up
  to your real inventory/PIM and VIN-decoding APIs.
- Prices are illustrative (FCFA). Swap the `Intl.NumberFormat` locale/currency in `app.js` as
  needed.
- Translation strings live in the `TRANSLATIONS` object in `app.js` — add a third locale by
  adding a new key and wiring a button into `#langSwitch`.
- Icons load from the Lucide CDN for simplicity; for a stricter production build, vendor the
  package via npm and tree-shake the icons actually used.
- No backend/auth/payment integration is included — the cart and checkout are client-side
  simulations only.
