# PostHog post-wizard report

The wizard has completed a PostHog analytics integration for the Energy-i marketing website (static Astro SSG). A reusable `src/components/posthog.astro` snippet component was created and embedded in the root `BaseLayout.astro` layout so every page is covered. Event tracking scripts were added to the home page and the Header and Footer components to capture the key conversion signals for this site.

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `join_pilot_clicked` | User clicks a Join Pilot CTA button anywhere on the page. | `src/pages/index.astro` |
| `book_demo_clicked` | User clicks a Book a Demo button to open their email client. | `src/pages/index.astro` |
| `signup_clicked` | User clicks the Sign Up button in the header to go to the app. | `src/components/Header.astro` |
| `pilot_section_viewed` | User scrolls the pilot program section into view — top of the conversion funnel. | `src/pages/index.astro` |
| `footer_email_clicked` | User clicks the contact email link in the footer. | `src/components/Footer.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard** — [Analytics basics (wizard)](https://eu.posthog.com/project/234498/dashboard/855525)
- **Insight** — [Pilot funnel: section viewed → join pilot (wizard)](https://eu.posthog.com/project/234498/insights/lqUe06LQ)
- **Insight** — [CTA clicks over time (wizard)](https://eu.posthog.com/project/234498/insights/4xd7ItAe)
- **Insight** — [Join Pilot clicks by location (wizard)](https://eu.posthog.com/project/234498/insights/uwmtuTRe)
- **Insight** — [Pilot section views (wizard)](https://eu.posthog.com/project/234498/insights/HwtLl6xs)
- **Insight** — [Footer email clicks (wizard)](https://eu.posthog.com/project/234498/insights/MimpK9sL)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` to `.env.example` and any bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
