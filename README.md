# ❄️ HIMA AC – Angular 21 Application
### Eng. Ibrahim Abdelhay | Professional HVAC Services – Cairo, Egypt

---

## 📋 Project Overview

A complete Angular 21 standalone application for HIMA AC HVAC services, featuring:
- ✅ Angular 21 with Standalone Components
- ✅ Signals (`signal`, `computed`, `effect`)
- ✅ Angular Router with lazy loading
- ✅ Bilingual Arabic/English with RTL support
- ✅ Dark/Light mode with localStorage persistence
- ✅ Professional Portfolio + Gallery + Lightbox
- ✅ Personal Profile section
- ✅ Reactive contact form with validation
- ✅ WhatsApp integration & click-to-call
- ✅ Scroll reveal animations
- ✅ Tailwind CSS
- ✅ Snowflake animations ❄️

---

## 🚀 Quick Setup

### Prerequisites
```bash
node -v    # Must be >= 18.19
npm -v     # Must be >= 9
ng version # Angular CLI
```

### Step 1: Install Angular CLI 21
```bash
npm install -g @angular/cli@21
```

### Step 2: Create the Angular project
```bash
ng new hima-ac --routing --style=css --standalone
cd hima-ac
```

### Step 3: Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Step 4: Install Font Awesome (optional local)
```bash
npm install @fortawesome/fontawesome-free
```
> Or use CDN link in `index.html` (already included)

### Step 5: Copy all project files
Replace the generated files with the provided project files maintaining the folder structure below.

### Step 6: Run the development server
```bash
ng serve --open
```
Visit: **http://localhost:4200**

### Step 7: Build for Production
```bash
ng build --configuration production
```

---

## 📁 Project Structure

```
hima-ac/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/
│   │   │   │   └── portfolio.model.ts        # Data interfaces
│   │   │   └── services/
│   │   │       ├── translation.service.ts    # Bilingual EN/AR
│   │   │       ├── theme.service.ts          # Dark/Light mode
│   │   │       └── portfolio.service.ts      # Portfolio data
│   │   │
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── navbar/
│   │   │   │   │   ├── navbar.component.ts
│   │   │   │   │   ├── navbar.component.html
│   │   │   │   │   └── navbar.component.css
│   │   │   │   └── footer/
│   │   │   │       ├── footer.component.ts
│   │   │   │       ├── footer.component.html
│   │   │   │       └── footer.component.css
│   │   │   └── directives/
│   │   │       └── reveal.directive.ts       # Scroll animation
│   │   │
│   │   ├── features/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts         # Page shell
│   │   │   │   └── components/
│   │   │   │       ├── hero/                 # Hero section
│   │   │   │       ├── about/                # Profile section
│   │   │   │       └── services-preview/     # Services grid
│   │   │   │
│   │   │   ├── services/
│   │   │   │   ├── services.component.ts
│   │   │   │   ├── services.component.html
│   │   │   │   └── services.component.css
│   │   │   │
│   │   │   ├── portfolio/
│   │   │   │   ├── portfolio.component.ts    # Grid + Modal + Gallery
│   │   │   │   ├── portfolio.component.html
│   │   │   │   └── portfolio.component.css
│   │   │   │
│   │   │   └── contact/
│   │   │       ├── contact.component.ts      # Reactive form
│   │   │       ├── contact.component.html
│   │   │       └── contact.component.css
│   │   │
│   │   ├── app.component.ts                  # Root + snowflakes
│   │   ├── app.config.ts                     # Providers
│   │   └── app.routes.ts                     # Lazy routes
│   │
│   ├── styles.css                            # Global + Tailwind
│   ├── index.html
│   └── main.ts
│
├── tailwind.config.js
├── postcss.config.js
├── angular.json
├── tsconfig.json
└── package.json
```

---

## 🧩 Key Angular 21 Features Used

### Signals
```typescript
// Theme service
readonly theme = signal<Theme>('light');

// Portfolio filter
readonly activeFilter = signal<string>('all');
readonly filteredItems = computed(() =>
  this.portfolioSvc.getFilteredItems(this.activeFilter())
);
```

### New Control Flow (@for, @if)
```html
@for (item of filteredItems(); track item.id) {
  <div class="portfolio-item">{{ item.titleEn }}</div>
}

@if (isSuccess()) {
  <div class="success-banner">Message sent!</div>
}
```

### Standalone Components
```typescript
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  ...
})
```

### Lazy Loaded Routes
```typescript
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component')
      .then(m => m.HomeComponent)
  }
];
```

---

## 🌐 Pages & Routes

| Route        | Component        | Description               |
|--------------|------------------|---------------------------|
| `/`          | HomeComponent    | Hero + About + Services   |
| `/services`  | ServicesComponent| Full services page        |
| `/portfolio` | PortfolioComponent| Grid + Gallery + Lightbox|
| `/contact`   | ContactComponent | Form + Contact info       |

---

## 🎨 Design Tokens (CSS Variables)

```css
/* Light Mode */
--color-primary: #0ea5e9;
--color-bg: #ffffff;
--color-bg-secondary: #f0f9ff;
--color-text: #0c1a2e;
--color-card: #ffffff;

/* Dark Mode (.dark class on html) */
--color-primary: #38bdf8;
--color-bg: #0c1a2e;
--color-bg-secondary: #0f2744;
--color-text: #f0f9ff;
```

---

## 📞 Contact Details

| Type     | Value                     |
|----------|---------------------------|
| Phone 1  | 01030957153               |
| Phone 2  | 01104711824               |
| Email    | ibrahimabdo25@gmail.com   |
| Location | Cairo, Egypt              |
| WhatsApp | wa.me/201030957153        |

---

## 🔧 Customization

### Add Portfolio Items
Edit `src/app/core/services/portfolio.service.ts` → `portfolioItems` array.

### Add Translations
Edit `src/app/core/services/translation.service.ts` → add keys to both `en` and `ar` objects.

### Change Colors
Edit `src/styles.css` → CSS custom properties under `:root` and `.dark`.

### Add Real Contact Form API
In `contact.component.ts` → replace the `setTimeout` in `onSubmit()` with your API call.

---

## 📦 Dependencies

```json
{
  "@angular/core": "^21.0.0",
  "rxjs": "~7.8.0",
  "tailwindcss": "^3.4.0",
  "zone.js": "~0.15.0"
}
```

---

## 🚀 Production Deployment

```bash
# Build
ng build --configuration production

# Output in dist/hima-ac/
# Deploy to: Netlify, Vercel, Firebase Hosting, GitHub Pages
```

### Firebase Hosting (recommended)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

---

*Built with ❤️ for HIMA AC – Professional HVAC Services, Cairo, Egypt*
