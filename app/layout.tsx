import { Analytics } from "@vercel/analytics/react";
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
    <html lang="en" className={`${nunito.variable} ${fraunces.variable}`}>
      <body className="antialiased max-w-3xl my-8 flex flex-col mx-4 lg:mt-20 lg:mx-auto font-sans items-center bg-black min-h-svh">
        <LiteralWrapper>
          <Nav />
          <main className="min-w-0 flex flex-col px-2 md:px-0 max-w-2xl justify-items-center text-[#D7D7D7]">
            {children}
          </main>
        </LiteralWrapper>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
