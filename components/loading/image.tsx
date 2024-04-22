export function ImageSkeleton({ className }: { className?: string}) {
  return (
    <div className={["animate-pulse", className].join(" ")}></div>
  )
}