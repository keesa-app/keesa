import { LogoMark } from "@/components/ui/logo";
import { Pill } from "@/components/ui/pill";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-[1200px] px-8 pb-[100px]">
      <div className="bg-surface relative overflow-hidden rounded-[36px] px-10 py-[78px] text-center shadow-[0_8px_24px_rgba(22,53,43,0.07),0_48px_90px_rgba(22,53,43,0.12)]">
        <span
          aria-hidden="true"
          className="bg-butter absolute -top-[160px] -left-[100px] h-[460px] w-[460px] rounded-full opacity-80 blur-[80px]"
        />
        <span
          aria-hidden="true"
          className="absolute -right-[120px] -bottom-[200px] h-[480px] w-[480px] rounded-full bg-[#E6EEFA] opacity-80 blur-[90px]"
        />
        <div className="relative">
          <LogoMark className="mx-auto mb-[26px] block h-11 w-11" />
          <h2 className="font-display mx-auto mb-5 max-w-[680px] text-[clamp(2.25rem,6vw,60px)] leading-[1.02] font-extrabold tracking-[-0.045em] text-balance">
            Everything ready for your baby.
          </h2>
          <p className="text-body mx-auto mb-[34px] max-w-[480px] text-[19px] leading-[1.6] text-pretty">
            Answer ten questions and see your plan. Decide about the workspace
            after.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Pill
              variant="dark"
              href="#pricing"
              className="shadow-cta px-9 py-[17px] text-[17px]"
            >
              Start Planning Today
            </Pill>
            <Pill
              variant="soft"
              href="#how"
              className="px-[30px] py-[17px] text-[17px]"
            >
              See How It Works
            </Pill>
          </div>
        </div>
      </div>
    </section>
  );
}
