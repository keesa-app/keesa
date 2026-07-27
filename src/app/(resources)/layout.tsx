/**
 * SEO resource surface.
 *
 * Wraps the public, interactive resource pages that are the primary SEO
 * acquisition entry points. These live at keyword-rich, top-level URLs by
 * type so each type builds its own topical authority — for example:
 *
 *   /checklists/[slug]     /calculators/[slug]     /guides/[slug]
 *   /templates/[slug]      /comparisons/[slug]     /timing/[slug]
 *
 * Those type folders are created when the first page of each type ships, not
 * before. Shared resource chrome and resource-level structured data belong
 * here. Pass-through for now.
 */
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
