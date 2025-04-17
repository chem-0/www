import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "../components/ui/nav-bar";

export const Route = createRootRoute({
  component: () => (
    <main>
      <Navbar />
      <Outlet />
    </main>
  ),
});
