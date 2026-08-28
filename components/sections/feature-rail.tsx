import Link from "next/link";
import { modules } from "@/lib/features";
import { AwesomeFade } from "@/components/motion/awesome-reveal";
import { TiltCard } from "@/components/motion/tilt-card";

export function FeatureRail() {
  return (
    <section className="py-24 sm:py-32">
      {/* Intent: a module index like a ledger contents page — eight shipped facts, not a feature dump. */}
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <AwesomeFade direction="up">
          <p className="eyebrow">Shipped</p>
          <h2 className="display mt-3 max-w-xl text-4xl sm:text-5xl">
            What the till actually does.
          </h2>
          <p className="mt-4 max-w-lg text-mute">
            Demo only what is built. Impressive is smooth — not a promise of JazzCash
            inside the till, or fifty branches.
          </p>
        </AwesomeFade>
        <div className="mt-14 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m, i) => (
            <AwesomeFade key={m.id} direction="up" delay={i * 70} className="h-full min-h-0">
              <TiltCard className="h-full">
                <article className="flex h-full min-h-[220px] flex-col rounded-2xl border border-line bg-surface p-5">
                  <p className="font-mono text-[11px] text-teal">0{i + 1}</p>
                  <h3 className="mt-3 font-display text-xl tracking-tight">{m.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{m.body}</p>
                </article>
              </TiltCard>
            </AwesomeFade>
          ))}
        </div>
        <p className="mt-8 text-sm text-mute">
          Full walkthrough on the{" "}
          <Link href="/products" className="text-teal hover:underline">
            Omni Ledger
          </Link>{" "}
          page.
        </p>
      </div>
    </section>
  );
}
