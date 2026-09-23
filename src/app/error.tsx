"use client";

import styles from "./page.module.css";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.code}>500</p>
        <h1>Something went wrong</h1>
        <p className={styles.description}>
          An unexpected error occurred. Please try again.
        </p>

        <button onClick={() => reset()} className={styles.button}>
          Try again
        </button>
      </div>
    </main>
  );
}
