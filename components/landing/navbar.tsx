import Link from "next/link";
import { ClientLabIcon } from "../assets/client-lab-icon";

export default function Navbar() {
  const linksLeft = [
    {
      name: "Experiments",
      url: "/dash",
    },
    {
      name: "Resources",
      url: "/resources",
    },
  ];

  const linksRight = [
    {
      name: "Community",
      url: "/community",
    },
    {
      name: "Assistance",
      url: "/help",
    },
  ];
  return (
    <div className="backdrop-blur-2xl  top-0 sticky z-50">
      <nav className="w-full relative z-50 backdrop-blur-2xl flex items-center justify-between gap-2 max-w-7xl px-16 mx-auto py-4">
        <div className="flex text-base tracking-tighter items-center justify-center space-x-4">
          {linksLeft.map((link) => (
            <a
              key={link.name}
              className="font-semibold opacity-80 hover:opacity-100 transition-all"
              href={link.url}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="absolute -translate-x-1/2 left-1/2">
          <Link href={"/"} className="flex items-center gap-2">
            <ClientLabIcon />
            <span className="text-2xl font-semibold">
              chem<span className="text-blue-500 ">0</span>
            </span>
          </Link>
        </div>
        <div className="flex text-base tracking-tighter items-center justify-center space-x-4">
          {linksRight.map((link) => (
            <a
              key={link.name}
              className="font-semibold opacity-80 hover:opacity-100 transition-all"
              href={link.url}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
