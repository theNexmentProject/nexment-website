"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function AboutPage() {
  const [showTop, setShowTop] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "contact@nexment.in";

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.homeButton}>
          Go home
        </Link>

        <section className={styles.hero}>
          <p className={styles.eyebrow}>ABOUT</p>

          <h1>The Nexment Project</h1>

          <p className={styles.description}>
            Building simple, open-source tools for developers and builders.
          </p>
        </section>

        <section className={styles.content}>
          <h2>What is Nexment?</h2>

          <p>
            The Nexment Project is an independent open-source project focused on
            building practical, reliable, and developer-first software.
          </p>

          <p>
            We build things that are useful. Sometimes it is a developer tool,
            sometimes a library, and sometimes just a simple piece of software
            that solves a problem.
          </p>

          <h2>Our philosophy</h2>

          <p>
            We believe software should be fast, secure, privacy-respecting,
            local-first where it makes sense, and accessible to everyone.
          </p>

          <p>
            Nexment projects are open source and free to use. You can inspect
            the code, learn from it, modify it, and build your own software with
            it.
          </p>

          <h2>How we build</h2>

          <p>
            We prefer simplicity over unnecessary complexity. Projects should be
            minimal, clean, understandable, and friendly to use.
          </p>

          <p>
            We are not trying to build everything. We are trying to build things
            that are worth using.
          </p>

          <h2>Open source</h2>

          <p>
            Nexment is built in the open. Contributions, improvements,
            documentation, testing, and ideas are welcome where a project allows
            them.
          </p>

          <p>
            Every repository may have its own contribution guidelines, so check
            its README and <code>CONTRIBUTING.md</code> before getting started.
          </p>
        </section>

        <section id="contact" className={styles.contact}>
          <p className={styles.eyebrow}>CONTACT</p>

          <h2>Have something to say?</h2>

          <p>
            Whether it is a question, suggestion, feedback, or just something
            worth discussing, you can reach us by email.
          </p>

          <div className={styles.emailBox}>
            <a href={`mailto:${email}`} className={styles.email}>
              {email}
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className={styles.copyButton}
              aria-label="Copy email address"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </section>

        <section className={styles.end}>
          <p>
            Build useful things. Keep them open. Make them better over time.
          </p>

          <strong>Built for developers with ❤️</strong>
        </section>
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
