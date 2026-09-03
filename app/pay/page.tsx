import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { PayBoard } from "@/components/sections/pay-board";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import {
  getBillingAccounts,
  parseBillingCycle,
  parsePayIntent,
  parseSitePlan,
  sanitizeShopName,
} from "@/lib/billing";
import { site } from "@/lib/site";
import { waLink } from "@/lib/utils";

export const metadata = pageMeta({
  title: "Pay Omni Ledger",
  description:
    "Pay Omni Ledger by JazzCash, EasyPaisa, SadaPay, or Bank Alfalah. WhatsApp the screenshot to Hisaar — access continues after we allot the plan.",
  path: "/pay",
});

export default function PayPage({
  searchParams,
}: {
  searchParams: {
    shop?: string;
    plan?: string;
    intent?: string;
    cycle?: string;
  };
}) {
  const shop = sanitizeShopName(searchParams.shop);
  const accounts = getBillingAccounts();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pay", path: "/pay" },
        ])}
      />
      <PageHero
        kicker="Existing shops"
        title="Pay the bill. Send the screenshot."
        lede={`JazzCash, EasyPaisa, SadaPay, or Bank Alfalah to ${accounts.accountTitle}. Then WhatsApp the proof to ${site.phone}. Hisaar allots the plan — that is when Omni Ledger continues.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Pay" },
        ]}
      />
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1120px] min-w-0 px-5 py-16 sm:px-8 lg:py-20">
          <PayBoard
            accounts={accounts}
            shop={shop}
            initialPlan={parseSitePlan(searchParams.plan)}
            initialIntent={parsePayIntent(searchParams.intent)}
            initialCycle={parseBillingCycle(searchParams.cycle)}
          />
        </div>
      </section>
      <CtaBand
        title="Paid, but the till is still locked?"
        body="That is expected. Screenshot first, allot second. Message the same WhatsApp if the proof is already on the chat."
        href={waLink(
          "Hi Hisaar — I already sent the Omni Ledger payment screenshot. Please allot access so the shop can continue.",
        )}
        cta="WhatsApp proof"
      />
    </>
  );
}
