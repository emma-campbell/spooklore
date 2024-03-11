"use client";

import Image from "next/image";
import Icon from "@/public/spooklore.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = {
  "/writing": {
    text: "thoughts",
  },
  "/books": {
    text: "reading",
  },
};

export const Nav = () => {
  const pathname = usePathname() || "/";
  return (
    <nav className="flex w-full max-w-2xl flex-row items-center justify-between px-4 sm:px-0">
      <Link href="/" className="flex flex-row items-center space-x-4">
        <h1 className="font-logo text-3xl text-white">spooklore.</h1>
      </Link>
      <div className="flex flex-row space-x-8 font-sans">
        {Object.entries(links).map(([path, { text }]) => {
          const active = path == pathname;
          return (
            <Link
              key={text}
              href={path}
              className={clsx(
                "leading-extra-tight align-middle transition-all hover:text-[#ffffff] hover:underline hover:decoration-wavy sm:leading-tight",
                {
                  "text-[#7F7F7F]": !active,
                },
              )}
            >
              {text}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
