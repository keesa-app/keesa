/**
 * Keesa logo mark — the arc-and-dot symbol from the approved brand.
 * Decorative by default (aria-hidden); pair with a visible wordmark or an
 * accessible label on the containing link.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 48a34 34 0 0 0 68 0"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth={11}
        strokeLinecap="round"
      />
      <circle cx="50" cy="42" r="14" fill="var(--color-accent)" />
    </svg>
  );
}
