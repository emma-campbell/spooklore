import { allPosts } from "@/.contentlayer/generated";
import { PostPreview } from "@/components/posts/post-preview";
import moment from "moment";
import dynamic from "next/dynamic";
import Link from "next/link";

const ReadingPreview = dynamic(() => import("@/components/reading-preview"));

function getPosts() {
  return allPosts
    .sort((a, b) => {
      return moment.utc(b.published).unix() - moment.utc(a.published).unix();
    })
    .slice(0, 3);
}

const links = [
  {
    text: "about",
    href: "/about",
  },
  {
    text: "changelog",
    href: "/changelog"
  },
  {
    text: "blogroll",
    href: "/blogroll"
  }
];

export default function Home() {
  const posts = getPosts();

  return (
    <div className="space-y-12">
      <section id="latest-posts" className="flex flex-col">
        <Link href="/writing">
          <h1 className="font-serif text-2xl text-white/40 underline hover:text-white pb-2">
            latest posts
          </h1>
        </Link>
        <ul className="font-serif col-span-3">
          {posts.map((p) => (
            <PostPreview key={p.slug} post={p} />
          ))}
        </ul>
      </section>
      <section id="currently-reading" className="">
        <Link href="/books">
          <h1 className="font-serif text-2xl text-white/40 underline hover:text-white pb-2">
            currently reading
          </h1>
        </Link>
        <div className="col-span-3">
          <ReadingPreview />
        </div>
      </section>
      <section id="explore" className="flex space-x-2 font-serif text-white/40">
        {links.map((l, i) => {
          return (
            <>
              <Link key={l.text} href={l.href} className="underline hover:text-white">
                <p>{l.text}</p>
              </Link>
              {i + 1 < links.length ? <p>/</p> : null}
            </>
          );
        })}
      </section>
    </div>
  );
}
