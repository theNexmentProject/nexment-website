import Link from "next/link";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <main className={styles.hero}>
      <div className={styles.heroContainer}>
        <section className={styles.terminal}>
          <header className={styles.windowHeader}>
            <div className={styles.windowControls}>
              <span className={styles.close} />
              <span className={styles.minimize} />
              <span className={styles.maximize} />
            </div>

            <div className={styles.windowTitle}>The Nexment Project</div>

            <div className={styles.windowSpacer} />
          </header>

          <div className={styles.terminalContent}>
            <div className={styles.projectImage}>
              <img src="/logo.png" className={styles.logo} alt="Nexment Logo" />
            </div>

            <div className={styles.projectContent}>
              <h1>The Nexment Project</h1>

              <div className={styles.tagline}>
                Building simple, open-source tools for developers and builders.
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryButton}>
              <i className="fa-solid fa-compass" /> Explore Projects{" "}
              <i className="fa-solid fa-arrow-right" />
            </Link>

            <Link href="/projects/cliva" className={styles.secondaryButton}>
              Explore Cliva
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
