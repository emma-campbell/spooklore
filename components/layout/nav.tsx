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
  "/about": {
    text: "about",
  },
  "/books": {
    text: "reading"
  }
};

export const Nav = () => {
  const pathname = usePathname() || "/";
  return (
    <nav className="flex flex-row justify-between items-center w-full">
      <Link href="/" className="flex flex-row items-center space-x-4">
        <Image
          src={Icon}
          className="max-w-20 rounded-full"
          loading="eager"
          alt="spooklore image with anxious skeleton"
        />
        <h1 className="text-white text-5xl font-serif">spooklore.</h1>
      </Link>
      <div className="flex flex-row font-sans space-x-8">
        {Object.entries(links).map(([path, { text }]) => {
          const active = path == pathname;
          return (
            <Link
              key={text}
              href={path}
              className={clsx(
                "transition-all hover:text-[#ffffff] hover:underline hover:decoration-wavy align-middle leading-extra-tight sm:leading-tight",
                {
                  "text-[#7F7F7F]": !active,
                }
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
