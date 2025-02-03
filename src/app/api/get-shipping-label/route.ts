import { NextResponse } from "next/server"
import ShipEngine from "shipengine"

const shipengine = new ShipEngine(process.env.SHIPENGINE_API_KEY!)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const shipmentId = searchParams.get("shipmentId")

  if (!shipmentId) {
    return NextResponse.json({ error: "Shipment ID is required" }, { status: 400 })
  }

  try {
    const label = await shipengine.getLabelFromShipmentId(shipmentId)
    return NextResponse.json({ labelUrl: label.label_download.pdf })
  } catch (error) {
    console.error("Error fetching shipping label:", error)
    return NextResponse.json({ error: "Failed to fetch shipping label" }, { status: 500 })
  }
}

