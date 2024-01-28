export function ImageSkeleton({ className }: { className?: string}) {
  return (
    <div className={["animate-pulse", className].join(" ")}>
      <div className="bg-white/30 rounded-md w-32 h-48"></div>
    </div>
  )
}