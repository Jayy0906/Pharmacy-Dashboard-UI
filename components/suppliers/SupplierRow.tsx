// components/suppliers/SupplierRow.tsx

import { FaBuilding } from "react-icons/fa";
import { StatusBadge } from "./StatusBadge";
import { ActionsMenu } from "./ActionsMenu";

// Type definition for a supplier item
interface Supplier {
  id: string; // Unique supplier ID
  name: string; // Supplier name
  type: string; // Category (e.g., Distributor, Equipment)
  email: string; // Contact email
  phone: string; // Contact phone number
  city: string; // City of operation
  address: string; // Full address
  productsCount: number; // Number of associated products
  status: "Active" | "Inactive"; // Supplier status
  color: string; // Tailwind color name used for avatar
}

// Props for the SupplierRow component
interface SupplierRowProps {
  supplier: Supplier; // The supplier record to display
  onEdit: (id: string) => void; // Callback to edit the supplier
  onViewHistory: (id: string) => void; // Callback to view supplier history
  onDelete: (id: string) => void; // Callback to delete the supplier
}

/**
 * SupplierRow Component
 *
 * Displays a single row in the supplier table with avatar, details, status,
 * product count, and an action menu (edit, view, delete).
 */
export const SupplierRow = ({
  supplier,
  onEdit,
  onViewHistory,
  onDelete,
}: SupplierRowProps) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      {/* Supplier avatar and name/type */}
      <td className="py-4 px-4 flex items-center gap-3">
        <div
          className={`
            flex items-center justify-center w-10 h-10 rounded-md
            bg-${supplier.color}-100 text-${supplier.color}-500
          `}
        >
          <FaBuilding className="text-lg" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 leading-tight">
            {supplier.name}
          </p>
          <p className="text-xs text-gray-500 leading-tight">{supplier.type}</p>
        </div>
      </td>

      {/* Contact details (email + phone) */}
      <td className="py-4 px-4">
        <p className="font-semibold text-gray-900 leading-tight">
          {supplier.email}
        </p>
        <p className="text-xs text-gray-500 leading-tight">{supplier.phone}</p>
      </td>

      {/* Location (city + full address) */}
      <td className="py-4 px-4">
        <p className="font-semibold text-gray-900 leading-tight">
          {supplier.city}
        </p>
        <p className="text-xs text-gray-500 leading-tight">
          {supplier.address}
        </p>
      </td>

      {/* Number of products linked with the supplier */}
      <td className="py-4 px-4">
        <span className="inline-block bg-[#DBEAFE] text-[#2563EB] text-xs font-semibold rounded-full px-3 py-1">
          {supplier.productsCount} Products
        </span>
      </td>

      {/* Active/Inactive status badge */}
      <td className="py-4 px-4">
        <StatusBadge status={supplier.status} />
      </td>

      {/* Actions dropdown (Edit, View History, Delete) */}
      <td className="py-4 px-4">
        <ActionsMenu
          onEdit={() => onEdit(supplier.id)}
          onViewHistory={() => onViewHistory(supplier.id)}
          onDelete={() => onDelete(supplier.id)}
        />
      </td>
    </tr>
  );
};
