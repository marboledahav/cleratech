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
      <div className="relative z-10 w-full text-center">
        <h1
          className="font-bold text-blue-400 mb-6"
          style={{ fontSize: "9rem", lineHeight: "1.1", display: "block" }}
        >
          <TypingAnimation>Clera.tech</TypingAnimation>
        </h1>

        {/* Center the ShimmerButton */}
        <ShimmerButton className="mx-auto shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Coming Soon
          </span>
        </ShimmerButton>
      </div>
    </main>
  );
}
