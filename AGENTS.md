# CODEX.md

This file helps Codex agents quickly understand the product and codebase.

## Product snapshot

- Project: marketing site for private taxi service in Crimea (`krimea-taxi.ru`)
- Goal: present services, pricing, trust blocks, contacts, and legal pages
- Format: mostly single-page landing + 2 legal pages
- Language/context: Russian market, local route pricing

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript (strict mode)
- Tailwind CSS
- No backend, no CMS, no API layer

## Runbook

```bash
npm run dev
npm run local
npm run build
npm run lint
npm run typecheck
```

No test runner is configured.

## Where content lives

Primary source of truth is `data/`:

- `data/site.ts`: main marketing content (`siteMeta`, contacts, navigation, hero, services, cars, advantages, how-to-order, trip options)
- `data/prices.ts`: pricing table
- `data/faq.ts`: FAQ
- `data/testimonials.ts`: testimonials
- `data/legal.ts`: legal text (policy/agreement)

If task is about copy, contact info, anchors, or business details, start in `data/` first.

## Page map

- `app/page.tsx`: main landing sections in order:
  Header -> Hero -> Services -> Cars -> Pricing -> TripOptions -> HowToOrder -> Testimonials -> Faq -> Contacts -> Footer
- `app/policy/page.tsx`: privacy policy page
- `app/agreement/page.tsx`: user agreement page
- `app/layout.tsx`: global layout + metadata (including OpenGraph)

## Components and navigation

- Section components are in `components/`
- Navigation is anchor-based and tied to IDs from `data/site.ts` (`navigation`)
- When changing section IDs or nav anchors, update both data and section markup consistently

## Styling system

- Tailwind tokens defined in `tailwind.config.ts`
- Core palette: `sand`, `slate` (`#14202b`), `amber` (`#d78d34`), `mist`
- Custom shadow: `shadow-soft`
- Fonts configured in `app/globals.css` (`Avenir Next`, `Trebuchet MS`, `Segoe UI`)
- Some warm card colors use raw hex values (`#f7e9d3`, `#f0ddc2`, `#c8af91`)

## Media and assets

- Store images in `public/images/`
- Placeholder image is `public/images/i.jpeg`
- It is referenced via `siteMeta.placeholderImage` and respects `NEXT_PUBLIC_BASE_PATH`

## Important context for future agents

- This repo includes migration/audit artifacts in `stage1/` (reference only, not runtime)
- `@/*` path alias points to project root
- CI/CD is expected through `.github/workflows/nextjs.yml`

## Safe change workflow (recommended)

1. Identify requested business/content change.
2. Update `data/*` first, then adjust components only if structure must change.
3. Run `npm run typecheck` and `npm run lint`.
4. For metadata/SEO tasks, verify `app/layout.tsx`.
5. For legal text tasks, edit `data/legal.ts` and validate `app/policy/page.tsx` / `app/agreement/page.tsx`.

## Common pitfalls

- Editing component text directly instead of updating `data/*`
- Breaking anchor navigation by mismatched section IDs
- Forgetting path-prefix behavior when working with image URLs
- Introducing design drift outside existing Tailwind/theme patterns
