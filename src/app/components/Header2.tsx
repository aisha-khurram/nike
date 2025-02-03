"use client"
import Image from "next/image"
import { CiSearch, CiShoppingCart } from "react-icons/ci"
import Link from "next/link"
import { useCart } from "@/context/CartContext"

export default function Header2() {
  const { cartQuantity } = useCart()

  return (
    <div className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-1440px flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Image src="/image/nike.png" alt="logo" width={78.7} height={78.7} />
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-slate-600 font-bold text-base hover:text-black">
            New & Featured
          </a>
          <a href="#" className="text-slate-600 font-bold text-base hover:text-black">
            Men
          </a>
          <a href="#" className="text-slate-600 font-bold text-base hover:text-black">
            Women
          </a>
          <a href="#" className="text-slate-600 font-bold text-base hover:text-black">
            Kids
          </a>
          <Link href="/products" className="text-slate-600 font-bold text-base hover:text-black">
            Sale
          </Link>
          <a href="#" className="text-slate-600 font-bold text-base hover:text-black">
            SNKRS
          </a>
        </nav>
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2">
            <input type="text" placeholder="What are u looking for?" className="bg-slate-100 outline-none text-sm" />
            <CiSearch />
          </div>
          <Link href="/cart" className="relative">
            <CiShoppingCart className="text-2xl" />
            {cartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

