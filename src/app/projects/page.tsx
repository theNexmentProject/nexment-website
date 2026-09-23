import type { Metadata } from "next";
import Projects from "./projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore open-source projects and developer tools built by The Nexment Project.",
};

export default function Page() {
  return <Projects />;
}
