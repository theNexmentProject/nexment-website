import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.loaderMain}>
      <div className={styles.loaderContainer}>
        <h1>Loading...</h1>
      </div>
    </div>
  );
}
