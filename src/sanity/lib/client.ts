import { createClient } from 'next-sanity';
import { apiVersion } from '../env';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Use environment variable
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // Use environment variable
  apiVersion: apiVersion || '2023-05-03', // Use the latest API version
  useCdn: true, // Enable CDN for faster responses
  token: process.env.SANITY_API_TOKEN, // Use environment variable for token
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
    slug,
    image {
      asset -> {
        url
      }
    },
    description
  }`;

  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error('Error fetching products from Sanity:', error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};