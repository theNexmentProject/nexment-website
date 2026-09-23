import type { Metadata } from "next";
import SearchPage from "./search";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search projects, blog posts, and other content from The Nexment Project.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SearchPage />;
}
