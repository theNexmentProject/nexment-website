import type { Metadata } from "next";
import AboutPage from "./about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about The Nexment Project and our approach to building simple, useful, and open technology.",
};

export default function Page() {
  return <AboutPage />;
}
