import Image from "next/image"
import { Button } from "@/components/ui/button"


const links = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
]


export default function Header() {
  return (
    <header className="flex items-center justify-between w-full max-w-[80%] lg:max-w-screen-lg fixed top-4 left-1/2 -translate-x-1/2 rounded-lg border-black/40 shadow bg-white px-4 py-2 z-50">
      <div className="flex items-center justify-center gap-2">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <span className="font-semibold">Client<span className="text-blue-500">Lab</span></span>
      </div>

      <nav className="hidden md:block">
        <ul className="flex gap-4">
          {links.map(({ name, href }) => (
            <li key={href}>
            <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <Button>Request a Demo</Button>


      
    </header>
  )
}
