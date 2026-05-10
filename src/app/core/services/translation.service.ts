import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'ar';

export interface Translations {
  // Navbar
  nav_home: string;
  nav_services: string;
  nav_portfolio: string;
  nav_contact: string;
  nav_about: string;

  // Hero
  hero_badge: string;
  hero_title: string;
  hero_subtitle: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;
  hero_stat_projects: string;
  hero_stat_clients: string;
  hero_stat_years: string;
  hero_stat_guarantee: string;

  // About
  about_title: string;
  about_subtitle: string;
  about_name: string;
  about_role: string;
  about_bio: string;
  about_exp_years: string;
  about_exp_label: string;
  about_skill_install: string;
  about_skill_maintain: string;
  about_skill_repair: string;
  about_skill_design: string;
  about_skill_energy: string;
  about_skill_central: string;

  // Services
  services_title: string;
  services_subtitle: string;
  svc_install_title: string;
  svc_install_desc: string;
  svc_maintain_title: string;
  svc_maintain_desc: string;
  svc_repair_title: string;
  svc_repair_desc: string;
  svc_central_title: string;
  svc_central_desc: string;
  svc_energy_title: string;
  svc_energy_desc: string;
  svc_consult_title: string;
  svc_consult_desc: string;
  services_cta: string;

  // Portfolio
  portfolio_title: string;
  portfolio_subtitle: string;
  portfolio_all: string;
  portfolio_install: string;
  portfolio_maintain: string;
  portfolio_commercial: string;
  portfolio_residential: string;
  portfolio_view: string;
  portfolio_close: string;

  // Gallery
  gallery_title: string;
  gallery_subtitle: string;

  // Contact
  contact_title: string;
  contact_subtitle: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  contact_message: string;
  contact_send: string;
  contact_sending: string;
  contact_success: string;
  contact_phone_label: string;
  contact_email_label: string;
  contact_location_label: string;
  contact_location: string;
  contact_whatsapp: string;
  contact_call: string;
  contact_name_error: string;
  contact_email_error: string;
  contact_message_error: string;

  // Footer
  footer_tagline: string;
  footer_links: string;
  footer_contact: string;
  footer_rights: string;

  // Common
  learn_more: string;
  view_all: string;
  loading: string;
}

const en: Translations = {
  nav_home: 'Home',
  nav_services: 'Services',
  nav_portfolio: 'Portfolio',
  nav_contact: 'Contact',
  nav_about: 'About',

  hero_badge: 'Professional HVAC Services',
  hero_title: 'Expert Air Conditioning Solutions',
  hero_subtitle: 'Delivering premium HVAC installation, maintenance & repair services across Cairo with precision and professionalism.',
  hero_cta_primary: 'Get a Free Quote',
  hero_cta_secondary: 'View Portfolio',
  hero_stat_projects: 'Projects Done',
  hero_stat_clients: 'Happy Clients',
  hero_stat_years: 'Years Experience',
  hero_stat_guarantee: 'Years Warranty',

  about_title: 'Meet the Expert',
  about_subtitle: 'Dedicated to delivering the highest quality HVAC solutions in Cairo',
  about_name: 'Eng. Ibrahim Abdelhay',
  about_role: 'Senior HVAC Engineer & Technician',
  about_bio: 'With over 10 years of hands-on experience in the HVAC industry, I specialize in residential and commercial air conditioning systems. My commitment to quality, precision, and customer satisfaction has earned the trust of hundreds of clients across Cairo.',
  about_exp_years: '10+',
  about_exp_label: 'Years of Experience',
  about_skill_install: 'AC Installation',
  about_skill_maintain: 'Preventive Maintenance',
  about_skill_repair: 'Fault Diagnosis & Repair',
  about_skill_design: 'System Design',
  about_skill_energy: 'Energy Efficiency',
  about_skill_central: 'Central AC Systems',

  services_title: 'Our Services',
  services_subtitle: 'Comprehensive HVAC solutions tailored to your needs',
  svc_install_title: 'AC Installation',
  svc_install_desc: 'Expert installation of split, central, and ducted AC systems with precision and care.',
  svc_maintain_title: 'Preventive Maintenance',
  svc_maintain_desc: 'Regular maintenance plans to keep your system running at peak efficiency year-round.',
  svc_repair_title: 'Repair & Troubleshooting',
  svc_repair_desc: 'Fast, reliable repair services for all AC brands and models. Same-day service available.',
  svc_central_title: 'Central AC Systems',
  svc_central_desc: 'Complete central air conditioning solutions for large commercial and residential properties.',
  svc_energy_title: 'Energy Optimization',
  svc_energy_desc: 'Audit and upgrade your HVAC system to reduce energy consumption and lower bills.',
  svc_consult_title: 'HVAC Consulting',
  svc_consult_desc: 'Professional consulting for new construction projects and system upgrades.',
  services_cta: 'Request a Service',

  portfolio_title: 'Our Portfolio',
  portfolio_subtitle: 'A showcase of our completed HVAC projects across Cairo',
  portfolio_all: 'All',
  portfolio_install: 'Installation',
  portfolio_maintain: 'Maintenance',
  portfolio_commercial: 'Commercial',
  portfolio_residential: 'Residential',
  portfolio_view: 'View Details',
  portfolio_close: 'Close',

  gallery_title: 'Work Gallery',
  gallery_subtitle: 'Real photos from our completed projects',

  contact_title: 'Contact Us',
  contact_subtitle: 'Ready to upgrade your comfort? Get in touch today',
  contact_name: 'Full Name',
  contact_email: 'Email Address',
  contact_phone: 'Phone Number',
  contact_message: 'Your Message',
  contact_send: 'Send Message',
  contact_sending: 'Sending...',
  contact_success: 'Message sent successfully! We will contact you shortly.',
  contact_phone_label: 'Phone',
  contact_email_label: 'Email',
  contact_location_label: 'Location',
  contact_location: 'Cairo, Egypt',
  contact_whatsapp: 'Chat on WhatsApp',
  contact_call: 'Call Now',
  contact_name_error: 'Name is required',
  contact_email_error: 'Valid email is required',
  contact_message_error: 'Message is required (min. 10 characters)',

  footer_tagline: 'Your trusted HVAC partner in Cairo. Quality, reliability and comfort — guaranteed.',
  footer_links: 'Quick Links',
  footer_contact: 'Contact Info',
  footer_rights: 'All rights reserved.',

  learn_more: 'Learn More',
  view_all: 'View All',
  loading: 'Loading...',
};

const ar: Translations = {
  nav_home: 'الرئيسية',
  nav_services: 'الخدمات',
  nav_portfolio: 'أعمالنا',
  nav_contact: 'تواصل معنا',
  nav_about: 'عن المهندس',

  hero_badge: 'خدمات تكييف احترافية',
  hero_title: 'حلول تكييف الهواء المتخصصة',
  hero_subtitle: 'نقدم خدمات تركيب وصيانة وإصلاح التكييف بأعلى مستوى من الجودة والاحترافية في القاهرة.',
  hero_cta_primary: 'احصل على عرض مجاني',
  hero_cta_secondary: 'مشاهدة أعمالنا',
  hero_stat_projects: 'مشروع منجز',
  hero_stat_clients: 'عميل راضٍ',
  hero_stat_years: 'سنوات خبرة',
  hero_stat_guarantee: 'سنوات ضمان',

  about_title: 'تعرف على الخبير',
  about_subtitle: 'ملتزمون بتقديم أعلى جودة في حلول التكييف بالقاهرة',
  about_name: 'م. إبراهيم عبد الحي',
  about_role: 'مهندس ميكانيكا وفني تكييف أول',
  about_bio: 'أكثر من 10 سنوات من الخبرة العملية في مجال التكييف والتبريد. متخصص في أنظمة التكييف السكنية والتجارية. التزامي بالجودة والدقة ورضا العملاء جعلني الخيار الأول لمئات العملاء في القاهرة.',
  about_exp_years: '+10',
  about_exp_label: 'سنوات من الخبرة',
  about_skill_install: 'تركيب التكييف',
  about_skill_maintain: 'الصيانة الوقائية',
  about_skill_repair: 'تشخيص الأعطال والإصلاح',
  about_skill_design: 'تصميم الأنظمة',
  about_skill_energy: 'كفاءة الطاقة',
  about_skill_central: 'أنظمة التكييف المركزي',

  services_title: 'خدماتنا',
  services_subtitle: 'حلول تكييف شاملة مصممة خصيصاً لاحتياجاتك',
  svc_install_title: 'تركيب التكييف',
  svc_install_desc: 'تركيب احترافي لأنظمة التكييف المنقسمة والمركزية والمجاري بدقة واتقان.',
  svc_maintain_title: 'الصيانة الدورية',
  svc_maintain_desc: 'خطط صيانة منتظمة لإبقاء نظامك يعمل بكفاءة عالية طوال العام.',
  svc_repair_title: 'الإصلاح والصيانة',
  svc_repair_desc: 'خدمات إصلاح سريعة وموثوقة لجميع ماركات وموديلات التكييف. خدمة في نفس اليوم.',
  svc_central_title: 'أنظمة التكييف المركزي',
  svc_central_desc: 'حلول تكييف مركزي متكاملة للمباني التجارية والسكنية الكبيرة.',
  svc_energy_title: 'تحسين كفاءة الطاقة',
  svc_energy_desc: 'فحص وتطوير نظامك لتقليل استهلاك الكهرباء وخفض الفواتير.',
  svc_consult_title: 'الاستشارات الهندسية',
  svc_consult_desc: 'استشارات مهنية لمشاريع البناء الجديدة وترقية الأنظمة.',
  services_cta: 'طلب خدمة',

  portfolio_title: 'أعمالنا',
  portfolio_subtitle: 'عرض لمشاريع التكييف المنجزة في القاهرة',
  portfolio_all: 'الكل',
  portfolio_install: 'تركيب',
  portfolio_maintain: 'صيانة',
  portfolio_commercial: 'تجاري',
  portfolio_residential: 'سكني',
  portfolio_view: 'عرض التفاصيل',
  portfolio_close: 'إغلاق',

  gallery_title: 'معرض الأعمال',
  gallery_subtitle: 'صور حقيقية من مشاريعنا المنجزة',

  contact_title: 'تواصل معنا',
  contact_subtitle: 'هل أنت مستعد لتحسين راحتك؟ تواصل معنا اليوم',
  contact_name: 'الاسم الكامل',
  contact_email: 'البريد الإلكتروني',
  contact_phone: 'رقم الهاتف',
  contact_message: 'رسالتك',
  contact_send: 'إرسال الرسالة',
  contact_sending: 'جارٍ الإرسال...',
  contact_success: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
  contact_phone_label: 'الهاتف',
  contact_email_label: 'البريد الإلكتروني',
  contact_location_label: 'الموقع',
  contact_location: 'القاهرة، مصر',
  contact_whatsapp: 'تحدث عبر واتساب',
  contact_call: 'اتصل الآن',
  contact_name_error: 'الاسم مطلوب',
  contact_email_error: 'البريد الإلكتروني غير صحيح',
  contact_message_error: 'الرسالة مطلوبة (10 أحرف على الأقل)',

  footer_tagline: 'شريكك الموثوق في تكييف الهواء بالقاهرة. الجودة والموثوقية والراحة — مضمونة.',
  footer_links: 'روابط سريعة',
  footer_contact: 'معلومات التواصل',
  footer_rights: 'جميع الحقوق محفوظة.',

  learn_more: 'اعرف المزيد',
  view_all: 'عرض الكل',
  loading: 'جارٍ التحميل...',
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly language = signal<Language>('ar');
  readonly translations = computed<Translations>(() =>
    this.language() === 'en' ? en : ar
  );
  readonly isRtl = computed(() => this.language() === 'ar');
  readonly isArabic = computed(() => this.language() === 'ar');

  constructor() {
    const saved = localStorage.getItem('hima-lang') as Language | null;
    if (saved && (saved === 'en' || saved === 'ar')) {
      this.language.set(saved);
      this.applyDirection(saved);
    }
  }

  toggle(): void {
    const newLang: Language = this.language() === 'en' ? 'ar' : 'en';
    this.language.set(newLang);
    this.applyDirection(newLang);
    localStorage.setItem('hima-lang', newLang);
  }

  private applyDirection(lang: Language): void {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
  }

  t(key: keyof Translations): string {
    return this.translations()[key];
  }
}
