import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { playbooks } from "@/lib/playbooks";
import { AwesomeFade, AwesomeSlide } from "@/components/motion/awesome-reveal";

export const metadata = pageMeta({
  title: "Work",
  description:
    "Omni Ledger scenario playbooks for grocery rush, pharmacy expiry, restaurant tables, and garments dead stock. Not a fake client logo wall.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        kicker="Work"
        title="Four shops. No invented names."
        lede="We do not publish a wall of brands we do not have. These are scenario playbooks from the demo guide — the same stories we walk on the floor."
      />
      <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8">
        {/* Intent: long-form playbooks as editorial cases — setting, moves, proof. */}
        <div className="space-y-20">
          {playbooks.map((p, i) => (
            <article
              key={p.slug}
              className="grid gap-8 border-t border-line pt-12 lg:grid-cols-[200px_1fr]"
            >
              <AwesomeFade direction="left">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: p.accent }}>
                    0{i + 1} · {p.industry}
                  </p>
                  <Link
                    href={`/solutions/${p.industry.toLowerCase()}`}
                    className="mt-4 inline-block text-sm text-mute hover:text-paper"
                  >
                    Open solution →
                  </Link>
                </div>
              </AwesomeFade>
              <AwesomeSlide direction="right" delay={100}>
                <div>
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
              </AwesomeSlide>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Bring your rush, your lots, your tables, your rail." />
    </>
  );
}
