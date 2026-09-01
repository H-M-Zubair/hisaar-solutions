import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { AboutCompany } from "@/components/sections/about-company";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { company } from "@/lib/company";

export const metadata = pageMeta({
  title: "About",
  description:
    "Hisaar Solutions is a B2B custom software and SaaS company. We build our own products — including Omni Ledger, a multi-sector POS — and custom software for businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        kicker={company.kicker}
        title={company.headline}
        lede={company.lede}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About" },
        ]}
      />
      <AboutCompany />
      <CtaBand
        title="Tell us the business. We bring the software."
        body="SaaS you can subscribe to, or software built for one operation. WhatsApp Hisaar Solutions."
      />
    </>
  );
}
