import moment from "moment";
import { PostListItem } from "./item";
import { Suspense } from "react";
import { Post } from "contentlayer/generated";

export default function PostList({
  year,
  posts,
}: {
  year: number;
  posts: Post[];
}) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row space-x-2 align-text-bottom justify-end">
        <h2 className="font-serif italic text-3xl text-[#636363]">{year}</h2>
        <span className="relative border-b-[1px] border-[#636363] w-full -top-2"></span>
      </div>
      <Suspense>
        <div className="flex flex-col space-y-1">
          {posts
            .sort(
              (a, b) => moment(b.published).unix() - moment(a.published).unix()
            )
            .map((post) => (
              <PostListItem key={post.title} post={post} />
            ))}
        </div>
      </Suspense>
    </div>
  );
}
