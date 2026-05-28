# Maruthi Fashions — Premium Luxury Prototype

A frontend-only React prototype for a men's luxury fashion brand, styled in a dark elegant aesthetic with gold accents, glassmorphism, and cinematic motion.

## Design System

- **Palette**: Pure black `#0A0A0A`, charcoal `#141414` / `#1C1C1C`, off-white `#F5F1EA`, gold accent `#C9A96A` (with a softer `#E5C77B` highlight)
- **Typography**: Display serif (Cormorant Garamond / Playfair) for headings, clean sans (Inter / Jost) for body, small-caps tracking for labels
- **Surfaces**: Glassmorphism cards (backdrop blur + 1px gold-tinted border), soft elevated shadows, rounded-2xl
- **Motion**: Framer Motion — fade/slide on scroll reveal, image hover zoom, magnetic CTA hover, page transitions, elegant initial loader

## Pages & Routes

- `/` Home
- `/shop` Shop (with category filter chips)
- `/about` About Brand
- `/contact` Contact

## Homepage Sections (in order)

1. Cinematic fullscreen hero — male model image, headline "Maruthi Men's Fashion", tagline "Style That Defines You", CTAs "Explore Collection" + "Shop Now", subtle scroll-cue
2. Premium Categories — 6 tiles: Oversized Tees, Premium Shirts, Denim, Hoodies, Ethnic, Accessories
3. Trending Collection — horizontal product carousel
4. New Arrivals — product grid (8 items)
5. Fashion Lookbook — editorial split-image collage with captions
6. Customer Reviews — testimonial cards with star ratings
7. Instagram Fashion Gallery — 6–8 image masonry grid with IG hover overlay
8. Newsletter — centered glass card with email capture
9. Footer — brand mark, link columns, social icons, copyright

## Global Components

- **Navbar**: transparent over hero, switches to glass-blur sticky on scroll; logo, animated underline nav links, search icon (opens overlay), wishlist icon, cart icon with badge, mobile drawer
- **Product card**: large image, hover zoom + quick-action reveal, discount badge, price + strikethrough MRP, wishlist heart, "Add to Cart" pill
- **Floating WhatsApp button**: bottom-right, pulse animation
- **Page loader**: centered gold monogram with shimmer, exits on mount
- **Page transitions**: Framer Motion AnimatePresence fade/slide between routes

## Shop Page

- Hero banner strip
- Sticky filter bar (category chips, sort dropdown)
- Responsive product grid (2 cols mobile → 4 cols desktop)
- Mock data only (~24 products)

## About Page

- Editorial hero with brand statement
- "Our Story" two-column text + image
- Craft / Materials / Vision value trio
- Atelier image strip

## Contact Page

- Split layout: contact form (glass card) + brand info / map placeholder / socials
- Form fields: name, email, subject, message (no backend — local validation + success toast)

## Technical Details

- **Stack**: Vite + React + TypeScript, Tailwind CSS, Framer Motion, React Router, shadcn/ui primitives (Button, Input, Sheet for mobile nav, Toast)
- **Tokens**: extend `tailwind.config.ts` with brand colors (`bg-noir`, `bg-charcoal`, `text-ivory`, `text-gold`), serif/sans font families, custom box-shadow `shadow-luxe`
- **Fonts**: Google Fonts via index.html (Cormorant Garamond + Inter)
- **Images**: generate hero + lookbook + category + product placeholders with imagegen (premium fashion editorial style); store in `src/assets/`
- **Data**: `src/data/products.ts`, `src/data/categories.ts`, `src/data/reviews.ts` — typed mock arrays
- **State**: lightweight `CartContext` + `WishlistContext` (in-memory, no persistence) so badges and toasts feel real
- **Responsiveness**: mobile-first; hero scales, grids collapse, nav becomes slide-in drawer
- **No backend** — purely a visual prototype

## File Structure (new)

```text
src/
  components/
    layout/ Navbar.tsx  Footer.tsx  PageTransition.tsx  Loader.tsx  WhatsAppFab.tsx
    home/   Hero.tsx  Categories.tsx  Trending.tsx  NewArrivals.tsx
            Lookbook.tsx  Reviews.tsx  InstagramGrid.tsx  Newsletter.tsx
    shop/   ProductCard.tsx  FilterBar.tsx  ProductGrid.tsx
    ui/     (shadcn primitives)
  pages/    Home.tsx  Shop.tsx  About.tsx  Contact.tsx  NotFound.tsx
  context/  CartContext.tsx  WishlistContext.tsx
  data/     products.ts  categories.ts  reviews.ts  lookbook.ts
  assets/   hero.jpg, category-*.jpg, product-*.jpg, lookbook-*.jpg, ig-*.jpg
  index.css  (luxe tokens)
  App.tsx    (routes + providers + AnimatePresence)
```

## Out of Scope

- Real checkout, auth, payments, CMS, real Instagram API — prototype only
