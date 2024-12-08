'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = "" }: SidebarProps) {
  return (
    <div className={`w-64 bg-gray-50 border-r border-gray-200 p-4 ${className}`}>
      {/* Category List */}
      <ul className="space-y-4 text-sm font-medium">
        <li>Shoes</li>
        <li>Sports Bras</li>
        <li>Tops & T-Shirts</li>
        <li>Hoodies & Sweatshirts</li>
        <li>Jackets</li>
        <li>Trousers & Tights</li>
        <li>Shorts</li>
        <li>Tracksuits</li>
        <li>Jumpsuits & Rompers</li>
        <li>Skirts & Dresses</li>
        <li>Socks</li>
        <li>Accessories & Equipment</li>
      </ul>

      {/* Filters */}
      <div className="mt-8">
        <Accordion type="single" collapsible>
          {/* Gender Filter */}
          <AccordionItem value="gender">
            <AccordionTrigger className="text-sm font-medium">
              Gender
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Men
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Women
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Unisex
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Kids Filter */}
          <AccordionItem value="kids">
            <AccordionTrigger className="text-sm font-medium">
              Kids
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Boys
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Girls
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Price Filter */}
          <AccordionItem value="price">
            <AccordionTrigger className="text-sm font-medium">
              Shop By Price
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Under ₹2500.00
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> ₹2500.00 - ₹5000.00
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> ₹5000.00 - ₹10,000.00
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}