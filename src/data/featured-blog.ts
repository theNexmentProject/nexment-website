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
    date: "2026-10-06",
    displayDate: "October 6, 2026",
    image: "/images/projects/cliva-banner.png",
  },
];

export default featuredBlogs;
