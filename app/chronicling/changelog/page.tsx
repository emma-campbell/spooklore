import FlowerBunch from "public/flowerbunch.png";
import Image from "next/image";
import fs from "fs";
import { components } from "@/components/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Changelog() {
  const changelog = fs.readFileSync("CHANGELOG.md").toString();

  return (
    <>
      <Image
        src={FlowerBunch}
        alt={"Group of flowers and grasses"}
        className={"h-48 w-auto"}
        priority={true}
      />
      <h1 className={"text-4xl pb-2"}>Changelog</h1>
      <p className={"text-body"}>
        A <i>changelog</i> is a document that collects records of changes made
        to a piece of software. Here are all the ways this site has changed over
        time.
      </p>
      <section className={"text-body pt-3 space-y-2"}>
        <MDXRemote source={changelog} components={components} />
      </section>
    </>
  );
}
