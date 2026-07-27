import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

/**
 * Global metadata defaults applied in the root layout. Individual pages and
 * layouts override these by exporting their own `metadata` / `generateMetadata`.
 *
 * `metadataBase` lets Next resolve relative Open Graph and canonical URLs
 * against the canonical site origin.
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.creator,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

type BuildMetadataInput = {
  title: string;
  description?: string;
  /** Path-relative canonical URL, e.g. "/checklists/hospital-bag". */
  path?: string;
  /** Set true for pages that must not be indexed (e.g. the workspace). */
  noIndex?: boolean;
};

/**
 * Compose per-page metadata on top of the global defaults. Keeps title,
 * canonical, and social tags consistent across every route without repeating
 * the boilerplate. Pages that need more can spread the result and extend it.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
    },
    twitter: {
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
