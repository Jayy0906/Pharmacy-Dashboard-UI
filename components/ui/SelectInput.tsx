import React from "react"; // Imports React.

/**
 * SelectInputProps Interface
 * Extends standard HTML <select> attributes and adds custom props.
 * @property {string} label - The text label for the select input.
 * @property {string} id - The unique ID for the select input.
 * @property {string[]} options - An array of strings representing the options for the dropdown.
 */
interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: string[];
}

/**
 * SelectInput Component
 *
 * A simplified reusable UI component for a styled dropdown (select) input.
 * It directly accepts an array of strings for options and forwards
 * any standard HTML select attributes to the underlying <select> element.
 *
 * @param {SelectInputProps} props - The properties for the component.
 * @param {string} props.label - Text label for the select.
 * @param {string} props.id - Unique identifier for the select.
 * @param {string[]} props.options - Array of string options for the dropdown.
 * @param {React.SelectHTMLAttributes<HTMLSelectElement>} props....props - Any other standard HTML select attributes.
 */
export default function SelectInput({
  label,
  id,
  options,
  ...props // Captures any other standard HTML <select> attributes
}: SelectInputProps) {
  return (
    // Main container div for the label and select, styled for a column layout.
    <div className="flex flex-col">
      {/* Label element associated with the select */}
      <label htmlFor={id} className="font-semibold mb-1 text-xs text-slate-700">
        {label} {/* Displays the label text */}
      </label>
      {/* Select (dropdown) element */}
      <select
        id={id} // Unique ID
        {...props} // Spreads all other HTML select attributes (e.g., value, onChange, disabled)
        // Tailwind CSS classes for styling: rounded, border, text, font, padding, background, focus states.
        className="rounded-md border border-slate-300 text-sm font-semibold px-3 py-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
      >
        {/* Maps over the `options` array to render each <option> element */}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
