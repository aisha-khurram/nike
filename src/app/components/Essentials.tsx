import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: "Men's",
    image: "/image/e1.png",
    href: "/essentials/mens"
  },
  {
    id: 2,
    name: "Women's",
    image: "/image/e2.png",
    href: "/essentials/womens"
  },
  {
    id: 3,
    name: "Kids'",
    image: "/image/e3.png",
    href: "/essentials/kids"
  }
];

export default function Essentials() {
  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-2xl font-bold mb-6">The Essentials</h2>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link 
              href={category.href} 
              key={category.id}
              className="relative group"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={category.image}
                  alt={`${category.name} Essentials`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Category Label */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white text-sm font-medium">
                    {category.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}