import ShipEngine from "shipengine"

const shipengine = new ShipEngine(process.env.SHIPENGINE_API_KEY!)

export async function createShipment(shippingInfo: { name: any; address: any; city: any; state: any; zip: any; country: any }, cartItems: any) {
  const shipment = await shipengine.createLabelFromShipmentDetails({
    shipTo: {
      name: shippingInfo.name,
      addressLine1: shippingInfo.address,
      cityLocality: shippingInfo.city,
      stateProvince: shippingInfo.state,
      postalCode: shippingInfo.zip,
      countryCode: shippingInfo.country,
    },
    shipFrom: {
      companyName: "Your Store Name",
      name: "Your Name",
      addressLine1: "123 Ship St",
      cityLocality: "Austin",
      stateProvince: "TX",
      postalCode: "78756",
      countryCode: "US",
    },
    packages: [
      {
        weight: {
          value: 1,
          unit: "pound",
        },
        dimensions: {
          length: 12,
          width: 12,
          height: 12,
          unit: "inch",
        },
      },
    ],
    service: "usps_priority_mail",
  })

  return shipment
}

