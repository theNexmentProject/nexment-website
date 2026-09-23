import type { Metadata } from "next";
import Blogs from "./blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read articles, ideas, and things worth reading from The Nexment Project.",
};

export default function Page() {
  return <Blogs />;
}
