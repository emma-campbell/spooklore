import moment from "moment";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const CurrentlyReading = dynamic(
  () => import("@/components/books/currently-reading")
);

const FavoriteBooks = dynamic(() => import("@/components/books/favorites"));

const BookList = dynamic(() => import("@/components/books/list"));

async function getBooks() {
  const data = (
    (await fetch("https://literal.club/graphql/", {
      method: "POST",
      body: JSON.stringify({
        query: `query booksByReadingStateAndProfile(
        $limit: Int!
        $offset: Int!
        $readingStatus: ReadingStatus!
        $profileId: String!
      ) {
        booksByReadingStateAndProfile(limit: $limit offset: $offset readingStatus: $readingStatus profileId: $profileId) { id title authors { name } } }`,
        variables: {
          limit: 600,
          offset: 0,
          readingStatus: "FINISHED",
          profileId: process.env.NEXT_PUBLIC_LITERAL_PROFILE_ID,
        },
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: process.env.LITERAL_TOKEN ?? "",
      },
      cache: "reload",
      next: {
        revalidate: 3600,
      },
    }).then((res) => res.json())) as any
  ).data;

  const books = new Map<number, any>();

  for (const book of data.booksByReadingStateAndProfile) {
    const dates = (
      (await fetch("https://literal.club/graphql/", {
        method: "POST",
        body: JSON.stringify({
          query: `query getReadDates($bookId: String!, $profileId: String!) {
            getReadDates(bookId: $bookId, profileId: $profileId) {
              started
              finished
            }
          }`,
          variables: {
            bookId: book.id,
            profileId: process.env.NEXT_PUBLIC_LITERAL_PROFILE_ID,
          },
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: process.env.LITERAL_TOKEN ?? "",
        },
        next: {
          revalidate: 3600,
        },
      }).then((res) => res.json())) as any
    ).data;

    const date = dates?.getReadDates?.pop();

    const b = {
      ...book,
      started: date?.started,
      finished: date?.finished,
    };

    if (b.finished != null) {
      const year = moment(b.finished).year();

      let read = books.get(year);
      if (read == null) {
        read = [b];
        books.set(year, read);
      } else {
        read.push(b);
      }
    }
  }

  return books;
}

export default async function Books() {
  const read = Array.from((await getBooks()).entries()).sort((a, b) => {
    const [firstYear, firstYearBooks] = a;
    const [secondYear, secondYearBooks] = b;
    return secondYear - firstYear;
  });
  return (
    <>
      <section
        id="currently_reading"
        className="pt-24 flex flex-col space-y-12 items-center"
      >
        <Suspense>
          <CurrentlyReading />
        </Suspense>
        <Suspense>
          <FavoriteBooks />
        </Suspense>
        <Suspense>
          <section className="flex flex-col space-y-8">
            {read.map((entry) => {
              const [year, books] = entry;
              if (year >= 2018) {
                return <BookList key={year} year={year} books={books} />;
              }
            })}
          </section>
        </Suspense>
      </section>
    </>
  );
}
