import { LastUpdated } from "@/components/layout/last-updated";
import Link from "next/link";

export default function Colophon() {
  "2024-07-21 17:50 EST";
  const updated = new Date(2024, 6, 21, 17, 50);

  return (
    <>
      <h1 className={"font-sans uppercase text-body text-4xl pb-2"}>
        Colophon
      </h1>
      <section className="flex flex-col space-y-4 [&_a]:underline text-body">
        <p>
          This website was originally published January 14th, 2024 near
          Washington, D.C. It&apos;s developed on a 2021 M1 Macbook Pro and
          hosted on{" "}
          <Link href="https://www.digitalocean.com/">Digital Ocean</Link>. All
          content was migrated from my previous domain emmacampbell.dev. The
          code is open source on{" "}
          <Link href="https://github.com/emma-campbell/spooklore">Github</Link>.
        </p>
        <p>
          The fonts used are{" "}
          <Link href="https://creativemarket.com/Fenotype/12174844-Forrest-Friendly-Serif-Family">
            Forrest Friendly
          </Link>{" "}
          and{" "}
          <Link href="https://creativemarket.com/StudioFunshop/7526020-Imperfect%21-A-Handwritten-Sans-Serif">
            Hello Imperfect
          </Link>
          .
        </p>
        <p>
          This site was built using{" "}
          <Link href="https://nextjs.org/">Next.Js</Link>
        </p>
        <p>
          All content is hosted in Github, and uses{" "}
          <Link href="https://velite.js.org/">Velite</Link> to parse and display
          posts. My book tracker was built using Literal.Club&apos;s API&apos;s.
          You can read more on that{" "}
          <Link href="/notebook/book-tracker">here</Link>.
        </p>
        <LastUpdated date={updated} />
      </section>
    </>
  );
}
