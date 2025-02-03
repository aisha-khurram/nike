"use client"

import { useCart } from "@/context/CartContext"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Header1 from "@/app/components/Header1"
import Header2 from "@/app/components/Header2"
import Footer from "@/app/components/Footer"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartQuantity } = useCart()
  const router = useRouter()

  return (
    <>
      <Header1 />
      <Header2 />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart ({cartQuantity})</h1>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="mb-8">Your cart is empty</p>
            <Link
              href="/products"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-6 border-b pb-4">
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image.asset.url || "/placeholder.svg"}
                    alt={item.productName}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{item.productName}</h3>
                  <p className="text-gray-600">
                    ${item.price} x {item.quantity}
                  </p>
                  {item.selectedColor && <p className="text-sm text-gray-500">Color: {item.selectedColor}</p>}
                  {item.selectedSize && <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>}
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item._id, Math.max(0, item.quantity - 1))}
                      className="bg-gray-200 text-black px-3 py-1 rounded-full"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="bg-gray-200 text-black px-3 py-1 rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item._id)} className="text-red-600 hover:text-red-800">
                  Remove
                </button>
              </div>
            ))}

            <div className="text-xl font-bold mt-8">Total: ${cartTotal.toFixed(2)}</div>

            <div className="flex gap-4 justify-end mt-8">
              <Link
                href="/products"
                className="bg-white text-black px-6 py-3 rounded-full border border-black hover:bg-gray-100 transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                href="/checkout"
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}

