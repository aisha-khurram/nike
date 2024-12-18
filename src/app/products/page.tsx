import React from 'react'
import Footer from '../components/Footer'
import Header1 from '../components/Header1'
import Header2 from '../components/Header2'
import Header3 from '../components/Header3'
import Sidebar from '../components/Sidebar'
import ProductGrid from '../components/ProductGrid'
import RelatedTags from '../components/RelatedTags'

export default function Product() {
  return (
    <div>
      <Header1/>
      <Header2/>
      <Header3/>
      
      <main className="max-w-[1440px] mx-auto">
      <div className="flex">
        <Sidebar />
        <ProductGrid />
      </div>
    </main>
    <RelatedTags/>
      <Footer/>
    </div>
  )
}
