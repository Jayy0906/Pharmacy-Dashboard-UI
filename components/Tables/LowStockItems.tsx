export default function LowStockItems() {
  const items = [
    { id: 1, name: "Paracetamol 500mg", units: 5, critical: true },
    { id: 2, name: "Ibuprofen 400mg", units: 8, critical: false },
    { id: 3, name: "Amoxicillin 250mg", units: 3, critical: true },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Low Stock Items</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className={`${item.critical ? "bg-red-50" : "bg-orange-50"} p-3 rounded-lg flex justify-between items-center`}
          >
            <div>
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
              <p
                className={`text-xs font-medium ${item.critical ? "text-red-600" : "text-orange-600"}`}
              >
                {item.units} units left
              </p>
            </div>
            <button
              className={`text-lg font-bold ${item.critical ? "text-red-600" : "text-orange-600"}`}
            >
              +
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-center">
        <button className="text-sm font-medium text-blue-400 hover:text-blue-800 cursor-pointer">
          View All Low Stock Items
        </button>
      </div>
    </div>
  );
}
