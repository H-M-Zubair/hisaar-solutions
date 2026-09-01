import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { industryList } from "@/lib/industries";
import { posts } from "@/lib/blog";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const abs = (path: string) =>
    `${site.url}${path.startsWith("/") ? path : `/${path}`}`;

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: Freq;
    images?: string[];
  }[] = [
    { path: "", priority: 1, changeFrequency: "weekly", images: [abs(site.ogImage)] },
    {
      path: "/products",
      priority: 0.9,
      changeFrequency: "weekly",
      images: industryList.map((i) => abs(i.photo)),
    },
    { path: "/solutions", priority: 0.9, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    {
      path: "/work",
      priority: 0.7,
      changeFrequency: "monthly",
      images: industryList.map((i) => abs(i.photo)),
    },
    {
      path: "/blog",
      priority: 0.8,
      changeFrequency: "weekly",
      images: posts.map((p) => abs(p.photo)),
    },
  ];

  const industries = industryList.map((ind) => ({
    url: `${site.url}/solutions/${ind.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
    images: [abs(ind.photo)],
  }));

  const journal = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    images: [abs(p.photo)],
  }));

  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      ...(r.images ? { images: r.images } : {}),
    })),
    ...industries,
    ...journal,
  ];
}
