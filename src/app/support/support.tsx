"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function SupportPage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.homeButton}>
          Go home
        </Link>

        <section className={styles.hero}>
          <p className={styles.eyebrow}>SUPPORT</p>

          <h1>We’re still building this.</h1>

          <p className={styles.description}>
            A dedicated Nexment support system is not available yet. For now,
            there are still a few ways to get help.
          </p>
        </section>

        <section className={styles.options}>
          <article className={styles.card}>
            <span className={styles.number}>01</span>

            <h2>Check the repository</h2>

            <p>
              Most project-specific questions and usage information can be found
              in the project README or documentation.
            </p>

            <Link
              href="https://github.com/theNexmentProject"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              Visit GitHub
            </Link>
          </article>

          <article className={styles.card}>
            <span className={styles.number}>02</span>

            <h2>Report an issue</h2>

            <p>
              Found a bug or something that does not work as expected? Open an
              issue in the relevant project repository.
            </p>

            <Link
              href="https://github.com/theNexmentProject"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              Open GitHub
            </Link>
          </article>

          <article className={styles.card}>
            <span className={styles.number}>03</span>

            <h2>Contact us</h2>

            <p>
              For general questions, suggestions, or anything that does not
              belong in a repository issue, send us an email.
            </p>

            <a href="mailto:contact@nexment.in" className={styles.cardLink}>
              contact@nexment.in
            </a>
          </article>
        </section>

        <section className={styles.notice}>
          <p className={styles.noticeLabel}>CURRENT STATUS</p>

          <h2>Dedicated support is coming later.</h2>

          <p>
            Nexment is still growing. As the projects and community grow, a
            proper support system will be introduced here.
          </p>
        </section>

        <div className={styles.bottom}>
          <Link href="/" className={styles.backButton}>
            Back to home
          </Link>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          className={styles.topButton}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Go to top"
        >
          ↑
        </button>
      )}
    </main>
  );
}
