import type { Metadata } from "next";
import LegalPage from "./legal";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Read the Terms and Conditions and Privacy Policy for The Nexment Project.",
};

export default function Page() {
  return <LegalPage />;
}
