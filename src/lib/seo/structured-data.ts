import { siteConfig } from "@/config/site";

/**
 * JSON-LD structured data helpers.
 *
 * Structured data is a core SEO lever for a search-led product: it powers
 * rich results for organizations, breadcrumbs, FAQs, and how-to content.
 * Render the returned object inside a
 * `<script type="application/ld+json">` tag.
 *
 * Only the Organization schema exists today; add Breadcrumb, FAQPage,
 * HowTo, etc. alongside it as the resource types that need them ship.
 */

export type JsonLd = Record<string, unknown>;

/** Organization schema for the site as a whole. Safe to render site-wide. */
export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}
