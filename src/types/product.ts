// types/product.ts
export interface Product {
  _id: string; // Added _id for Sanity documents
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors?: string[]; // Optional field
  status: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
      url: string; // Added URL for image access
    };
  };
  description: string;
}