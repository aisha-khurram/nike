"use client"

import { useState } from "react"
import Image from "next/image"
import type { Product } from "@/types/product"
import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"

type ProductDetailsProps = {
  initialProduct: Product
}

export default function ProductDetails({ initialProduct }: ProductDetailsProps) {
  const [selectedColor, setSelectedColor] = useState<string | undefined>()
  const [selectedSize, setSelectedSize] = useState<string | undefined>()
  const { addToCart } = useCart()
  const router = useRouter()

  const handleAddToCart = () => {
    // Add to cart and navigate to cart page
    addToCart(initialProduct, selectedColor, selectedSize)
    router.push("/cart")
  }

  const imageUrl = initialProduct.image?.asset?.url

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="relative aspect-square">
        {imageUrl ? (
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={initialProduct.productName}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div>No image available</div>
        )}
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">{initialProduct.productName}</h1>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">₹{initialProduct.price}</p>
          {initialProduct.status === "Just In" && (
            <span className="bg-black text-white px-3 py-1 rounded-full text-sm">New Arrival</span>
          )}
        </div>
        <p className="text-gray-600">{initialProduct.description}</p>

        {/* Category */}
        <div>
          <p className="text-sm text-gray-500">Category</p>
          <p className="font-medium">{initialProduct.category}</p>
        </div>

        {/* Color Selection */}
        {initialProduct.colors && initialProduct.colors.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Select Color</h3>
            <div className="flex gap-2">
              {initialProduct.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedColor === color ? "border-black bg-black text-white" : "border-gray-200 hover:border-black"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Size Selection - Only show if sizes is true */}
        {initialProduct.sizes && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Select Size</h3>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size ? "border-black bg-black text-white" : "border-gray-200 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Inventory Status */}
        <div>
          <p className="text-sm text-gray-500">
            {initialProduct.inventory > 0 ? `${initialProduct.inventory} items in stock` : "Out of stock"}
          </p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={initialProduct.inventory === 0}
          className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {initialProduct.inventory === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  )
}

