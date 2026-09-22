import styles from "./featured.module.css";

export default function Featured() {
  return (
    <main className={styles.main}>
      <section className={styles.left}>
        <span className={styles.label}>NEXT BUILD</span>

        <h1>Ideas waiting to be built.</h1>

        <p className={styles.intro}>
          Not every idea has to wait for us. Some projects are planned for the
          future, and you can start building them yourself if one catches your
          interest.
        </p>

        <div className={styles.idea}>
          <span className={styles.ideaNumber}>01</span>

          <h2>Docsly</h2>

          <p>
            Docsly is a small documentation tool designed to turn simple
            Markdown-based documents into fully functional documentation
            websites.
          </p>

          <p>
            A Docsly document is essentially Markdown with additional Docsly
            blocks that can introduce interactive and richer documentation
            components that ordinary Markdown cannot provide on its own.
          </p>

          <span className={styles.tag}>Future Project</span>
        </div>

        <div className={styles.suggestion}>
          <strong>Have an idea?</strong>

          <p>
            Suggest a feature, improvement, or idea for a future Nexment
            project.
          </p>

          <a href="mailto:labs@nexment.in">labs@nexment.in</a>
        </div>
      </section>

      <section className={styles.right}>
        <span className={styles.label}>CURRENT PROJECT</span>

        <div className={styles.projectHeader}>
          <div>
            <h1>Cliva</h1>

            <p className={styles.subtitle}>
              A Rust toolkit for building reliable, polished, and
              developer-friendly command-line applications.
            </p>
          </div>

          <span className={styles.status}>Under active development</span>
        </div>

        <p className={styles.description}>
          Cliva is a collection of focused Rust libraries designed to make CLI
          development faster, cleaner, and less repetitive. Instead of forcing
          everything into one large library, Cliva is organized as a Cargo
          workspace containing independently usable crates.
        </p>

        <div className={styles.crates}>
          <article className={styles.crate}>
            <span className={styles.crateIndex}>01</span>

            <h2>cliva</h2>

            <p>
              The core CLI development library. It provides the building blocks
              required to create command-line applications, including commands,
              arguments, options, flags, subcommands, parsing, and related CLI
              functionality.
            </p>

            <code>cliva = &quot;0.1&quot;</code>
          </article>

          <article className={styles.crate}>
            <span className={styles.crateIndex}>02</span>

            <h2>cliva-io</h2>

            <p>
              A standalone terminal input and output toolkit for Rust CLI
              applications. It focuses on consistent terminal interaction,
              including formatted output, user input, prompts, status messages,
              tables, and other terminal UI functionality.
            </p>

            <code>cliva-io = &quot;0.1&quot;</code>
          </article>
        </div>

        <div className={styles.design}>
          <div>
            <span className={styles.smallLabel}>DESIGN</span>
            <h2>Focused by design.</h2>
          </div>

          <p>
            The crates are intentionally independent. You can use
            <strong> cliva </strong>
            for CLI development without using
            <strong> cliva-io</strong>, or use
            <strong> cliva-io </strong>
            on its own when you only need terminal interaction.
          </p>
        </div>

        <div className={styles.features}>
          <span>Less boilerplate</span>
          <span>Clear APIs</span>
          <span>Independent components</span>
          <span>Reliable CLI behavior</span>
          <span>Consistent terminal interaction</span>
          <span>Minimal dependencies</span>
        </div>

        <div className={styles.footer}>
          <div>
            <span className={styles.smallLabel}>RUST · CARGO WORKSPACE</span>
            <p>
              APIs are currently evolving and may change before the first stable
              release.
            </p>
          </div>

          <a className={styles.button} href="/libraries/cliva">
            Explore Cliva →
          </a>
        </div>
      </section>

      <div className={styles.mobileCards}>
        <section className={styles.mobileCurrent}>
          <span className={styles.label}>CURRENT PROJECT</span>

          <h1>Cliva</h1>

          <p>
            A Rust toolkit for building reliable and developer-friendly
            command-line applications.
          </p>

          <div className={styles.mobileCrates}>
            <span>cliva — CLI development</span>
            <span>cliva-io — Terminal I/O</span>
          </div>

          <a className={styles.button} href="/libraries/cliva">
            Explore Cliva →
          </a>
        </section>

        <section className={styles.mobileFuture}>
          <span className={styles.label}>NEXT BUILD</span>

          <h2>Docsly</h2>

          <p>
            Markdown-based documentation with additional blocks for creating
            richer and more interactive documentation websites.
          </p>

          <a href="mailto:labs@nexment.in">Suggest an idea</a>
        </section>
      </div>
    </main>
  );
}
