interface FormSelectProps {
  id: string;
  label: string;
  options: string[];
}

// Dropdown select used for filters in forms
export default function FormSelect({ id, label, options }: FormSelectProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-[#475569] mb-1"
      >
        {label}
      </label>
      <select
        id={id}
        className="w-full rounded-md border border-[#CBD5E1] bg-[#F1F5F9] text-[#334155] font-semibold text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
