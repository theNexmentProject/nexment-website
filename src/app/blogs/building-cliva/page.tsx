import type { Metadata } from "next";
import BuildingCliva from "./building-cliva";
import Navbar from "@/components/layouts/navbar/navbar";

export const metadata: Metadata = {
  title: "Building Cliva",
  description:
    "Why Nexment is building a modular Rust toolkit for creating reliable and developer-friendly command-line applications.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <BuildingCliva />
    </>
  );
}
