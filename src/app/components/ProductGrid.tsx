"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiHeart } from 'react-icons/fi';
import { client } from '@/sanity/lib/client';

import { productsQuery } from '@/sanity/lib/queries';
import { Product } from '@/types/product';

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch<Product[]>(productsQuery);
        // Filter out null or invalid products
        const validProducts = fetchedProducts.filter(
          (product): product is Product =>
            product !== null &&
            typeof product === 'object' &&
            'productName' in product &&
            'slug' in product &&
            product.slug?.current !== undefined
        );
        setProducts(validProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleWishlist = (e: React.MouseEvent<HTMLButtonElement>, productName: string) => {
    e.preventDefault();
    console.log('Added to wishlist:', productName);
  };

  return (
    <div className="flex-1 pt-0 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {products.map((product, index) => (
          <Link href={`/products/${product.slug.current}`} key={product._id} className="group">
            <div className="relative">
              <div className="relative w-[348px] h-[348px] mb-4">
                <Image
                  src={product.image?.asset?.url || '/placeholder.svg'}
                  alt={product.productName}
                  fill
                  className="object-cover rounded-lg"
                  priority={index <= 5}
                  sizes="(max-width: 348px) 100vw, 348px"
                />
                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleWishlist(e, product.productName)}
                  aria-label="Add to wishlist"
                >
                  <FiHeart className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-medium">{product.productName}</h3>
                    <p className="text-gray-600">{product.category}</p>
                  </div>
                  <span className="text-base font-medium">₹{product.price}</span>
                </div>

                <p className="text-gray-600">{product.colors?.join(', ')}</p>
                {product.status === 'Just In' && (
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded">New</span>
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