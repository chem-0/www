"use client";

import Link from "next/link";
import { ClientLabIcon } from "../assets/client-lab-icon";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  url: string;
  external?: boolean;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linksLeft: NavLink[] = [
    {
      name: "Features",
      url: "#features",
    },
    {
      name: "About",
      url: "#about",
    },
  ];

  const linksRight: NavLink[] = [
    {
      name: "FAQ",
      url: "#faq",
    },
    {
      name: "Contact",
      url: "https://cal.com/chem0/secret",
      external: true,
    },
  ];

  const allLinks = [...linksLeft, ...linksRight];

  return (
    <div className="backdrop-blur-2xl top-0 sticky z-50">
      <nav className="w-full relative z-50 backdrop-blur-2xl flex items-center justify-between gap-2 max-w-7xl px-4 md:px-8 lg:px-16 mx-auto py-4">
        {/* Logo - Always visible */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Link href={"/"} className="flex items-center gap-2">
            <ClientLabIcon size={32} />
            <span className="text-xl md:text-2xl font-semibold">
              chem<span className="text-blue-500">0</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-base tracking-tighter items-center justify-center space-x-4">
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
        <div className="hidden md:flex text-base tracking-tighter items-center justify-center space-x-4">
          {linksRight.map((link) => (
            <a
              key={link.name}
              className="font-semibold opacity-80 hover:opacity-100 transition-all"
              href={link.url}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl p-4 flex flex-col space-y-4 md:hidden border-t">
            {allLinks.map((link) => (
              <a
                key={link.name}
                className="font-semibold opacity-80 hover:opacity-100 transition-all"
                href={link.url}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
