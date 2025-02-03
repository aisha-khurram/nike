export interface Product {
  sizes: boolean
  _id: string
  productName: string
  category: string
  price: number
  inventory: number
  colors?: string[]
  status: string
  slug: {
    current: string
  }
  image: {
    asset: {
      url: string
    }
  }
  description: string
}

