import styles from "@/components/styles/project.module.css";
import Navbar from "@/components/layouts/navbar/navbar";

const clivaData = {
  name: "Cliva",

  hero: {
    eyebrow: "Rust CLI Toolkit",

    description:
      "A Rust toolkit for building reliable, polished, and developer-friendly command-line applications.",

    github: "https://github.com/theNexmentProject/cliva",

    meta: [
      {
        label: "Rust",
        icon: "fa-solid fa-cube",
      },
      {
        label: "Cargo Workspace",
        icon: "fa-solid fa-code-branch",
      },
      {
        label: "Open Source",
        icon: "fa-solid fa-code",
      },
    ],
  },

  overview: {
    label: "Overview",

    title: (
      <>
        CLI development
        <br />
        without the repetition.
      </>
    ),

    paragraphs: [
      "Cliva is a collection of focused Rust libraries designed to make CLI development faster, cleaner, and less repetitive.",
      "Rather than putting everything into one large library, Cliva is organized as a Cargo workspace containing independently usable crates.",
    ],

    highlight: "Use only what your application needs. Nothing more.",
  },

  components: {
    label: "Components",

    title: "Focused libraries. One workspace.",

    description:
      "Each component solves a specific part of CLI development and can be used independently.",

    items: [
      {
        number: "01",
        type: "Core library",
        name: "cliva",
        icon: "fa-solid fa-terminal",

        description:
          "The core CLI development library for commands, arguments, options, flags, subcommands, parsing, and related CLI functionality.",

        package: 'cliva = "0.1"',
        docs: "https://docs.nexment.in/cliva",
      },

      {
        number: "02",
        type: "Terminal toolkit",
        name: "cliva-io",
        icon: "fa-solid fa-display",

        description:
          "A standalone terminal input and output toolkit providing formatted output, user input, prompts, status messages, tables, and terminal UI utilities.",

        package: 'cliva-io = "0.1"',
        docs: "https://docs.nexment.in/cliva-io",
      },
    ],
  },

  architecture: {
    label: "Architecture",

    title: "Independent pieces. One ecosystem.",

    description:
      "Cliva keeps CLI development and terminal interaction separate, so each part can be used independently or together.",

    items: [
      {
        name: "cliva",
        type: "CLI Development",
        icon: "fa-solid fa-terminal",

        features: [
          "Commands",
          "Arguments",
          "Options",
          "Flags",
          "Parsing",
          "Routing",
        ],
      },

      {
        name: "cliva-io",
        type: "Terminal I/O",
        icon: "fa-solid fa-desktop",

        features: [
          "Input",
          "Output",
          "Prompts",
          "Progress Bars",
          "Loaders",
          "Tables",
        ],
      },
    ],
  },

  getStarted: {
    label: "Get started",

    title: "Explore Cliva.",

    description:
      "Explore the source, read the documentation, or start experimenting with the components.",

    github: "https://github.com/theNexmentProject/cliva",

    docs: "https://docs.nexment.in/cliva",

    license: "Apache License 2.0",
  },
};

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
                {clivaData.hero.eyebrow}
              </span>

              <h1>{clivaData.name}</h1>

              <p className={styles.heroDescription}>
                {clivaData.hero.description}
              </p>

              <div className={styles.actions}>
                <a
                  href={clivaData.hero.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.button} ${styles.buttonPrimary}`}
                >
                  <i className="fa-brands fa-github" />
                  View on GitHub
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>

                <a
                  href="#components"
                  className={`${styles.button} ${styles.buttonSecondary}`}
                >
                  Explore components
                </a>
              </div>

              <div className={styles.meta}>
                {clivaData.hero.meta.map((item) => (
                  <span key={item.label}>
                    <i className={item.icon} />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className={styles.section}>
          <div className={`${styles.container} ${styles.intro}`}>
            <div className={styles.sectionTitle}>
              <span className={styles.label}>{clivaData.overview.label}</span>

              <h2>{clivaData.overview.title}</h2>
            </div>

            <div className={styles.text}>
              {clivaData.overview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <p className={styles.highlight}>{clivaData.overview.highlight}</p>
            </div>
          </div>
        </section>

        {/* Components */}
        <section
          id="components"
          className={`${styles.section} ${styles.componentsSection}`}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.label}>{clivaData.components.label}</span>

              <h2>{clivaData.components.title}</h2>

              <p>{clivaData.components.description}</p>
            </div>

            <div className={styles.componentGrid}>
              {clivaData.components.items.map((component) => (
                <article key={component.name} className={styles.componentCard}>
                  <div className={styles.componentTop}>
                    <div className={styles.componentIcon}>
                      <i className={component.icon} />
                    </div>

                    <span className={styles.componentNumber}>
                      {component.number}
                    </span>
                  </div>

                  <div className={styles.componentContent}>
                    <span className={styles.componentType}>
                      {component.type}
                    </span>

                    <h3>{component.name}</h3>

                    <p>{component.description}</p>

                    <div className={styles.package}>
                      <span>Package</span>

                      <code>{component.package}</code>
                    </div>

                    <a
                      href={component.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.textLink}
                    >
                      View documentation
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.label}>
                {clivaData.architecture.label}
              </span>

              <h2>{clivaData.architecture.title}</h2>

              <p>{clivaData.architecture.description}</p>
            </div>

            <div className={styles.architecture}>
              <div className={styles.architectureGrid}>
                {clivaData.architecture.items.map((item) => (
                  <div key={item.name} className={styles.architectureCard}>
                    <div className={styles.architectureIcon}>
                      <i className={item.icon} />
                    </div>

                    <div>
                      <h3>{item.name}</h3>

                      <span>{item.type}</span>
                    </div>

                    <ul>
                      {item.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className={`${styles.section} ${styles.final}`}>
          <div className={styles.container}>
            <span className={styles.label}>{clivaData.getStarted.label}</span>

            <h2>{clivaData.getStarted.title}</h2>

            <p>{clivaData.getStarted.description}</p>

            <div className={styles.actions}>
              <a
                href={clivaData.getStarted.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                <i className="fa-brands fa-github" />
                GitHub
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>

              <a
                href={clivaData.getStarted.docs}
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
              {clivaData.getStarted.license}
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
