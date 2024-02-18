import Link from "next/link";

export default function Uses() {
  return (
    <>
      <section id="blogroll" className="space-y-12 pt-8">
        <ul className="list-disc [&_a]:underline">
          <li>
            <Link href="https://winnielim.org/">Winnie Lim</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
