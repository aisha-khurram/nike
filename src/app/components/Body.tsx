'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi';

const sizes = ['UK 6', 'UK 6.5', 'UK 7', 'UK 7.5', 'UK 8', 'UK 8.5', 'UK 9', 'UK 9.5', 'UK 10'];

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full">
            <Image
              src="/image/p3.png"
              alt="Nike Air Max 90"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square">
              <Image
                src="/image/p3.png"
                alt="Product view 2"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/image/p3.png"
                alt="Product view 3"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-medium mb-2">Nike Air Max 90</h1>
            <p className="text-gray-600">Men's Shoes</p>
            <p className="text-xl font-medium mt-4">₹ 9,695</p>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex justify-between mb-4">
              <h2 className="font-medium">Select Size</h2>
              <button className="text-gray-600 text-sm">Size Guide</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`py-3 rounded-md border ${
                    selectedSize === size
                      ? 'border-black'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center gap-3">
              <button
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                <FiMinus />
              </button>
              <span>{quantity}</span>
              <button
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                onClick={() => setQuantity(quantity + 1)}
              >
                <FiPlus />
              </button>
            </div>
          </div>

          {/* Add to Cart & Wishlist */}
          <div className="flex gap-4">
            <button className="flex-1 bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-colors">
              Add to Bag
            </button>
            <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400">
              <FiHeart className="w-6 h-6" />
            </button>
          </div>

          {/* Product Description */}
          <div className="prose prose-sm max-w-none pt-6 border-t">
            <p>
              The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, 
              stitched overlays and classic TPU accents. Fresh colors give a modern look while Max Air 
              cushioning adds comfort to your journey.
            </p>
            <ul className="mt-4 space-y-2">
              <li>Shown: White/Black/Pure Platinum</li>
              <li>Style: CN8490-100</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}