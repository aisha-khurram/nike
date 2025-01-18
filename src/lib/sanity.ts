// lib/sanity.ts
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  token:"skp35OrUBMRTOLcmwUA80qUhd6DnwF2P6sxRZrsBedoXuCn8x2eL6J5KknyysL4yF7owdeIL7yaMAKcpRvuxcAYLF8eiq3d8pwwAHrYIEbDcT9cuJRzIyejWR1eP2gfEj66Wz1bf78ehJSK6YgyOkjIoAGrj5rtuSciySDVEI2ttudqW3bBm" // Enable CDN for faster responses
});

// Fetch products from Sanity
export const fetchProductsFromSanity = async () => {
  const query = `*[_type == "product"]{
    _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    image {
      asset -> {
        url
      }
    },
    description
  }`;
  const products = await client.fetch(query);
  return products;
};