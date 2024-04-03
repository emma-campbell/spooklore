export const PostType = ({ type }: { type: any }) => {
  return (
    <span className={"bg-highlighted text-secondary rounded-md px-2"}>
      {type}
    </span>
  )
}