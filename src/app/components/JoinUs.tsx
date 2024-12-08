'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function JoinUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      <div className="max-w-sm mx-auto">
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
          <h1 className="text-2xl font-medium mb-2">Join Us</h1>
          <p className="text-gray-600">Create an account to get started.</p>
        </div>

        {/* Join Us Form */}
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

          {/* Password Input */}
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full px-4 py-3 rounded-md border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } focus:border-black focus:outline-none`}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={`w-full px-4 py-3 rounded-md border ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              } focus:border-black focus:outline-none`}
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Sign Up
          </button>

          {/* Sign In Link */}
          <p className="text-center text-sm">
            Already a member?{' '}
            <Link href="/login" className="text-gray-600 hover:text-black">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}