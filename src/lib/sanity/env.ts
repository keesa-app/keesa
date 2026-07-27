/**
 * Sanity environment configuration.
 *
 * Public values (project id, dataset, api version) are read from
 * NEXT_PUBLIC_* variables and are safe in the browser. The read token is
 * intentionally NOT exported from here — it is server-only and lives in
 * `client.ts`, guarded so it can never leak into a client bundle.
 */

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";

/**
 * Whether Sanity is configured enough to make requests. Lets callers fail
 * softly (e.g. render an empty state) before the CMS is wired up, instead of
 * throwing during build.
 */
export const isSanityConfigured = projectId.length > 0;
