import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { industryList } from "@/lib/industries";
import { FeatureRail } from "@/components/sections/feature-rail";
import { OwnerBrain } from "@/components/sections/owner-brain";
import { OfflineBand } from "@/components/sections/offline-band";
import { ShopPhoto } from "@/components/ui/shop-photo";
import { PosTerminal } from "@/components/mockups/product-ui";
import { AwesomeSlide } from "@/components/motion/awesome-reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Omni Ledger POS",
  description:
    "Omni Ledger POS from Hisaar Solutions: fast billing, works when bijli or internet is down, udhaar, night cash count, and owner-only reports.",
  path: "/products",
  image: {
    url: "/photos/grocery-floor.jpg",
    alt: "A grocery mart floor — Omni Ledger POS from Hisaar Solutions",
  },
});

const roles = [
  {
    name: "Owner",
    blurb: "The shop from home.",
    can: "Reports, staff, the shop, stock, and the till — including profit.",
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

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Omni Ledger", path: "/products" },
        ])}
      />
      <PageHero
        kicker="Omni Ledger"
        title="The ready POS for every floor."
        lede="Hisaar’s shop product: fast billing, udhaar, stock, and owner reports. Grocery, pharmacy, restaurant, and retail — clothes, mobile shops, and more. Keeps selling when bijli or internet is down."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Omni Ledger" },
        ]}
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
          is complete on Mobile, Starter, and Pro. We do not lock the till.
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
          The till is not a shared login.
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
        <p className="eyebrow">Then pick a floor</p>
        <h2 className="display mt-3 max-w-xl text-3xl sm:text-4xl">
          Grocery, pharmacy, restaurant, retail.
        </h2>
        <p className="mt-4 max-w-lg text-mute">
          Each shop type has its own page. Open the floor that matches your shop.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {industryList.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/solutions/${i.slug}`}
                className="group block overflow-hidden rounded-2xl border border-line hover:border-teal/40"
              >
                <ShopPhoto
                  src={i.photo}
                  alt={i.photoAlt}
                  className="rounded-none border-0"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <span className="flex items-baseline justify-between gap-4 p-4">
                  <span className="font-display text-xl tracking-tight group-hover:text-teal">
                    {i.name}
                  </span>
                  <span className="text-sm text-mute">{i.kicker}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand
        title="Walk the till in your own shop."
        body="WhatsApp us. We set up Omni Ledger. You try it for 14 days. Then you pick a plan."
      />
    </>
  );
}
