import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

export default function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-sm py-4 px-6 border-b">
      <Link href="/" className="hover:text-gray-600">
        Home
      </Link>
      <FiChevronRight className="w-4 h-4 text-gray-400" />
      <Link href="/products" className="hover:text-gray-600">
        Men's Shoes
      </Link>
      <FiChevronRight className="w-4 h-4 text-gray-400" />
      <span className="text-gray-600">Nike Air Max 90</span>
    </nav>
  );
}