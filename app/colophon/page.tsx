import Link from "next/link";

export default function Colophon() {
  return (
    <>
      <section className="flex flex-col space-y-4 [&_a]:underline [&_a]:hover:">
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
          <Link href="https://fonts.google.com/specimen/Fraunces?query=fraunces">
            Fraunces
          </Link>{" "}
          and{" "}
          <Link href="https://fonts.google.com/specimen/Inter?query=inter">
            Inter
          </Link>
          .
        </p>
        <p>
          This site was built using{" "}
          <Link href="https://nextjs.org/">Next.Js</Link>
        </p>
        <p className="text-xs">last updated: January 14th, 2024</p>
      </section>
    </>
  );
}
