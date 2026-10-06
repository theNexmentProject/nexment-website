"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function SupportUsPage() {
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
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          <span>Go home</span>
        </Link>

        <section className={styles.hero}>
          <p className={styles.eyebrow}>SUPPORT NEXMENT</p>

          <h1>Help us keep building.</h1>

          <p className={styles.description}>
            Nexment is built by developers and supported by the people who use
            it. You do not need to spend money to support us. Your time,
            feedback, code, content, and even a simple share can make a
            difference.
          </p>
        </section>

        <section className={styles.options}>
          <article className={styles.card}>
            <span className={styles.number}>01</span>

            <div className={styles.icon}>
              <i className="fa-solid fa-share-nodes" aria-hidden="true" />
            </div>

            <h2>Share Nexment</h2>

            <p>
              Tell other developers about Nexment. Share our projects, website,
              releases, or anything you find useful.
            </p>

            <span className={styles.cardLink}>Spread the word</span>
          </article>

          <article className={styles.card}>
            <span className={styles.number}>02</span>

            <div className={styles.icon}>
              <i className="fa-solid fa-code" aria-hidden="true" />
            </div>

            <h2>Contribute code</h2>

            <p>
              Help improve our open source projects by fixing bugs, adding
              features, improving performance, or contributing ideas.
            </p>

            <span className={styles.cardLink}>Contribute on GitHub</span>
          </article>

          <article className={styles.card}>
            <span className={styles.number}>03</span>

            <div className={styles.icon}>
              <i className="fa-solid fa-bug" aria-hidden="true" />
            </div>

            <h2>Report bugs</h2>

            <p>
              Found something broken or unexpected? Reporting issues helps us
              find problems faster and make Nexment better for everyone.
            </p>

            <span className={styles.cardLink}>Report an issue</span>
          </article>

          <article className={styles.card}>
            <span className={styles.number}>04</span>

            <div className={styles.icon}>
              <i className="fa-solid fa-lightbulb" aria-hidden="true" />
            </div>

            <h2>Share ideas</h2>

            <p>
              Have an idea for a project, feature, improvement, or something
              Nexment could build? We want to hear it.
            </p>

            <span className={styles.cardLink}>Share an idea</span>
          </article>

          <article className={styles.card}>
            <span className={styles.number}>05</span>

            <div className={styles.icon}>
              <i className="fa-solid fa-video" aria-hidden="true" />
            </div>

            <h2>Make content</h2>

            <p>
              Create videos, tutorials, posts, or articles about Nexment and the
              projects you use. Independent content helps more developers
              discover the project.
            </p>

            <span className={styles.cardLink}>Create something</span>
          </article>

          <article className={styles.card}>
            <span className={styles.number}>06</span>

            <div className={styles.icon}>
              <i className="fa-solid fa-book-open" aria-hidden="true" />
            </div>

            <h2>Improve documentation</h2>

            <p>
              Better documentation makes projects easier to understand and use.
              Help us improve examples, guides, explanations, and developer
              resources.
            </p>

            <span className={styles.cardLink}>Improve the docs</span>
          </article>
        </section>

        <section className={styles.donate}>
          <p className={styles.noticeLabel}>NO MONEY REQUIRED</p>

          <h2>Your contribution is more than money.</h2>

          <p>
            Nexment is not accepting monetary donations right now. Until we have
            a proper and transparent system in place, the best way to support us
            is by using our projects, contributing to them, sharing them,
            reporting problems, and helping other developers.
          </p>
        </section>

        <section className={styles.notice}>
          <p className={styles.noticeLabel}>OPEN SOURCE</p>

          <h2>Build with us.</h2>

          <p>
            Whether you write code, report a bug, create a video, improve the
            documentation, suggest an idea, or simply tell someone about
            Nexment, you are helping the project grow.
          </p>
        </section>

        <div className={styles.bottom}>
          <Link href="/" className={styles.backButton}>
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            <span>Back to home</span>
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
          <i className="fa-solid fa-arrow-up" aria-hidden="true" />
        </button>
      )}
    </main>
  );
}
