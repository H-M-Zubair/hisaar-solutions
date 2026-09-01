import type { Metadata } from "next";
import { site } from "./site";

const ogImage = {
  url: `${site.url}${site.ogImage}`,
  width: 1200,
  height: 630,
  alt: site.title,
  type: "image/png",
} as const;

export function pageMeta({
  title,
  description,
  path,
  ogType = "website",
  publishedTime,
  modifiedTime,
  keywords,
  noIndex = false,
}: {
  title?: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const isHome = path === "/";
  const fullTitle = isHome || !title ? site.title : `${title} | ${site.name}`;

  return {
    title: isHome || !title ? { absolute: site.title } : title,
    description,
    keywords: keywords ?? [...site.keywords],
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: ogType,
      images: [ogImage],
      ...(ogType === "article" && publishedTime
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: ogImage.url, alt: ogImage.alt }],
    },
  };
}
