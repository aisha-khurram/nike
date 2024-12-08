'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form validation and submission logic here
    console.log('Checkout form submitted:', formData);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      <div className="max-w-lg mx-auto">
        {/* Nike Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/image/nike.png"
            alt="Nike"
            width={60}
            height={21}
            priority
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your purchase</p>
        </div>

        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full px-4 py-3 rounded-md border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:border-black focus:outline-none`}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className={`w-full px-4 py-3 rounded-md border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:border-black focus:outline-none`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Address Input */}
          <div>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Shipping Address"
              className={`w-full px-4 py-3 rounded-md border ${
                errors.address ? 'border-red-500' : 'border-gray-300'
              } focus:border-black focus:outline-none`}
              required
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          {/* City Input */}
          <div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className={`w-full px-4 py-3 rounded-md border ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              } focus:border-black focus:outline-none`}
              required
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          {/* State Input */}
          <div>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className={`w-full px-4 py-3 rounded-md border ${
                errors.state ? 'border-red-500' : 'border-gray-300'
              } focus:border-black focus:outline-none`}
              required
            />
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">{errors.state}</p>
            )}
          </div>

          {/* Zip Code Input */}
          <div>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Zip Code"
              className={`w-full px-4 py-3 rounded-md border ${
                errors.zip ? 'border-red-500' : 'border-gray-300'
              } focus:border-black focus:outline-none`}
              required
            />
            {errors.zip && (
              <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
            )}
          </div>

          {/* Card Number Input */}
          <div>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
              className={`w-full px-4 py-3 rounded-md border ${
                errors.cardNumber ? 'border-red-500' : 'border-gray-300'
              } focus:border-black focus:outline-none`}
              required
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
            )}
          </div>

          {/* Card Expiry Input */}
          <div>
            <input
              type="text"
              name="cardExpiry"
              value={formData.cardExpiry}
              onChange={handleChange}
              placeholder="Expiry Date (MM/YY)"
              className={`w-full px-4 py-3 rounded-md border ${
                errors.cardExpiry ? 'border-red-500' : 'border-gray-300'
              } focus:border-black focus:outline-none`}
              required
            />
            {errors.cardExpiry && (
              <p className="text-red-500 text-sm mt-1">{errors.cardExpiry}</p>
            )}
          </div>

          {/* Card CVC Input */}
          <div>
            <input
              type="text"
              name="cardCVC"
              value={formData.cardCVC}
              onChange={handleChange}
              placeholder="CVC"
              className={`w-full px-4 py-3 rounded-md border ${
                errors.cardCVC ? 'border-red-500' : 'border-gray-300'
              } focus:border-black focus:outline-none`}
              required
            />
            {errors.cardCVC && (
              <p className="text-red-500 text-sm mt-1">{errors.cardCVC}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
}