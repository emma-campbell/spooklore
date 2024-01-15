export type Author = {
  name: string;
  id?: string;
};

export type Book = {
  id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  pageCount?: number;
  cover: string;
  authors?: Author[];
};
