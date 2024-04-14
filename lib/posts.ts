import { allPosts } from 'contentlayer/generated';

export const Posts = () => {
  return allPosts
    .filter(p => process.env.NODE_ENV !== "development" ? p.status !== "draft" : true)
}