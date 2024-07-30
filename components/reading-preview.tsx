"use client";

import { useSuspenseQuery } from "@apollo/client";
import { Suspense, useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { Book } from "@/lib/reading";
import ReadDate from "@/components/books/reading-date";
import { ImageSkeleton } from "@/components/loading/image";

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
      (s: any) => s.status === "IS_READING",
    )?.[0];
    setBook(curr.book as Book);
  }, [data]);

  return (
    <div className="grid grid-cols-6 justify-between space-x-2 transition-all font-body text-body sm:flex sm:flex-row">
      <div className="max-w-1/2 col-span-4 flex-shrink-0">
        <Suspense
          fallback={
            <ImageSkeleton className="w-full h-4 bg-body/30 rounded-full" />
          }
        >
          <h4 className="font-sans font-semibold font-body uppercase">
            {book.title}
          </h4>
        </Suspense>
        <Suspense
          fallback={
            <ImageSkeleton className="w-full h-2 bg-body/30 rounded-full" />
          }
        >
          <p className="text-sm">
            {book.authors?.map((a) => a.name).join(", ")}
          </p>
        </Suspense>
      </div>
      <span className="hidden md:block relative -top-6 w-full border-b-[1px] border-highlighted border-dotted"></span>
      <Suspense
        fallback={
          <ImageSkeleton className="w-full h-3 bg-body/30 rounded-full" />
        }
      >
        <p className="col-span-2 flex-shrink-0 flex justify-end">
          {book.id ? <ReadDate id={book.id} /> : null}
        </p>
      </Suspense>
    </div>
  );
}
