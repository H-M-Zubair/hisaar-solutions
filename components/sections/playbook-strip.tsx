import Link from "next/link";
import { playbooks } from "@/lib/playbooks";
import { AwesomeFade, AwesomeSlide } from "@/components/motion/awesome-reveal";

export function PlaybookStrip() {
  return (
    <section className="border-t border-line py-24">
      {/* Intent: scenario playbooks instead of fabricated case-study logos. */}
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <AwesomeFade direction="up">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Work</p>
              <h2 className="display mt-3 text-4xl sm:text-5xl">
                Playbooks, not a logo wall.
              </h2>
            </div>
            <Link href="/work" className="hidden text-sm text-teal sm:inline">
              All four floors →
            </Link>
          </div>
        </AwesomeFade>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2">
          {playbooks.map((p, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <AwesomeSlide key={p.slug} direction={fromLeft ? "left" : "right"} delay={i * 80}>
                <article className="bg-ink p-6 sm:p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: p.accent }}>
                    {p.industry}
                  </p>
                  <h3 className="display mt-3 text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{p.scene}</p>
                </article>
              </AwesomeSlide>
            );
          })}
        </div>
      </div>
    </section>
  );
}
