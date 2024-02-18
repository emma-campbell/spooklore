import Link from "next/link";
import moment from "moment";

export const Footer = () => {
  return (
    <footer className="w-full max-w-2xl py-12">
      <hr className="border-[#ffffff]/20 border-t-1" />
      <div className="flex flex-col pt-4 text-[#898989] items-center">
        <div className="flex flex space-x-2">
          <Link href="/colophon" className="hover:underline hover:text-white">
            colophon
          </Link>
          <Link href="/rss.xml" className="hover:underline hover:text-white">
            rss
          </Link>
          <Link href="/uses" className="hover:underline hover:text-white">
            uses
          </Link>
        </div>
        <div className="col-span-2 text-xs flex flex-col text-right">
          <p>© 2022 - {moment().format("YYYY")} Emma Campbell</p>
        </div>
      </div>
    </footer>
  );
};
