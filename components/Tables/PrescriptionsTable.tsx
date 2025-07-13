import Image from "next/image";

export default function PrescriptionsTable() {
  const prescriptions = [
    {
      id: 1,
      patient: "John Smith",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      medicines: "Paracetamol, Ibuprofen",
      status: "Pending",
      date: "Dec 13, 2024",
    },
    {
      id: 2,
      patient: "Emma Wilson",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      medicines: "Amoxicillin, Vitamin D",
      status: "Ready",
      date: "Dec 13, 2024",
    },
    {
      id: 3,
      patient: "Michael Brown",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
      medicines: "Aspirin, Omeprazole",
      status: "Allocated",
      date: "Dec 12, 2024",
    },
  ];

  const statusStyles = {
    Pending: "bg-yellow-100 text-yellow-800",
    Ready: "bg-green-100 text-green-800",
    Allocated: "bg-blue-100 text-blue-800",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-200 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Prescriptions
        </h3>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search prescriptions..."
            className="w-full sm:w-auto px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-black-500"
          />
          <button className="inline-flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-md w-full sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Prescription
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-600 tracking-wide">
                Patient Name
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600 tracking-wide">
                Medicines
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600 tracking-wide">
                Status
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600 tracking-wide">
                Date
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600 tracking-wide">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {prescriptions.map((prescription) => (
              <tr key={prescription.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Image
                      src={prescription.image}
                      alt={prescription.patient}
                      width={36} // same as w-9
                      height={36} // same as h-9
                      className="rounded-full object-cover"
                    />
                    <span className="font-medium text-gray-900">
                      {prescription.patient}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-600">
                  {prescription.medicines}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-0.5 inline-flex text-xs font-semibold rounded-full ${statusStyles[prescription.status as keyof typeof statusStyles]}`}
                  >
                    {prescription.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-600">
                  {prescription.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {prescription.status === "Pending" ? (
                    <button className="bg-[#38a2e8] text-white text-xs font-medium px-2 py-1 rounded-lg hover:bg-[#2196db] transition cursor-pointer">
                      Allocate Stock
                    </button>
                  ) : (
                    <button className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                      View
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-gray-700">
          Showing <span>1</span> - <span>3</span> of <span>24</span>{" "}
          prescriptions
        </p>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 cursor-pointer">
            Previous
          </button>
          <button className="px-3 py-1 border rounded-md text-sm font-medium text-white bg-[#16a085] cursor-pointer">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 cursor-pointer">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 cursor-pointer">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
