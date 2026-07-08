import { C15tPrefetch } from "@c15t/nextjs";
import { Databuddy, FlagsProvider } from "@databuddy/sdk/react";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import { Toaster } from "sonner";
import { ConsentManager } from "../components/consent-manager";
import { SiteShell } from "../components/site-shell";
import { ThemeProvider } from "../components/theme-provider";
import { RSS_FEED_PATH, RSS_FEED_TITLE } from "../utils/constants";
import {
  DEFAULT_SOCIAL_IMAGE,
  SITE_DESCRIPTION,
  SITE_TITLE,
  TWITTER_HANDLE,
} from "../utils/metadata";
import { SITE_URL } from "../utils/urls";

import "@/styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: true,
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: [
    { color: "#f7f5f3", media: "(prefers-color-scheme: light)" },
    { color: "#1f1a17", media: "(prefers-color-scheme: dark)" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s - Rubani",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
    types: {
      "text/plain": `${SITE_URL}/llms.txt`,
      "application/rss+xml": `${SITE_URL}${RSS_FEED_PATH}`,
    },
  },
  icons: {
    icon: [{ url: "/brand/rubani-icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/brand/rubani-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Rubani",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE.url],
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "apple-mobile-web-app-title": "Rubani",
  },
};

const databuddyClientId = process.env.NEXT_PUBLIC_DATABUDDY_WEB_WEBSITE_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ scrollbarGutter: "stable" }}
      suppressHydrationWarning
    >
      <head>
        <link
          href={RSS_FEED_PATH}
          rel="alternate"
          title={RSS_FEED_TITLE}
          type="application/rss+xml"
        />
        <C15tPrefetch backendURL="/api/c15t" />
      </head>
      <body
        className={`${outfit.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          enableSystem={false}
        >
          <FlagsProvider
            clientId={databuddyClientId ?? ""}
            disabled={!databuddyClientId}
          >
            {databuddyClientId && (
              <Databuddy
                clientId={databuddyClientId}
                trackAttributes={true}
                trackErrors={true}
                trackHashChanges={true}
              />
            )}
            <ConsentManager>
              <SiteShell>{children}</SiteShell>
            </ConsentManager>
          </FlagsProvider>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
