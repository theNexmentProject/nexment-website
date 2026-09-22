import { Geist_Mono, Sansita } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://app.nexment.in"),

  title: {
    default: "Nexment",
    template: "%s | Nexment",
  },

  description:
    "Nexment is an independent software project building simple, useful, and open technology for everyone.",

  keywords: [
    "Nexment",
    "The Nexment Project",
    "Nexment Project",
    "software",
    "technology",
    "open source",
    "developer tools",
    "software projects",
    "CLI",
    "Nexment CLI",
  ],

  authors: [
    {
      name: "The Nexment Project",
      url: "https://github.com/theNexmentProject",
    },
  ],

  creator: "The Nexment Project",
  publisher: "The Nexment Project",

  applicationName: "Nexment",

  alternates: {
    canonical: "https://app.nexment.in",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://app.nexment.in",
    siteName: "Nexment",
    title: "Nexment",
    description:
      "The Nexment Project — building simple, useful, and open technology.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Nexment",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexment",
    description:
      "The Nexment Project — building simple, useful, and open technology.",
    images: ["/banner.png"],
    creator: "@NexmentOfficial",
    site: "@NexmentOfficial",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "9lfHamwr5ttWsRJ4wYAX0dtsJE62USMn8143wXtRh_w",
  },

  category: "technology",
};

const sansita = Sansita({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sansita",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geistmono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansita.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
