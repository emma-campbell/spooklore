// import { allPosts } from "contentlayer/generated";
import { posts } from "@velite";

export const Posts = () => {
  return posts.filter((p) =>
    process.env.NODE_ENV !== "development" ? p.status !== "draft" : true,
  );
};
