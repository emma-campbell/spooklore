import { CurrentlyReading } from "@/components/books/currently-reading";
import FavoriteBooks from "@/components/books/favorites";
import { BookList } from "@/components/books/list";
import moment from "moment";
import { Suspense } from "react";

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
          limit: 100,
          offset: 0,
          readingStatus: "FINISHED",
          profileId: process.env.NEXT_PUBLIC_LITERAL_PROFILE_ID,
        },
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: process.env.LITERAL_TOKEN ?? "",
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
      <section id="currently_reading" className="pt-24 flex-col space-y-12">
        <CurrentlyReading />
        <FavoriteBooks />
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
