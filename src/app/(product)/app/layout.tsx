import type { Metadata } from "next";

/**
 * Authenticated workspace surface.
 *
 * The `(product)` route group keeps this code isolated while the nested `app`
 * segment produces the real, user-facing URLs:
 *
 *   /app            /app/plan       /app/decisions      /app/settings
 *
 * No workspace pages exist yet — this only reserves the structure and the URL
 * space. Auth, the workspace shell, and data wiring are later tasks.
 *
 * The workspace is private, so it is excluded from indexing here (defense in
 * depth alongside the /app disallow in robots.ts).
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
