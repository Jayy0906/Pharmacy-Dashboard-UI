import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function PrescriptionHeader({
  status,
  prescriptionId,
}: {
  status: string;
  prescriptionId: string;
}) {
  return (
    <header className="flex items-center justify-between">
      {/* Back link + title */}
      <div className="flex items-center gap-2 text-xl md:text-2xl font-bold leading-tight text-gray-900 ">
        <Link href="/pos" className="text-gray-600 hover:text-gray-800">
          <Icon name="arrow-left" />
        </Link>
        {/* Using prescriptionId here */}
        {/* Display prescription ID */}
        <span>Prescription Details: {prescriptionId}</span>
      </div>

      {/* Dynamic status label with contextual styling */}
      <div>
        <span
          className={`text-sm px-3 py-1 rounded-full font-semibold select-none ${
            status === "Pending"
              ? "bg-blue-100 text-blue-600"
              : status === "Allocated"
                ? "bg-green-100 text-green-600"
                : status === "Ready"
                  ? "bg-purple-100 text-purple-600"
                  : "bg-gray-100 text-gray-600"
          }`}
        >
          {status}
        </span>
      </div>
    </header>
  );
}
