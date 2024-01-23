import { Post } from "contentlayer/generated";
import moment from "moment";
import Link from "next/link";

export function PostListItem({ post }: { post: Post }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Link className="col-span-2 hover:underline" href={`/writing/${post.slug}`}>
        <p className="font-bold text-md">{post.title}</p>
      </Link>
      <p className="col-span-1 text-sm text-[#777777]">
        {moment(post.published).format("MMMM Do")}
      </p>
    </div>
  );
}
