'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    console.log('Form submitted:', formData);
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
          <h1 className="text-2xl font-medium mb-2">Contact Us</h1>
          <p className="text-gray-600">We'd love to hear from you!</p>
        </div>

        {/* Contact Us Form */}
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

          {/* Message Textarea */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={`w-full px-4 py-3 rounded-md border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } focus:border-black focus:outline-none`}
              rows={4}
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>

          {/* Back to Home Link */}
          <p className="text-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-black">
              Back to Home
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}