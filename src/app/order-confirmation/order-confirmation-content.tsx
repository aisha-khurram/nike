"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export default function OrderConfirmationContent() {
  const [status, setStatus] = useState<"success" | "processing" | "error" | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const clientSecret = searchParams.get("payment_intent_client_secret")
        if (!clientSecret) {
          setStatus("error")
          return
        }

        const stripe = await stripePromise
        if (!stripe) {
          throw new Error("Failed to load Stripe")
        }

        const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret)

        switch (paymentIntent?.status) {
          case "succeeded":
            setStatus("success")
            break
          case "processing":
            setStatus("processing")
            break
          case "requires_payment_method":
            setStatus("error")
            break
          default:
            setStatus("error")
            break
        }
      } catch (error) {
        console.error("Payment verification error:", error)
        setStatus("error")
      }
    }

    checkPaymentStatus()
  }, [searchParams])

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-8">
          <Image src="/image/nike.png" alt="Nike" width={60} height={21} priority />
        </div>

        <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>

        {status === "success" && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h2 className="text-green-800 font-semibold mb-2">Thank you for your purchase!</h2>
            <p className="text-green-700 mb-4">Your payment was successful and your order has been placed.</p>
            <p className="text-green-700">
              We'll send you an email with your order details and tracking information once your package has shipped.
            </p>
          </div>
        )}

        {status === "processing" && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h2 className="text-yellow-800 font-semibold mb-2">Payment Processing</h2>
            <p className="text-yellow-700">
              Your payment is being processed. We'll update you once the payment is complete.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h2 className="text-red-800 font-semibold mb-2">Payment Error</h2>
            <p className="text-red-700">
              There was an issue processing your payment. Please try again or contact customer support.
            </p>
          </div>
        )}

        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  )
}

