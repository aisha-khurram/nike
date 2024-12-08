import React from 'react';
import Link from 'next/link';

const footerLinks = {
  Icons: [
    { name: 'Air Force 1', href: '/icons/air-force-1' },
    { name: 'Huarache', href: '/icons/huarache' },
    { name: 'Air Max 90', href: '/icons/air-max-90' },
    { name: 'Air Max 95', href: '/icons/air-max-95' },
  ],
  Shoes: [
    { name: 'All Shoes', href: '/shoes' },
    { name: 'Custom Shoes', href: '/shoes/custom' },
    { name: 'Jordan Shoes', href: '/shoes/jordan' },
    { name: 'Running Shoes', href: '/shoes/running' },
  ],
  Clothing: [
    { name: 'All Clothing', href: '/clothing' },
    { name: 'Modest Wear', href: '/clothing/modest-wear' },
    { name: 'Hoodies & Pullovers', href: '/clothing/hoodies-pullovers' },
    { name: 'Shirts & Tops', href: '/clothing/shirts-tops' },
  ],
  Kids: [
    { name: 'Infant & Toddler Shoes', href: '/kids/infant-toddler' },
    { name: "Kids' Shoes", href: '/kids/shoes' },
    { name: "Kids' Jordan Shoes", href: '/kids/jordan' },
    { name: "Kids' Basketball Shoes", href: '/kids/basketball' },
  ],
};

export default function FooterNav() {
  return (
    <nav className="grid grid-cols-4 gap-x-8 py-12 max-w-[1440px] mx-auto px-6">
      {Object.entries(footerLinks).map(([category, links]) => (
        <div key={category} className="flex flex-col gap-3">
          <h3 className="text-base font-medium mb-1">{category}</h3>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}