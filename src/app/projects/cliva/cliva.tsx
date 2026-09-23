import styles from "./cliva.module.css";
import Navbar from "@/components/layouts/navbar/navbar";

export default function ClivaPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                <i className="fa-solid fa-terminal" />
                Rust CLI Toolkit
              </span>

              <h1>Cliva</h1>

              <p className={styles.heroDescription}>
                A Rust toolkit for building reliable, polished, and
                developer-friendly command-line applications.
              </p>

              <div className={styles.actions}>
                <a
                  href="https://github.com/theNexmentProject/cliva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.button} ${styles.buttonPrimary}`}
                >
                  <i className="fa-brands fa-github" />
                  View on GitHub
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>

                <a
                  href="#crates"
                  className={`${styles.button} ${styles.buttonSecondary}`}
                >
                  Explore crates
                  <i className="fa-solid fa-arrow-down" />
                </a>
              </div>

              <div className={styles.meta}>
                <span>
                  <i className="fa-solid fa-cube" />
                  Rust
                </span>

                <span>
                  <i className="fa-solid fa-code-branch" />
                  Cargo Workspace
                </span>

                <span>
                  <i className="fa-solid fa-code" />
                  Open Source
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className={styles.section}>
          <div className={`${styles.container} ${styles.intro}`}>
            <div className={styles.sectionTitle}>
              <span className={styles.label}>01 — Overview</span>

              <h2>
                CLI development
                <br />
                without the repetition.
              </h2>
            </div>

            <div className={styles.text}>
              <p>
                Cliva is a collection of focused Rust libraries designed to make
                CLI development faster, cleaner, and less repetitive.
              </p>

              <p>
                Rather than putting everything into one large library, Cliva is
                organized as a Cargo workspace containing independently usable
                crates.
              </p>

              <p className={styles.highlight}>
                Use only what your application needs. Nothing more.
              </p>
            </div>
          </div>
        </section>

        {/* Crates */}
        <section
          id="crates"
          className={`${styles.section} ${styles.cratesSection}`}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.label}>02 — Crates</span>

              <h2>Focused libraries. One workspace.</h2>

              <p>
                Each crate solves a specific part of CLI development and can be
                used independently.
              </p>
            </div>

            <div className={styles.crateGrid}>
              {/* Cliva */}
              <article className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <i className="fa-solid fa-terminal" />
                  </div>

                  <span className={styles.cardNumber}>01</span>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardType}>Core library</span>

                  <h3>cliva</h3>

                  <p>
                    The core CLI development library for commands, arguments,
                    options, flags, subcommands, parsing, and related CLI
                    functionality.
                  </p>

                  <div className={styles.dependency}>
                    <span>Dependency</span>
                    <code>cliva = "0.1"</code>
                  </div>

                  <a
                    href="https://docs.rs/cliva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.textLink}
                  >
                    View documentation
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </div>
              </article>

              {/* Cliva IO */}
              <article className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <i className="fa-solid fa-display" />
                  </div>

                  <span className={styles.cardNumber}>02</span>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardType}>Terminal toolkit</span>

                  <h3>cliva-io</h3>

                  <p>
                    A standalone terminal input and output toolkit providing
                    formatted output, user input, prompts, status messages,
                    tables, and terminal UI utilities.
                  </p>

                  <div className={styles.dependency}>
                    <span>Dependency</span>
                    <code>cliva-io = "0.1"</code>
                  </div>

                  <a
                    href="https://docs.rs/cliva-io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.textLink}
                  >
                    View documentation
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.label}>03 — Architecture</span>

              <h2>Built as independent pieces.</h2>

              <p>
                CLI development and terminal interaction stay separate while
                remaining easy to combine when needed.
              </p>
            </div>

            <div className={styles.workspace}>
              <div className={styles.workspaceHeader}>
                <div className={styles.workspaceIcon}>
                  <i className="fa-solid fa-cubes" />
                </div>

                <div>
                  <strong>Cliva Workspace</strong>
                  <span>Independent crates, shared ecosystem.</span>
                </div>
              </div>

              <div className={styles.workspaceGrid}>
                <div className={styles.workspaceCard}>
                  <div className={styles.workspaceCardIcon}>
                    <i className="fa-solid fa-terminal" />
                  </div>

                  <div>
                    <h3>cliva</h3>
                    <span>CLI Development</span>
                  </div>

                  <ul>
                    <li>Commands</li>
                    <li>Arguments</li>
                    <li>Options</li>
                    <li>Flags</li>
                    <li>Parsing</li>
                    <li>Routing</li>
                  </ul>
                </div>

                <div className={styles.workspaceCard}>
                  <div className={styles.workspaceCardIcon}>
                    <i className="fa-solid fa-desktop" />
                  </div>

                  <div>
                    <h3>cliva-io</h3>
                    <span>Terminal I/O</span>
                  </div>

                  <ul>
                    <li>Input</li>
                    <li>Output</li>
                    <li>Prompts</li>
                    <li>Formatting</li>
                    <li>Status</li>
                    <li>Tables</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className={`${styles.section} ${styles.philosophy}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.label}>04 — Philosophy</span>

              <h2>Why Cliva?</h2>

              <p>
                Cliva focuses on the repetitive parts of CLI development without
                hiding the fundamentals from developers.
              </p>
            </div>

            <div className={styles.featureGrid}>
              <article className={styles.feature}>
                <i className="fa-solid fa-layer-group" />
                <h3>Less boilerplate</h3>
                <p>Avoid repeatedly solving the same common CLI problems.</p>
              </article>

              <article className={styles.feature}>
                <i className="fa-solid fa-code" />
                <h3>Clear APIs</h3>
                <p>
                  Simple and expressive primitives designed to stay predictable.
                </p>
              </article>

              <article className={styles.feature}>
                <i className="fa-solid fa-puzzle-piece" />
                <h3>Independent components</h3>
                <p>
                  Use individual crates without adopting the entire ecosystem.
                </p>
              </article>

              <article className={styles.feature}>
                <i className="fa-solid fa-shield-halved" />
                <h3>Reliable behavior</h3>
                <p>Build consistent and dependable command-line experiences.</p>
              </article>

              <article className={styles.feature}>
                <i className="fa-solid fa-box-open" />
                <h3>Minimal dependencies</h3>
                <p>Keep applications focused without unnecessary complexity.</p>
              </article>

              <article className={styles.feature}>
                <i className="fa-solid fa-wand-magic-sparkles" />
                <h3>Developer friendly</h3>
                <p>
                  Spend more time building your CLI and less time rebuilding its
                  foundations.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Example */}
        <section className={styles.section}>
          <div className={`${styles.container} ${styles.example}`}>
            <div className={styles.exampleContent}>
              <span className={styles.label}>05 — Example</span>

              <h2>Combine what you need.</h2>

              <p>
                Use the core CLI functionality together with terminal I/O when
                your application needs both.
              </p>
            </div>

            <div className={styles.codeWindow}>
              <div className={styles.codeHeader}>
                <span />
                <span />
                <span />

                <small>main.rs</small>
              </div>

              <pre>
                <code>{`use cliva::Command;
use cliva_io::output;

fn main() {
    // CLI logic
    // ...

    output::success(
        "Operation completed successfully."
    );
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Status */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.status}>
              <div className={styles.statusIcon}>
                <i className="fa-solid fa-flask" />
              </div>

              <div>
                <span className={styles.label}>06 — Status</span>

                <h2>Under active development.</h2>

                <p>
                  Cliva has not reached its stable release yet. APIs may change
                  as the project evolves, and breaking changes should be
                  expected before the first stable version.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className={`${styles.section} ${styles.final}`}>
          <div className={styles.container}>
            <span className={styles.label}>07 — Get started</span>

            <h2>Build your next CLI with Cliva.</h2>

            <p>
              Explore the source, follow development, or start experimenting
              with the crates.
            </p>

            <div className={styles.actions}>
              <a
                href="https://github.com/theNexmentProject/cliva"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                <i className="fa-brands fa-github" />
                GitHub
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>

              <a
                href="https://docs.rs/cliva"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonSecondary}`}
              >
                <i className="fa-solid fa-book" />
                Documentation
              </a>
            </div>

            <div className={styles.license}>
              <i className="fa-solid fa-scale-balanced" />
              Apache License 2.0
            </div>
          </div>
        </section>

        {/* Back to top */}
        <a href="#" className={styles.topButton} aria-label="Go to top">
          <i className="fa-solid fa-arrow-up" />
        </a>
      </main>
    </>
  );
}
