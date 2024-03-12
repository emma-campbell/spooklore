import Link from "next/link";

export default function Colophon() {
  return (
    <>
      <section className="[&_a]:hover: flex flex-col space-y-4 pt-8 [&_a]:underline">
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
          <Link href="https://fonts.google.com/specimen/Barrio?query=Barrio">
            Barrio
          </Link>{" "}
          and{" "}
          <Link href="https://fonts.google.com/specimen/Alegreya+Sans?query=Alegreya">
            Alegreya Sans
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
          and display. My book tracker was built using Literal.Club&apos;s
          API&apos;s. You can read more on that{" "}
          <Link href="https://spooklore.com/writing/book-tracker">here</Link>.
        </p>
        <p className="text-xs">last updated: 03/11/2024</p>
      </section>
    </>
  );
}
