import { Suspense } from "react"

import Header1 from "@/app/components/Header1"
import Footer from "@/app/components/Footer"
import CheckoutContent from "./checkout-content"

export default function CheckoutPage() {
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
        <CheckoutContent />
      </Suspense>
      <Footer />
    </>
  )
}

