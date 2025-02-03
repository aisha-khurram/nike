"use client"

import type { Product } from "@/types/product"
import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"

export default function Cart({ product }: { product: Product }) {
  const { addToCart, cartItems, updateQuantity } = useCart()
  const router = useRouter()
  const cartItem = cartItems.find((item) => item._id === product._id)

  const handleAddToCart = () => {
    addToCart(product)
    router.push("/cart")
  }

  if (!cartItem) {
    return (
      <button
        onClick={handleAddToCart}
        className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
      >
        Add to Cart
      </button>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => updateQuantity(product._id, Math.max(0, cartItem.quantity - 1))}
        className="bg-gray-200 text-black px-3 py-1 rounded-full"
      >
        -
      </button>
      <span>{cartItem.quantity}</span>
      <button
        onClick={() => updateQuantity(product._id, cartItem.quantity + 1)}
        className="bg-gray-200 text-black px-3 py-1 rounded-full"
      >
        +
      </button>
    </div>
  )
}

