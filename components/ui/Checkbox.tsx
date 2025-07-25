import React from "react"; // Imports React.

/**
 * CheckboxProps Interface
 * Defines the properties accepted by the Checkbox component.
 * @property {string} id - The unique ID for the checkbox input and its corresponding label (for accessibility).
 * @property {string} label - The text label displayed next to the checkbox.
 * @property {boolean} [checked] - Controls whether the checkbox is checked (controlled component).
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - Callback function triggered when the checkbox's state changes.
 * @property {string} [className] - Optional Tailwind CSS classes applied to the main container div.
 * @property {string} [labelClassName] - Optional Tailwind CSS classes applied to the label element.
 */
interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labelClassName?: string;
}

/**
 * Checkbox Component
 *
 * A reusable UI component for a custom checkbox input with a label.
 * It supports controlled behavior and provides flexibility for styling.
 *
 * @param {CheckboxProps} props - The properties for the component.
 * @param {string} props.id - Unique identifier for the checkbox.
 * @param {string} props.label - Text to display next to the checkbox.
 * @param {boolean} [props.checked] - Current checked state of the checkbox.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] - Handler for when the checkbox state changes.
 * @param {string} [props.className] - Additional CSS classes for the container.
 * @param {string} [props.labelClassName] - Additional CSS classes for the label.
 */
const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  className = "", // Default empty string for optional classes
  labelClassName = "", // Default empty string for optional classes
}) => {
  return (
    // Main container div for the checkbox and label, allowing for external styling.
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Checkbox input element */}
      <input
        id={id} // Connects the input to the label
        type="checkbox"
        checked={checked} // Controls the checked state
        onChange={onChange} // Handles state changes
        // Prevents console warning in React when `onChange` is not provided for a controlled component.
        // If `onChange` is `undefined`, the input becomes read-only.
        readOnly={onChange === undefined}
        // Tailwind CSS classes for basic styling, colors, border, rounded corners, and focus states.
        className="w-4 h-4 text-[#2563EB] border border-[#CBD5E1] rounded focus:ring-2 focus:ring-[#2563EB]"
      />
      {/* Label element associated with the checkbox input */}
      <label
        htmlFor={id} // Links the label to the input via its `id`
        // Tailwind CSS classes for font, text color, and additional custom classes.
        className={`text-sm font-semibold text-[#475569] ${labelClassName}`}
      >
        {label} {/* Displays the label text */}
      </label>
    </div>
  );
};

export default Checkbox;
