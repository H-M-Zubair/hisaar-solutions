import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { PricingBoard } from "@/components/sections/pricing-board";
import { PricingMatrix } from "@/components/sections/pricing-matrix";
import { faqs, priceLineMonthly } from "@/lib/pricing";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = pageMeta({
  title: "Pricing",
  description:
    "Omni Ledger pricing: Mobile Rs 1,999, Starter Rs 3,499, Pro Rs 7,499, Pro+ Custom from Rs 12,500. Annual save 5–8%. WhatsApp Hisaar Solutions to start.",
  path: "/pricing",
});

const fbrNotes = [
  {
    n: "01",
    title: "Mobile / Starter / Pro",
    body: "Cash vs card tax rates on the bill. No FBR push. Your own logo on receipts is not in these plans.",
  },
  {
    n: "02",
    title: "Included on Pro+ Custom",
    body: "FBR / PRA tax bills and branded receipts sit in the Rs 12,500+ plan.",
  },
  {
    n: "03",
    title: "No fake demo",
    body: "We will not walk a tax push that is not live for your shop and province.",
  },
];

export default function PricingPage({
  searchParams,
}: {
  searchParams: { shop?: string; from?: string };
}) {
  const fromPos = searchParams.from === "pos";
  const shop = (searchParams.shop || "").replace(/[<>]/g, "").trim().slice(0, 80);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <JsonLd data={faqJsonLd()} />
      <PageHero
        kicker="Pricing"
        title="Phone till, or a computer at the counter."
        lede="Four plans for Pakistan shops. Starter gives weekly sales without profit. Pro unlocks monthly, yearly, custom-date profit reports, supplier ledger, loyalty, and more staff. Pro+ Custom adds multi-device and branch operations. Pay yearly and save 5–8%."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Pricing" },
        ]}
      />

      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1120px] min-w-0 px-5 py-16 sm:px-8 lg:py-20">
          <p className="eyebrow text-teal">By device</p>
          <h2 className="display mt-3 max-w-xl text-3xl sm:text-4xl">
            Pick the till you actually run.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-mute">
            {fromPos
              ? shop
                ? `Paying for ${shop}. Pick the plan, then the Pay button opens JazzCash, EasyPaisa, SadaPay, and bank details.`
                : "Pick the plan, then the Pay button opens JazzCash, EasyPaisa, SadaPay, and bank details."
              : "Starter is the single-counter plan. Pro adds complete reports, supplier hisaab, loyalty, staff capacity, CSV export, and optional WhatsApp EOD."}
          </p>
          <div className="mt-10">
            <PricingBoard shop={shop} fromPos={fromPos} />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1120px] min-w-0 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:py-20">
          <div>
            <p className="eyebrow text-teal">Extra on Pro</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">
              Tonight’s hisaab on WhatsApp.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-mute">
              The owner who is not at the counter still needs today’s money. A PDF
              of the day to WhatsApp or email at close — Rs 999 / month on Pro,
              included on Pro+ Custom. Not on Mobile or Starter, so the upgrade
              has a reason.
            </p>
          </div>
          <ul className="space-y-3 self-center text-sm">
            <li className="rounded-xl border border-line bg-ink px-4 py-3 text-mute">
              Mobile / Starter: not included. You close the drawer yourself.
            </li>
            <li className="rounded-xl border border-teal/30 bg-ink px-4 py-3 text-paper">
              Pro extra: Rs 999 / mo · PDF to the owner at 10pm.
            </li>
            <li className="rounded-xl border border-amber/35 bg-ink px-4 py-3 text-paper">
              Pro+ Custom: included, with tax bills, branches, and your logo.
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-ink">
        <div className="mx-auto grid max-w-[1120px] min-w-0 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="eyebrow text-amber">Pro+ Custom · included</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">
              Government tax bills
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-mute">
              Tax filing and branded receipts live on Pro+ Custom, not inside Mobile,
              Starter, or Pro. When it is live for your province, it is in the
              Rs 12,500+ plan — with multi-device, multi-branch, and stock transfer.
            </p>
          </div>
          <ol className="space-y-0 self-center">
            {fbrNotes.map((item) => (
              <li
                key={item.n}
                className="border-t border-line py-5 first:border-t-0 first:pt-0 last:pb-0"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
                  {item.n}
                </p>
                <p className="mt-2 font-display text-xl tracking-tight">{item.title}</p>
                <p className="mt-1.5 text-sm text-mute">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-[1120px] min-w-0 px-5 py-16 sm:px-8 lg:py-20">
          <p className="eyebrow">Compare plans</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl">What sits on which plan.</h2>
          <p className="mt-3 max-w-xl text-sm text-mute">
            Locked means upgrade. Extra means a rupee line, not a fake tick.
            Tax bills and your logo are Pro+ Custom — we still will not demo a
            push that is not live.
          </p>
          <div className="mt-10">
            <PricingMatrix />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 lg:py-20">
        <p className="eyebrow">Questions</p>
        <h2 className="display mt-3 text-3xl sm:text-4xl">Questions we actually get.</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CtaBand
        title="Fourteen days, then pick a plan."
        body={`${priceLineMonthly}. Pay yearly and save 5–8%. We set up the shop on WhatsApp ${site.phone}.`}
      />
    </>
  );
}
