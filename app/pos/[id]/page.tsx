// app/prescriptions/[id]/page.tsx
import PrescriptionHeader from "../../../components/PrescriptionsId/PrescriptionHeader";
import PatientInfo from "../../../components/PrescriptionsId/PatientInfo";
import PrescriptionInfo from "../../../components/PrescriptionsId/PrescriptionInfo";
import NotesSection from "../../../components/PrescriptionsId/NotesSection";
import MedicationsTable from "../../../components/PrescriptionsId/MedicationsTable";
import PaymentInfo from "../../../components/PrescriptionsId/PaymentInfo";
import FooterActions from "../../../components/PrescriptionsId/FooterActions";

export default function PrescriptionDetails({
  params,
}: {
  params: { id: string };
}) {
  // In a real app, you would fetch the prescription data based on params.id
  // Simulated static data for demonstration (replace with API call using params.id in a real app)
  const prescription = {
    id: params.id,
    status: "Pending",
    patient: {
      name: "Sarah Johnson",
      image:
        "https://storage.googleapis.com/a1aa/image/2d71cc9d-0b08-45ff-0c15-7e3f935e97ef.jpg",
      email: "sarah.johnson@example.com",
      phone: "(555) 123-4567",
    },
    prescriptionInfo: {
      id: "RX-20230615-0042",
      dateReceived: "June 15, 2023",
      clinic: "Pathly Medical Center",
      prescriber: "Dr. Michael Chen",
    },
    notes:
      "Patient has indicated allergies to penicillin. Please ensure all medications are checked for interactions.",
    medications: [
      {
        name: "Lisinopril 10mg",
        form: "Tablets",
        quantity: 30, // As number
        available: 45, // As number
        allocated: "Yes (30)",
        status: "Allocated",
        statusColor: "bg-green-100",
        statusTextColor: "text-green-700",
        price: 15.0, // As number
      },
      {
        name: "Metformin 500mg",
        form: "Tablets",
        quantity: 60, // Changed from string to number
        available: 20, // Changed from string to number
        allocated: "No",
        status: "Not Available",
        statusColor: "bg-red-100",
        statusTextColor: "text-red-700",
        price: 22.5, // Changed from string to number
      },
      {
        name: "Atorvastatin 20mg",
        form: "Tablets",
        quantity: 30, // Changed from string to number
        available: 35, // Changed from string to number
        allocated: "Pending",
        status: "Pending",
        statusColor: "bg-yellow-100",
        statusTextColor: "text-yellow-700",
        price: 18.75, // Changed from string to number
      },
    ],
    payment: {
      subtotal: 56.25, // As number
      tax: 3.38, // As number
      total: 59.63, // As number
    },
  };

  return (
    <div className="mx-auto flex flex-col gap-6">
      {/* Page title and status */}
      <PrescriptionHeader
        status={prescription.status}
        prescriptionId={prescription.id}
      />

      {/* Patient and prescription summary */}
      <section className="flex flex-col md:flex-row md:justify-between gap-6">
        <PatientInfo patient={prescription.patient} />
        <PrescriptionInfo prescription={prescription.prescriptionInfo} />
      </section>

      {/* Notes from prescriber */}
      <NotesSection notes={prescription.notes} />

      {/* Medication list with auto-allocate UI */}
      <MedicationsTable medications={prescription.medications} />

      {/* Cost breakdown and payment selection */}
      <PaymentInfo
        medications={prescription.medications}
        payment={prescription.payment}
      />

      {/* Footer action buttons like Print, Mark as Ready/Collected */}
      <FooterActions />
    </div>
  );
}
