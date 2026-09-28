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

{
  /* <div className={styles.content}>
  <section>
    <h2>It started with our own tools</h2>

    <p>
      We build a lot of CLI tools, so we wanted a simple foundation.
    </p>

    <ul>
      <li>Commands</li>
      <li>Arguments</li>
      <li>Terminal output</li>
    </ul>
  </section>

  <section>
    <h2>Starting small</h2>

    <p>
      Cliva focuses on the problems we actually have and grows from
      there.
    </p>

    <p className={styles.highlight}>
      Build what is useful. Keep it simple.
    </p>
  </section>
</div> */
}
