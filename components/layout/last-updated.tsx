import { formatDistanceToNow } from "date-fns";

type LastUpdatedProps = {
  date: Date;
};

export const LastUpdated = ({ date }: LastUpdatedProps) => {
  return (
    <div className="flex w-full justify-end text-xs font-light italic">
      last updated: <b>{formatDistanceToNow(date)} ago</b>
    </div>
  );
};
