
import { posts } from "@/.velite";
import { MDXContent } from "@/components/mdx";
import { PostType } from "@/components/posts/post-type";
import { ViewCounter } from "@/components/view-counter";
import { getPost } from "@/lib/content";
import moment from "moment";

export async function getStaticPaths() {
  return posts
    .filter(f => f.status != "draft")
    .map(f => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags ? post.tags.map((t: any) => t.value) : undefined,
    authors: {
      name: "Emma Campbell",
      url: "https://spooky.blog",
    },
    referrer: "origin",
  };
}

type Params = Promise<{
  slug: string
}>;

export default async function NotebookEntry({
  params,
}: {params: Params}) {
  const { slug } = await params;
  const post = getPost(slug);
  const published = moment.utc(post.published);

  return (
    <>
      <section className={"pb-8"}>
        <div className={"flex uppercase space-x-2 font-sans text-highlighted"}>
          <p>{published.format("DD MMMM YYYY")}</p>
          <p>•</p>
          <ViewCounter track={true} slug={slug} />
          <PostType type={post.entry} />
        </div>
        <h1 className={"font-sans uppercase text-4xl"}>{post.title}</h1>
      </section>
      <section className={"flex flex-col space-y-4 text-body pb-16"}>
        <MDXContent code={post.content} />
      </section>
      <section>
        <h4
          className={"font-sans uppercase text-body text-3xl text-black pb-2"}
        >
          Metadata
        </h4>
        <div className={"flex flex-col text-body"}>
          <div className={"flex justify-between text-lg"}>
            <p>Published</p>
            <p>{published.format("MMMM DD, YYYY")}</p>
          </div>
          {post.tags ? (
            <div className={"flex justify-between text-lg"}>
              <p>Tags</p>
              <p>{post.tags.map((t) => t.toLowerCase()).join(", ")}</p>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
