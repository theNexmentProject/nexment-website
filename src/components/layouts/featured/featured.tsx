import styles from "./featured.module.css";

type ProjectItem = {
  number: string;
  title: string;
  description: string;
  code?: string;
};

type ProjectData = {
  label: string;
  name: string;
  status: string;
  subtitle: string;
  description: string;

  items: ProjectItem[];

  design: {
    label: string;
    title: string;
    description: string;
  };

  features: string[];

  footer: {
    label: string;
    description: string;
  };

  button: {
    label: string;
    href: string;
  };
};

type FutureProjectData = {
  number: string;
  name: string;
  description: string;
  tag: string;
};

const futureProject: FutureProjectData = {
  number: "01",
  name: "Devsh",
  description:
    "Devsh is a developer-focused shell language built for modern workflows, combining powerful scripting, built-in developer tools, modularity, and isolated project environments into one fast, consistent terminal experience.",

  tag: "Future Project",
};

const currentProject: ProjectData = {
  label: "CURRENT PROJECT",

  name: "Cliva",

  status: "Under active development",

  subtitle:
    "A Rust toolkit for building reliable, polished, and developer-friendly command-line applications.",

  description:
    "Cliva is a collection of focused Rust libraries designed to make CLI development faster, cleaner, and less repetitive. Instead of forcing everything into one large library, Cliva is organized as a Cargo workspace containing independently usable crates.",

  items: [
    {
      number: "01",
      title: "cliva",
      description:
        "The core CLI development library. It provides the building blocks required to create command-line applications, including commands, arguments, options, flags, subcommands, parsing, and related CLI functionality.",
      code: 'cliva = "0.1"',
    },

    {
      number: "02",
      title: "cliva-io",
      description:
        "A standalone terminal input and output toolkit for Rust CLI applications. It focuses on consistent terminal interaction, including formatted output, user input, prompts, status messages, tables, and other terminal UI functionality.",
      code: 'cliva-io = "0.1"',
    },
  ],

  design: {
    label: "DESIGN",
    title: "Focused by design.",
    description:
      "The crates are intentionally independent. You can use cliva for CLI development without using cliva-io, or use cliva-io on its own when you only need terminal interaction.",
  },

  features: [
    "Less boilerplate",
    "Clear APIs",
    "Independent components",
    "Reliable CLI behavior",
    "Consistent terminal interaction",
    "Minimal dependencies",
  ],

  footer: {
    label: "RUST · CARGO WORKSPACE",
    description:
      "APIs are currently evolving and may change before the first stable release.",
  },

  button: {
    label: "Explore Cliva",
    href: "/projects/cliva",
  },
};

export default function Featured() {
  return (
    <main className={styles.main}>
      {/* FUTURE PROJECT */}

      <section className={styles.left}>
        <span className={styles.label}>NEXT BUILD</span>

        <h1>Ideas waiting to be built.</h1>

        <p className={styles.intro}>
          Not every idea has to wait for us. Some projects are planned for the
          future, and you can start building them yourself if one catches your
          interest.
        </p>

        <div className={styles.idea}>
          <span className={styles.ideaNumber}>{futureProject.number}</span>

          <h2>{futureProject.name}</h2>

          <p>{futureProject.description}</p>

          <span className={styles.tag}>{futureProject.tag}</span>
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

      {/* CURRENT PROJECT */}

      <section className={styles.right}>
        <span className={styles.label}>{currentProject.label}</span>

        <div className={styles.projectHeader}>
          <div>
            <h1>{currentProject.name}</h1>

            <p className={styles.subtitle}>{currentProject.subtitle}</p>
          </div>

          <span className={styles.status}>{currentProject.status}</span>
        </div>

        <p className={styles.description}>{currentProject.description}</p>

        {/* GENERIC PROJECT ITEMS */}

        <div className={styles.crates}>
          {currentProject.items.map((item) => (
            <article
              className={styles.crate}
              key={`${item.number}-${item.title}`}
            >
              <span className={styles.crateIndex}>{item.number}</span>

              <h2>{item.title}</h2>

              <p>{item.description}</p>

              {item.code && <code>{item.code}</code>}
            </article>
          ))}
        </div>

        {/* DESIGN */}

        <div className={styles.design}>
          <div>
            <span className={styles.smallLabel}>
              {currentProject.design.label}
            </span>

            <h2>{currentProject.design.title}</h2>
          </div>

          <p>{currentProject.design.description}</p>
        </div>

        {/* FEATURES */}

        <div className={styles.features}>
          {currentProject.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>

        {/* FOOTER */}

        <div className={styles.footer}>
          <div>
            <span className={styles.smallLabel}>
              {currentProject.footer.label}
            </span>

            <p>{currentProject.footer.description}</p>
          </div>

          <a className={styles.button} href={currentProject.button.href}>
            {currentProject.button.label}
          </a>
        </div>
      </section>

      {/* MOBILE */}

      <div className={styles.mobileCards}>
        <section className={styles.mobileCurrent}>
          <span className={styles.label}>{currentProject.label}</span>

          <h1>{currentProject.name}</h1>

          <p>{currentProject.subtitle}</p>

          <div className={styles.mobileCrates}>
            {currentProject.items.map((item) => (
              <span key={`${item.number}-${item.title}`}>
                {item.title}
                {item.code ? ` — ${item.code}` : ""}
              </span>
            ))}
          </div>

          <a className={styles.button} href={currentProject.button.href}>
            {currentProject.button.label} →
          </a>
        </section>

        <section className={styles.mobileFuture}>
          <span className={styles.label}>NEXT BUILD</span>

          <h2>{futureProject.name}</h2>

          <p>{futureProject.description}</p>

          <a href="mailto:labs@nexment.in">Suggest an idea</a>
        </section>
      </div>
    </main>
  );
}
