import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// Back link heading for navigating to inventory with title and description
export default function BackLink() {
  return (
    <div className="mb-6">
      <Link
        href="/inventory"
        className="inline-flex items-center text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-1 hover:text-[#1E293B]"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Bulk Inventory Import & Export
      </Link>

      {/* Supporting instruction text */}
      <p className="text-gray-600 text-xs md:text-sm lg:text-base font-medium mt-2">
        Upload product data in CSV format to create or update items. You can
        also export your current inventory below.
      </p>
    </div>
  );
}
