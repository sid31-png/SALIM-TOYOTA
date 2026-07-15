# Salim Auto Parts — Storefront (v3, PartSouq-inspired)

A PartSouq-inspired e-commerce storefront for a wholesale & retail spare-parts shop
specializing in **Toyota, Nissan, Lexus, and Infiniti**. Trilingual (French / English /
Arabic with full RTL), light + dark theme, OEM/VIN/Model triple search hero with a muted
looping background video, and real brand logos + vehicle photography.

## File structure

```
SALIM-TOYOTA/
├── index.html               Production landing page markup (semantic HTML5, data-i18n attrs)
├── assets/
│   ├── css/style.css         Design system: CSS vars for light/dark, RTL via logical properties
│   ├── js/app.js             App logic: i18n, theme, OEM/VIN/Model search, filters, cart, stock states
│   ├── video/hero-bg.mp4     Muted looping hero background video (from the supplied clip)
│   └── images/products/      Real product photos supplied by the customer (13 files)
├── test-prototype.html       Self-contained interactive demo (Tailwind CDN + Lucide)
└── README.md
```

> **On the brand-logo URLs supplied in the request:** they weren't real, fetchable image
> assets — `googleusercontent.com/image_collection/image_retrieval/...` links are internal
> references from a different tool's chat session, not public hyperlinks (they return
> HTTP 403 from any browser or script). Using them here would just show broken images.
> Instead, the storefront uses **real official brand logos and vehicle photos sourced from
> Wikimedia Commons** (freely licensed, stable, direct-linkable via `Special:FilePath`):
> - Logos: Toyota, Nissan, Lexus, Infiniti — displayed on a white badge for legibility in
>   both themes.
> - Popular Models photo strip: Toyota Land Cruiser, Nissan GT-R, Lexus LX 570, Infiniti QX80.
>
> These are used for brand/vehicle identification (standard nominative use, same as any
> parts catalog). Swap in your own licensed brand assets in `index.html` / `test-prototype.html`
> whenever you have them — just replace the `<img src="...">` values.

## Running it

**Instant local test (no setup):**
Open `test-prototype.html` directly in your browser. Tailwind CSS and Lucide Icons load from
CDN; the brand logos/vehicle photos load from Wikimedia Commons — an internet connection is
required. The background video is loaded from `assets/video/hero-bg.mp4` next to the HTML
file, so keep that relative path intact (both were sent to you together / are in the repo).

**Production repo files:**
Open `index.html` directly, or serve the folder with any static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## What's implemented

- **PartSouq-style centered hero** with a muted, looping background video (autoplay, no
  sound) and three search tabs:
  - **OEM / reference number** (try `90915-YZZD4`)
  - **VIN / chassis number** (try `JTMBK3FV000000001` for a Toyota Land Cruiser, or
    `JN1AZ0CP0BM000001` for a Nissan GT-R) — decodes against a small mock VIN table.
  - **By vehicle model** — cascading Brand → Model dropdowns.
  All three filter the catalog to the matched vehicle/brand and scroll to the shop section.
- **Brand grid** with real Toyota / Nissan / Lexus / Infiniti logos that launches catalog
  browsing filtered to that brand.
- **Popular Models photo section** — real vehicle photography (Toyota Yaris 2013, Corolla
  2012, Hilux 2015, Nissan Sunny 2014), each clickable to filter the catalog to that exact
  model.
- **Trilingual product catalog** — every product name is translated (FR/EN/AR), e.g.
  "Timing Belt Kit" (EN) / "Kit chaîne de distribution" (FR) / "طقم جنزير التوقيت" (AR).
  13 products carry the customer's own product photography (`assets/images/products/`)
  instead of a generic category photo; the rest fall back to a representative category photo.
- **Payment methods** — cash on delivery, EDAHABIA (Dahabia) card, or CIB card, selectable in
  the cart before checkout.
- **"Track my order" modal** — a 4-step timeline (accepted → preparation → out for delivery →
  delivered) plus a paid/COD status badge, opened from "Track my order" in the header and
  footer.
- **Wishlist drawer** — the header heart icon opens a panel listing favorited parts, with
  quick add-to-cart / remove actions.
- **Language switcher (FR / EN / AR)** in the header — retranslates every UI string live and
  flips `dir="ltr"` ↔ `dir="rtl"` for Arabic, switching to the Cairo/Tajawal Arabic type
  family. SKUs and prices stay left-to-right even inside the RTL layout for legibility.
- **Light / Dark theme toggle** — light gray/high-contrast by default, a premium deep-slate
  dark mode on click; persisted to `localStorage` in the production build. The hero always
  renders light text over the video regardless of theme, for legibility.
- **Retail / Wholesale (B2B) toggle** — swaps unit pricing across every product card and the
  cart drawer, shows a wholesale banner and MOQ (minimum order quantity) notes.
- **Product grid** with two explicit stock states:
  - *In Stock*: active "Add to Cart" button.
  - *Not Available*: disabled button + "Not Available" badge + interactive "Notify Me"
    (collects an email via modal).
- **"Simulate Out of Stock" master switch** (header, gold pill with a flask icon) — forces
  every product card into the Not Available state instantly, for QA/demo purposes.
- **Cart simulator** — add/remove, quantity stepper, live subtotal/shipping/total, demo
  checkout, brand/category quick filters, live search-as-you-type, sort.

## Notes for going to production

- Product/vehicle/VIN data lives in `app.js` (`PRODUCTS`, `VEHICLE_MODELS`, `VIN_DATABASE`).
  22 products are real (from the supplied price list + your product photos); the remaining
  mock Lexus/Infiniti items (the supplier price list only covers Toyota/Nissan/Daihatsu) stay
  as placeholders — wire the whole thing up to your real inventory/PIM once you have full
  coverage for all four brands.
- Product names use `{ fr, en, ar }` objects (see `productName()` in `app.js`) so every part
  is properly translated rather than showing raw French text in English/Arabic mode. Add new
  products the same way.
- Chassis-code note: the supplier list's "KUN"/"LAN" prefixes (e.g. `KUN15`, `KUN25`) refer to
  the **Toyota Hilux** (D4D diesel generations), not Land Cruiser Prado — confirmed by your
  "alternateur hilux d4d" photo. A few items were re-mapped from Land Cruiser to Hilux
  accordingly.
- 13 products carry real photos in `assets/images/products/`; the rest fall back to a
  representative category photo (`CATEGORY_PHOTOS` in `app.js`) sourced from Wikimedia
  Commons — swap in real photography per SKU as you get it.
- The hero video is the WhatsApp clip you supplied, used as-is (no transcoding tools were
  available in this environment). For production, compress it (H.264, ~3–6 Mbps, ≤15s loop)
  and provide a `poster` frame for slow connections.
- Prices are in Algerian Dinar (DZD) via `Intl.NumberFormat` — real prices for the 22
  supplier-sourced items, illustrative for the rest.
- Translation strings live in the `TRANSLATIONS` object in `app.js` — add a fourth locale by
  adding a new key and wiring a button into `#langSwitch`.
- Icons load from the Lucide CDN for simplicity; for a stricter production build, vendor the
  package via npm and tree-shake the icons actually used.
- Payment methods (COD / EDAHABIA / CIB) and order tracking are UI-only simulations — no real
  payment gateway or logistics integration is wired up.
