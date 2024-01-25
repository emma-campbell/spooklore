"use client";

import { Post } from "contentlayer/generated";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

export function PostPreview({ post }: { post: Post }) {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  if (isMobile) {
    return (
      <div className="grid grid-cols-6">
        <Link
          href={`/writing/${post.slug}`}
          className="col-span-4 hover:text-white"
        >
          <h4 className="">{post.title}</h4>
        </Link>
        <div className="col-span-2 flex justify-end">
          <p className="">
            {moment(post.published).format("MMM DD, YYYY")}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-6 sm:flex sm:flex-row justify-between space-x-2 transition-all">
        <Link
          href={`/writing/${post.slug}`}
          className="flex-shrink-0 max-w-1/2 col-span-4 hover:text-white"
        >
          <h4 className="">{post.title}</h4>
        </Link>
        <span className="relative border-b-[1px] border-[#D7D7D7] w-full -top-2"></span>
        <p className="flex-shrink-0 col-span-2">
          {moment(post.published).format("MMM DD, YYYY")}
        </p>
      </div>
    );
  }
}
