import { Aside } from "./aside";
import type { MDXComponents } from "mdx/types";
import MdxImage from "./img";

export const components: MDXComponents = {
  Aside,
  h1: ({ children, className }) => {
    return <h2 className="font-serif text-black text-3xl">{children}</h2>;
  },
  h2: ({ children }) => {
    return <h3 className="font-serif text-black text-2xl">{children}</h3>;
  },
  h3: ({ children }) => {
    return <h4 className="font-serif text-black text-xl">{children}</h4>;
  },
  h4: ({ children }) => {
    return <h5 className="font-serif text-black text-lg">{children}</h5>;
  },
  ol: ({ children }) => {
    return <ol className="list-inside list-decimal">{children}</ol>;
  },
  ul: ({ children }) => {
    return <ul className="list-inside list-disc">{children}</ul>;
  },
  li: ({ children }) => {
    return <li className="">{children}</li>;
  },
  blockquote: ({ children }) => {
    return (
      <blockquote className="border-l-4 border-primary bg-primary/10 pl-2 py-2 text-body">
        {children}
      </blockquote>
    );
  },
  strong: ({ children }) => {
    return <strong className="font-bold">{children}</strong>;
  },
  img: MdxImage,
};
