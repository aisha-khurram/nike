import { NextResponse } from "next/server"
import Stripe from "stripe"
import { createShipment } from "@/lib/shipEngine"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
})

export async function POST(request: Request) {
  try {
    const { amount, shippingInfo, cartItems } = await request.json()

    // Create Stripe PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    })

    // Create shipment using ShipEngine
    const shipment = await createShipment(shippingInfo, cartItems)

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      shipmentId: shipment.id,
      trackingId: shipment.tracking_number,
    })
  } catch (error) {
    console.error("Error processing payment and shipment:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

