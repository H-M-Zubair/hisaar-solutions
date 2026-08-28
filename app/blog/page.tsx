import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { posts } from "@/lib/blog";
import { AwesomeFade } from "@/components/motion/awesome-reveal";

export const metadata = pageMeta({
  title: "Journal",
  description:
    "Notes from Hisaar on POS, offline queues, industry packs, and provisioned trials. Short, factual, no growth-hack filler.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        kicker="Journal"
        title="Notes from the till."
        lede="Stub posts with real product facts. We would rather publish four honest essays than a content mill."
      />
      <section className="mx-auto max-w-[800px] px-5 py-16 sm:px-8">
        {/* Intent: a quiet index — date, kicker, title — like a studio journal, not a blog theme. */}
        <AwesomeFade direction="up">
          <div>
            {posts.map((p) => (
              <article key={p.slug} className="border-t border-line py-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
                  {p.date} · {p.kicker} · {p.reading}
                </p>
                <h2 className="display mt-3 text-3xl">
                  <Link href={`/blog/${p.slug}`} className="hover:text-teal">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mute">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </AwesomeFade>
      </section>
    </>
  );
}
