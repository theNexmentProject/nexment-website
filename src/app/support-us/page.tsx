import type { Metadata } from "next";
import SupportUsPage from "./support-us";

export const metadata: Metadata = {
  title: "Support Us",
  description:
    "Support The Nexment Project by sharing, contributing code, reporting bugs, creating content, improving documentation, and helping the community grow.",
};

export default function Page() {
  return <SupportUsPage />;
}
