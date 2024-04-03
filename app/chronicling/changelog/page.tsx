import FlowerBunch from "public/flowerbunch.png"
import Image from "next/image"
import {useMDXComponent} from "next-contentlayer/hooks";
import fs from "fs";
import {components} from "@/components/mdx";
import * as process from "process";
import {MDXRemote} from "next-mdx-remote/rsc";
import {serialize} from "next-mdx-remote/serialize";



export default async function Changelog() {
  const changelog =  fs.readFileSync("CHANGELOG.md").toString();

  return (
    <>
      <Image src={FlowerBunch} alt={"Group of flowers and grasses"} className={"h-48 w-auto"}/>
      <h1 className={"text-4xl pb-2"}>Changelog</h1>
      <p className={"text-body"}>A <i>changelog</i> is a document that collects records of changes made to a piece of software. Here are all the ways this site has changed over time.</p>
      <section className={"text-body pt-3"}>
        <MDXRemote source={changelog} components={components}/>
      </section>
    </>
  );
}
