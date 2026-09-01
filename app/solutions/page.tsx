import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { industryList } from "@/lib/industries";
import { AwesomeFade } from "@/components/motion/awesome-reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Industry POS Solutions",
  description:
    "Custom POS for grocery, pharmacy, restaurant, and retail — clothes, mobile shops, cosmetics, hardware. Same Omni Ledger, different floors — Hisaar Solutions.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ])}
      />
      <PageHero
        kicker="Solutions"
        title="Pick the floor you actually run."
        lede="Four packs, one tenant. Mobile is the phone. Starter is a simple SKU till. Pro is lots, tables, or leftover kinds — size and colour for clothes, model and storage for phones. We will not sell you the wrong one."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Solutions" },
        ]}
      />
      <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8">
        <p className="mb-8 max-w-xl text-sm text-mute">
          The shared till — barcode, offline, udhaar, shift close, owner reports — is on{" "}
          <Link href="/products" className="text-teal hover:underline">
            Omni Ledger
          </Link>
          . This page is only the floor you run.
        </p>
        <AwesomeFade direction="up">
          <div className="grid gap-4">
            {industryList.map((i, idx) => (
              <Link
                key={i.slug}
                href={`/solutions/${i.slug}`}
                className="group grid min-w-0 overflow-hidden rounded-3xl border border-line bg-surface md:grid-cols-[minmax(0,160px)_minmax(0,1fr)]"
              >
                <div
                  className="grid min-h-[120px] place-items-center font-display text-5xl tracking-tight text-ink sm:text-6xl md:min-h-full"
                  style={{ background: i.accent }}
                >
                  0{idx + 1}
                </div>
                <div className="min-w-0 p-6 sm:p-8">
                  <p className="eyebrow">{i.kicker}</p>
                  <h2 className="display mt-2 text-3xl sm:text-4xl">{i.name}</h2>
                  <p className="mt-3 max-w-xl text-mute">{i.lede}</p>
                  <p className="mt-4 text-sm text-paper group-hover:text-teal">
                    {i.headline} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </AwesomeFade>
      </section>
      <CtaBand title="Tell us the floor. We provision the pack." />
    </>
  );
}
