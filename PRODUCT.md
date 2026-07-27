# Keesa — Product

> This document is the shared source of truth for _what Keesa is_. It is
> deliberately stable. Product direction, workflow, landing page design, and
> brand identity are already decided — this records them, it does not reopen
> them.

## What Keesa is

Keesa is **the planning workspace for expecting parents**. It helps expecting
parents plan the decisions, tasks, and logistics of a pregnancy in one
organized place.

## What Keesa is _not_

Keesa is explicitly **not**:

- a pregnancy tracker
- a registry-only app
- a medical app
- a community / forum
- an AI assistant

Features that would turn Keesa into one of these are out of scope. When in
doubt, this list wins.

## Business model

- Visitors can explore a **personalized plan for free**.
- The paid workspace is **US$99, one-time, per pregnancy**.
- Payment unlocks the ability to **save and manage** that pregnancy workspace.
- **No monthly subscription.**

## Acquisition strategy

**SEO is the primary acquisition engine.** The preferred funnel is:

```
Google search
  → interactive checklist / resource page   (free, public, indexable)
    → sign up to save progress
      → Keesa workspace                      (paid, private)
```

### Public resource types

The public, SEO-facing surface grows through a family of resource types. Each
should feel like a **product experience, not a generic blog post** — they are
interactive tools that happen to rank:

- checklists
- calculators
- templates
- comparison pages
- guides
- quantity pages
- timing pages

These are the top of the funnel. The interactivity (a working checklist, a
real calculator) is what converts a search visitor into a signed-up user who
wants to save their progress.

## How this maps to the codebase

- **Marketing pages** and **SEO resource pages** are public and indexable.
- The **workspace** is private, paid, and lives under `/app` — excluded from
  search indexing.
- Resource **content + SEO metadata** come from Sanity; the **interactive
  experience** is built as reusable React tools.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the technical structure.

## Out of scope (for now)

Do not build these without an explicit decision to do so: authentication,
payments (Stripe), a database (e.g. Supabase), and any AI functionality. The
current foundation deliberately excludes them.
