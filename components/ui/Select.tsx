// components/ui/Select.tsx
import React from "react"; // Imports React.

/**
 * SelectProps Interface
 * Defines the properties accepted by the Select component.
 * @property {string} id - The unique ID for the select element and its label.
 * @property {string} label - The text label displayed above the select dropdown.
 * @property {{ value: string; label: string }[]} options - An array of objects, where each object represents an option in the dropdown with a `value` and a `label`.
 * @property {boolean} [required=false] - If true, an asterisk is added to the label and the select is marked as required. Defaults to false.
 * @property {string} [value] - The current selected value of the dropdown (for controlled components).
 * @property {(e: React.ChangeEvent<HTMLSelectElement>) => void} [onChange] - Callback function triggered when the select's value changes.
 * @property {boolean} [disabled=false] - If true, the select dropdown is disabled and styled accordingly. Defaults to false.
 * @property {string} [className=""] - Optional Tailwind CSS classes applied to the main container div.
 */
interface SelectProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Select Component
 *
 * A reusable UI component for a styled dropdown (select) input with a label.
 * It supports controlled component behavior, required indicators, disabled states,
 * and accepts an array of options to populate the dropdown.
 *
 * @param {SelectProps} props - The properties for the component.
 * @param {string} props.id - Unique identifier for the select.
 * @param {string} props.label - Text label for the select.
 * @param {{ value: string; label: string }[]} props.options - Array of options for the dropdown.
 * @param {boolean} [props.required=false] - Whether the select is required.
 * @param {string} [props.value] - Current selected value.
 * @param {(e: React.ChangeEvent<HTMLSelectElement>) => void} [props.onChange] - Change handler.
 * @param {boolean} [props.disabled=false] - Whether the select is disabled.
 * @param {string} [props.className=""] - Additional CSS classes for the container.
 */
const Select: React.FC<SelectProps> = ({
  id,
  label,
  options,
  required = false,
  value,
  onChange,
  disabled = false,
  className = "", // Default empty string for optional classes
}) => {
  return (
    // Main container div for the label and select, allowing for external styling.
    <div className={className}>
      {/* Label element associated with the select */}
      <label
        htmlFor={id} // Links the label to the select via its `id`
        className="block text-xs font-semibold text-[#475569] mb-1"
      >
        {label} {/* Displays the label text */}
        {required && " *"} {/* Conditionally adds a required asterisk */}
      </label>
      {/* Select (dropdown) element */}
      <select
        id={id} // Unique ID
        required={required} // HTML required attribute
        value={value} // Controlled component value
        onChange={onChange} // Change event handler
        disabled={disabled} // HTML disabled attribute
        // Tailwind CSS classes for styling: width, rounded, border, background, text, font, padding, focus states.
        // Dynamically applies `bg-[#F1F5F9]` if disabled.
        className={`w-full rounded-md border border-[#CBD5E1] cursor-pointer ${
          disabled ? "bg-[#F1F5F9]" : "bg-white"
        } text-[#0F172A] text-sm font-semibold px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent`}
      >
        {/* Maps over the `options` array to render each <option> element */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
