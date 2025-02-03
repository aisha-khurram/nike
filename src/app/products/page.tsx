import { fetchProductsFromSanity } from "@/sanity/lib/client";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Header3 from "../components/Header3";
import ProductGrid from "../components/ProductGrid";
import RelatedTags from "../components/RelatedTags";

export default async function ProductPage() {
  const products = await fetchProductsFromSanity();
  console.log('Products in ProductPage:', products); // Log the fetched data

  return (
    <div>
      <Header1 />
      <Header2 />
      <Header3 />

      <main className="max-w-[1440px] mx-auto">
        <div className="flex">
          <Sidebar />
          {/* Pass the fetched products to the ProductGrid component */}
          <ProductGrid />
        </div>
      </main>

      <RelatedTags />
      <Footer />
    </div>
  );
}