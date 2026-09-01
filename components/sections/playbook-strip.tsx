import Link from "next/link";
import { playbooks } from "@/lib/playbooks";
import { ShopPhoto } from "@/components/ui/shop-photo";

export function PlaybookStrip() {
  return (
    <section className="border-t border-line py-24">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Work</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">
              Four ordinary shop days.
            </h2>
          </div>
          <Link href="/work" className="hidden text-sm text-teal sm:inline">
            All four floors →
          </Link>
        </div>
        <div className="mt-12 grid min-w-0 gap-4 sm:grid-cols-2">
          {playbooks.map((p) => (
            <article key={p.slug} className="overflow-hidden rounded-2xl border border-line bg-ink">
              <ShopPhoto
                src={p.photo}
                alt={p.photoAlt}
                className="rounded-none border-0"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <div className="p-6 sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: p.accent }}>
                  {p.industry}
                </p>
                <h3 className="display mt-3 text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{p.scene}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
