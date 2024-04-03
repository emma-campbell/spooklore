"use client";

import { Post } from "contentlayer/generated";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

export function PostPreview({ post }: { post: Post }) {
  const [width, setWidth] = useState<number>();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);

  const isMobile = width ?? 1000 <= 768;

  if (isMobile) {
    return (
      <div className="grid grid-cols-6">
        <Link
          href={`/notebook/${post.slug}`}
          className="col-span-4 hover:text-white"
        >
          <h4 className="">{post.title}</h4>
        </Link>
        <div className="col-span-2 flex justify-end">
          <p className="">{moment.utc(post.published).format("MMM DD, YYYY")}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-6 justify-between space-x-2 transition-all text-lg font-serif text-highlighted sm:flex sm:flex-row">
        <Link
          href={`/writing/${post.slug}`}
          className="max-w-1/2 col-span-4 flex-shrink-0 text-body hover:text-highlighted"
        >
          <h4>{post.title}</h4>
        </Link>
        <span className="relative -top-2 w-full border-b-[1px] border-highlighted border-dotted"></span>
        <p className="col-span-2 flex-shrink-0">
          {moment.utc(post.published).format("MMM DD, YYYY")}
        </p>
      </div>
    );
  }
}
