import { PageTitle } from "@/components/layout/page-title";
import PostList from "@/components/posts/list";
import { Post, allPosts } from "contentlayer/generated";
import moment from "moment";

function postsByYear() {
  const map: Map<number, Map<number, Post[]>> = new Map();
  allPosts.forEach((p) => {
    const publishedYear = moment(p.published).year();
    const publishedMonth = moment(p.published).month() + 1;

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

export default function Thoughts() {
  const posts = Array.from(postsByYear().entries()).sort((a, b) => {
    const [firstYear, firstYearMonths] = a;
    const [secondYear, secondYearMonths] = b;
    return secondYear - firstYear;
  });

  return (
    <>
      <PageTitle value="Writing" />
      <section className="flex flex-col space-y-12 pt-8">
        <p>
          A collection of thoughts and notes compiled by me, on a not-so-regular
          basis. Topics include but are not limited to development, career
          anxiety, mental health, a loads more.
        </p>
        <section className="flex flex-col space-y-8">
          {posts.map((entry) => {
            const [year, months] = entry;
            const dom = [];

            let idx = 1;
            const target = Array.from(months.keys()).length;
            for (const [month, posts] of months) {
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
