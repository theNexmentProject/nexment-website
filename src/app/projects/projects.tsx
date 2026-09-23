"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import projects from "@/data/project-list";
import styles from "./page.module.css";

import Navbar from "@/components/layouts/navbar/navbar";
import Footer from "@/components/layouts/footer/footer";

export default function Projects() {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) => {
    const query = search.toLowerCase();

    return (
      project.name.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.language.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <>
      <Navbar />
      <main className={styles.projects}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>
            <i className="fa-solid fa-code" />
            What we're building
          </span>

          <h1>Ideas turned into projects.</h1>

          <p>
            A collection of tools, experiments, and products built by Nexment.
          </p>
        </section>

        <section className={styles.projectSection}>
          <div className={styles.searchWrapper}>
            <i className="fa-solid fa-magnifying-glass" />

            <input
              type="search"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search projects"
            />

            {search && (
              <button
                className={styles.clearButton}
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            )}
          </div>

          {filteredProjects.length > 0 ? (
            <div className={styles.grid}>
              {filteredProjects.map((project) => (
                <article className={styles.card} key={project.slug}>
                  <div className={styles.banner}>
                    <Image
                      src={project.image}
                      alt={`${project.name} banner`}
                      fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                    />

                    <span className={styles.status}>
                      <span />
                      {project.status}
                    </span>
                  </div>

                  <div className={styles.content}>
                    <div className={styles.projectHeader}>
                      <div className={styles.logo}>
                        <Image
                          src={project.logo}
                          alt=""
                          width={48}
                          height={48}
                        />
                      </div>

                      <div>
                        <h2>{project.name}</h2>

                        <span className={styles.language}>
                          <i className="fa-solid fa-code" />
                          {project.language}
                        </span>
                      </div>
                    </div>

                    <p className={styles.description}>{project.description}</p>

                    <div className={styles.tags}>
                      {project.tags.map((tag) => (
                        <span key={tag}>
                          <i className="fa-solid fa-tag" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className={styles.footer}>
                      <Link
                        href={`/projects/${project.slug}`}
                        className={styles.projectButton}
                      >
                        View project
                        <i className="fa-solid fa-arrow-right" />
                      </Link>

                      <div className={styles.links}>
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.name} GitHub`}
                          >
                            <i className="fa-brands fa-github" />
                          </a>
                        )}

                        {project.links.docs && (
                          <Link
                            href={project.links.docs}
                            aria-label={`${project.name} documentation`}
                          >
                            <i className="fa-solid fa-book" />
                          </Link>
                        )}

                        {project.links.youtube && (
                          <a
                            href={project.links.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.name} YouTube`}
                          >
                            <i className="fa-brands fa-youtube" />
                          </a>
                        )}

                        {project.links.website && (
                          <a
                            href={project.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.name} website`}
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <i className="fa-solid fa-magnifying-glass" />
              <h2>No projects found</h2>
              <p>Try searching for something else.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
