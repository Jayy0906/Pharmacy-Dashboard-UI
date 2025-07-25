"use client"; // This directive marks the component as a Client Component in Next.js

import React from "react";
import Image from "next/image"; // Next.js optimized Image component
import { FaImage } from "react-icons/fa";

/**
 * ProductImagesSection Component
 *
 * Displays product images. Currently shows a single static image.
 * This component is marked as a "use client" component because it might
 * involve client-side interactions or features in the future, like image upload.
 */
const ProductImagesSection: React.FC = () => {
  return (
    // Section container with styling for background, padding, rounded corners, and shadow.
    <section className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      {/* Section title for Product Images */}
      <h2 className="font-semibold text-[#334155] mb-3 md:mb-4 flex items-center gap-2">
        {/* Image icon for visual representation */}
        <FaImage className="text-[#10B981]" />
        <span>Product Images</span>
      </h2>

      {/* Container to center the product image */}
      <div className="flex justify-center">
        {/* Next.js Image component for optimized image loading */}
        <Image
          alt="Blue packaging box of Paracetamol 500mg tablets with white text and red label on bottom right" // Alt text for accessibility
          src="https://storage.googleapis.com/a1aa/image/9c6386d1-93be-4211-c552-41b00e117e83.jpg" // Source URL of the image
          width={250} // Original width of the image for optimization
          height={166} // Original height of the image for optimization
          className="rounded-md w-full max-w-[250px] h-auto object-cover" // Styling for the image
        />
      </div>
    </section>
  );
};

export default ProductImagesSection;
