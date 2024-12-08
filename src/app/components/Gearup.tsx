import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top",
    price: "₹ 3,895",
    image: "/image/dmiss.png"
  },
  {
    id: 2,
    name: "Nike Dri-FIT Challenger Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: "₹ 2,495",
    image: "/image/dmiss1.png"
  },
  {
    id: 3,
    name: "Nike Dri-FIT ADV Run Division Women's Long-Sleeve Running Top",
    price: "₹ 5,295",
    image: "/image/dmiss2.png"
  },
  {
    id: 4,
    name: "Nike Fast Women's Mid-Rise 7/8 Running Leggings with Pockets",
    price: "₹ 3,795",
    image: "/image/dmiss3.png"
  }
];

export default function GearUp() {
  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-2xl font-bold mb-8">Gear Up</h2>

        <div className="relative">
          {/* Shop Men's Toggle */}
          <div className="absolute left-[325px] -top-10 flex items-center gap-2">
            <span className="text-sm">Shop Men's</span>
            <div className="flex gap-1">
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

          {/* Shop Women's Toggle */}
          <div className="absolute right-0 -top-10 flex items-center gap-2">
            <span className="text-sm">Shop Women's</span>
            <div className="flex gap-1">
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

          {/* Products Row */}
          <div className="flex gap-6">
            {products.map((product) => (
              <Link href="#" key={product.id} className="block w-[300px]">
                <div className="bg-[#f5f5f5] rounded-lg overflow-hidden">
                  <div className="relative w-[300px] h-[300px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="mt-1 text-sm">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}