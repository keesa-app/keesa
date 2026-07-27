# Keesa — Architecture

How the codebase is organized and the reasoning behind the major decisions.
Read [PRODUCT.md](./PRODUCT.md) first for _what_ we are building; this is
_how_.

## Guiding principles

1. **SEO-led.** The public surface is the acquisition engine, so URL
   structure, metadata, and structured data are first-class concerns.
2. **Surface isolation.** Marketing, SEO resources, interactive tools, and the
   authenticated workspace are distinct concerns that share one deployment.
3. **Reserve structure, don't over-build.** We create files and directories
   only when they hold real, tracked code — no empty folders for appearance,
   no speculative abstractions.

## Tech stack

| Concern     | Choice                               |
| ----------- | ------------------------------------ |
| Framework   | Next.js 16, App Router               |
| Language    | TypeScript (strict)                  |
| Styling     | Tailwind CSS v4 (CSS-first `@theme`) |
| CMS         | Sanity (`@sanity/client`)            |
| Lint/format | ESLint (flat config) + Prettier      |
| Hosting     | Vercel                               |
| Source      | GitHub (`keesa-app/keesa`)           |

## Route groups: four surfaces, one app

We use App Router **route groups** to keep the four surfaces isolated while
sharing a single Next.js deployment. Route groups (`(name)`) organize code and
allow per-surface layouts **without adding a URL segment**.

```
src/app/
├── layout.tsx              # Root layout: global metadata + <html>/<body>
├── globals.css             # Tailwind v4 entry + design tokens
├── robots.ts               # /robots.txt  (allows public, disallows /app, /api)
├── sitemap.ts              # /sitemap.xml
│
├── (marketing)/            # Public, indexable marketing pages
│   ├── layout.tsx          #   shared marketing chrome (later)
│   └── page.tsx            #   "/" — placeholder until the landing page is built
│
├── (resources)/            # Public, indexable SEO resource pages
│   └── layout.tsx          #   resource chrome + resource-level structured data
│
└── (product)/              # Private, authenticated workspace
    └── app/
        └── layout.tsx      #   reserves the real /app URL space (noindex)
```

### Why the workspace is `(product)/app/`, not `(app)/`

A route group named `(app)` would **not** create an `/app` URL segment. The
workspace needs real URLs — `/app`, `/app/plan`, `/app/decisions`,
`/app/settings` — so it lives in a `(product)` group with a real `app`
segment nested inside. This keeps the code grouped _and_ produces the intended
URLs.

### SEO resource URLs

Resource pages will live at **keyword-rich, top-level URLs grouped by type**,
so each type accrues its own topical authority:

```
/checklists/[slug]     /calculators/[slug]     /guides/[slug]
/templates/[slug]      /comparisons/[slug]      /timing/[slug]
/quantities/[slug]     ...
```

These type folders live under `(resources)/` and are created **when the first
page of each type ships** — not before. The route group is reserved now; the
folders follow the content.

## Directories outside `app/`

Created lazily, as real files need them (this is why some are not present
yet):

```
src/
├── app/                    # (above)
├── components/             # created per surface as UI is built:
│                           #   ui/ · marketing/ · resources/ · tools/
│                           #   tools/ = the interactive engines (checklists,
│                           #   calculators) that make resources feel like
│                           #   product experiences, not blog posts
├── config/
│   └── site.ts             # single source of truth for brand-level constants
└── lib/
    ├── sanity/
    │   ├── env.ts          # public Sanity config + isSanityConfigured guard
    │   └── client.ts       # server-only client (imports `server-only`)
    └── seo/
        ├── metadata.ts     # defaultMetadata + buildMetadata() helper
        └── structured-data.ts  # JSON-LD helpers (Organization today)
```

## SEO foundation

- **Global metadata** is defined once in `src/lib/seo/metadata.ts`
  (`defaultMetadata`) and applied in the root layout. It sets `metadataBase`,
  a title template (`%s · Keesa`), Open Graph, Twitter, and robots defaults.
- **Per-page metadata** is composed with `buildMetadata()` so title,
  canonical, and social tags stay consistent without boilerplate.
- **`robots.ts`** allows the public surface and disallows `/app` and `/api`.
- **`sitemap.ts`** currently lists the homepage; it will enumerate published
  resource slugs (querying Sanity) as content ships, splitting via
  `generateSitemaps` if any list nears Google's 50k-URL limit.
- **Structured data** helpers live in `src/lib/seo/structured-data.ts`; add
  Breadcrumb / FAQPage / HowTo schemas alongside Organization as needed.

## Content vs. interactivity (Sanity boundary)

Sanity owns resource **content and SEO metadata**. The **interactive
experience** is React in `components/tools/`. A resource page composes the two:
CMS content + a tool. This separation is what lets resources be genuine product
experiences rather than static articles.

The Sanity client is **server-only**: `src/lib/sanity/client.ts` imports
`server-only`, so `SANITY_API_READ_TOKEN` can never reach the browser. Public
config (project id, dataset, api version) uses `NEXT_PUBLIC_*` and is safe on
the client.

## Environment & deployment

- Env vars are documented in `.env.example`; copy to `.env.local` for local
  dev. See the table in [README.md](./README.md).
- **Vercel** auto-detects Next.js — there is intentionally **no `vercel.json`**
  (none is needed until a real non-default setting appears).

## Deliberately excluded (for now)

Authentication, Stripe, Supabase/any database, and AI functionality are out of
scope for the foundation. The `(product)/app` group reserves the space for the
future workspace but implements none of it.
