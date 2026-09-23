export interface Project {
  name: string;
  slug: string;
  description: string;
  image: string;
  logo: string;
  language: string;
  status: "Active" | "In Development" | "Archived";
  tags: string[];
  links: {
    github?: string;
    docs?: string;
    youtube?: string;
    website?: string;
  };
}

const projects: Project[] = [
  {
    name: "Cliva",
    slug: "cliva",
    description:
      "A Rust toolkit for building reliable, polished, and developer-friendly command-line applications.",
    image: "/images/projects/cliva-banner.webp",
    logo: "/images/projects/cliva-logo.webp",
    language: "Rust",
    status: "In Development",
    tags: ["Rust", "CLI", "Toolkit", "Library"],
    links: {
      github: "https://github.com/theNexmentProject/cliva",
      docs: "https://docs.rs/cliva",
      youtube: "https://youtube.com/@NexmentProject",
    },
  },

  {
    name: "Cliva IO",
    slug: "cliva",
    description:
      "A standalone terminal input and output toolkit for Rust CLI applications, providing formatted output, user input, prompts, status messages, tables, and other terminal UI utilities.",
    image: "/images/projects/cliva-banner.webp",
    logo: "/images/projects/cliva-logo.webp",
    language: "Rust",
    status: "In Development",
    tags: ["Rust", "Terminal", "I/O", "CLI", "Library"],
    links: {
      github: "https://github.com/theNexmentProject/cliva",
      docs: "https://docs.rs/cliva-io",
      /* youtube: "https://youtube.com/@NexmentProject", */
    },
  },
];

export default projects;
