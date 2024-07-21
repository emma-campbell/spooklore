import Link from "next/link";
import Image from "next/image";
import MyNotebook from "public/notebook.png";
import { Post } from "@velite";
import moment from "moment/moment";
import PostList from "@/components/posts/list";
import { Posts } from "@/lib/posts";

function postsByYear() {
  const map: Map<number, Map<number, Post[]>> = new Map();
  Posts().forEach((p) => {
    const publishedYear = moment.utc(p.published).year();
    const publishedMonth = moment.utc(p.published).month() + 1;

    const year = map.get(publishedYear);
    if (!year) {
      const month = new Map<number, Post[]>().set(publishedMonth, [p]);
      map.set(publishedYear, month);
    } else {
      const month = year.get(publishedMonth);
      if (!month) {
        year.set(publishedMonth, [p]);
      } else {
        month.push(p);
      }
    }
  });
  return map;
}

function sort(map: Map<number, any>, asc?: boolean) {
  return Array.from(map.entries()).sort((a, b) => {
    const [keyA, valuesA] = a;
    const [keyB, valuesB] = b;
    if (asc) {
      return keyA - keyB;
    } else {
      return keyB - keyA;
    }
  });
}

export default function Notebook() {
  const posts = sort(postsByYear(), false);

  return (
    <>
      <section
        className={
          "flex flex-col w-full items-center text-center space-around pb-8"
        }
      >
        <Image
          src={MyNotebook}
          alt={"notebook"}
          className={"w-48"}
          priority={true}
        />
        <h1 className={"font-sans uppercase text-body text-4xl"}>notebook</h1>
        <h2 className={"text-body"}>thoughts, notes, and...other things.</h2>
        {/* <Link
          href={"/rss.xml"}
          className={
            "font-sans text-primary hover:underline hover:decoration-wavy"
          }
        >
          follow feed
        </Link> */}
      </section>
      <section className={"flex flex-col space-y-8"}>
        {posts.map((entry) => {
          const [year, months] = entry;
          const dom = [];

          const monthsSorted = sort(months, true);

          let idx = 1;
          const target = Array.from(monthsSorted.keys()).length;
          for (const [month, posts] of monthsSorted) {
            dom.push(
              <PostList
                key={month}
                month={month}
                posts={posts}
                year={idx == target ? year : undefined}
              />,
            );
            idx++;
          }

          return <>{dom.reverse()}</>;
        })}
      </section>
    </>
  );
}
