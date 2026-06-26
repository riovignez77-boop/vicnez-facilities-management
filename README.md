# Vicnez Facilities Management — Next.js Site

A 6-page Next.js (App Router) port of the static site: Home, About, Services,
Why Choose Us, Leadership, and Contact — same navy/brass design system, same
content, now as real React components with file-based routing.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/
├── layout.js          — root layout: fonts (next/font/google), Header, Footer
├── globals.css        — full design system (colors, type, components)
├── page.js            — Home               → /
├── about/page.js       — About Us           → /about
├── services/page.js    — Services           → /services
├── why-choose-us/page.js → Why Choose Us    → /why-choose-us
├── leadership/page.js  — Leadership         → /leadership
└── contact/page.js     — Contact Us         → /contact

components/
├── Header.js          — nav + mobile menu + scroll state (client component)
├── Footer.js           — footer + WhatsApp floating button
├── ScrollAnimations.js — scroll-reveal + animated counters (client component)
├── ContactForm.js       — contact form with validation (client component)
├── Cards.js             — ServiceCard, ServiceDetailRow, ValueCard, LeaderCard, CompareRow
├── Icon.js              — shared stroke-icon set
└── Seal.js              — the brass "Inspection Seal" motif

lib/
└── content.js          — all copy: services, value props, leadership, comparison table

public/images/          — logo, favicons, founder photos
```

## Before you launch

**1. A few service images are still branded placeholders.**
Car Park Cleaning, Showroom Cleaning, and A/C Grill Cleaning use a
`placehold.co` placeholder (see `img: null` in `lib/content.js` → falls back
to `ph(...)`) because no good, relevant, freely-licensed stock photo could be
found for those specific niches. Replace with real photos of your own sites
in `lib/content.js`.

**2. Activate the contact form inbox.**
`components/ContactForm.js` sends enquiries through FormSubmit to
`contact@vfmbh.com`. The first real submission triggers a one-time activation
email. Open that email and confirm the form; later enquiries will then be
delivered normally.

**3. Swap the map embed.**
`app/contact/page.js` uses a generic "Manama, Bahrain" map query — replace
with your exact address once confirmed.

**4. Hero/About/Service photos** are real, freely-licensed Unsplash photos
(Unsplash License — free for commercial use, no attribution required),
defined in `lib/content.js` via the `real()` helper. Swap for your own
branded photography whenever you have it — that's always the highest-impact
change for a premium feel.

## Customizing

- Colors, type and spacing are CSS variables at the top of `app/globals.css`.
- Fonts are loaded via `next/font/google` in `app/layout.js` (Fraunces,
  Inter, JetBrains Mono) — self-hosted automatically by Next.js, no external
  font requests at runtime.
- All copy (services, leadership bios, comparison table, value props) lives
  in `lib/content.js` — edit once, it updates everywhere it's used.
- Remote image domains (Unsplash, placehold.co) are allow-listed in
  `next.config.mjs` under `images.remotePatterns`. If you swap to `next/image`
  for any `<img>` tag, add any new external domains there too.
