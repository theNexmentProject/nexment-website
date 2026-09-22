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
    date: "2026-09-18",
    displayDate: "September 18, 2026",
    image: "/images/blog/building-cliva.webp",
  },
  {
    slug: "why-small-tools-matter",
    title: "Why Small Tools Matter",
    description:
      "A look at why focused developer tools can sometimes be more useful than trying to solve everything with one large system.",
    date: "2026-09-12",
    displayDate: "September 12, 2026",
    image: "/images/blog/small-tools.webp",
  },
  {
    slug: "designing-for-developers",
    title: "Designing for Developers",
    description:
      "Thoughts on building software that stays understandable, predictable, and pleasant to work with.",
    date: "2026-09-05",
    displayDate: "September 5, 2026",
    image: "/images/blog/designing-for-developers.webp",
  },
];

export default featuredBlogs;
