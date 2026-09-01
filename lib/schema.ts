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
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressCountry: site.countryCode,
        },
        areaServed: {
          "@type": "Country",
          name: site.country,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phone,
            email: site.email,
            contactType: "sales",
            areaServed: site.countryCode,
            availableLanguage: ["English", "Urdu"],
          },
        ],
        ...(sameAs.length ? { sameAs } : {}),
        knowsAbout: [
          "Custom software development",
          "Web solutions",
          "Tech consulting",
          "Point of sale",
          site.product,
        ],
        foundingLocation: {
          "@type": "Place",
          name: `${site.city}, ${site.country}`,
        },
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
          "Provisioned POS and shop ERP for grocery, pharmacy, restaurant, and garments. Offline-first. Owner-locked profit.",
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
}: {
  title: string;
  description: string;
  path: string;
  date: string;
}): JsonLd {
  const url = `${site.url}${path}`;
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
    image: `${site.url}${site.ogImage}`,
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
