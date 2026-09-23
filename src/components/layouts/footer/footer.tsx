import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link
              href="/"
              className={styles.logoLink}
              aria-label="The Nexment Project home"
            >
              <Image
                src="/logo.png"
                alt="The Nexment Project"
                width={240}
                height={80}
                className={styles.logo}
              />
            </Link>

            <h2 className={styles.projectName}>The Nexment Project</h2>

            <p>
              Building simple, open-source tools for developers and builders.
            </p>
          </div>

          {/* Links */}
          <div className={styles.linkSections}>
            <div className={styles.linkSection}>
              <h3>Project</h3>

              <Link href="/about">About</Link>
              <Link href="/about#contact">Contact</Link>
              <Link href="/support">Support</Link>
            </div>

            <div className={styles.linkSection}>
              <h3>Legal</h3>

              <Link href="/legal#terms">Terms</Link>
              <Link href="/legal#privacy">Privacy</Link>
            </div>

            <div className={styles.linkSection}>
              <h3>Social</h3>

              <a
                href="https://github.com/theNexmentProject"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://x.com/NexmentOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>

              <a
                href="https://youtube.com/@NexmentProject"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Go to top */}
        <div className={styles.topRow}>
          <a href="#top" className={styles.topButton}>
            Go to top
            <i className="fa-solid fa-arrow-up" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Footer bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.bottomContainer}>
          <span>© {new Date().getFullYear()} The Nexment Project</span>

          <span>
            Made with <span aria-label="love">❤️</span> for developers.
          </span>
        </div>
      </div>
    </footer>
  );
}
