import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  protected readonly t = inject(TranslationService);

  readonly services = [
    {
      icon: 'fas fa-tools',
      titleKey: 'svc_install_title' as const,
      descKey: 'svc_install_desc' as const,
      gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
      features: [
        'Split & Multi-split AC Systems',
        'Ducted & Cassette AC',
        'Precision Piping & Wiring',
        '2-Year Workmanship Warranty',
      ],
      featuresAr: [
        'أنظمة السبليت والمتعددة',
        'التكييف المجاري والكاسيت',
        'أنابيب وأسلاك بدقة عالية',
        'ضمان عمل لمدة سنتين',
      ]
    },
    {
      icon: 'fas fa-calendar-check',
      titleKey: 'svc_maintain_title' as const,
      descKey: 'svc_maintain_desc' as const,
      gradient: 'linear-gradient(135deg, #22d3ee, #0891b2)',
      features: [
        'Scheduled Inspection & Cleaning',
        'Refrigerant Level Check',
        'Filter & Coil Cleaning',
        'Annual Service Contracts',
      ],
      featuresAr: [
        'الفحص والتنظيف الدوري',
        'فحص مستوى الغاز',
        'تنظيف الفلتر والسربنتين',
        'عقود خدمة سنوية',
      ]
    },
    {
      icon: 'fas fa-wrench',
      titleKey: 'svc_repair_title' as const,
      descKey: 'svc_repair_desc' as const,
      gradient: 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
      features: [
        'All Brands & Models',
        'Compressor Replacement',
        'PCB & Control Repair',
        'Same-Day Emergency Service',
      ],
      featuresAr: [
        'جميع الماركات والموديلات',
        'تغيير الكمبروسر',
        'إصلاح بلاتين التحكم',
        'خدمة طارئة في نفس اليوم',
      ]
    },
    {
      icon: 'fas fa-building',
      titleKey: 'svc_central_title' as const,
      descKey: 'svc_central_desc' as const,
      gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
      features: [
        'Chiller & AHU Systems',
        'VRF/VRV Systems',
        'Duct Design & Installation',
        'Building Automation Integration',
      ],
      featuresAr: [
        'أنظمة الشيلر ووحدات المعالجة',
        'أنظمة VRF/VRV',
        'تصميم وتركيب المجاري',
        'تكامل أتمتة المباني',
      ]
    },
    {
      icon: 'fas fa-leaf',
      titleKey: 'svc_energy_title' as const,
      descKey: 'svc_energy_desc' as const,
      gradient: 'linear-gradient(135deg, #34d399, #059669)',
      features: [
        'Energy Audit & Assessment',
        'Inverter AC Upgrades',
        'Smart Thermostat Setup',
        'Efficiency Reporting',
      ],
      featuresAr: [
        'مراجعة وتقييم الطاقة',
        'ترقية إلى الإنفرتر',
        'ضبط الترموستات الذكي',
        'تقارير الكفاءة',
      ]
    },
    {
      icon: 'fas fa-drafting-compass',
      titleKey: 'svc_consult_title' as const,
      descKey: 'svc_consult_desc' as const,
      gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
      features: [
        'Load Calculation & Sizing',
        'System Selection Advice',
        'Layout & Design Plans',
        'Project Management',
      ],
      featuresAr: [
        'حساب الأحمال والمقاسات',
        'نصائح اختيار النظام',
        'خطط التصميم والتخطيط',
        'إدارة المشاريع',
      ]
    },
  ];
}
