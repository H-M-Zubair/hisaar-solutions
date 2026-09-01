import { notFound } from "next/navigation";
import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { posts, getPost } from "@/lib/blog";
import { ShopPhoto } from "@/components/ui/shop-photo";
import { PageCrumbs } from "@/components/layout/page-crumbs";
import { AwesomeFade } from "@/components/motion/awesome-reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    ogType: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
    image: { url: post.photo, alt: post.photoAlt },
  });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.seoDescription,
          path: `/blog/${post.slug}`,
          date: post.date,
          image: post.photo,
          imageAlt: post.photoAlt,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Stories", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <header className="border-b border-line bg-mesh">
        <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 sm:py-24">
          <AwesomeFade direction="up" duration={700} fraction={0}>
            <PageCrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Stories", href: "/blog" },
                { name: post.title },
              ]}
            />
            <p className="eyebrow">
              {post.date} · {post.kicker} · {post.reading}
            </p>
            <h1 className="display mt-4 text-4xl sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-mute">{post.excerpt}</p>
            <ShopPhoto
              src={post.photo}
              alt={post.photoAlt}
              className="mt-10"
              sizes="(min-width: 720px) 720px, 100vw"
              priority
            />
          </AwesomeFade>
        </div>
      </header>
      <div className="mx-auto max-w-[720px] space-y-6 px-5 py-16 text-base leading-relaxed text-paper sm:px-8">
        {post.body.map((para, i) => (
          <p key={para.slice(0, 24)} className={i === 0 ? "text-paper" : "text-mute"}>
            {para}
          </p>
        ))}
        <p className="pt-8">
          <Link href="/blog" className="text-sm text-teal" aria-label="Back to stories">
            ← Stories
          </Link>
        </p>
      </div>
    </article>
  );
}
