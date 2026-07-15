/* ==========================================================================
   SALIM AUTO PARTS — PartSouq-inspired storefront logic
   i18n (FR/AR + RTL), theme toggle, OEM/VIN search, cart, stock simulator.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ *
   *  1. TRANSLATIONS
   * ------------------------------------------------------------------ */

  const TRANSLATIONS = {
    fr: {
      tagline: "Spécialiste Pièces d'Origine", track_order: 'Suivre ma commande', b2b_partner: 'Devenir partenaire B2B', help: 'Aide',
      nav_shop: 'Boutique', nav_brands: 'Marques', nav_wholesale: 'Vente en gros (B2B)', nav_contact: 'Contact',
      mode_retail: 'Détail', mode_wholesale: 'Gros', sim_label: 'Simuler rupture de stock',
      wholesale_banner: 'Mode Vente en gros (B2B) actif — remises appliquées automatiquement.',
      hero_badge: 'Spécialiste Toyota · Nissan · Lexus · Infiniti', hero_title_1: "Pièces d'origine,", hero_title_span: 'trouvées en secondes.',
      hero_lede: 'Recherchez par numéro de référence OEM ou par numéro de châssis (VIN) pour trouver la pièce exacte.',
      tab_oem: 'Numéro OEM', tab_vin: 'Numéro de châssis (VIN)', tab_model: 'Par modèle',
      oem_placeholder: 'Ex. 90915-YZZD4', oem_hint: 'Essayez :',
      vin_placeholder: 'Ex. JTMBK3FV000000001 (17 caractères)', vin_hint: 'Essayez :',
      vin_detected: 'Véhicule détecté :', vin_not_found: "VIN non reconnu. Essayez l'un des exemples ci-dessus.",
      model_select_brand_ph: 'Choisir la marque', model_select_model_ph: 'Choisir le modèle',
      search_btn: 'Rechercher',
      brands_eyebrow: 'Nos marques', brands_title: 'Achetez par marque',
      models_eyebrow: 'Véhicules populaires', models_title: 'Modèles les plus demandés',
      categories_eyebrow: 'Catégories', categories_title: 'Trouvez plus vite', view_all: 'Voir toutes les catégories',
      cat_engine: 'Moteur', cat_brake: 'Freinage', cat_suspension: 'Suspension', cat_filter: 'Filtres', cat_electrical: 'Électrique', cat_body: 'Carrosserie',
      shop_eyebrow: 'Catalogue', shop_title: 'Pièces en vedette', shop_subtitle: 'Pièces d’origine et premium pour Toyota, Nissan, Lexus et Infiniti.',
      grid_search_placeholder: 'Rechercher une pièce, SKU, modèle...',
      filter_brand: 'Marque', filter_category: 'Catégorie', filter_availability: 'Disponibilité',
      avail_in_stock: 'En stock', avail_out_stock: 'Indisponible', clear_filters: 'Réinitialiser', results_found: 'pièces trouvées',
      sort_relevance: 'Trier : Pertinence', sort_price_asc: 'Prix croissant', sort_price_desc: 'Prix décroissant', sort_name: 'Nom : A-Z',
      fits: 'Compatible :', sku: 'Référence :', in_stock: 'En stock', not_available: 'Indisponible', currently_unavailable: 'Actuellement indisponible',
      add_to_cart: 'Ajouter au panier', notify_me: 'Demander la pièce', min_order: 'Commande min. :', units: 'unité(s)',
      no_results: 'Aucune pièce ne correspond à vos filtres.',
      cta_eyebrow: 'Programme B2B', cta_title: 'Garagiste ou revendeur ? Profitez des tarifs de gros.',
      cta_desc: 'Débloquez des remises par palier, un support dédié et une allocation de stock prioritaire.',
      cta_perk1: "Jusqu'à 30% de remise", cta_perk2: 'Expédition prioritaire', cta_perk3: 'Gestionnaire de compte dédié', cta_btn: 'Demander un compte B2B',
      trust1_t: "100% Pièces d'origine", trust1_d: 'Sourcées auprès de canaux autorisés.',
      trust2_t: 'Livraison rapide', trust2_d: 'Expédition le jour même pour le stock disponible.',
      trust3_t: 'Garantie incluse', trust3_d: 'Chaque pièce est couverte par une garantie de compatibilité.',
      trust4_t: 'Tarifs de gros', trust4_d: 'Remises automatiques en mode Vente en gros.',
      newsletter_title: 'Restez informé des stocks et tarifs', newsletter_desc: 'Recevez les nouveautés, réapprovisionnements et offres B2B.',
      newsletter_ph: 'vous@entreprise.com', subscribe: "S'abonner",
      footer_desc: 'Spécialiste en pièces détachées d’origine et premium pour Toyota, Nissan, Lexus et Infiniti — vente en gros et au détail.',
      footer_shop: 'Boutique', footer_by_brand: 'Par marque', footer_by_cat: 'Par catégorie', footer_all_parts: 'Toutes les pièces', footer_wholesale: 'Vente en gros (B2B)',
      footer_support: 'Assistance', footer_track: 'Suivre ma commande', footer_returns: 'Retours & garantie', footer_shipping: 'Livraison', footer_faq: 'FAQ',
      footer_company: 'Société', footer_about: 'À propos', footer_partner: 'Devenir partenaire', footer_contact: 'Contact', footer_careers: 'Carrières',
      footer_rights: 'Tous droits réservés.',
      cart_title: 'Votre panier', cart_empty: 'Votre panier est vide.', cart_empty_sub: 'Parcourez le catalogue pour ajouter des pièces.',
      cart_subtotal: 'Sous-total', cart_shipping: 'Livraison estimée', cart_total: 'Total', cart_checkout: 'Passer la commande',
      cart_wholesale_note: 'Tarifs de gros appliqués à cette commande.', cart_free: 'Gratuit',
      notify_title: 'Être notifié du réapprovisionnement', notify_desc_prefix: 'Nous vous enverrons un email dès que', notify_desc_suffix: 'sera de nouveau disponible.',
      notify_ph: 'vous@email.com', notify_cancel: 'Annuler', notify_confirm: "M'avertir",
      toast_added_cart: 'Ajouté au panier', toast_wholesale_on: 'Mode Vente en gros (B2B) activé', toast_retail_on: 'Mode Détail activé',
      toast_filters_cleared: 'Filtres réinitialisés', toast_notify_confirmed: 'Vous serez averti dès le retour en stock',
      toast_invalid_email: 'Veuillez saisir une adresse email valide', toast_checkout: 'Commande de démonstration simulée avec succès !',
      toast_cart_empty: 'Votre panier est vide', toast_subscribed: 'Abonnement confirmé ! Surveillez votre boîte mail.',
      toast_sim_on: 'Démo : toutes les pièces forcées en rupture de stock', toast_sim_off: 'Démo : niveaux de stock restaurés',
      toast_wishlist_added: 'Ajouté aux favoris', toast_wishlist_removed: 'Retiré des favoris', account_demo: 'La connexion au compte est une démo',
      toast_vehicle_found: 'Affichage des pièces pour'
    },
    ar: {
      tagline: 'متخصصون في قطع الغيار الأصلية', track_order: 'تتبع الطلب', b2b_partner: 'كن شريك جملة', help: 'مساعدة',
      nav_shop: 'المتجر', nav_brands: 'الماركات', nav_wholesale: 'البيع بالجملة (B2B)', nav_contact: 'اتصل بنا',
      mode_retail: 'تجزئة', mode_wholesale: 'جملة', sim_label: 'محاكاة نفاد المخزون',
      wholesale_banner: 'وضع البيع بالجملة (B2B) مُفعّل — يتم تطبيق خصومات الكمية تلقائيًا.',
      hero_badge: 'متخصصون في تويوتا · نيسان · لكزس · إنفينيتي', hero_title_1: 'قطع غيار أصلية،', hero_title_span: 'تجدها في ثوانٍ.',
      hero_lede: 'ابحث برقم القطعة الأصلي (OEM) أو برقم الهيكل (VIN) للعثور على القطعة المطابقة تمامًا.',
      tab_oem: 'رقم القطعة (OEM)', tab_vin: 'رقم الهيكل (VIN)', tab_model: 'حسب الموديل',
      oem_placeholder: 'مثال: 90915-YZZD4', oem_hint: 'جرّب:',
      vin_placeholder: 'مثال: JTMBK3FV000000001 (17 رمزًا)', vin_hint: 'جرّب:',
      vin_detected: 'تم التعرف على المركبة:', vin_not_found: 'رقم الهيكل غير معروف. جرّب أحد الأمثلة أعلاه.',
      model_select_brand_ph: 'اختر الماركة', model_select_model_ph: 'اختر الموديل',
      search_btn: 'بحث',
      brands_eyebrow: 'ماركاتنا', brands_title: 'تسوّق حسب الماركة',
      models_eyebrow: 'المركبات الشائعة', models_title: 'الموديلات الأكثر طلبًا',
      categories_eyebrow: 'الفئات', categories_title: 'ابحث بشكل أسرع', view_all: 'عرض كل الفئات',
      cat_engine: 'قطع المحرك', cat_brake: 'نظام الفرامل', cat_suspension: 'نظام التعليق', cat_filter: 'الفلاتر', cat_electrical: 'الكهرباء', cat_body: 'الهيكل والتشطيب',
      shop_eyebrow: 'الكتالوج', shop_title: 'قطع مميزة', shop_subtitle: 'قطع غيار أصلية وبديلة ممتازة لسيارات تويوتا ونيسان ولكزس وإنفينيتي.',
      grid_search_placeholder: 'ابحث عن قطعة، رقم SKU، موديل...',
      filter_brand: 'الماركة', filter_category: 'الفئة', filter_availability: 'التوفر',
      avail_in_stock: 'متوفر', avail_out_stock: 'غير متوفر', clear_filters: 'إعادة تعيين', results_found: 'قطعة موجودة',
      sort_relevance: 'الترتيب: الأنسب', sort_price_asc: 'السعر: من الأقل', sort_price_desc: 'السعر: من الأعلى', sort_name: 'الاسم: أ-ي',
      fits: 'يناسب:', sku: 'الرقم المرجعي:', in_stock: 'متوفر', not_available: 'غير متوفر', currently_unavailable: 'غير متوفر حاليًا',
      add_to_cart: 'أضف إلى السلة', notify_me: 'أعلمني عند التوفر', min_order: 'الحد الأدنى للطلب:', units: 'وحدة',
      no_results: 'لا توجد قطع مطابقة لعوامل التصفية.',
      cta_eyebrow: 'برنامج الجملة', cta_title: 'لديك ورشة أو تعيد بيع القطع؟ احصل على أسعار الجملة.',
      cta_desc: 'افتح خصومات متدرجة، دعمًا مخصصًا، وأولوية في توفر المخزون.',
      cta_perk1: 'خصم يصل إلى 30%', cta_perk2: 'شحن ذو أولوية', cta_perk3: 'مدير حساب مخصص', cta_btn: 'التقدم لحساب جملة',
      trust1_t: 'قطع أصلية 100%', trust1_d: 'مصدرها قنوات معتمدة.',
      trust2_t: 'شحن سريع', trust2_d: 'شحن في نفس اليوم للمخزون المتوفر.',
      trust3_t: 'ضمان شامل', trust3_d: 'كل قطعة مضمونة التوافق.',
      trust4_t: 'أسعار الجملة', trust4_d: 'خصومات تلقائية في وضع الجملة.',
      newsletter_title: 'ابقَ على اطّلاع بالمخزون والأسعار', newsletter_desc: 'احصل على إشعارات بالوافدين الجدد وتوفر المخزون وعروض الجملة.',
      newsletter_ph: 'you@company.com', subscribe: 'اشتراك',
      footer_desc: 'متخصصون في قطع الغيار الأصلية والبديلة الممتازة لتويوتا ونيسان ولكزس وإنفينيتي — بالجملة والتجزئة.',
      footer_shop: 'المتجر', footer_by_brand: 'حسب الماركة', footer_by_cat: 'حسب الفئة', footer_all_parts: 'كل القطع', footer_wholesale: 'البيع بالجملة (B2B)',
      footer_support: 'الدعم', footer_track: 'تتبع الطلب', footer_returns: 'الإرجاع والضمان', footer_shipping: 'معلومات الشحن', footer_faq: 'الأسئلة الشائعة',
      footer_company: 'الشركة', footer_about: 'من نحن', footer_partner: 'كن شريكًا', footer_contact: 'اتصل بنا', footer_careers: 'الوظائف',
      footer_rights: 'جميع الحقوق محفوظة.',
      cart_title: 'سلة التسوق', cart_empty: 'سلتك فارغة.', cart_empty_sub: 'تصفح الكتالوج لإضافة قطع غيار.',
      cart_subtotal: 'المجموع الفرعي', cart_shipping: 'الشحن التقديري', cart_total: 'الإجمالي', cart_checkout: 'إتمام الطلب',
      cart_wholesale_note: 'تم تطبيق أسعار الجملة على هذا الطلب.', cart_free: 'مجاني',
      notify_title: 'أعلمني عند توفر القطعة', notify_desc_prefix: 'سنرسل لك بريدًا إلكترونيًا بمجرد أن تصبح', notify_desc_suffix: 'متوفرة مجددًا.',
      notify_ph: 'you@email.com', notify_cancel: 'إلغاء', notify_confirm: 'أعلمني',
      toast_added_cart: 'تمت الإضافة إلى السلة', toast_wholesale_on: 'تم تفعيل وضع الجملة (B2B)', toast_retail_on: 'تم تفعيل وضع التجزئة',
      toast_filters_cleared: 'تمت إعادة تعيين عوامل التصفية', toast_notify_confirmed: 'سيتم إعلامك فور توفر القطعة',
      toast_invalid_email: 'يرجى إدخال بريد إلكتروني صحيح', toast_checkout: 'تمت محاكاة الطلب التجريبي بنجاح!',
      toast_cart_empty: 'سلتك فارغة', toast_subscribed: 'تم الاشتراك! راقب بريدك الإلكتروني.',
      toast_sim_on: 'تجريبي: تم فرض نفاد المخزون على جميع القطع', toast_sim_off: 'تجريبي: تمت استعادة مستويات المخزون',
      toast_wishlist_added: 'تمت الإضافة إلى المفضلة', toast_wishlist_removed: 'تمت الإزالة من المفضلة', account_demo: 'تسجيل الدخول تجريبي فقط',
      toast_vehicle_found: 'عرض القطع الخاصة بـ'
    },
    en: {
      tagline: 'Genuine & OEM Parts Specialist', track_order: 'Track my order', b2b_partner: 'Become a B2B partner', help: 'Help',
      nav_shop: 'Shop', nav_brands: 'Brands', nav_wholesale: 'Wholesale (B2B)', nav_contact: 'Contact',
      mode_retail: 'Retail', mode_wholesale: 'Wholesale', sim_label: 'Simulate out of stock',
      wholesale_banner: 'Wholesale (B2B) mode active — bulk discounts applied automatically.',
      hero_badge: 'Toyota · Nissan · Lexus · Infiniti specialist', hero_title_1: 'Genuine parts,', hero_title_span: 'found in seconds.',
      hero_lede: 'Search by OEM reference number or by chassis number (VIN) to find the exact part.',
      tab_oem: 'OEM Number', tab_vin: 'Chassis Number (VIN)', tab_model: 'By Model',
      oem_placeholder: 'e.g. 90915-YZZD4', oem_hint: 'Try:',
      vin_placeholder: 'e.g. JTMBK3FV000000001 (17 characters)', vin_hint: 'Try:',
      vin_detected: 'Vehicle detected:', vin_not_found: 'VIN not recognized. Try one of the examples above.',
      model_select_brand_ph: 'Select brand', model_select_model_ph: 'Select model',
      search_btn: 'Search',
      brands_eyebrow: 'Our brands', brands_title: 'Shop by brand',
      models_eyebrow: 'Popular vehicles', models_title: 'Most requested models',
      categories_eyebrow: 'Categories', categories_title: 'Find it faster', view_all: 'View all categories',
      cat_engine: 'Engine Parts', cat_brake: 'Brake System', cat_suspension: 'Suspension', cat_filter: 'Filters', cat_electrical: 'Electrical', cat_body: 'Body & Trim',
      shop_eyebrow: 'Catalog', shop_title: 'Featured Parts', shop_subtitle: 'Genuine and premium-aftermarket parts for Toyota, Nissan, Lexus and Infiniti.',
      grid_search_placeholder: 'Search parts, SKU, model...',
      filter_brand: 'Brand', filter_category: 'Category', filter_availability: 'Availability',
      avail_in_stock: 'In Stock', avail_out_stock: 'Not Available', clear_filters: 'Clear filters', results_found: 'parts found',
      sort_relevance: 'Sort: Relevance', sort_price_asc: 'Price: Low to High', sort_price_desc: 'Price: High to Low', sort_name: 'Name: A-Z',
      fits: 'Fits:', sku: 'Reference:', in_stock: 'In Stock', not_available: 'Not Available', currently_unavailable: 'Currently unavailable',
      add_to_cart: 'Add to Cart', notify_me: 'Notify Me', min_order: 'Min. order:', units: 'unit(s)',
      no_results: 'No parts match your filters.',
      cta_eyebrow: 'B2B Program', cta_title: 'Run a garage or resell parts? Get wholesale pricing.',
      cta_desc: 'Unlock tiered bulk pricing, dedicated support and priority stock allocation.',
      cta_perk1: 'Up to 30% off', cta_perk2: 'Priority shipping', cta_perk3: 'Dedicated account manager', cta_btn: 'Apply for a B2B account',
      trust1_t: '100% Genuine Parts', trust1_d: 'Sourced from authorized channels.',
      trust2_t: 'Fast Shipping', trust2_d: 'Same-day dispatch on in-stock orders.',
      trust3_t: 'Warranty Included', trust3_d: 'Every part is covered by a fitment guarantee.',
      trust4_t: 'Wholesale Pricing', trust4_d: 'Automatic discounts in Wholesale mode.',
      newsletter_title: 'Stay ahead on stock & pricing', newsletter_desc: 'Get notified about new arrivals, restocks and B2B offers.',
      newsletter_ph: 'you@company.com', subscribe: 'Subscribe',
      footer_desc: 'Genuine and premium-aftermarket parts specialist for Toyota, Nissan, Lexus and Infiniti — wholesale and retail.',
      footer_shop: 'Shop', footer_by_brand: 'By brand', footer_by_cat: 'By category', footer_all_parts: 'All parts', footer_wholesale: 'Wholesale (B2B)',
      footer_support: 'Support', footer_track: 'Track my order', footer_returns: 'Returns & warranty', footer_shipping: 'Shipping info', footer_faq: 'FAQ',
      footer_company: 'Company', footer_about: 'About us', footer_partner: 'Become a partner', footer_contact: 'Contact', footer_careers: 'Careers',
      footer_rights: 'All rights reserved.',
      cart_title: 'Your Cart', cart_empty: 'Your cart is empty.', cart_empty_sub: 'Browse the catalog to add parts.',
      cart_subtotal: 'Subtotal', cart_shipping: 'Estimated shipping', cart_total: 'Total', cart_checkout: 'Checkout',
      cart_wholesale_note: 'Wholesale pricing applied to this order.', cart_free: 'Free',
      notify_title: 'Get notified when back in stock', notify_desc_prefix: "We'll email you the moment", notify_desc_suffix: 'is available again.',
      notify_ph: 'you@email.com', notify_cancel: 'Cancel', notify_confirm: 'Notify Me',
      toast_added_cart: 'Added to cart', toast_wholesale_on: 'Wholesale (B2B) mode activated', toast_retail_on: 'Retail mode activated',
      toast_filters_cleared: 'Filters cleared', toast_notify_confirmed: "You'll be notified when this part is back in stock",
      toast_invalid_email: 'Please enter a valid email address', toast_checkout: 'Demo checkout — order simulated successfully!',
      toast_cart_empty: 'Your cart is empty', toast_subscribed: 'Subscribed! Watch your inbox.',
      toast_sim_on: 'Demo: all parts forced to "Not Available"', toast_sim_off: 'Demo: stock levels restored',
      toast_wishlist_added: 'Added to wishlist', toast_wishlist_removed: 'Removed from wishlist', account_demo: 'Account login is a demo placeholder',
      toast_vehicle_found: 'Showing parts for'
    }
  };

  /* ------------------------------------------------------------------ *
   *  2. DATA
   * ------------------------------------------------------------------ */

  const BRAND_LABELS = { toyota: 'Toyota', nissan: 'Nissan', lexus: 'Lexus', infiniti: 'Infiniti' };
  const CATEGORY_ICONS = { engine: 'cog', brake: 'disc', suspension: 'gauge', filter: 'filter', electrical: 'zap', body: 'layers' };

  const VEHICLE_MODELS = {
    toyota: ['Land Cruiser', 'Hilux', 'Corolla', 'Camry', 'Fortuner'],
    nissan: ['Patrol', 'GT-R', 'X-Trail', 'Navara'],
    lexus: ['LX570', 'RX350', 'ES350', 'IS300'],
    infiniti: ['QX80', 'Q50', 'QX60', 'FX35', 'G37']
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

  // Mock VIN -> vehicle decoder
  const VIN_DATABASE = {
    'JTMBK3FV000000001': { brand: 'toyota', model: 'Land Cruiser' },
    'MR0FZ29G000000002': { brand: 'toyota', model: 'Hilux' },
    'JN1AZ0CP0BM000001': { brand: 'nissan', model: 'GT-R' },
    'JN8AY2NC0BM000002': { brand: 'nissan', model: 'Patrol' },
    'JTHBK1GG000000003': { brand: 'lexus', model: 'LX570' },
    'JTJBK1BA0B0000004': { brand: 'lexus', model: 'RX350' },
    'JNKAY41E0BM000003': { brand: 'infiniti', model: 'QX80' },
    'JN1EV7AR0BM000004': { brand: 'infiniti', model: 'Q50' }
  };

  /* ------------------------------------------------------------------ *
   *  3. STATE
   * ------------------------------------------------------------------ */

  const state = {
    lang: localStorage.getItem('sap_lang') || 'fr',
    theme: localStorage.getItem('sap_theme') || 'light',
    mode: 'retail',
    simulateOOS: false,
    search: '',
    vehicleBrand: null,
    vehicleModel: null,
    filters: { brands: new Set(), categories: new Set(), availability: new Set() },
    sort: 'relevance',
    cart: [],
    wishlist: new Set()
  };

  /* ------------------------------------------------------------------ *
   *  4. HELPERS
   * ------------------------------------------------------------------ */

  function t(key) { return (TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang][key]) || key; }
  const LOCALE_MAP = { fr: 'fr-FR', en: 'en-US', ar: 'ar-EG' };
  const currency = () => new Intl.NumberFormat(LOCALE_MAP[state.lang] || 'fr-FR', { style: 'currency', currency: 'XOF', maximumFractionDigits: 0 });
  const fmt = (n) => currency().format(n).replace('XOF', 'FCFA');
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }
  function refreshIcons() { if (window.lucide) window.lucide.createIcons(); }
  function findProduct(id) { return PRODUCTS.find((p) => p.id === id); }
  function unitPrice(p) { return state.mode === 'wholesale' ? p.wholesalePrice : p.price; }
  function isInStock(p) { return state.simulateOOS ? false : p.stock; }

  /* ------------------------------------------------------------------ *
   *  5. i18n APPLICATION
   * ------------------------------------------------------------------ */

  function applyTranslations() {
    $all('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $all('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    const titles = {
      ar: 'سالم لقطع غيار السيارات | قطع تويوتا، نيسان، لكزس وإنفينيتي',
      en: 'Salim Auto Parts | Toyota, Nissan, Lexus & Infiniti Parts',
      fr: "Salim Auto Parts | Pièces Toyota, Nissan, Lexus & Infiniti"
    };
    document.title = titles[state.lang] || titles.fr;
  }

  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('sap_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    $all('#langSwitch button').forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
    applyTranslations();
    render();
    renderCart();
  }

  function setTheme(theme) {
    state.theme = theme;
    localStorage.setItem('sap_theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }

  /* ------------------------------------------------------------------ *
   *  6. TOASTS
   * ------------------------------------------------------------------ */

  function showToast(message, type) {
    const stack = $('#toastStack');
    const el = document.createElement('div');
    el.className = 'toast ' + (type || 'success');
    el.innerHTML = '<i data-lucide="' + (type === 'info' ? 'info' : 'check-circle-2') + '" class="ticon"></i><span>' + message + '</span>';
    stack.appendChild(el);
    refreshIcons();
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => el.remove(), 260);
    }, 3200);
  }

  /* ------------------------------------------------------------------ *
   *  7. SEARCH (OEM + VIN)
   * ------------------------------------------------------------------ */

  function initSearch() {
    $all('.finder-tabs button').forEach((btn) => {
      btn.addEventListener('click', () => {
        $all('.finder-tabs button').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        $all('.finder-panel').forEach((p) => p.classList.remove('active'));
        $('#panel-' + btn.dataset.panel).classList.add('active');
      });
    });

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

    $('#vinSearchForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const vin = $('#vinSearchInput').value.trim().toUpperCase();
      const match = VIN_DATABASE[vin];
      const box = $('#vinResult');
      box.classList.add('visible');
      box.classList.toggle('error', !match);

      if (match) {
        const message = t('vin_detected') + ' ' + BRAND_LABELS[match.brand] + ' ' + match.model;
        box.innerHTML = '<i data-lucide="check-circle-2"></i><span id="vinResultText">' + message + '</span>';
        state.vehicleBrand = match.brand;
        state.vehicleModel = match.model;
        state.search = '';
        state.filters.brands = new Set([match.brand]);
        syncFilterCheckboxes();
        render();
        $('#shop').scrollIntoView({ behavior: 'smooth' });
        showToast(t('toast_vehicle_found') + ' ' + BRAND_LABELS[match.brand] + ' ' + match.model, 'info');
      } else {
        box.innerHTML = '<i data-lucide="alert-circle"></i><span id="vinResultText">' + t('vin_not_found') + '</span>';
      }
      refreshIcons();
    });

    $('#gridSearchInput').addEventListener('input', (e) => { state.search = e.target.value.trim(); render(); });

    $all('[data-fill]').forEach((chip) => {
      chip.addEventListener('click', () => {
        const panel = chip.closest('.finder-panel');
        const input = panel.querySelector('input');
        input.value = chip.dataset.fill;
        input.focus();
      });
    });
  }

  function initModelSearch() {
    const brandSelect = $('#modelBrandSelect');
    const modelSelect = $('#modelModelSelect');
    const findBtn = $('#modelFindBtn');

    brandSelect.addEventListener('change', () => {
      const brand = brandSelect.value;
      modelSelect.disabled = !brand;
      findBtn.disabled = true;
      modelSelect.innerHTML = '<option value="">' + t('model_select_model_ph') + '</option>' +
        (brand ? VEHICLE_MODELS[brand].map((m) => '<option value="' + m + '">' + m + '</option>').join('') : '');
    });

    modelSelect.addEventListener('change', () => { findBtn.disabled = !modelSelect.value; });

    findBtn.addEventListener('click', () => {
      const brand = brandSelect.value;
      const model = modelSelect.value;
      if (!brand || !model) return;
      state.vehicleBrand = brand;
      state.vehicleModel = model;
      state.search = '';
      state.filters.brands = new Set([brand]);
      syncFilterCheckboxes();
      render();
      $('#shop').scrollIntoView({ behavior: 'smooth' });
      showToast(t('toast_vehicle_found') + ' ' + BRAND_LABELS[brand] + ' ' + model, 'info');
    });
  }

  /* ------------------------------------------------------------------ *
   *  8. FILTERS + SORT
   * ------------------------------------------------------------------ */

  function syncFilterCheckboxes() {
    $all('#filterBrand input').forEach((cb) => { cb.checked = state.filters.brands.has(cb.value); });
    $all('#filterCategory input').forEach((cb) => { cb.checked = state.filters.categories.has(cb.value); });
    $all('#filterAvailability input').forEach((cb) => { cb.checked = state.filters.availability.has(cb.value); });
  }

  function initFilters() {
    ['filterBrand', 'filterCategory', 'filterAvailability'].forEach((groupId) => {
      $('#' + groupId).addEventListener('change', (e) => {
        if (e.target.tagName !== 'INPUT') return;
        const set = groupId === 'filterBrand' ? state.filters.brands : groupId === 'filterCategory' ? state.filters.categories : state.filters.availability;
        if (e.target.checked) set.add(e.target.value); else set.delete(e.target.value);
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
      showToast(t('toast_filters_cleared'), 'info');
    });

    $('#sortSelect').addEventListener('change', (e) => { state.sort = e.target.value; render(); });

    $all('[data-brand-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.filters.brands = new Set([btn.dataset.brandFilter]);
        state.vehicleBrand = null;
        state.vehicleModel = null;
        syncFilterCheckboxes();
        render();
        $('#shop').scrollIntoView({ behavior: 'smooth' });
      });
    });

    $all('[data-cat-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.filters.categories = new Set([btn.dataset.catFilter]);
        syncFilterCheckboxes();
        render();
        $('#shop').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function getFilteredSortedProducts() {
    let list = PRODUCTS.slice();
    if (state.vehicleModel) list = list.filter((p) => p.brand === state.vehicleBrand && p.fits.includes(state.vehicleModel));
    if (state.filters.brands.size) list = list.filter((p) => state.filters.brands.has(p.brand));
    if (state.filters.categories.size) list = list.filter((p) => state.filters.categories.has(p.category));
    if (state.filters.availability.size) {
      list = list.filter((p) => {
        const stock = isInStock(p);
        if (state.filters.availability.has('in-stock') && stock) return true;
        if (state.filters.availability.has('out-of-stock') && !stock) return true;
        return false;
      });
    }
    if (state.search) {
      const q = state.search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.fits.some((f) => f.toLowerCase().includes(q)));
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
   *  9. PRODUCT GRID
   * ------------------------------------------------------------------ */

  function productCardHTML(p) {
    const stock = isInStock(p);
    const wholesale = state.mode === 'wholesale';
    const price = unitPrice(p);
    const inWishlist = state.wishlist.has(p.id);

    const stockBadge = stock
      ? '<span class="badge badge-success"><i data-lucide="check-circle"></i>' + t('in_stock') + '</span>'
      : '<span class="badge badge-danger"><i data-lucide="x-circle"></i>' + t('not_available') + '</span>';

    const actions = stock
      ? '<button class="btn btn-primary" data-action="add-to-cart" data-id="' + p.id + '"><i data-lucide="shopping-cart"></i>' + t('add_to_cart') + '</button>'
      : '<button class="btn btn-disabled" disabled><i data-lucide="ban"></i>' + t('not_available') + '</button>' +
        '<button class="btn btn-outline" data-action="notify" data-id="' + p.id + '"><i data-lucide="bell"></i>' + t('notify_me') + '</button>';

    const stockLine = stock
      ? '<span class="stock-line in"><i data-lucide="check-circle"></i>' + t('in_stock') + '</span>'
      : '<span class="stock-line out"><i data-lucide="x-circle"></i>' + t('currently_unavailable') + '</span>';

    const wholesaleNote = wholesale
      ? '<span class="wholesale-note"><i data-lucide="package"></i>' + t('min_order') + ' ' + p.moq + ' ' + t('units') + '</span>'
      : '';

    return (
      '<article class="product-card' + (stock ? '' : ' out-of-stock') + '" data-id="' + p.id + '">' +
        '<div class="product-media cat-' + p.category + '">' +
          '<div class="media-badges">' + stockBadge +
            '<button class="wishlist-btn' + (inWishlist ? ' active' : '') + '" data-action="wishlist" data-id="' + p.id + '" aria-label="Wishlist"><i data-lucide="heart"></i></button>' +
          '</div>' +
          '<i data-lucide="' + CATEGORY_ICONS[p.category] + '"></i>' +
        '</div>' +
        '<div class="product-body">' +
          '<span class="product-brand-row"><span class="brand-dot ' + p.brand + '"></span>' + BRAND_LABELS[p.brand] + ' &middot; ' + t('cat_' + p.category) + '</span>' +
          '<h3 class="product-name">' + p.name + '</h3>' +
          '<span class="product-fit">' + t('fits') + ' ' + p.fits.join(', ') + '</span>' +
          '<span class="product-sku">' + t('sku') + ' <b>' + p.sku + '</b></span>' +
          '<span class="product-rating"><i data-lucide="star"></i> ' + p.rating.toFixed(1) + ' (' + p.reviews + ')</span>' +
          '<div class="price-row"><span class="price-now">' + fmt(price) + '</span></div>' +
          wholesaleNote + stockLine +
          '<div class="product-actions">' + actions + '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function render() {
    const list = getFilteredSortedProducts();
    $('#productGrid').innerHTML = list.map(productCardHTML).join('');
    $('#resultCount').textContent = list.length;
    $('#noResults').style.display = list.length ? 'none' : 'block';
    refreshIcons();
  }

  function initProductGridEvents() {
    $('#productGrid').addEventListener('click', (e) => {
      const addBtn = e.target.closest('[data-action="add-to-cart"]');
      const notifyBtn = e.target.closest('[data-action="notify"]');
      const wishBtn = e.target.closest('[data-action="wishlist"]');
      if (addBtn) addToCart(addBtn.dataset.id);
      else if (notifyBtn) openNotifyModal(notifyBtn.dataset.id);
      else if (wishBtn) toggleWishlist(wishBtn.dataset.id, wishBtn);
    });
  }

  function toggleWishlist(id, btn) {
    if (state.wishlist.has(id)) { state.wishlist.delete(id); btn.classList.remove('active'); showToast(t('toast_wishlist_removed'), 'info'); }
    else { state.wishlist.add(id); btn.classList.add('active'); showToast(t('toast_wishlist_added')); }
  }

  /* ------------------------------------------------------------------ *
   *  10. CART
   * ------------------------------------------------------------------ */

  function addToCart(id) {
    const existing = state.cart.find((c) => c.id === id);
    if (existing) existing.qty += 1; else state.cart.push({ id, qty: 1 });
    renderCart(); updateCartCount(); showToast(t('toast_added_cart')); openCart();
  }
  function changeQty(id, delta) {
    const item = state.cart.find((c) => c.id === id); if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) state.cart = state.cart.filter((c) => c.id !== id);
    renderCart(); updateCartCount();
  }
  function removeFromCart(id) { state.cart = state.cart.filter((c) => c.id !== id); renderCart(); updateCartCount(); }
  function updateCartCount() { $('#cartCount').textContent = state.cart.reduce((s, c) => s + c.qty, 0); }

  function renderCart() {
    const container = $('#cartItems');
    const modeNote = $('#drawerModeNote');
    modeNote.classList.toggle('visible', state.mode === 'wholesale' && state.cart.length > 0);

    if (!state.cart.length) {
      container.innerHTML = '<div class="cart-empty"><i data-lucide="shopping-cart"></i><p>' + t('cart_empty') + '<br>' + t('cart_empty_sub') + '</p></div>';
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
              '<div class="cisku">' + BRAND_LABELS[p.brand] + ' &middot; ' + p.sku + '</div>' +
              '<div class="cart-item-row">' +
                '<div class="qty-stepper">' +
                  '<button data-action="dec" data-id="' + p.id + '" aria-label="-">&minus;</button>' +
                  '<span>' + c.qty + '</span>' +
                  '<button data-action="inc" data-id="' + p.id + '" aria-label="+">+</button>' +
                '</div>' +
                '<span class="cart-item-price">' + fmt(price * c.qty) + '</span>' +
              '</div>' +
            '</div>' +
            '<button class="cart-item-remove" data-action="remove" data-id="' + p.id + '" aria-label="Remove"><i data-lucide="trash-2"></i></button>' +
          '</div>'
        );
      }).join('');
    }

    const subtotal = state.cart.reduce((sum, c) => sum + unitPrice(findProduct(c.id)) * c.qty, 0);
    const shipping = subtotal > 0 ? (state.mode === 'wholesale' ? 0 : 3500) : 0;
    $('#cartSubtotal').textContent = fmt(subtotal);
    $('#cartShipping').textContent = shipping === 0 ? t('cart_free') : fmt(shipping);
    $('#cartTotal').textContent = fmt(subtotal + shipping);
    refreshIcons();
  }

  function initCartEvents() {
    $('#cartItems').addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action]'); if (!btn) return;
      const id = btn.dataset.id;
      if (btn.dataset.action === 'inc') changeQty(id, 1);
      else if (btn.dataset.action === 'dec') changeQty(id, -1);
      else if (btn.dataset.action === 'remove') removeFromCart(id);
    });
    $('#cartBtn').addEventListener('click', openCart);
    $('#cartCloseBtn').addEventListener('click', closeCart);
    $('#overlay').addEventListener('click', closeCart);
    $('#checkoutBtn').addEventListener('click', () => {
      if (!state.cart.length) { showToast(t('toast_cart_empty'), 'info'); return; }
      showToast(t('toast_checkout'));
      state.cart = []; renderCart(); updateCartCount(); closeCart();
    });
  }
  function openCart() { $('#cartDrawer').classList.add('open'); $('#overlay').classList.add('visible'); }
  function closeCart() { $('#cartDrawer').classList.remove('open'); $('#overlay').classList.remove('visible'); }

  /* ------------------------------------------------------------------ *
   *  11. NOTIFY ME MODAL
   * ------------------------------------------------------------------ */

  function openNotifyModal(id) {
    const p = findProduct(id);
    $('#notifyProductName').textContent = t('notify_desc_prefix') + ' "' + p.name + '" (' + p.sku + ') ' + t('notify_desc_suffix');
    $('#notifyModal').classList.add('visible');
    $('#modalOverlay').classList.add('visible');
    $('#notifyEmailInput').value = '';
    $('#notifyEmailInput').focus();
    $('#notifyModal').dataset.targetId = id;
  }
  function closeNotifyModal() { $('#notifyModal').classList.remove('visible'); $('#modalOverlay').classList.remove('visible'); }

  function initNotifyModal() {
    $('#notifyCloseBtn').addEventListener('click', closeNotifyModal);
    $('#notifyCancelBtn').addEventListener('click', closeNotifyModal);
    $('#modalOverlay').addEventListener('click', closeNotifyModal);
    $('#notifyConfirmBtn').addEventListener('click', () => {
      const email = $('#notifyEmailInput').value.trim();
      if (!email || !email.includes('@')) { showToast(t('toast_invalid_email'), 'info'); return; }
      showToast(t('toast_notify_confirmed'));
      closeNotifyModal();
    });
  }

  /* ------------------------------------------------------------------ *
   *  12. RETAIL / WHOLESALE + THEME + SIMULATOR TOGGLES
   * ------------------------------------------------------------------ */

  function initModeToggle() {
    $('#modeToggle').addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-mode]'); if (!btn) return;
      state.mode = btn.dataset.mode;
      $all('#modeToggle button').forEach((b) => b.classList.toggle('active', b === btn));
      $('#wholesaleBanner').classList.toggle('visible', state.mode === 'wholesale');
      render(); renderCart();
      showToast(state.mode === 'wholesale' ? t('toast_wholesale_on') : t('toast_retail_on'), 'info');
    });
  }

  function initThemeToggle() {
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
    $('#themeToggleBtn').addEventListener('click', () => setTheme(state.theme === 'dark' ? 'light' : 'dark'));
  }

  function initLangSwitch() {
    $('#langSwitch').addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-lang]'); if (!btn) return;
      setLanguage(btn.dataset.lang);
    });
  }

  function initSimToggle() {
    $('#simOosToggle').addEventListener('change', (e) => {
      state.simulateOOS = e.target.checked;
      render();
      showToast(state.simulateOOS ? t('toast_sim_on') : t('toast_sim_off'), 'info');
    });
  }

  /* ------------------------------------------------------------------ *
   *  13. MISC
   * ------------------------------------------------------------------ */

  function initMisc() {
    $('#year').textContent = new Date().getFullYear();
    $('#newsletterForm').addEventListener('submit', (e) => { e.preventDefault(); showToast(t('toast_subscribed')); e.target.reset(); });
    $('#mobileMenuBtn').addEventListener('click', () => $('#mainNav').classList.toggle('mobile-open'));
    $('#wishlistNavBtn').addEventListener('click', () => showToast(state.wishlist.size + ' — ' + t('nav_brands'), 'info'));
  }

  /* ------------------------------------------------------------------ *
   *  14. INIT
   * ------------------------------------------------------------------ */

  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.setAttribute('lang', state.lang);
    document.documentElement.setAttribute('dir', state.lang === 'ar' ? 'rtl' : 'ltr');
    $all('#langSwitch button').forEach((b) => b.classList.toggle('active', b.dataset.lang === state.lang));

    refreshIcons();
    applyTranslations();
    initThemeToggle();
    initLangSwitch();
    initSimToggle();
    initSearch();
    initModelSearch();
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
