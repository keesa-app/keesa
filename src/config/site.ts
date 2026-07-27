/**
 * Site-wide configuration — the single source of truth for brand-level
 * constants used across metadata, SEO, and navigation.
 *
 * Keep this free of secrets. Anything sensitive belongs in environment
 * variables (see `src/lib/sanity/env.ts`).
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "Keesa",
  /** Short tagline used as the default title and in social cards. */
  tagline: "The planning workspace for expecting parents",
  /** Default meta description. Kept generic; pages should override. */
  description:
    "Keesa is the planning workspace for expecting parents. Explore a personalized plan for free, then unlock your workspace to save and manage everything in one place.",
  /** Canonical, absolute origin with no trailing slash. */
  url: siteUrl.replace(/\/$/, ""),
  /** Used for social sharing attribution; update when handles exist. */
  creator: "Keesa",
} as const;

export type SiteConfig = typeof siteConfig;
