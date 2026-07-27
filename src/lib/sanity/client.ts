import "server-only";

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "./env";

/**
 * Server-only Sanity client.
 *
 * The `server-only` import above makes the build fail if this module is ever
 * imported into a client component — which keeps `SANITY_API_READ_TOKEN` off
 * the browser. Read content in Server Components / Route Handlers only.
 *
 * `useCdn: true` serves cached, published content (fast, cheap). Draft or
 * preview reads should create a separate token-authenticated client with
 * `useCdn: false`; that is intentionally deferred until preview is built.
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

/** Read token is resolved here, server-side, and never exported. */
export const sanityReadToken = process.env.SANITY_API_READ_TOKEN ?? "";
