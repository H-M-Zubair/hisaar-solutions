import { HomeHero } from "@/components/sections/home-hero";
import { HonestFacts } from "@/components/sections/honest-facts";
import { IndustryPin } from "@/components/sections/industry-pin";
import { FeatureRail } from "@/components/sections/feature-rail";
import { OwnerBrain } from "@/components/sections/owner-brain";
// import { PlaybookStrip } from "@/components/sections/playbook-strip";
// import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { CtaBand } from "@/components/sections/cta-band";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Omni Ledger",
  description:
    "Hisaar Solutions builds Omni Ledger — POS and shop ERP for grocery, pharmacy, restaurant, and garments. Offline-first. Owner-locked profit. Mobile Rs 1,999 · Starter Rs 3,999 · Pro Rs 7,999.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HonestFacts />
      <IndustryPin />
      <FeatureRail />
      <OwnerBrain />
      {/* <PlaybookStrip /> */}
      {/* <PricingTeaser /> */}
      <CtaBand />
    </>
  );
}
