// components/users/AddUserForm/ToggleSwitch.tsx
import { useState } from "react";

interface ToggleSwitchProps {
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
  label: string;
  description?: string;
}

export default function ToggleSwitch({
  initialValue = true,
  onChange,
  label,
  description,
}: ToggleSwitchProps) {
  const [isChecked, setIsChecked] = useState(initialValue);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <div>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleSwitch"
            checked={isChecked}
            onChange={handleChange}
            className="sr-only peer"
          />
          <div
            className={`w-10 h-5 rounded-full transition-colors duration-300 cursor-pointer ${
              isChecked ? "bg-emerald-600" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`absolute top-[2px] left-[2px] w-4 h-4 rounded-full bg-white border border-gray-300 transition-transform duration-300 ${
              isChecked ? "translate-x-[1.25rem]" : ""
            }`}
          ></div>
        </div>
        <label
          htmlFor="toggleSwitch"
          className="text-gray-700 font-medium select-none cursor-pointer"
        >
          {label}
        </label>
      </div>
      {description && (
        <p className="text-[10px] text-gray-500 mt-1 max-w-xs">{description}</p>
      )}
    </div>
  );
}
