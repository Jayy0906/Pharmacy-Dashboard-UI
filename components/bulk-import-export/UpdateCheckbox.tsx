// Checkbox to allow updating products if matching SKU is found
export default function UpdateCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <input
        id="update-sku"
        type="checkbox"
        className="w-4 h-4 text-[#22C55E] border-[#CBD5E1] rounded focus:ring-[#22C55E]"
      />
      <label
        htmlFor="update-sku"
        className="text-[#334155] text-sm font-semibold cursor-pointer"
      >
        Update existing products if SKU matches
      </label>
    </div>
  );
}
