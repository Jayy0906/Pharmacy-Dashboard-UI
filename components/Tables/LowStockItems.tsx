// This component does not use the "use client" directive explicitly,
// but if it uses hooks like `useState` or relies on browser APIs,
// it should implicitly be a client component or be part of a client component tree.
// For clarity, adding "use client" would be good practice if it's not nested under one.

/**
 * LowStockItems Component
 *
 * Displays a list of items that are low in stock, categorized by critical status.
 * Each item shows its name, remaining units, and provides a button to potentially add more stock.
 */
export default function LowStockItems() {
  // Sample data for low stock items.
  const items = [
    { id: 1, name: "Paracetamol 500mg", units: 5, critical: true }, // Critical item (e.g., very low stock)
    { id: 2, name: "Ibuprofen 400mg", units: 8, critical: false }, // Non-critical low stock
    { id: 3, name: "Amoxicillin 250mg", units: 3, critical: true },
  ];

  return (
    // Main container for the Low Stock Items section.
    <div className="bg-white rounded-lg shadow-sm p-6 h-full">
      {/* Header for the section, with title and potentially other elements */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Low Stock Items</h3>
      </div>
      {/* List of low stock items */}
      <ul className="space-y-3">
        {/* Map over the `items` array to render each low stock item */}
        {items.map((item) => (
          <li
            key={item.id} // Unique key for list rendering efficiency
            // Dynamically apply background color based on `critical` status
            className={`${item.critical ? "bg-red-50" : "bg-orange-50"} p-3 rounded-lg flex justify-between items-center`}
          >
            {/* Item Name and Units Left */}
            <div>
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
              <p
                // Dynamically apply text color based on `critical` status
                className={`text-xs font-medium ${item.critical ? "text-red-600" : "text-orange-600"}`}
              >
                {item.units} units left
              </p>
            </div>
            {/* Add Stock Button */}
            <button
              // Dynamically apply text color for the button based on `critical` status
              className={`text-lg font-bold ${item.critical ? "text-red-600" : "text-orange-600"}`}
            >
              + {/* Plus icon to indicate adding stock */}
            </button>
          </li>
        ))}
      </ul>
      {/* "View All Low Stock Items" button at the bottom */}
      <div className="mt-4 text-center">
        <button className="text-sm font-medium text-blue-400 hover:text-blue-800 cursor-pointer">
          View All Low Stock Items
        </button>
      </div>
    </div>
  );
}
