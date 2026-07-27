"use client";

import { useId, useState } from "react";

import { faqs } from "@/content/marketing";

export function FaqSection() {
  // Single-open accordion; the first item starts open (per the design).
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section id="faq" className="mx-auto max-w-[1200px] px-8 py-[100px]">
      <div className="flex flex-wrap items-start gap-11">
        <div className="min-w-[280px] flex-[0_1_340px]">
          <span className="text-soft mb-4 block text-[14px]">questions</span>
          <h2 className="font-display mb-[18px] text-[clamp(1.875rem,4.6vw,44px)] leading-[1.06] font-extrabold tracking-[-0.042em] text-balance">
            The things people ask before paying.
          </h2>
          <p className="text-body m-0 text-[16.5px] leading-[1.65] text-pretty">
            If something isn’t here, write to us. A person answers, usually the
            same day.
          </p>
        </div>

        <div className="flex min-w-[320px] flex-[1_1_480px] flex-col gap-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            const btnId = `${baseId}-btn-${i}`;
            const panelId = `${baseId}-panel-${i}`;
            return (
              <div
                key={faq.q}
                className={`bg-surface overflow-hidden rounded-[22px] ${
                  open ? "shadow-faq-open" : "shadow-rest"
                }`}
              >
                <button
                  type="button"
                  id={btnId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-[22px] text-left"
                >
                  <span className="font-display text-ink text-[18.5px] font-bold tracking-[-0.025em]">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-ink flex h-[26px] w-[26px] flex-[0_0_26px] items-center justify-center rounded-full text-[14px] ${
                      open ? "bg-accent" : "bg-sand"
                    }`}
                  >
                    {open ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!open}
                  className="px-6 pb-6"
                >
                  <p className="text-body m-0 max-w-[560px] text-[16px] leading-[1.7] text-pretty">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
