import { LogoMark } from "@/components/ui/logo";
import { gathered, scatter } from "@/content/marketing";

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-8 pt-5 pb-[100px]">
      <div className="mb-[52px] text-center">
        <h2 className="font-display mx-auto mb-[18px] max-w-[760px] text-[clamp(2rem,5.2vw,52px)] leading-[1.04] font-extrabold tracking-[-0.042em] text-balance">
          Pregnancy shouldn’t live in twenty different places.
        </h2>
        <p className="text-body mx-auto max-w-[560px] text-[18.5px] leading-[1.6] text-pretty">
          Right now the plan for your baby is spread across a dozen apps, and
          none of them know about each other.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-11">
        <div className="relative h-[360px] min-w-[330px] flex-[1_1_440px]">
          {scatter.map((note) => (
            <span
              key={note.label}
              className="bg-surface text-body shadow-scatter absolute rounded-[14px] px-[15px] py-[11px] text-[14px] whitespace-nowrap"
              style={{
                left: note.x,
                top: note.y,
                transform: `rotate(${note.rot})`,
              }}
            >
              {note.label}
            </span>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="flex flex-[0_0_auto] flex-col items-center gap-2 px-2"
        >
          <span className="font-display text-[34px] text-[#C9C4B8]">→</span>
        </div>

        <div className="flex min-w-[300px] flex-[1_1_340px] flex-col items-center gap-4">
          <div className="bg-surface shadow-gather w-full max-w-[380px] rounded-[26px] p-[26px]">
            <span className="mb-5 flex items-center gap-3">
              <LogoMark className="block h-8 w-8" />
              <span className="font-display text-[21px] font-bold tracking-[-0.03em]">
                One Baby Workspace
              </span>
            </span>
            <div className="flex flex-col gap-[10px]">
              {gathered.map((item) => (
                <span
                  key={item.label}
                  className="bg-canvas flex items-center gap-[11px] rounded-[14px] px-[13px] py-[11px] text-[14.5px]"
                >
                  <span className="bg-accent flex h-5 w-5 flex-[0_0_20px] items-center justify-center rounded-full text-[11px]">
                    ✓
                  </span>
                  <span className="flex-1">{item.label}</span>
                  <span className="text-soft text-[12.5px]">{item.meta}</span>
                </span>
              ))}
            </div>
          </div>
          <p className="text-soft m-0 max-w-[340px] text-center text-[14.5px] leading-[1.6] text-pretty">
            Keesa doesn’t replace Reddit or Google. It’s where what you found
            actually ends up.
          </p>
        </div>
      </div>
    </section>
  );
}
