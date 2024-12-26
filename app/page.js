"use client";

import RetroGrid from "@/components/ui/retro-grid";
import TypingAnimation from "@/components/ui/typing-animation";
import ShimmerButton from "@/components/ui/shimmer-button";

export default function HomePage() {
  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* RetroGrid background */}
      <div className="absolute inset-0 -z-10">
        <RetroGrid />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-screen-md mx-auto p-4 text-center">
        <h1
          className="
            mb-6
            font-bold
            text-blue-400
            text-6xl         /* base (mobile) */
            md:text-8xl      /* medium screens (≥768px) */
            lg:text-9xl      /* large screens (≥1024px) */
            leading-tight
          "
        >
          <TypingAnimation>Clera.tech</TypingAnimation>
        </h1>
        
        <ShimmerButton className="mx-auto shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Coming Soon
          </span>
        </ShimmerButton>
      </div>
    </main>
  );
}
