# Energy-i Website

The Energy-i marketing site — an [Astro](https://astro.build/) static site with React islands, Tailwind CSS v4, and shadcn UI primitives shared with the [`my`](../my) web app.

## Stack

- [Astro](https://astro.build/) 5
- [React](https://react.dev/) 19 (for interactive UI primitives)
- [Tailwind CSS](https://tailwindcss.com/) 4 via `@tailwindcss/vite`
- [shadcn/ui](https://ui.shadcn.com/) components (`Button`, `Badge`, `Card`) — kept in sync with the `my` app
- [lucide-react](https://lucide.dev/) icons
- Font: Montserrat (loaded from Google Fonts)

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

