import { LogoMark } from "@/components/ui/logo";
import { Pill } from "@/components/ui/pill";
import { navLinks } from "@/content/marketing";

/**
 * Sticky translucent marketing navigation. On small screens the inline links
 * collapse (the design has no mobile menu); the primary CTA stays visible.
 */
export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-40 bg-[rgba(251,251,249,0.86)] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-8 py-4">
        <a href="#top" className="flex items-center gap-[11px]">
          <LogoMark className="block h-[30px] w-[30px]" />
          <span className="font-display text-[22px] font-bold tracking-[-0.03em]">
            Keesa
          </span>
        </a>
        <div className="flex flex-wrap items-center gap-[30px]">
          <div className="hidden items-center gap-[30px] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-body hover:text-ink text-[15px] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Pill
            variant="dark"
            href="#pricing"
            className="shadow-nav-pill px-6 py-3 text-[15px]"
          >
            Start Free
          </Pill>
        </div>
      </div>
    </nav>
  );
}
