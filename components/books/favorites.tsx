"use client";

import { Book } from "@/lib/reading";
import { gql, useSuspenseQuery } from "@apollo/client";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

const query = gql`
  query getShelfBySlug($shelfSlug: String!) {
    shelf(where: { slug: $shelfSlug }) {
      books {
        title
        cover
      }
    }
  }
`;

export default function FavoriteBooks() {
  const [books, setBooks] = useState([] as Book[]);
  const { data } = useSuspenseQuery(query, {
    variables: {
      shelfSlug: "favorites-k41mhv1",
    },
  });

  useEffect(() => {
    setBooks((data as any)?.shelf.books as Book[]);
  }, [data]);

  console.log(books);

  return (
    <Suspense>
      <div className="bg-[#7F7F7F]/15 px-8 py-6 rounded-md grid grid-cols-7 gap-4 relative w-[48rem] h-48 -left-12">
        {books.map((b) => (
          <Image
            className="w-24 h-32"
            key={b.title}
            src={b.cover}
            alt={b.title}
            width="230"
            height="500"
          />
        ))}
        <h1 className="col-span-7 flex justify-end font-serif text-4xl text-[#ffffff] relative -top-6">
          favorites
        </h1>
      </div>
    </Suspense>
  );
}
