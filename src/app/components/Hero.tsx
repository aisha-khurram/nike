import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Top App Banner */}
      <div className="w-full bg-white py-2 text-center text-sm">
        Hello Nike App
        <span className="ml-2 text-gray-600">
          Download the app to unlock everything Nike Has On-Site
        </span>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-4 pt-8 pb-16">
        {/* Image Container */}
        <div className="relative w-full aspect-[16/9] mb-12">
          <Image
            src="/image/hero.png"
            alt="Nike Air Max Pulse"
            fill
            className="object-contain"
            priority
          />
       
       
        </div>

        {/* Text Content */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm mb-2">First Look</p>
          <h1 className="text-4xl font-bold mb-4">NIKE AIR MAX PULSE</h1>
          <p className="text-gray-600 mb-8">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            —designed to push you past your limits and help you go to the max.
          </p>
          
          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Notify Me
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}