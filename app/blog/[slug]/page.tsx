import { notFound } from "next/navigation";
import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { posts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article>
      <header className="border-b border-line bg-mesh">
        <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 sm:py-24">
          <p className="eyebrow">
            {post.date} · {post.kicker} · {post.reading}
          </p>
          <h1 className="display mt-4 text-4xl sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-mute">{post.excerpt}</p>
        </div>
      </header>
      <div className="mx-auto max-w-[720px] space-y-6 px-5 py-16 text-base leading-relaxed text-paper sm:px-8">
        {post.body.map((para) => (
          <p key={para.slice(0, 24)} className="text-mute first:text-paper">
            {para}
          </p>
        ))}
        <p className="pt-8">
          <Link href="/blog" className="text-sm text-teal">
            ← Journal
          </Link>
        </p>
      </div>
    </article>
  );
}
