import { Pill } from "@/components/ui/pill";
import { freeIncludes, paidIncludes } from "@/content/marketing";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-surface">
      <div className="mx-auto max-w-[1200px] px-8 py-[100px]">
        <div className="mb-[52px] text-center">
          <span className="text-soft mb-4 block text-[14px]">pricing</span>
          <h2 className="font-display mx-auto mb-[18px] max-w-[640px] text-[clamp(2rem,5.2vw,52px)] leading-[1.04] font-extrabold tracking-[-0.042em] text-balance">
            Pay once. You’re preparing for a baby, not signing up for a service.
          </h2>
          <p className="text-body mx-auto max-w-[520px] text-[18.5px] leading-[1.6] text-pretty">
            No subscription, no trial timer, no card to explore. One payment
            covers this pregnancy, start to finish.
          </p>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-5">
          {/* Free */}
          <div className="bg-canvas flex min-w-[300px] flex-[0_1_380px] flex-col gap-[22px] rounded-[30px] p-[34px]">
            <div>
              <h3 className="font-display mb-2 text-[24px] font-bold tracking-[-0.03em]">
                Free
              </h3>
              <p className="text-body m-0 text-[15.5px] leading-[1.6] text-pretty">
                Explore Keesa and generate your personalized preparation plan.
              </p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[52px] leading-none font-extrabold tracking-[-0.04em]">
                $0
              </span>
            </div>
            <div className="flex flex-col gap-[11px]">
              {freeIncludes.map((text) => (
                <span
                  key={text}
                  className="text-body flex items-start gap-[11px] text-[15px] leading-[1.55]"
                >
                  <span className="bg-line text-soft mt-px flex h-[19px] w-[19px] flex-[0_0_19px] items-center justify-center rounded-full text-[10px]">
                    ✓
                  </span>
                  <span className="text-pretty">{text}</span>
                </span>
              ))}
            </div>
            <Pill
              variant="white"
              href="#pricing"
              className="shadow-soft hover:shadow-soft-hover mt-auto w-full py-4 text-[16px] transition-shadow"
            >
              Start Free
            </Pill>
            <span className="text-soft min-h-[20px] text-center text-[13.5px]">
              no card · nothing to cancel
            </span>
          </div>

          {/* Paid */}
          <div className="bg-ink shadow-pricing-dark flex min-w-[300px] flex-[0_1_420px] flex-col gap-[22px] rounded-[30px] p-[34px] text-white">
            <div className="flex items-start justify-between gap-[14px]">
              <div>
                <h3 className="font-display mb-2 text-[24px] font-bold tracking-[-0.03em] text-white">
                  Baby Workspace
                </h3>
                <p className="text-mint m-0 text-[15.5px] leading-[1.6] text-pretty">
                  Your complete planning workspace for this pregnancy.
                </p>
              </div>
              <span className="bg-accent text-ink flex-[0_0_auto] rounded-full px-[13px] py-[6px] text-[12.5px] font-medium whitespace-nowrap">
                one time
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-[10px]">
              <span className="font-display text-[52px] leading-none font-extrabold tracking-[-0.04em] text-white">
                $99
              </span>
              <span className="text-mint text-[15px]">once, per pregnancy</span>
            </div>
            <div className="flex flex-col gap-[11px]">
              {paidIncludes.map((text) => (
                <span
                  key={text}
                  className="flex items-start gap-[11px] text-[15px] leading-[1.55] text-[#E4EDE8]"
                >
                  <span className="bg-accent text-ink mt-px flex h-[19px] w-[19px] flex-[0_0_19px] items-center justify-center rounded-full text-[10px]">
                    ✓
                  </span>
                  <span className="text-pretty">{text}</span>
                </span>
              ))}
            </div>
            <Pill
              variant="yellow"
              href="#pricing"
              className="shadow-cta-yellow mt-auto w-full py-[17px] text-[16.5px] font-semibold"
            >
              Start Planning
            </Pill>
            <span className="text-mint min-h-[20px] text-center text-[13.5px]">
              no subscription · nothing renews · yours after the birth
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
