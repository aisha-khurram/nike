declare module "shipengine" {
    interface ShipEngineConfig {
      apiKey: string
    }
  
    interface Address {
      name: string
      addressLine1: string
      cityLocality: string
      stateProvince: string
      postalCode: string
      countryCode: string
      companyName?: string
    }
  
    interface Package {
      weight: {
        value: number
        unit: "pound" | "ounce" | "gram" | "kilogram"
      }
      dimensions?: {
        length: number
        width: number
        height: number
        unit: "inch" | "centimeter"
      }
    }
  
    interface ShipmentDetails {
      shipTo: Address
      shipFrom: Address
      packages: Package[]
      service: string
    }
  
    interface ShipmentResponse {
      id: string
      tracking_number: string
      label_download: {
        pdf: string
        png: string
        zpl: string
      }
    }
  
    class ShipEngine {
      constructor(apiKey: string)
      createLabelFromShipmentDetails(details: ShipmentDetails): Promise<ShipmentResponse>
      validateAddress(address: Address): Promise<Address>
      getLabelFromShipmentId(shipmentId: string): Promise<ShipmentResponse>
    }
  
    export default ShipEngine
  }
  
  