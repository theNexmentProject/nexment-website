export type FeaturedBlog = {
  slug: string;
  title: string;
  description: string;
  date: string;
  displayDate: string;
  image: string;
};

const featuredBlogs: FeaturedBlog[] = [
  {
    slug: "building-cliva",
    title: "Building Cliva",
    description:
      "Why Nexment is building a modular Rust toolkit for creating reliable and developer-friendly command-line applications.",
    date: "2026-09-23",
    displayDate: "September 23, 2026",
    image: "/images/projects/cliva-banner.webp",
  },
];

export default featuredBlogs;
