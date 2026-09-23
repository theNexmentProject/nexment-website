"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import projects from "@/data/project-list";
import featuredBlogs from "@/data/featured-blog";

import styles from "./page.module.css";

import Navbar from "@/components/layouts/navbar/navbar";
import Footer from "@/components/layouts/footer/footer";

type SearchResult = {
  id: string;
  type: "Project" | "Blog";
  name: string;
  description: string;
  href: string;
};

const allResults: SearchResult[] = [
  ...projects.map((project) => ({
    id: `project-${project.slug}`,
    type: "Project" as const,
    name: project.name,
    description: project.description,
    href: `/projects/${project.slug}`,
  })),

  ...featuredBlogs.map((blog) => ({
    id: `blog-${blog.slug}`,
    type: "Blog" as const,
    name: blog.title,
    description: blog.description,
    href: `/blogs/${blog.slug}`,
  })),
];

const RESULTS_PER_PAGE = 6;

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(RESULTS_PER_PAGE);

  const results = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return allResults;
    }

    return allResults.filter((result) => {
      return (
        result.name.toLowerCase().includes(search) ||
        result.description.toLowerCase().includes(search) ||
        result.type.toLowerCase().includes(search)
      );
    });
  }, [query]);

  const visibleResults = results.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(RESULTS_PER_PAGE);
  }, [query]);

  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const element = event.currentTarget;

    const nearBottom =
      element.scrollTop + element.clientHeight >= element.scrollHeight - 100;

    if (nearBottom && visibleCount < results.length) {
      setVisibleCount((current) =>
        Math.min(current + RESULTS_PER_PAGE, results.length),
      );
    }
  }

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.searchArea}>
          <div className={styles.searchHeader}>
            <span className={styles.eyebrow}>
              <i className="fa-solid fa-magnifying-glass" />
              Search Nexment
            </span>

            <h1>Find something worth exploring.</h1>

            <p>Search through our projects, experiments, and articles.</p>
          </div>

          <div className={styles.searchBar}>
            <i className="fa-solid fa-magnifying-glass" />

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects, blogs..."
              aria-label="Search Nexment"
              autoComplete="off"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            )}
          </div>

          <div className={styles.results} onScroll={handleScroll}>
            {visibleResults.length > 0 ? (
              <div className={styles.resultList}>
                {visibleResults.map((result) => (
                  <Link
                    href={result.href}
                    className={styles.result}
                    key={result.id}
                  >
                    <div className={styles.resultContent}>
                      <div className={styles.resultMeta}>
                        <span>{result.type}</span>
                        <i className="fa-solid fa-arrow-right" />
                      </div>

                      <h2>{result.name}</h2>

                      <p>{result.description}</p>
                    </div>

                    <div className={styles.resultIcon}>
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </div>
                  </Link>
                ))}

                {visibleCount < results.length && (
                  <div className={styles.loading}>
                    <i className="fa-solid fa-ellipsis" />
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.empty}>
                <div className={styles.emptyIcon}>
                  <i className="fa-solid fa-magnifying-glass" />
                </div>

                <h2>No results found</h2>

                <p>
                  Nothing matched <strong>"{query}"</strong>.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
