import { HomeHero } from "@/components/sections/home-hero";
import { HonestFacts } from "@/components/sections/honest-facts";
import { IndustryPin } from "@/components/sections/industry-pin";
import { FeatureRail } from "@/components/sections/feature-rail";
import { OwnerBrain } from "@/components/sections/owner-brain";
// import { PlaybookStrip } from "@/components/sections/playbook-strip";
// import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { CtaBand } from "@/components/sections/cta-band";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  description: site.description,
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
