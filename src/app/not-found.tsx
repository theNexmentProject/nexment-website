import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.code}>404</p>
        <h1>Page not found</h1>
        <p className={styles.description}>
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link href="/" className={styles.link}>
          Go back home
        </Link>
      </div>
    </main>
  );
}
