import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesPreviewComponent } from './components/services-preview/services-preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, ServicesPreviewComponent],
  template: `
    <app-hero />
    <app-about />
    <app-services-preview />
  `
})
export class HomeComponent {}
