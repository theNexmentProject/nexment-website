import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <main className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logoLink}>
          <img src="/logo.png" className={styles.logo} alt="Nexment Logo" />
        </Link>

        <Link className={styles.navLink} href="https://docs.nexment.in">
          Docs
        </Link>

        <Link className={styles.mobileNavLink} href="https://docs.nexment.in">
          <i className="fa-solid fa-file-lines" />
        </Link>

        <Link className={styles.navLink} href="/projects">
          Projects
        </Link>

        <Link className={styles.mobileNavLink} href="/projects">
          <i className="fa-solid fa-folder-open" />
        </Link>

        <Link className={styles.navLink} href="/libraries">
          Libraries
        </Link>

        <Link className={styles.mobileNavLink} href="/libraries">
          <i className="fa-solid fa-box-open" />
        </Link>

        <Link
          className={styles.iconButton}
          href="https://github.com/theNexmentProject"
        >
          <i className="fa-brands fa-github" />
        </Link>

        <Link className={styles.iconButton} href="/search">
          <i className="fa-solid fa-magnifying-glass" />
        </Link>
      </nav>
    </main>
  );
}
