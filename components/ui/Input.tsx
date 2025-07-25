// components/ui/Input.tsx
import React from "react"; // Imports React.

/**
 * InputProps Interface
 * Defines the properties accepted by the Input component.
 * @property {string} id - The unique ID for the input element and its label.
 * @property {string} label - The text label displayed above the input field.
 * @property {string} [type="text"] - The type of the input (e.g., "text", "number", "password"). Defaults to "text".
 * @property {string} [placeholder=""] - The placeholder text displayed inside the input. Defaults to an empty string.
 * @property {boolean} [required=false] - If true, an asterisk is added to the label and the input is marked as required. Defaults to false.
 * @property {string | number} [value] - The current value of the input (for controlled components).
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - Callback function triggered when the input's value changes.
 * @property {boolean} [disabled=false] - If true, the input field is disabled and styled accordingly. Defaults to false.
 * @property {string} [step] - Specifies the legal number intervals for number and range input types.
 * @property {number} [min] - Specifies the minimum value for number input types.
 * @property {string} [className=""] - Optional Tailwind CSS classes applied to the main container div.
 * @property {React.ReactNode} [icon] - Optional React node to display inside the input field as a suffix icon.
 */
interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  step?: string;
  min?: number;
  className?: string;
  icon?: React.ReactNode;
}

/**
 * Input Component
 *
 * A reusable UI component for a styled text input field with a label.
 * It supports various HTML input types, placeholders, required indicators,
 * controlled component behavior, disabled states, numeric constraints, and an optional suffix icon.
 *
 * @param {InputProps} props - The properties for the component.
 * @param {string} props.id - Unique identifier for the input.
 * @param {string} props.label - Text label for the input.
 * @param {string} [props.type="text"] - Input type.
 * @param {string} [props.placeholder=""] - Placeholder text.
 * @param {boolean} [props.required=false] - Whether the input is required.
 * @param {string | number} [props.value] - Current value.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] - Change handler.
 * @param {boolean} [props.disabled=false] - Whether the input is disabled.
 * @param {string} [props.step] - Step attribute for number inputs.
 * @param {number} [props.min] - Min attribute for number inputs.
 * @param {string} [props.className=""] - Additional CSS classes for the container.
 * @param {React.ReactNode} [props.icon] - Optional icon to display inside the input.
 */
const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  placeholder = "",
  required = false,
  value,
  onChange,
  disabled = false,
  step,
  min,
  className = "", // Default empty string for optional classes
  icon,
}) => {
  return (
    // Main container div for the label and input, allowing for external styling.
    <div className={className}>
      {/* Label element associated with the input */}
      <label
        htmlFor={id} // Links the label to the input via its `id`
        className="block text-xs font-semibold text-[#475569] mb-1"
      >
        {label} {/* Displays the label text */}
        {required && " *"} {/* Conditionally adds a required asterisk */}
      </label>
      {/* Relative container for positioning the input and optional icon */}
      <div className="relative">
        {/* Input element */}
        <input
          id={id} // Unique ID
          type={type} // Input type (e.g., text, number)
          placeholder={placeholder} // Placeholder text
          required={required} // HTML required attribute
          value={value} // Controlled component value
          onChange={onChange} // Change event handler
          // Fixes a console warning by making the input readOnly if no onChange handler is provided.
          readOnly={onChange === undefined}
          disabled={disabled} // HTML disabled attribute
          step={step} // Step attribute for number inputs
          min={min} // Min attribute for number inputs
          // Tailwind CSS classes for styling: width, rounded, border, background, text, focus states.
          // Dynamically applies `bg-[#F1F5F9]` and `cursor-not-allowed` if disabled.
          // Adds right padding (`pr-8`) if an icon is present to prevent text overlap.
          className={`w-full rounded-md border border-[#CBD5E1] ${
            disabled ? "bg-[#F1F5F9] cursor-not-allowed" : "bg-white"
          } text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent ${
            icon ? "pr-8" : ""
          }`}
        />
        {/* Conditionally renders the icon inside the input field */}
        {icon && (
          // Absolute positioning for the icon, ensuring it doesn't interfere with text input.
          <div className="absolute right-2 top-2.5 text-[#94A3B8] pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
