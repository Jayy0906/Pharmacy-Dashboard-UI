import React from "react"; // Imports React.

/**
 * TextareaProps Interface
 * Defines the properties accepted by the Textarea component.
 * @property {string} id - The unique ID for the textarea element and its label.
 * @property {string} label - The text label displayed above the textarea.
 * @property {string} [placeholder=""] - The placeholder text displayed inside the textarea. Defaults to an empty string.
 * @property {number} [rows=3] - The number of visible text lines for the textarea. Defaults to 3.
 * @property {boolean} [required=false] - If true, an asterisk is added to the label and the textarea is marked as required. Defaults to false.
 * @property {string} [value] - The current value of the textarea (for controlled components).
 * @property {(e: React.ChangeEvent<HTMLTextAreaElement>) => void} [onChange] - Callback function triggered when the textarea's value changes.
 * @property {string} [className=""] - Optional Tailwind CSS classes applied to the main container div.
 */
interface TextareaProps {
  id: string;
  label: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

/**
 * Textarea Component
 *
 * A reusable UI component for a styled multi-line text input (textarea) with a label.
 * It supports placeholders, custom row counts, required indicators, and controlled component behavior.
 *
 * @param {TextareaProps} props - The properties for the component.
 * @param {string} props.id - Unique identifier for the textarea.
 * @param {string} props.label - Text label for the textarea.
 * @param {string} [props.placeholder=""] - Placeholder text.
 * @param {number} [props.rows=3] - Number of visible rows.
 * @param {boolean} [props.required=false] - Whether the textarea is required.
 * @param {string} [props.value] - Current value.
 * @param {(e: React.ChangeEvent<HTMLTextAreaElement>) => void} [props.onChange] - Change handler.
 * @param {string} [props.className=""] - Additional CSS classes for the container.
 */
const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  placeholder = "",
  rows = 3, // Default number of rows
  required = false,
  value,
  onChange,
  className = "", // Default empty string for optional classes
}) => {
  return (
    // Main container div for the label and textarea, allowing for external styling.
    <div className={className}>
      {/* Label element associated with the textarea */}
      <label
        htmlFor={id} // Links the label to the textarea via its `id`
        className="block text-xs font-semibold text-[#475569] mb-1"
      >
        {label} {/* Displays the label text */}
        {required && " *"} {/* Conditionally adds a required asterisk */}
      </label>
      {/* Textarea element */}
      <textarea
        id={id} // Unique ID
        rows={rows} // Number of visible rows
        placeholder={placeholder} // Placeholder text
        required={required} // HTML required attribute
        value={value} // Controlled component value
        onChange={onChange} // Change event handler
        // Tailwind CSS classes for styling: width, rounded, border, background, text, placeholder color, font, padding, resize behavior, focus states.
        className="w-full rounded-md border border-[#CBD5E1] bg-white text-[#94A3B8] placeholder-[#94A3B8] text-sm px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
      ></textarea>
    </div>
  );
};

export default Textarea;
