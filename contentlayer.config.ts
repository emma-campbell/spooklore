import { makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { Post } from "./content/def/post";
import staticImages from "./lib/images";

const codeOptions: Options = {
  keepBackground: false,
  theme: "vitesse-dark",
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    mdxOptions: (options) => {
      options.remarkRehypeOptions = {
        footnoteLabel: undefined,
        footnoteLabelTagName: "h4",
        footnoteLabelProperties: {
          className: "pb-2",
        },
      };
      return options;
    },
    remarkPlugins: [[remarkGfm], [remarkMath]],
    rehypePlugins: [
      [rehypeSlug],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {},
        },
      ],
      // @ts-expect-error
      [rehypePrettyCode, codeOptions],
      // @ts-expect-error
      [staticImages, { publicDir: "public" }],
      // @ts-expect-error
      [rehypeKatex, { output: "mathml" }],
    ],
  },
});
