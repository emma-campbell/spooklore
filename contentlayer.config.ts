import { makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { Post } from "./content/def/post";
import staticImages from "./lib/images";

const codeOptions: Options = {
  keepBackground: false,
  theme: 'vitesse-dark'
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [
      [rehypeSlug],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            // className: [HEADING_LINK_ANCHOR],
          },
        },
      ],
      // @ts-expect-error
      [rehypePrettyCode, codeOptions],
      // @ts-expect-error
      [staticImages, { publicDir: 'public'}]
    ],
  },
});
