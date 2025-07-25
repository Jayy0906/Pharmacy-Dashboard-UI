// components/supplier-details/ProductTable.tsx

// Importing the reusable row component for individual product entries
import { ProductRow } from "../../components/supplier-details/ProductRow";

// Defining the Product type used across the component
interface Product {
  id: string; // Unique identifier for the product
  name: string; // Name of the product (e.g., "Paracetamol 500mg")
  description: string; // Short description (e.g., "Pain relief")
  sku: string; // Stock Keeping Unit (product code)
  lastOrdered: string; // Date of last order (e.g., "15 Dec 2024")
  totalQuantity: string; // Quantity ordered (e.g., "2500 units")
  price: string; // Price per unit (e.g., "£0.08/unit")
  icon: string; // URL to product icon/image
  iconBg: string; // Tailwind class for background color (e.g., "bg-[#D1FAE5]")
}

// Props passed to the ProductTable component
interface ProductTableProps {
  products: Product[]; // List of product objects to display
}

/**
 * ProductTable Component
 *
 * This component renders a styled HTML table that displays a list of
 * products supplied by the selected supplier.
 *
 * Each row of the table is rendered using the <ProductRow> subcomponent.
 */
export const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <section className="overflow-x-auto">
      {/* Full-width responsive table with basic border and styling */}
      <table className="min-w-full bg-white border border-[#E5E7EB] rounded-lg">
        {/* Table header with column names */}
        <thead className="bg-[#F3F4F6] text-[#6B7280] text-xs font-semibold uppercase border-b border-[#E5E7EB]">
          <tr>
            <th className="text-left py-3 px-6 w-[40%]">Product</th>
            <th className="text-left py-3 px-6 w-[20%]">SKU</th>
            <th className="text-left py-3 px-6 w-[15%]">Last Ordered</th>
            <th className="text-left py-3 px-6 w-[15%]">Total Qty</th>
            <th className="text-left py-3 px-6 w-[10%]">Price</th>
          </tr>
        </thead>

        {/* Table body dynamically rendered from the products array */}
        <tbody className="text-sm text-[#374151]">
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
