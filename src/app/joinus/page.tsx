import React from 'react'
import Footer from '../components/Footer'
import Header1 from '../components/Header1'
import Header2 from '../components/Header2'
import JoinUsForm from '../components/JoinUs'

export default function Joinus() {
  return (
    <div>
      <Header1/>
      <Header2/>
      <main className="min-h-[calc(100vh-160px)] bg-white">
        <JoinUsForm />
      </main>
      <Footer/>
    </div>
  )
}
