import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FlightEssentials() {
  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-sm mb-4">Don't Miss</h2>
        
        {/* Image Container */}
        <div className="relative w-full mb-8">
          <div className="relative aspect-[2/1] w-full">
            <Image
              src="/image/dmiss4.png"
              alt="Jordan Brand Spring 2023"
              fill
              className="object-cover"
              priority
            />
            
          
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">FLIGHT ESSENTIALS</h1>
          <p className="text-lg mb-6">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <Link 
            href="/collection/jordan-essentials"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Shop
          </Link>
        </div>
      </div>
    </section>
  );
}