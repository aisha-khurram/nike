"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, useStripe } from "@stripe/react-stripe-js"
import Header1 from "@/app/components/Header1"
import Header2 from "@/app/components/Header2"
import Footer from "@/app/components/Footer"
import Link from "next/link"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function OrderConfirmationContent() {
  const [status, setStatus] = useState<"success" | "processing" | "error" | null>(null)
  const searchParams = useSearchParams()
  const stripe = useStripe()

  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = searchParams.get("payment_intent_client_secret")

    if (clientSecret) {
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
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
      })
    }
  }, [stripe, searchParams])

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Order Confirmation</h1>
      {status === "success" && (
        <>
          <p className="mb-4">
            Thank you for your purchase! Your payment was successful and your order has been placed.
          </p>
          <p className="mb-8">
            We'll send you an email with your order details and tracking information once your package has shipped.
          </p>
        </>
      )}
      {status === "processing" && (
        <p className="mb-4">Your payment is being processed. We'll update you once the payment is complete.</p>
      )}
      {status === "error" && (
        <p className="mb-4 text-red-500">
          There was an issue processing your payment. Please try again or contact customer support.
        </p>
      )}
      <Link href="/" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
        Continue Shopping
      </Link>
    </main>
  )
}

export default function OrderConfirmation() {
  return (
    <Elements stripe={stripePromise}>
      <Header1 />
      <Header2 />
      <OrderConfirmationContent />
      <Footer />
    </Elements>
  )
}

