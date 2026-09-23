import type { Metadata } from "next";
import SupportPage from "./support";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help, find useful information, and learn more about The Nexment Project.",
};

export default function Page() {
  return <SupportPage />;
}
