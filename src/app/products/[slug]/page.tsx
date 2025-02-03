import { PRODUCT_QUERY } from "@/sanity/lib/queries"
import { client } from "@/sanity/lib/client"
import type { Product } from "@/types/product"
import Header1 from "@/app/components/Header1"
import Footer from "@/app/components/Footer"
import ProductDetails from "@/app/components/ProductDetails"

export async function generateStaticParams() {
  const products = await client.fetch<Product[]>(`
    *[_type == "product" && defined(slug.current)] {
      "slug": slug.current
    }
  `)

  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await client.fetch<Product>(PRODUCT_QUERY, {
    slug: params.slug,
  })

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <>
      <Header1 />
      <main className="container mx-auto px-4 py-8">
        <ProductDetails initialProduct={product} />
      </main>
      <Footer />
    </>
  )
}

