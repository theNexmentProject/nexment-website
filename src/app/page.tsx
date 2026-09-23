import Navbar from "@/components/layouts/navbar/navbar";
import Hero from "@/components/layouts/hero/hero";
import Featured from "@/components/layouts/featured/featured";
import Blogs from "@/components/layouts/blogs/blogs";
import Newsletter from "@/components/layouts/newsletter/newsletter";
import Footer from "@/components/layouts/footer/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Featured />
      <Blogs />
      <Newsletter />
      <Footer />
    </main>
  );
}
