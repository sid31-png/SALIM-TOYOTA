/* ==========================================================================
   SALIM AUTO PARTS — Storefront Logic
   Vehicle selector, search/filtering, cart simulator, stock-state toggling.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ *
   *  1. DATA
   * ------------------------------------------------------------------ */

  function yearsRange(start, end) {
    const out = [];
    for (let y = end; y >= start; y--) out.push(y);
    return out;
  }

  const VEHICLE_DATA = {
    toyota: {
      label: 'Toyota',
      models: {
        'Land Cruiser': { years: yearsRange(2014, 2024), engines: ['4.5L V8 Turbo Diesel', '4.6L V8 Petrol', '3.5L V6 Twin-Turbo (GR)'] },
        'Hilux': { years: yearsRange(2014, 2024), engines: ['2.4L Diesel', '2.8L Diesel', '2.7L Petrol'] },
        'Corolla': { years: yearsRange(2014, 2024), engines: ['1.8L Petrol', '1.6L Petrol', '2.0L Hybrid'] },
        'Camry': { years: yearsRange(2014, 2024), engines: ['2.5L Petrol', '3.5L V6', '2.5L Hybrid'] },
        'Fortuner': { years: yearsRange(2014, 2024), engines: ['2.8L Diesel', '2.7L Petrol'] },
        'RAV4': { years: yearsRange(2014, 2024), engines: ['2.0L Petrol', '2.5L Hybrid'] }
      }
    },
    nissan: {
      label: 'Nissan',
      models: {
        'Patrol': { years: yearsRange(2014, 2024), engines: ['4.0L V6 Petrol', '5.6L V8 Petrol'] },
        'GT-R': { years: yearsRange(2014, 2024), engines: ['3.8L V6 Twin-Turbo'] },
        'X-Trail': { years: yearsRange(2014, 2024), engines: ['2.5L Petrol', '2.0L Diesel'] },
        'Navara': { years: yearsRange(2014, 2024), engines: ['2.3L Diesel', '2.5L Diesel'] },
        'Altima': { years: yearsRange(2014, 2024), engines: ['2.5L Petrol', '2.0L Turbo'] },
        'Qashqai': { years: yearsRange(2014, 2024), engines: ['1.6L Petrol', '1.5L Diesel'] }
      }
    },
    lexus: {
      label: 'Lexus',
      models: {
        'LX570': { years: yearsRange(2014, 2024), engines: ['5.7L V8 Petrol'] },
        'RX350': { years: yearsRange(2014, 2024), engines: ['3.5L V6 Petrol'] },
        'ES350': { years: yearsRange(2014, 2024), engines: ['3.5L V6 Petrol'] },
        'IS300': { years: yearsRange(2014, 2024), engines: ['2.0L Turbo', '3.5L V6'] },
        'GX460': { years: yearsRange(2014, 2024), engines: ['4.6L V8 Petrol'] }
      }
    },
    infiniti: {
      label: 'Infiniti',
      models: {
        'QX80': { years: yearsRange(2014, 2024), engines: ['5.6L V8 Petrol'] },
        'Q50': { years: yearsRange(2014, 2024), engines: ['3.0L V6 Twin-Turbo', '2.0L Turbo'] },
        'QX60': { years: yearsRange(2014, 2024), engines: ['3.5L V6 Petrol'] },
        'FX35': { years: yearsRange(2014, 2024), engines: ['3.5L V6 Petrol'] },
        'G37': { years: yearsRange(2014, 2024), engines: ['3.7L V6 Petrol'] }
      }
    }
  };

  const CATEGORY_LABELS = {
    engine: 'Engine Parts',
    brake: 'Brake System',
    suspension: 'Suspension',
    filter: 'Filters',
    electrical: 'Electrical',
    body: 'Body & Trim'
  };

  const CATEGORY_ICONS = {
    engine: 'cog',
    brake: 'disc',
    suspension: 'gauge',
    filter: 'filter',
    electrical: 'zap',
    body: 'layers'
  };

  const PRODUCTS = [
    { id: 'p01', brand: 'toyota', fits: ['Land Cruiser', 'Hilux', 'Fortuner'], name: 'Genuine Engine Oil Filter', category: 'filter', sku: '90915-YZZD4', price: 8500, wholesalePrice: 6200, moq: 5, stock: true, rating: 4.8, reviews: 214 },
    { id: 'p02', brand: 'toyota', fits: ['Land Cruiser'], name: 'Front Brake Pad Set', category: 'brake', sku: '04465-60290', price: 42000, wholesalePrice: 34000, moq: 3, stock: true, rating: 4.7, reviews: 132 },
    { id: 'p03', brand: 'toyota', fits: ['Land Cruiser'], name: 'Air Suspension Compressor', category: 'suspension', sku: '48910-60040', price: 185000, wholesalePrice: 162000, moq: 1, stock: false, rating: 4.6, reviews: 58 },
    { id: 'p04', brand: 'toyota', fits: ['Hilux'], name: 'Timing Belt Kit', category: 'engine', sku: '13568-09080', price: 65000, wholesalePrice: 54000, moq: 2, stock: true, rating: 4.9, reviews: 97 },
    { id: 'p05', brand: 'toyota', fits: ['Corolla', 'Camry'], name: 'Alternator Assembly', category: 'electrical', sku: '27060-0T170', price: 98000, wholesalePrice: 83000, moq: 2, stock: false, rating: 4.5, reviews: 41 },
    { id: 'p06', brand: 'toyota', fits: ['Fortuner'], name: 'Front Bumper Grille', category: 'body', sku: '53101-0K230', price: 76000, wholesalePrice: 61000, moq: 2, stock: true, rating: 4.4, reviews: 26 },

    { id: 'p07', brand: 'nissan', fits: ['Patrol', 'X-Trail'], name: 'Genuine Engine Oil Filter', category: 'filter', sku: '15208-65F0E', price: 7800, wholesalePrice: 5900, moq: 5, stock: true, rating: 4.7, reviews: 188 },
    { id: 'p08', brand: 'nissan', fits: ['Patrol'], name: 'Rear Brake Disc Rotor', category: 'brake', sku: '43206-1LA0A', price: 54000, wholesalePrice: 44000, moq: 2, stock: true, rating: 4.6, reviews: 74 },
    { id: 'p09', brand: 'nissan', fits: ['GT-R'], name: 'Front Shock Absorber', category: 'suspension', sku: '56110-JF01A', price: 210000, wholesalePrice: 178000, moq: 1, stock: false, rating: 4.9, reviews: 33 },
    { id: 'p10', brand: 'nissan', fits: ['GT-R'], name: 'Turbocharger Assembly', category: 'engine', sku: '14411-JF00C', price: 890000, wholesalePrice: 760000, moq: 1, stock: false, rating: 5.0, reviews: 19 },
    { id: 'p11', brand: 'nissan', fits: ['Navara'], name: 'LED Headlight Assembly', category: 'electrical', sku: '26010-4KP0B', price: 145000, wholesalePrice: 121000, moq: 1, stock: true, rating: 4.5, reviews: 52 },
    { id: 'p12', brand: 'nissan', fits: ['X-Trail'], name: 'Side Mirror Cover', category: 'body', sku: '96374-4CE0A', price: 21000, wholesalePrice: 16500, moq: 3, stock: true, rating: 4.3, reviews: 39 },

    { id: 'p13', brand: 'lexus', fits: ['RX350', 'ES350'], name: 'Cabin Air Filter', category: 'filter', sku: '87139-06060', price: 9800, wholesalePrice: 7600, moq: 4, stock: true, rating: 4.8, reviews: 121 },
    { id: 'p14', brand: 'lexus', fits: ['LX570'], name: 'Front Brake Pad Set', category: 'brake', sku: '04465-60321', price: 68000, wholesalePrice: 56000, moq: 2, stock: true, rating: 4.7, reviews: 65 },
    { id: 'p15', brand: 'lexus', fits: ['LX570'], name: 'Rear Air Suspension Strut', category: 'suspension', sku: '48090-60011', price: 320000, wholesalePrice: 275000, moq: 1, stock: false, rating: 4.9, reviews: 22 },
    { id: 'p16', brand: 'lexus', fits: ['IS300'], name: 'Ignition Coil', category: 'engine', sku: '90919-02258', price: 34000, wholesalePrice: 27000, moq: 3, stock: true, rating: 4.6, reviews: 88 },
    { id: 'p17', brand: 'lexus', fits: ['RX350'], name: 'Tail Light Assembly', category: 'body', sku: '81551-48180', price: 128000, wholesalePrice: 108000, moq: 1, stock: false, rating: 4.5, reviews: 17 },
    { id: 'p18', brand: 'lexus', fits: ['ES350'], name: 'Power Window Motor', category: 'electrical', sku: '85720-33180', price: 47000, wholesalePrice: 38000, moq: 2, stock: true, rating: 4.4, reviews: 46 },

    { id: 'p19', brand: 'infiniti', fits: ['QX80', 'Q50'], name: 'Genuine Engine Oil Filter', category: 'filter', sku: '15208-9E01A', price: 8200, wholesalePrice: 6100, moq: 5, stock: true, rating: 4.7, reviews: 103 },
    { id: 'p20', brand: 'infiniti', fits: ['QX80'], name: 'Front Brake Pad Set', category: 'brake', sku: 'D1060-1LA0A', price: 61000, wholesalePrice: 50000, moq: 2, stock: false, rating: 4.6, reviews: 44 },
    { id: 'p21', brand: 'infiniti', fits: ['Q50'], name: 'Rear Shock Absorber', category: 'suspension', sku: 'E6210-4GA0A', price: 175000, wholesalePrice: 149000, moq: 1, stock: true, rating: 4.8, reviews: 29 },
    { id: 'p22', brand: 'infiniti', fits: ['QX60'], name: 'Engine Mount', category: 'engine', sku: '11220-JA00B', price: 58000, wholesalePrice: 47000, moq: 2, stock: true, rating: 4.5, reviews: 37 },
    { id: 'p23', brand: 'infiniti', fits: ['FX35'], name: 'Fender Liner', category: 'body', sku: '63840-CG000', price: 19500, wholesalePrice: 15000, moq: 3, stock: false, rating: 4.2, reviews: 15 },
    { id: 'p24', brand: 'infiniti', fits: ['G37'], name: 'Alternator', category: 'electrical', sku: '23100-JK21A', price: 112000, wholesalePrice: 94000, moq: 1, stock: true, rating: 4.6, reviews: 51 }
  ];

  /* ------------------------------------------------------------------ *
   *  2. STATE
   * ------------------------------------------------------------------ */

  const state = {
    mode: 'retail', // 'retail' | 'wholesale'
    search: '',
    vehicleBrand: null,
    vehicleModel: null,
    filters: { brands: new Set(), categories: new Set(), availability: new Set() },
    sort: 'relevance',
    cart: [], // { id, qty }
    wishlist: new Set()
  };

  /* ------------------------------------------------------------------ *
   *  3. HELPERS
   * ------------------------------------------------------------------ */

  const currency = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 });
  const fmt = (n) => currency.format(n);

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  function refreshIcons() {
    if (window.lucide) window.lucide.createIcons();
  }

  function findProduct(id) { return PRODUCTS.find((p) => p.id === id); }

  function unitPrice(product) {
    return state.mode === 'wholesale' ? product.wholesalePrice : product.price;
  }

  /* ------------------------------------------------------------------ *
   *  4. TOASTS
   * ------------------------------------------------------------------ */

  function showToast(message, type) {
    const stack = $('#toastStack');
    const el = document.createElement('div');
    el.className = 'toast ' + (type || 'success');
    el.innerHTML =
      '<i data-lucide="' + (type === 'info' ? 'info' : 'check-circle-2') + '" class="ticon"></i><span>' + message + '</span>';
    stack.appendChild(el);
    refreshIcons();
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => el.remove(), 260);
    }, 3200);
  }

  /* ------------------------------------------------------------------ *
   *  5. VEHICLE SELECTOR (cascading dropdowns)
   * ------------------------------------------------------------------ */

  function populateSelect(select, items, placeholder) {
    select.innerHTML = '<option value="">' + placeholder + '</option>' +
      items.map((it) => '<option value="' + it + '">' + it + '</option>').join('');
  }

  function initVehicleSelector() {
    const selBrand = $('#selBrand');
    const selModel = $('#selModel');
    const selYear = $('#selYear');
    const selEngine = $('#selEngine');
    const findBtn = $('#vehicleFindBtn');

    populateSelect(selBrand, Object.keys(VEHICLE_DATA).map((k) => VEHICLE_DATA[k].label), 'Select Brand');
    // map back label -> key
    selBrand.dataset.keys = JSON.stringify(Object.keys(VEHICLE_DATA));

    function brandKeyFromLabel(label) {
      return Object.keys(VEHICLE_DATA).find((k) => VEHICLE_DATA[k].label === label);
    }

    selBrand.addEventListener('change', () => {
      const key = brandKeyFromLabel(selBrand.value);
      selModel.disabled = !key;
      selYear.disabled = true;
      selEngine.disabled = true;
      populateSelect(selModel, key ? Object.keys(VEHICLE_DATA[key].models) : [], 'Select Model');
      populateSelect(selYear, [], 'Select Year');
      populateSelect(selEngine, [], 'Select Engine');
      findBtn.disabled = true;
    });

    selModel.addEventListener('change', () => {
      const key = brandKeyFromLabel(selBrand.value);
      const modelData = key && selModel.value ? VEHICLE_DATA[key].models[selModel.value] : null;
      selYear.disabled = !modelData;
      selEngine.disabled = true;
      populateSelect(selYear, modelData ? modelData.years : [], 'Select Year');
      populateSelect(selEngine, [], 'Select Engine');
      findBtn.disabled = true;
    });

    selYear.addEventListener('change', () => {
      const key = brandKeyFromLabel(selBrand.value);
      const modelData = key && selModel.value ? VEHICLE_DATA[key].models[selModel.value] : null;
      selEngine.disabled = !(modelData && selYear.value);
      populateSelect(selEngine, modelData && selYear.value ? modelData.engines : [], 'Select Engine');
      findBtn.disabled = true;
    });

    selEngine.addEventListener('change', () => {
      findBtn.disabled = !selEngine.value;
    });

    findBtn.addEventListener('click', () => {
      const key = brandKeyFromLabel(selBrand.value);
      if (!key || !selModel.value) return;
      state.vehicleBrand = key;
      state.vehicleModel = selModel.value;
      state.search = '';
      $('#gridSearchInput').value = '';
      state.filters.brands = new Set([key]);
      syncFilterCheckboxes();
      render();
      $('#shop').scrollIntoView({ behavior: 'smooth' });
      showToast('Showing parts for ' + VEHICLE_DATA[key].label + ' ' + selModel.value, 'info');
    });

    // Tabs
    $all('.finder-tabs button').forEach((btn) => {
      btn.addEventListener('click', () => {
        $all('.finder-tabs button').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        $all('.finder-panel').forEach((p) => p.classList.remove('active'));
        $('#panel-' + btn.dataset.panel).classList.add('active');
      });
    });
  }

  function syncFilterCheckboxes() {
    $all('#filterBrand input').forEach((cb) => { cb.checked = state.filters.brands.has(cb.value); });
    $all('#filterCategory input').forEach((cb) => { cb.checked = state.filters.categories.has(cb.value); });
    $all('#filterAvailability input').forEach((cb) => { cb.checked = state.filters.availability.has(cb.value); });
  }

  /* ------------------------------------------------------------------ *
   *  6. SEARCH
   * ------------------------------------------------------------------ */

  function initSearch() {
    $('#oemSearchForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const val = $('#oemSearchInput').value.trim();
      state.search = val;
      state.vehicleBrand = null;
      state.vehicleModel = null;
      $('#gridSearchInput').value = val;
      render();
      $('#shop').scrollIntoView({ behavior: 'smooth' });
    });

    $('#gridSearchInput').addEventListener('input', (e) => {
      state.search = e.target.value.trim();
      render();
    });
  }

  /* ------------------------------------------------------------------ *
   *  7. FILTERS + SORT
   * ------------------------------------------------------------------ */

  function initFilters() {
    ['filterBrand', 'filterCategory', 'filterAvailability'].forEach((groupId) => {
      $('#' + groupId).addEventListener('change', (e) => {
        if (e.target.tagName !== 'INPUT') return;
        const targetSet =
          groupId === 'filterBrand' ? state.filters.brands :
          groupId === 'filterCategory' ? state.filters.categories : state.filters.availability;
        if (e.target.checked) targetSet.add(e.target.value);
        else targetSet.delete(e.target.value);
        render();
      });
    });

    $('#clearFiltersBtn').addEventListener('click', () => {
      state.filters.brands.clear();
      state.filters.categories.clear();
      state.filters.availability.clear();
      state.vehicleBrand = null;
      state.vehicleModel = null;
      state.search = '';
      $('#gridSearchInput').value = '';
      syncFilterCheckboxes();
      render();
      showToast('Filters cleared', 'info');
    });

    $('#sortSelect').addEventListener('change', (e) => {
      state.sort = e.target.value;
      render();
    });

    $all('[data-brand-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const brand = btn.dataset.brandFilter;
        state.filters.brands = new Set([brand]);
        state.vehicleBrand = null;
        state.vehicleModel = null;
        syncFilterCheckboxes();
        render();
        $('#shop').scrollIntoView({ behavior: 'smooth' });
      });
    });

    $all('[data-cat-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.catFilter;
        state.filters.categories = new Set([cat]);
        syncFilterCheckboxes();
        render();
        $('#shop').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function getFilteredSortedProducts() {
    let list = PRODUCTS.slice();

    if (state.vehicleModel) {
      list = list.filter((p) => p.brand === state.vehicleBrand && p.fits.includes(state.vehicleModel));
    }

    if (state.filters.brands.size) list = list.filter((p) => state.filters.brands.has(p.brand));
    if (state.filters.categories.size) list = list.filter((p) => state.filters.categories.has(p.category));
    if (state.filters.availability.size) {
      list = list.filter((p) => {
        if (state.filters.availability.has('in-stock') && p.stock) return true;
        if (state.filters.availability.has('out-of-stock') && !p.stock) return true;
        return false;
      });
    }

    if (state.search) {
      const q = state.search.toLowerCase();
      list = list.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.fits.some((f) => f.toLowerCase().includes(q)) ||
        CATEGORY_LABELS[p.category].toLowerCase().includes(q)
      );
    }

    switch (state.sort) {
      case 'price-asc': list.sort((a, b) => unitPrice(a) - unitPrice(b)); break;
      case 'price-desc': list.sort((a, b) => unitPrice(b) - unitPrice(a)); break;
      case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
      default: break;
    }

    return list;
  }

  /* ------------------------------------------------------------------ *
   *  8. PRODUCT GRID RENDER
   * ------------------------------------------------------------------ */

  function productCardHTML(p) {
    const brandLabel = VEHICLE_DATA[p.brand].label;
    const wholesale = state.mode === 'wholesale';
    const price = unitPrice(p);
    const inWishlist = state.wishlist.has(p.id);

    const stockBadge = p.stock
      ? '<span class="badge badge-success"><i data-lucide="check-circle"></i> In Stock</span>'
      : '<span class="badge badge-danger"><i data-lucide="x-circle"></i> Not Available</span>';

    const actions = p.stock
      ? '<button class="btn btn-primary" data-action="add-to-cart" data-id="' + p.id + '"><i data-lucide="shopping-cart"></i> Add to Cart</button>'
      : '<div style="display:flex;flex-direction:column;gap:8px;width:100%;">' +
          '<button class="btn btn-disabled" disabled><i data-lucide="ban"></i> Not Available</button>' +
          '<button class="btn btn-outline" data-action="notify" data-id="' + p.id + '"><i data-lucide="bell"></i> Notify Me</button>' +
        '</div>';

    const stockLine = p.stock
      ? '<span class="stock-line in"><i data-lucide="check-circle"></i> In Stock</span>'
      : '<span class="stock-line out"><i data-lucide="x-circle"></i> Currently Unavailable</span>';

    const wholesaleNote = wholesale
      ? '<span class="wholesale-note"><i data-lucide="package"></i> Min. order: ' + p.moq + ' unit' + (p.moq > 1 ? 's' : '') + '</span>'
      : '';

    return (
      '<article class="product-card' + (p.stock ? '' : ' out-of-stock') + '" data-id="' + p.id + '">' +
        '<div class="product-media cat-' + p.category + '">' +
          '<div class="media-badges">' +
            stockBadge +
            '<button class="wishlist-btn' + (inWishlist ? ' active' : '') + '" data-action="wishlist" data-id="' + p.id + '" aria-label="Toggle wishlist"><i data-lucide="heart"></i></button>' +
          '</div>' +
          '<i data-lucide="' + CATEGORY_ICONS[p.category] + '"></i>' +
        '</div>' +
        '<div class="product-body">' +
          '<span class="product-brand-row"><span class="brand-dot ' + p.brand + '"></span>' + brandLabel + ' &middot; ' + CATEGORY_LABELS[p.category] + '</span>' +
          '<h3 class="product-name">' + p.name + '</h3>' +
          '<span class="product-fit">Fits: ' + p.fits.join(', ') + '</span>' +
          '<span class="product-sku">SKU: <b>' + p.sku + '</b></span>' +
          '<span class="product-rating"><i data-lucide="star"></i> ' + p.rating.toFixed(1) + ' (' + p.reviews + ')</span>' +
          '<div class="price-row"><span class="price-now">' + fmt(price) + '</span></div>' +
          wholesaleNote +
          stockLine +
          '<div class="product-actions">' + actions + '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function render() {
    const list = getFilteredSortedProducts();
    const grid = $('#productGrid');
    grid.innerHTML = list.map(productCardHTML).join('');
    $('#resultCount').textContent = list.length;
    $('#noResults').style.display = list.length ? 'none' : 'block';
    refreshIcons();
  }

  /* ------------------------------------------------------------------ *
   *  9. PRODUCT GRID EVENTS (delegation)
   * ------------------------------------------------------------------ */

  function initProductGridEvents() {
    $('#productGrid').addEventListener('click', (e) => {
      const addBtn = e.target.closest('[data-action="add-to-cart"]');
      const notifyBtn = e.target.closest('[data-action="notify"]');
      const wishBtn = e.target.closest('[data-action="wishlist"]');

      if (addBtn) {
        addToCart(addBtn.dataset.id);
      } else if (notifyBtn) {
        openNotifyModal(notifyBtn.dataset.id);
      } else if (wishBtn) {
        toggleWishlist(wishBtn.dataset.id, wishBtn);
      }
    });
  }

  function toggleWishlist(id, btn) {
    if (state.wishlist.has(id)) {
      state.wishlist.delete(id);
      btn.classList.remove('active');
      showToast('Removed from wishlist', 'info');
    } else {
      state.wishlist.add(id);
      btn.classList.add('active');
      showToast('Added to wishlist');
    }
  }

  /* ------------------------------------------------------------------ *
   *  10. CART
   * ------------------------------------------------------------------ */

  function addToCart(id) {
    const existing = state.cart.find((c) => c.id === id);
    if (existing) existing.qty += 1;
    else state.cart.push({ id, qty: 1 });
    renderCart();
    updateCartCount();
    showToast('Added to cart');
    openCart();
  }

  function changeQty(id, delta) {
    const item = state.cart.find((c) => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) state.cart = state.cart.filter((c) => c.id !== id);
    renderCart();
    updateCartCount();
  }

  function removeFromCart(id) {
    state.cart = state.cart.filter((c) => c.id !== id);
    renderCart();
    updateCartCount();
  }

  function updateCartCount() {
    const count = state.cart.reduce((sum, c) => sum + c.qty, 0);
    $('#cartCount').textContent = count;
  }

  function renderCart() {
    const container = $('#cartItems');
    const modeNote = $('#drawerModeNote');
    modeNote.classList.toggle('visible', state.mode === 'wholesale' && state.cart.length > 0);

    if (!state.cart.length) {
      container.innerHTML =
        '<div class="cart-empty"><i data-lucide="shopping-cart"></i><p>Your cart is empty.<br>Browse the catalog to add genuine parts.</p></div>';
      refreshIcons();
    } else {
      container.innerHTML = state.cart.map((c) => {
        const p = findProduct(c.id);
        const price = unitPrice(p);
        return (
          '<div class="cart-item" data-id="' + p.id + '">' +
            '<div class="cart-item-media"><i data-lucide="' + CATEGORY_ICONS[p.category] + '"></i></div>' +
            '<div class="cart-item-info">' +
              '<div class="ciname">' + p.name + '</div>' +
              '<div class="cisku">' + VEHICLE_DATA[p.brand].label + ' &middot; SKU ' + p.sku + '</div>' +
              '<div class="cart-item-row">' +
                '<div class="qty-stepper">' +
                  '<button data-action="dec" data-id="' + p.id + '" aria-label="Decrease quantity">&minus;</button>' +
                  '<span>' + c.qty + '</span>' +
                  '<button data-action="inc" data-id="' + p.id + '" aria-label="Increase quantity">+</button>' +
                '</div>' +
                '<span class="cart-item-price">' + fmt(price * c.qty) + '</span>' +
              '</div>' +
            '</div>' +
            '<button class="cart-item-remove" data-action="remove" data-id="' + p.id + '" aria-label="Remove item"><i data-lucide="trash-2"></i></button>' +
          '</div>'
        );
      }).join('');
    }

    const subtotal = state.cart.reduce((sum, c) => sum + unitPrice(findProduct(c.id)) * c.qty, 0);
    const shipping = subtotal > 0 ? (state.mode === 'wholesale' ? 0 : 3500) : 0;
    $('#cartSubtotal').textContent = fmt(subtotal);
    $('#cartShipping').textContent = shipping === 0 ? 'Free' : fmt(shipping);
    $('#cartTotal').textContent = fmt(subtotal + shipping);
    refreshIcons();
  }

  function initCartEvents() {
    $('#cartItems').addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action]');
      if (!btn) return;
      const id = btn.dataset.id;
      if (btn.dataset.action === 'inc') changeQty(id, 1);
      else if (btn.dataset.action === 'dec') changeQty(id, -1);
      else if (btn.dataset.action === 'remove') removeFromCart(id);
    });

    $('#cartBtn').addEventListener('click', openCart);
    $('#cartCloseBtn').addEventListener('click', closeCart);
    $('#overlay').addEventListener('click', closeCart);

    $('#checkoutBtn').addEventListener('click', () => {
      if (!state.cart.length) {
        showToast('Your cart is empty', 'info');
        return;
      }
      showToast('Demo checkout — order simulated successfully!');
      state.cart = [];
      renderCart();
      updateCartCount();
      closeCart();
    });
  }

  function openCart() {
    $('#cartDrawer').classList.add('open');
    $('#overlay').classList.add('visible');
  }
  function closeCart() {
    $('#cartDrawer').classList.remove('open');
    $('#overlay').classList.remove('visible');
  }

  /* ------------------------------------------------------------------ *
   *  11. NOTIFY ME MODAL
   * ------------------------------------------------------------------ */

  let notifyTargetId = null;

  function openNotifyModal(id) {
    notifyTargetId = id;
    const p = findProduct(id);
    $('#notifyProductName').textContent = 'We’ll email you the moment "' + p.name + '" (' + p.sku + ') is back in stock.';
    $('#notifyModal').classList.add('visible');
    $('#modalOverlay').classList.add('visible');
    $('#notifyEmailInput').value = '';
    $('#notifyEmailInput').focus();
  }

  function closeNotifyModal() {
    $('#notifyModal').classList.remove('visible');
    $('#modalOverlay').classList.remove('visible');
    notifyTargetId = null;
  }

  function initNotifyModal() {
    $('#notifyCloseBtn').addEventListener('click', closeNotifyModal);
    $('#notifyCancelBtn').addEventListener('click', closeNotifyModal);
    $('#modalOverlay').addEventListener('click', closeNotifyModal);
    $('#notifyConfirmBtn').addEventListener('click', () => {
      const email = $('#notifyEmailInput').value.trim();
      if (!email || !email.includes('@')) {
        showToast('Please enter a valid email address', 'info');
        return;
      }
      showToast('You’ll be notified when this part is back in stock');
      closeNotifyModal();
    });
  }

  /* ------------------------------------------------------------------ *
   *  12. RETAIL / WHOLESALE MODE TOGGLE
   * ------------------------------------------------------------------ */

  function initModeToggle() {
    $('#modeToggle').addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-mode]');
      if (!btn) return;
      state.mode = btn.dataset.mode;
      $all('#modeToggle button').forEach((b) => b.classList.toggle('active', b === btn));
      $('#wholesaleBanner').classList.toggle('visible', state.mode === 'wholesale');
      render();
      renderCart();
      showToast(state.mode === 'wholesale' ? 'Switched to Wholesale (B2B) pricing' : 'Switched to Retail pricing', 'info');
    });
  }

  /* ------------------------------------------------------------------ *
   *  13. MISC (newsletter, mobile menu, footer year)
   * ------------------------------------------------------------------ */

  function initMisc() {
    $('#year').textContent = new Date().getFullYear();

    $('#newsletterForm').addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed! Watch your inbox for stock updates.');
      e.target.reset();
    });

    $('#mobileMenuBtn').addEventListener('click', () => {
      $('#mainNav').classList.toggle('mobile-open');
    });

    $('#accountBtn').addEventListener('click', () => showToast('Account login is a demo placeholder', 'info'));
    $('#wishlistNavBtn').addEventListener('click', () => {
      showToast(state.wishlist.size + ' item(s) in your wishlist', 'info');
    });
  }

  /* ------------------------------------------------------------------ *
   *  14. INIT
   * ------------------------------------------------------------------ */

  document.addEventListener('DOMContentLoaded', () => {
    refreshIcons();
    initVehicleSelector();
    initSearch();
    initFilters();
    initProductGridEvents();
    initCartEvents();
    initNotifyModal();
    initModeToggle();
    initMisc();
    render();
    renderCart();
    updateCartCount();
  });
})();
