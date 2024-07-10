import { allPosts } from "contentlayer/generated";
import { getPost } from "@/lib/content";
import { useMDXComponent } from "next-contentlayer/hooks";
import moment from "moment";
import { ViewCounter } from "@/components/view-counter";
import { PostType } from "@/components/posts/post-type";
import { components } from "@/components/mdx";
import { formatDistanceToNow, format } from "date-fns";

export async function generateStaticParams() {
  let posts = allPosts;

  if (process.env.NODE_ENV !== "development") {
    posts = posts.filter((p) => p.status != "draft");
  }

  return posts.map((p) => {
    slug: p.slug;
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
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

export default function NotebookEntry({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = getPost(slug);
  const published = moment.utc(post.published);
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <section className={"pb-8"}>
        <div className={"flex uppercase space-x-2 font-sans text-highlighted"}>
          <p>{published.format("DD MMMM YYYY")}</p>
          <p>•</p>
          <ViewCounter track={true} slug={slug} />
          <PostType type={post.entry} />
        </div>
        <h1 className={"text-4xl"}>{post.title}</h1>
      </section>
      <section className={"flex flex-col space-y-4 text-body pb-16"}>
        <MDXContent components={components} />
      </section>
      <section>
        <h4 className={"font-serif text-3xl text-black pb-2"}>Metadata</h4>
        <div className={"flex flex-col text-body"}>
          <div className={"flex justify-between text-lg"}>
            <p>Published</p>
            <p>{published.format("MMM DD YYYY")}</p>
          </div>
          <div className={"flex justify-between text-lg"}>
            <p>Type</p>
            <p>{post.entry}</p>
          </div>
          {post.tags ? (
            <div className={"flex justify-between text-lg"}>
              <p>Tags</p>
              <p>{post.tags.map((t) => t.value.toLowerCase()).join(", ")}</p>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
