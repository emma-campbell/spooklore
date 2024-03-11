import { Post } from "contentlayer/generated";
import moment from "moment";
import Link from "next/link";

export function PostListItem({ post }: { post: Post }) {
  return (
    <div className="flex space-x-4">
      <p className="text-md flex font-mono font-bold text-[#777777]">
        {moment(post.published).format("DD")}
      </p>
      <Link
        className="flex flex-wrap hover:underline"
        href={`/writing/${post.slug}`}
      >
        <p className="text-md font-bold">{post.title}</p>
      </Link>
    </div>
  );
}
