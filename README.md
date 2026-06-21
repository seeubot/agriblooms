# AgriBlooms Website — Phase 1 MVP

A single-page React site (Vite) covering the Phase 1 scope from the PRD: Home,
About, Services (6), How We Work, Modern Agriculture, and Contact.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/`.

## Deploy: GitHub + Vercel

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "AgriBlooms Phase 1 MVP"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. In [Vercel](https://vercel.com), click **Add New → Project**, import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` (Vercel detects these automatically).
4. Deploy. Every push to `main` will redeploy automatically.

## Before you launch — confirm these (flagged in the PRD as open questions)

- **Logo**: the leaf icon used as the nav/footer mark (`src/components/LeafMark.jsx`) is a placeholder graphic device, not your official vector logo. Swap it for the real AI/SVG file.
- **Hero & section imagery**: `src/components/HeroIllustration.jsx` is an original illustration built in the brand palette, used as a stand-in since no real project photography or AI-generated images were available yet. Replace with real photos or generated imagery when ready — drop files in `src/assets/` and swap the `<HeroIllustration />` usage in `Hero.jsx` for an `<img>`.
- **Phone numbers**: `src/data/content.js` — the second number (`799550828`) is one digit short of a standard 10-digit Indian mobile number. Confirm the correct number.
- **Email & address**: placeholder values in `src/data/content.js` — confirm the real inbox and street address.
- **Social handles**: three handles are listed in the brochure without confirmed platforms (`@vragri_blooms`, `@VRagriblooms`, `@Agriblooms25`). They're currently mapped to Instagram/Facebook/YouTube as a guess — confirm and correct in `src/data/content.js`.
- **Contact form backend**: the form in `Contact.jsx` currently only confirms locally on submit — it isn't wired to send anywhere yet. Connect it to a form service (Formspree, Getform) or a serverless function, then point `handleSubmit` at it.
- **Google Maps embed**: `Contact.jsx` has a placeholder map block — replace with a real embedded map once the address is confirmed.

## Structure

```
src/
  components/   one file + one CSS file per section
  data/         content.js — all copy and brand facts in one place
  App.jsx       assembles sections in page order
  index.css     design tokens (colors, type, spacing) + shared utility classes
```

## Phase 2 (not built yet, per PRD)

Plant Collection catalog, Gallery/Projects, newsletter capture — see PRD §3.10.
