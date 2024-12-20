"use client";

import { Post } from "@velite";
import Link from "next/link";
import { formatDistance } from "date-fns";
import { useMemo } from "react";
import { DateTime } from "luxon";

export function PostPreview({ post }: { post: Post }) {
  const elapsed = useMemo(
    () =>
      formatDistance(
        DateTime.fromISO(post?.published).toJSDate(),
        DateTime.now().toJSDate()
      ),
    [post.published]
  );

  return (
    <div className="grid auto-rows-auto md:grid-cols-6 justify-between md:space-y-0 md:space-x-2 transition-all font-serif text-highlighted sm:flex sm:flex-row">
      <Link
        href={`/notebook/${post.slug}`}
        className="max-w-1/2 col-span-4 flex-shrink-0 text-body hover:text-highlighted"
      >
        <h4>{post.title}</h4>
      </Link>
      <span className="hidden md:block relative -top-2 w-full border-b-[1px] border-highlighted border-dotted"></span>
      <p className="col-span-2 flex-shrink-0">{elapsed} ago</p>
    </div>
  );
}
