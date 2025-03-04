"use client"
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export function BackgroundBeamsWithCollisionDemo() {
  const { data: session, status } = useSession();

  const router = useRouter();

  return (
    <BackgroundBeamsWithCollision className="bg-black">
      <h2 className="text-2xl  relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
      Blog Better, Faster, and
      Smarter with{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">AI by Your Side.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">AI by Your Side.</span>
          </div>
        
          

        </div>

        <div className="flex flex-row gap-7 text-center mt-5 font-medium  text-xl items-center justify-center ">
            <button className="border border-white rounded-2xl bg-gray-950 p-2">Get Started</button>

            {session ?(<button className="border border-white rounded-2xl bg-gray-950 p-2" onClick={() => router.push("/dashboard")}>Dashoard</button>):(<button className="border border-white rounded-2xl bg-gray-950 p-2">How it works</button>)}

          </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}


