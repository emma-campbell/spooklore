"use client";

import { Book } from "@/lib/reading";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import ReadDate from "./reading-date";
import { ImageSkeleton } from "../loading/image";

const query = gql`
  query myReadingStates {
    myReadingStates {
      status
      createdAt
      book {
        id
        title
        cover
        authors {
          name
        }
      }
    }
  }
`;

export default function CurrentlyReading() {
  const [book, setBook] = useState({} as Book);
  const { data } = useSuspenseQuery(query);

  useEffect(() => {
    const curr = (data as any)?.myReadingStates.filter(
      (s: any) => s.status === "IS_READING",
    )?.[0];
    setBook(curr.book as Book);
  }, [data]);

  return (
    <Suspense>
      <div className="flex h-64 w-full flex-col items-center rounded-md bg-[#7F7F7F]/10 sm:min-w-full sm:px-28 [&_*]:relative [&_*]:-top-20">
        <Suspense fallback={<Suspense />}>
          <Image
            className="relative w-32 rounded-md"
            src={book.cover}
            alt={`${book.title} cover`}
            width="230"
            height="500"
          />
        </Suspense>
        <h1 className="pt-4 font-serif text-4xl sm:text-3xl">
          currently reading
        </h1>
        <p className="flex pt-2 text-center text-xs">
          {book.title} | {book.authors?.map((a) => a.name).join(", ")}
        </p>
        <Suspense>
          <ReadDate  id={book.id ?? ""} />
        </Suspense>
      </div>
    </Suspense>
  );
}
