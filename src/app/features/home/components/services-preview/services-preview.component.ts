import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../../core/services/translation.service';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './services-preview.component.html',
  styleUrls: ['./services-preview.component.css']
})
export class ServicesPreviewComponent {
  protected readonly t = inject(TranslationService);

  readonly services = [
    {
      icon: 'fas fa-tools',
      titleKey: 'svc_install_title' as const,
      descKey: 'svc_install_desc' as const,
      color: '#0ea5e9',
      gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
    },
    {
      icon: 'fas fa-calendar-check',
      titleKey: 'svc_maintain_title' as const,
      descKey: 'svc_maintain_desc' as const,
      color: '#22d3ee',
      gradient: 'linear-gradient(135deg, #22d3ee, #0891b2)',
    },
    {
      icon: 'fas fa-wrench',
      titleKey: 'svc_repair_title' as const,
      descKey: 'svc_repair_desc' as const,
      color: '#38bdf8',
      gradient: 'linear-gradient(135deg, #38bdf8, #0ea5e9)',
    },
    {
      icon: 'fas fa-building',
      titleKey: 'svc_central_title' as const,
      descKey: 'svc_central_desc' as const,
      color: '#60a5fa',
      gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
    },
    {
      icon: 'fas fa-leaf',
      titleKey: 'svc_energy_title' as const,
      descKey: 'svc_energy_desc' as const,
      color: '#34d399',
      gradient: 'linear-gradient(135deg, #34d399, #059669)',
    },
    {
      icon: 'fas fa-drafting-compass',
      titleKey: 'svc_consult_title' as const,
      descKey: 'svc_consult_desc' as const,
      color: '#a78bfa',
      gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
    },
  ];
}
