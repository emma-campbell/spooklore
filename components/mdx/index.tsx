import { Aside } from "./aside";
import type { MDXComponents } from "mdx/types";
import MdxImage from "./img";

export const components: MDXComponents = {
  Aside,
  h1: ({ children, className }) => {
    return <h2 className="font-serif text-4xl">{children}</h2>;
  },
  h2: ({ children }) => {
    return <h3 className="font-serif text-3xl">{children}</h3>;
  },
  h3: ({ children }) => {
    return <h4 className="font-serif text-2xl">{children}</h4>;
  },
  h4: ({ children }) => {
    return <h5 className="font-serif text-xl">{children}</h5>;
  },
  ol: ({ children }) => {
    return <ol className="list-decimal list-inside">{children}</ol>;
  },
  ul: ({children}) => {
    return <ul className="list-disc list-inside"></ul>
  },
  li: ({ children }) => {
    return <li className="list-outside">{children}</li>;
  },
  blockquote: ({ children }) => {
    return <blockquote className="border-l-4 pl-2 bg-white/5 rounded-md">{children}</blockquote>
  },
  strong: ({children}) => {
    return <strong className="font-bold">{children}</strong>
  },
  img: MdxImage
};
