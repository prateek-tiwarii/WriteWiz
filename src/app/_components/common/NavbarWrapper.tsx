"use client";

import { usePathname } from "next/navigation";
import { NavbarDemo } from "@/app/_components/common/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hiddenRoutes = ["/signUp", "/LogIn"];

  return !hiddenRoutes.includes(pathname) ? <NavbarDemo /> : null;
}
