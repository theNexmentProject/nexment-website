import styles from "./page.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.loaderMain}>
      <div className={styles.loaderContainer}>
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link href="/">
          Go Home <i className="fa-solid fa-home"></i>
        </Link>
      </div>
    </div>
  );
}
