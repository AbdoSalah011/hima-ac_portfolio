import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { PortfolioService } from '../../core/services/portfolio.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PortfolioItem } from '../../core/models/portfolio';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  protected readonly t = inject(TranslationService);
  protected readonly portfolioSvc = inject(PortfolioService);

  readonly activeFilter = signal<string>('all');
  readonly selectedItem = signal<PortfolioItem | null>(null);
  readonly lightboxImage = signal<string | null>(null);

  readonly filters = [
    { key: 'all', labelKey: 'portfolio_all' as const },
    { key: 'installation', labelKey: 'portfolio_install' as const },
    { key: 'maintenance', labelKey: 'portfolio_maintain' as const },
    { key: 'commercial', labelKey: 'portfolio_commercial' as const },
    { key: 'residential', labelKey: 'portfolio_residential' as const },
  ];

  readonly filteredItems = computed(() =>
    this.portfolioSvc.getFilteredItems(this.activeFilter())
  );

  setFilter(key: string): void {
    this.activeFilter.set(key);
  }

  openItem(item: PortfolioItem): void {
    this.selectedItem.set(item);
    document.body.style.overflow = 'hidden';
  }

  closeItem(): void {
    this.selectedItem.set(null);
    document.body.style.overflow = '';
  }

  openLightbox(url: string): void {
    this.lightboxImage.set(url);
  }

  closeLightbox(): void {
    this.lightboxImage.set(null);
  }

  getTitle(item: PortfolioItem): string {
    return this.t.isArabic() ? item.titleAr : item.titleEn;
  }

  getDesc(item: PortfolioItem): string {
    return this.t.isArabic() ? item.descriptionAr : item.descriptionEn;
  }

  getCategoryLabel(cat: string): string {
    const map: Record<string, string> = {
      installation: this.t.isArabic() ? 'تركيب' : 'Installation',
      maintenance: this.t.isArabic() ? 'صيانة' : 'Maintenance',
      commercial: this.t.isArabic() ? 'تجاري' : 'Commercial',
      residential: this.t.isArabic() ? 'سكني' : 'Residential',
    };
    return map[cat] || cat;
  }

  getCategoryColor(cat: string): string {
    const map: Record<string, string> = {
      installation: '#0ea5e9',
      maintenance: '#22d3ee',
      commercial: '#60a5fa',
      residential: '#34d399',
    };
    return map[cat] || '#0ea5e9';
  }
}
