"use client";

import { useSuspenseQuery } from "@apollo/client";
import { Suspense, useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { Book } from "@/lib/reading";
import Image from "next/image";
import Link from "next/link";

const query = gql`
  query myReadingStates {
    myReadingStates {
      status
      book {
        title
        subtitle
        description
        cover
        authors {
          name
        }
      }
    }
  }
`;

export default function ReadingPreview() {
  const [book, setBook] = useState({} as Book);

  const { data } = useSuspenseQuery(query);

  useEffect(() => {
    const curr = (data as any)?.myReadingStates.filter(
      (s: any) => s.status === "IS_READING"
    )?.[0];
    setBook(curr.book as Book);
  }, [data]);

  return (
    <Suspense>
      <div className="grid grid-cols-3 gap-2">
        <Image
          className="w-32 rounded-md col-span-1"
          src={book.cover}
          alt={`${book.title} cover`}
          width="230"
          height="500"
        />
        <div className="col-span-2">
          <div className="pb-2">
            <h4 className="font-serif font-semibold text-[#ffffff]">
              {book.title}
            </h4>
            <p>{book.authors?.map((a) => a.name).join(", ")}</p>
          </div>
          <p>{book.description?.slice(0, 215).concat(". . .")}</p>
        </div>
      </div>
    </Suspense>
  );
};
