import { allPosts } from "contentlayer/generated";

export function getPost(slug: string) {
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) {
    throw Error(`Unable to find slug ${slug}`);
  }
  return post;
}
