import { HomeHero } from "@/components/sections/home-hero";
import { HonestFacts } from "@/components/sections/honest-facts";
import { CompanyOffer } from "@/components/sections/company-offer";
import { IndustryPin } from "@/components/sections/industry-pin";
import { OwnerBrain } from "@/components/sections/owner-brain";
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
      <CompanyOffer />
      <IndustryPin />
      <OwnerBrain photo={false} />
      <CtaBand
        title="Tell us the business. We bring the software."
        body="Subscribe to Omni Ledger, or ask us to build. WhatsApp is the door."
      />
    </>
  );
}
