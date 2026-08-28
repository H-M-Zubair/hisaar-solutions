# Hisaar Solutions — Marketing Site Build Log

Track every step. Mark `[x]` when the work is actually in the repo and running.

**App path:** `/home/dev-zubair/inventory-system/hisaar-solutions`  
**Dev port:** `3001` (POS already occupies `3000`)  
**Company:** Hisaar Solutions · Lahore Cantt  
**Product:** Omni Ledger (SaaS ERP / POS)

---

## 0. Product analysis (complete)

Source of truth: Omni Ledger grocery demo guide + the live POS frontend + backend industry strategies.

| Fact | Decision for this site |
| --- | --- |
| Company | **Hisaar Solutions** (hisaarsolutions.com) |
| Flagship product | **Omni Ledger** — multi-tenant, industry-skinned POS + shop ERP |
| Industries (real, in code) | Grocery, Pharmacy, Restaurant, Garments, plus General retail |
| What is actually built | Barcode POS, offline queue + sync, udhaar/credit, shifts/cash drawer, stock in/out, invoices/returns/voids, role-locked profit, PWA |
| Industry extras | Pharmacy lots/FEFO/Rx · Restaurant tables/KOT · Garments size×color matrix |
| Plans (locked to demo guide, not old register page) | 30-day full trial → Starter → Pro → Pro+ (roadmap, not sold yet) |
| Honest constraints | Single store per org today. No JazzCash/Stripe inside the app. No FBR. No self-serve signup. |
| Contact | +92 303 0609872 · info@hisaarsolutions.com · Lahore Cantt |
| WhatsApp | `https://wa.me/923030609872` |

**Do not invent:** fake “500+ clients”, fake logos, or features the product does not ship. Social proof uses **true product facts** (4 industry packs, offline-first, owner-only profit, 30-day trial) and **scenario playbooks** instead of fabricated case-study companies.

---

## 1. Design direction (locked)

### Vibe

Dark-mode-first ledger: ink navy canvas, warm paper-white type, one electric teal for brand, one amber for action. Industry pages recolor the teal slot so grocery / pharmacy / restaurant / garments each feel like a different product skin — the same trick the POS already does.

### Font pairing

| Role | Family | Why |
| --- | --- | --- |
| Display | **Bricolage Grotesque** | Slightly irregular, editorial, not another Inter clone |
| Body / UI | **Geist** | Technical, tight numerals, SaaS-grade |

### Color tokens

| Token | Dark | Light | Use |
| --- | --- | --- | --- |
| `--ink` | `#05080F` | `#F4F0E6` | Page canvas |
| `--surface` | `#0C1220` | `#FFFdf8` | Cards, nav |
| `--line` | `#1B2436` | `#E6DFD0` | Hairlines |
| `--paper` | `#F4F0E6` | `#0C1220` | Primary text |
| `--mute` | `#8B93A7` | `#5C6478` | Secondary text |
| `--teal` | `#1EE0B0` | `#0F8F74` | Brand, links, focus |
| `--amber` | `#FF8A3D` | `#E06A1A` | Primary CTAs |
| `--danger` | `#FF5D5D` | `#C43030` | Shortage / expiry |

Industry accents (used on solution pages + the home pin sequence):

| Industry | Accent | Feeling |
| --- | --- | --- |
| Grocery | Amber `#FF8A3D` | Counter warmth, kirana |
| Pharmacy | Teal `#1EE0B0` | Clinical trust |
| Restaurant | Ember `#FF5A2A` | Heat, kitchen, floor |
| Garments | Wine `#C45B8A` + gold `#D4A017` | Fabric, boutique |

### Motion rules

- Loader ≤ 1.5s, skippable after first visit (`localStorage`)
- Framer Motion `whileInView` for section reveals
- One GSAP ScrollTrigger **pinned** industry showcase
- `prefers-reduced-motion`: no pin, no loader, instant opacity
- Primary CTAs: press-scale + DaisyUI-style ripple

---

## 2. Scaffold

- [x] Next.js (App Router) + TypeScript + Tailwind
- [x] Framer Motion, GSAP, Lucide, next-themes, geist
- [x] shadcn/ui primitives (button, input, label, textarea, sheet, accordion)
- [x] DaisyUI plugin (ripple / press utilities only — restyled)
- [x] `BUILD-PROGRESS.md` (this file)

---

## 3. Design system & chrome

- [x] CSS tokens + noise/grid/mesh utilities
- [x] Theme provider (dark default + light toggle)
- [x] Header, footer, magnetic CTA, page transition shell
- [x] Branded loader
- [x] SEO base metadata

---

## 4. Pages

- [x] Home
- [x] Products overview
- [x] Omni Ledger product page
- [x] Solutions overview + grocery / pharmacy / restaurant / garments
- [x] About
- [x] Pricing
- [x] Work / playbooks
- [x] Blog stub
- [x] Contact / book a demo

---

## 5. SEO & a11y

- [x] Per-page Metadata API + Open Graph
- [x] `sitemap.ts` + `robots.ts`
- [x] Semantic landmarks, focus states, contrast
- [x] Reduced-motion fallbacks

---

## Notes while building

- Extra packages were aborted mid-install on the first pass; re-ran successfully: `next@14.2.35`, `eslint-config-next@14.2.35`, Framer Motion, GSAP, Lucide, CVA/clsx/twMerge, next-themes, Radix primitives, DaisyUI 4.12.24, tailwindcss-animate.
- Geist lives as local files in `app/fonts/`. Display is `Bricolage_Grotesque` from `next/font/google`.
- DaisyUI: `themes: false`, `base: false`. `.btn` kept for press/ripple, restyled to Hisaar pills.
- Pricing locked to demo guide: trial Rs 0 / 30d, Starter Rs 2,999, Pro Rs 6,999, Pro+ custom/roadmap.
- Contact form opens WhatsApp — it does not create an account.
- Contact is in primary nav (`/contact` after Journal). Footer desk column also links to the Contact page.
- WhatsApp trial CTAs use native `<a target="_blank" rel="noopener noreferrer">` anchors (not Next `Link`). Internal routes stay as `Link`.
- Industry pages are unique layouts (sticky till / FEFO timeline / takeaway–dine-in split / swatch+matrix), not a shared template with a colour swap.
- Dev: `npm run dev` (script is `next dev -p 3001`).
