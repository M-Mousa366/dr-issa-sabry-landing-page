export type SystemId = 'center' | 'online-live' | 'books' | 'club';

export interface System {
  id: SystemId;
  title: string;
  /** One-line fit description shown on quiz option and detail header */
  fit: string;
  /** One-sentence value prop */
  tagline: string;
  /** "مناسب ليك لو:" — 3 items max */
  suitableIf: string[];
  /** "يشمل:" — 3–5 items */
  includes: string[];
  pricingNote: string;
  /** Path under /images/ — easy to replace */
  imageSrc: string;
  imageAlt: string;
  accent: {
    /** Section bg tint */
    section: string;
    /** Card/panel bg */
    bg: string;
    /** Text color */
    text: string;
    /** Border color */
    border: string;
    /** Icon background */
    iconBg: string;
    /** Small tag/badge */
    tag: string;
    /** Dot color for quiz active indicator */
    dot: string;
  };
}

export const systems: System[] = [
  {
    id: 'center',
    title: 'الحضور في السنتر',
    fit: 'بتحب الحضور والتفاعل',
    tagline: 'شرح مباشر داخل الحصة مع تفاعل حقيقي مع المدرس والزملاء.',
    suitableIf: [
      'بتحب تسأل وتتفاعل أثناء الشرح',
      'بتفضل وجود المدرس معاك وجهًا لوجه',
      'بتستفيد من حل التطبيقات داخل الحصة',
    ],
    includes: [
      'شرح الدرس بالكامل',
      'حل تمارين وتطبيقات أثناء الحصة',
      'تفاعل مباشر مع المدرس',
      'متابعة واستفسارات داخل السنتر',
    ],
    pricingNote: 'وفقًا لسياسة الأسعار الخاصة بكل سنتر',
    imageSrc: '/images/center.jpg',
    imageAlt: 'طالب يحضر حصة في السنتر',
    accent: {
      section: 'bg-blue-50/60',
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      iconBg: 'bg-blue-100',
      tag: 'text-blue-700 bg-blue-100 border-blue-200',
      dot: 'bg-blue-500',
    },
  },
  {
    id: 'online-live',
    title: 'Online Live',
    fit: 'عايز أدرس من البيت',
    tagline: 'حصص مباشرة حية عبر Zoom / Google Meet — تفاعل فوري من البيت.',
    suitableIf: [
      'بتحب الشرح المباشر ومش قادر تحضر السنتر',
      'عايز تسأل وتتفاعل أثناء الحصة',
      'بتفضل مرونة الحضور من أي مكان',
    ],
    includes: [
      'شرح الدرس بالكامل أونلاين',
      'أسئلة وإجابات مباشرة أثناء الشرح',
      'حل بعض التمارين والتطبيقات',
      'عبر Zoom / Google Meet',
    ],
    pricingNote: 'للاستفسار عن تكلفة الاشتراك',
    imageSrc: '/images/online.jpg',
    imageAlt: 'طالب يحضر حصة أونلاين من البيت',
    accent: {
      section: 'bg-sky-50/60',
      bg: 'bg-sky-50',
      text: 'text-sky-700',
      border: 'border-sky-200',
      iconBg: 'bg-sky-100',
      tag: 'text-sky-700 bg-sky-100 border-sky-200',
      dot: 'bg-sky-500',
    },
  },
  {
    id: 'books',
    title: 'كتب شيخ البرمجة',
    fit: 'بحب أذاكر بطريقتي',
    tagline: 'حزمة 3 كتب متكاملة — ذاكر بوقتك وبأسلوبك الخاص.',
    suitableIf: [
      'بتفضل تذاكر بوقتك من غير التزام بمواعيد',
      'بتحتاج مرجع تدرّس منه وترجع ليه',
      'بتحب تحل التدريبات وتقيّم نفسك بنفسك',
    ],
    includes: [
      'كتاب الشرح — شرح المحتوى بطريقة منظمة',
      'كتاب التدريبات المحلولة — تدريبات الكتاب المدرسي + شيخ البرمجة',
      'كتاب الواجبات والاختبارات — للتقييم الذاتي',
    ],
    pricingNote: 'للاستفسار عن السعر وطريقة الحصول على الحزمة',
    imageSrc: '/images/books.jpg',
    imageAlt: 'حزمة كتب شيخ البرمجة',
    accent: {
      section: 'bg-violet-50/60',
      bg: 'bg-violet-50',
      text: 'text-violet-700',
      border: 'border-violet-200',
      iconBg: 'bg-violet-100',
      tag: 'text-violet-700 bg-violet-100 border-violet-200',
      dot: 'bg-violet-500',
    },
  },
  {
    id: 'club',
    title: 'نادي المبرمجين',
    fit: 'محتاج متابعة مستمرة',
    tagline: 'منصة تعليمية شاملة — شرح وتدريب وتصحيح واجبات خلال 24 ساعة.',
    suitableIf: [
      'محتاج متابعة حقيقية ومستمرة في مذاكرتك',
      'بتحتاج تصحيح واجباتك وتعرف أخطاؤك',
      'بتحب الاختبارات والتحديات كدافع للتقدم',
    ],
    includes: [
      'فيديوهات شرح كاملة + E-book تفاعلي',
      'رفع واجبات وتصحيح خلال 24 ساعة',
      'فيديوهات لحل الواجبات',
      'اختبارات مفاجئة وChallenges',
      'اشتراك: شهري / ترم (4 شهور) / سنة دراسية',
    ],
    pricingNote: 'للاستفسار عن السعر والتفعيل',
    imageSrc: '/images/club.jpg',
    imageAlt: 'طالب يستخدم منصة نادي المبرمجين',
    accent: {
      section: 'bg-emerald-50/60',
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      iconBg: 'bg-emerald-100',
      tag: 'text-emerald-700 bg-emerald-100 border-emerald-200',
      dot: 'bg-emerald-500',
    },
  },
];

// Contact placeholders — replace with real values before going live
export const CONTACT = {
  whatsapp: 'https://wa.me/201095304313',
  phone: 'PHONE_NUMBER_PLACEHOLDER',
  email: 'EMAIL_PLACEHOLDER',
  facebook: 'FACEBOOK_LINK_PLACEHOLDER',
  youtube: 'YOUTUBE_LINK_PLACEHOLDER',
};
