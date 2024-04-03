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
import localFont from "next/font/local";

import "./globals.css";

const volume_tc = localFont({
  src: [
    {
      path: 'styles/fonts/Volume TC Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: 'styles/fonts/Volume TC Italic.otf',
      weight: '400',
      style: 'italic'
    }
  ],
  variable: '--font-primary'
});

const volume_tc_sans = localFont({
  src: [
    {
      path: 'styles/fonts/Volume TC Sans.otf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-secondary'
})

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
      className={`${volume_tc.variable} ${volume_tc_sans.variable} ${jetbrains.variable} w-full items-center`}
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Spooklore RSS Feed"
          href="/rss.xml"
        />
      </head>
      <body className="mx-auto max-w-xl font-serif bg-secondary pt-12">
        <div className="flex justify-center pb-6">
          <Nav />
        </div>
        <LiteralWrapper>
          <main className="mx-auto px-2 md:px-0">
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
