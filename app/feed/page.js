"use client";

import { useState } from "react";
import RetroGrid from "@/components/ui/retro-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import TypingAnimation from "@/components/ui/typing-animation";

export default function FeedPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, input.trim()]);
    setInput("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start">
      {/* Retro Background */}
      <div className="absolute inset-0 -z-10">
        <RetroGrid />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-400">
          Social Feed
        </h1>

        {/* Messages */}
        <div className="space-y-4 mb-20">
          {messages.length === 0 ? (
            <p className="text-center text-gray-500">
              No messages yet. Be the first!
            </p>
          ) : (
            messages.map((msg, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm p-4">
                  <CardContent className="text-black">
                    <TypingAnimation>{msg}</TypingAnimation>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

        {/* Chat Input */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/20 backdrop-blur-md p-4">
          <div className="mx-auto w-full max-w-2xl flex gap-2">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-white/90 text-black"
            />
            <Button
              onClick={handleSend}
              className="bg-blue-500 text-white hover:bg-blue-600"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
