// components/supplier-details/ProductRow.tsx

import Image from "next/image"; // Optimized image component from Next.js

// Interface representing a single product
interface Product {
  id: string; // Unique product ID
  name: string; // Product name (e.g., "Paracetamol 500mg")
  description: string; // Short product description
  sku: string; // Stock Keeping Unit identifier
  lastOrdered: string; // Last ordered date (e.g., "12 Dec 2024")
  totalQuantity: string; // Total quantity available (e.g., "2,000 units")
  price: string; // Product price (e.g., "£0.12/unit")
  icon: string; // URL for the product image/icon
  iconBg: string; // Tailwind utility class for icon background color
}

// Props for the ProductRow component
interface ProductRowProps {
  product: Product;
}

/**
 * ProductRow Component
 *
 * Renders a single row inside the supplier's product table.
 * Displays product image, name, SKU, last ordered date, quantity, and price.
 */
export const ProductRow = ({ product }: ProductRowProps) => {
  return (
    <tr className="border-b border-[#E5E7EB]">
      {/* Product name & icon */}
      <td className="py-4 px-6 flex items-center space-x-3">
        {/* Icon with colored background */}
        <div
          className={`${product.iconBg} rounded-lg p-2 flex items-center justify-center w-9 h-9`}
        >
          <Image
            alt={`Icon representing ${product.name}`} // Alt text for accessibility
            className="block"
            height="16"
            width="16"
            src={product.icon}
          />
        </div>
        <div>
          <div className="font-semibold text-[#111827]">{product.name}</div>
          <div className="text-xs text-[#6B7280]">{product.description}</div>
        </div>
      </td>

      {/* SKU */}
      <td className="py-4 px-6 font-semibold">{product.sku}</td>

      {/* Last ordered date */}
      <td className="py-4 px-6 font-semibold">{product.lastOrdered}</td>

      {/* Quantity available */}
      <td className="py-4 px-6 font-semibold">{product.totalQuantity}</td>

      {/* Price */}
      <td className="py-4 px-6 font-semibold">{product.price}</td>
    </tr>
  );
};
