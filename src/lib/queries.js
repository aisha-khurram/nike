// lib/queries.js
export const productsQuery = `*[_type == "product"] {
    _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    description,
    "image": image.asset->url
  }`;