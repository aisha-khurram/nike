import React from 'react'
import Link from 'next/link'
import Header1 from './components/Header1'
import Header2 from './components/Header2'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Productslider from './components/Productslider'
import Feature from './components/Feature'
import GearUp from './components/Gearup'
import Dmiss from './components/Dmiss'
import Essentials from './components/Essentials'
import Tags from './components/Tags'
import BreadCrumb from './components/BreadCrumb'

export default function Home() {
  return (
    <div>
      <Header1/>
      <Header2/>
      <Hero/>
      <Productslider/>
      <Feature/>
      <GearUp/>
      <Dmiss/>
      <Essentials/>
      <Tags/>
      <BreadCrumb/>
      <Footer/>
      <main>
      
      <Link href="/products" className="...">
        Shop
      </Link>
    </main>
      
    </div>
  )
}
