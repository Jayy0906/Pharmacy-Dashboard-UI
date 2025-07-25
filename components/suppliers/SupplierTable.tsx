// components/suppliers/SupplierTable.tsx

import { SupplierRow } from "./SupplierRow";

// Supplier data structure definition
interface Supplier {
  id: string; // Unique supplier ID
  name: string; // Supplier name
  type: string; // Category (e.g., Distributor, Equipment)
  email: string; // Contact email
  phone: string; // Contact phone number
  city: string; // City of operation
  address: string; // Full address
  productsCount: number; // Number of products supplied
  status: "Active" | "Inactive"; // Supplier status
  color: string; // Tailwind color class for avatar
}

// Props accepted by the SupplierTable component
interface SupplierTableProps {
  suppliers: Supplier[]; // Supplier list to render
  onEdit: (id: string) => void; // Edit callback per row
  onViewHistory: (id: string) => void; // View history callback
  onDelete: (id: string) => void; // Delete callback
}

/**
 * SupplierTable Component
 *
 * Displays a responsive table of all suppliers, including:
 * - Avatar & name
 * - Contact info
 * - Location
 * - Product count
 * - Status badge
 * - Action menu (edit, view history, delete)
 */
export const SupplierTable = ({
  suppliers,
  onEdit,
  onViewHistory,
  onDelete,
}: SupplierTableProps) => {
  return (
    <section className="bg-white rounded-lg shadow-sm overflow-x-auto">
      {/* Responsive table wrapper. `overflow-x-auto` ensures horizontal scroll on small screens */}
      <table className="w-full border-collapse text-sm text-gray-600 min-w-[800px]">
        {/* Table header is hidden on small screens for compact view */}
        <thead className="border-b border-gray-200 hidden lg:table-header-group">
          <tr className="text-xs font-semibold text-gray-500 text-left">
            <th className="py-3 px-4 uppercase tracking-wide">Supplier</th>
            <th className="py-3 px-4 uppercase tracking-wide">Contact</th>
            <th className="py-3 px-4 uppercase tracking-wide">Location</th>
            <th className="py-3 px-4 uppercase tracking-wide">Products</th>
            <th className="py-3 px-4 uppercase tracking-wide">Status</th>
            <th className="py-3 px-4 uppercase tracking-wide">Actions</th>
          </tr>
        </thead>

        <tbody>
          {/* Loop through all suppliers and render a row for each */}
          {suppliers.map((supplier) => (
            <SupplierRow
              key={supplier.id}
              supplier={supplier}
              onEdit={onEdit}
              onViewHistory={onViewHistory}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};
