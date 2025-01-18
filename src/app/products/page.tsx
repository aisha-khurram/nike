// app/products/page.tsx
import React from 'react';

import Header1 from '../components/Header1';
import Header2 from '../components/Header2';
import Header3 from '../components/Header3';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';
import RelatedTags from '../components/RelatedTags';
import Footer from '../components/Footer';
import { fetchProductsFromSanity } from '@/lib/sanity';

export default async function ProductPage() {
  
  // Fetch products from Sanity
  const products = await fetchProductsFromSanity();

  return (
    <div>
      <Header1 />
      <Header2 />
      <Header3 />

      <main className="max-w-[1440px] mx-auto">
        <div className="flex">
          <Sidebar />
          {/* Pass the fetched products to the ProductGrid component */}
          <ProductGrid product={products} />
        </div>
      </main>

      <RelatedTags />
      <Footer />
    </div>
  );
}