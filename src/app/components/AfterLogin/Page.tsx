import React from 'react';

export default function AfterLoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <img src="/Assets/home.png" alt="Welcome" className="rounded-xl shadow-lg w-96 h-auto" />
      <h2 className="text-white text-3xl mt-8 font-bold">Welcome! You are now logged in.</h2>
    </div>
  );
} 