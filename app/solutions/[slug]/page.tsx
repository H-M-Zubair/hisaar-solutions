import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/metadata";
import {
  industrySlugs,
  industries,
  type IndustrySlug,
} from "@/lib/industries";
import {
  GroceryPage,
  PharmacyPage,
  RestaurantPage,
  GarmentsPage,
} from "@/components/sections/industry-pages";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const ind = industries[params.slug as IndustrySlug];
  if (!ind) return {};
  return pageMeta({
    title: `${ind.name} POS`,
    description: ind.seoDescription,
    path: `/solutions/${ind.slug}`,
  });
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as IndustrySlug;
  const ind = industries[slug];
  if (!ind) notFound();

  const crumbs = (
    <JsonLd
      data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Solutions", path: "/solutions" },
        { name: `${ind.name} POS`, path: `/solutions/${ind.slug}` },
      ])}
    />
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
      <GarmentsPage />
    </>
  );
}
