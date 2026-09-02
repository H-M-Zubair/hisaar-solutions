import { permanentRedirect } from "next/navigation";
import { paths } from "@/lib/paths";

export default function SolutionsRedirect() {
  permanentRedirect(paths.floors);
}
