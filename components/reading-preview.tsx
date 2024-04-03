"use client";

import { useSuspenseQuery } from "@apollo/client";
import { Suspense, useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { Book } from "@/lib/reading";
import Image from "next/image";
import Link from "next/link";
import ReadDate from "@/components/books/reading-date";

const query = gql`
  query myReadingStates {
    myReadingStates {
      status
      book {
        id
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
      <div
        className="grid grid-cols-6 justify-between space-x-2 transition-all font-body text-body sm:flex sm:flex-row">
        <div className="max-w-1/2 col-span-4 flex-shrink-0">
          <h4 className="font-serif font-semibold font-body text-lg italic">
            {book.title}
          </h4>
          <p>{book.authors?.map((a) => a.name).join(", ")}</p>
        </div>
        <span className="relative -top-8 w-full border-b-[1px] border-highlighted border-dotted"></span>
        <p className="col-span-2 flex-shrink-0">
          { book.id ? <ReadDate id={book.id} /> : null}
        </p>
      </div>
    </Suspense>
);
};
