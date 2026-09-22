import Image from "next/image";
import Link from "next/link";
import featuredBlogs from "@/data/featured-blog";
import styles from "./blogs.module.css";

export default function Blogs() {
  const blogs = featuredBlogs.slice(0, 3);

  return (
    <section className={styles.section} aria-labelledby="attachy-title">
      <div className={styles.header}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>BLOGS</span>

          <h2 id="attachy-title">Things worth reading.</h2>

          <p>
            Ideas, experiments, lessons, and notes from the things we build at
            Nexment.
          </p>
        </div>

        <Link href="/blogs" className={styles.allLink}>
          View all
        </Link>
      </div>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <article className={styles.card} key={blog.slug}>
            <Link
              href={`/blogs/${blog.slug}`}
              className={styles.imageLink}
              aria-label={`Read ${blog.title}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={blog.image}
                  alt=""
                  fill
                  sizes="
                    (max-width: 600px) 100vw,
                    (max-width: 900px) 50vw,
                    33vw
                  "
                  className={styles.image}
                />
              </div>
            </Link>

            <div className={styles.content}>
              <time dateTime={blog.date}>{blog.displayDate}</time>

              <h3>
                <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
              </h3>

              <p>{blog.description}</p>

              <Link href={`/blogs/${blog.slug}`} className={styles.read}>
                Read article →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
