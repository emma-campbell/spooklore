import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";
import { LiteralWrapper } from "@/context/literal";
import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";

import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nunito-sans",
});
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Emma Campbell",
  description: "Emma's Digital Presence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fraunces.variable} w-full items-center text-text`}
    >
      <body className="max-w-4xl pt-12 bg-black mx-auto">
        <Nav />
        <LiteralWrapper>
          <main className="max-w-2xl px-2 md:px-0 text-[#D7D7D7] mx-auto">
            {children}
          </main>
        </LiteralWrapper>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
