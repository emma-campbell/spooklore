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

  return (
    <Suspense>
      <div className="bg-[#7F7F7F]/15 px-4 py-4 sm:px-8 sm:py-6 rounded-md gap-4 w-full sm:w-[48rem] h-48">
        <div className="grid grid-rows-2 grid-cols-4 sm:grid-cols-7 justify-items-center">
          {isMobile
            ? books
                .slice(1, 5)
                .map((b) => (
                  <Image
                    className="w-20 flex-shrink-0"
                    key={b.title}
                    src={b.cover}
                    alt={b.title}
                    width="230"
                    height="500"
                  />
                ))
            : books.map((b) => (
                <Image
                  className="w-24 h-32"
                  key={b.title}
                  src={b.cover}
                  alt={b.title}
                  width="230"
                  height="500"
                />
              ))}
          <h1 className="col-span-7 flex justify-center font-serif text-4xl text-[#ffffff] sm:relative">
            favorites
          </h1>
        </div>
      </div>
    </Suspense>
  );
}
