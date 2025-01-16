export default function TitleBadge({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <svg className="scale-x-[-1]" width="96" height="2" viewBox="0 0 96 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="1" x2="96" y2="1" stroke="url(#paint0_linear_4018_34)" strokeWidth="2" />
        <defs>
          <linearGradient id="paint0_linear_4018_34" x1="96" y1="2.5" x2="0" y2="2.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#335CFF" />
          </linearGradient>
        </defs>
      </svg>

      <span className="px-4 py-1 text-sm font-medium bg-blue-50 text-blue-600 rounded-full"> {title} </span>

      <svg width="96" height="2" viewBox="0 0 96 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="1" x2="96" y2="1" stroke="url(#paint0_linear_4018_34)" strokeWidth="2" />
        <defs>
          <linearGradient id="paint0_linear_4018_34" x1="96" y1="2.5" x2="0" y2="2.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#335CFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
