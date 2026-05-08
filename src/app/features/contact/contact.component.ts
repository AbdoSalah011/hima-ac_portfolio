import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  protected readonly t = inject(TranslationService);
  private readonly fb = inject(FormBuilder);

  readonly isSending = signal(false);
  readonly isSuccess = signal(false);
  readonly hasError = signal(false);

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly contactInfo = [
    {
      icon: 'fas fa-phone',
      labelKey: 'contact_phone_label' as const,
      values: ['01030957153', '01104711824'],
      links: ['tel:+201030957153', 'tel:+201104711824'],
      color: '#0ea5e9',
    },
    {
      icon: 'fas fa-envelope',
      labelKey: 'contact_email_label' as const,
      values: ['ibrahimabdo25@gmail.com'],
      links: ['mailto:ibrahimabdo25@gmail.com'],
      color: '#f59e0b',
    },
    {
      icon: 'fas fa-map-marker-alt',
      labelKey: 'contact_location_label' as const,
      values: ['Cairo, Egypt', 'القاهرة، مصر'],
      links: ['https://maps.google.com/?q=Cairo,Egypt'],
      color: '#ef4444',
    },
  ];

  get nameError(): boolean {
    const c = this.form.get('name');
    return !!(c?.invalid && c?.touched);
  }

  get emailError(): boolean {
    const c = this.form.get('email');
    return !!(c?.invalid && c?.touched);
  }

  get messageError(): boolean {
    const c = this.form.get('message');
    return !!(c?.invalid && c?.touched);
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSending.set(true);
    this.hasError.set(false);

    // Simulate API call — replace with real API
    await new Promise(resolve => setTimeout(resolve, 1800));

    this.isSending.set(false);
    this.isSuccess.set(true);
    this.form.reset();

    setTimeout(() => this.isSuccess.set(false), 5000);
  }
}
