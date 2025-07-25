// Import React if not already imported
import React from "react";
// Import the Image component from Next.js
import Image from "next/image";

// Define the Patient interface
// Define the shape of the patient <prop></prop>
interface Patient {
  name: string;
  email: string;
  phone: string;
  image: string; // Assuming 'image' is a string URL
  // Add any other properties your patient object might have
}

export default function PatientInfo({ patient }: { patient: Patient }) {
  return (
    <div className="flex gap-4 flex-1 min-w-0">
      <div className="min-w-0">
        {/* Section label */}
        <p className="text-xs font-semibold text-gray-500 mb-1 select-none">
          Patient Information
        </p>
        <div className="flex items-start pt-1">
          {/* Profile image using Next.js <Image> for optimized performance */}
          <Image
            alt={`Patient ${patient.name}`}
            className="rounded-full w-8 h-8 object-cover" // Added object-cover for better image fitting
            src={patient.image}
            width={32} // Required: w-8 is 32px
            height={32} // Required: h-8 is 32px
          />

          {/* Wrapper for patient details, hidden on smaller screens, flex on lg and above */}
          {/* Patient details - visible on large screens only */}
          <div className="hidden lg:flex flex-col ml-3">
            {" "}
            {/* Added ml-3 for some spacing */}
            <p className="font-semibold text-gray-900 truncate">
              {patient.name}
            </p>
            <p className="text-sm text-gray-600 truncate">{patient.email}</p>
            <p className="text-xs text-gray-500 select-none">{patient.phone}</p>
          </div>
        </div>

        {/* These elements will be visible below the image on smaller screens */}
        {/* Same details for smaller screens (below image) */}
        <div className="lg:hidden">
          <p className="font-semibold text-gray-900 truncate">{patient.name}</p>
          <p className="text-sm text-gray-600 truncate">{patient.email}</p>
          <p className="text-xs text-gray-500 select-none">{patient.phone}</p>
        </div>
      </div>
    </div>
  );
}
