import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { site } from "@/lib/site";
import { AwesomeSlide } from "@/components/motion/awesome-reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMeta({
  title: "About",
  description:
    "Hisaar Solutions is a Lahore studio for custom software, web solutions, and tech consulting. We ship Omni Ledger, a provisioned POS for Pakistan shops.",
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
        kicker="Studio"
        title="A ledger, named plainly."
        lede="Hisaar is hisaab. We are a Lahore Cantt practice building one product: Omni Ledger. We provision shops. We do not run a marketplace of logos we do not have."
      />
      <section className="mx-auto grid max-w-[1120px] min-w-0 gap-16 px-5 py-20 sm:px-8 lg:grid-cols-12">
        {/* Intent: editorial about — place, craft, constraint. No team stock photos. */}
        <article className="min-w-0 lg:col-span-7">
          <p className="text-lg leading-relaxed text-paper">
            The POS market in Pakistan is loud about scanners and quiet about
            munafa. Omni Ledger is the other way around: the till is table stakes
            (and stays unlocked), the owner’s brain is the product (and is locked
            to the person who should see it).
          </p>
          <p className="mt-6 leading-relaxed text-mute">
            We skin one multi-tenant app for grocery, pharmacy, restaurant, and
            garments because those floors do not share a SKU model. Mobile is the
            phone. Starter is one desktop till. Extra tills and daily WhatsApp
            EOD sit on Pro. FBR, white-label, and unlimited branches live on Pro+ Custom.
          </p>
          <p className="mt-6 leading-relaxed text-mute">
            Trials are provisioned on WhatsApp. That is slower than a signup
            button and faster than onboarding a shop onto the wrong plan.
          </p>
        </article>
        <AwesomeSlide direction="right" className="min-w-0 lg:col-span-5">
          <aside className="space-y-8">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="eyebrow">Desk</h2>
              <p className="mt-4 font-display text-2xl tracking-tight">{site.city}</p>
              <p className="mt-2 text-sm text-mute">{site.country}</p>
              <p className="mt-4 text-sm">
                <a
                  href={site.phoneHref}
                  className="text-teal"
                  aria-label={`Call Hisaar Solutions at ${site.phone}`}
                >
                  {site.phone}
                </a>
              </p>
              <p className="text-sm">
                <a
                  href={site.emailHref}
                  className="text-teal"
                  aria-label={`Email Hisaar Solutions at ${site.email}`}
                >
                  {site.email}
                </a>
              </p>
            </div>
            <div className="rounded-2xl border border-line p-6">
              <h2 className="eyebrow">Name</h2>
              <p className="mt-4 text-sm leading-relaxed text-mute">
                The mark is a green circuit of nodes — connected, modular, a
                ledger that talks. It is not a mountain, not a wave, not an
                abstract animal. It is infrastructure you can read at a glance.
              </p>
            </div>
          </aside>
        </AwesomeSlide>
      </section>
      <CtaBand title="Come in as a shop, not as a lead." />
    </>
  );
}
