export interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    colors: string;
    image: string;
    isNew?: boolean;
    isSustainable?: boolean;
  }