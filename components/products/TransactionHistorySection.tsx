import React from "react";
import { FaUndoAlt } from "react-icons/fa";

/**
 * TransactionHistorySection Component
 *
 * Displays a table of recent transaction history for a product.
 * It includes details like date, action, reference, quantity, and staff.
 */
const TransactionHistorySection: React.FC = () => {
  // Array of transaction objects.
  const transactions = [
    {
      date: "15 Dec 2023",
      action: "Sold",
      actionColor: "bg-[#FCA5A5] text-[#B91C1C]", // Styling for "Sold" action (red background, dark red text)
      reference: "POS-2023-001",
      quantity: -2,
      quantityColor: "text-[#B91C1C]", // Styling for negative quantity (dark red text)
      staff: "John Smith",
    },
    {
      date: "12 Dec 2023",
      action: "Added",
      actionColor: "bg-[#DCFCE7] text-[#15803D]", // Styling for "Added" action (light green background, dark green text)
      reference: "GRN-2023-045",
      quantity: +50,
      quantityColor: "text-[#15803D]", // Styling for positive quantity (dark green text)
      staff: "Sarah Johnson",
    },
  ];

  return (
    // Section container with styling for background, padding, rounded corners, shadow, and horizontal overflow.
    <section className="bg-white rounded-lg p-4 md:p-6 shadow-sm overflow-x-auto">
      {/* Section title for Transaction History */}
      <h2 className="font-semibold text-[#334155] mb-3 md:mb-4 flex items-center gap-2">
        {/* Undo icon for visual representation of history/transactions */}
        <FaUndoAlt className="text-[#10B981]" />
        <span>Transaction History</span>
      </h2>

      {/* Table to display transaction details */}
      <table className="w-full text-sm text-left text-[#475569] border-collapse min-w-[600px]">
        {/* Table Header */}
        <thead>
          <tr className="border-b border-[#E2E8F0]">
            <th className="py-2 pr-4 md:pr-6 font-semibold text-[#334155]">
              Date
            </th>
            <th className="py-2 pr-4 md:pr-6 font-semibold text-[#334155]">
              Action
            </th>
            <th className="py-2 pr-4 md:pr-6 font-semibold text-[#334155]">
              Reference
            </th>
            <th className="py-2 pr-4 md:pr-6 font-semibold text-[#334155]">
              Quantity
            </th>
            <th className="py-2 font-semibold text-[#334155]">Staff</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {/* Map over the transactions array to render each row */}
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-b border-[#E2E8F0]">
              <td className="py-2 pr-4 md:pr-6">{transaction.date}</td>
              <td className="py-2 pr-4 md:pr-6">
                {/* Dynamically styled span for Action (Sold/Added) */}
                <span
                  className={`inline-block ${transaction.actionColor} text-xs font-semibold rounded-full px-2 py-[2px]`}
                >
                  {transaction.action}
                </span>
              </td>
              <td className="py-2 pr-4 md:pr-6">{transaction.reference}</td>
              {/* Dynamically styled quantity, adding a '+' sign for positive quantities */}
              <td
                className={`py-2 pr-4 md:pr-6 font-semibold ${transaction.quantityColor}`}
              >
                {transaction.quantity > 0 ? "+" : ""}
                {transaction.quantity}
              </td>
              <td className="py-2">{transaction.staff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TransactionHistorySection;
