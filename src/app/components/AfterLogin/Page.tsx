"use client";
import React, { useState } from 'react';

export default function AfterLoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Call your auth provider's logout method here
    setIsLoggedIn(false); // Or update your auth state accordingly
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black">
      {/* Centered Prompt */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-white text-3xl font-bold mb-4 text-center">What can I help with?</h2>
        <span className="text-gray-400 text-lg">Legal Care</span>
      </div>
      {/* Chat Input Bar */}
      <div className="w-full flex justify-center pb-8">
        <div className="bg-[#232323] rounded-2xl flex items-center px-4 py-3 w-full max-w-2xl shadow-lg">
          <input
            type="text"
            placeholder="Ask anything"
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-lg px-2"
            disabled
          />
          <button className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-1 rounded transition">
            <span className="text-xl">🌐</span>
            <span className="text-sm">Search</span>
          </button>
          <button className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-1 rounded transition ml-2">
            <span className="text-xl">🎤</span>
            <span className="text-sm">Voice</span>
          </button>
        </div>
      </div>
    </div>
  );
} 