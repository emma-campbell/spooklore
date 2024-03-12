import { PageTitle } from "@/components/layout/page-title";
import Link from "next/link";

const links = [
  {
    text: "Winnie Lim",
    href: "https://winnielim.org",
  },
  {
    text: "Rachel Smith",
    href: "https://rachsmith.com",
  },
  {
    text: "AI Weirdness",
    href: "https://aiweirdness.com",
  },
  {
    text: "Amy Hupe",
    href: "https://amyhupe.co.uk",
  },
  {
    text: "She's a Beast",
    href: "https://shesabeast.co",
  },
  {
    text: "Manu Moreale",
    href: "https://manuelmoreale.com",
  },
  {
    text: "Steph Ango",
    href: "https://stephango.com/",
  },
];

export default function Uses() {
  return (
    <>
      <PageTitle value="Blogroll" />
      <section id="blogroll" className="space-y-12 pt-8">
        <p>Find my list of RSS feed subscriptions below.</p>
        <ul className="list-disc [&_a]:underline">
          {links.map((l) => (
            <li key={l.text}>
              <Link href={l.href}>{l.text}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
