'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Nike Air Max 90",
    price: "₹ 9,695",
    quantity: 1,
    image: "/image/p2.png",
  },
  {
    id: 2,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: "₹ 4,695",
    quantity: 2,
    image: "/image/p3.png",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹ ', '').replace(',', '')) * item.quantity, 0);

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      <h1 className="text-2xl font-medium mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-lg mr-4"
                />
                <div>
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-gray-600">{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                      className="px-2 py-1 border border-gray-300 rounded-md"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="px-2 py-1 border border-gray-300 rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between mt-6">
            <h2 className="text-xl font-medium">Total Amount:</h2>
            <p className="text-xl font-medium">₹ {totalAmount.toLocaleString()}</p>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors mt-4">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}