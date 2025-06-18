"use client";
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function AfterLoginPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setTimeout(() => {
      setMessages(msgs => [...msgs, { sender: "bot", text: `You said: ${input}` }]);
    }, 500);
    setInput("");
  };

  // If user is not authenticated, show login prompt
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
        <div className="text-center space-y-6 max-w-2xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 text-center sm:text-2xl">
            Get Legal Help
          </h2>
          <p className="text-gray-400 text-lg md:text-xl sm:text-base">
            Login to access our AI-powered legal assistance
          </p>
          <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            Login to Continue
          </button>
        </div>
      </div>
    );
  }

  // If user is authenticated, show chat interface
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black">
      {/* Centered Prompt */}
      <div className="flex-1 flex flex-col items-center justify-center px-2 py-6 sm:py-10">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">Ask Anything</h2>
        <span className="text-gray-400 text-base sm:text-lg md:text-xl mb-2">Legal Care</span>
        {user && (
          <p className="text-gray-500 text-xs sm:text-sm mt-1 mb-4">Welcome, {user.name || user.email}</p>
        )}
        <div className="w-full max-w-2xl mt-4 space-y-3 sm:space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-xl px-3 py-2 sm:px-4 sm:py-2 max-w-[80%] text-sm sm:text-base md:text-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-100'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Chat Input Bar */}
      <form onSubmit={handleSend} className="w-full flex justify-center pb-4 sm:pb-8 px-2 bg-black">
        <div className="bg-[#232323] rounded-2xl flex items-center px-2 py-2 w-full max-w-2xl shadow-lg">
          <input
            type="text"
            placeholder="Type your question..."
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-sm sm:text-base md:text-lg px-2"
            value={input}
            onChange={e => setInput(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 md:px-6 md:py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-sm sm:text-base md:text-lg"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
} 