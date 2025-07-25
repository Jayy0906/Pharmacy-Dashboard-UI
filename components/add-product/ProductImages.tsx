import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const ProductImages: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Upload area for product images (drag & drop or click) */}
      <label
        htmlFor="productImages"
        className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-[#CBD5E1] rounded-md py-10 text-center text-[#475569] text-sm font-semibold select-none hover:border-[#2563EB] transition"
      >
        <FaCloudUploadAlt className="text-2xl mb-2" />
        <span>Drop images here or click to browse</span>
        <span className="text-xs font-normal mt-1">
          PNG, JPG up to 5MB each
        </span>

        {/* Hidden file input */}
        <input
          id="productImages"
          type="file"
          accept="image/png, image/jpeg"
          multiple
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ProductImages;
