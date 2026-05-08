import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../core/services/translation.service';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  protected readonly t = inject(TranslationService);

  readonly stats = [
    { icon: 'fas fa-tools', value: '500+', labelKey: 'hero_stat_projects' as const },
    { icon: 'fas fa-smile', value: '450+', labelKey: 'hero_stat_clients' as const },
    { icon: 'fas fa-calendar-alt', value: '10+', labelKey: 'hero_stat_years' as const },
    { icon: 'fas fa-shield-alt', value: '2', labelKey: 'hero_stat_guarantee' as const },
  ];

  animatedValues = signal<number[]>([0, 0, 0, 0]);

  ngOnInit(): void {
    setTimeout(() => this.animateStats(), 500);
  }

  private animateStats(): void {
    const targets = [500, 450, 10, 2];
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    targets.forEach((target, index) => {
      let current = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        current = Math.min(current + increment, target);
        this.animatedValues.update(vals => {
          const copy = [...vals];
          copy[index] = Math.round(current);
          return copy;
        });
        if (current >= target) clearInterval(timer);
      }, interval);
    });
  }
}
