import { LogoMark } from "@/components/ui/logo";
import { footerCols } from "@/content/marketing";

export function SiteFooter() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-10 px-8 py-14">
        <div className="flex min-w-[250px] flex-[0_1_300px] flex-col gap-[14px]">
          <span className="flex items-center gap-[11px]">
            <LogoMark className="block h-[28px] w-[28px]" />
            <span className="font-display text-[20px] font-bold tracking-[-0.03em]">
              Keesa
            </span>
          </span>
          <p className="text-soft m-0 max-w-[280px] text-[14.5px] leading-[1.65] text-pretty">
            The planning workspace for expecting parents. Built by parents who
            planned their first baby the hard way.
          </p>
        </div>
        {footerCols.map((col) => (
          <div
            key={col.title}
            className="flex min-w-[150px] flex-[0_1_180px] flex-col gap-3"
          >
            <span className="text-soft text-[12.5px]">{col.title}</span>
            {col.links.map((label) => (
              <a
                key={label}
                href="#top"
                className="text-body hover:text-ink text-[14.5px] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="text-soft mx-auto flex max-w-[1200px] flex-wrap justify-between gap-4 px-8 pb-10 text-[13.5px]">
        <span>© 2026 Keesa</span>
        <span>Keesa is a planning tool, not medical advice.</span>
      </div>
    </footer>
  );
}
