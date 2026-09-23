"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import featuredBlogs from "@/data/featured-blog";
import styles from "./page.module.css";

import Navbar from "@/components/layouts/navbar/navbar";
import Footer from "@/components/layouts/footer/footer";

export default function Blogs() {
  const [search, setSearch] = useState("");

  const filteredBlogs = featuredBlogs.filter((blog) => {
    const query = search.toLowerCase();

    return (
      blog.title.toLowerCase().includes(query) ||
      blog.description.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <Navbar />
      <main className={styles.blogs}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>
            <i className="fa-solid fa-pen-nib" />
            From Nexment
          </span>

          <h1>Thoughts, ideas, and things we build.</h1>

          <p>
            Notes about software, development, design, and the ideas behind
            Nexment.
          </p>
        </section>

        <section className={styles.blogSection}>
          <div className={styles.search}>
            <i className="fa-solid fa-magnifying-glass" />

            <input
              type="search"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search articles"
            />

            {search && (
              <button onClick={() => setSearch("")} aria-label="Clear search">
                <i className="fa-solid fa-xmark" />
              </button>
            )}
          </div>

          {filteredBlogs.length > 0 ? (
            <div className={styles.grid}>
              {filteredBlogs.map((blog) => (
                <article className={styles.card} key={blog.slug}>
                  <Link href={`/blogs/${blog.slug}`} className={styles.image}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                  </Link>

                  <div className={styles.content}>
                    <div className={styles.meta}>
                      <span>
                        <i className="fa-regular fa-calendar" />
                        {blog.displayDate}
                      </span>
                    </div>

                    <h2>
                      <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h2>

                    <p>{blog.description}</p>

                    <Link
                      href={`/blogs/${blog.slug}`}
                      className={styles.readMore}
                    >
                      Read article
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <i className="fa-solid fa-magnifying-glass" />
              <h2>No articles found</h2>
              <p>Try a different search.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
