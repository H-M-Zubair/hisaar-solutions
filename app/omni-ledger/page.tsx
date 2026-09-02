import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { paths } from "@/lib/paths";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureRail } from "@/components/sections/feature-rail";
import { OwnerBrain } from "@/components/sections/owner-brain";
import { OfflineBand } from "@/components/sections/offline-band";
import { PosTerminal } from "@/components/mockups/product-ui";
import { AwesomeSlide } from "@/components/motion/awesome-reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { industryList } from "@/lib/industries";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Omni Ledger POS",
  description:
    "Omni Ledger POS from Hisaar Solutions: fast billing, works when bijli or internet is down, udhaar, night cash count, and owner-only reports.",
  path: paths.product,
  image: {
    url: "/photos/grocery-floor.jpg",
    alt: "A grocery mart floor — Omni Ledger POS from Hisaar Solutions",
  },
});

const roles = [
  {
    name: "Owner",
    blurb: "The shop from home.",
    can: "Reports, staff, the shop, stock, and the counter — including profit.",
  },
  {
    name: "Manager",
    blurb: "The floor, without the books.",
    can: "Products, stock, cancel a sale, and settings. Profit stays with the owner.",
  },
  {
    name: "Cashier",
    blurb: "The counter, and only the counter.",
    can: "Sales, customers, bills, and tonight’s cash count.",
  },
];

export default function OmniLedgerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Omni Ledger", path: paths.product },
        ])}
      />
      <PageHero
        kicker="Omni Ledger"
        title="The ready POS for every floor."
        lede="Hisaar’s shop product: fast billing, udhaar, stock, and owner reports. Keeps selling when bijli or internet is down."
        crumbs={[{ name: "Home", href: "/" }, { name: "Omni Ledger" }]}
      />

      <OfflineBand />
      <FeatureRail />

      <section className="mx-auto max-w-[1120px] min-w-0 overflow-x-clip px-5 py-20 sm:px-8">
        <p className="eyebrow">The counter</p>
        <h2 className="display mt-3 max-w-2xl text-3xl sm:text-4xl">
          Scan, take money, next customer.
        </h2>
        <p className="mt-4 max-w-xl text-mute">
          Barcode, cash or card, credit, part-pay, receipt, next order. Billing
          is complete on Mobile, Starter, and Pro. We do not lock the counter.
        </p>
        <AwesomeSlide direction="right">
          <div className="mt-10">
            <PosTerminal />
          </div>
        </AwesomeSlide>
      </section>

      <OwnerBrain photo={false} />

      <section className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8">
        <p className="eyebrow">Staff</p>
        <h2 className="display mt-3 text-3xl sm:text-4xl">Each person sees only their job.</h2>
        <p className="mt-4 max-w-xl text-mute">
          Owner, manager, and cashier are separate. Profit stays with the owner.
          The counter is not a shared login.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {roles.map((r) => (
            <article key={r.name} className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-display text-2xl tracking-tight">{r.name}</h3>
              <p className="mt-2 text-sm text-teal">{r.blurb}</p>
              <p className="mt-6 text-sm text-mute">{r.can}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8">
        <p className="eyebrow">Floors</p>
        <h2 className="display mt-3 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
          Then pick the floor you run.
        </h2>
        <p className="mt-5 flex flex-wrap gap-x-3 gap-y-2 font-display text-2xl tracking-tight sm:text-3xl">
          {industryList.map((i, n) => (
            <span key={i.slug} className="inline-flex items-baseline gap-3">
              {n > 0 ? <span className="text-mute" aria-hidden>/</span> : null}
              <Link
                href={paths.floor(i.slug)}
                className="text-paper hover:text-teal"
              >
                {i.name}
              </Link>
            </span>
          ))}
        </p>
        <p className="mt-5 max-w-xl text-mute">
          Omni Ledger is one product. The shop you run still matters. You can
          explore the floors related to your business — and open the one that
          matches how you actually sell.
        </p>
        <Link
          href={paths.floors}
          className="mt-8 inline-block text-sm text-paper underline decoration-line underline-offset-8 hover:decoration-current"
        >
          Explore floors →
        </Link>
      </section>
      <CtaBand
        title="Walk the counter in your own shop."
        body="WhatsApp us. We set up Omni Ledger. You try it for 14 days. Then you pick a plan."
      />
    </>
  );
}
