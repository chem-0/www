export default function Video({ className }: { className?: string }) {
  return (
    <div className={`w-full max-w-[850px] ${className}`}>
      <iframe
        width="1200"
        height="630"
        src="https://www.youtube.com/embed/-p0pn3c-5c8?si=3Z7i2AjPCDgzhYie"
        title="YouTube video player"
        allow=""
        className="w-full h-auto aspect-video rounded-2xl overflow-hidden"
      />
    </div>
  )
}
