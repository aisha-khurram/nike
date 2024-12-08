import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Nike Air Max Pulse',
    category: "Women's Shoes",
    price: '₹ 13,995',
    image: '/image/nikeshoe1.png'
  },
  {
  
    id: 2,
    name: 'Nike Air Max Pulse',
    category: "Men's Shoes",
    price: '₹ 13,995',
    image: '/image/nikeshoe.png'
  },
  {
    id: 3,
    name: 'Nike Air Max 97 SE',
    category: "Men's Shoes",
    price: '₹ 16,995',
    image: '/image/nikeshoe2.png'
  },
];

export default function ProductSlider() {
  return (
    <div className="w-full px-6 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium">Best of Air Max</h2>
        <div className="flex gap-2">
          <span className="text-sm">Shop</span>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link href="#" key={product.id} className="group">
            <div className="bg-[#f5f5f5] rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.category}</p>
              <p className="font-medium">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}