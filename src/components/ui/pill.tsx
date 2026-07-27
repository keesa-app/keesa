import type { ComponentProps, ReactNode } from "react";

/**
 * Pill — the rounded call-to-action used throughout the marketing site.
 *
 * `variant` sets only color + hover behavior; per-instance sizing (padding,
 * text size, shadow) is passed via `className` so each placement stays
 * pixel-accurate to the design. Renders an anchor when `href` is provided,
 * otherwise a button.
 */
const variants = {
  dark: "bg-ink text-white hover:bg-ink-deep",
  white: "bg-surface text-ink",
  yellow: "bg-accent text-ink hover:bg-accent-strong",
  soft: "bg-canvas text-ink hover:bg-sand",
} as const;

type PillVariant = keyof typeof variants;

const base =
  "inline-flex items-center justify-center rounded-full font-medium cursor-pointer transition-[background-color,box-shadow] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

type CommonProps = {
  variant: PillVariant;
  className?: string;
  children: ReactNode;
};

type PillAnchorProps = CommonProps &
  Omit<ComponentProps<"a">, "className" | "children"> & { href: string };
type PillButtonProps = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

export function Pill(props: PillAnchorProps): React.JSX.Element;
export function Pill(props: PillButtonProps): React.JSX.Element;
export function Pill({
  variant,
  className = "",
  children,
  ...rest
}: CommonProps & Record<string, unknown>) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (typeof rest.href === "string") {
    return (
      <a className={classes} {...(rest as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }
  return (
    <button
      type="button"
      className={classes}
      {...(rest as ComponentProps<"button">)}
    >
      {children}
    </button>
  );
}
