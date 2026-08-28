import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { industryList } from "@/lib/industries";
import { PosTerminal } from "@/components/mockups/product-ui";
import { OwnerAnalytics } from "@/components/mockups/owner-analytics";
import { AwesomeFade, AwesomeSlide } from "@/components/motion/awesome-reveal";

export const metadata = pageMeta({
  title: "Omni Ledger",
  description:
    "Omni Ledger is the shared POS and shop ledger: barcode till, offline sync, udhaar, shift close, owner-only reports. Industry skins live on Solutions.",
  path: "/products",
});

const roles = [
  {
    name: "Owner",
    blurb: "The shop from home.",
    can: "Reports, staff, organisation, stock, and the till — including profit.",
  },
  {
    name: "Manager",
    blurb: "The floor, without the books.",
    can: "Products, stock, voids, and settings. Financials stay with the owner.",
  },
  {
    name: "Cashier",
    blurb: "The counter, and only the counter.",
    can: "Sales, customers, invoices, and tonight’s shift close.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Omni Ledger"
        title="One ledger. The floor is a skin."
        lede="Barcode POS, offline sales, udhaar, shift close, and owner reports — the till every shop shares. Industry packs for grocery, pharmacy, restaurant, and garments live on Solutions."
      />

      <section className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8">
        {/* Intent: the till as an instrument — not another industry poster. */}
        <AwesomeFade direction="left">
          <p className="eyebrow">The counter</p>
          <h2 className="display mt-3 max-w-2xl text-3xl sm:text-4xl">
            Scan, settle, queue — even when the fibre dies.
          </h2>
          <p className="mt-4 max-w-xl text-mute">
            Barcode, cash or card label, credit, partial, receipt, next order. POS is
            complete on Starter and Pro. We do not gate the till.
          </p>
        </AwesomeFade>
        <AwesomeSlide direction="right" delay={140}>
          <div className="mt-10">
            <PosTerminal />
          </div>
        </AwesomeSlide>
      </section>

      <section className="border-y border-line py-20">
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
          {/* Intent: owner reports belong here; industry dashboards do not. */}
          <AwesomeFade direction="left">
            <p className="eyebrow text-teal">The owner pane</p>
            <h2 className="display mt-3 max-w-2xl text-3xl sm:text-4xl">
              Today on Starter. History on Pro. Never on the cashier.
            </h2>
            <p className="mt-4 max-w-xl text-mute">
              Same KPIs the product ships. Week / month / year lock after trial unless
              you are on Pro. Profit is a role rule, not a plan toggle.
            </p>
          </AwesomeFade>
          <AwesomeSlide direction="right" delay={120}>
            <div className="mt-10">
              <OwnerAnalytics />
            </div>
          </AwesomeSlide>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8">
        {/* Intent: role value for the shop owner — permissions, not how anyone logs in. */}
        <AwesomeFade direction="up">
          <p className="eyebrow">Staff control</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl">Each person sees only their job.</h2>
          <p className="mt-4 max-w-xl text-mute">
            Owner, manager, and cashier are separate seats. Profit stays with the
            owner. The till does not become a shared login.
          </p>
        </AwesomeFade>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {roles.map((r, i) => (
            <AwesomeFade key={r.name} direction="up" delay={i * 110} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <p className="font-display text-2xl tracking-tight">{r.name}</p>
                <p className="mt-2 text-sm text-teal">{r.blurb}</p>
                <p className="mt-6 text-sm text-mute">{r.can}</p>
              </article>
            </AwesomeFade>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8">
        {/* Intent: a doorway, not a second Solutions page. */}
        <AwesomeFade direction="left">
          <p className="eyebrow">Then pick a floor</p>
          <h2 className="display mt-3 max-w-xl text-3xl sm:text-4xl">
            The skins are on Solutions.
          </h2>
          <p className="mt-4 max-w-lg text-mute">
            Each industry has its own page: kirana rush, lots and FEFO, tables and
            KOT, size×color matrix. Open the floor that matches the shop.
          </p>
        </AwesomeFade>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {industryList.map((i, idx) => (
            <li key={i.slug}>
              <AwesomeFade direction="left" delay={idx * 70}>
                <Link
                  href={`/solutions/${i.slug}`}
                  className="flex items-baseline justify-between gap-4 py-4 hover:text-teal"
                >
                  <span className="font-display text-xl tracking-tight">{i.name}</span>
                  <span className="text-sm text-mute">{i.kicker}</span>
                </Link>
              </AwesomeFade>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand title="Walk the 12-minute till." />
    </>
  );
}
