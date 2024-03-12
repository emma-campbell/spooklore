import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";
import { LiteralWrapper } from "@/context/literal";
import type { Metadata } from "next";

import {
  Barrio,
  Barriecito,
  JetBrains_Mono,
  Alegreya_Sans,
} from "next/font/google";
import "./globals.css";

const barrio = Barrio({
  style: ["normal"],
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-barrio",
});

const barriecito = Barriecito({
  style: ["normal"],
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-barriecito",
});

const alegreya = Alegreya_Sans({
  style: ["italic", "normal"],
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "500", "700", "800", "900"],
  variable: "--font-alegreya",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Emma Campbell",
  description: "Emma's Digital Presence",
  authors: {
    url: "https://spooklore.com",
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
      className={`${barrio.variable} ${barriecito.variable} ${alegreya.variable} ${jetbrains.variable} text-text w-full items-center`}
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Spooklore RSS Feed"
          href="/rss.xml"
        />
      </head>
      <body className="mx-auto max-w-4xl bg-black pt-12">
        <div className="flex justify-center pb-6">
          <Nav />
        </div>
        <LiteralWrapper>
          <main className="mx-auto max-w-lg px-2 text-[#D7D7D7] md:px-0">
            {children}
          </main>
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
