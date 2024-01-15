"use client";

import { Book } from "@/lib/reading";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import ReadDate from "./reading-date";

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

export function CurrentlyReading() {
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
      <div className="bg-[#7F7F7F]/10 min-w-full h-64 rounded-md px-28 flex flex-col items-center [&_*]:-top-20 [&_*]:relative">
        <Image
          className="w-32 relative rounded-md"
          src={book.cover}
          alt={`${book.title} cover`}
          width="230"
          height="500"
        />
        <h1 className="font-serif text-5xl pt-4">currently reading</h1>
        <p className="pt-2">
          {book.title} | {book.authors?.map((a) => a.name).join(", ")}
        </p>
        <Suspense>
          <ReadDate id={book.id ?? ""} />
        </Suspense>
      </div>
    </Suspense>
  );
}
