import { Book } from "@/lib/reading";
import moment from "moment";

export function BookListItem({
  book,
}: {
  book: Book & { started: string; finished: string };
}) {
  return (
    <div className="grid grid-cols-7 gap-4">
      <p className="col-span-3 font-bold text-md">{book.title}</p>
      <p className="col-span-2">{book.authors?.map((a) => a.name)}</p>
      <p className="col-span-2 text-sm text-[#777777]">
        {moment(book.finished).format("MMMM Do")}
      </p>
    </div>
  );
}
