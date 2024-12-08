import React from 'react';
import { FiSliders, FiChevronDown } from 'react-icons/fi';

export default function Header3() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-medium">New</h1>
        <span className="text-gray-500">(500)</span>
      </div>

      <div className="flex items-center gap-6">
        {/* Hide Filters Button */}
        <button className="flex items-center gap-2 hover:text-gray-700">
          <span className="text-sm">Hide Filters</span>
          <FiSliders className="w-5 h-5" />
        </button>

        {/* Sort Dropdown */}
        <button className="flex items-center gap-2 hover:text-gray-700">
          <span className="text-sm">Sort By</span>
          <FiChevronDown className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}