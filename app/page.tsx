import { PostPreview } from "@/components/posts/post-preview";
import { Hero } from "@/components/layout/hero";
import dynamic from "next/dynamic";

import Link from "next/link";
import { Posts } from "@/lib/posts";
import moment from "moment";

const ReadingPreview = dynamic(() => import("@/components/reading-preview"));

function getPosts() {
  return Posts()
    .sort((a, b) => {
      return moment.utc(b.published).unix() - moment.utc(a.published).unix();
    })
    .slice(0, 4);
}

const links = [
  {
    title: "Bio",
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
      "A list of the blogs and sites I tend to read whenever they popup in my RSS feed",
    href: "/chronicling/blogroll",
  },
];

export default function Home() {
  const posts = getPosts();

  return (
    <div className="space-y-12">
      <Hero />
      <section id={"about-me"} className={"text-body space-y-3"}>
        <p>
          Welcome to my shit show. I’m Emma, and this is where the word vomit
          from my brain ends up online (quite the image, right?). I’m a software
          engineer by day, and by night a 25 year old in an 80 year olds body
          and probably in bed by 10pm. I wish I was kidding.
        </p>
        <p>
          Generally, I am a completely unserious human who likes to write about
          anything that comes to mind but generally involving technology,
          sports, chronic illness, and my dog Moose.
        </p>
        <p>
          Thank you for visiting. Please make yourself at home and check out a
          few pages while you’re here :)
        </p>
      </section>
      <section id="latest-posts" className="flex flex-col">
        <Link
          href="/notebook"
          className={"flex items-center w-full justify-around"}
        >
          <h1 className="font-serif uppercase text-2xl tracking-[0.25em] text-black font-outline-black-heading hover:underline pb-2">
            latest posts
          </h1>
        </Link>
        <ul className="font-serif col-span-3 text-md space-y-1 md:space-y-0">
          {posts.map((p) => (
            <PostPreview key={p.slug} post={p} />
          ))}
        </ul>
        <p className={"text-body pt-2"}>
          I&apos;ve written <u>{Posts().length} posts</u> since starting this
          blog in 2022.
        </p>
      </section>
      <section id="currently-reading" className="">
        <Link
          href="/chronicling/books"
          className={"flex items-center w-full justify-around"}
        >
          <h1 className="font-serif uppercase text-2xl text-black tracking-[0.25em] font-outline-black-heading hover:underline pb-2">
            currently reading
          </h1>
        </Link>
        <div className="col-span-3">
          <ReadingPreview />
        </div>
      </section>
      <section id={"about-the-author"}>
        <Link
          href="/chronicling"
          className={"flex items-center w-full justify-around"}
        >
          <h1 className="font-serif uppercase text-2xl text-black tracking-[0.25em] font-outline-black-heading hover:underline pb-2">
            about the author
          </h1>
        </Link>
        <ul className={"space-y-2"}>
          {links.map(({ title, description, href }) => {
            return (
              <li key={title}>
                <Link
                  href={href}
                  className={
                    "text-md text-body underline hover:text-highlighted"
                  }
                >
                  {title}
                </Link>
                <p className={"text-body text-md"}>{description}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
