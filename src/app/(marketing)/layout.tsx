/**
 * Marketing surface.
 *
 * Wraps public, indexable marketing pages (home, pricing, about, …). This is
 * where the shared marketing chrome — header, footer, nav — will live once
 * those pages are built. For now it is a pass-through so the structure is
 * reserved without imposing any design.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
