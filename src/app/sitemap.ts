import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Generates /sitemap.xml.
 *
 * Only the homepage exists today. As SEO resource types ship (checklists,
 * calculators, guides, …), extend this to enumerate their published slugs —
 * typically by querying Sanity here, or by splitting into per-type sitemaps
 * with `generateSitemaps` once any single list approaches Google's 50k limit.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
