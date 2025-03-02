"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react";
import { Session } from "inspector/promises";

export function NavbarDemo() {

  
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

  function Navbar({ className }: { className?: string }) {

  
  const { data: session, status } = useSession();
  console.log("Session status:", status);
  console.log("Session data:", session);

  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-md py-2 px-4 rounded-full w-[60%]", className)}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <h1 className="text-xl font-bold relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">WriteWiz⚡</h1>
        
        {/* Centered Menu */}
        <Menu setActive={setActive} className="flex-1 flex justify-center space-x-8">
        <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="About">
            <div className="text-sm grid grid-cols-2 gap-10 p-4"></div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="GitHub">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          
          <MenuItem setActive={setActive} active={active} item="Support">
            
          </MenuItem>
        </Menu>

        {/* Sign-up button on the right */}
        {session ? (
        // This is the UI when user is logged in
        <div className="flex gap-4">
          <h1 className=" text-base   font-bold relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
             Hey,{session.user.name || session.user.email}
          </h1>
          <button 
            className="bg-black text-white px-4 py-1 rounded-full" 
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            LogOut
          </button>
        </div>
      ) : (
        <button 
          className="bg-black text-white px-4 py-1 rounded-full" 
          onClick={() => router.push("/LogIn")}
        >
          Login
        </button>
      )}


      </div>
    </div>
  );
}
