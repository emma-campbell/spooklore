import PostList from "@/components/posts/list";
import { Post, allPosts } from "contentlayer/generated";
import moment from "moment";

function postsByYear() {
  const map: Map<number, Post[]> = new Map();
  allPosts.forEach((p) => {
    const year = moment(p.published).year();
    const posts = map.get(year);
    if (!posts) {
      map.set(year, [p]);
    } else {
      posts.push(p);
    }
  });
  return map;
}

export default function Thoughts() {
  const posts = Array.from(postsByYear().entries()).sort((a, b) => {
    const [firstYear, firstYearPosts] = a;
    const [secondYear, secondYearPosts] = b;
    return secondYear - firstYear;
  });

  return (
    <>
      <section className="flex flex-col space-y-12 pt-8">
        <p>This is where I write my thoughts. Take a look around!</p>
        <section className="flex flex-col space-y-8">
          {posts.map((entry) => {
            const [year, posts] = entry;
            return <PostList key={year} year={year} posts={posts} />;
          })}
        </section>
      </section>
    </>
  );
}
