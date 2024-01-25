"use client";

import { Book } from "@/lib/reading";
import moment from "moment";
import { useEffect, useState } from "react";

export function BookListItem({
  book,
}: {
  book: Book & { started: string; finished: string };
}) {
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
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-5 flex flex-col">
          <p className="font-bold text-md">{book.title}</p>
          <p className="col-span-2">{book.authors?.map((a) => a.name)}</p>
        </div>
        <p className="col-span-2 text-sm text-[#777777]">
          {moment(book.finished).format("MMMM Do")}
        </p>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-7 gap-4">
        <p className="col-span-3 font-bold text-md">{book.title}</p>
        <p className="col-span-2">{book.authors?.map((a) => a.name)}</p>
        <p className="col-span-2 text-sm text-[#777777]">
          {moment(book.finished).format("MMMM Do")}
        </p>
      </div>
    );
  }
}
