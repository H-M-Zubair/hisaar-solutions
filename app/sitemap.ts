import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { industrySlugs } from "@/lib/industries";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/products",
    "/solutions",
    "/about",
    "/pricing",
    "/work",
    "/blog",
    "/contact",
  ];
  const industries = industrySlugs.map((s) => `/solutions/${s}`);
  const journal = posts.map((p) => `/blog/${p.slug}`);
  return [...staticPaths, ...industries, ...journal].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
