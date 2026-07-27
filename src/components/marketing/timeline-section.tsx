import { timeline } from "@/content/marketing";

export function TimelineSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-8 py-[100px]">
      <div className="mb-[52px] text-center">
        <span className="text-soft mb-4 block text-[14px]">
          built around your journey
        </span>
        <h2 className="font-display mx-auto mb-[18px] max-w-[700px] text-[clamp(2rem,5.2vw,52px)] leading-[1.04] font-extrabold tracking-[-0.042em] text-balance">
          It knows what matters now, and what can wait.
        </h2>
        <p className="text-body mx-auto max-w-[540px] text-[18.5px] leading-[1.6] text-pretty">
          Nothing arrives before it’s useful. Nothing important arrives late.
        </p>
      </div>

      <div className="relative pt-2">
        <span
          aria-hidden="true"
          className="bg-line absolute top-[38px] right-[4%] left-[4%] h-[3px] rounded-full"
        />
        <span
          aria-hidden="true"
          className="bg-accent absolute top-[38px] left-[4%] h-[3px] w-[42%] rounded-full"
        />
        <div className="relative flex flex-wrap gap-4">
          {timeline.map((stop) => (
            <div
              key={stop.week}
              className="flex min-w-[180px] flex-[1_1_190px] flex-col items-start gap-4"
            >
              <span
                className="ml-[14px] h-[18px] w-[18px] rounded-full shadow-[0_0_0_5px_#FBFBF9]"
                style={{ background: stop.dot }}
              />
              <div
                className={`bg-surface flex w-full flex-col gap-[9px] rounded-[22px] p-5 ${
                  stop.shadow === "float" ? "shadow-float" : "shadow-rest"
                }`}
              >
                <span className="font-display text-[18px] font-bold tracking-[-0.025em]">
                  {stop.week}
                </span>
                <p className="text-body m-0 text-[14px] leading-[1.6] text-pretty">
                  {stop.body}
                </p>
                <span
                  className="mt-[2px] text-[12.5px]"
                  style={{ color: stop.stateInk }}
                >
                  {stop.state}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
