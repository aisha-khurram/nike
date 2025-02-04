"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckOutForm from "@/app/components/CheckOutForm"
import { useRouter } from "next/navigation"
import type React from "react" // Added import for React

// Initialize Stripe outside of the component
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export default function CheckoutContent() {
  const { cartItems, cartTotal } = useCart()
  const [clientSecret, setClientSecret] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
  })

  useEffect(() => {
    if (cartTotal > 0) {
      setIsLoading(true)
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Math.round(cartTotal * 100) }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret)
          setIsLoading(false)
        })
        .catch((error) => {
          console.error("Error creating payment intent:", error)
          setIsLoading(false)
        })
    }
  }, [cartTotal])

  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setShippingInfo((prev) => ({ ...prev, [name]: value }))
  }

  const appearance = {
    theme: "stripe" as const,
    variables: {
      colorPrimary: "#000000",
    },
  }

  const options = {
    clientSecret,
    appearance,
  }

  if (isLoading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <Image src="/image/nike.png" alt="Nike" width={60} height={21} sizes="60px" priority />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
            <form className="space-y-4">
              {Object.entries(shippingInfo).map(([key, value]) => (
                <div key={key}>
                  <label htmlFor={key} className="block text-sm font-medium mb-2">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleShippingInfoChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                    required
                  />
                </div>
              ))}
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between">
                  <span>
                    {item.productName} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="text-xl font-bold pt-4 border-t">Total: ${cartTotal.toFixed(2)}</div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Payment</h2>
              {clientSecret && (
                <Elements stripe={stripePromise} options={options}>
                  <CheckOutForm amount={cartTotal} shippingInfo={shippingInfo} cartItems={cartItems} />
                </Elements>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

