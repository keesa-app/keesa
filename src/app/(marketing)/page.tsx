/**
 * Root route placeholder.
 *
 * Intentionally minimal and un-designed — the real landing page is a later
 * task. This exists only so `/` resolves and the app deploys cleanly on top
 * of the foundation. Replace it when the landing page is built.
 */
export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-2 p-8 text-center">
      <h1 className="text-2xl font-semibold">Keesa</h1>
      <p className="text-sm opacity-70">
        The planning workspace for expecting parents. Foundation initialized.
      </p>
    </main>
  );
}
