# Keesa

The planning workspace for expecting parents.

Keesa is a real, SEO-led web product. Visitors explore a personalized plan for
free; the paid workspace is a **US$99 one-time** unlock per pregnancy (no
subscription). See [PRODUCT.md](./PRODUCT.md) for the full product definition
and [ARCHITECTURE.md](./ARCHITECTURE.md) for how the codebase is organized and
why.

## Tech stack

- **Next.js** (App Router) + **React** — `next@16`, `react@19`
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first config via `@theme` in `globals.css`)
- **Sanity** — headless CMS for SEO resource content
- **ESLint** + **Prettier**
- **Vercel** for hosting, **GitHub** for source

## Getting started

Requires Node 20+ (developed on Node 22).

```bash
# 1. Install dependencies
npm install

# 2. Create your local env file and fill in values
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                 | What it does                      |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Start the local dev server        |
| `npm run build`        | Production build                  |
| `npm run start`        | Serve the production build        |
| `npm run lint`         | ESLint                            |
| `npm run lint:fix`     | ESLint with autofix               |
| `npm run typecheck`    | `tsc --noEmit` type check         |
| `npm run format`       | Format the repo with Prettier     |
| `npm run format:check` | Verify formatting without writing |

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values. `.env.local` is
gitignored. On Vercel, set the same variables under **Project Settings →
Environment Variables**.

| Variable                         | Public? | Purpose                                    |
| -------------------------------- | ------- | ------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`           | yes     | Canonical origin for metadata, sitemap, OG |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`  | yes     | Sanity project id                          |
| `NEXT_PUBLIC_SANITY_DATASET`     | yes     | Sanity dataset (e.g. `production`)         |
| `NEXT_PUBLIC_SANITY_API_VERSION` | yes     | Pinned Sanity API date                     |
| `SANITY_API_READ_TOKEN`          | **no**  | Server-only token for drafts/preview       |

`SANITY_API_READ_TOKEN` is server-only. It is read exclusively in
`src/lib/sanity/client.ts`, which imports `server-only` so any accidental
client import fails the build.

## Deployment

Deploys to **Vercel** with zero extra config — Vercel detects Next.js
automatically, so there is no `vercel.json`. Push to the connected GitHub
repository and set the environment variables in the Vercel project.

## Project structure

See [ARCHITECTURE.md](./ARCHITECTURE.md). In short: App Router route groups
separate four surfaces — marketing, SEO resources, interactive tools, and the
future authenticated workspace under `/app`.
