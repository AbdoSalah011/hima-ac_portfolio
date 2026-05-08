import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../core/services/translation.service';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  protected readonly t = inject(TranslationService);

  readonly skills = [
    { key: 'about_skill_install' as const, icon: 'fas fa-tools', level: 98 },
    { key: 'about_skill_maintain' as const, icon: 'fas fa-calendar-check', level: 95 },
    { key: 'about_skill_repair' as const, icon: 'fas fa-wrench', level: 97 },
    { key: 'about_skill_design' as const, icon: 'fas fa-drafting-compass', level: 88 },
    { key: 'about_skill_energy' as const, icon: 'fas fa-leaf', level: 85 },
    { key: 'about_skill_central' as const, icon: 'fas fa-building', level: 90 },
  ];

  readonly certifications = [
    { icon: 'fas fa-certificate', label: 'HVAC Certified' },
    { icon: 'fas fa-shield-alt', label: 'Licensed Technician' },
    { icon: 'fas fa-award', label: 'Quality Assured' },
    { icon: 'fas fa-star', label: '5-Star Rated' },
  ];
}
