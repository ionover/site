# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Next.js)
npm run local        # Auto-install deps if missing, then start dev server
npm run build        # Production build
npm run lint         # ESLint on .js/.jsx/.ts/.tsx
npm run typecheck    # TypeScript type check without emitting
```

No test runner is configured in this project.

## Architecture

This is a **Next.js 15 / React 19** marketing site for a private taxi service in Crimea (`krimea-taxi.ru`). It uses the App Router, TypeScript (strict), and Tailwind CSS.

### Data layer (`data/`)

All site content is centralized in TypeScript files — no CMS, no API calls:

- `data/site.ts` — primary content: `siteMeta`, `contacts`, `navigation`, `heroContent`, `services`, `advantages`, `tripOptions`, `carsSection`. This is the main file to edit for copy/contact changes.
- `data/prices.ts` — route pricing table
- `data/faq.ts` — FAQ items
- `data/testimonials.ts` — customer testimonials
- `data/legal.ts` — legal page content (policy, agreement)

### Page structure (`app/`)

- `app/page.tsx` — single-page layout composing Header + sections (Hero, Services, Pricing, Contacts) + Footer
- `app/policy/page.tsx` and `app/agreement/page.tsx` — standalone legal pages
- `app/layout.tsx` — root layout with metadata (OpenGraph, title template)

### Components (`components/`)

Section components map 1-to-1 to `data/` entries. Each section has an `id` matching the navigation anchors defined in `data/site.ts` (`navigation` array). The page uses anchor-based in-page navigation with `scroll-behavior: smooth`.

### Styling

Tailwind with custom theme tokens defined in `tailwind.config.ts`:
- Colors: `sand`, `slate` (`#14202b`), `amber` (`#d78d34`), `mist`
- Shadow: `shadow-soft`
- Font: "Avenir Next" / "Trebuchet MS" / "Segoe UI" (set in `globals.css`, not Tailwind)

The `@/*` alias resolves to the project root.

### Images

Images go in `public/images/`. The placeholder image `public/images/i.jpeg` is referenced via `siteMeta.placeholderImage`, which respects `NEXT_PUBLIC_BASE_PATH` for deployment path prefixes.

### Deployment

A GitHub Actions workflow at `.github/workflows/nextjs.yml` handles CI/CD.

### Content migration context (`stage1/`)

`stage1/` contains the original site audit artifacts (HTML source, content inventory JSON, media manifest). These are reference documents for ongoing content migration — not part of the build.