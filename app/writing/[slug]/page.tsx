import { components } from "@/components/mdx";
import { ViewCounter } from "@/components/view-counter";
import { getPost } from "@/lib/content";
import { allPosts } from "contentlayer/generated";
import moment from "moment";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { Metadata } from "next";

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
}): Promise<Metadata> {
  const { slug } = params;

  const post = getPost(slug);
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags ? post.tags.map((t) => t.value) : undefined,
    authors: {
      name: "Emma Campbell",
      url: "https://spooklore.com",
    },
    referrer: "origin",
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = getPost(slug);
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <section className="pt-8">
      <div className="pb-4">
        <h1 className="font-serif font-bold text-6xl pb-4">{post.title}</h1>
        <div className="font-medium text-gray-200 flex space-x-2">
          <p className="font-medium text-gray-200">
            {moment.utc(post.published).format("MMMM Do, YYYY")}
          </p>
          <p>•</p>
          <ViewCounter slug={slug} track={true} />
        </div>
      </div>
      <section className="flex flex-col space-y-4">
        <MDXContent components={components} />
      </section>
    </section>
  );
}
