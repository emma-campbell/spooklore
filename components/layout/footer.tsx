import Link from "next/link";
import moment from "moment";

export const Footer = () => {
  return (
    <footer className="w-full pt-12">
      <hr className="border-[#ffffff]/20 border-t-1" />
      <div className="flex flex-col pt-4 text-[#898989] items-center">
        <div className="flex flex space-x-2">
          <Link href='/colophon'>colophon</Link>
          <Link href='/blogroll'>blogroll</Link>
          <Link href="/uses">uses</Link>
          <Link href="/now">now</Link>
        </div>
        <div className="col-span-2 text-xs flex flex-col text-right">
          <p>© 2022 - {moment().format("YYYY")} Emma Campbell</p>
        </div>
      </div>
    </footer>
  );
};
