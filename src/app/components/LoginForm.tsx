'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define types for form data and errors
interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
}

// Login function
const loginUser = async (email: string, password: string) => {
  // This is a placeholder function - replace with your actual login logic
  try {
    // Simulate API call
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return await response.json();
  } catch (error) {
    throw new Error('Login failed');
  }
};

export default function LoginForm() {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({
    email: '',
    password: '',
  });
  
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user types
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await loginUser(formData.email, formData.password);
      // Handle successful login (e.g., redirect)
    } catch (error) {
      setErrors({
        email: 'Invalid email or password',
        password: ''
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
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
          <h1 className="text-2xl font-medium mb-2">
            Your account for everything Nike
          </h1>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Keep Signed In & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm">Keep me signed in</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-gray-600 hover:text-black"
            >
              Forgot password?
            </Link>
          </div>

          {/* Privacy Notice */}
          <p className="text-xs text-gray-600">
            By logging in, you agree to Nike's{' '}
            <Link href="/privacy" className="underline hover:text-black">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/terms" className="underline hover:text-black">
              Terms of Use
            </Link>
            .
          </p>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors disabled:bg-gray-400"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm">
            Not a Member?{' '}
            <Link href="/register" className="text-gray-600 hover:text-black">
              Join Us
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}