import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Generates /robots.txt.
 *
 * Marketing and SEO resource pages are fully crawlable — they are the
 * acquisition surface. The authenticated workspace under /app is private and
 * must never be indexed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/app", "/api"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
