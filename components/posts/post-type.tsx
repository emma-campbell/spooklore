export const PostType = ({ type }: { type: any }) => {
  return (
    <span className="bg-highlighted rounded-md px-2">
      <p className="text-secondary">{type}</p>
    </span>
  );
};
