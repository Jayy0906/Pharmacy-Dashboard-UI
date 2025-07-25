import { FaFileAlt, FaBuilding, FaTruck, FaStickyNote } from "react-icons/fa";

interface POCardProps {
  poNumber: string;
  createdDate: string;
  status: string;
  supplierName: string;
  supplierEmail: string;
  supplierPhone: string;
  expectedDate: string;
  deliveryAddress: string;
  priority: string;
  notes: string;
}

// The POCard component displays detailed info about the selected Purchase Order
export const POCard = ({
  poNumber,
  createdDate,
  status,
  supplierName,
  supplierEmail,
  supplierPhone,
  expectedDate,
  deliveryAddress,
  priority,
  notes,
}: POCardProps) => {
  return (
    <section className="bg-blue-100 border border-blue-300 rounded-lg p-4 grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6 text-sm text-slate-800">
      {/* Left Column - PO details */}
      <div>
        <h2 className="font-semibold mb-1 flex items-center gap-1 text-slate-900">
          <FaFileAlt />
          PO Details
        </h2>
        <p>
          Number: <span className="font-semibold">{poNumber}</span>
        </p>
        <p>
          Created: <span className="font-semibold">{createdDate}</span>
        </p>
        <p>
          Status:{" "}
          <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full select-none">
            {status}
          </span>
        </p>
      </div>

      {/* Supplier Details */}
      <div>
        <h2 className="font-semibold mb-1 flex items-center gap-1 text-slate-900">
          <FaBuilding />
          Supplier
        </h2>
        <p className="font-semibold">{supplierName}</p>
        <p className="text-slate-600">{supplierEmail}</p>
        <p className="text-slate-600">{supplierPhone}</p>
      </div>

      {/* Delivery & Priority Info */}
      <div>
        <h2 className="font-semibold mb-1 flex items-center gap-1 text-slate-900">
          <FaTruck />
          Delivery
        </h2>
        <p>
          Expected: <span className="font-semibold">{expectedDate}</span>
        </p>
        <p>
          Address: <span className="font-semibold">{deliveryAddress}</span>
        </p>
        <p>
          Priority: <span className="font-semibold">{priority}</span>
        </p>
      </div>

      {/* Optional PO Notes */}
      <div>
        <h2 className="font-semibold mb-1 flex items-center gap-1 text-slate-900">
          <FaStickyNote />
          Notes
        </h2>
        <p className="leading-tight">{notes}</p>
      </div>
    </section>
  );
};
