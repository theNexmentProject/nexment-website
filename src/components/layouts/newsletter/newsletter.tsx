"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./newsletter.module.css";

const STORAGE_KEY = "nexment_newsletter_subscribed";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedSubscription = localStorage.getItem(STORAGE_KEY);

    if (savedSubscription === "true") {
      setSubscribed(true);
    }
  }, []);

  function validateEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedEmail = email.trim();

    setError("");

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.nexment.in/newsletter/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Subscription failed");
      }

      localStorage.setItem(STORAGE_KEY, "true");

      setEmail("");
      setSubscribed(true);
      setStatus("idle");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <section className={styles.section} aria-labelledby="newsletter-title">
      <div className={styles.card}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>NEXMENT UPDATES</span>

          <h2 id="newsletter-title">Build. Learn. Stay ahead.</h2>

          <p>
            New projects, useful blogs, tech news, developer things, and
            everything interesting we’re building at Nexment — sent straight to
            your inbox.
          </p>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);

                if (error) {
                  setError("");
                }
              }}
              placeholder="Your email address"
              aria-label="Email address"
              aria-invalid={!!error}
              aria-describedby={error ? "newsletter-error" : undefined}
              disabled={subscribed || status === "loading"}
            />

            <button
              type="submit"
              aria-label={
                subscribed ? "Newsletter subscribed" : "Subscribe to newsletter"
              }
              disabled={subscribed || status === "loading"}
            >
              <span>
                {subscribed
                  ? "Subscribed"
                  : status === "loading"
                    ? "Subscribing..."
                    : "Subscribe"}
              </span>

              <i
                className={
                  subscribed ? "fa-solid fa-check" : "fa-solid fa-arrow-right"
                }
                aria-hidden="true"
              />
            </button>
          </form>

          {error && (
            <p id="newsletter-error" className={styles.error} role="alert">
              {error}
            </p>
          )}

          {subscribed && !error && (
            <p className={styles.success} role="status">
              You’re in. We’ll keep you posted.
            </p>
          )}

          <span className={styles.security}>
            <i className="fa-solid fa-lock" aria-hidden="true" /> Your email
            stays safe with us. No spam, ever.
          </span>
        </div>
      </div>
    </section>
  );
}
