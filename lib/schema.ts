import { site } from "./site";
import { faqs } from "./pricing";

type JsonLd = Record<string, unknown>;

const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;
const logoId = `${site.url}/#logo`;

export function organizationGraph(): JsonLd {
  const sameAs = [...site.sameAs];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageObject",
        "@id": logoId,
        url: `${site.url}${site.logo}`,
        contentUrl: `${site.url}${site.logo}`,
        caption: site.name,
        name: `${site.name} logo`,
      },
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": orgId,
        name: site.name,
        url: site.url,
        logo: { "@id": logoId },
        image: { "@id": logoId },
        description: site.description,
        email: site.email,
        telephone: site.phone,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phone,
            email: site.email,
            contactType: "sales",
            availableLanguage: ["English", "Urdu"],
          },
        ],
        ...(sameAs.length ? { sameAs } : {}),
        knowsAbout: [
          "Custom software development",
          "SaaS product development",
          "B2B software",
          "Shop ERP",
          "Point of sale",
          "Grocery POS",
          "Pharmacy POS",
          "Restaurant POS",
          "Retail POS",
          site.product,
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "en-PK",
        publisher: { "@id": orgId },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${site.url}/products#app`,
        name: site.product,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Android",
        url: `${site.url}/products`,
        description:
          "Omni Ledger is a multi-sector POS developed by Hisaar Solutions for grocery, pharmacy, restaurant, and retail — clothes, mobile shops, and more.",
        screenshot: `${site.url}/photos/grocery-floor.jpg`,
        image: `${site.url}${site.ogImage}`,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "PKR",
          lowPrice: "1999",
          highPrice: "12500",
          offerCount: 4,
        },
        provider: { "@id": orgId },
      },
    ],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  date,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  date: string;
  image?: string;
  imageAlt?: string;
}): JsonLd {
  const url = `${site.url}${path}`;
  const img = image
    ? `${site.url}${image.startsWith("/") ? image : `/${image}`}`
    : `${site.url}${site.ogImage}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    url,
    mainEntityOfPage: url,
    author: { "@id": orgId },
    publisher: { "@id": orgId },
    image: {
      "@type": "ImageObject",
      url: img,
      contentUrl: img,
      caption: imageAlt ?? title,
    },
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  image,
}: {
  name: string;
  description: string;
  path: string;
  image: string;
}): JsonLd {
  const img = `${site.url}${image.startsWith("/") ? image : `/${image}`}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    provider: { "@id": orgId },
    image: img,
    serviceType: "Point of sale software",
  };
}

export function contactPageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${site.name}`,
    url: `${site.url}/contact`,
    mainEntity: { "@id": orgId },
  };
}
