import Link from "next/link";
import styles from "./hero.module.css";

const links = [
  { label: "About", href: "/about", icon: "fa-solid fa-circle-info" },
  { label: "Support", href: "/support", icon: "fa-solid fa-life-ring" },
  { label: "Legal", href: "/legal", icon: "fa-solid fa-scale-balanced" },
  {
    label: "Changelog",
    href: "/changelog",
    icon: "fa-solid fa-clock-rotate-left",
  },
  { label: "Contact", href: "/contact", icon: "fa-solid fa-envelope" },
];

export default function Hero() {
  return (
    <main className={styles.hero}>
      <div className={styles.backgroundGlow} />

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

              <nav className={styles.links} aria-label="Nexment links">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    <i className={link.icon} /> {link.label}
                  </Link>
                ))}
              </nav>

              <Link href="/libraries/clivo" className={styles.exploreButton}>
                Explore Clivo (Current Project)
              </Link>
            </div>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryButton}>
              <i className="fa-solid fa-compass" />
              Explore Projects
              <i className="fa-solid fa-arrow-right" />
            </Link>

            <Link href="/libraries" className={styles.secondaryButton}>
              <i className="fa-solid fa-box-open" />
              Explore Libraries
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
