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

## End-to-end tests

Start the site with `npm run dev`, then run `npx cypress run` in another
terminal. Cypress checks that the homepage renders a visible heading.
The default base URL is `http://localhost:4321`; for another port, run
`npx cypress run --config baseUrl=http://localhost:4322`.

Pull requests run the build and Cypress tests automatically via GitHub Actions.

