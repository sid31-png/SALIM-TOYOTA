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
│   └── video/hero-bg.mp4     Muted looping hero background video (from the supplied clip)
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
- **Popular Models photo section** — real vehicle photography (Land Cruiser, GT-R, LX 570,
  QX80), also clickable to filter by brand.
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

- Product/vehicle/VIN data in `app.js` (`PRODUCTS`, `VEHICLE_MODELS`, `VIN_DATABASE`) is mock
  data — wire it up to your real inventory/PIM and VIN-decoding APIs. Product photos are not
  included (the mock SKUs aren't real inventory) — category icon tiles are used instead; swap
  in real product photography per SKU once you have it.
- The hero video is the WhatsApp clip you supplied, used as-is (no transcoding tools were
  available in this environment). For production, compress it (H.264, ~3–6 Mbps, ≤15s loop)
  and provide a `poster` frame for slow connections.
- Prices are illustrative (FCFA). Swap the `Intl.NumberFormat` locale/currency in `app.js` as
  needed.
- Translation strings live in the `TRANSLATIONS` object in `app.js` — add a fourth locale by
  adding a new key and wiring a button into `#langSwitch`.
- Icons load from the Lucide CDN for simplicity; for a stricter production build, vendor the
  package via npm and tree-shake the icons actually used.
- No backend/auth/payment integration is included — the cart and checkout are client-side
  simulations only.
