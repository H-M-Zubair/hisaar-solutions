import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/metadata";
import { paths } from "@/lib/paths";
import {
  industrySlugs,
  industries,
  type IndustrySlug,
} from "@/lib/industries";
import {
  GroceryPage,
  PharmacyPage,
  RestaurantPage,
  RetailPage,
} from "@/components/sections/industry-pages";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const ind = industries[params.slug as IndustrySlug];
  if (!ind) return {};
  return pageMeta({
    title: `${ind.name} POS`,
    description: ind.seoDescription,
    path: paths.floor(ind.slug),
    image: { url: ind.photo, alt: ind.photoAlt },
    keywords: [
      `${ind.name} POS`,
      `${ind.name.toLowerCase()} POS Pakistan`,
      "Omni Ledger",
      "Hisaar Solutions",
    ],
  });
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as IndustrySlug;
  const ind = industries[slug];
  if (!ind) notFound();

  const crumbs = (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Floors", path: paths.floors },
          { name: `${ind.name} POS`, path: paths.floor(ind.slug) },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: `${ind.name} POS`,
          description: ind.seoDescription,
          path: paths.floor(ind.slug),
          image: ind.photo,
        })}
      />
    </>
  );

  if (slug === "grocery")
    return (
      <>
        {crumbs}
        <GroceryPage />
      </>
    );
  if (slug === "pharmacy")
    return (
      <>
        {crumbs}
        <PharmacyPage />
      </>
    );
  if (slug === "restaurant")
    return (
      <>
        {crumbs}
        <RestaurantPage />
      </>
    );
  return (
    <>
      {crumbs}
      <RetailPage />
    </>
  );
}
