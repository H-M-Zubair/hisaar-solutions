import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { playbooks } from "@/lib/playbooks";
import { ShopPhoto } from "@/components/ui/shop-photo";
import { AwesomeFade } from "@/components/motion/awesome-reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Work",
  description:
    "Four ordinary shop days: kirana rush, pharmacy expiry, restaurant tables, leftover retail stock. Simple walkthroughs from Hisaar Solutions.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <PageHero
        kicker="Work"
        title="Four shops. Four ordinary days."
        lede="We do not invent big client names. These are real shop problems — rush hour, expiry, tables, leftover stock — and how Omni Ledger helps."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Work" },
        ]}
      />
      <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8">
        <AwesomeFade direction="up">
          <div className="space-y-20">
            {playbooks.map((p, i) => (
              <article
                key={p.slug}
                className="grid min-w-0 gap-8 border-t border-line pt-12 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: p.accent }}>
                    0{i + 1} · {p.industry}
                  </p>
                  <ShopPhoto
                    src={p.photo}
                    alt={p.photoAlt}
                    className="mt-5"
                    sizes="(min-width: 1024px) 280px, 100vw"
                  />
                  <Link
                    href={`/solutions/${p.floor}`}
                    className="mt-4 inline-block text-sm text-mute hover:text-paper"
                    aria-label={`Open ${p.industry} POS solution`}
                  >
                    Open this shop type →
                  </Link>
                </div>
                <div className="min-w-0">
                  <h2 className="display text-3xl sm:text-4xl">{p.title}</h2>
                  <p className="mt-3 text-sm text-mute">{p.setting}</p>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper">{p.scene}</p>
                  <ol className="mt-8 space-y-3">
                    {p.moves.map((m, n) => (
                      <li key={m} className="flex gap-4 text-sm text-mute">
                        <span className="font-mono text-teal">0{n + 1}</span>
                        {m}
                      </li>
                    ))}
                  </ol>
                  <p className="mt-8 max-w-2xl border-l-2 pl-4 text-sm text-paper" style={{ borderColor: p.accent }}>
                    {p.proof}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </AwesomeFade>
      </section>
      <CtaBand title="Bring your rush, your lots, your tables, your leftover stock." />
    </>
  );
}
