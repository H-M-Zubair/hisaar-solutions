import type { Metadata } from "next";
import { site } from "./site";

const defaultOg = {
  url: `${site.url}${site.ogImage}`,
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.product} multi-sector POS`,
  type: "image/png",
} as const;

export type PageImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

function absUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMeta({
  title,
  description,
  path,
  ogType = "website",
  publishedTime,
  modifiedTime,
  keywords,
  noIndex = false,
  image,
}: {
  title?: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  noIndex?: boolean;
  image?: PageImage;
}): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const isHome = path === "/";
  const fullTitle = isHome || !title ? site.title : `${title} | ${site.name}`;
  const og = image
    ? {
        url: absUrl(image.url),
        width: image.width ?? 1600,
        height: image.height ?? 1067,
        alt: image.alt,
      }
    : defaultOg;

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
      images: [og],
      ...(ogType === "article" && publishedTime
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: og.url, alt: og.alt }],
    },
  };
}
