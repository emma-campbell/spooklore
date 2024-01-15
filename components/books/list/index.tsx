import moment from "moment";
import { BookListItem } from "./item";

export function BookList({ year, books }: { year: number; books: any[] }) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row space-x-2 align-text-bottom justify-end">
        <h2 className="font-serif italic text-3xl text-[#636363]">{year}</h2>
        <span className="relative border-b-[1px] border-[#636363] w-full -top-2"></span>
      </div>
      <div className="flex flex-col">
        {books
          .sort((a, b) => moment(b.finished).unix() - moment(a.finished).unix())
          .map((book) => (
            <BookListItem key={book.title} book={book} />
          ))}
      </div>
    </div>
  );
}
