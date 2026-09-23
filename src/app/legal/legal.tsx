"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function LegalPage() {
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
          <i className="fa-solid fa-arrow-left" />
          <span>Back to home</span>
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>LEGAL</p>
          <h1>Legal</h1>
          <p className={styles.intro}>
            A simple overview of the terms that apply to using Nexment and how
            we handle the limited information we collect.
          </p>
        </header>

        <div className={styles.content}>
          <section id="terms" className={styles.section}>
            <p className={styles.sectionNumber}>01</p>

            <h2>Terms and Conditions</h2>

            <p>
              By accessing or using The Nexment Project and its websites,
              software, and services, you agree to use them responsibly and in
              accordance with applicable laws.
            </p>

            <p>
              Nexment projects are provided as described in their respective
              repositories and documentation. While we aim to build reliable
              software, projects may contain bugs, limitations, or change over
              time.
            </p>

            <p>
              You are responsible for how you use Nexment software and for
              reviewing the license and documentation applicable to each
              individual project.
            </p>

            <p>
              We may update, modify, discontinue, or replace parts of the
              website or services as the project evolves.
            </p>
          </section>

          <section id="privacy" className={styles.section}>
            <p className={styles.sectionNumber}>02</p>

            <h2>Privacy Policy</h2>

            <p>
              Nexment is designed with privacy in mind. We do not intentionally
              collect personal information beyond what is necessary for the
              limited features we provide.
            </p>

            <h3>Newsletter</h3>

            <p>
              If you subscribe to the Nexment newsletter, we collect your email
              address so that we can send you newsletter updates.
            </p>

            <p>
              Your email address is not sold or used for unrelated purposes. You
              can unsubscribe from the newsletter at any time.
            </p>

            <h3>Other information</h3>

            <p>
              We do not intentionally collect information such as your name,
              address, phone number, or other personal details through the
              website unless a feature explicitly requires it.
            </p>

            <h3>Changes</h3>

            <p>
              This policy may be updated when Nexment introduces new features or
              changes how information is handled. Any significant changes will
              be reflected on this page.
            </p>
          </section>
        </div>

        <footer className={styles.footer}>
          <p>Questions about these terms or our privacy practices?</p>

          <a href="mailto:contact@nexment.in">contact@nexment.in</a>
        </footer>
      </div>

      {showTop && (
        <button
          type="button"
          className={styles.topButton}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Go to top"
        >
          <i className="fa-solid fa-arrow-up" />
        </button>
      )}
    </main>
  );
}
