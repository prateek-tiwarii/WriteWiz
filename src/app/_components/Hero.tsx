import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
      Blog Better, Faster, and <br /> Smarter with AI by Your Side.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
      Effortless Blogging, Inspired Writing
      </p>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8">
        <button className="btn btn-primary border border-white  p-3 rounded-3xl">Get Started</button>
        <button className="btn btn-secondary border border-white p-3 rounded-3xl">Learn More</button>
        </div>
    </BackgroundLines>
  );
}
