import { Component, inject, computed, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from './core/services/theme.service';
import { TranslationService } from './core/services/translation.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, FooterComponent],
  template: `
    <div [class]="appClass()">
      <!-- Snowflakes -->
      <div class="snowflakes-container" aria-hidden="true">
        @for (flake of snowflakes; track flake.id) {
          <span
            class="snowflake"
            [style.left]="flake.left"
            [style.animation-duration]="flake.duration"
            [style.animation-delay]="flake.delay"
            [style.font-size]="flake.size"
            [style.opacity]="flake.opacity"
          >❄</span>
        }
      </div>

      <app-navbar></app-navbar>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>

      <!-- WhatsApp Float Button -->
      <a
        href="https://wa.me/201030957153"
        target="_blank"
        rel="noopener noreferrer"
        class="whatsapp-float"
        [title]="t.t('contact_whatsapp')"
        aria-label="Chat on WhatsApp"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .app-wrapper {
      min-height: 100vh;
      background: var(--color-bg);
      color: var(--color-text);
      transition: background 0.3s ease, color 0.3s ease;
      position: relative;
      overflow-x: hidden;
    }
    .snowflakes-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    }
    main {
      position: relative;
      z-index: 1;
    }
  `]
})
export class AppComponent implements OnInit {
  protected readonly theme = inject(ThemeService);
  protected readonly t = inject(TranslationService);

  snowflakes: Array<{
    id: number;
    left: string;
    duration: string;
    delay: string;
    size: string;
    opacity: string;
  }> = [];

  protected appClass = computed(() => {
    const classes = ['app-wrapper'];
    if (this.theme.theme() === 'dark') classes.push('dark');
    return classes.join(' ');
  });

  ngOnInit(): void {
    this.generateSnowflakes();
  }

  private generateSnowflakes(): void {
    const count = 12;
    for (let i = 0; i < count; i++) {
      this.snowflakes.push({
        id: i,
        left: `${Math.random() * 100}%`,
        duration: `${6 + Math.random() * 8}s`,
        delay: `${Math.random() * 10}s`,
        size: `${0.6 + Math.random() * 0.8}rem`,
        opacity: `${0.2 + Math.random() * 0.3}`
      });
    }
  }
}
