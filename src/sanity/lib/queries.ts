import { client } from "./client"

export const productsQuery = `*[_type == "product" && defined(productName) && defined(slug.current)] {
  _id,
  productName,
  category,
  price,
  inventory,
  colors,
  status,
  description,
  slug {
    current
  },
  image {
    asset -> {
      url
    }
  }
}`

export const PRODUCTS_QUERY = productsQuery

export const PRODUCT_QUERY = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  productName,
  category,
  price,
  inventory,
  colors,
  status,
  description,
  image {
    asset -> {
      url
    }
  },
  slug {
    current
  }
}`

export const fetchProductsFromSanity = async () => {
  try {
    const products = await client.fetch(productsQuery)
    console.log("Fetched products:", products) // Log the fetched data
    return products
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

