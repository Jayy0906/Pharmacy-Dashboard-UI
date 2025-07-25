import React from "react"; // Imports React.

/**
 * TextInputProps Interface
 * Extends standard HTML <input> attributes and adds custom props.
 * @property {string} label - The text label for the text input.
 * @property {string} id - The unique ID for the text input.
 */
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

/**
 * TextInput Component
 *
 * A simplified reusable UI component for a styled text input field.
 * It provides a label and forwards any standard HTML input attributes
 * to the underlying <input> element.
 *
 * @param {TextInputProps} props - The properties for the component.
 * @param {string} props.label - Text label for the input.
 * @param {string} props.id - Unique identifier for the input.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props....props - Any other standard HTML input attributes.
 */
export default function TextInput({ label, id, ...props }: TextInputProps) {
  return (
    // Main container div for the label and input, styled for a column layout.
    <div className="flex flex-col">
      {/* Label element associated with the input */}
      <label htmlFor={id} className="font-semibold mb-1 text-xs text-slate-700">
        {label} {/* Displays the label text */}
      </label>
      {/* Input element */}
      <input
        id={id} // Unique ID
        {...props} // Spreads all other HTML input attributes (e.g., type, value, onChange, placeholder)
        // Tailwind CSS classes for styling: rounded, border, text, font, padding, focus states.
        className="rounded-md border border-slate-300 text-sm px-3 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
      />
    </div>
  );
}
