"use client";

import { Scribble } from "@/components/svg/scribble";
import Image from "next/image";
import HeaderImage from "@/public/skeleton_skateboard.png";

export const Hero = () => {
  return (
    <section className={"h-72 pt-16"}>
      <div className={"absolute"}>
        <h1
          className={
            "flex-shrink-0 font-sans text-6xl text-primary font-outline-primary-4 tracking-widest"
          }
        >
          EMMA&apos;s BLOG
        </h1>
        <h2
          className={
            "font-serif text-black max-w-96 text-3xl font-outline-black-1"
          }
        >
          A Collection of Thoughts &{"\n"} Notes by Emma Campbell
        </h2>
        <Scribble className={""} />
      </div>
      <Image
        className={"hidden sm:block w-72 relative left-[22em] -top-[3.5em]"}
        src={HeaderImage}
        alt={"Skeleton doing a kickflip on a skateboard"}
        priority={true}
      />
    </section>
  );
};
