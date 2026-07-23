# XThreadShot — Landing Page

A Next.js (App Router) marketing site for XThreadShot, built with Tailwind CSS v4 and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `app/page.tsx` — the landing page (hero, problem, how-it-works, comparison, features, audience, CTA)
- `app/components/SnapDemo.tsx` — the interactive before/after "Snap" demo in the hero
- `app/globals.css` — design tokens (colors, fonts) and the film-strip/sprocket motif
- `app/layout.tsx` — root layout and page metadata

## Design

Dark "darkroom / contact sheet" direction: film-strip sprocket borders, frame-numbered sections, and an amber "flash" accent, since the product turns a raw post into a printed, share-ready frame. No external font fetch is required — it uses robust system font stacks (serif display, sans body, mono for labels) so it builds without network access.
# Xthreadweb
