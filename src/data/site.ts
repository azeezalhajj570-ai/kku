export type NavItem = {
  href: string;
  label: string;
  description: string;
  category: string;
};

export type DeadlineItem = {
  label: string;
  detail: string;
  href: string;
  tone?: "default" | "warning";
};

export type QuickCard = {
  href: string;
  title: string;
  description: string;
  tag: string;
};

export const siteMeta = {
  title: "دليل KKU الأكاديمي",
  description:
    "بوابة أكاديمية مستقلة لطلاب جامعة الملك خالد تجمع الأدوات واللوائح والجداول والخطوات المهمة في تجربة أكثر وضوحاً وسهولة.",
  repoName: "kku"
};

export const primaryNav: NavItem[] = [
  {
    href: "/",
    label: "الرئيسية",
    description: "نقطة البداية وأهم المسارات",
    category: "عام"
  },
  {
    href: "/tools",
    label: "الأدوات",
    description: "حاسبات وتواريخ ومؤشرات سريعة",
    category: "أدوات"
  },
  {
    href: "/policies",
    label: "اللوائح والمسارات",
    description: "التحويل والاعتذار والدراسات العليا",
    category: "لوائح"
  },
  {
    href: "/plans",
    label: "الخطط",
    description: "روابط الخطط الدراسية حسب الكلية",
    category: "أكاديمي"
  },
  {
    href: "/deanship",
    label: "الخدمات",
    description: "التواصل والمراجع المهمة",
    category: "خدمات"
  }
];

export const allPages: NavItem[] = [
  ...primaryNav,
  {
    href: "/calendar",
    label: "التقويم الأكاديمي",
    description: "صورة مرجعية للتقويم مع ملاحظات استخدام",
    category: "تواريخ"
  },
  {
    href: "/date",
    label: "التاريخ والوقت",
    description: "لوحة حية للتاريخين الهجري والميلادي",
    category: "تواريخ"
  },
  {
    href: "/gpa",
    label: "حساب المعدل الفصلي",
    description: "حساب المعدل من 5 مع تقدير تقريبي",
    category: "أدوات"
  },
  {
    href: "/grade",
    label: "رموز الدرجات والمعدل",
    description: "جدول رموز التقديرات ومعانيها",
    category: "أدوات"
  },
  {
    href: "/money",
    label: "المكافأة",
    description: "مؤشر زمني تقديري ليوم الإيداع الشهري",
    category: "تواريخ"
  },
  {
    href: "/advice",
    label: "نصائح مهمة",
    description: "ممارسات يومية للدراسة والتنظيم",
    category: "إرشاد"
  },
  {
    href: "/rate",
    label: "حاسبة الغياب",
    description: "تقدير نسبة الغياب للمادة أو للفصل",
    category: "أدوات"
  },
  {
    href: "/honors",
    label: "مراتب الشرف",
    description: "الشروط والمعدلات المرتبطة بالتخرج المتميز",
    category: "لوائح"
  },
  {
    href: "/masters-requirements",
    label: "شروط الماجستير",
    description: "الشروط العامة للتقديم على برامج الماجستير",
    category: "لوائح"
  },
  {
    href: "/internal-transfer-terms",
    label: "التحويل الداخلي",
    description: "ضوابط التحويل بين الكليات والتخصصات داخل الجامعة",
    category: "لوائح"
  },
  {
    href: "/external-transfer",
    label: "التحويل الخارجي",
    description: "ضوابط الانتقال من جامعة أخرى إلى KKU",
    category: "لوائح"
  },
  {
    href: "/apology-material",
    label: "الاعتذار عن مادة",
    description: "مرجع بصري لإجراءات الاعتذار عن مقرر",
    category: "لوائح"
  },
  {
    href: "/final",
    label: "الاختبارات النهائية",
    description: "صفحة مرجعية لمتابعة العد التنازلي وملاحظات التحديث",
    category: "تواريخ"
  },
  {
    href: "/evolve",
    label: "Evolve",
    description: "روابط مرجعية لمحتوى Evolve المذكور في المصدر القديم",
    category: "موارد"
  }
];

export const homepageQuickActions: QuickCard[] = [
  {
    href: "/gpa",
    title: "احسب معدلك الفصلي",
    description: "أدخل تقديرات المواد واحصل على المعدل والنقاط فوراً.",
    tag: "أداة"
  },
  {
    href: "/rate",
    title: "راجع نسبة الغياب",
    description: "تقدير سريع للحضور في المسارات العادية أو الصحية والهندسية.",
    tag: "أداة"
  },
  {
    href: "/internal-transfer-terms",
    title: "هل ينطبق عليك التحويل الداخلي؟",
    description: "ملخص الشروط مع نقاط تحقق واضحة قبل التقديم.",
    tag: "مسار"
  },
  {
    href: "/plans",
    title: "الوصول إلى الخطط",
    description: "روابط مجمعة للخطط الدراسية حسب الكلية أو الخطة.",
    tag: "مرجع"
  }
];

export const deadlineStrip: DeadlineItem[] = [
  {
    label: "المكافأة الشهرية",
    detail: "اليوم المرجعي في المصدر القديم: 23 من كل شهر ميلادي",
    href: "/money"
  },
  {
    label: "الاختبارات النهائية",
    detail: "آخر تواريخ موجودة في النسخة القديمة: 15 ديسمبر 2024 و11 مايو 2025",
    href: "/final",
    tone: "warning"
  },
  {
    label: "التقويم الأكاديمي",
    detail: "صورة مرجعية لجدول 1446هـ كما ورد في المصدر القديم",
    href: "/calendar"
  }
];

export const sectionCards = {
  tools: allPages.filter((page) => ["أدوات", "تواريخ"].includes(page.category)),
  policies: allPages.filter((page) => page.category === "لوائح"),
  resources: allPages.filter((page) => ["إرشاد", "موارد", "خدمات", "أكاديمي"].includes(page.category))
};

export const footerLinks = [
  { href: "https://github.com/isssm/kku", label: "المصدر الأصلي" },
  { href: "https://t.me/kku_4", label: "قروب الاستفسارات" },
  { href: "https://www.kku.edu.sa/", label: "الموقع الرسمي للجامعة" }
];
