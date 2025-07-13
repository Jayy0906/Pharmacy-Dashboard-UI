"use client";

import React from "react";
import Image from "next/image";
import { FaImage } from "react-icons/fa";

const ProductImagesSection: React.FC = () => {
  return (
    <section className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
      <h2 className="font-semibold text-[#334155] mb-3 md:mb-4 flex items-center gap-2">
        <FaImage className="text-[#10B981]" />
        <span>Product Images</span>
      </h2>

      <div className="flex justify-center">
        <Image
          alt="Blue packaging box of Paracetamol 500mg tablets with white text and red label on bottom right"
          src="https://storage.googleapis.com/a1aa/image/9c6386d1-93be-4211-c552-41b00e117e83.jpg"
          width={250}
          height={166}
          className="rounded-md w-full max-w-[250px] h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default ProductImagesSection;
