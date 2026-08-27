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

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const ind = industries[params.slug as IndustrySlug];
  if (!ind) return {};
  return pageMeta({
    title: `${ind.name} POS`,
    description: ind.lede,
    path: `/solutions/${ind.slug}`,
  });
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as IndustrySlug;
  if (!industries[slug]) notFound();
  if (slug === "grocery") return <GroceryPage />;
  if (slug === "pharmacy") return <PharmacyPage />;
  if (slug === "restaurant") return <RestaurantPage />;
  return <GarmentsPage />;
}
