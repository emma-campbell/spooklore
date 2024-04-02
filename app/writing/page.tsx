import { PageTitle } from "@/components/layout/page-title";
import PostList from "@/components/posts/list";
import { Post, allPosts } from "contentlayer/generated";
import moment from "moment";

function postsByYear() {
  const map: Map<number, Map<number, Post[]>> = new Map();
  allPosts.forEach((p) => {
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

export default function Thoughts() {
  const posts = sort(postsByYear(), false);

  return (
    <>
      <section className="flex flex-col space-y-12 pt-8">
        <section className="flex flex-col space-y-8">
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
      </section>
    </>
  );
}
