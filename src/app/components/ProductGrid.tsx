'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';
import { Product } from '@/types/product';

const product = [
  {
    id: 1,
    name: "Nike Air Max 90",
    category: "Men's Shoes",
    price: "₹ 9,695",
    colors: "3 Colours",
    image: "/image/p1.png",
    isNew: true,
    isSustainable: true
  },
  {
    id: 2,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    category: "Men's Running Top",
    price: "₹ 4,695",
    colors: "2 Colours",
    image: "/image/p2.png",
    isNew: true
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07",
    category: "Men's Shoes",
    price: "₹ 7,495",
    colors: "1 Colour",
    image: "/image/p3.png",
    isSustainable: true
  },
  {
    id: 4,
    name: "Nike Sportswear Club Fleece",
    category: "Men's Hoodie",
    price: "₹ 3,495",
    colors: "4 Colours",
    image: "/image/p4",
    isNew: true
  },
  {
    id: 5,
    name: "Nike Zoom Fly 5",
    category: "Men's Road Running Shoes",
    price: "₹ 13,995",
    colors: "2 Colours",
    image: "/image/p5.png",
    isNew: true
  },
  {
    id: 6,
    name: "Nike Dri-FIT Academy",
    category: "Men's Knit Football Shorts",
    price: "₹ 1,795",
    colors: "3 Colours",
    image: "/image/p6.png"
  },
  {
    id: 7,
    name: "Nike Air Max 270",
    category: "Men's Shoes",
    price: "₹ 12,795",
    colors: "4 Colours",
    image: "/image/p7.png",
    isSustainable: true
  },
  {
    id: 8,
    name: "Nike Dri-FIT Run Division",
    category: "Men's Running Jacket",
    price: "₹ 5,995",
    colors: "2 Colours",
    image: "/image/p8.png",
    isNew: true
  },
  {
    id: 9,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p9.png"
  },
  {
    id: 10,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p10.png"
  },
  {
    id: 11,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p11.png"
  },
  {
    id: 12,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p12.png"
  
  },
  {
    id: 13,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p13.png"
  },
  {
    id: 14,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p14.png"
  },
  {
    id: 15,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p15.png"
  },
  {
    id: 16,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p16.png"
  },
  {
    id: 17,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p17.png"
  },
  {
    id: 18,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p18.png"
  },
  {
    id: 19,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p19.png"
  },
  {
    id: 20,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p20.png"
  },
  {
    id: 21,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p21.png"
  },
  {
    id: 22,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p22.png"
  },
  {
    id: 23,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p23.png"
  },
  {
    id: 24,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p24.png"
  },
  {
    id: 25,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p25.png"
  },
  {
    id: 26,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p26.png"
  },
  {
    id: 27,
    name: "Nike Metcon 8",
    category: "Training Shoes",
    price: "₹ 11,495",
    colors: "5 Colours",
    image: "/image/p27.png"
  },
  {
    id: 28,
    name: "Nike Pegasus 39",
    category: "Men's Road Running Shoes",
    price: "₹ 10,795",
    colors: "3 Colours",
    image: "/image/p28.png",
    isNew: true
  },
  {
    id: 29,
    name: "Nike Tech Fleece",
    category: "Men's Full-Zip Hoodie",
    price: "₹ 6,495",
    colors: "2 Colours",
    image: "/image/p29.png",
    isSustainable: true
  },
  {
    id: 30,
    name: "Nike Free Run 5.0",
    category: "Men's Road Running Shoes",
    price: "₹ 8,295",
    colors: "4 Colours",
    image: "/image/p30",
    isNew: true
  }
];

export default function ProductGrid() {
  const handleWishlist = (e: React.MouseEvent<HTMLButtonElement>, productId: number) => {
    e.preventDefault();
    console.log('Added to wishlist:', productId);
  };

  return (
    <div className="flex-1 pt-0 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {product.map((product: Product) => (
          <Link 
            href={`/products/${product.id}`} 
            key={product.id} 
            className="group"
          >
            <div className="relative">
              <div className="relative w-[348px] h-[348px] mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                  priority={product.id <= 6}
                  sizes="(max-width: 348px) 100vw, 348px"
                  />
                  <button 
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                    onClick={(e) => handleWishlist(e, product.id)}
                    aria-label="Add to wishlist"
                  >
                    <FiHeart className="w-5 h-5" />
                  </button>
                </div>
  
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-medium">{product.name}</h3>
                      <p className="text-gray-600">{product.category}</p>
                    </div>
                    <span className="text-base font-medium">{product.price}</span>
                  </div>
                  
                  <p className="text-gray-600">{product.colors}</p>
                  {(product.isNew || product.isSustainable) && (
                  <div className="flex gap-2">
                    {product.isNew && (
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                        New
                      </span>
                    )}
                    {product.isSustainable && (
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                        Sustainable Materials
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}