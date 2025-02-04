import { Suspense } from "react"

import Header1 from "@/app/components/Header1"
import Footer from "@/app/components/Footer"
import { loadStripe } from "@stripe/stripe-js"
import OrderConfirmationContent from "./order-confirmation-content"

// Initialize Stripe outside of the component
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export default function OrderConfirmation() {
  return (
    <>
      <Header1 />
      <Suspense
        fallback={
          <main className="container mx-auto px-4 py-8">
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
            </div>
          </main>
        }
      >
        <OrderConfirmationContent />
      </Suspense>
      <Footer />
    </>
  )
}

