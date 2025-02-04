import { type NextRequest, NextResponse } from "next/server"
import { createShipment } from "@/lib/shipEngine"

export async function POST(request: NextRequest) {
  try {
    const { shippingInfo, cartItems } = await request.json()

    const shipment = await createShipment(shippingInfo, cartItems)

    return NextResponse.json({
      shipmentId: shipment.id,
      trackingId: shipment.tracking_number,
      labelUrl: shipment.label_download.pdf,
    })
  } catch (error) {
    console.error("Error creating shipment:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

