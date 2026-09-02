import { permanentRedirect } from "next/navigation";
import { paths } from "@/lib/paths";

export default function SolutionSlugRedirect({
  params,
}: {
  params: { slug: string };
}) {
  if (params.slug === "garments") permanentRedirect(paths.floor("retail"));
  permanentRedirect(paths.floor(params.slug));
}
