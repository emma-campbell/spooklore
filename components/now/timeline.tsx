import { format } from "date-fns";

export type TimelineItemProps = {
  month: number;
  year: number;
  children: any[];
};

export type TimelineProps = {
  items: TimelineItemProps[];
};

const TimelineItem = ({ month, year, children }: TimelineItemProps) => {
  const date = new Date(year, month);
  return (
    <li className="relative group border-l border-dashed -top-4 ms-4">
      <div className="pl-4">
        <span className="absolute bg-highlighted border-highlighted/40 rounded-full w-3 h-3 -start-1.5 top-2"></span>
        <time className="font-medium">{format(date, "MMMM Y")}</time>
        <div className="space-y-4 text-sm">{children}</div>
      </div>
    </li>
  );
};

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <ol className="antialiased space-y-4">
      {items.map((i) => (
        <TimelineItem key={`${i.month} ${i.year}`} {...i} />
      ))}
    </ol>
  );
};
