import Link from "next/link";
import Newspaper from "public/newspaper.png";
import Image from "next/image";

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

export default function Blogroll() {
  return (
    <>
      <Image
        src={Newspaper}
        alt={"Skeleton reading the newspaper"}
        className={"h-48 w-auto"}
      />
      <h1 className={"font-sans uppercase text-body text-4xl pb-2"}>
        Blogroll
      </h1>
      <p className={"text-body"}>
        This is a list off the blogs that read frequently or subscribe to in my
        RSS reader.
      </p>
      <section id="blogroll" className="space-y-12 pt-8 text-body">
        <ul className="list-disc list-inside [&_a]:underline">
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
