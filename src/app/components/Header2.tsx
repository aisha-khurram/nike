import React from 'react'
import Image from 'next/image'
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci'

export default function Header2() {
  return (
    <div className="bg-white border-gray-200 dark:bg-gray-900">
        <div className='max-w-screen-1440px flex flex-wrap items-center justify-between mx-auto p-4'>
            <div className='flex items-center'>
                <Image
                src="/image/nike.png"
                alt="logo"
                width={78.7}
                height={78.7}
                />
            </div>
            <nav className='hidden md:flex space-x-8 items-center'>
                <a href="#" className='text-slate-600 font-bold text-base hover:text-black'>New & Featured</a>
                <a href="#" className='text-slate-600 font-bold text-base hover:text-black'>Men</a>
                <a href="#" className='text-slate-600 font-bold text-base hover:text-black'>Women</a>
                <a href="#" className='text-slate-600 font-bold text-base hover:text-black'>Kids</a>
                <a href="#" className='text-slate-600 font-bold text-base hover:text-black'>Sale</a>
                <a href="#" className='text-slate-600 font-bold text-base hover:text-black'>SNKRS</a>
            </nav>
            <div className='flex items-center space x-6'>
                <div className='hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2'>
                    <input type="text"
                    placeholder='What are u looking for?'
                    className='bg-slate-100 outline-none text-sm'/>
                    <CiSearch/>

                </div>
                <CiHeart className="text-xl mt-2 rounded-sm"/>
                <CiShoppingCart className='text-xl mt-2 rounded-sm' />
        </div>
      
    </div>
    </div>
  )
}
