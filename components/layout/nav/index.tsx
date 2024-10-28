"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { Menu, MenuItem } from "./menu";
import { useState } from "react";

type HrefLink = {
  text: string;
  className?: string;
};

type LinkList = {
  [key: string]: HrefLink;
};
const links: LinkList = {
  "/notebook": {
    text: "notebook",
  },
  "/chronicling": {
    text: "chronicling",
  },
  // "/log": {
  //   text: "log",
  // },
};

export const Nav = () => {
  const pathname = usePathname() || "/";
  const useBackButton = !(pathname == "/" || pathname == "/notebook");
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return !useBackButton ? (
    <nav className="grid grid-cols-3 md:grid-cols-5 w-full max-w-2xl justify-between font-sans px-4 pb-16 sm:px-0">
      <Link href="/" className="text-primary col-span-1 md:col-span-3">
        EMMA.
      </Link>
      <div className="col-span-2  w-full max-w-2xl justify-between items-end px-4 pb-16 sm:px-0">
        <div className="w-full flex justify-between invisible items-center sm:visible">
          {Object.entries(links).map(([path, { text, className }]) => {
            const active = path == pathname;
            return (
              <Link
                key={text}
                href={path}
                className={clsx(
                  "leading-extra-tight uppercase align-middle transition-all hover:text-highlighted hover:underline hover:decoration-wavy sm:leading-tight",
                  {
                    "text-body": !active,
                  },
                  className,
                )}
              >
                {text}
              </Link>
            );
          })}
        </div>
        <Menu open={open} setOpen={setOpen} className="md:invisible">
          {Object.entries(links).map(([path, { text }]) => {
            return <MenuItem key={text} name={text} url={path} />;
          })}
        </Menu>
      </div>
    </nav>
  ) : (
    <nav className={"w-full"}>
      <button
        className={"text-highlighted hover:text-body font-sans"}
        onClick={() => router.back()}
      >
        ← BACK
      </button>
    </nav>
  );
};
