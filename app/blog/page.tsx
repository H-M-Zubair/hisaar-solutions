import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { posts } from "@/lib/blog";
import { ShopPhoto } from "@/components/ui/shop-photo";
import { AwesomeFade } from "@/components/motion/awesome-reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Stories",
  description:
    "Simple notes from Hisaar Solutions: when bijli goes, four shop floors, seeing profit from home, and how we set up your shop.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Stories", path: "/blog" },
        ])}
      />
      <PageHero
        kicker="Stories"
        title="Notes from the shop floor."
        lede="Short, plain stories. No jargon. The same problems a shopkeeper already knows."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Stories" },
        ]}
      />
      <section className="mx-auto max-w-[800px] px-5 py-16 sm:px-8">
        <AwesomeFade direction="up">
          <div>
            {posts.map((p) => (
              <article key={p.slug} className="border-t border-line py-10">
                <ShopPhoto
                  src={p.photo}
                  alt={p.photoAlt}
                  className="mb-6"
                  sizes="(min-width: 800px) 800px, 100vw"
                />
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
