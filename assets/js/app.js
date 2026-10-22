/**
 * KEBDA EL FALLAH - طعم جوهرة 💎
 * Digital Menu & Ordering System
 * Designed & Developed by Mohamed Emad (+201020766525)
 */

// GitHub Pages Target URL for QR Code
const GITHUB_PAGES_URL = "https://mohamedemad7299.github.io/kebda-el-fallah-menu/";

// Primary Hotline & WhatsApp numbers
const RESTAURANT_HOTLINES = ["01130355151", "01055400546"];
const DEVELOPER_INFO = {
  name: "Mohamed Emad",
  nameAr: "محمد عماد",
  phone: "+201020766525",
  whatsapp: "201020766525",
  github: "https://github.com/MohamedEmad7299"
};

// Bilingual Translations Dictionary
const I18N = {
  ar: {
    brandName: "كبدة الفلاح",
    brandSubtitle: "طعم جوهرة",
    navMenu: "المنيو",
    navBranches: "فروعنا",
    navQR: "رمز QR",
    navCall: "اتصل بنا",
    navCart: "طلبك",
    heroBadge: "الطعم الإسكندراني الأصيل منذ سنوات",
    heroTitle: "كبدة الفلاح",
    heroSubtitle: "أشهى ساندوتشات وطلبات الكبدة والسدق والكلاوي الطازجة يومياً بأعلى جودة وتتبيلتنا السرية المميزة",
    hotlineLabel: "الخط الساخن والدليفري:",
    ctaMenu: "تصفح المنيو",
    ctaBranches: "فروعنا والخرائط",
    ctaFlyer: "عرض المنيو الأصلي",
    newBranchTitle: "جديدنا بسوهاج - فرع البلينا!",
    newBranchDesc: "البلينا - بجوار البنك الأهلي المصري أسفل عيادات زغلول",
    btnOpenMap: "عرض على الخريطة",
    btnCallBranch: "اتصال بالفرع",
    searchPlaceholder: "ابحث عن أي صنف أو مكون...",
    tabAll: "الكل",
    tabSandwiches: "السندوتشات",
    tabPlatters: "الطلبات والوجبات",
    tabBranLiver: "كبدة ردة",
    tabSides: "الإضافات والمقبلات",
    fino: "فينو",
    baladi: "بلدي",
    small: "صغير",
    medium: "وسط",
    large: "كبير",
    quarterKg: "ربع ك",
    halfKg: "نص ك",
    kilo: "كيلو",
    servedWithPlatter: "يقدم معهم: عيش + مخلل + طحينة + فلفل + ليمون (إسكندراني أو مشوي)",
    servedWithBran: "يقدم معهم: عيش + مخلل + طحينة + فلفل + ليمون",
    egp: "ج.م",
    addToOrder: "أضف للطلب",
    tagSpicy: "سبايسي 🌶️",
    tagPopular: "الأكثر طلباً ⭐",
    tagSpecial: "مميز 👑",
    tagGrilled: "مشوي 🔥",
    tagNew: "جديد ⚡",
    branchesSectionTitle: "فروع كبدة الفلاح في جميع المحافظات",
    branchesSectionSubtitle: "اختر الفرع الأقرب إليك وافتح الاتجاهات مباشرة عبر خرائط جوجل",
    allCities: "جميع المحافظات",
    cairo: "القاهرة",
    alexandria: "الأسكندرية",
    sohag: "سوهاج",
    damietta: "دمياط",
    giza: "الجيزة و 6 أكتوبر",
    menofia: "المنوفية",
    qalyubia: "القليوبية",
    orderModalTitle: "سلة الطلب السريع عبر واتساب",
    emptyCartMsg: "سلة طلبك فارغة حالياً. أضف بعض الساندوتشات الشهية!",
    customerName: "الاسم الكريم:",
    customerPhone: "رقم الموبايل للتواصل:",
    customerBranch: "اختر أقرب فرع إليك:",
    customerNotes: "ملاحظات إضافية (بدون شطة / زيادة ليمون...):",
    placeholderName: "مثال: أحمد محمد",
    placeholderPhone: "مثال: 01012345678",
    placeholderNotes: "مثال: بدون شطة / زيادة ليمون وطحينة",
    totalPrice: "الإجمالي:",
    sendWhatsAppBtn: "إرسال الطلب عبر واتساب 💬",
    floatOrderCta: "عرض الطلب وإتمام الشراء 💬",
    qrModalTitle: "امسح رمز QR لفتح المنيو",
    qrModalDesc: "وجّه كاميرا هاتفك المحمول إلى الرمز لفتح المنيو الإلكتروني في أي وقت!",
    downloadQR: "تحميل صورة QR",
    copyLink: "نسخ رابط المنيو",
    copiedAlert: "تم نسخ الرابط بنجاح!",
    flyerModalTitle: "المنيو والبروشور الأصلي",
    flyerCoverTab: "غلاف الفروع والخط الساخن",
    flyerMenuTab: "قائمة الأصناف والأسعار",
    devBadge: "تطوير وبرمجة المواقع",
    developedBy: "تصميم وتطوير بواسطة",
    devAvailable: "متاح لتطوير المواقع وتطبيقات الموبايل",
    callDev: "اتصال بالمطور",
    chatWhatsApp: "مراسلة واتساب",
    footerAbout: "كبدة الفلاح - الاسم الرائد في تقديم الكبدة والسدق الإسكندراني الطازج بأعلى معايير النظافة والجودة."
  },
  en: {
    brandName: "Kebda El Fallah",
    brandSubtitle: "Taste of a Jewel",
    navMenu: "Menu",
    navBranches: "Branches",
    navQR: "QR Code",
    navCall: "Call Us",
    navCart: "Order",
    heroBadge: "Authentic Alexandrian Flavor Since Years",
    heroTitle: "Kebda El Fallah",
    heroSubtitle: "Daily fresh Alexandrian beef liver, oriental sausage and kidneys prepared with our secret royal spices",
    hotlineLabel: "Hotline & Delivery:",
    ctaMenu: "Explore Menu",
    ctaBranches: "Branches & Maps",
    ctaFlyer: "View Original Flyer",
    newBranchTitle: "New in Sohag - El Balyana Branch!",
    newBranchDesc: "El Balyana - Next to National Bank of Egypt (NBE), below Zaghloul Clinics",
    btnOpenMap: "Open in Maps",
    btnCallBranch: "Call Branch",
    searchPlaceholder: "Search any item or ingredient...",
    tabAll: "All",
    tabSandwiches: "Sandwiches",
    tabPlatters: "Platters & Meals",
    tabBranLiver: "Bran-Crusted Liver",
    tabSides: "Sides & Extras",
    fino: "Fino",
    baladi: "Baladi",
    small: "Small",
    medium: "Medium",
    large: "Large",
    quarterKg: "1/4 Kg",
    halfKg: "1/2 Kg",
    kilo: "1 Kg",
    servedWithPlatter: "Served with: Bread + Pickles + Tahini + Pepper + Lemon (Alex or Grilled)",
    servedWithBran: "Served with: Bread + Pickles + Tahini + Pepper + Lemon",
    egp: "EGP",
    addToOrder: "Add to Order",
    tagSpicy: "Spicy 🌶️",
    tagPopular: "Best Seller ⭐",
    tagSpecial: "Special 👑",
    tagGrilled: "Grilled 🔥",
    tagNew: "New ⚡",
    branchesSectionTitle: "Kebda El Fallah Branches Across Egypt",
    branchesSectionSubtitle: "Choose the branch nearest to you and get instant directions on Google Maps",
    allCities: "All Cities",
    cairo: "Cairo",
    alexandria: "Alexandria",
    sohag: "Sohag",
    damietta: "Damietta",
    giza: "Giza & 6th Oct",
    menofia: "Menofia",
    qalyubia: "Qalyubia",
    orderModalTitle: "Quick WhatsApp Order",
    emptyCartMsg: "Your tray is currently empty. Add some delicious sandwiches!",
    customerName: "Your Full Name:",
    customerPhone: "Your Mobile Number:",
    customerBranch: "Select Nearest Branch:",
    customerNotes: "Special instructions (Extra lemon / No chili...):",
    placeholderName: "e.g. Ahmed Mohamed",
    placeholderPhone: "e.g. 01012345678",
    placeholderNotes: "e.g. Extra lemon / No spicy chili",
    totalPrice: "Total Amount:",
    sendWhatsAppBtn: "Send Order on WhatsApp 💬",
    floatOrderCta: "View Order & Checkout 💬",
    qrModalTitle: "Scan QR Code for Digital Menu",
    qrModalDesc: "Point your phone camera at this QR code to access our digital menu instantly!",
    downloadQR: "Download QR Image",
    copyLink: "Copy Menu Link",
    copiedAlert: "Link copied to clipboard!",
    flyerModalTitle: "Original Menu Flyer",
    flyerCoverTab: "Branches & Cover",
    flyerMenuTab: "Items & Price List",
    devBadge: "Web & Mobile Development",
    developedBy: "Designed & Developed by",
    devAvailable: "Available for professional web & mobile apps",
    callDev: "Call Developer",
    chatWhatsApp: "Chat on WhatsApp",
    footerAbout: "Kebda El Fallah - Egypt's premier destination for authentic Alexandrian street food, liver, and sausage crafted with freshness and pride."
  }
};

// Full Menu Items Dataset with Appetizing Visual Icons
const MENU_DATA = [
  // 🥪 Sandwiches (السندوتشات)
  {
    id: "kebda-alex",
    icon: "🥩",
    category: "sandwiches",
    nameAr: "كبدة إسكندراني",
    nameEn: "Alexandrian Liver Sandwich",
    descAr: "كبدة بقري طازجة متبلة بالخلطة الإسكندرانية الأصلية والفلفل الحار والليمون والكمون",
    descEn: "Fresh beef liver sautéed with authentic Alexandrian spices, chili peppers, garlic and fresh lemon",
    options: [
      { key: "fino", labelAr: "فينو", labelEn: "Fino", price: 22 },
      { key: "baladi", labelAr: "بلدى", labelEn: "Baladi", price: 22 }
    ],
    tags: ["popular", "spicy"]
  },
  {
    id: "kebda-mashwy",
    icon: "🔥",
    category: "sandwiches",
    nameAr: "كبدة مشوي",
    nameEn: "Grilled Liver Sandwich",
    descAr: "شرائح كبدة متبلة مشوية على الجريل برائحة ونكهة الفحم الشهية خفيفة وصحية",
    descEn: "Tender liver slices marinated and chargrilled with rich smoky flavor",
    options: [
      { key: "fino", labelAr: "فينو", labelEn: "Fino", price: 22 },
      { key: "baladi", labelAr: "بلدى", labelEn: "Baladi", price: 22 }
    ],
    tags: ["grilled", "special"]
  },
  {
    id: "sodok-alex",
    icon: "🌭",
    category: "sandwiches",
    nameAr: "سدق إسكندراني",
    nameEn: "Alexandrian Sausage (Sojouk)",
    descAr: "سدق بلدي طازج بالصلصة الإسكندرانية وتوابل الفلاح السرية والفلفل الأخضر",
    descEn: "Authentic Egyptian oriental sausage simmered in rich tomato spice sauce & peppers",
    options: [
      { key: "fino", labelAr: "فينو", labelEn: "Fino", price: 25 },
      { key: "baladi", labelAr: "بلدى", labelEn: "Baladi", price: 25 }
    ],
    tags: ["popular"]
  },
  {
    id: "sodok-mashwy",
    icon: "🍢",
    category: "sandwiches",
    nameAr: "سدق مشوي",
    nameEn: "Grilled Sausage (Sojouk)",
    descAr: "سدق بلدي مشوي بتتبيلة الفلاح المميزة مقرمش من الخارج وطري ولذيذ",
    descEn: "Savory beef sausage chargrilled to perfection with smoky herbal notes",
    options: [
      { key: "fino", labelAr: "فينو", labelEn: "Fino", price: 25 },
      { key: "baladi", labelAr: "بلدى", labelEn: "Baladi", price: 25 }
    ],
    tags: ["grilled"]
  },
  {
    id: "klawey",
    icon: "🫀",
    category: "sandwiches",
    nameAr: "كلاوى",
    nameEn: "Kidneys Sandwich",
    descAr: "كلاوي طازجة متبلة ومطبوخة على الطريقة الإسكندرانية الأصيلة بالثوم والليمون",
    descEn: "Fresh tender kidneys seasoned and cooked Alexandrian style with garlic & lime",
    options: [
      { key: "fino", labelAr: "فينو", labelEn: "Fino", price: 25 },
      { key: "baladi", labelAr: "بلدى", labelEn: "Baladi", price: 25 }
    ],
    tags: ["special"]
  },
  {
    id: "sodok-mexicano-mozzarella",
    icon: "🧀",
    category: "sandwiches",
    nameAr: "سدق مكسيكانو موتزاريلا",
    nameEn: "Mexicano Sausage with Melted Mozzarella",
    descAr: "سدق بخلطة الفلاح الخاصة + فلفل ألوان + جبنة موتزاريلا سايحة وغنية في خبز فينو طازج",
    descEn: "Signature sausage sautéed with colorful bell peppers and smothered with melted mozzarella in fresh baguette",
    options: [
      { key: "fino", labelAr: "فينو", labelEn: "Fino", price: 30 }
    ],
    tags: ["special", "popular"]
  },
  {
    id: "sodok-mexicano-rumi",
    icon: "🥪",
    category: "sandwiches",
    nameAr: "سدق مكسيكانو جبنة رومي",
    nameEn: "Mexicano Sausage with Fried Rumi Cheese",
    descAr: "شرائح الجبنة الرومى المقلية بخلطة الفلاح + الفلفل الألوان + كاتشب + مايونيز في فينو",
    descEn: "Crispy fried aged Egyptian Rumi cheese with Fallah mix, bell peppers, ketchup and mayo",
    options: [
      { key: "fino", labelAr: "فينو", labelEn: "Fino", price: 30 }
    ],
    tags: ["special"]
  },

  // 🍽️ Platters & Meals (الطلبات)
  {
    id: "talab-kebda",
    icon: "🍲",
    category: "platters",
    nameAr: "طلب كبدة (إسكندراني أو مشوي)",
    nameEn: "Liver Platter (Alex or Grilled)",
    descAr: "وجبة كبدة شهية تقدم مع: عيش + مخلل + طحينة + فلفل + ليمون",
    descEn: "Generous beef liver plate served with fresh bread, pickles, tahini, peppers & lemons",
    options: [
      { key: "small", labelAr: "صغير", labelEn: "Small", price: 65 },
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 85 },
      { key: "large", labelAr: "كبير", labelEn: "Large", price: 110 }
    ],
    tags: ["popular"]
  },
  {
    id: "talab-sodok",
    icon: "🥘",
    category: "platters",
    nameAr: "طلب سدق (إسكندراني أو مشوي)",
    nameEn: "Sausage Platter (Alex or Grilled)",
    descAr: "طبق سدق بلدي بالخلطة الخاصة يقدم مع: عيش + مخلل + طحينة + فلفل + ليمون",
    descEn: "Sojouk platter prepared to your liking, served with bread, pickles, tahini & garnish",
    options: [
      { key: "small", labelAr: "صغير", labelEn: "Small", price: 70 },
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 85 },
      { key: "large", labelAr: "كبير", labelEn: "Large", price: 110 }
    ],
    tags: ["popular"]
  },
  {
    id: "talab-klawey",
    icon: "🍲",
    category: "platters",
    nameAr: "طلب كلاوى",
    nameEn: "Kidneys Platter",
    descAr: "وجبة كلاوي بلدي متبلة بالثوم والبهارات تقدم مع: عيش + مخلل + طحينة + فلفل + ليمون",
    descEn: "Kidneys platter with house seasoning, served with bread, pickles, tahini, peppers & lemons",
    options: [
      { key: "small", labelAr: "صغير", labelEn: "Small", price: 65 },
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 85 },
      { key: "large", labelAr: "كبير", labelEn: "Large", price: 110 }
    ],
    tags: ["special"]
  },
  {
    id: "talab-moshakkal",
    icon: "👑",
    category: "platters",
    nameAr: "طلب مشكل (كبدة + سدق + كلاوى)",
    nameEn: "Mixed Trio Platter (Liver + Sausage + Kidneys)",
    descAr: "التشكيلة الملكية الأكثر طلباً من الكبدة والسدق والكلاوي مع العيش والمخلل والطحينة والليمون",
    descEn: "The ultimate trio feast: tender liver, savory sausage & kidneys with complete sides & breads",
    options: [
      { key: "small", labelAr: "صغير", labelEn: "Small", price: 70 },
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 90 },
      { key: "large", labelAr: "كبير", labelEn: "Large", price: 115 }
    ],
    tags: ["popular", "special"]
  },

  // 🥖 Bran Liver (كبدة ردة)
  {
    id: "kebda-reda-sandwich",
    icon: "🥖",
    category: "branLiver",
    nameAr: "سندوتش كبدة ردة",
    nameEn: "Bran-Crusted Fried Liver Sandwich",
    descAr: "كبدة مقلية بالردة الذهبية المقرمشة على الطريقة المصرية التراثية مع صوص الطحينة",
    descEn: "Traditional Egyptian fried liver coated in golden wheat bran served in bread with tahini",
    options: [
      { key: "piece", labelAr: "سندوتش", labelEn: "Sandwich", price: 25 }
    ],
    tags: ["popular"]
  },
  {
    id: "kebda-reda-quarter",
    icon: "⚖️",
    category: "branLiver",
    nameAr: "ربع كبدة ردة",
    nameEn: "1/4 Kg Bran Fried Liver",
    descAr: "ربع كيلو كبدة ردة مقرمشة شهية (يقدم معهم: عيش + مخلل + طحينة + فلفل + ليمون)",
    descEn: "250g crispy golden bran liver platter served with fresh Egyptian bread, tahini & pickles",
    options: [
      { key: "weight", labelAr: "ربع كيلو", labelEn: "1/4 Kg", price: 105 }
    ],
    tags: []
  },
  {
    id: "kebda-reda-half",
    icon: "⚖️",
    category: "branLiver",
    nameAr: "نص كبدة ردة",
    nameEn: "1/2 Kg Bran Fried Liver",
    descAr: "نصف كيلو كبدة ردة مقلية طازجة (يقدم معهم: عيش + مخلل + طحينة + فلفل + ليمون)",
    descEn: "500g delicious bran-crusted liver platter with ample breads, tahini and pickles",
    options: [
      { key: "weight", labelAr: "نصف كيلو", labelEn: "1/2 Kg", price: 210 }
    ],
    tags: ["popular"]
  },
  {
    id: "kebda-reda-kilo",
    icon: "🏆",
    category: "branLiver",
    nameAr: "كيلو كبدة ردة",
    nameEn: "1 Kg Bran Fried Liver Feast",
    descAr: "كيلو كامل كبدة ردة تكفي العائلة واللمة الحلوة (يقدم معهم: عيش + مخلل + طحينة + فلفل + ليمون)",
    descEn: "1 Kilogram family feast of crispy bran fried liver with complete condiments and breads",
    options: [
      { key: "weight", labelAr: "1 كيلو", labelEn: "1 Kg", price: 400 }
    ],
    tags: ["special"]
  },

  // 🍟 Sides & Add-ons (الإضافات والمقبلات)
  {
    id: "fries",
    icon: "🍟",
    category: "sides",
    nameAr: "بطاطس بوم فريت",
    nameEn: "Crispy French Fries (Pommes Frites)",
    descAr: "أصابع بطاطس مقرمشة وذهبية متبلة بألذ بهارات",
    descEn: "Golden crispy potato french fries with signature seasoning",
    options: [
      { key: "portion", labelAr: "علبة", labelEn: "Portion", price: 20 }
    ],
    tags: ["popular"]
  },
  {
    id: "tomatoes-spicy",
    icon: "🍅",
    category: "sides",
    nameAr: "طماطم سبايسي",
    nameEn: "Spicy Marinated Tomatoes",
    descAr: "طماطم متبلة بالثوم والخل والليمون والفلفل الحار والكمون",
    descEn: "Juicy tomatoes marinated with garlic, chili, cumin and lemon dressing",
    options: [
      { key: "portion", labelAr: "طبق", labelEn: "Dish", price: 12 }
    ],
    tags: ["spicy"]
  },
  {
    id: "green-salad",
    icon: "🥗",
    category: "sides",
    nameAr: "سلطة خضراء",
    nameEn: "Fresh Egyptian Green Salad",
    descAr: "تشكيلة خضروات طازجة (خيار، طماطم، بقدونس، جرجير) بتتبيلة بلدي",
    descEn: "Crisp cucumber, tomatoes, arugula and fresh herbs with traditional dressing",
    options: [
      { key: "portion", labelAr: "علبة", labelEn: "Cup", price: 12 }
    ],
    tags: []
  },
  {
    id: "tahini-spicy",
    icon: "🌶️",
    category: "sides",
    nameAr: "طحينة شطة",
    nameEn: "Spicy Hot Tahini",
    descAr: "طحينة سمسم بيضاء غنية متبلة بالشطة الحارة والكمون",
    descEn: "Creamy pure sesame tahini infused with crushed fiery red chili & cumin",
    options: [
      { key: "cup", labelAr: "علبة", labelEn: "Cup", price: 12 }
    ],
    tags: ["spicy"]
  },
  {
    id: "tahini-regular",
    icon: "🥣",
    category: "sides",
    nameAr: "علبة طحينة",
    nameEn: "Classic Creamy Tahini",
    descAr: "طحينة سمسم خام فاخرة بالليمون والخل وزيت الزيتون",
    descEn: "Velvety sesame tahini sauce with fresh lemon and house spices",
    options: [
      { key: "cup", labelAr: "علبة", labelEn: "Cup", price: 10 }
    ],
    tags: []
  },
  {
    id: "pickles-large",
    icon: "🥒",
    category: "sides",
    nameAr: "علبة مخلل (ك)",
    nameEn: "Large Mixed Pickles",
    descAr: "تشكيلة مخللات بلدي مقرمشة مشكلة ولذيذة",
    descEn: "Crisp assorted Egyptian pickled vegetables (carrots, turnips, peppers)",
    options: [
      { key: "cup", labelAr: "علبة كبيرة", labelEn: "Large Cup", price: 7 }
    ],
    tags: []
  },
  {
    id: "chili-lemon",
    icon: "🍋",
    category: "sides",
    nameAr: "فلفل وليمون",
    nameEn: "Chili Peppers & Fresh Lemon",
    descAr: "قرون فلفل أخضر حار بلدي مع شرائح ليمون طازجة",
    descEn: "Extra fresh green chilies and sliced Egyptian limes",
    options: [
      { key: "portion", labelAr: "طلب", labelEn: "Order", price: 7 }
    ],
    tags: ["spicy"]
  },
  {
    id: "special-sauce",
    icon: "🥫",
    category: "sides",
    nameAr: "صلصة الفلاح الخاصة",
    nameEn: "Fallah Secret Sauce",
    descAr: "صلصة الطماطم المتبلة السرية الشهيرة بطعم الفلاح الفريد",
    descEn: "Secret simmered spiced tomato sauce with signature house herbs",
    options: [
      { key: "cup", labelAr: "علبة", labelEn: "Cup", price: 5 }
    ],
    tags: []
  },
  {
    id: "extra-bread",
    icon: "🍞",
    category: "sides",
    nameAr: "عيش إضافي",
    nameEn: "Extra Fresh Bread",
    descAr: "خبز بلدي أو فينو طازج وساخن",
    descEn: "Warm freshly baked traditional Egyptian bread / baguette",
    options: [
      { key: "portion", labelAr: "طلب", labelEn: "Order", price: 5 }
    ],
    tags: []
  }
];

// All 12 Branches Dataset with Map Coordinates & Queries
const BRANCHES_DATA = [
  {
    id: "sohag-balyana",
    nameAr: "سوهاج الجديد : البلينا (الفرع الجديد ⭐)",
    nameEn: "New Sohag : El Balyana (New Branch ⭐)",
    cityKey: "sohag",
    cityNameAr: "سوهاج",
    cityNameEn: "Sohag",
    addressAr: "البلينا - بجوار البنك الأهلى المصري - أسفل عيادات زغلول",
    addressEn: "El Balyana, next to National Bank of Egypt (NBE), below Zaghloul Clinics",
    mapQuery: "البنك الاهلي المصري البلينا سوهاج",
    phone: "01130355151",
    featured: true
  },
  {
    id: "sohag-city",
    nameAr: "محافظة سوهاج",
    nameEn: "Sohag City Branch",
    cityKey: "sohag",
    cityNameAr: "سوهاج",
    cityNameEn: "Sohag",
    addressAr: "شارع مستشفى الهلال - بجوار عصير الخلاط",
    addressEn: "El Helal Hospital St., next to El Khalat Juice Shop",
    mapQuery: "مستشفى الهلال سوهاج",
    phone: "01055400546",
    featured: false
  },
  {
    id: "damietta-old",
    nameAr: "دمياط القديمة",
    nameEn: "Old Damietta Branch",
    cityKey: "damietta",
    cityNameAr: "دمياط",
    cityNameEn: "Damietta",
    addressAr: "ميدان الشهابيه - شارع ابو الوفا - أمام مستشفى أبو الوفا",
    addressEn: "El Shehabeya Sq., Abu El Wafa St., opposite Abu El Wafa Hospital",
    mapQuery: "ميدان الشهابية شارع ابو الوفا دمياط",
    phone: "01130355151",
    featured: false
  },
  {
    id: "damietta-new",
    nameAr: "دمياط الجديدة",
    nameEn: "New Damietta Branch",
    cityKey: "damietta",
    cityNameAr: "دمياط",
    cityNameEn: "Damietta",
    addressAr: "أخر شارع القديم - 53 مركز الحى الثانى - بجوار كافية CBR",
    addressEn: "End of Old St., 53 Second District Center, next to CBR Cafe",
    mapQuery: "كافيه CBR الحي الثاني دمياط الجديدة",
    phone: "01055400546",
    featured: false
  },
  {
    id: "cairo-alf-maskan",
    nameAr: "القاهرة : الألف مسكن",
    nameEn: "Cairo : Alf Maskan",
    cityKey: "cairo",
    cityNameAr: "القاهرة",
    cityNameEn: "Cairo",
    addressAr: "6 ميدان الألف مسكن - بجوار سنتر الأندلسية",
    addressEn: "6 Alf Maskan Sq., next to Al Andaluseya Center",
    mapQuery: "6 ميدان الالف مسكن جسر السويس القاهرة",
    phone: "01130355151",
    featured: false
  },
  {
    id: "cairo-golf-city",
    nameAr: "القاهرة : جولف سيتى مول (العبور)",
    nameEn: "Cairo : Golf City Mall (Obour)",
    cityKey: "cairo",
    cityNameAr: "القاهرة",
    cityNameEn: "Cairo",
    addressAr: "جولف سيتى مول - بجوار هارت أتاك",
    addressEn: "Golf City Mall, next to Heart Attack Restaurant",
    mapQuery: "جولف سيتي مول العبور هارت اتاك",
    phone: "01055400546",
    featured: false
  },
  {
    id: "cairo-sheraton",
    nameAr: "القاهرة : شيراتون المطار",
    nameEn: "Cairo : Sheraton Heliopolis",
    cityKey: "cairo",
    cityNameAr: "القاهرة",
    cityNameEn: "Cairo",
    addressAr: "شيراتون المطار - أمام بوابة نادى وادى دجلة",
    addressEn: "Sheraton Heliopolis, directly in front of Wadi Degla Club Gate",
    mapQuery: "نادي وادي دجلة شيراتون المطار القاهرة",
    phone: "01130355151",
    featured: false
  },
  {
    id: "october-souryeen",
    nameAr: "6 أكتوبر : مول السوريين",
    nameEn: "6th of October : Syrians Mall",
    cityKey: "giza",
    cityNameAr: "الجيزة و 6 أكتوبر",
    cityNameEn: "6th of October",
    addressAr: "مول السوريين - بجوار مطعم روستو",
    addressEn: "Syrians Mall, next to Rosto Restaurant, El Hosary",
    mapQuery: "مول السوريين الحصري 6 اكتوبر",
    phone: "01055400546",
    featured: false
  },
  {
    id: "alex-mahatet-raml",
    nameAr: "الأسكندرية : محطة الرمل",
    nameEn: "Alexandria : Mahatet El Raml",
    cityKey: "alexandria",
    cityNameAr: "الأسكندرية",
    cityNameEn: "Alexandria",
    addressAr: "24 شارع سعد زغلول - محطة الرمل",
    addressEn: "24 Saad Zaghloul St., Mahatet El Raml",
    mapQuery: "24 شارع سعد زغلول محطة الرمل الاسكندرية",
    phone: "01130355151",
    featured: false
  },
  {
    id: "alex-nakheel",
    nameAr: "الأسكندرية : مدخل شاطئ النخيل",
    nameEn: "Alexandria : Al Nakheel Beach",
    cityKey: "alexandria",
    cityNameAr: "الأسكندرية",
    cityNameEn: "Alexandria",
    addressAr: "مدخل شاطئ النخيل - 6 أكتوبر - العجمي",
    addressEn: "Al Nakheel Beach Entrance, 6th of October, Agami",
    mapQuery: "شاطئ النخيل العجمي الاسكندرية",
    phone: "01055400546",
    featured: false
  },
  {
    id: "menofia-shebin",
    nameAr: "شبين الكوم : أبراج بشاير الخير",
    nameEn: "Shebin El Koum : Bashayer El Kheir",
    cityKey: "menofia",
    cityNameAr: "المنوفية",
    cityNameEn: "Menofia",
    addressAr: "أبراج بشاير الخير - برج 1",
    addressEn: "Bashayer El Kheir Towers, Tower 1",
    mapQuery: "ابراج بشاير الخير شبين الكوم",
    phone: "01130355151",
    featured: false
  },
  {
    id: "banha-city-club",
    nameAr: "بنها : أمام نادي CITY CLUB",
    nameEn: "Banha : Opposite City Club",
    cityKey: "qalyubia",
    cityNameAr: "القليوبية",
    cityNameEn: "Qalyubia",
    addressAr: "شارع المخبز الآلى - أمام نادى CITY CLUB",
    addressEn: "Al Makhbaz El Aaly St., in front of City Club",
    mapQuery: "شارع المخبز الالي بنها سيتي كلوب",
    phone: "01055400546",
    featured: false
  }
];

// App State
let currentLang = localStorage.getItem("kebda_lang") || "ar";
let currentCategory = "all";
let currentCityFilter = "all";
let searchQuery = "";
let selectedItemOptions = {}; // { itemId: selectedOptionKey }
let cart = JSON.parse(localStorage.getItem("kebda_cart") || "[]");

// Initialize Default Options for items
MENU_DATA.forEach(item => {
  if (item.options && item.options.length > 0) {
    selectedItemOptions[item.id] = item.options[0].key;
  }
});

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  renderMenu();
  renderBranches();
  renderCityFilters();
  initSearch();
  initCategoryTabs();
  initCart();
  initModals();
  generateQRCode();
  updateUIStrings();
});

// Language Setup
function initLanguage() {
  document.documentElement.lang = currentLang;
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
  
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "ar" ? "en" : "ar";
      localStorage.setItem("kebda_lang", currentLang);
      document.documentElement.lang = currentLang;
      document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
      updateUIStrings();
      populateBranchSelect();
      renderMenu();
      renderBranches();
      renderCityFilters();
      renderCartDrawer();
      updateCartBadge();
    });
  }
}

function updateUIStrings() {
  const dict = I18N[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  const langBtnText = document.getElementById("langBtnText");
  if (langBtnText) {
    langBtnText.textContent = currentLang === "ar" ? "English" : "عربي";
  }
}

// Render Menu
function renderMenu() {
  const menuContainer = document.getElementById("menuContainer");
  if (!menuContainer) return;

  const isAr = currentLang === "ar";
  const dict = I18N[currentLang];

  // Filter items
  const filtered = MENU_DATA.filter(item => {
    const matchCat = currentCategory === "all" || item.category === currentCategory;
    const nameMatch = isAr 
      ? item.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) || item.descAr.toLowerCase().includes(searchQuery.toLowerCase())
      : item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) || item.descEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && nameMatch;
  });

  if (filtered.length === 0) {
    menuContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; font-weight: 700;">${isAr ? "عذراً، لم نجد أصناف مطابقة لبحثك!" : "No items match your search!"}</p>
        <button class="nav-btn" style="margin-top: 1rem;" onclick="resetSearch()">${isAr ? "عرض كل الأصناف" : "View All Items"}</button>
      </div>
    `;
    return;
  }

  // Render cards with compact, app-like mobile structure
  menuContainer.innerHTML = filtered.map(item => {
    const itemName = isAr ? item.nameAr : item.nameEn;
    const itemDesc = isAr ? item.descAr : item.descEn;
    const currentOptKey = selectedItemOptions[item.id] || item.options[0].key;
    const selectedOption = item.options.find(o => o.key === currentOptKey) || item.options[0];
    const price = selectedOption.price;

    const badgesHtml = (item.tags || []).map(tag => {
      let badgeClass = "popular";
      let badgeText = dict.tagPopular;
      if (tag === "spicy") {
        badgeClass = "spicy";
        badgeText = dict.tagSpicy;
      } else if (tag === "special") {
        badgeClass = "special";
        badgeText = dict.tagSpecial;
      } else if (tag === "grilled") {
        badgeClass = "special";
        badgeText = dict.tagGrilled;
      }
      return `<span class="tag-badge ${badgeClass}">${badgeText}</span>`;
    }).join("");

    const optionsHtml = item.options.length > 1 ? `
      <div class="card-options-wrapper">
        <div class="options-segmented">
          ${item.options.map(opt => `
            <button 
              type="button"
              class="option-pill-btn ${opt.key === currentOptKey ? "selected" : ""}" 
              onclick="selectItemOption('${item.id}', '${opt.key}')"
            >
              <span class="opt-name">${isAr ? opt.labelAr : opt.labelEn}</span>
              <span class="opt-price">${opt.price} ${dict.egp}</span>
            </button>
          `).join("")}
        </div>
      </div>
    ` : "";

    return `
      <div class="menu-card" id="card-${item.id}">
        <div class="card-header-row">
          <div class="item-avatar-icon">${item.icon || "🥩"}</div>
          <div class="card-title-group">
            <div class="title-with-badge">
              <h4>${itemName}</h4>
              <div class="card-badges">${badgesHtml}</div>
            </div>
            <p class="card-desc">${itemDesc}</p>
          </div>
        </div>
        ${optionsHtml}
        <div class="card-footer">
          <div class="price-display">
            <span class="price-amount">${price}</span>
            <span class="price-currency">${dict.egp}</span>
          </div>
          <button class="add-cart-btn" onclick="addToCart('${item.id}')">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
            </svg>
            <span>${dict.addToOrder}</span>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Option selector handler
window.selectItemOption = function(itemId, optKey) {
  selectedItemOptions[itemId] = optKey;
  renderMenu();
};

function resetSearch() {
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) searchInput.value = "";
  searchQuery = "";
  currentCategory = "all";
  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.classList.toggle("active", tab.getAttribute("data-category") === "all");
  });
  renderMenu();
}
window.resetSearch = resetSearch;

// Category & Search Listeners
window.selectCategory = function(cat) {
  currentCategory = cat;
  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.classList.toggle("active", tab.getAttribute("data-category") === cat);
  });
  renderMenu();
};

function initCategoryTabs() {
  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      window.selectCategory(tab.getAttribute("data-category"));
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById("menuSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    renderMenu();
  });
}

// Render Branches with Direct Google Maps & Phone Actions
function renderBranches() {
  const branchesContainer = document.getElementById("branchesContainer");
  if (!branchesContainer) return;

  const isAr = currentLang === "ar";
  const dict = I18N[currentLang];

  const filtered = BRANCHES_DATA.filter(b => {
    return currentCityFilter === "all" || b.cityKey === currentCityFilter;
  });

  branchesContainer.innerHTML = filtered.map(b => {
    const bName = isAr ? b.nameAr : b.nameEn;
    const bAddress = isAr ? b.addressAr : b.addressEn;
    const bCity = isAr ? b.cityNameAr : b.cityNameEn;
    
    // Direct Google Maps Search Link with encoded query
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapQuery + " مصر")}`;
    const telUrl = `tel:${b.phone}`;

    return `
      <div class="branch-card ${b.featured ? "featured" : ""}">
        <div>
          <div class="branch-top">
            <h4 class="branch-title">${bName}</h4>
            <span class="branch-badge">${bCity}</span>
          </div>
          <div class="branch-address">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>${bAddress}</span>
          </div>
        </div>
        <div class="branch-actions">
          <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="branch-btn map">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span>${dict.btnOpenMap}</span>
          </a>
          <a href="${telUrl}" class="branch-btn call">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>${dict.btnCallBranch}</span>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

function renderCityFilters() {
  const container = document.getElementById("cityFilterTabs");
  if (!container) return;

  const isAr = currentLang === "ar";
  const dict = I18N[currentLang];

  const cities = [
    { key: "all", label: dict.allCities },
    { key: "sohag", label: dict.sohag },
    { key: "cairo", label: dict.cairo },
    { key: "alexandria", label: dict.alexandria },
    { key: "damietta", label: dict.damietta },
    { key: "giza", label: dict.giza },
    { key: "menofia", label: dict.menofia },
    { key: "qalyubia", label: dict.qalyubia }
  ];

  container.innerHTML = cities.map(c => `
    <button 
      class="city-filter-btn ${c.key === currentCityFilter ? "active" : ""}" 
      onclick="setCityFilter('${c.key}')"
    >
      ${c.label}
    </button>
  `).join("");
}

window.setCityFilter = function(cityKey) {
  currentCityFilter = cityKey;
  renderCityFilters();
  renderBranches();
};

// Cart / Order Functionality
function initCart() {
  updateCartBadge();
  populateBranchSelect();
}

function populateBranchSelect() {
  const branchSelect = document.getElementById("orderBranchSelect");
  if (!branchSelect) return;

  const isAr = currentLang === "ar";
  branchSelect.innerHTML = BRANCHES_DATA.map(b => `
    <option value="${isAr ? b.nameAr : b.nameEn}">
      ${isAr ? b.nameAr : b.nameEn}
    </option>
  `).join("");
}

window.addToCart = function(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  const currentOptKey = selectedItemOptions[item.id] || item.options[0].key;
  const opt = item.options.find(o => o.key === currentOptKey) || item.options[0];

  const existingIndex = cart.findIndex(c => c.id === item.id && c.optKey === opt.key);
  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: item.id,
      nameAr: item.nameAr,
      nameEn: item.nameEn,
      optKey: opt.key,
      optLabelAr: opt.labelAr,
      optLabelEn: opt.labelEn,
      price: opt.price,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  animateCartBtn();
};

window.changeCartQty = function(index, delta) {
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartBadge();
    renderCartDrawer();
  }
};

function saveCart() {
  localStorage.setItem("kebda_cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const count = cart.reduce((acc, curr) => acc + curr.qty, 0);
  const total = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
  const isAr = currentLang === "ar";
  const currency = I18N[currentLang].egp;

  // Header badges
  document.querySelectorAll(".cart-count-badge").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });

  // Mobile Bottom Bar Cart Count
  const mobCartCount = document.getElementById("mobileBarCartCount");
  if (mobCartCount) {
    mobCartCount.textContent = count > 0 ? `(${count})` : "";
  }

  // Floating Bottom Cart Bar
  const floatingBar = document.getElementById("floatingCartBar");
  const floatCountEl = document.getElementById("floatCartCount");
  const floatTotalEl = document.getElementById("floatCartTotal");

  if (floatingBar) {
    if (count > 0) {
      floatingBar.style.display = "flex";
      if (floatCountEl) floatCountEl.textContent = `${count}`;
      if (floatTotalEl) floatTotalEl.textContent = `${total} ${currency}`;
    } else {
      floatingBar.style.display = "none";
    }
  }
}

function animateCartBtn() {
  const btns = document.querySelectorAll(".cart-toggle-btn");
  btns.forEach(btn => {
    btn.style.transform = "scale(1.2)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 200);
  });
}

function renderCartDrawer() {
  const itemsContainer = document.getElementById("cartItemsList");
  const totalAmountEl = document.getElementById("cartTotalAmount");
  if (!itemsContainer || !totalAmountEl) return;

  const isAr = currentLang === "ar";
  const dict = I18N[currentLang];

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
        <p>${dict.emptyCartMsg}</p>
      </div>
    `;
    totalAmountEl.textContent = `0 ${dict.egp}`;
    return;
  }

  let total = 0;
  itemsContainer.innerHTML = cart.map((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    const name = isAr ? item.nameAr : item.nameEn;
    const optLabel = isAr ? item.optLabelAr : item.optLabelEn;

    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <h5>${name}</h5>
          <span>${optLabel} | ${item.price} ${dict.egp}</span>
        </div>
        <div class="cart-item-actions">
          <button class="cart-qty-btn" onclick="changeCartQty(${index}, -1)">-</button>
          <span class="cart-qty-number">${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeCartQty(${index}, 1)">+</button>
          <span class="cart-item-price">${itemTotal} ${dict.egp}</span>
        </div>
      </div>
    `;
  }).join("");

  totalAmountEl.textContent = `${total} ${dict.egp}`;
}

// Send Order via WhatsApp
window.sendOrderWhatsApp = function() {
  if (cart.length === 0) {
    alert(currentLang === "ar" ? "برجاء إضافة أصناف إلى الطلب أولاً!" : "Please add items to your cart first!");
    return;
  }

  const nameInput = document.getElementById("orderCustomerName");
  const phoneInput = document.getElementById("orderCustomerPhone");
  const branchSelect = document.getElementById("orderBranchSelect");
  const notesInput = document.getElementById("orderCustomerNotes");

  const customerName = nameInput ? nameInput.value.trim() : "";
  const customerPhone = phoneInput ? phoneInput.value.trim() : "";
  const branch = branchSelect ? branchSelect.value : "";
  const notes = notesInput ? notesInput.value.trim() : "";

  const isAr = currentLang === "ar";
  let total = 0;

  let msg = `*طلب جديد من كبدة الفلاح - المنيو الإلكتروني* 💎\n`;
  msg += `------------------------------------\n`;
  if (customerName) msg += `👤 *العميل:* ${customerName}\n`;
  if (customerPhone) msg += `📞 *رقم العميل:* ${customerPhone}\n`;
  if (branch) msg += `📍 *الفرع المطلوب:* ${branch}\n`;
  msg += `------------------------------------\n`;
  msg += `📋 *تفاصيل الطلب:*\n`;

  cart.forEach((item, i) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    const name = isAr ? item.nameAr : item.nameEn;
    const optLabel = isAr ? item.optLabelAr : item.optLabelEn;
    msg += `${i + 1}. ${name} (${optLabel}) × ${item.qty} = ${itemTotal} جنيه\n`;
  });

  msg += `------------------------------------\n`;
  msg += `💰 *الإجمالي المطلوب:* ${total} جنيه\n`;
  if (notes) msg += `📝 *ملاحظات:* ${notes}\n`;
  msg += `------------------------------------\n`;
  msg += `_تم إنشاء الطلب عبر المنيو الإلكتروني (تطوير محمد عماد)_`;

  const encodedMsg = encodeURIComponent(msg);
  // Send to restaurant WhatsApp (using the first hotline)
  const targetNumber = RESTAURANT_HOTLINES[0].replace(/^0/, "20");
  const waUrl = `https://wa.me/${targetNumber}?text=${encodedMsg}`;

  window.open(waUrl, "_blank");
};

// QR Code Generator
function generateQRCode() {
  const qrContainer = document.getElementById("qrCanvas");
  const qrUrlEl = document.getElementById("qrUrlDisplay");
  if (!qrContainer) return;

  qrContainer.innerHTML = "";
  
  // Use current live URL if running on GitHub Pages or custom domain, else fallback to target GitHub Pages URL
  const targetUrl = window.location.href.startsWith("http") 
    ? window.location.href.split("#")[0] 
    : GITHUB_PAGES_URL;

  if (qrUrlEl) {
    qrUrlEl.textContent = targetUrl;
  }

  try {
    if (typeof QRCode !== "undefined") {
      new QRCode(qrContainer, {
        text: targetUrl,
        width: 190,
        height: 190,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    } else {
      // Fallback via high-quality SVG/Canvas QR API
      const qrImg = document.createElement("img");
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(targetUrl)}`;
      qrImg.alt = "Kebda El Fallah QR Code";
      qrImg.width = 190;
      qrImg.height = 190;
      qrContainer.appendChild(qrImg);
    }
  } catch (err) {
    console.error("QR Code Error:", err);
  }
}

// Download QR Code image
window.downloadQRImage = function() {
  const qrContainer = document.getElementById("qrCanvas");
  if (!qrContainer) return;

  const canvas = qrContainer.querySelector("canvas");
  const img = qrContainer.querySelector("img");

  let url = "";
  if (canvas) {
    url = canvas.toDataURL("image/png");
  } else if (img) {
    url = img.src;
  }

  if (url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = "Kebda-El-Fallah-Menu-QR.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

// Copy Menu Link
window.copyMenuLink = function() {
  const targetUrl = window.location.href.startsWith("http") 
    ? window.location.href.split("#")[0] 
    : GITHUB_PAGES_URL;

  navigator.clipboard.writeText(targetUrl).then(() => {
    alert(I18N[currentLang].copiedAlert);
  }).catch(() => {
    prompt(I18N[currentLang].copyLink, targetUrl);
  });
};

// Flyer Lightbox Tabs
window.switchFlyerTab = function(tabName) {
  const coverTab = document.getElementById("flyerTabCover");
  const menuTab = document.getElementById("flyerTabMenu");
  const imgCover = document.getElementById("flyerImgCover");
  const imgMenu = document.getElementById("flyerImgMenu");

  if (tabName === "cover") {
    coverTab.classList.add("active");
    menuTab.classList.remove("active");
    imgCover.style.display = "block";
    imgMenu.style.display = "none";
  } else {
    coverTab.classList.remove("active");
    menuTab.classList.add("active");
    imgCover.style.display = "none";
    imgMenu.style.display = "block";
  }
};

// Modals Handling
function initModals() {
  // Modal Triggers
  document.querySelectorAll("[data-open-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-open-modal");
      openModal(modalId);
    });
  });

  // Modal Close buttons
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close-modal");
      closeModal(modalId);
    });
  });

  // Close on outside click
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("open");
      }
    });
  });

  // Escape key to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open").forEach(m => m.classList.remove("open"));
    }
  });
}

window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    if (modalId === "cartModal") {
      renderCartDrawer();
    }
    if (modalId === "qrModal") {
      generateQRCode();
    }
    modal.classList.add("open");
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("open");
  }
};
