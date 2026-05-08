import { Injectable, signal } from '@angular/core';
import { GalleryImage, PortfolioItem } from '../models/portfolio';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly activeFilter = signal<string>('all');

  readonly portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      titleEn: 'Split AC Installation – New Cairo Villa',
      titleAr: 'تركيب تكييف سبليت – فيلا القاهرة الجديدة',
      descriptionEn: 'Complete installation of 4 split AC units (2.25 HP each) with proper piping and electrical connections.',
      descriptionAr: 'تركيب 4 وحدات تكييف سبليت (2.25 حصان لكل وحدة) مع التوصيلات الكهربائية والسباكة.',
      category: 'installation',
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
      location: 'New Cairo',
      year: 2024,
      tags: ['Split AC', 'Residential', '2024']
    },
    {
      id: 2,
      titleEn: 'Central AC System – Office Building',
      titleAr: 'نظام تكييف مركزي – مبنى مكاتب',
      descriptionEn: 'Design and installation of central HVAC system for 5-floor commercial building in Nasr City.',
      descriptionAr: 'تصميم وتركيب نظام تكييف مركزي لمبنى تجاري من 5 طوابق في مدينة نصر.',
      category: 'commercial',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      location: 'Nasr City',
      year: 2024,
      tags: ['Central AC', 'Commercial']
    },
    {
      id: 3,
      titleEn: 'Preventive Maintenance Contract – Hotel',
      titleAr: 'عقد صيانة دورية – فندق',
      descriptionEn: 'Annual preventive maintenance contract for 80-room hotel including 40 AC units.',
      descriptionAr: 'عقد صيانة سنوي لفندق 80 غرفة يشمل 40 وحدة تكييف.',
      category: 'maintenance',
      imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
      location: 'Heliopolis',
      year: 2023,
      tags: ['Maintenance', 'Hotel', 'Commercial']
    },
    {
      id: 4,
      titleEn: 'Residential Villa – Full HVAC System',
      titleAr: 'فيلا سكنية – نظام تكييف كامل',
      descriptionEn: 'Complete HVAC solution for a 400m² villa including 6 split units and ducted system.',
      descriptionAr: 'حل تكييف متكامل لفيلا 400 متر مربع يشمل 6 وحدات سبليت ونظام مجاري.',
      category: 'residential',
      imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80',
      location: 'October City',
      year: 2023,
      tags: ['Residential', 'Villa', 'Full System']
    },
    {
      id: 5,
      titleEn: 'Cassette AC Installation – Restaurant',
      titleAr: 'تركيب تكييف كاسيت – مطعم',
      descriptionEn: 'Installation of 3 ceiling cassette AC units for a large restaurant, capacity 3HP each.',
      descriptionAr: 'تركيب 3 وحدات تكييف كاسيت للسقف في مطعم كبير، سعة 3 حصان لكل وحدة.',
      category: 'commercial',
      imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      location: 'Zamalek',
      year: 2024,
      tags: ['Cassette AC', 'Restaurant', 'Commercial']
    },
    {
      id: 6,
      titleEn: 'Emergency Repair – Compressor Replacement',
      titleAr: 'إصلاح طارئ – تغيير كمبروسر',
      descriptionEn: 'Same-day emergency repair and compressor replacement for residential AC unit.',
      descriptionAr: 'إصلاح طارئ في نفس اليوم وتغيير الكمبروسر لوحدة تكييف سكنية.',
      category: 'maintenance',
      imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80',
      location: 'Helwan',
      year: 2024,
      tags: ['Repair', 'Emergency', 'Residential']
    },
    {
      id: 7,
      titleEn: 'Ducted AC System – Apartment',
      titleAr: 'نظام تكييف مجاري – شقة',
      descriptionEn: 'Hidden ducted air conditioning system installation for 200m² luxury apartment.',
      descriptionAr: 'تركيب نظام تكييف مجاري مخفي لشقة فاخرة مساحتها 200 متر مربع.',
      category: 'residential',
      imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      location: 'Maadi',
      year: 2023,
      tags: ['Ducted', 'Apartment', 'Luxury']
    },
    {
      id: 8,
      titleEn: 'Retail Store AC – Showroom',
      titleAr: 'تكييف متجر تجزئة – معرض',
      descriptionEn: 'Complete AC installation and configuration for large retail showroom, 800m².',
      descriptionAr: 'تركيب وتشغيل تكييف كامل لمعرض تجاري كبير مساحته 800 متر مربع.',
      category: 'commercial',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      location: 'Mohandessin',
      year: 2024,
      tags: ['Retail', 'Showroom', 'Commercial']
    },
    {
      id: 9,
      titleEn: 'Annual Maintenance – Residential Complex',
      titleAr: 'صيانة سنوية – مجمع سكني',
      descriptionEn: 'Annual maintenance contract for residential complex with 25 apartments.',
      descriptionAr: 'عقد صيانة سنوي لمجمع سكني من 25 شقة.',
      category: 'maintenance',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      location: 'Rehab City',
      year: 2023,
      tags: ['Maintenance', 'Residential', 'Contract']
    }
  ];

  readonly galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
      captionEn: 'Split AC Installation',
      captionAr: 'تركيب تكييف سبليت',
      category: 'installation'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      captionEn: 'Commercial HVAC',
      captionAr: 'تكييف تجاري',
      category: 'commercial'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
      captionEn: 'Maintenance Work',
      captionAr: 'أعمال الصيانة',
      category: 'maintenance'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80',
      captionEn: 'Technical Repair',
      captionAr: 'إصلاح تقني',
      category: 'repair'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80',
      captionEn: 'Residential Project',
      captionAr: 'مشروع سكني',
      category: 'residential'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
      captionEn: 'Luxury Apartment',
      captionAr: 'شقة فاخرة',
      category: 'residential'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
      captionEn: 'Restaurant AC',
      captionAr: 'تكييف مطعم',
      category: 'commercial'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      captionEn: 'Residential Complex',
      captionAr: 'مجمع سكني',
      category: 'residential'
    }
  ];

  getFilteredItems(filter: string): PortfolioItem[] {
    if (filter === 'all') return this.portfolioItems;
    return this.portfolioItems.filter(item => item.category === filter);
  }
}
