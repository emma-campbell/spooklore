import { posts } from "@velite";

export function getPost(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    throw Error(`Unable to find slug ${slug}`);
  }
  return post;
}
