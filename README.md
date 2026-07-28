# Energy-i Website

The Energy-i marketing site — an [Astro](https://astro.build/) static site with React islands, Tailwind CSS v4, and shadcn UI primitives shared with the [`my`](../my) web app.

## Stack

- [Astro](https://astro.build/) 5
- [React](https://react.dev/) 19 (for interactive UI primitives)
- [Tailwind CSS](https://tailwindcss.com/) 4 via `@tailwindcss/vite`
- [shadcn/ui](https://ui.shadcn.com/) components (`Button`, `Badge`, `Card`) — kept in sync with the `my` app
- [lucide-react](https://lucide.dev/) icons
- Font: [Montserrat Variable](https://fontsource.org/fonts/montserrat) via `@fontsource-variable/montserrat`
- [PostHog](https://posthog.com/) analytics for conversion tracking

## Project structure

```
public/                 Static assets (logo, favicon, images)
src/
├── components/
│   ├── Header.astro    Top navigation
│   ├── Footer.astro    Site footer
│   └── ui/             Shared shadcn primitives (button, badge, card)
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   └── utils.ts        `cn()` helper
├── pages/
│   └── index.astro     Homepage (all sections inlined here)
└── styles/
    └── globals.css     Tailwind entry + design tokens
```

Page-specific copy and arrays live inline in the page/component that consumes them. There is no central content module.

## Analytics

PostHog analytics is integrated via `src/components/posthog.astro` included in the base layout. This tracks key conversion signals:

- `pilot_section_viewed` — Pilot program section scrolls into view
- `join_pilot_clicked` — Join Pilot CTA button clicked
- `book_demo_clicked` — Book a Demo CTA clicked
- `signup_clicked` — Sign Up header button clicked
- `footer_email_clicked` — Contact email link in footer clicked

Environment variables required: `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST`.

## UI components

`src/components/ui/*` is intentionally kept identical to the same files in the [`my`](../my/src/components/ui) app. Do not add site-specific variants here — style differences should be handled at the call site via `className`. When the `my` app updates a primitive, mirror the change here.

## Commands

| Command             | Action                                     |
| :------------------ | :----------------------------------------- |
| `npm install`       | Install dependencies                       |
| `npm run dev`       | Start the local dev server at `:4321`      |
| `npm run build`     | Type-check and build the site to `./dist/` |
| `npm run preview`   | Preview the production build locally       |
| `npm run astro ...` | Run Astro CLI commands                     |

