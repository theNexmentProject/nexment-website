import styles from "./page.module.css";

import Navbar from "@/components/layouts/navbar/navbar";
import Hero from "@/components/layouts/hero/hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
