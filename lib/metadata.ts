import type { Metadata } from "next";
import { site } from "./site";

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${site.url}${path}`;
  const full = path === "/" ? site.name : `${title} · ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: full,
      description,
      url,
      siteName: site.name,
      locale: "en_PK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: full,
      description,
    },
  };
}
