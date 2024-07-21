import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";
import { LiteralWrapper } from "@/context/literal";
import type { Metadata } from "next";

import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const friendly_forrest = localFont({
  src: [
    {
      path: "styles/fonts/forrest-light-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "styles/fonts/forrest-lightitalic-webfont.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "styles/fonts/forrest-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "styles/fonts/forrest-regularitalic-webfont.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "styles/fonts/forrest-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "styles/fonts/forrest-mediumitalic-webfont.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "styles/fonts/forrest-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "styles/fonts/forrest-bolditalic-webfont.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "styles/fonts/forrest-extrabold-webfont.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "styles/fonts/forrest-extrabolditalic-webfont.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "styles/fonts/forrest-heavy-webfont.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "styles/fonts/forrest-heavyitalic-webfont.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-primary",
});

const hello_imperfect = localFont({
  src: [
    {
      path: "styles/fonts/hello-imperfect-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-secondary",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Emma Campbell",
  description: "Emma's Digital Presence",
  authors: {
    url: "https://spooky.blog",
    name: "Emma Campbell",
  },
  referrer: "origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${friendly_forrest.variable} ${hello_imperfect.variable} ${jetbrains.variable} w-full items-center`}
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Spooklore RSS Feed"
          href="/rss.xml"
        />
      </head>
      <body className="mx-6 md:mx-auto max-w-xl font-serif bg-secondary pt-12 leading-relaxed">
        <div className="flex justify-center pb-6">
          <Nav />
        </div>
        <LiteralWrapper>
          <main className="mx-auto text-md px-2 md:px-0">{children}</main>
        </LiteralWrapper>
        <div className="flex justify-center">
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
