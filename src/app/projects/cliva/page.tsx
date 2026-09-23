import type { Metadata } from "next";
import ClivaPage from "./cliva";

export const metadata: Metadata = {
  title: "Cliva",
  description:
    "Cliva is a Rust toolkit for building reliable, polished, and developer-friendly command-line applications.",
  keywords: [
    "Cliva",
    "Rust",
    "Rust CLI",
    "CLI toolkit",
    "command line",
    "cliva-io",
    "Nexment",
  ],
  openGraph: {
    title: "Cliva — Rust CLI Toolkit",
    description:
      "A Rust toolkit for building reliable, polished, and developer-friendly command-line applications.",
    type: "website",
    url: "https://app.nexment.in/projects/cliva",
    siteName: "The Nexment Project",
  },
  twitter: {
    card: "summary",
    title: "Cliva — Rust CLI Toolkit",
    description:
      "A Rust toolkit for building reliable, polished, and developer-friendly command-line applications.",
  },
  alternates: {
    canonical: "https://app.nexment.in/projects/cliva",
  },
};

export default function Page() {
  return <ClivaPage />;
}
