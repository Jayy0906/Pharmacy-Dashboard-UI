// components/prescriptions/PrescriptionsTable.tsx

// Importing reusable row component for each prescription
import PrescriptionRow from "../prescriptions/PrescriptionRow";

// interface PrescriptionsTableProps {
//   prescriptions: any[]; // optionally create a Prescription type
// }

// Static mock data for prescriptions (can later be fetched from an API or backend)
const prescriptions = [
  {
    id: "RX-2024-001",
    patient: {
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      image:
        "https://storage.googleapis.com/a1aa/image/86bac6c4-6d3e-40ef-c782-be1ce2eedb8b.jpg",
    },
    clinic: "Pathly Medical Center",
    date: "Dec 15, 2024",
    items: 3,
    status: "Pending",
    actions: ["View", "Allocate", "Print"],
  },
  {
    id: "RX-2024-002",
    patient: {
      name: "Michael Chen",
      email: "m.chen@email.com",
      image:
        "https://storage.googleapis.com/a1aa/image/0475d2af-435e-4ead-351d-a7d651cf609e.jpg",
    },
    clinic: "Downtown Clinic",
    date: "Dec 15, 2024",
    items: 2,
    status: "Allocated",
    actions: ["View", "Ready", "Print"],
  },
  {
    id: "RX-2024-003",
    patient: {
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      image:
        "https://storage.googleapis.com/a1aa/image/26b4670e-e010-4972-3bc6-b10e770fff44.jpg",
    },
    clinic: "Westside Health",
    date: "Dec 14, 2024",
    items: 0,
    status: "",
    actions: [],
  },
];

// Main component rendering the prescriptions table
export default function PrescriptionsTable() {
  return (
    // Container with horizontal scroll on small screens
    <section className="overflow-x-auto w-full">
      {/* Table layout for displaying prescriptions */}
      <table className="min-w-[800px] w-full text-left text-gray-600 text-xs sm:text-sm border-separate border-spacing-y-2">
        <thead>
          {/* Table header row */}
          <tr className="border-b border-gray-200">
            <th className="pb-2 px-2 sm:px-3 font-semibold uppercase whitespace-nowrap">
              Prescription ID
            </th>
            <th className="pb-2 px-2 sm:px-3 font-semibold uppercase">
              Patient Name
            </th>
            <th className="pb-2 px-2 sm:px-3 font-semibold uppercase whitespace-nowrap">
              Clinic Name
            </th>
            <th className="pb-2 px-2 sm:px-3 font-semibold uppercase whitespace-nowrap">
              Date Received
            </th>
            <th className="pb-2 px-2 sm:px-3 font-semibold uppercase whitespace-nowrap">
              Total Items
            </th>
            <th className="pb-2 px-2 sm:px-3 font-semibold uppercase">
              Status
            </th>
            <th className="pb-2 px-2 sm:px-3 font-semibold uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Render each prescription using a reusable PrescriptionRow component */}
          {prescriptions.map((prescription) => (
            <PrescriptionRow key={prescription.id} {...prescription} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
