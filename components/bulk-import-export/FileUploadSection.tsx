import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

// UI section to upload a CSV file using drag-and-drop or file picker
export default function FileUploadSection() {
  return (
    <label
      htmlFor="file-upload"
      className="block cursor-pointer border border-dashed border-[#CBD5E1] rounded-lg p-10 text-center text-[#475569] text-sm hover:border-[#94A3B8] transition-colors"
    >
      <div className="flex flex-col items-center justify-center">
        <CloudArrowUpIcon className="h-8 w-8 text-gray-400 mb-2" />
        <div className="font-semibold mb-1">
          Drop your CSV here or click to browse
        </div>
        <div className="text-[#64748B] text-sm mb-4">
          Maximum file size: <span className="font-bold">10MB</span>
        </div>
        <div className="bg-teal-700 hover:bg-teal-600 text-white text-sm font-semibold rounded-md px-5 lg:px-8 py-2 transition-colors cursor-pointer">
          Choose File
        </div>
      </div>
      {/* Hidden file input */}
      <input id="file-upload" type="file" className="hidden" accept=".csv" />
    </label>
  );
}
