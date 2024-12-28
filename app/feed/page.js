"use client";

import { useState } from "react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import TypingAnimation from "@/components/ui/typing-animation";
import ShimmerButton from "@/components/ui/shimmer-button";
import AvatarCircles from "@/components/ui/avatar-circles";
import { cn } from "@/lib/utils";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

export default function FeedPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, input.trim()]);
    setInput("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-800">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <DotPattern
          width={50}
          height={50}
          cx={5}
          cy={5}
          cr={3}
          className={cn("opacity-20 text-gray-300")}
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto py-8 px-6">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-center mb-4 text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
          Live Feed
        </h1>

        {/* Avatar Circles with "Online" */}
        <div className="flex flex-col items-center mb-10">
          <AvatarCircles numPeople={99} avatarUrls={avatars} />
          <div className="mt-4 flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-medium text-gray-600 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Online
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-6 mb-24">
          {messages.length === 0 ? (
            <p className="text-center text-gray-500">
              Be the first to start the conversation! 💬
            </p>
          ) : (
            messages.map((msg, idx) => (
              <Card
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl shadow-lg p-6 transition-transform hover:scale-105"
              >
                <CardContent className="text-lg font-medium text-gray-800">
                  <TypingAnimation>{msg}</TypingAnimation>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Chat Input */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-md">
          <div className="mx-auto w-full max-w-3xl flex gap-4 items-center">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-gray-100 text-gray-800 placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              className="cursor-pointer"
              onClick={handleSend} // Attach handler to ShimmerButton
            >
              <ShimmerButton className="shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                  Send
                </span>
              </ShimmerButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
