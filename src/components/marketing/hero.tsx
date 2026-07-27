import { Pill } from "@/components/ui/pill";
import { heroCards, heroNav } from "@/content/marketing";

export function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      <span
        aria-hidden="true"
        className="bg-butter pointer-events-none absolute -top-[200px] -left-[160px] h-[600px] w-[600px] rounded-full opacity-[0.72] blur-[80px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[60px] -right-[200px] h-[620px] w-[620px] rounded-full bg-[#E6EEFA] opacity-[0.78] blur-[90px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[120px] left-[40%] h-[420px] w-[520px] rounded-full bg-[#F3EDFB] opacity-[0.62] blur-[90px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-8 pt-16 text-center">
        <span className="bg-surface text-body shadow-pill mb-8 inline-flex items-center gap-[10px] rounded-full px-[18px] py-2 text-[14px]">
          <span className="bg-accent h-[7px] w-[7px] rounded-full" />
          <span>one-time payment · no subscription</span>
        </span>

        <h1 className="font-display mx-auto mb-6 max-w-[880px] text-[clamp(2.75rem,8vw,82px)] leading-[0.97] font-extrabold tracking-[-0.045em] text-balance">
          Everything ready for your baby.
        </h1>
        <p className="text-body mx-auto mb-9 max-w-[560px] text-[20px] leading-[1.55] text-pretty">
          One calm workspace to plan, research, compare and decide everything
          before your baby arrives.
        </p>

        <div className="mb-[14px] flex flex-wrap justify-center gap-3">
          <Pill
            variant="dark"
            href="#pricing"
            className="shadow-cta px-[34px] py-[17px] text-[17px]"
          >
            Start Free
          </Pill>
          <Pill
            variant="white"
            href="#how"
            className="shadow-soft hover:shadow-soft-hover px-[30px] py-[17px] text-[17px] transition-shadow"
          >
            See How It Works
          </Pill>
        </div>
        <p className="text-soft mb-[54px] text-[14.5px]">
          free to explore · $99 once when you’re ready to save it
        </p>
      </div>

      <HeroPreview />
    </header>
  );
}

function HeroPreview() {
  return (
    <div className="relative mx-auto max-w-[1160px] px-8 pb-16 lg:pb-[130px]">
      <div className="bg-surface shadow-hero overflow-hidden rounded-[26px]">
        {/* window chrome */}
        <div className="bg-canvas flex items-center gap-[9px] px-5 py-[14px]">
          <span className="bg-shell h-[11px] w-[11px] rounded-full" />
          <span className="bg-shell h-[11px] w-[11px] rounded-full" />
          <span className="bg-shell h-[11px] w-[11px] rounded-full" />
          <span className="text-soft ml-[14px] text-[13px]">
            Maya &amp; Dev · Week 24
          </span>
        </div>

        <div className="flex min-h-[470px]">
          {/* workspace sidebar — decorative, hidden on small screens */}
          <aside className="bg-canvas hidden w-[224px] flex-[0_0_224px] flex-col gap-1 px-[14px] py-[22px] md:flex">
            <span className="text-soft px-3 pb-[10px] text-[12px]">
              your workspace
            </span>
            {heroNav.map((item) => (
              <span
                key={item.label}
                className={`flex items-center justify-between gap-[10px] rounded-[12px] px-3 py-[10px] text-[14.5px] ${
                  item.active
                    ? "bg-surface text-ink font-semibold"
                    : "text-body bg-transparent font-normal"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-soft text-[12px]">{item.meta}</span>
              </span>
            ))}
          </aside>

          {/* main panel */}
          <div className="flex min-w-0 flex-1 flex-col gap-[18px] px-7 py-[26px]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display mb-[5px] text-[28px] font-extrabold tracking-[-0.035em]">
                  Sleep
                </h2>
                <span className="text-soft text-[13.5px]">
                  4 of 6 sorted · 2 hidden because the crib is in your room
                </span>
              </div>
              <span className="flex items-center gap-[10px]">
                <span className="bg-hairline block h-[7px] w-[110px] overflow-hidden rounded-full">
                  <span className="bg-accent block h-full w-[66%] rounded-full" />
                </span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-[14px]">
              {heroCards.map((card) => (
                <div
                  key={card.title}
                  className="shadow-rest flex flex-col gap-3 rounded-[18px] p-4"
                  style={{ background: card.bg }}
                >
                  <span className="flex items-center gap-[11px]">
                    <span
                      className="flex h-[34px] w-[34px] flex-[0_0_34px] items-center justify-center rounded-[12px] text-[14px]"
                      style={{ background: card.tile, color: card.tileInk }}
                    >
                      {card.glyph}
                    </span>
                    <span className="flex min-w-0 flex-col gap-px">
                      <span className="font-display text-[16px] font-bold tracking-[-0.02em]">
                        {card.title}
                      </span>
                      <span className="text-soft text-[12.5px]">
                        {card.meta}
                      </span>
                    </span>
                  </span>
                  <span className="flex flex-wrap gap-[7px]">
                    {card.chips.map((chip) => (
                      <span
                        key={chip.label}
                        className="rounded-full px-[11px] py-1 text-[12px]"
                        style={{ background: chip.bg, color: chip.ink }}
                      >
                        {chip.label}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating stat badges — hidden below lg to avoid overlap */}
      <div className="animate-float-a bg-surface shadow-badge absolute bottom-[52px] left-0 hidden w-[206px] rounded-[20px] p-[15px] lg:block">
        <span className="text-soft mb-[6px] block text-[12px]">Week 24</span>
        <span className="font-display block text-[26px] leading-[1.1] font-extrabold tracking-[-0.035em]">
          83 of 280
        </span>
        <span className="text-soft text-[12.5px]">actually apply to you</span>
      </div>
      <div className="animate-float-b bg-ink shadow-badge-dark absolute right-0 bottom-[132px] hidden w-[230px] rounded-[20px] p-4 text-white lg:block">
        <span className="text-mint mb-[6px] block text-[12px]">
          nothing forgotten
        </span>
        <span className="font-display block text-[19px] leading-[1.25] font-bold tracking-[-0.025em]">
          You’re ready for Week 36.
        </span>
      </div>
    </div>
  );
}
