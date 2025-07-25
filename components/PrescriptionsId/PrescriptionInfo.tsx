import React from "react";

// Define the interface for the Prescription object
interface Prescription {
  id: string;
  dateReceived: string;
  clinic: string;
  prescriber: string;
  // Add any other properties your prescription object might have
}

export default function PrescriptionInfo({
  prescription,
}: {
  prescription: Prescription;
}) {
  return (
    <div className="flex flex-col gap-4 flex-1 min-w-0">
      <p className="text-xs font-semibold text-gray-500 select-none">
        Prescription Information
      </p>
      <div className="grid grid-cols-3 gap-4 lg:gap-18 text-sm text-gray-700 font-semibold min-w-0">
        <div className="min-w-0">
          <p className="text-xs font-normal text-gray-500 select-none">
            Prescription ID
          </p>
          <p className="truncate">{prescription.id}</p>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-normal text-gray-500 select-none">
            Date Received
          </p>
          <p className="truncate">{prescription.dateReceived}</p>
        </div>
        <div className="min-w-0"></div>
      </div>
      <div className="grid grid-cols-3 gap-4 lg:gap-18 text-sm text-gray-700 font-semibold min-w-0">
        <div className="min-w-0">
          <p className="text-xs font-normal text-gray-500 select-none">
            Clinic
          </p>
          <p className="truncate">{prescription.clinic}</p>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-normal text-gray-500 select-none">
            Prescriber
          </p>
          <p className="truncate">{prescription.prescriber}</p>
        </div>
        <div className="min-w-0"></div>
      </div>
    </div>
  );
}
