"use client"; // Marks this component as a Client Component in Next.js

import Link from "next/link"; // Imports Next.js Link component for client-side navigation
import { usePathname } from "next/navigation"; // Imports usePathname hook to get the current URL path
import clsx from "clsx"; // Imports clsx for conditional class name concatenation
import { getIconPath } from "./Icons"; // Imports the helper function for SVG icon paths

/**
 * NavItem component represents a single navigation link in a sidebar or menu.
 * It dynamically applies active styles based on the current URL path.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed as the link text (e.g., "Dashboard").
 * @param {string} props.icon - The name of the icon to display next to the link.
 * @param {string} props.href - The URL path for the navigation link.
 * @param {boolean} [props.active=false] - Optional: Force active state, overriding pathname matching.
 */
export default function NavItem({
  children,
  icon,
  href,
  active = false,
}: {
  children: React.ReactNode;
  icon: string;
  href: string;
  active?: boolean;
}) {
  const pathname = usePathname(); // Gets the current URL pathname
  // Determines if the current NavItem is active.
  // It's active if 'active' prop is true OR if the current pathname matches the href.
  const isActive = active || pathname === href;

  return (
    // Next.js Link component for client-side navigation without full page reloads.
    <Link
      href={href}
      // Dynamically applies CSS classes using clsx:
      // - Base styles for all nav items
      // - Active styles (teal background, white text) if isActive is true
      // - Default/hover styles (gray text, light gray background on hover) otherwise
      className={clsx(
        "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors",
        isActive ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100",
      )}
    >
      {/* SVG Icon for the navigation item */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // Dynamically applies icon color: white if active, current text color otherwise
        className={clsx("h-5 w-5", isActive ? "text-white" : "text-current")}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={getIconPath(icon)} // Renders the SVG path based on the 'icon' prop
        />
      </svg>
      {children} {/* Renders the text content of the navigation item */}
    </Link>
  );
}
