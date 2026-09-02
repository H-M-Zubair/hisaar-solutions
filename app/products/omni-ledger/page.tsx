import { permanentRedirect } from "next/navigation";
import { paths } from "@/lib/paths";

export default function OmniLedgerLegacyRedirect() {
  permanentRedirect(paths.product);
}
