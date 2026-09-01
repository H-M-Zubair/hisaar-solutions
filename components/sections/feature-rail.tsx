import Link from "next/link";
import { modules } from "@/lib/features";
import { TiltCard } from "@/components/motion/tilt-card";

export function FeatureRail() {
  return (
    <section className="overflow-x-clip py-24 sm:py-32">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <p className="eyebrow">What you get</p>
        <h2 className="display mt-3 max-w-xl text-4xl sm:text-5xl">
          What the shop actually does.
        </h2>
        <p className="mt-4 max-w-lg text-mute">
          No big words. These are the things a shop needs every day — billing,
          udhaar, stock, and seeing your money.
        </p>
        <div className="mt-14 grid min-w-0 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m, i) => (
            <TiltCard key={m.id} className="h-full">
              <article className="flex h-full min-h-[220px] flex-col rounded-2xl border border-line bg-surface p-5">
                <p className="font-mono text-[11px] text-teal">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl tracking-tight">{m.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{m.body}</p>
              </article>
            </TiltCard>
          ))}
        </div>
        <p className="mt-8 text-sm text-mute">
          Plans and prices on the{" "}
          <Link href="/pricing" className="text-teal hover:underline">
            Pricing
          </Link>{" "}
          page.
        </p>
      </div>
    </section>
  );
}
