export default function Scaffold({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={`px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-lg  ${className}`}>
      { children }
    </section>
  )
}
