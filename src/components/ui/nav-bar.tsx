import { Link, useMatchRoute } from "@tanstack/react-router";
import { ClientLabIcon } from "../assets/client-lab-icon";
import { ChevronLeft, MessageSquareIcon } from "lucide-react";

export const Navbar = () => {
  const links = [
    {
      name: "Simulation",
      url: "/simulation",
    },
    {
      name: "Resources",
      url: "/resources",
    },
    {
      name: "Community",
      url: "/community",
    },
    {
      name: "Help",
      url: "/help",
    },
  ];

  const matchRoute = useMatchRoute();
  const hideNavRoutes = ["/"];
  const matchedNoNavRoutes = hideNavRoutes.some((route) =>
    matchRoute({ to: route }),
  );

  if (matchedNoNavRoutes) {
    return null;
  }

  return (
    <nav className="flex bg-white top-0 sticky font-medium justify-between items-center h-[60px] gap-2 px-4 py-6 border-b border-gray-300">
      <div className="flex gap-x-16">
        <Link to={"/"} className="flex items-center gap-2">
          <ClientLabIcon />
          <span className="text-2xl font-semibold">
            chem<span className="text-blue-500 ">0</span>
          </span>
        </Link>
        <div className="flex items-center gap-4 tracking-tight text-gray-600">
          {links.map((link) => {
            return (
              <Link
                className="hover:text-black transition-all"
                activeOptions={{ exact: true }}
                search={(prev) => {
                  return link.name === "Simulation" ? { ...prev } : {};
                }}
                to={link.url}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="border border-neutral-300 hover:bg-neutral-50 cursor-pointer transition-all  flex items-center justify-center gap-2 p-2 px-4 pl-3 text-sm rounded-md">
          <ChevronLeft className="size-4" />
          Back to Simulations
        </button>
        <button className="border text-blue-600 hover:bg-blue-50 transition-all cursor-poniter border-blue-300 flex items-center justify-center gap-2 p-2 px-4 pl-3 text-sm rounded-md">
          <MessageSquareIcon className="size-4" />
          Contact Us
        </button>
      </div>
    </nav>
  );
};
