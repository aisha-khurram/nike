"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"
import type { Product } from "@/types/product"

type CartItem = Product & {
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

type CartContextType = {
  cartItems: CartItem[]
  addToCart: (product: Product, color?: string, size?: string) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  cartQuantity: number
}

const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product: Product, color?: string, size?: string) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item._id === product._id && item.selectedColor === color && item.selectedSize === size,
      )

      if (existingItem) {
        // Check if adding one more would exceed inventory
        if (existingItem.quantity + 1 > product.inventory) {
          return prevItems
        }
        return prevItems.map((item) =>
          item._id === product._id && item.selectedColor === color && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...prevItems, { ...product, quantity: 1, selectedColor: color, selectedSize: size }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) => {
      if (quantity === 0) {
        return prevItems.filter((item) => item._id !== productId)
      }

      return prevItems.map((item) => {
        if (item._id === productId) {
          // Check if new quantity would exceed inventory
          if (quantity > item.inventory) {
            return item
          }
          return { ...item, quantity }
        }
        return item
      })
    })
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem("cart")
  }

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

