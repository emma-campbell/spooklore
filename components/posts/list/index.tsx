import moment from "moment";
import { PostListItem } from "./item";
import { Suspense } from "react";
import { Post } from "contentlayer/generated";

export default function PostList({
  month,
  posts,
  year,
}: {
  month: number;
  posts: Post[];
  year?: number;
}) {
  const textMonth = moment(month, "M").format("MMMM");
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row justify-between space-x-2 align-text-bottom">
        <h2 className="font-serif text-xl italic text-[#636363]">
          {textMonth}
        </h2>
        {year ? (
          <>
            <h2 className="justify-end font-serif text-xl italic text-[#636363]">
              {year}
            </h2>
          </>
        ) : null}
      </div>
      <Suspense>
        <div className="flex flex-col space-y-1">
          {posts
            .sort(
              (a, b) => moment(b.published).unix() - moment(a.published).unix(),
            )
            .map((post) => (
              <PostListItem key={post.title} post={post} />
            ))}
        </div>
      </Suspense>
    </div>
  );
}
