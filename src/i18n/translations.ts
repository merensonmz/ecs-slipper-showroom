export type Language = "tr" | "en" | "ar";

export const translations = {
  // Navigation
  nav: {
    home: { tr: "Ana Sayfa", en: "Home", ar: "الرئيسية" },
    models: { tr: "Terlik Modelleri", en: "Slipper Models", ar: "موديلات الشباشب" },
    industries: { tr: "Sektörler", en: "Industries", ar: "القطاعات" },
    factory: { tr: "Fabrikamız", en: "Our Factory", ar: "مصنعنا" },
    customization: { tr: "Özelleştirme", en: "Customization", ar: "التخصيص" },
    sustainability: { tr: "Sürdürülebilirlik", en: "Sustainability", ar: "الاستدامة" },
    faq: { tr: "SSS", en: "FAQ", ar: "الأسئلة الشائعة" },
    contact: { tr: "İletişim", en: "Contact", ar: "اتصل بنا" },
    getQuote: { tr: "Teklif Al", en: "Get a Quote", ar: "احصل على عرض سعر" },
  },

  // Home Page
  home: {
    badge: { tr: "Türkiye'de Terlik Üretimi", en: "Slipper Manufacturing in Türkiye", ar: "تصنيع الشباشب في تركيا" },
    headline1: { tr: "Blueflex –", en: "Blueflex –", ar: "بلوفليكس –" },
    headline2: { tr: "Günlük Konforlu Terlikler", en: "Everyday Cozy Slippers", ar: "شباشب مريحة يومياً" },
    headline3: { tr: "Ölçekli Üretim", en: "Manufactured at Scale", ar: "تصنيع على نطاق واسع" },
    subheadline: {
      tr: "Türkiye'de faaliyet gösteren terlik fabrikasıyız. Evler, oteller ve dünya genelindeki markalar için yüksek kaliteli iç mekan terlikleri üretiyoruz.",
      en: "We are a slipper factory in Türkiye producing high-quality indoor slippers for homes, hotels, and brands worldwide.",
      ar: "نحن مصنع شباشب في تركيا ننتج شباشب داخلية عالية الجودة للمنازل والفنادق والعلامات التجارية في جميع أنحاء العالم."
    },
    exploreModels: { tr: "Modelleri İncele", en: "Explore Slipper Models", ar: "استكشف الموديلات" },
    contactWholesale: { tr: "Toptan Satış İletişim", en: "Contact for Wholesale", ar: "تواصل للبيع بالجملة" },
    highlights: {
      industrial: {
        title: { tr: "Endüstriyel Üretim", en: "Industrial Production", ar: "الإنتاج الصناعي" },
        desc: { tr: "Tutarlı kalite çıktısıyla modern üretim", en: "Modern manufacturing with consistent quality output", ar: "تصنيع حديث بجودة متسقة" }
      },
      sizing: {
        title: { tr: "Tutarlı Ölçü", en: "Consistent Sizing", ar: "مقاسات متسقة" },
        desc: { tr: "Standart süreçler her seferinde mükemmel uyumu sağlar", en: "Standardized processes ensure perfect fit every time", ar: "العمليات الموحدة تضمن الملاءمة المثالية في كل مرة" }
      },
      moq: {
        title: { tr: "Esnek MOQ", en: "Flexible MOQ", ar: "كمية طلب مرنة" },
        desc: { tr: "Her ölçekte ortaklar için özel minimum sipariş", en: "Minimum orders tailored for partners of all sizes", ar: "الحد الأدنى للطلبات مصمم لجميع الشركاء" }
      },
      shipping: {
        title: { tr: "Dünya Çapında Gönderim", en: "Global Shipping", ar: "الشحن العالمي" },
        desc: { tr: "Dünya genelindeki işletmelere teslimat yapıyoruz", en: "We deliver to businesses worldwide", ar: "نقوم بالتوصيل للشركات في جميع أنحاء العالم" }
      }
    },
    cta: {
      title: { tr: "Bizimle ortaklık kurmaya hazır mısınız?", en: "Ready to partner with us?", ar: "هل أنت مستعد للشراكة معنا؟" },
      desc: {
        tr: "Oteliniz, perakende markanız veya kurumsal hediyeleriniz için terliklere ihtiyacınız varsa, ihtiyaçlarınızı karşılayacak kapasiteye ve esnekliğe sahibiz.",
        en: "Whether you need slippers for your hotel, retail brand, or corporate gifts, we have the capacity and flexibility to meet your needs.",
        ar: "سواء كنت بحاجة إلى شباشب لفندقك أو علامتك التجارية أو هدايا الشركات، لدينا القدرة والمرونة لتلبية احتياجاتك."
      },
      viewModels: { tr: "Modellerimizi Görün", en: "View Our Models", ar: "شاهد موديلاتنا" },
      seeFactory: { tr: "Fabrikamızı Görün", en: "See Our Factory", ar: "شاهد مصنعنا" }
    }
  },

  // Slipper Models Page
  models: {
    badge: { tr: "Koleksiyonumuz", en: "Our Collection", ar: "مجموعتنا" },
    title: { tr: "Terlik Modelleri", en: "Slipper Models", ar: "موديلات الشباشب" },
    desc: {
      tr: "Evler, oteller, spa'lar ve promosyon kullanımı için tasarlanmış iç mekan terlik yelpazemizi inceleyin. Tüm modeller tesisimizde tutarlı kalite standartlarıyla üretilmektedir.",
      en: "Browse our range of indoor slippers designed for homes, hotels, spas, and promotional use. All models are manufactured in our facility with consistent quality standards.",
      ar: "تصفح مجموعتنا من الشباشب الداخلية المصممة للمنازل والفنادق والمنتجعات الصحية والاستخدام الترويجي. جميع الموديلات مصنعة في منشأتنا بمعايير جودة متسقة."
    },
    filters: {
      all: { tr: "Tümü", en: "All", ar: "الكل" },
      home: { tr: "Ev", en: "Home", ar: "المنزل" },
      hotel: { tr: "Otel", en: "Hotel", ar: "الفندق" },
      kids: { tr: "Çocuk", en: "Kids", ar: "الأطفال" },
      promotional: { tr: "Promosyon", en: "Promotional", ar: "ترويجي" }
    },
    products: {
      homeComfort: {
        name: { tr: "Ev Konforu", en: "Home Comfort", ar: "راحة المنزل" },
        desc: {
          tr: "Hafızalı köpük tabanlı en çok satan ev terliğimiz. Günlük iç mekan kullanımı için maksimum konfor ve dayanıklılık.",
          en: "Our bestselling home slipper with memory foam insole. Perfect for everyday indoor use with maximum comfort and durability.",
          ar: "شبشبنا المنزلي الأكثر مبيعاً مع نعل داخلي من الفوم الذكي. مثالي للاستخدام اليومي مع أقصى درجات الراحة والمتانة."
        }
      },
      hotelClassic: {
        name: { tr: "Otel Klasik", en: "Hotel Classic", ar: "كلاسيك الفندق" },
        desc: {
          tr: "Otel ve konaklama sektörü için zarif açık parmak tasarımı. Hafif, tek kullanımlık uygun ve toplu miktarlarda mevcut.",
          en: "Elegant open-toe design for hotels and hospitality. Lightweight, disposable-friendly, and available in bulk quantities.",
          ar: "تصميم أنيق مفتوح الأصابع للفنادق والضيافة. خفيف الوزن ومناسب للاستخدام لمرة واحدة ومتاح بكميات كبيرة."
        }
      },
      spaWellness: {
        name: { tr: "Spa & Wellness", en: "Spa & Wellness", ar: "سبا وعافية" },
        desc: {
          tr: "Spa ve wellness merkezleri için premium kapalı parmak terlik. Yumuşak, emici ve lüks misafir deneyimi için tasarlanmış.",
          en: "Premium closed-toe slipper for spa and wellness centers. Soft, absorbent, and designed for a luxurious guest experience.",
          ar: "شبشب فاخر مغلق الأصابع لمراكز السبا والعافية. ناعم وماص ومصمم لتجربة ضيوف فاخرة."
        }
      },
      kidsCozy: {
        name: { tr: "Çocuk Keyfi", en: "Kids Cozy", ar: "راحة الأطفال" },
        desc: {
          tr: "Çocuklar için eğlenceli ve renkli terlikler. Aktif küçük ayaklar için ekstra tutunma ile güvenli, yumuşak malzemeler.",
          en: "Fun and colorful slippers for children. Safe, soft materials with extra grip for active little feet.",
          ar: "شباشب ممتعة وملونة للأطفال. مواد آمنة وناعمة مع قبضة إضافية للأقدام الصغيرة النشطة."
        }
      },
      corporateGift: {
        name: { tr: "Kurumsal Hediye", en: "Corporate Gift", ar: "هدايا الشركات" },
        desc: {
          tr: "Kurumsal hediyeler ve promosyon kampanyaları için ideal yüksek kaliteli terlikler. Markanızla tamamen özelleştirilebilir.",
          en: "High-quality slippers perfect for corporate gifts and promotional campaigns. Fully customizable with your branding.",
          ar: "شباشب عالية الجودة مثالية لهدايا الشركات والحملات الترويجية. قابلة للتخصيص بالكامل مع علامتك التجارية."
        }
      },
      travelLite: {
        name: { tr: "Seyahat Hafif", en: "Travel Lite", ar: "سفر خفيف" },
        desc: {
          tr: "Seyahat setleri, havayolları ve konaklama karşılama paketleri için ideal kompakt katlanabilir terlikler.",
          en: "Compact foldable slippers ideal for travel kits, airlines, and hospitality welcome packages.",
          ar: "شباشب قابلة للطي مثالية لحقائب السفر وشركات الطيران وحزم الترحيب الفندقية."
        }
      }
    },
    tags: {
      unisex: { tr: "Unisex", en: "Unisex", ar: "للجنسين" },
      home: { tr: "Ev", en: "Home", ar: "المنزل" },
      bestSeller: { tr: "En Çok Satan", en: "Best Seller", ar: "الأكثر مبيعاً" },
      hotelSpa: { tr: "Otel & Spa", en: "Hotel & Spa", ar: "فندق وسبا" },
      customLogo: { tr: "Özel Logo Mevcut", en: "Custom Logo Available", ar: "الشعار المخصص متاح" },
      premium: { tr: "Premium", en: "Premium", ar: "فاخر" },
      kids: { tr: "Çocuk", en: "Kids", ar: "الأطفال" },
      safeMaterials: { tr: "Güvenli Malzemeler", en: "Safe Materials", ar: "مواد آمنة" },
      promotional: { tr: "Promosyon", en: "Promotional", ar: "ترويجي" },
      lightweight: { tr: "Hafif", en: "Lightweight", ar: "خفيف الوزن" }
    },
    specs: {
      upper: { tr: "Üst Kısım", en: "Upper", ar: "الجزء العلوي" },
      sole: { tr: "Taban", en: "Sole", ar: "النعل" },
      sizes: { tr: "Ölçüler", en: "Sizes", ar: "المقاسات" }
    },
    materials: {
      softFleece: { tr: "Yumuşak polar", en: "Soft fleece", ar: "صوف ناعم" },
      evaAntiSlip: { tr: "EVA kaymaz", en: "EVA anti-slip", ar: "EVA مانع للانزلاق" },
      terryCloth: { tr: "Havlu kumaş", en: "Terry cloth", ar: "قماش تيري" },
      nonWovenAntiSlip: { tr: "Dokunmamış kaymaz", en: "Non-woven anti-slip", ar: "غير منسوج مانع للانزلاق" },
      waffleCotton: { tr: "Waffle pamuk", en: "Waffle cotton", ar: "قطن وافل" },
      rubberAntiSlip: { tr: "Kauçuk kaymaz", en: "Rubber anti-slip", ar: "مطاط مانع للانزلاق" },
      softPlush: { tr: "Yumuşak peluş", en: "Soft plush", ar: "قطيفة ناعمة" },
      tprAntiSlip: { tr: "TPR kaymaz", en: "TPR anti-slip", ar: "TPR مانع للانزلاق" },
      velour: { tr: "Velür", en: "Velour", ar: "مخمل" },
      microfiber: { tr: "Mikrofiber", en: "Microfiber", ar: "ألياف دقيقة" },
      tpeFoldable: { tr: "TPE katlanabilir", en: "TPE foldable", ar: "TPE قابل للطي" }
    },
    cta: {
      text: { tr: "Özel model veya spesifik gereksinimleriniz mi var?", en: "Need a custom model or have specific requirements?", ar: "هل تحتاج إلى موديل مخصص أو لديك متطلبات محددة؟" },
      button: { tr: "Bize Ulaşın", en: "Contact Us", ar: "اتصل بنا" }
    }
  },

  // Industries Page
  industries: {
    badge: { tr: "Ortaklarımız", en: "Our Partners", ar: "شركاؤنا" },
    title: { tr: "Hizmet Verdiğimiz Sektörler", en: "Industries We Serve", ar: "القطاعات التي نخدمها" },
    desc: {
      tr: "Blueflex, birçok sektördeki işletmeler için fabrika ortağı olarak çalışmaktadır. Her sektörün özel ihtiyaçlarını anlıyor ve üretimimizi buna göre uyarlıyoruz.",
      en: "Blueflex works as a factory partner for businesses across multiple sectors. We understand the specific needs of each industry and adapt our production accordingly.",
      ar: "تعمل بلوفليكس كشريك مصنع للشركات عبر قطاعات متعددة. نحن نفهم الاحتياجات المحددة لكل صناعة ونكيف إنتاجنا وفقاً لذلك."
    },
    sectors: {
      hotels: {
        title: { tr: "Oteller ve Tatil Köyleri", en: "Hotels & Resorts", ar: "الفنادق والمنتجعات" },
        desc: {
          tr: "Binlerce otele konforlu misafir terlikleri tedarik ediyoruz. Bütçe dostu tek kullanımlık seçeneklerden premium yeniden kullanılabilir tasarımlara kadar, güvenilir teslimat programlarıyla toplu miktarlar sunuyoruz.",
          en: "We supply thousands of hotels with comfortable guest slippers. From budget-friendly disposable options to premium reusable designs, we offer bulk quantities with reliable delivery schedules.",
          ar: "نزود آلاف الفنادق بشباشب ضيوف مريحة. من الخيارات الاقتصادية للاستخدام لمرة واحدة إلى التصاميم الفاخرة القابلة لإعادة الاستخدام، نقدم كميات كبيرة مع جداول تسليم موثوقة."
        },
        features: {
          f1: { tr: "Toptan fiyatlandırma", en: "Bulk pricing", ar: "تسعير بالجملة" },
          f2: { tr: "Özel markalama", en: "Custom branding", ar: "العلامة التجارية المخصصة" },
          f3: { tr: "Çoklu kalite seviyeleri", en: "Multiple quality tiers", ar: "مستويات جودة متعددة" }
        }
      },
      spas: {
        title: { tr: "Spa ve Wellness Merkezleri", en: "Spas & Wellness Centers", ar: "مراكز السبا والعافية" },
        desc: {
          tr: "Spa terliklerimiz konforu hijyenle birleştirir. Waffle pamuk ve havlu gibi emici malzemelerde, misafir wellness deneyimini geliştirmek için tasarlanmış.",
          en: "Our spa slippers combine comfort with hygiene. Available in absorbent materials like waffle cotton and terry cloth, designed to enhance the guest wellness experience.",
          ar: "تجمع شباشب السبا لدينا بين الراحة والنظافة. متوفرة بمواد ماصة مثل قطن الوافل والقماش التيري، مصممة لتعزيز تجربة العافية للضيوف."
        },
        features: {
          f1: { tr: "Emici malzemeler", en: "Absorbent materials", ar: "مواد ماصة" },
          f2: { tr: "Zarif tasarımlar", en: "Elegant designs", ar: "تصاميم أنيقة" },
          f3: { tr: "Eşleşen bornozlar mevcut", en: "Matching robes available", ar: "برانس متطابقة متاحة" }
        }
      },
      hospitals: {
        title: { tr: "Hastaneler ve Klinikler", en: "Hospitals & Clinics", ar: "المستشفيات والعيادات" },
        desc: {
          tr: "Sağlık tesisleri için hijyenik, temizlenmesi kolay terlikler üretiyoruz. Kaymaz tabanlar ve tek kullanımlık seçenekler hasta güvenliğini ve enfeksiyon kontrolü uyumluluğunu sağlar.",
          en: "We produce hygienic, easy-to-clean slippers for healthcare facilities. Anti-slip soles and disposable options ensure patient safety and infection control compliance.",
          ar: "ننتج شباشب صحية سهلة التنظيف للمرافق الصحية. النعال المانعة للانزلاق والخيارات القابلة للتخلص منها تضمن سلامة المريض والامتثال لمكافحة العدوى."
        },
        features: {
          f1: { tr: "Hijyenik malzemeler", en: "Hygienic materials", ar: "مواد صحية" },
          f2: { tr: "Kaymaz sertifikalı", en: "Anti-slip certified", ar: "معتمد ضد الانزلاق" },
          f3: { tr: "Kolay bertaraf", en: "Easy disposal", ar: "سهل التخلص منه" }
        }
      },
      corporate: {
        title: { tr: "Kurumsal Hediyeler ve Promosyon", en: "Corporate Gifts & Promotion", ar: "هدايا الشركات والترويج" },
        desc: {
          tr: "Terlikleri akılda kalıcı markalı hediyelere dönüştürün. Fuarlar, çalışan hediyeleri ve müşteri takdir paketleri için logonuzla promosyon terlikleri üretiyoruz.",
          en: "Turn slippers into memorable branded gifts. We manufacture promotional slippers with your logo for trade shows, employee gifts, and client appreciation packages.",
          ar: "حوّل الشباشب إلى هدايا ذات علامة تجارية لا تُنسى. نصنع شباشب ترويجية بشعارك للمعارض التجارية وهدايا الموظفين وحزم تقدير العملاء."
        },
        features: {
          f1: { tr: "Tam özelleştirme", en: "Full customization", ar: "تخصيص كامل" },
          f2: { tr: "Hediye paketleme", en: "Gift packaging", ar: "تغليف الهدايا" },
          f3: { tr: "Düşük MOQ mevcut", en: "Small MOQ available", ar: "كمية طلب صغيرة متاحة" }
        }
      },
      ecommerce: {
        title: { tr: "E-ticaret ve Perakende Markaları", en: "E-commerce & Retail Brands", ar: "التجارة الإلكترونية والعلامات التجارية للبيع بالتجزئة" },
        desc: {
          tr: "Kendi terlik hattını başlatmak isteyen markalarla ortaklık yapıyoruz. Tasarım danışmanlığından satışa hazır bitmiş ürüne kadar, markanızla beyaz etiket üretimi.",
          en: "We partner with brands who want to launch their own slipper line. White-label production with your branding, from design consultation to finished product ready for sale.",
          ar: "نشترك مع العلامات التجارية التي ترغب في إطلاق خط الشباشب الخاص بها. إنتاج بالعلامة البيضاء مع علامتك التجارية، من استشارة التصميم إلى المنتج النهائي الجاهز للبيع."
        },
        features: {
          f1: { tr: "Beyaz etiket üretim", en: "White-label production", ar: "إنتاج بالعلامة البيضاء" },
          f2: { tr: "Özel etiketleme", en: "Private labeling", ar: "العلامات التجارية الخاصة" },
          f3: { tr: "Tutarlı kalite", en: "Consistent quality", ar: "جودة متسقة" }
        }
      }
    },
    cta: {
      title: { tr: "Sektörünüzü göremiyor musunuz?", en: "Don't see your industry?", ar: "لا ترى مجالك؟" },
      desc: {
        tr: "Her türlü işletmeyle çalışıyoruz. Ölçekli iç mekan terlikleri üretimine ihtiyacınız varsa, sizden haber almaktan memnuniyet duyarız.",
        en: "We work with businesses of all types. If you need indoor slippers manufactured at scale, we'd love to hear from you.",
        ar: "نعمل مع جميع أنواع الشركات. إذا كنت بحاجة إلى شباشب داخلية مصنعة على نطاق واسع، يسعدنا التواصل معك."
      },
      button: { tr: "İletişime Geçin", en: "Get in Touch", ar: "تواصل معنا" }
    }
  },

  // Factory Page
  factory: {
    badge: { tr: "Sahne Arkası", en: "Behind the Scenes", ar: "خلف الكواليس" },
    title: { tr: "Modern Terlik Üretim Tesisi", en: "Modern Slipper Manufacturing Facility", ar: "منشأة تصنيع الشباشب الحديثة" },
    desc: {
      tr: "Türkiye'deki fabrikamız, modern makineleri yetenekli işçilerle birleştirerek ölçekli, tutarlı, yüksek kaliteli terlikler üretiyor. Biz zanaat atölyesi değiliz—hacim için inşa edilmiş bir üretim ortağıyız.",
      en: "Our factory in Türkiye combines modern machinery with skilled workers to produce consistent, high-quality slippers at scale. We're not a craft workshop—we're a manufacturing partner built for volume.",
      ar: "يجمع مصنعنا في تركيا بين الآلات الحديثة والعمال المهرة لإنتاج شباشب متسقة وعالية الجودة على نطاق واسع. نحن لسنا ورشة حرفية - نحن شريك تصنيع مبني للحجم."
    },
    capabilitiesTitle: { tr: "Yeteneklerimiz", en: "Our Capabilities", ar: "قدراتنا" },
    capabilitiesDesc: {
      tr: "Blueflex'i terlik ihtiyaçlarınız için güvenilir bir üretim ortağı yapan unsurlar.",
      en: "What makes Blueflex a reliable manufacturing partner for your slipper needs.",
      ar: "ما يجعل بلوفليكس شريك تصنيع موثوق لاحتياجات الشباشب الخاصة بك."
    },
    capabilities: {
      capacity: {
        title: { tr: "Üretim Kapasitesi", en: "Production Capacity", ar: "القدرة الإنتاجية" },
        desc: {
          tr: "Ölçeklendirme imkanıyla aylık 50.000+ çift. Her seferde 500 ila 50.000 çift siparişleri karşılayabiliyoruz.",
          en: "50,000+ pairs per month with room to scale. We can handle orders from 500 to 50,000 pairs per run.",
          ar: "أكثر من 50,000 زوج شهرياً مع إمكانية التوسع. يمكننا التعامل مع طلبات من 500 إلى 50,000 زوج لكل دفعة."
        }
      },
      quality: {
        title: { tr: "Kalite Kontrol", en: "Quality Control", ar: "مراقبة الجودة" },
        desc: {
          tr: "Her parti çok aşamalı denetimden geçer. Sevkiyattan önce malzemeleri, dikişleri, ölçüleri ve bitişi kontrol ederiz.",
          en: "Every batch goes through multi-stage inspection. We check materials, stitching, sizing, and finish before shipping.",
          ar: "كل دفعة تمر بفحص متعدد المراحل. نتحقق من المواد والخياطة والمقاسات واللمسات النهائية قبل الشحن."
        }
      },
      lean: {
        title: { tr: "Yalın Süreçler", en: "Lean Processes", ar: "عمليات مرنة" },
        desc: {
          tr: "Modern makineler ve eğitimli ekipler, minimum fire ve hızlı geri dönüşle verimli üretimi sağlar.",
          en: "Modern machinery and trained teams ensure efficient production with minimal waste and fast turnaround.",
          ar: "الآلات الحديثة والفرق المدربة تضمن إنتاجاً فعالاً مع الحد الأدنى من الهدر وسرعة في التنفيذ."
        }
      },
      consistent: {
        title: { tr: "Tutarlı Çıktı", en: "Consistent Output", ar: "إنتاج متسق" },
        desc: {
          tr: "Standartlaştırılmış süreçler, her çiftin numunesiyle eşleşmesi anlamına gelir. Sürpriz yok, sadece güvenilir kalite.",
          en: "Standardized processes mean every pair matches the sample. No surprises, just reliable quality.",
          ar: "العمليات الموحدة تعني أن كل زوج يتطابق مع العينة. لا مفاجآت، فقط جودة موثوقة."
        }
      }
    },
    processTitle: { tr: "Üretim Süreci", en: "Production Process", ar: "عملية الإنتاج" },
    processDesc: {
      tr: "Hammaddeden bitmiş ürüne—terliklerinizi nasıl üretiyoruz.",
      en: "From raw materials to finished product—here's how we manufacture your slippers.",
      ar: "من المواد الخام إلى المنتج النهائي - إليك كيف نصنع شباشبك."
    },
    steps: {
      s1: {
        title: { tr: "Malzeme Tedariki", en: "Material Sourcing", ar: "توريد المواد" },
        desc: { tr: "Güvenilir tedarikçilerden kaliteli kumaşlar, köpükler ve tabanlar temin ediyoruz.", en: "We source quality fabrics, foams, and soles from trusted suppliers.", ar: "نحصل على أقمشة وإسفنج ونعال عالية الجودة من موردين موثوقين." }
      },
      s2: {
        title: { tr: "Kesim ve Dikiş", en: "Cutting & Stitching", ar: "القص والخياطة" },
        desc: { tr: "Hassas kesim makineleri ve yetenekli operatörler üst parçalarını oluşturur.", en: "Precision cutting machines and skilled operators create the upper components.", ar: "آلات القص الدقيقة والمشغلون المهرة ينشئون المكونات العلوية." }
      },
      s3: {
        title: { tr: "Montaj ve Yapıştırma", en: "Assembly & Gluing", ar: "التجميع واللصق" },
        desc: { tr: "Üst parçalar endüstriyel yapıştırıcılar kullanılarak iç taban ve dış tabanlara bağlanır.", en: "Uppers are attached to insoles and outsoles using industrial adhesives.", ar: "يتم ربط الأجزاء العلوية بالنعال الداخلية والخارجية باستخدام مواد لاصقة صناعية." }
      },
      s4: {
        title: { tr: "Kalite Kontrolü", en: "Quality Check", ar: "فحص الجودة" },
        desc: { tr: "Her çift kusurlar, ölçü doğruluğu ve bitiş kalitesi açısından denetlenir.", en: "Each pair is inspected for defects, sizing accuracy, and finish quality.", ar: "يتم فحص كل زوج بحثاً عن العيوب ودقة المقاس وجودة التشطيب." }
      },
      s5: {
        title: { tr: "Paketleme ve Sevkiyat", en: "Packaging & Shipment", ar: "التعبئة والشحن" },
        desc: { tr: "Ürünler taleplerinize göre paketlenir ve konumunuza gönderilir.", en: "Products are packed per your specs and shipped to your location.", ar: "يتم تعبئة المنتجات وفقاً لمواصفاتك وشحنها إلى موقعك." }
      }
    },
    cta: {
      title: { tr: "Tesisimizi görmek ister misiniz?", en: "Want to see our facility?", ar: "هل تريد رؤية منشأتنا؟" },
      desc: {
        tr: "Ciddi ortaklardan fabrika ziyaretlerini memnuniyetle karşılıyoruz. Bir tur planlamak veya üretim numuneleri talep etmek için iletişime geçin.",
        en: "We welcome factory visits from serious partners. Get in touch to schedule a tour or request production samples.",
        ar: "نرحب بزيارات المصنع من الشركاء الجادين. تواصل معنا لجدولة جولة أو طلب عينات الإنتاج."
      },
      schedule: { tr: "Ziyaret Planla", en: "Schedule a Visit", ar: "جدولة زيارة" },
      viewProducts: { tr: "Ürünlerimizi Görün", en: "View Our Products", ar: "شاهد منتجاتنا" }
    }
  },

  // Customization Page
  customization: {
    badge: { tr: "Kendinize Özel", en: "Make It Yours", ar: "اجعلها خاصة بك" },
    title: { tr: "Özelleştirme Seçenekleri", en: "Customization Options", ar: "خيارات التخصيص" },
    desc: {
      tr: "Otel zinciri, perakende marka veya promosyon şirketi olsanız da, terliklerimizi marka kimliğinize uygun şekilde özelleştirebiliriz. Bir fabrika olarak, hem küçük test serileri hem de büyük siparişleri tutarlı kaliteyle üretme esnekliğine sahibiz.",
      en: "Whether you're a hotel chain, retail brand, or promotional company, we can customize our slippers to match your brand identity. As a factory, we have the flexibility to produce both small test runs and large orders with consistent quality.",
      ar: "سواء كنت سلسلة فنادق أو علامة تجارية للبيع بالتجزئة أو شركة ترويجية، يمكننا تخصيص شباشبنا لتتناسب مع هوية علامتك التجارية. كمصنع، لدينا المرونة لإنتاج كل من الدفعات التجريبية الصغيرة والطلبات الكبيرة بجودة متسقة."
    },
    options: {
      model: {
        title: { tr: "Modelinizi Seçin", en: "Choose Your Model", ar: "اختر موديلك" },
        desc: {
          tr: "Kanıtlanmış terlik tasarımlarımızdan biriyle başlayın. Ev kullanımı, oteller, spa'lar ve daha fazlası için optimize edilmiş modellerimiz var. Her model ihtiyaçlarınıza göre değiştirilebilir.",
          en: "Start with one of our proven slipper designs. We have models optimized for home use, hotels, spas, and more. Each model can be modified to fit your needs.",
          ar: "ابدأ بأحد تصاميم الشباشب المثبتة لدينا. لدينا موديلات محسنة للاستخدام المنزلي والفنادق والمنتجعات والمزيد. يمكن تعديل كل موديل ليناسب احتياجاتك."
        }
      },
      colors: {
        title: { tr: "Renk ve Malzeme Seçin", en: "Pick Colors & Materials", ar: "اختر الألوان والمواد" },
        desc: {
          tr: "Kumaş ve renk yelpazemizden seçim yapın veya özel seçenekler talep edin. Polar, havlu, velür, mikrofiber ve daha fazlasıyla çalışıyoruz.",
          en: "Select from our range of fabrics and colors, or request custom options. We work with fleece, terry cloth, velour, microfiber, and more.",
          ar: "اختر من مجموعتنا من الأقمشة والألوان، أو اطلب خيارات مخصصة. نعمل مع الصوف والقماش التيري والمخمل والألياف الدقيقة والمزيد."
        }
      },
      logo: {
        title: { tr: "Logonuzu Ekleyin", en: "Add Your Logo", ar: "أضف شعارك" },
        desc: {
          tr: "Her çiftte markanız. Nakış, dokuma etiketler, baskılı etiketler ve kabartma sunuyoruz. Çoklu yerleşim seçenekleri mevcuttur.",
          en: "Your brand on every pair. We offer embroidery, woven labels, printed tags, and debossing. Multiple placement options available.",
          ar: "علامتك التجارية على كل زوج. نقدم التطريز والعلامات المنسوجة والبطاقات المطبوعة والنقش. خيارات وضع متعددة متاحة."
        }
      },
      packaging: {
        title: { tr: "Özel Paketleme", en: "Custom Packaging", ar: "تغليف مخصص" },
        desc: {
          tr: "Basit poşetlerden markalı kutulara kadar, terliklerinizi tam istediğiniz şekilde paketleyebiliriz.",
          en: "From simple poly bags to branded boxes, we can package your slippers exactly how you want them delivered to your customers.",
          ar: "من الأكياس البلاستيكية البسيطة إلى الصناديق ذات العلامات التجارية، يمكننا تعبئة شباشبك بالضبط كما تريد تسليمها لعملائك."
        }
      }
    },
    howItWorks: { tr: "Nasıl Çalışır", en: "How It Works", ar: "كيف يعمل" },
    howItWorksDesc: {
      tr: "İlk fikrinizden kapınıza teslim edilen bitmiş ürünlere.",
      en: "From your initial idea to finished products at your door.",
      ar: "من فكرتك الأولية إلى المنتجات النهائية على بابك."
    },
    process: {
      p1: {
        title: { tr: "İlk Başvuru", en: "Initial Inquiry", ar: "الاستفسار الأولي" },
        desc: { tr: "İhtiyacınız olanı söyleyin—miktarlar, zaman çizelgesi ve özel gereksinimler.", en: "Tell us what you need—quantities, timeline, and any specific requirements.", ar: "أخبرنا بما تحتاجه - الكميات والجدول الزمني وأي متطلبات محددة." }
      },
      p2: {
        title: { tr: "Numune Geliştirme", en: "Sample Development", ar: "تطوير العينة" },
        desc: { tr: "Taleplerinize göre numuneler oluşturuyoruz. Toplu üretimden önce inceleyip onaylarsınız.", en: "We create samples based on your specs. You review and approve before bulk production.", ar: "نصنع عينات بناءً على مواصفاتك. تقوم بمراجعتها والموافقة عليها قبل الإنتاج بالجملة." }
      },
      p3: {
        title: { tr: "Üretim", en: "Production", ar: "الإنتاج" },
        desc: { tr: "Onaylandıktan sonra, tutarlı kalite kontrolleriyle siparişinizi üretiyoruz.", en: "Once approved, we manufacture your order with consistent quality checks.", ar: "بمجرد الموافقة، نصنع طلبك مع فحوصات جودة متسقة." }
      },
      p4: {
        title: { tr: "Teslimat", en: "Delivery", ar: "التسليم" },
        desc: { tr: "Bitmiş ürünler paketlenir ve dünya genelindeki konumunuza gönderilir.", en: "Finished products are packaged and shipped to your location worldwide.", ar: "يتم تعبئة المنتجات النهائية وشحنها إلى موقعك في جميع أنحاء العالم." }
      }
    },
    moq: {
      title: { tr: "Esnek Minimum Siparişler", en: "Flexible Minimum Orders", ar: "الحد الأدنى للطلبات المرن" },
      desc: {
        tr: "Her projenin büyük olmadığını anlıyoruz. Özel siparişler için standart MOQ'muz 500 çift olsa da, numune serileri veya pilot programlar için daha küçük miktarları tartışabiliriz. Sizin için neyin uygun olduğunu konuşalım.",
        en: "We understand not every project is huge. While our standard MOQ is 500 pairs for custom orders, we can discuss smaller quantities for sample runs or pilot programs. Let's talk about what works for you.",
        ar: "نحن نفهم أن ليس كل مشروع كبير. بينما الحد الأدنى القياسي للطلب هو 500 زوج للطلبات المخصصة، يمكننا مناقشة كميات أصغر للدفعات التجريبية أو البرامج التجريبية. دعنا نتحدث عما يناسبك."
      },
      button: { tr: "Projenizi Başlatın", en: "Start Your Project", ar: "ابدأ مشروعك" }
    }
  },

  // Sustainability Page
  sustainability: {
    badge: { tr: "Yaklaşımımız", en: "Our Approach", ar: "نهجنا" },
    title: { tr: "Sürdürülebilirlik", en: "Sustainability", ar: "الاستدامة" },
    desc: {
      tr: "Biz bir üretim işletmesiyiz ve etkimiz konusunda dürüstüz. Mükemmel değiliz, ancak daha iyisini yapmaya kararlıyız. İşte üzerinde çalıştıklarımız.",
      en: "We're a manufacturing business, and we're honest about our impact. We're not perfect, but we're committed to doing better. Here's what we're working on.",
      ar: "نحن شركة تصنيع، ونحن صادقون بشأن تأثيرنا. لسنا مثاليين، لكننا ملتزمون بالتحسن. إليك ما نعمل عليه."
    },
    initiatives: {
      waste: {
        title: { tr: "Azaltılmış Malzeme Atığı", en: "Reduced Material Waste", ar: "تقليل هدر المواد" },
        desc: {
          tr: "Kumaş atığını en aza indirmek için kesim kalıplarımızı ve süreçlerimizi optimize ediyoruz. Artık malzemeler mümkün olduğunda toplanıp geri dönüştürülüyor.",
          en: "We optimize our cutting patterns and processes to minimize fabric waste. Leftover materials are collected and recycled where possible.",
          ar: "نحسن أنماط القص وعملياتنا لتقليل هدر القماش. يتم جمع المواد المتبقية وإعادة تدويرها حيثما أمكن."
        }
      },
      durable: {
        title: { tr: "Dayanıklı Ürünler", en: "Durable Products", ar: "منتجات متينة" },
        desc: {
          tr: "Uzun ömürlü terlikler daha az değişim ve daha az atık demektir. Planlı eskime için değil, dayanıklılık için tasarlıyoruz.",
          en: "Long-lasting slippers mean fewer replacements and less waste. We design for durability, not planned obsolescence.",
          ar: "الشباشب طويلة العمر تعني استبدالات أقل وهدر أقل. نصمم للمتانة، وليس التقادم المخطط له."
        }
      },
      improvement: {
        title: { tr: "Sürekli İyileştirme", en: "Continuous Improvement", ar: "التحسين المستمر" },
        desc: {
          tr: "Enerji kullanımı, su tüketimi ve genel çevresel etkiyi azaltmak için üretim süreçlerimizi düzenli olarak gözden geçiriyoruz.",
          en: "We regularly review our manufacturing processes to find ways to reduce energy use, water consumption, and overall environmental impact.",
          ar: "نراجع بانتظام عمليات التصنيع لدينا لإيجاد طرق لتقليل استخدام الطاقة واستهلاك المياه والتأثير البيئي الإجمالي."
        }
      },
      sourcing: {
        title: { tr: "Sorumlu Tedarik", en: "Responsible Sourcing", ar: "التوريد المسؤول" },
        desc: {
          tr: "Sorumlu uygulamalar taahhüdümüzü paylaşan tedarikçilerle çalışıyoruz. Geri dönüştürülmüş ve çevre dostu malzeme kullanımımızı kademeli olarak artırıyoruz.",
          en: "We work with suppliers who share our commitment to responsible practices. We're gradually increasing our use of recycled and eco-friendly materials.",
          ar: "نعمل مع الموردين الذين يشاركوننا التزامنا بالممارسات المسؤولة. نحن نزيد تدريجياً استخدامنا للمواد المعاد تدويرها والصديقة للبيئة."
        }
      }
    },
    journey: {
      title: { tr: "Yolculuğumuz Hakkında Bir Not", en: "A Note on Our Journey", ar: "ملاحظة حول رحلتنا" },
      p1: {
        tr: "Gezegeni kurtardığımızı iddia etmeyeceğiz. Üretimin çevresel ayak izi vardır ve bunu kabul ediyoruz.",
        en: "We're not going to pretend we're saving the planet. Manufacturing has an environmental footprint, and we acknowledge that.",
        ar: "لن نتظاهر بأننا ننقذ الكوكب. للتصنيع بصمة بيئية، ونحن نعترف بذلك."
      },
      p2: {
        tr: "Vaat edebildiğimiz şey şeffaflık ve istikrarlı ilerlemedir. Kaynak kullanımımızı takip ediyoruz, iyileştirme fırsatları arıyoruz ve işimiz ve müşterilerimiz için anlamlı olduğunda daha iyi seçenekleri tercih ediyoruz.",
        en: "What we can promise is transparency and steady progress. We track our resource usage, look for opportunities to improve, and choose better options when they make sense for our business and customers.",
        ar: "ما يمكننا وعده هو الشفافية والتقدم المستمر. نتتبع استخدام مواردنا، ونبحث عن فرص للتحسين، ونختار خيارات أفضل عندما تكون منطقية لأعمالنا وعملائنا."
      },
      p3: {
        tr: "Sürdürülebilirlik markanız için bir öncelikse, siparişleriniz için çevre dostu malzeme seçeneklerini ve paketleme çözümlerini tartışmaktan mutluluk duyarız.",
        en: "If sustainability is a priority for your brand, we're happy to discuss eco-friendly material options and packaging solutions for your orders.",
        ar: "إذا كانت الاستدامة أولوية لعلامتك التجارية، يسعدنا مناقشة خيارات المواد الصديقة للبيئة وحلول التعبئة لطلباتك."
      }
    },
    stats: {
      waste: { value: "15%", label: { tr: "2022'den beri atık azaltımı", en: "Waste reduction since 2022", ar: "تقليل النفايات منذ 2022" } },
      recycled: { value: "30%", label: { tr: "Geri dönüştürülmüş kaynaklardan malzeme", en: "Of materials from recycled sources", ar: "من المواد من مصادر معاد تدويرها" } },
      packaging: { value: "100%", label: { tr: "Geri dönüştürülebilir paketleme mevcut", en: "Recyclable packaging available", ar: "تغليف قابل لإعادة التدوير متاح" } }
    }
  },

  // FAQ Page
  faq: {
    badge: { tr: "Sık Sorulan Sorular", en: "Common Questions", ar: "الأسئلة الشائعة" },
    title: { tr: "Sıkça Sorulan Sorular", en: "Frequently Asked Questions", ar: "الأسئلة المتكررة" },
    desc: {
      tr: "Blueflex ile çalışma hakkında bilmeniz gereken her şey. Aradığınızı bulamıyor musunuz? İletişime geçin.",
      en: "Everything you need to know about working with Blueflex. Can't find what you're looking for? Get in touch.",
      ar: "كل ما تحتاج معرفته عن العمل مع بلوفليكس. لا تجد ما تبحث عنه؟ تواصل معنا."
    },
    questions: {
      q1: {
        q: { tr: "Blueflex terlikleri el yapımı mı?", en: "Are Blueflex slippers handmade?", ar: "هل شباشب بلوفليكس مصنوعة يدوياً؟" },
        a: {
          tr: "Hayır. Eğitimli personelle birleştirilmiş modern üretim yöntemlerini kullanarak tutarlı, yüksek kaliteli terlikleri ölçekli olarak üreten bir fabrikayız. Bu, büyük siparişleri verimli bir şekilde karşılarken kaliteyi korumamızı sağlar.",
          en: "No. We are a factory that uses modern manufacturing methods combined with trained staff to produce consistent, high-quality slippers at scale. This allows us to maintain quality while handling large orders efficiently.",
          ar: "لا. نحن مصنع يستخدم أساليب التصنيع الحديثة جنباً إلى جنب مع الموظفين المدربين لإنتاج شباشب متسقة وعالية الجودة على نطاق واسع. هذا يسمح لنا بالحفاظ على الجودة أثناء التعامل مع الطلبات الكبيرة بكفاءة."
        }
      },
      q2: {
        q: { tr: "Minimum sipariş miktarınız (MOQ) nedir?", en: "What is your minimum order quantity (MOQ)?", ar: "ما هو الحد الأدنى لكمية الطلب (MOQ)؟" },
        a: {
          tr: "Özel siparişler için standart MOQ'muz 500 çifttir. Özelleştirme olmadan stok ürünler için daha küçük miktarları karşılayabiliriz. Numune siparişleri veya pilot programlar için lütfen seçenekleri tartışmak üzere bizimle iletişime geçin.",
          en: "Our standard MOQ is 500 pairs for custom orders. For stock items without customization, we can accommodate smaller quantities. For sample orders or pilot programs, please contact us to discuss options.",
          ar: "الحد الأدنى القياسي للطلب لدينا هو 500 زوج للطلبات المخصصة. للمنتجات الجاهزة بدون تخصيص، يمكننا استيعاب كميات أصغر. لطلبات العينات أو البرامج التجريبية، يرجى الاتصال بنا لمناقشة الخيارات."
        }
      },
      q3: {
        q: { tr: "Uluslararası gönderim yapıyor musunuz?", en: "Do you ship internationally?", ar: "هل تقومون بالشحن الدولي؟" },
        a: {
          tr: "Evet, dünya genelinde gönderim yapıyoruz. Hem hava hem de deniz taşımacılığı için güvenilir nakliye ortaklarıyla çalışıyoruz. Teslimat süreleri ve maliyetler konumunuza ve sipariş büyüklüğünüze bağlıdır—sipariş onayınızla birlikte teklif sağlayacağız.",
          en: "Yes, we ship worldwide. We work with reliable freight partners for both air and sea shipping. Delivery times and costs depend on your location and order size—we'll provide a quote with your order confirmation.",
          ar: "نعم، نشحن إلى جميع أنحاء العالم. نعمل مع شركاء شحن موثوقين للشحن الجوي والبحري. تعتمد أوقات التسليم والتكاليف على موقعك وحجم طلبك - سنقدم عرض أسعار مع تأكيد طلبك."
        }
      },
      q4: {
        q: { tr: "Kendi logomuzu ekleyebilir miyiz?", en: "Can we add our own logo?", ar: "هل يمكننا إضافة شعارنا الخاص؟" },
        a: {
          tr: "Kesinlikle. Nakış, dokuma etiketler, baskılı etiketler ve kabartma dahil çeşitli markalama seçenekleri sunuyoruz. Logonuzu terlik üst kısmına, iç tabana veya paketlemeye yerleştirebiliriz. Ekibimiz tasarımınız için en iyi seçeneği seçmenize yardımcı olacaktır.",
          en: "Absolutely. We offer several branding options including embroidery, woven labels, printed tags, and debossing. We can place your logo on the slipper upper, insole, or packaging. Our team will help you choose the best option for your design.",
          ar: "بالتأكيد. نقدم العديد من خيارات العلامات التجارية بما في ذلك التطريز والعلامات المنسوجة والبطاقات المطبوعة والنقش. يمكننا وضع شعارك على الجزء العلوي من الشبشب أو النعل الداخلي أو التغليف. سيساعدك فريقنا في اختيار الخيار الأفضل لتصميمك."
        }
      },
      q5: {
        q: { tr: "Standart teslim süreleriniz nedir?", en: "What are your standard lead times?", ar: "ما هي أوقات التسليم القياسية لديكم؟" },
        a: {
          tr: "5.000 çifte kadar siparişler için tipik üretim süresi 3-4 haftadır. Daha büyük siparişler veya karmaşık özelleştirmeler 5-6 hafta sürebilir. Numune geliştirme genellikle 1-2 hafta sürer. Teklifinizle birlikte kesin zaman çizelgeleri sağlayacağız.",
          en: "Typical production time is 3-4 weeks for orders up to 5,000 pairs. Larger orders or complex customizations may take 5-6 weeks. Sample development usually takes 1-2 weeks. We'll provide exact timelines with your quote.",
          ar: "وقت الإنتاج النموذجي هو 3-4 أسابيع للطلبات حتى 5,000 زوج. قد تستغرق الطلبات الأكبر أو التخصيصات المعقدة 5-6 أسابيع. عادة ما يستغرق تطوير العينات 1-2 أسبوع. سنقدم جداول زمنية دقيقة مع عرض الأسعار الخاص بك."
        }
      },
      q6: {
        q: { tr: "Diğer markalar için üretim yapıyor musunuz (beyaz etiket)?", en: "Do you produce for other brands (white-label)?", ar: "هل تنتجون لعلامات تجارية أخرى (العلامة البيضاء)؟" },
        a: {
          tr: "Evet, birçok markayla üretim ortağı olarak çalışıyoruz. Ürünleriniz taleplerinize göre üretilecek ve tamamen kendi markanız altında etiketlenecektir. Tüm müşteri bilgilerini gizli tutuyoruz.",
          en: "Yes, we work with many brands as their manufacturing partner. Your products will be made to your specifications and branded entirely as your own. We keep all client information confidential.",
          ar: "نعم، نعمل مع العديد من العلامات التجارية كشريك تصنيع لهم. سيتم تصنيع منتجاتك وفقاً لمواصفاتك ووضع علامتك التجارية عليها بالكامل. نحتفظ بجميع معلومات العملاء سرية."
        }
      },
      q7: {
        q: { tr: "Hangi ölçüleri sunuyorsunuz?", en: "Which sizes do you offer?", ar: "ما هي المقاسات التي تقدمونها؟" },
        a: {
          tr: "Çocuklardan yetişkinlere kadar AB 22-46 numaralar üretiyoruz. Otel ve spa ürünleri için tek beden ve S/M/L/XL ölçü seçenekleri de sunuyoruz. Özel siparişler için özel ölçü aralıkları tartışılabilir.",
          en: "We produce EU sizes 22-46, covering children through adult. For hotel and spa products, we also offer one-size-fits-most options and S/M/L/XL sizing. Custom size ranges can be discussed for specific orders.",
          ar: "ننتج مقاسات أوروبية 22-46، تغطي الأطفال إلى البالغين. لمنتجات الفنادق والمنتجعات، نقدم أيضاً خيارات مقاس واحد يناسب الجميع ومقاسات S/M/L/XL. يمكن مناقشة نطاقات المقاسات المخصصة للطلبات المحددة."
        }
      },
      q8: {
        q: { tr: "Numune ürünler gönderebilir misiniz?", en: "Can you send sample products?", ar: "هل يمكنكم إرسال منتجات نموذجية؟" },
        a: {
          tr: "Evet, mevcut yelpazemizden numuneler veya taleplerinize göre özel numuneler gönderebiliriz. Stok numuneler genellikle ücretsizdir (kargo sizden). Özel numunelerde toplu siparişinize mahsup edilen geliştirme ücreti vardır.",
          en: "Yes, we can send samples from our existing range or create custom samples based on your requirements. Stock samples are typically free (you pay shipping). Custom samples have a development fee that's credited toward your bulk order.",
          ar: "نعم، يمكننا إرسال عينات من مجموعتنا الحالية أو إنشاء عينات مخصصة بناءً على متطلباتك. العينات الجاهزة مجانية عادةً (أنت تدفع الشحن). العينات المخصصة لها رسوم تطوير تُخصم من طلبك بالجملة."
        }
      },
      q9: {
        q: { tr: "Hangi malzemeleri kullanıyorsunuz?", en: "What materials do you use?", ar: "ما هي المواد التي تستخدمونها؟" },
        a: {
          tr: "Polar, havlu, velür, mikrofiber, waffle pamuk ve daha fazlası dahil çeşitli malzemelerle çalışıyoruz. Taban seçenekleri arasında EVA, TPR, kauçuk ve dokunmamış malzemeler bulunur. Kullanım durumunuz için en iyi malzemeleri önerebiliriz.",
          en: "We work with a variety of materials including fleece, terry cloth, velour, microfiber, waffle cotton, and more. Sole options include EVA, TPR, rubber, and non-woven materials. We can recommend the best materials for your use case.",
          ar: "نعمل مع مجموعة متنوعة من المواد بما في ذلك الصوف والقماش التيري والمخمل والألياف الدقيقة وقطن الوافل والمزيد. تشمل خيارات النعل EVA وTPR والمطاط والمواد غير المنسوجة. يمكننا التوصية بأفضل المواد لحالة استخدامك."
        }
      },
      q10: {
        q: { tr: "Nasıl başlayabilirim?", en: "How do I get started?", ar: "كيف أبدأ؟" },
        a: {
          tr: "Formumuz veya e-posta yoluyla bizimle iletişime geçmeniz yeterli. Projeniz hakkında bize bilgi verin—ne tür terlikler ihtiyacınız var, yaklaşık miktarlar ve özelleştirme gereksinimleri. Sorularla ve ön teklifle 1-2 iş günü içinde size geri döneceğiz.",
          en: "Simply contact us through our form or email. Tell us about your project—what type of slippers you need, approximate quantities, and any customization requirements. We'll get back to you within 1-2 business days with questions and a preliminary quote.",
          ar: "ببساطة تواصل معنا من خلال نموذجنا أو البريد الإلكتروني. أخبرنا عن مشروعك - ما نوع الشباشب التي تحتاجها، والكميات التقريبية، وأي متطلبات تخصيص. سنرد عليك خلال 1-2 أيام عمل مع الأسئلة وعرض أسعار أولي."
        }
      }
    },
    cta: {
      title: { tr: "Hala sorularınız mı var?", en: "Still have questions?", ar: "لا زال لديك أسئلة؟" },
      desc: {
        tr: "Ekibimiz ürünlerimiz, süreçlerimiz veya projenize nasıl yardımcı olabileceğimiz hakkındaki tüm sorularınızı yanıtlamaktan mutluluk duyar.",
        en: "Our team is happy to answer any questions about our products, processes, or how we can help with your project.",
        ar: "فريقنا سعيد بالإجابة على أي أسئلة حول منتجاتنا أو عملياتنا أو كيف يمكننا المساعدة في مشروعك."
      },
      button: { tr: "Bize Ulaşın", en: "Contact Us", ar: "اتصل بنا" }
    }
  },

  // Contact Page
  contact: {
    badge: { tr: "İletişime Geçin", en: "Get in Touch", ar: "تواصل معنا" },
    title: { tr: "Birlikte terlik hattınızı oluşturalım.", en: "Let's build your slipper line together.", ar: "لنبني خط شباشبك معاً." },
    desc: {
      tr: "Projeniz hakkında bize bilgi verin, seçenekler ve ön tekifle size geri döneceğiz.",
      en: "Tell us about your project, and we'll get back to you with options and a preliminary quote.",
      ar: "أخبرنا عن مشروعك، وسنرد عليك بالخيارات وعرض أسعار أولي."
    },
    form: {
      name: { tr: "Ad", en: "Name", ar: "الاسم" },
      company: { tr: "Şirket", en: "Company", ar: "الشركة" },
      email: { tr: "E-posta", en: "Email", ar: "البريد الإلكتروني" },
      phone: { tr: "Telefon (opsiyonel)", en: "Phone (optional)", ar: "الهاتف (اختياري)" },
      country: { tr: "Ülke", en: "Country", ar: "البلد" },
      interests: { tr: "Nelerle ilgileniyorsunuz?", en: "What are you interested in?", ar: "ما الذي يثير اهتمامك؟" },
      message: { tr: "Mesaj", en: "Message", ar: "الرسالة" },
      languageNote: { tr: "Türkçe veya İngilizce yazabilirsiniz.", en: "You can write in English or Turkish.", ar: "يمكنك الكتابة بالإنجليزية أو التركية." },
      submit: { tr: "Mesaj Gönder", en: "Send Message", ar: "إرسال الرسالة" },
      sending: { tr: "Gönderiliyor...", en: "Sending...", ar: "جاري الإرسال..." },
      placeholders: {
        name: { tr: "Adınız", en: "Your name", ar: "اسمك" },
        company: { tr: "Şirket adı", en: "Company name", ar: "اسم الشركة" },
        email: { tr: "siz@sirket.com", en: "you@company.com", ar: "أنت@الشركة.com" },
        phone: { tr: "+90 555 000 00 00", en: "+1 234 567 8900", ar: "+1 234 567 8900" },
        country: { tr: "Ülkeniz", en: "Your country", ar: "بلدك" },
        message: { tr: "Projeniz, miktarlar, zaman çizelgesi ve özel gereksinimler hakkında bize bilgi verin...", en: "Tell us about your project, quantities, timeline, and any specific requirements...", ar: "أخبرنا عن مشروعك والكميات والجدول الزمني وأي متطلبات محددة..." }
      }
    },
    interests: {
      hotel: { tr: "Otel terlikleri", en: "Hotel slippers", ar: "شباشب الفندق" },
      retail: { tr: "Perakende marka", en: "Retail brand", ar: "علامة تجارية للبيع بالتجزئة" },
      corporate: { tr: "Kurumsal hediyeler", en: "Corporate gifts", ar: "هدايا الشركات" },
      other: { tr: "Diğer", en: "Other", ar: "أخرى" }
    },
    info: {
      title: { tr: "İletişim Bilgileri", en: "Contact Information", ar: "معلومات الاتصال" },
      email: { tr: "E-posta", en: "Email", ar: "البريد الإلكتروني" },
      phone: { tr: "Telefon / WhatsApp", en: "Phone / WhatsApp", ar: "الهاتف / واتساب" },
      location: { tr: "Fabrika Konumu", en: "Factory Location", ar: "موقع المصنع" },
      address: { tr: "Sanayi Bölgesi, Denizli\nTürkiye", en: "Industrial Zone, Denizli\nTürkiye", ar: "المنطقة الصناعية، دنيزلي\nتركيا" }
    },
    responseTime: {
      title: { tr: "Yanıt Süresi", en: "Response Time", ar: "وقت الاستجابة" },
      desc: {
        tr: "Genellikle 1-2 iş günü içinde yanıt veriyoruz. Acil sorular için WhatsApp üzerinden bize ulaşabilirsiniz.",
        en: "We typically respond within 1-2 business days. For urgent inquiries, feel free to reach us via WhatsApp.",
        ar: "عادة ما نرد خلال 1-2 أيام عمل. للاستفسارات العاجلة، لا تتردد في التواصل معنا عبر واتساب."
      }
    },
    mapPlaceholder: { tr: "Harita yer tutucusu", en: "Map placeholder", ar: "موقع الخريطة" },
    toast: {
      title: { tr: "Mesaj gönderildi!", en: "Message sent!", ar: "تم إرسال الرسالة!" },
      desc: { tr: "1-2 iş günü içinde size geri döneceğiz.", en: "We'll get back to you within 1-2 business days.", ar: "سنرد عليك خلال 1-2 أيام عمل." }
    }
  },

  // Footer
  footer: {
    tagline: {
      tr: "Türkiye'de modern terlik üretim tesisi. Evler, oteller ve dünya genelindeki markalar için kaliteli iç mekan terlikleri.",
      en: "Modern slipper manufacturing facility in Türkiye. Quality indoor slippers for homes, hotels, and brands worldwide.",
      ar: "منشأة تصنيع شباشب حديثة في تركيا. شباشب داخلية عالية الجودة للمنازل والفنادق والعلامات التجارية في جميع أنحاء العالم."
    },
    products: { tr: "Ürünler", en: "Products", ar: "المنتجات" },
    company: { tr: "Şirket", en: "Company", ar: "الشركة" },
    slipperModels: { tr: "Terlik Modelleri", en: "Slipper Models", ar: "موديلات الشباشب" },
    customization: { tr: "Özelleştirme", en: "Customization", ar: "التخصيص" },
    industries: { tr: "Sektörler", en: "Industries", ar: "القطاعات" },
    ourFactory: { tr: "Fabrikamız", en: "Our Factory", ar: "مصنعنا" },
    sustainability: { tr: "Sürdürülebilirlik", en: "Sustainability", ar: "الاستدامة" },
    faq: { tr: "SSS", en: "FAQ", ar: "الأسئلة الشائعة" },
    contact: { tr: "İletişim", en: "Contact", ar: "اتصل بنا" },
    copyright: { tr: "© {year} Blueflex Terlik. Tüm hakları saklıdır.", en: "© {year} Blueflex Slippers. All rights reserved.", ar: "© {year} شباشب بلوفليكس. جميع الحقوق محفوظة." },
    getQuote: { tr: "Teklif Al", en: "Get a Quote", ar: "احصل على عرض سعر" }
  }
} as const;

// Helper function to get translation with fallback
export function t(key: string, lang: Language): string {
  const keys = key.split(".");
  let result: any = translations;
  
  for (const k of keys) {
    if (result && typeof result === "object" && k in result) {
      result = result[k];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }
  
  if (result && typeof result === "object" && lang in result) {
    return result[lang];
  }
  
  // Fallback to English
  if (result && typeof result === "object" && "en" in result) {
    return result.en;
  }
  
  return key;
}
