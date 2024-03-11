import { FunctionComponent } from "react";

type PageTitleProps = {
  value: string;
  className?: string | string[];
};
export const PageTitle: FunctionComponent<PageTitleProps> = ({
  value,
  className,
}) => {
  return <h1 className="text-center font-serif text-5xl">{value}</h1>;
};
