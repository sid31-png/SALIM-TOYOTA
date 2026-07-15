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
      model_select_year_ph: "Choisir l'année", model_select_version_ph: 'Choisir la version',
      version_standard: 'Standard', version_comfort: 'Confort / SE', version_sport: 'Sport / GR-F', version_hybrid: 'Hybride',
      search_btn: 'Rechercher',
      brands_eyebrow: 'Nos marques', brands_title: 'Achetez par marque',
      models_eyebrow: 'Véhicules populaires', models_title: 'Modèles les plus demandés',
      categories_eyebrow: 'Catégories', categories_title: 'Trouvez plus vite', view_all: 'Voir toutes les catégories',
      cat_engine: 'Moteur', cat_brake: 'Freinage', cat_suspension: 'Suspension', cat_filter: 'Filtres', cat_electrical: 'Électrique', cat_body: 'Carrosserie',
      shop_eyebrow: 'Catalogue', shop_title: 'Pièces en vedette', shop_subtitle: 'Pièces d’origine et premium pour Toyota, Nissan, Lexus et Infiniti.',
      grid_search_placeholder: 'Rechercher une pièce, SKU, modèle...',
      filter_brand: 'Marque', filter_category: 'Catégorie', filter_availability: 'Disponibilité',
      avail_in_stock: 'En stock', avail_out_stock: 'Indisponible', clear_filters: 'Réinitialiser', results_found: 'pièces trouvées', page_label: 'Page',
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
      contact_eyebrow: 'Contact', contact_title: 'Une question ? Contactez-nous',
      contact_phone_label: 'Téléphone', contact_email_label: 'Email',
      contact_location_label: 'Algérie', contact_location_value: 'Livraison dans tout le pays',
      payment_method_title: 'Méthode de paiement', payment_cod: 'Paiement à la livraison',
      payment_edahabia: 'Carte EDAHABIA (Dahabia)', payment_cib: 'Carte CIB',
      checkout_info_title: 'Vos informations de livraison', checkout_info_desc: 'Nécessaires pour confirmer et livrer votre commande.',
      checkout_full_name: 'Nom et prénom', checkout_phone: '+213 5XX XX XX XX', checkout_wilaya_ph: 'Choisir la wilaya', checkout_address: 'Adresse complète',
      checkout_continue: 'Continuer', checkout_back: 'Retour',
      checkout_card_title: 'Coordonnées bancaires', checkout_card_desc: 'Vos informations sont utilisées uniquement pour cette simulation.',
      checkout_card_name: 'Nom sur la carte', checkout_card_number: '0000 0000 0000 0000', checkout_card_expiry: 'MM/AA', checkout_card_cvv: 'CVV',
      checkout_otp_title: 'Confirmez votre commande', checkout_otp_desc: 'Un code de vérification a été envoyé au',
      checkout_otp_demo_label: 'Code de démonstration :', checkout_otp_placeholder: '------', checkout_otp_invalid: 'Code incorrect. Réessayez.',
      checkout_resend_otp: 'Renvoyer le code', checkout_otp_resent: 'Un nouveau code a été envoyé.', checkout_confirm: 'Confirmer la commande',
      checkout_fill_all: 'Merci de remplir tous les champs.', checkout_invalid_phone: 'Numéro de téléphone invalide.',
      checkout_invalid_card: 'Numéro de carte invalide (16 chiffres).', checkout_invalid_expiry: "Date d'expiration invalide (MM/AA).", checkout_invalid_cvv: 'CVV invalide (3 chiffres).',
      wishlist_title: 'Mes favoris', wishlist_empty: 'Votre liste de favoris est vide.', wishlist_empty_sub: 'Cliquez sur le cœur d’une pièce pour l’ajouter ici.',
      track_title: 'Suivre ma commande', track_desc: 'Statut de votre dernière commande de démonstration.',
      track_step1: 'Commande acceptée', track_step2: 'Préparation', track_step3: 'En cours de livraison', track_step4: 'Livrée',
      track_close: 'Fermer', track_status_paid: 'Payée', track_status_cod: 'Paiement à la livraison',
      track_no_order: 'Aucune commande récente — ceci est un aperçu de démonstration.',
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
      model_select_year_ph: 'اختر السنة', model_select_version_ph: 'اختر الفئة',
      version_standard: 'قياسي', version_comfort: 'مريح / SE', version_sport: 'رياضي / GR-F', version_hybrid: 'هجين',
      search_btn: 'بحث',
      brands_eyebrow: 'ماركاتنا', brands_title: 'تسوّق حسب الماركة',
      models_eyebrow: 'المركبات الشائعة', models_title: 'الموديلات الأكثر طلبًا',
      categories_eyebrow: 'الفئات', categories_title: 'ابحث بشكل أسرع', view_all: 'عرض كل الفئات',
      cat_engine: 'قطع المحرك', cat_brake: 'نظام الفرامل', cat_suspension: 'نظام التعليق', cat_filter: 'الفلاتر', cat_electrical: 'الكهرباء', cat_body: 'الهيكل والتشطيب',
      shop_eyebrow: 'الكتالوج', shop_title: 'قطع مميزة', shop_subtitle: 'قطع غيار أصلية وبديلة ممتازة لسيارات تويوتا ونيسان ولكزس وإنفينيتي.',
      grid_search_placeholder: 'ابحث عن قطعة، رقم SKU، موديل...',
      filter_brand: 'الماركة', filter_category: 'الفئة', filter_availability: 'التوفر',
      avail_in_stock: 'متوفر', avail_out_stock: 'غير متوفر', clear_filters: 'إعادة تعيين', results_found: 'قطعة موجودة', page_label: 'صفحة',
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
      contact_eyebrow: 'اتصل بنا', contact_title: 'هل لديك سؤال؟ تواصل معنا',
      contact_phone_label: 'الهاتف', contact_email_label: 'البريد الإلكتروني',
      contact_location_label: 'الجزائر', contact_location_value: 'توصيل إلى جميع أنحاء البلاد',
      payment_method_title: 'طريقة الدفع', payment_cod: 'الدفع عند الاستلام',
      payment_edahabia: 'بطاقة الذهبية (EDAHABIA)', payment_cib: 'بطاقة CIB',
      checkout_info_title: 'معلومات التوصيل', checkout_info_desc: 'ضرورية لتأكيد وتوصيل طلبك.',
      checkout_full_name: 'الاسم الكامل', checkout_phone: '+213 5XX XX XX XX', checkout_wilaya_ph: 'اختر الولاية', checkout_address: 'العنوان الكامل',
      checkout_continue: 'متابعة', checkout_back: 'رجوع',
      checkout_card_title: 'معلومات البطاقة البنكية', checkout_card_desc: 'تُستخدم معلوماتك فقط لهذه المحاكاة.',
      checkout_card_name: 'الاسم على البطاقة', checkout_card_number: '0000 0000 0000 0000', checkout_card_expiry: 'شهر/سنة', checkout_card_cvv: 'CVV',
      checkout_otp_title: 'أكد طلبك', checkout_otp_desc: 'تم إرسال رمز التحقق إلى',
      checkout_otp_demo_label: 'رمز تجريبي:', checkout_otp_placeholder: '------', checkout_otp_invalid: 'رمز غير صحيح. حاول مجدداً.',
      checkout_resend_otp: 'إعادة إرسال الرمز', checkout_otp_resent: 'تم إرسال رمز جديد.', checkout_confirm: 'تأكيد الطلب',
      checkout_fill_all: 'يرجى ملء جميع الحقول.', checkout_invalid_phone: 'رقم هاتف غير صالح.',
      checkout_invalid_card: 'رقم بطاقة غير صالح (16 رقم).', checkout_invalid_expiry: 'تاريخ انتهاء غير صالح (شهر/سنة).', checkout_invalid_cvv: 'CVV غير صالح (3 أرقام).',
      wishlist_title: 'المفضلة', wishlist_empty: 'قائمة المفضلة فارغة.', wishlist_empty_sub: 'اضغط على أيقونة القلب لإضافة قطعة هنا.',
      track_title: 'تتبع الطلب', track_desc: 'حالة آخر طلب تجريبي.',
      track_step1: 'تم قبول الطلب', track_step2: 'قيد التحضير', track_step3: 'في طور التوصيل', track_step4: 'تم التوصيل',
      track_close: 'إغلاق', track_status_paid: 'مدفوعة', track_status_cod: 'الدفع عند الاستلام',
      track_no_order: 'لا يوجد طلب حديث — هذه معاينة تجريبية.',
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
      model_select_year_ph: 'Select year', model_select_version_ph: 'Select version',
      version_standard: 'Standard', version_comfort: 'Comfort / SE', version_sport: 'Sport / GR-F', version_hybrid: 'Hybrid',
      search_btn: 'Search',
      brands_eyebrow: 'Our brands', brands_title: 'Shop by brand',
      models_eyebrow: 'Popular vehicles', models_title: 'Most requested models',
      categories_eyebrow: 'Categories', categories_title: 'Find it faster', view_all: 'View all categories',
      cat_engine: 'Engine Parts', cat_brake: 'Brake System', cat_suspension: 'Suspension', cat_filter: 'Filters', cat_electrical: 'Electrical', cat_body: 'Body & Trim',
      shop_eyebrow: 'Catalog', shop_title: 'Featured Parts', shop_subtitle: 'Genuine and premium-aftermarket parts for Toyota, Nissan, Lexus and Infiniti.',
      grid_search_placeholder: 'Search parts, SKU, model...',
      filter_brand: 'Brand', filter_category: 'Category', filter_availability: 'Availability',
      avail_in_stock: 'In Stock', avail_out_stock: 'Not Available', clear_filters: 'Clear filters', results_found: 'parts found', page_label: 'Page',
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
      contact_eyebrow: 'Contact', contact_title: 'Got a question? Get in touch',
      contact_phone_label: 'Phone', contact_email_label: 'Email',
      contact_location_label: 'Algeria', contact_location_value: 'Nationwide delivery',
      payment_method_title: 'Payment method', payment_cod: 'Cash on delivery',
      payment_edahabia: 'EDAHABIA (Dahabia) card', payment_cib: 'CIB card',
      checkout_info_title: 'Your delivery information', checkout_info_desc: 'Needed to confirm and deliver your order.',
      checkout_full_name: 'Full name', checkout_phone: '+213 5XX XX XX XX', checkout_wilaya_ph: 'Select your province (wilaya)', checkout_address: 'Full address',
      checkout_continue: 'Continue', checkout_back: 'Back',
      checkout_card_title: 'Card details', checkout_card_desc: 'Your details are only used for this simulation.',
      checkout_card_name: 'Name on card', checkout_card_number: '0000 0000 0000 0000', checkout_card_expiry: 'MM/YY', checkout_card_cvv: 'CVV',
      checkout_otp_title: 'Confirm your order', checkout_otp_desc: 'A verification code was sent to',
      checkout_otp_demo_label: 'Demo code:', checkout_otp_placeholder: '------', checkout_otp_invalid: 'Incorrect code. Try again.',
      checkout_resend_otp: 'Resend code', checkout_otp_resent: 'A new code has been sent.', checkout_confirm: 'Confirm order',
      checkout_fill_all: 'Please fill in all fields.', checkout_invalid_phone: 'Invalid phone number.',
      checkout_invalid_card: 'Invalid card number (16 digits).', checkout_invalid_expiry: 'Invalid expiry date (MM/YY).', checkout_invalid_cvv: 'Invalid CVV (3 digits).',
      wishlist_title: 'My Wishlist', wishlist_empty: 'Your wishlist is empty.', wishlist_empty_sub: 'Click a part’s heart icon to add it here.',
      track_title: 'Track my order', track_desc: 'Status of your latest demo order.',
      track_step1: 'Order accepted', track_step2: 'Preparation', track_step3: 'Out for delivery', track_step4: 'Delivered',
      track_close: 'Close', track_status_paid: 'Paid', track_status_cod: 'Cash on delivery',
      track_no_order: 'No recent order — this is a demo preview.',
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
  const CATEGORY_PHOTOS = {
    engine: 'https://commons.wikimedia.org/wiki/Special:FilePath/Spark_plugs.jpg?width=500',
    brake: 'https://commons.wikimedia.org/wiki/Special:FilePath/Disc_brake_pads.JPG?width=500',
    suspension: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shock_Absorbers_Detail.jpg?width=500',
    filter: 'https://commons.wikimedia.org/wiki/Special:FilePath/Oil_filter.JPG?width=500',
    electrical: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alternator.jpg?width=500',
    body: 'https://commons.wikimedia.org/wiki/Special:FilePath/Headlight_Honda_CR-Z.jpg?width=500'
  };

  const VEHICLE_MODELS = {
    toyota: ['Land Cruiser', 'Land Cruiser Prado', 'Hilux', 'Corolla', 'Camry', 'Fortuner', 'Yaris', 'Vitz', 'RAV4', 'Highlander', 'C-HR', 'Prius', 'Avalon', 'Avensis', 'Auris', 'Tacoma', 'Tundra', '4Runner', 'Sequoia', 'Sienna', 'Supra', 'Hiace', 'Innova', 'Alphard', 'Crown'],
    nissan: ['Patrol', 'GT-R', 'X-Trail', 'Navara', 'Sunny', 'Sentra', 'Altima', 'Maxima', 'Micra', 'Note', 'Juke', 'Qashqai', 'Murano', 'Pathfinder', 'Armada', 'Frontier', 'Titan', '370Z', 'Kicks', 'Rogue', 'Tiida', 'Almera'],
    lexus: ['LX570', 'RX350', 'ES350', 'IS300', 'GX460', 'GS', 'LS', 'RC', 'LC', 'CT', 'UX', 'NX'],
    infiniti: ['QX80', 'Q50', 'QX60', 'FX35', 'G37', 'M35', 'M37', 'Q70', 'EX35', 'QX50', 'QX56', 'QX30', 'Q30', 'Q60', 'JX35']
  };

  function yearsRange(start, end) {
    const out = [];
    for (let y = end; y >= start; y--) out.push(y);
    return out;
  }
  const MODEL_YEARS = yearsRange(2000, 2024);
  const VERSION_KEYS = ['version_standard', 'version_comfort', 'version_sport', 'version_hybrid'];

  const WILAYAS = [
    'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar', 'Blida', 'Bouira',
    'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger', 'Djelfa', 'Jijel', 'Sétif', 'Saïda',
    'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma', 'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara',
    'Ouargla', 'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arréridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt',
    'El Oued', 'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent', 'Ghardaïa',
    'Relizane', 'Timimoun', 'Bordj Badji Mokhtar', 'Ouled Djellal', 'Béni Abbès', 'In Salah', 'In Guezzam',
    'Touggourt', 'Djanet', "El M'Ghair", 'El Meniaa'
  ];

  const PRODUCTS = [
    { id: 'p01', brand: 'toyota', fits: ['Land Cruiser', 'Hilux', 'Fortuner'], name: { fr: "Filtre à huile moteur d'origine", en: 'Genuine Engine Oil Filter', ar: 'فلتر زيت المحرك الأصلي' }, category: 'filter', sku: '90915-YZZD4', price: 8500, wholesalePrice: 6200, moq: 5, stock: true, rating: 4.8, reviews: 214 },
    { id: 'p02', brand: 'toyota', fits: ['Land Cruiser'], name: { fr: 'Plaquettes de frein avant', en: 'Front Brake Pad Set', ar: 'طقم تيل فرامل أمامي' }, category: 'brake', sku: '04465-60290', price: 42000, wholesalePrice: 34000, moq: 3, stock: true, rating: 4.7, reviews: 132 },
    { id: 'p03', brand: 'toyota', fits: ['Land Cruiser'], name: { fr: 'Compresseur de suspension pneumatique', en: 'Air Suspension Compressor', ar: 'ضاغط تعليق هوائي' }, category: 'suspension', sku: '48910-60040', price: 185000, wholesalePrice: 162000, moq: 1, stock: false, rating: 4.6, reviews: 58 },
    { id: 'p04', brand: 'toyota', fits: ['Hilux'], name: { fr: 'Kit chaîne de distribution', en: 'Timing Belt Kit', ar: 'طقم جنزير التوقيت' }, category: 'engine', sku: '13568-09080', price: 65000, wholesalePrice: 54000, moq: 2, stock: true, rating: 4.9, reviews: 97 },
    { id: 'p05', brand: 'toyota', fits: ['Corolla', 'Camry'], name: { fr: 'Alternateur', en: 'Alternator Assembly', ar: 'مولد كهرباء (دينامو)' }, category: 'electrical', sku: '27060-0T170', price: 98000, wholesalePrice: 83000, moq: 2, stock: false, rating: 4.5, reviews: 41 },
    { id: 'p06', brand: 'toyota', fits: ['Fortuner'], name: { fr: 'Calandre de pare-chocs avant', en: 'Front Bumper Grille', ar: 'شبكة الصدام الأمامي' }, category: 'body', sku: '53101-0K230', price: 76000, wholesalePrice: 61000, moq: 2, stock: true, rating: 4.4, reviews: 26 },

    { id: 'p07', brand: 'nissan', fits: ['Patrol', 'X-Trail'], name: { fr: "Filtre à huile moteur d'origine", en: 'Genuine Engine Oil Filter', ar: 'فلتر زيت المحرك الأصلي' }, category: 'filter', sku: '15208-65F0E', price: 7800, wholesalePrice: 5900, moq: 5, stock: true, rating: 4.7, reviews: 188 },
    { id: 'p08', brand: 'nissan', fits: ['Patrol'], name: { fr: 'Disque de frein arrière', en: 'Rear Brake Disc Rotor', ar: 'قرص فرامل خلفي' }, category: 'brake', sku: '43206-1LA0A', price: 54000, wholesalePrice: 44000, moq: 2, stock: true, rating: 4.6, reviews: 74 },
    { id: 'p09', brand: 'nissan', fits: ['GT-R'], name: { fr: 'Amortisseur avant', en: 'Front Shock Absorber', ar: 'مساعد أمامي' }, category: 'suspension', sku: '56110-JF01A', price: 210000, wholesalePrice: 178000, moq: 1, stock: false, rating: 4.9, reviews: 33 },
    { id: 'p10', brand: 'nissan', fits: ['GT-R'], name: { fr: 'Turbocompresseur', en: 'Turbocharger Assembly', ar: 'توربو (شاحن توربيني)' }, category: 'engine', sku: '14411-JF00C', price: 890000, wholesalePrice: 760000, moq: 1, stock: false, rating: 5.0, reviews: 19 },
    { id: 'p11', brand: 'nissan', fits: ['Navara'], name: { fr: 'Bloc optique phare LED', en: 'LED Headlight Assembly', ar: 'مصباح أمامي LED' }, category: 'electrical', sku: '26010-4KP0B', price: 145000, wholesalePrice: 121000, moq: 1, stock: true, rating: 4.5, reviews: 52 },
    { id: 'p12', brand: 'nissan', fits: ['X-Trail'], name: { fr: 'Coque de rétroviseur', en: 'Side Mirror Cover', ar: 'غطاء مرآة جانبية' }, category: 'body', sku: '96374-4CE0A', price: 21000, wholesalePrice: 16500, moq: 3, stock: true, rating: 4.3, reviews: 39 },

    { id: 'p13', brand: 'lexus', fits: ['RX350', 'ES350'], name: { fr: "Filtre d'habitacle", en: 'Cabin Air Filter', ar: 'فلتر مكيف (هواء المقصورة)' }, category: 'filter', sku: '87139-06060', price: 9800, wholesalePrice: 7600, moq: 4, stock: true, rating: 4.8, reviews: 121 },
    { id: 'p14', brand: 'lexus', fits: ['LX570'], name: { fr: 'Plaquettes de frein avant', en: 'Front Brake Pad Set', ar: 'طقم تيل فرامل أمامي' }, category: 'brake', sku: '04465-60321', price: 68000, wholesalePrice: 56000, moq: 2, stock: true, rating: 4.7, reviews: 65 },
    { id: 'p15', brand: 'lexus', fits: ['LX570'], name: { fr: 'Jambe de suspension pneumatique arrière', en: 'Rear Air Suspension Strut', ar: 'مساعد هوائي خلفي' }, category: 'suspension', sku: '48090-60011', price: 320000, wholesalePrice: 275000, moq: 1, stock: false, rating: 4.9, reviews: 22 },
    { id: 'p16', brand: 'lexus', fits: ['IS300'], name: { fr: "Bobine d'allumage", en: 'Ignition Coil', ar: 'بوبينة إشعال (كويل)' }, category: 'engine', sku: '90919-02258', price: 34000, wholesalePrice: 27000, moq: 3, stock: true, rating: 4.6, reviews: 88 },
    { id: 'p17', brand: 'lexus', fits: ['RX350'], name: { fr: 'Bloc optique feu arrière', en: 'Tail Light Assembly', ar: 'مصباح خلفي' }, category: 'body', sku: '81551-48180', price: 128000, wholesalePrice: 108000, moq: 1, stock: false, rating: 4.5, reviews: 17 },
    { id: 'p18', brand: 'lexus', fits: ['ES350'], name: { fr: 'Moteur lève-vitre', en: 'Power Window Motor', ar: 'موتور رفع الزجاج' }, category: 'electrical', sku: '85720-33180', price: 47000, wholesalePrice: 38000, moq: 2, stock: true, rating: 4.4, reviews: 46 },

    { id: 'p19', brand: 'infiniti', fits: ['QX80', 'Q50'], name: { fr: "Filtre à huile moteur d'origine", en: 'Genuine Engine Oil Filter', ar: 'فلتر زيت المحرك الأصلي' }, category: 'filter', sku: '15208-9E01A', price: 8200, wholesalePrice: 6100, moq: 5, stock: true, rating: 4.7, reviews: 103 },
    { id: 'p20', brand: 'infiniti', fits: ['QX80'], name: { fr: 'Plaquettes de frein avant', en: 'Front Brake Pad Set', ar: 'طقم تيل فرامل أمامي' }, category: 'brake', sku: 'D1060-1LA0A', price: 61000, wholesalePrice: 50000, moq: 2, stock: false, rating: 4.6, reviews: 44 },
    { id: 'p21', brand: 'infiniti', fits: ['Q50'], name: { fr: 'Amortisseur arrière', en: 'Rear Shock Absorber', ar: 'مساعد خلفي' }, category: 'suspension', sku: 'E6210-4GA0A', price: 175000, wholesalePrice: 149000, moq: 1, stock: true, rating: 4.8, reviews: 29 },
    { id: 'p22', brand: 'infiniti', fits: ['QX60'], name: { fr: 'Support moteur', en: 'Engine Mount', ar: 'كوشوك (مسند) المحرك' }, category: 'engine', sku: '11220-JA00B', price: 58000, wholesalePrice: 47000, moq: 2, stock: true, rating: 4.5, reviews: 37 },
    { id: 'p23', brand: 'infiniti', fits: ['FX35'], name: { fr: 'Coquille de passage de roue', en: 'Fender Liner', ar: 'بطانة الرفراف' }, category: 'body', sku: '63840-CG000', price: 19500, wholesalePrice: 15000, moq: 3, stock: false, rating: 4.2, reviews: 15 },
    { id: 'p24', brand: 'infiniti', fits: ['G37'], name: { fr: 'Alternateur', en: 'Alternator', ar: 'مولد كهرباء (دينامو)' }, category: 'electrical', sku: '23100-JK21A', price: 112000, wholesalePrice: 94000, moq: 1, stock: true, rating: 4.6, reviews: 51 },

    // Real inventory — Benmoussa Salim, Tissemsilt (from supplier price list + customer photos)
    { id: 'p25', brand: 'toyota', fits: ['Hilux'], name: { fr: 'Alternateur Hilux D4D (KUN)', en: 'Alternator Hilux D4D (KUN)', ar: 'مولد كهرباء هيلوكس D4D' }, category: 'electrical', sku: 'EA1003N', price: 28500, wholesalePrice: 23500, moq: 2, stock: true, rating: 4.6, reviews: 12, photo: 'assets/images/products/alternateur-hilux-d4d.jpg' },
    { id: 'p26', brand: 'nissan', fits: ['Navara'], name: { fr: 'Alternateur Nissan Navara D40T YD25', en: 'Alternator Nissan Navara D40T YD25', ar: 'مولد كهرباء نيسان نافارا D40T' }, category: 'electrical', sku: 'TAL21725', price: 33000, wholesalePrice: 27500, moq: 1, stock: true, rating: 4.7, reviews: 9 },
    { id: 'p27', brand: 'nissan', fits: ['Micra'], name: { fr: 'Alternateur Nissan Micra K13 12V 100A', en: 'Alternator Nissan Micra K13 12V 100A', ar: 'مولد كهرباء نيسان ميكرا K13' }, category: 'electrical', sku: 'EA1006N', price: 22000, wholesalePrice: 18000, moq: 2, stock: true, rating: 4.5, reviews: 15 },
    { id: 'p28', brand: 'toyota', fits: ['Yaris'], name: { fr: 'Alternateur Yaris NSP130 Essence', en: 'Alternator Yaris NSP130 Petrol', ar: 'مولد كهرباء يارس NSP130 بنزين' }, category: 'electrical', sku: 'WP270600Y120', price: 36000, wholesalePrice: 30000, moq: 1, stock: true, rating: 4.6, reviews: 7 },
    { id: 'p29', brand: 'nissan', fits: ['Sunny'], name: { fr: 'Alternateur Nissan Sunny B10', en: 'Alternator Nissan Sunny B10', ar: 'مولد كهرباء نيسان صني B10' }, category: 'electrical', sku: '23100-95F0A', price: 25500, wholesalePrice: 21000, moq: 2, stock: true, rating: 4.5, reviews: 11 },
    { id: 'p30', brand: 'toyota', fits: ['Hilux'], name: { fr: 'Amortisseur AR Hilux/KUN15', en: 'Rear Shock Absorber Hilux/KUN15', ar: 'مساعد خلفي هيلوكس KUN15' }, category: 'suspension', sku: '48531-09500', price: 9500, wholesalePrice: 7800, moq: 4, stock: true, rating: 4.7, reviews: 22 },
    { id: 'p31', brand: 'toyota', fits: ['Hilux'], name: { fr: 'Amortisseur AV DR Hilux/KUN25', en: 'Front Shock Absorber (RH) Hilux/KUN25', ar: 'مساعد أمامي أيمن هيلوكس KUN25' }, category: 'suspension', sku: '48510-09J80', price: 22800, wholesalePrice: 19000, moq: 1, stock: true, rating: 4.6, reviews: 8, photo: 'assets/images/products/amortisseur-avant-hilux.jpg' },
    { id: 'p32', brand: 'nissan', fits: ['Sunny'], name: { fr: 'Amortisseur AR Nissan Sunny B10/N16', en: 'Rear Shock Absorber Nissan Sunny B10/N16', ar: 'مساعد خلفي نيسان صني B10/N16' }, category: 'suspension', sku: 'DS1103GT', price: 6250, wholesalePrice: 5100, moq: 2, stock: true, rating: 4.4, reviews: 17 },
    { id: 'p33', brand: 'nissan', fits: ['Qashqai'], name: { fr: 'Amortisseur AV DR Nissan Qashqai J11', en: 'Front Shock Absorber (RH) Nissan Qashqai J11', ar: 'مساعد أمامي أيمن نيسان قشقاي J11' }, category: 'suspension', sku: 'TS017240', price: 8350, wholesalePrice: 6900, moq: 2, stock: false, rating: 4.5, reviews: 6 },
    { id: 'p34', brand: 'toyota', fits: ['Yaris'], name: { fr: 'Amortisseur AV DR Yaris NLP/NSP130', en: 'Front Shock Absorber (RH) Yaris NLP/NSP130', ar: 'مساعد أمامي أيمن يارس NLP/NSP130' }, category: 'suspension', sku: 'PAM169260962', price: 9500, wholesalePrice: 7900, moq: 1, stock: true, rating: 4.6, reviews: 9 },
    { id: 'p35', brand: 'toyota', fits: ['Corolla'], name: { fr: "Bobine d'allumage Corolla ZRE 1ZRFE", en: 'Ignition Coil Corolla ZRE 1ZRFE', ar: 'بوبينة إشعال كورولا ZRE' }, category: 'electrical', sku: '099700-2500', price: 10500, wholesalePrice: 8700, moq: 2, stock: true, rating: 4.7, reviews: 13, photo: 'assets/images/products/bobine-allumage.jpg' },
    { id: 'p36', brand: 'nissan', fits: ['Sunny'], name: { fr: "Bobine d'allumage Nissan Sunny B10", en: 'Ignition Coil Nissan Sunny B10', ar: 'بوبينة إشعال نيسان صني B10' }, category: 'electrical', sku: '22448-95F0A', price: 4850, wholesalePrice: 3950, moq: 4, stock: true, rating: 4.5, reviews: 19 },
    { id: 'p37', brand: 'nissan', fits: ['Micra'], name: { fr: "Bobine d'allumage Nissan Sunny N17/Micra K13", en: 'Ignition Coil Nissan Sunny N17/Micra K13', ar: 'بوبينة إشعال نيسان صني N17/ميكرا K13' }, category: 'electrical', sku: '22448-1HC0A', price: 6200, wholesalePrice: 5100, moq: 3, stock: true, rating: 4.6, reviews: 10 },
    { id: 'p38', brand: 'nissan', fits: ['Sunny'], name: { fr: "Bougie d'allumage Nissan Sunny B10 Iridium", en: 'Spark Plug Nissan Sunny B10 Iridium', ar: 'بوجيه نيسان صني B10 إيريديوم' }, category: 'engine', sku: '22401-1HC1B', price: 2750, wholesalePrice: 2250, moq: 6, stock: true, rating: 4.8, reviews: 28 },
    { id: 'p39', brand: 'nissan', fits: ['Micra'], name: { fr: "Bougie d'allumage Nissan N17/Tiida/K13/NSP130", en: 'Spark Plug Nissan N17/Tiida/K13/NSP130', ar: 'بوجيه نيسان N17/تيدا/K13' }, category: 'engine', sku: '22401-ED815', price: 550, wholesalePrice: 450, moq: 10, stock: true, rating: 4.7, reviews: 34 },
    { id: 'p40', brand: 'nissan', fits: ['Sunny'], name: { fr: 'Arbre à came Nissan Sunny B10/N16 admission', en: 'Intake Camshaft Nissan Sunny B10/N16', ar: 'عمود الكامات (السحب) نيسان صني' }, category: 'engine', sku: '13020-AU000', price: 7300, wholesalePrice: 6000, moq: 2, stock: true, rating: 4.5, reviews: 8 },
    { id: 'p41', brand: 'toyota', fits: ['Hilux'], name: { fr: 'Arbre de roue Hilux/KUN15 ABS', en: 'Drive Shaft Hilux/KUN15 ABS', ar: 'عمود عجلة هيلوكس KUN15 ABS' }, category: 'suspension', sku: '42311-0K020', price: 29500, wholesalePrice: 24500, moq: 1, stock: false, rating: 4.6, reviews: 5 },
    { id: 'p42', brand: 'toyota', fits: ['Hilux'], name: { fr: 'Aile AV Hilux Vigo 11 2WD DR', en: 'Front Fender (RH) Hilux Vigo 2WD', ar: 'رفرف أمامي أيمن هيلوكس فيغو' }, category: 'body', sku: 'TY210-01AYR', price: 11800, wholesalePrice: 9700, moq: 1, stock: true, rating: 4.4, reviews: 7, photo: 'assets/images/products/aile-avant-hilux.jpg' },
    { id: 'p43', brand: 'toyota', fits: ['Hilux'], name: { fr: 'Aile AV Hilux KUN 12+ DR', en: 'Front Fender (RH) Hilux KUN 2012+', ar: 'رفرف أمامي أيمن هيلوكس 2012+' }, category: 'body', sku: 'TYF175RA', price: 13500, wholesalePrice: 11200, moq: 1, stock: true, rating: 4.5, reviews: 6 },
    { id: 'p44', brand: 'nissan', fits: ['Qashqai'], name: { fr: 'Axe étrier AV Nissan Qashqai/X-Trail T31', en: 'Front Caliper Pin Nissan Qashqai/X-Trail T31', ar: 'محور كاليبر أمامي نيسان قشقاي/X-Trail' }, category: 'brake', sku: 'D7176C', price: 3200, wholesalePrice: 2600, moq: 4, stock: true, rating: 4.6, reviews: 11 },
    { id: 'p45', brand: 'nissan', fits: ['Sunny'], name: { fr: 'Axe étrier AV Nissan Sunny N17 Autofren', en: 'Front Caliper Pin Nissan Sunny N17', ar: 'محور كاليبر أمامي نيسان صني N17' }, category: 'brake', sku: 'D7280C', price: 3200, wholesalePrice: 2600, moq: 4, stock: true, rating: 4.5, reviews: 9 },
    { id: 'p46', brand: 'toyota', fits: ['Corolla'], name: { fr: 'Balai essuie-glace 700 Toyota', en: 'Wiper Blade 700mm Toyota', ar: 'مساحة زجاج 700 ملم تويوتا' }, category: 'body', sku: 'T170-28', price: 2000, wholesalePrice: 1600, moq: 6, stock: true, rating: 4.3, reviews: 14 },

    // Real inventory continued — matched to customer-supplied product photos
    { id: 'p47', brand: 'toyota', fits: ['Hilux'], name: { fr: 'Antivol complet (barillet de contact) Hilux Vigo', en: 'Ignition Lock / Steering Lock Assembly Hilux Vigo', ar: 'قفل تشغيل (أنتيفول) هيلوكس فيغو' }, category: 'electrical', sku: '45020-0K220', price: 7500, wholesalePrice: 6200, moq: 2, stock: true, rating: 4.5, reviews: 8, photo: 'assets/images/products/antivol.jpg' },
    { id: 'p48', brand: 'toyota', fits: ['Hilux'], name: { fr: 'Biellette de suspension Hilux/KUN25', en: 'Sway Bar Link Hilux/KUN25', ar: 'بيلية عزقة التوازن هيلوكس KUN25' }, category: 'suspension', sku: '3L-3890', price: 3000, wholesalePrice: 2450, moq: 4, stock: true, rating: 4.4, reviews: 16, photo: 'assets/images/products/biellette-suspension.jpg' },
    { id: 'p49', brand: 'toyota', fits: ['Hilux'], name: { fr: 'Bougie de préchauffage Hilux/RAV4 D4D', en: 'Glow Plug Hilux/RAV4 D4D', ar: 'شمعة تسخين (بريشوفاج) هيلوكس D4D' }, category: 'engine', sku: 'PT-157', price: 2500, wholesalePrice: 2000, moq: 4, stock: true, rating: 4.6, reviews: 11, photo: 'assets/images/products/bougie-prechauffage.png' },
    { id: 'p50', brand: 'toyota', fits: ['Hilux', 'Land Cruiser'], name: { fr: 'Bielle moteur Hilux/Land Cruiser 3L/5L', en: 'Connecting Rod Hilux/Land Cruiser 3L/5L', ar: 'ذراع توصيل (بييل) المحرك 3L/5L' }, category: 'engine', sku: '13201-59216', price: 6500, wholesalePrice: 5400, moq: 3, stock: true, rating: 4.5, reviews: 6, photo: 'assets/images/products/bielle-moteur.jpg' },
    { id: 'p51', brand: 'toyota', fits: ['Hilux'], name: { fr: 'Radiateur Hilux KUN15 (Alt+Clim)', en: 'Radiator Hilux KUN15 (Alt+A/C)', ar: 'رادياتور هيلوكس KUN15' }, category: 'engine', sku: '7KSY1516', price: 3700, wholesalePrice: 3000, moq: 1, stock: true, rating: 4.4, reviews: 5, photo: 'assets/images/products/radiateur.jpg' },
    { id: 'p52', brand: 'toyota', fits: ['Corolla'], name: { fr: 'Arbre à cames Corolla 2C', en: 'Camshaft Corolla 2C', ar: 'عمود الكامات كورولا 2C' }, category: 'engine', sku: '13511-64071', price: 8800, wholesalePrice: 7300, moq: 1, stock: true, rating: 4.6, reviews: 7, photo: 'assets/images/products/arbre-a-came.jpg' },
    { id: 'p53', brand: 'toyota', fits: ['Corolla', 'Yaris'], name: { fr: "Bougie d'allumage Denso Corolla/Yaris", en: 'Spark Plug Denso Corolla/Yaris', ar: 'بوجيه دينسو كورولا/يارس' }, category: 'engine', sku: '90080-91161', price: 850, wholesalePrice: 700, moq: 8, stock: true, rating: 4.7, reviews: 21, photo: 'assets/images/products/bougie-allumage-denso.jpg' },
    { id: 'p54', brand: 'toyota', fits: ['Hilux'], name: { fr: 'Viscocoupleur (coupleur de ventilateur débrayable) Hilux', en: 'Fan Clutch (Viscous Coupling) Hilux', ar: 'كلتش المروحة (فيسكو) هيلوكس' }, category: 'engine', sku: '16210-0L010', price: 23000, wholesalePrice: 19000, moq: 1, stock: true, rating: 4.7, reviews: 9, photo: 'assets/images/products/viscocoupleur.jpg' },
    { id: 'p55', brand: 'toyota', fits: ['Hilux'], name: { fr: 'Bavette avant Hilux Vigo 2WD (jeu de 2)', en: 'Front Mud Flaps Hilux Vigo 2WD (Set of 2)', ar: 'طقم رفارف طين أمامية هيلوكس فيغو (قطعتان)' }, category: 'body', sku: '76621/2-0K010', price: 4400, wholesalePrice: 3600, moq: 2, stock: true, rating: 4.3, reviews: 10, photo: 'assets/images/products/bavette-garde-boue.jpg' }
  ];

  // Merge the customer's real bulk catalog (assets/js/products-bulk.js, loaded before this file)
  if (typeof BULK_PRODUCTS !== 'undefined') PRODUCTS.push(...BULK_PRODUCTS);
  if (typeof BULK_VEHICLE_MODELS_EXTRA !== 'undefined') {
    Object.keys(BULK_VEHICLE_MODELS_EXTRA).forEach((brand) => {
      VEHICLE_MODELS[brand] = VEHICLE_MODELS[brand].concat(BULK_VEHICLE_MODELS_EXTRA[brand]);
    });
  }

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
    wishlist: new Set(),
    paymentMethod: 'cod',
    lastOrder: null,
    page: 1,
    checkout: { fullName: '', phone: '', wilaya: '', address: '', otp: '' }
  };

  const PAGE_SIZE = 24;

  /* ------------------------------------------------------------------ *
   *  4. HELPERS
   * ------------------------------------------------------------------ */

  function t(key) { return (TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang][key]) || key; }
  const LOCALE_MAP = { fr: 'fr-DZ', en: 'en-US', ar: 'ar-DZ' };
  const currency = () => new Intl.NumberFormat(LOCALE_MAP[state.lang] || 'fr-DZ', { style: 'currency', currency: 'DZD', maximumFractionDigits: 0 });
  const fmt = (n) => currency().format(n);
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }
  function refreshIcons() { if (window.lucide) window.lucide.createIcons(); }
  function findProduct(id) { return PRODUCTS.find((p) => p.id === id); }
  function productName(p) { return p.name[state.lang] || p.name.fr; }
  function productPhoto(p) { return p.photo || CATEGORY_PHOTOS[p.category]; }
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
    render(true);
    renderCart();
    renderWishlist();
    if ($('#trackModal').classList.contains('visible')) renderTrackModal();
    if ($('#checkoutModal').classList.contains('visible')) {
      populateWilayaSelect();
      $('#checkoutCardDesc').textContent = t('checkout_card_desc');
      $('#checkoutOtpDesc').textContent = t('checkout_otp_desc') + ' ' + state.checkout.phone;
      if (checkoutExpectedOtp) $('#checkoutOtpDemo').textContent = t('checkout_otp_demo_label') + ' ' + checkoutExpectedOtp;
    }
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
    const yearSelect = $('#modelYearSelect');
    const versionSelect = $('#modelVersionSelect');
    const findBtn = $('#modelFindBtn');

    function resetSelect(select, placeholderKey) {
      select.disabled = true;
      select.innerHTML = '<option value="">' + t(placeholderKey) + '</option>';
    }

    brandSelect.addEventListener('change', () => {
      const brand = brandSelect.value;
      resetSelect(modelSelect, 'model_select_model_ph');
      resetSelect(yearSelect, 'model_select_year_ph');
      resetSelect(versionSelect, 'model_select_version_ph');
      findBtn.disabled = true;
      modelSelect.disabled = !brand;
      if (brand) {
        modelSelect.innerHTML = '<option value="">' + t('model_select_model_ph') + '</option>' +
          VEHICLE_MODELS[brand].map((m) => '<option value="' + m + '">' + m + '</option>').join('');
      }
    });

    modelSelect.addEventListener('change', () => {
      resetSelect(yearSelect, 'model_select_year_ph');
      resetSelect(versionSelect, 'model_select_version_ph');
      findBtn.disabled = true;
      yearSelect.disabled = !modelSelect.value;
      if (modelSelect.value) {
        yearSelect.innerHTML = '<option value="">' + t('model_select_year_ph') + '</option>' +
          MODEL_YEARS.map((y) => '<option value="' + y + '">' + y + '</option>').join('');
      }
    });

    yearSelect.addEventListener('change', () => {
      resetSelect(versionSelect, 'model_select_version_ph');
      findBtn.disabled = true;
      versionSelect.disabled = !yearSelect.value;
      if (yearSelect.value) {
        versionSelect.innerHTML = '<option value="">' + t('model_select_version_ph') + '</option>' +
          VERSION_KEYS.map((k) => '<option value="' + k + '">' + t(k) + '</option>').join('');
      }
    });

    versionSelect.addEventListener('change', () => { findBtn.disabled = !versionSelect.value; });

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
      showToast(t('toast_vehicle_found') + ' ' + BRAND_LABELS[brand] + ' ' + model + ' (' + yearSelect.value + ')', 'info');
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
        const brand = btn.dataset.brandFilter;
        const model = btn.dataset.modelFilter;
        state.filters.brands = new Set([brand]);
        if (model) {
          state.vehicleBrand = brand;
          state.vehicleModel = model;
        } else {
          state.vehicleBrand = null;
          state.vehicleModel = null;
        }
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
      list = list.filter((p) =>
        Object.values(p.name).some((n) => n.toLowerCase().includes(q)) ||
        p.sku.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.fits.some((f) => f.toLowerCase().includes(q))
      );
    }
    switch (state.sort) {
      case 'price-asc': list.sort((a, b) => unitPrice(a) - unitPrice(b)); break;
      case 'price-desc': list.sort((a, b) => unitPrice(b) - unitPrice(a)); break;
      case 'name': list.sort((a, b) => productName(a).localeCompare(productName(b))); break;
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
          '<img src="' + productPhoto(p) + '" alt="' + t('cat_' + p.category) + '" loading="lazy" />' +
          '<div class="media-badges">' + stockBadge +
            '<button class="wishlist-btn' + (inWishlist ? ' active' : '') + '" data-action="wishlist" data-id="' + p.id + '" aria-label="Wishlist"><i data-lucide="heart"></i></button>' +
          '</div>' +
          '<span class="media-cat-icon"><i data-lucide="' + CATEGORY_ICONS[p.category] + '"></i></span>' +
        '</div>' +
        '<div class="product-body">' +
          '<span class="product-brand-row"><span class="brand-dot ' + p.brand + '"></span>' + BRAND_LABELS[p.brand] + ' &middot; ' + t('cat_' + p.category) + '</span>' +
          '<h3 class="product-name">' + productName(p) + '</h3>' +
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

  function render(keepPage) {
    if (!keepPage) state.page = 1;
    const list = getFilteredSortedProducts();
    const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    if (state.page > totalPages) state.page = totalPages;
    const start = (state.page - 1) * PAGE_SIZE;
    const pageItems = list.slice(start, start + PAGE_SIZE);
    $('#productGrid').innerHTML = pageItems.map(productCardHTML).join('');
    $('#resultCount').textContent = list.length;
    $('#noResults').style.display = list.length ? 'none' : 'block';
    renderPagination(totalPages);
    refreshIcons();
  }

  function renderPagination(totalPages) {
    const el = $('#pagination');
    if (!el) return;
    if (totalPages <= 1) { el.innerHTML = ''; return; }
    const cur = state.page;
    el.innerHTML =
      '<button class="page-btn" data-page="prev"' + (cur <= 1 ? ' disabled' : '') + ' aria-label="Previous"><i data-lucide="chevron-left"></i></button>' +
      '<span class="page-label">' + t('page_label') + ' ' + cur + ' / ' + totalPages + '</span>' +
      '<button class="page-btn" data-page="next"' + (cur >= totalPages ? ' disabled' : '') + ' aria-label="Next"><i data-lucide="chevron-right"></i></button>';
    refreshIcons();
  }

  function initPagination() {
    $('#pagination').addEventListener('click', (e) => {
      const btn = e.target.closest('.page-btn');
      if (!btn || btn.disabled) return;
      state.page = btn.dataset.page === 'prev' ? Math.max(1, state.page - 1) : state.page + 1;
      render(true);
      $('#shop').scrollIntoView({ behavior: 'smooth' });
    });
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
    updateWishlistCount();
    renderWishlist();
  }

  function updateWishlistCount() {
    const badge = $('#wishlistCount');
    if (badge) badge.textContent = state.wishlist.size;
  }

  function renderWishlist() {
    const container = $('#wishlistItems');
    if (!container) return;
    const items = Array.from(state.wishlist).map(findProduct).filter(Boolean);
    if (!items.length) {
      container.innerHTML = '<div class="cart-empty"><i data-lucide="heart"></i><p>' + t('wishlist_empty') + '<br>' + t('wishlist_empty_sub') + '</p></div>';
      refreshIcons();
      return;
    }
    container.innerHTML = items.map((p) => {
      const price = unitPrice(p);
      const stock = isInStock(p);
      return (
        '<div class="cart-item" data-id="' + p.id + '">' +
          '<div class="cart-item-media"><i data-lucide="' + CATEGORY_ICONS[p.category] + '"></i></div>' +
          '<div class="cart-item-info">' +
            '<div class="ciname">' + productName(p) + '</div>' +
            '<div class="cisku">' + BRAND_LABELS[p.brand] + ' &middot; ' + p.sku + '</div>' +
            '<div class="cart-item-row">' +
              '<span class="cart-item-price">' + fmt(price) + '</span>' +
              (stock
                ? '<button class="btn btn-primary btn-sm" data-action="wishlist-add" data-id="' + p.id + '"><i data-lucide="shopping-cart"></i></button>'
                : '<span class="badge badge-danger">' + t('not_available') + '</span>') +
            '</div>' +
          '</div>' +
          '<button class="cart-item-remove" data-action="wishlist-remove" data-id="' + p.id + '" aria-label="Remove"><i data-lucide="trash-2"></i></button>' +
        '</div>'
      );
    }).join('');
    refreshIcons();
  }

  function initWishlistDrawer() {
    $('#wishlistItems').addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action]'); if (!btn) return;
      const id = btn.dataset.id;
      if (btn.dataset.action === 'wishlist-add') { addToCart(id); }
      else if (btn.dataset.action === 'wishlist-remove') {
        state.wishlist.delete(id);
        updateWishlistCount();
        renderWishlist();
        $all('.wishlist-btn[data-id="' + id + '"]').forEach((b) => b.classList.remove('active'));
      }
    });
    $('#wishlistNavBtn').addEventListener('click', openWishlist);
    $('#wishlistCloseBtn').addEventListener('click', closeWishlist);
    $('#wishlistOverlay').addEventListener('click', closeWishlist);
  }
  function openWishlist() { renderWishlist(); $('#wishlistDrawer').classList.add('open'); $('#wishlistOverlay').classList.add('visible'); }
  function closeWishlist() { $('#wishlistDrawer').classList.remove('open'); $('#wishlistOverlay').classList.remove('visible'); }

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
              '<div class="ciname">' + productName(p) + '</div>' +
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
    $('#paymentMethodGroup').addEventListener('change', (e) => {
      if (e.target.name === 'paymentMethod') state.paymentMethod = e.target.value;
    });
    $('#checkoutBtn').addEventListener('click', () => {
      if (!state.cart.length) { showToast(t('toast_cart_empty'), 'info'); return; }
      openCheckoutModal();
    });
  }
  function openCart() { $('#cartDrawer').classList.add('open'); $('#overlay').classList.add('visible'); }
  function closeCart() { $('#cartDrawer').classList.remove('open'); $('#overlay').classList.remove('visible'); }

  /* ------------------------------------------------------------------ *
   *  10a. CHECKOUT (info -> card -> OTP)
   * ------------------------------------------------------------------ */

  let checkoutExpectedOtp = '';

  function populateWilayaSelect() {
    const select = $('#coWilaya');
    const current = select.value;
    select.innerHTML = '<option value="">' + t('checkout_wilaya_ph') + '</option>' +
      WILAYAS.map((w, i) => '<option value="' + w + '">' + (i + 1) + ' - ' + w + '</option>').join('');
    select.value = current;
  }

  function goToCheckoutStep(step) {
    $all('.checkout-step').forEach((el) => el.classList.toggle('active', el.dataset.step === step));
    $all('.checkout-progress-step').forEach((el) => {
      const order = ['info', 'card', 'otp'];
      el.classList.toggle('active', el.dataset.step === step);
      el.classList.toggle('done', order.indexOf(el.dataset.step) < order.indexOf(step));
    });
  }

  function openCheckoutModal() {
    populateWilayaSelect();
    $('#coFullName').value = state.checkout.fullName;
    $('#coPhone').value = state.checkout.phone;
    $('#coWilaya').value = state.checkout.wilaya;
    $('#coAddress').value = state.checkout.address;
    $('#coCardName').value = ''; $('#coCardNumber').value = ''; $('#coCardExpiry').value = ''; $('#coCardCvv').value = '';
    $('#coOtp').value = '';
    $('#checkoutOtpError').classList.remove('visible');
    goToCheckoutStep('info');
    $('#checkoutModal').classList.add('visible');
    $('#checkoutOverlay').classList.add('visible');
  }

  function closeCheckoutModal() {
    $('#checkoutModal').classList.remove('visible');
    $('#checkoutOverlay').classList.remove('visible');
  }

  function generateOtp() {
    checkoutExpectedOtp = String(Math.floor(100000 + Math.random() * 900000));
    $('#checkoutOtpDemo').textContent = t('checkout_otp_demo_label') + ' ' + checkoutExpectedOtp;
    $('#coOtp').value = '';
    $('#checkoutOtpError').classList.remove('visible');
  }

  function initCheckoutModal() {
    $('#checkoutCloseBtn').addEventListener('click', closeCheckoutModal);
    $('#checkoutOverlay').addEventListener('click', closeCheckoutModal);

    $('#coInfoNextBtn').addEventListener('click', () => {
      const fullName = $('#coFullName').value.trim();
      const phone = $('#coPhone').value.trim();
      const wilaya = $('#coWilaya').value;
      const address = $('#coAddress').value.trim();
      if (!fullName || !phone || !wilaya || !address) { showToast(t('checkout_fill_all'), 'info'); return; }
      if (phone.replace(/\D/g, '').length < 9) { showToast(t('checkout_invalid_phone'), 'info'); return; }
      state.checkout.fullName = fullName;
      state.checkout.phone = phone;
      state.checkout.wilaya = wilaya;
      state.checkout.address = address;
      if (state.paymentMethod === 'cod') {
        $('#checkoutOtpDesc').textContent = t('checkout_otp_desc') + ' ' + phone;
        generateOtp();
        goToCheckoutStep('otp');
      } else {
        $('#checkoutCardDesc').textContent = t('checkout_card_desc');
        goToCheckoutStep('card');
      }
    });

    $('#coCardBackBtn').addEventListener('click', () => goToCheckoutStep('info'));

    $('#coCardNextBtn').addEventListener('click', () => {
      const name = $('#coCardName').value.trim();
      const number = $('#coCardNumber').value.replace(/\s/g, '');
      const expiry = $('#coCardExpiry').value.trim();
      const cvv = $('#coCardCvv').value.trim();
      if (!name || !number || !expiry || !cvv) { showToast(t('checkout_fill_all'), 'info'); return; }
      if (!/^\d{16}$/.test(number)) { showToast(t('checkout_invalid_card'), 'info'); return; }
      if (!/^\d{2}\/\d{2}$/.test(expiry)) { showToast(t('checkout_invalid_expiry'), 'info'); return; }
      if (!/^\d{3}$/.test(cvv)) { showToast(t('checkout_invalid_cvv'), 'info'); return; }
      $('#checkoutOtpDesc').textContent = t('checkout_otp_desc') + ' ' + state.checkout.phone;
      generateOtp();
      goToCheckoutStep('otp');
    });

    $('#coCardNumber').addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
    });
    $('#coCardExpiry').addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4).replace(/(\d{2})(?=\d)/, '$1/');
    });
    $('#coCardCvv').addEventListener('input', (e) => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3); });
    $('#coOtp').addEventListener('input', (e) => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6); });

    $('#coOtpBackBtn').addEventListener('click', () => {
      goToCheckoutStep(state.paymentMethod === 'cod' ? 'info' : 'card');
    });

    $('#coResendOtpBtn').addEventListener('click', () => {
      generateOtp();
      showToast(t('checkout_otp_resent'), 'info');
    });

    $('#coOtpConfirmBtn').addEventListener('click', () => {
      const entered = $('#coOtp').value.trim();
      if (entered !== checkoutExpectedOtp) {
        $('#checkoutOtpError').classList.add('visible');
        return;
      }
      finalizeOrder();
    });
  }

  function finalizeOrder() {
    const subtotal = state.cart.reduce((sum, c) => sum + unitPrice(findProduct(c.id)) * c.qty, 0);
    const shipping = state.mode === 'wholesale' ? 0 : 3500;
    state.lastOrder = {
      paymentMethod: state.paymentMethod,
      total: subtotal + shipping,
      customer: { fullName: state.checkout.fullName, phone: state.checkout.phone, wilaya: state.checkout.wilaya, address: state.checkout.address },
      step: 2,
      placedAt: Date.now()
    };
    showToast(t('toast_checkout'));
    state.cart = [];
    renderCart(); updateCartCount();
    closeCheckoutModal();
    closeCart();
  }

  /* ------------------------------------------------------------------ *
   *  10b. TRACK ORDER
   * ------------------------------------------------------------------ */

  function renderTrackModal() {
    const order = state.lastOrder || { paymentMethod: 'cod', step: 2 };
    const statusBox = $('#trackPaymentStatus');
    const paid = order.paymentMethod === 'edahabia' || order.paymentMethod === 'cib';
    statusBox.className = 'track-payment-status ' + (paid ? 'paid' : 'cod');
    statusBox.innerHTML = '<i data-lucide="' + (paid ? 'check-circle' : 'truck') + '"></i><span>' + (paid ? t('track_status_paid') : t('track_status_cod')) + '</span>';

    $all('#trackSteps .track-step').forEach((el) => {
      const step = Number(el.dataset.step);
      el.classList.toggle('done', step < order.step);
      el.classList.toggle('active', step === order.step);
    });
    refreshIcons();
  }

  function openTrackModal() {
    renderTrackModal();
    $('#trackModal').classList.add('visible');
    $('#trackOverlay').classList.add('visible');
  }
  function closeTrackModal() {
    $('#trackModal').classList.remove('visible');
    $('#trackOverlay').classList.remove('visible');
  }
  function initTrackModal() {
    $all('.track-order-link').forEach((link) => {
      link.addEventListener('click', (e) => { e.preventDefault(); openTrackModal(); });
    });
    $('#trackCloseBtn').addEventListener('click', closeTrackModal);
    $('#trackCloseBtn2').addEventListener('click', closeTrackModal);
    $('#trackOverlay').addEventListener('click', closeTrackModal);
  }

  /* ------------------------------------------------------------------ *
   *  11. NOTIFY ME MODAL
   * ------------------------------------------------------------------ */

  function openNotifyModal(id) {
    const p = findProduct(id);
    $('#notifyProductName').textContent = t('notify_desc_prefix') + ' "' + productName(p) + '" (' + p.sku + ') ' + t('notify_desc_suffix');
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
      render(true); renderCart(); renderWishlist();
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
      render(true);
      renderWishlist();
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
    initPagination();
    initCartEvents();
    initCheckoutModal();
    initWishlistDrawer();
    initTrackModal();
    initNotifyModal();
    initModeToggle();
    initMisc();
    render();
    renderCart();
    updateCartCount();
    updateWishlistCount();
  });
})();
