import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Featured() {
  return (
    <section className="w-1344 h-925 px-6 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Featured</h2>
        
        <div className="flex flex-col">
          {/* Image Container */}
          <div className="relative w-full h-[600px] rounded-lg overflow-hidden mb-6">
            <Image
              src="/image/feature.png"
              alt="Runner on mountain trail"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Content Below Image */}
          <div className="w- text-center">
            <h3 className="text-4xl font-bold mb-4 leading-9">STEP INTO WHAT FEELS GOOD</h3>
            <p className="text-lg mb-6 text-gray-600 leading-3 m-84">Cause everyone should know the feeling of running in that perfect pair.
             
            </p>
            <Link 
              href="/collection/trail-running"
              className="inline-block bg-black text-white px-8 py-3 rounded-full content-center hover:bg-gray-800 transition-colors"
            >
              Find your Shoe 
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}