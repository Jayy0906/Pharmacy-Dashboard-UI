// components/suppliers/ActionsMenu.tsx

import { useState, useRef, useEffect } from "react";
import { FaEdit, FaHistory, FaTrashAlt, FaEllipsisV } from "react-icons/fa"; // Icons for actions

// Props interface for handling external actions passed from parent
interface ActionsMenuProps {
  onEdit: () => void; // Triggered when "Edit" is clicked
  onViewHistory: () => void; // Triggered when "View History" is clicked
  onDelete: () => void; // Triggered when "Delete" is clicked
}

/**
 * ActionsMenu Component
 *
 * This is a dropdown menu triggered by an ellipsis icon (⋮).
 * It provides three actions for a supplier row: Edit, View History, and Delete.
 */
export const ActionsMenu = ({
  onEdit,
  onViewHistory,
  onDelete,
}: ActionsMenuProps) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu visibility
  const menuRef = useRef<HTMLDivElement>(null); // Ref to track clicks outside the menu

  /**
   * Toggles the menu open/closed when ellipsis icon is clicked.
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Closes menu when user clicks outside the dropdown.
   * Attached globally to document on mount.
   */
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false); // Close the menu
    }
  };

  // Add/remove global event listener for outside click detection
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener when component unmounts or rerenders
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-gray-500" ref={menuRef}>
      {/* === Ellipsis Icon Button === */}
      <button
        aria-label="Open actions menu"
        className="p-1 rounded hover:bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300"
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <FaEllipsisV />
      </button>

      {/* === Dropdown Menu Items === */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10"
          role="menu"
        >
          {/* Edit Option */}
          <button
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                       flex items-center gap-2 cursor-pointer"
            role="menuitem"
            onClick={() => {
              onEdit(); // Call external edit handler
              setIsOpen(false); // Close menu after action
            }}
          >
            <FaEdit />
            Edit
          </button>

          {/* View History Option */}
          <button
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                       flex items-center gap-2 cursor-pointer"
            role="menuitem"
            onClick={() => {
              onViewHistory(); // Call external view history handler
              setIsOpen(false); // Close menu after action
            }}
          >
            <FaHistory />
            View History
          </button>

          {/* Delete Option */}
          <button
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 
                       flex items-center gap-2 cursor-pointer"
            role="menuitem"
            onClick={() => {
              onDelete(); // Call external delete handler
              setIsOpen(false); // Close menu after action
            }}
          >
            <FaTrashAlt />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
