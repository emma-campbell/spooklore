import Greenery from "public/greenery.png";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "Autobio",
    description:
      "Want to know a little more about me? This would be the place. I wrote it, and felt weird writing it.",
    href: "/chronicling/bio",
  },
  {
    title: "Changelog",
    description:
      "A semver change log that describes how this site has changed over time",
    href: "/chronicling/changelog",
  },
  {
    title: "Colophon",
    description:
      "Visit this page if you're a nerd and want to know how I made this site.",
    href: "/chronicling/colophon",
  },
  {
    title: "Blogroll",
    description:
      "A list of the blogs and sites I tend to read whenever they popup in my RSS feed.",
    href: "/chronicling/blogroll",
  },
  {
    title: "Things",
    description:
      "A list of all the software and hardware that I use on a day to day basis",
    href: "/things",
  },
];

export default function Chronicling() {
  return (
    <>
      <Image
        src={Greenery}
        alt={"some greenery imagery"}
        className={"h-48 w-auto pb-4"}
        priority={true}
      />
      <div className={"text-body text-md pb-3"}>
        <p>
          Hi, I&apos;m Emma. Pleased to digitally meet you. This section
          includes some subpages, and some basic info about me.
        </p>
      </div>
      <ul className="space-y-1">
        {links.map(({ title, description, href }) => {
          return (
            <li key={title}>
              <Link
                href={href}
                className={
                  "font-sans uppercase text-lg text-body hover:text-highlighted"
                }
              >
                {title}
              </Link>
              <p className={"text-md text-body"}>{description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
