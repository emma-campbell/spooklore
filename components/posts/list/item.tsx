import { Post } from "contentlayer/generated";
import moment from "moment";
import Link from "next/link";

export function PostListItem({ post }: { post: Post }) {
  return (
    <div className="flex space-x-4 items-center">
      <p className="text-sm flex font-sans font-bold text-highlighted">
        {moment.utc(post.published).format("DD")}
      </p>
      <Link
        className="flex flex-wrap hover:underline text-body hover:text-highlighted"
        href={`/notebook/${post.slug}`}
      >
        <p className="text-lg font-bold">{post.title}</p>
      </Link>
    </div>
  );
}
