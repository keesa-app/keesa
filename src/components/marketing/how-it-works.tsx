import { steps } from "@/content/marketing";

export function HowItWorks() {
  return (
    <section id="how" className="bg-surface">
      <div className="mx-auto max-w-[1200px] px-8 py-[100px]">
        <div className="mb-[56px] text-center">
          <span className="text-soft mb-4 block text-[14px]">how it works</span>
          <h2 className="font-display mx-auto max-w-[680px] text-[clamp(2rem,5.2vw,52px)] leading-[1.04] font-extrabold tracking-[-0.042em] text-balance">
            Three steps, and about four minutes.
          </h2>
        </div>

        <div className="flex flex-wrap items-stretch gap-5">
          {steps.map((step) => (
            <div
              key={step.n}
              className="bg-canvas flex min-w-[290px] flex-[1_1_300px] flex-col gap-5 rounded-[28px] p-[30px]"
            >
              <span className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[14px] font-semibold"
                  style={{ background: step.tile, color: step.tileInk }}
                >
                  {step.n}
                </span>
                <span className="text-soft text-[13.5px]">{step.eyebrow}</span>
              </span>
              <div>
                <h3 className="font-display mb-[9px] text-[25px] leading-[1.2] font-bold tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="text-body m-0 text-[15.5px] leading-[1.65] text-pretty">
                  {step.body}
                </p>
              </div>
              <div className="bg-surface shadow-rest mt-auto flex flex-col gap-[11px] rounded-[20px] p-[18px]">
                {step.rows.map((row) => (
                  <span
                    key={row.label}
                    className="flex items-center gap-[10px] text-[14px]"
                    style={{ color: row.color }}
                  >
                    <span
                      className="flex h-[18px] w-[18px] flex-[0_0_18px] items-center justify-center rounded-full text-[10px]"
                      style={{ background: row.dotBg }}
                    >
                      {row.mark}
                    </span>
                    <span className="min-w-0 flex-1">{row.label}</span>
                    <span className="text-soft text-[12px]">{row.meta}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
