import { defineConfig, s } from "velite";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import staticImages from "./lib/remark-next-images";

const codeOptions = {
  keepBackground: false,
  theme: "vitesse-dark",
};

export default defineConfig({
  output: {
    clean: true,
  },
  collections: {
    posts: {
      name: "Post",
      pattern: "posts/**/*.mdx",
      schema: s
        .object({
          title: s.string(),
          published: s.isodate(),
          description: s.string().optional(),
          status: s.enum(["draft", "published"]),
          entry: s.enum(["note", "essay", "how-to", "experiment"]),
          metadata: s.metadata(),
          tags: s.array(s.string()).optional(),
          content: s.mdx(),
          path: s.path(),
        })
        .transform((data) => ({
          ...data,
          slug: data.path.replace(/posts\//, ""),
        })),
    },
  },
  markdown: {
    copyLinkedFiles: false,
  },
  mdx: {
    gfm: true,
    copyLinkedFiles: false,
    rehypePlugins: [
      [rehypeSlug],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {},
        },
      ],
      [rehypePrettyCode, codeOptions],
      [staticImages, { publicDir: "public" }],
      [rehypeKatex, { output: "mathml" }],
    ],
    remarkPlugins: [[remarkMath]],
  },
});
