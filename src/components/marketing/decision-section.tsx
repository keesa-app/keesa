import { decisionBlocks, decisionNotes } from "@/content/marketing";

export function DecisionSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1200px] px-8 py-[100px]">
        <div className="mb-[52px] text-center">
          <span className="text-soft mb-4 block text-[14px]">
            every decision has a home
          </span>
          <h2 className="font-display mx-auto mb-[18px] max-w-[700px] text-[clamp(2rem,5.2vw,52px)] leading-[1.04] font-extrabold tracking-[-0.042em] text-balance">
            In two years you’ll still know why you chose it.
          </h2>
          <p className="text-body mx-auto max-w-[560px] text-[18.5px] leading-[1.6] text-pretty">
            One page per decision. The research, the shortlist, the reason, the
            receipt — all of it stays put.
          </p>
        </div>

        <div className="flex flex-wrap items-start gap-6">
          <div className="bg-canvas shadow-panel min-w-[340px] flex-[1_1_620px] rounded-[28px] p-[30px]">
            <div className="mb-[22px] flex flex-wrap items-center justify-between gap-[14px]">
              <div>
                <span className="text-soft mb-1 block text-[13px]">
                  Sleep · sorted on Tuesday
                </span>
                <h3 className="font-display m-0 text-[32px] font-extrabold tracking-[-0.035em]">
                  The Crib
                </h3>
              </div>
              <span className="bg-accent flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium">
                <span className="text-[12px]">✓</span>
                <span>Purchased</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-[14px]">
              {decisionBlocks.map((block) => (
                <div
                  key={block.label}
                  className="bg-surface shadow-card flex flex-col gap-[11px] rounded-[18px] p-[17px]"
                >
                  <span className="text-soft text-[12.5px]">{block.label}</span>
                  {block.items.map((item) => (
                    <span
                      key={item.text}
                      className="flex items-baseline justify-between gap-[10px] text-[14px] leading-[1.5]"
                    >
                      <span className="min-w-0" style={{ color: item.color }}>
                        {item.text}
                      </span>
                      <span className="text-soft text-[12px] whitespace-nowrap">
                        {item.meta}
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <div className="bg-cream mt-[14px] flex flex-wrap items-center justify-between gap-4 rounded-[18px] p-[19px]">
              <div className="min-w-0 flex-[1_1_300px]">
                <span className="mb-[5px] block text-[12.5px] text-[#8A6410]">
                  why you chose it
                </span>
                <p className="text-ink m-0 text-[15.5px] leading-[1.6] text-pretty">
                  Four mattress heights, solid wood slats, and it fits the 54″
                  wall with room to open the closet.
                </p>
              </div>
              <span className="font-display flex-[0_0_auto] text-[26px] font-extrabold tracking-[-0.03em]">
                $330
              </span>
            </div>
          </div>

          <div className="flex min-w-[280px] flex-[1_1_300px] flex-col gap-[14px]">
            {decisionNotes.map((note) => (
              <div
                key={note.title}
                className="bg-surface shadow-rest flex flex-col gap-2 rounded-[22px] p-[22px]"
              >
                <span
                  className="mb-1 h-1 w-[26px] rounded-full"
                  style={{ background: note.accent }}
                />
                <h4 className="font-display m-0 text-[18px] font-bold tracking-[-0.025em]">
                  {note.title}
                </h4>
                <p className="text-body m-0 text-[14.5px] leading-[1.65] text-pretty">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
