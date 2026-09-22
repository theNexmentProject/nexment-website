import Navbar from "@/components/layouts/navbar/navbar";
import Hero from "@/components/layouts/hero/hero";
import Featured from "@/components/layouts/featured/featured";
/* import Blogs from "@/components/layouts/blogs/blogs"; */

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Featured />
      {/* <Blogs /> */}
    </main>
  );
}
