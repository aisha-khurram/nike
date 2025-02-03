"use client"

import { useState, type FormEvent } from "react"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"

interface CheckOutFormProps {
  amount: number
  shippingInfo: {
    name: string
    email: string
    address: string
    city: string
    state: string
    zip: string
    country: string
  }
  cartItems: Array<{
    _id: string
    productName: string
    quantity: number
    price: number
  }>
}

export default function CheckOutForm({ amount, shippingInfo }: CheckOutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!stripe || !elements) {
      console.error("Stripe.js hasn't loaded yet.")
      return
    }

    setIsProcessing(true)
    setErrorMessage(null)

    try {
      const { error: submitError } = await elements.submit()
      if (submitError) {
        throw submitError
      }

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/order-confirmation`,
          payment_method_data: {
            billing_details: {
              name: shippingInfo.name,
              email: shippingInfo.email,
              address: {
                line1: shippingInfo.address,
                city: shippingInfo.city,
                state: shippingInfo.state,
                postal_code: shippingInfo.zip,
                country: shippingInfo.country,
              },
            },
          },
        },
      })

      if (error) {
        throw error
      }
    } catch (error) {
      console.error("Payment error:", error)
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred")
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement
        options={{
          layout: "tabs",
        }}
      />
      {errorMessage && <div className="text-red-500 mt-4 p-3 bg-red-50 rounded-md">{errorMessage}</div>}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-black text-white py-3 mt-4 rounded-full hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isProcessing ? "Processing..." : `Pay $${amount.toFixed(2)}`}
      </button>
    </form>
  )
}

