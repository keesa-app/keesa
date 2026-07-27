import type { Metadata } from "next";

import { DecisionSection } from "@/components/marketing/decision-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { PricingSection } from "@/components/marketing/pricing-section";
import { ProblemSection } from "@/components/marketing/problem-section";
import { RoomsSection } from "@/components/marketing/rooms-section";
import { TimelineSection } from "@/components/marketing/timeline-section";

export const metadata: Metadata = {
  description:
    "One calm workspace to plan, research, compare and decide everything before your baby arrives. Explore your plan free; $99 once per pregnancy to save it — no subscription.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    description:
      "One calm workspace to plan, research, compare and decide everything before your baby arrives. Explore free; $99 once per pregnancy.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <RoomsSection />
      <DecisionSection />
      <TimelineSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
