import styles from "./page.module.css";

export default function BuildingCliva() {
  return (
    <article className={styles.article}>
      <header className={styles.hero}>
        <span className={styles.eyebrow}>
          <i className="fa-solid fa-hammer" />
          Building Cliva
        </span>

        <h1>Why we are building Cliva</h1>

        <p className={styles.intro}>
          Cliva started from a simple problem: most of the tools we want to
          build at Nexment are command-line tools, and we wanted a CLI library
          made for the way we build them.
        </p>

        <div className={styles.meta}>
          <span>
            <i className="fa-regular fa-clock" />4 min read
          </span>
        </div>
      </header>

      <div className={styles.content}>
        <section>
          <h2>It started with our own tools</h2>

          <p>
            A lot of Nexment projects are built around the terminal. We like CLI
            tools because they are fast, simple, and work well for developers.
          </p>

          <p>
            But while building these tools, we kept running into the same
            problems.
          </p>

          <ul>
            <li>Handling commands and arguments</li>
            <li>Creating useful terminal output</li>
            <li>Making prompts feel consistent</li>
            <li>Showing errors and status messages clearly</li>
            <li>Keeping CLI code clean and easy to understand</li>
          </ul>
        </section>

        <section>
          <h2>We wanted something made for us</h2>

          <p>
            Instead of solving the same problems again for every project, we
            decided to build a library that we could use across Nexment.
          </p>

          <p>That library became Cliva.</p>

          <p>
            The goal is not to make every CLI look the same. The goal is to give
            us simple building blocks that make our tools easier to build and
            maintain.
          </p>
        </section>

        <section>
          <h2>What Cliva helps us with</h2>

          <p>
            Cliva brings common CLI functionality into focused and reusable
            crates.
          </p>

          <ul>
            <li>
              <strong>cliva</strong> helps with commands, arguments, options,
              flags, subcommands, and parsing.
            </li>
            <li>
              <strong>cliva-io</strong> helps with terminal input, output,
              prompts, status messages, formatting, and other terminal
              interactions.
            </li>
          </ul>

          <p>
            They can be used together or separately. This keeps our projects
            from depending on functionality they do not need.
          </p>
        </section>

        <section>
          <h2>Built for the Nexment ecosystem</h2>

          <p>Cliva is mainly being built because we need it ourselves.</p>

          <p>
            As Nexment grows, we expect more projects to use the terminal.
            Having a common toolkit means we can spend less time rebuilding
            basic CLI functionality and more time working on the actual tools.
          </p>

          <p>
            At the same time, Cliva is not limited to Nexment. We want it to be
            useful for anyone building Rust command-line applications.
          </p>
        </section>

        <section>
          <h2>Starting small</h2>

          <p>
            Cliva is still under development. We are starting with the problems
            we actually have and building from there.
          </p>

          <p>
            We do not want to add features just because a CLI library can have
            them. Every part should have a reason to exist and should make CLI
            development a little simpler.
          </p>

          <p>
            That is the reason Cliva exists: we needed a better foundation for
            our own command-line tools, so we decided to build one.
          </p>
        </section>
      </div>

      <footer className={styles.footer}>
        <i className="fa-solid fa-code" />
        Built as part of The Nexment Project.
      </footer>
    </article>
  );
}
