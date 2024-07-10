import { LastUpdated } from "@/components/layout/last-updated";
import Link from "next/link";

export default function Colophon() {
  const updated = new Date("2024-07-09 19:50 EST");
  return (
    <>
      <h1 className={"text-4xl pb-4"}>Colophon</h1>
      <section className="flex flex-col space-y-4 [&_a]:underline text-body">
        <p>
          This website was originally published January 14th, 2024 near
          Washington, D.C. It&apos;s developed on a 2021 M1 Macbook Pro and
          hosted on <Link href="https://vercel.com">Vercel</Link>. All content
          was migrated from my previous domain emmacampbell.dev. The code is
          open source on{" "}
          <Link href="https://github.com/emma-campbell/spooklore">Github</Link>.
        </p>
        <p>
          The fonts used are{" "}
          <Link href="https://creativemarket.com/TomChalky/7554894-Volume-%E2%80%93-Handcrafted-Font-Trio">
            Volume TC
          </Link>{" "}
          and{" "}
          <Link href="https://creativemarket.com/TomChalky/7554894-Volume-%E2%80%93-Handcrafted-Font-Trio">
            Volume TC Sans
          </Link>
          .
        </p>
        <p>
          This site was built using{" "}
          <Link href="https://nextjs.org/">Next.Js</Link>
        </p>
        <p>
          All content is hosted in Github, and uses{" "}
          <Link href="https://contentlayer.dev/">Contentlayer</Link> to parse
          and display posts. My book tracker was built using Literal.Club&apos;s
          API&apos;s. You can read more on that{" "}
          <Link href="/notebook/book-tracker">here</Link>.
        </p>
        <LastUpdated date={updated} />
        {/* <p className="text-xs font-sans">last updated: 03/11/2024</p> */}
      </section>
    </>
  );
}
