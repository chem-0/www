import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden py-16 md:py-24 bg-black text-gray-200">
      <div className="max-w-7xl px-6 md:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-20 gap-8">
          <div className="max-w-xs">
            <h3 className="text-2xl font-bold mb-4">
              chem<span className="text-client-lab-secondary">0</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Next-Gen AI powered 3D virtual Lab for chemistry education.
            </p>
          </div>

          {/* Newsletter subscription */}
          <div className="w-full md:w-auto max-w-md">
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
              Stay Updated
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-client-lab-secondary/20 border-none placeholder:text-neutral-400 font-semibold text-white focus:border-purple-500 focus:ring-purple-500/20 h-11"
              />
              <Button className="bg-client-lab-secondary hover:bg-client-lab-secondary/70 font-bold transition-colors h-11 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Middle section with links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 mb-16 md:mb-20">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-5">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Chem0. All rights reserved.
          </p>

          <div className="flex space-x-5">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={18} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={18} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={18} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Subtle gradient accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
}
