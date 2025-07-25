"use client"; // Marks this component as a Client Component in Next.js

import { useEffect } from "react"; // Imports useEffect hook for side effects
import { useSidebar } from "../../context/SidebarContext"; // Imports the useSidebar custom hook for sidebar state
// import { usePathname } from 'next/navigation'; // Commented out, not used directly in this file
import Sidebar from "../Sidebar/Sidebar"; // Imports the Sidebar component
import Header from "../Header/Header"; // Imports the Header component

/**
 * LayoutShell component provides the main structural layout for the application.
 * It includes a persistent sidebar, a header, and a main content area where children are rendered.
 * It also manages the sidebar's open/close state, particularly for mobile responsiveness.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered within the main layout area.
 */
export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  // Uses the useSidebar hook to access and update the sidebar's open/close state.
  const { menuOpen, setMenuOpen } = useSidebar();
  // const pathname = usePathname(); // Commented out as pathname is not used here

  /**
   * useEffect hook to handle keyboard events for closing the sidebar.
   * If the 'Escape' key is pressed, the sidebar will close.
   * Cleans up the event listener on component unmount.
   */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false); // Closes the sidebar if Escape key is pressed
    };
    window.addEventListener("keydown", handleEsc); // Adds event listener when component mounts
    return () => window.removeEventListener("keydown", handleEsc); // Removes event listener when component unmounts
  }, [setMenuOpen]); // Dependency array: re-run if setMenuOpen changes (though it's stable)

  return (
    // Main container for the entire layout, setting up a flexbox for sidebar and main content.
    <div className="flex h-screen overflow-hidden">
      {/* Blur overlay for small screens when the menu is open */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm transition-opacity lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={() => setMenuOpen(false)} // Closes the sidebar when overlay is clicked
      />

      {/* Sidebar Container */}
      <div
        className={`
          fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:relative lg:flex-shrink-0
        `}
      >
        {/* Renders the Sidebar component, passing its open state */}
        <Sidebar menuOpen={menuOpen} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 h-full">
        {/* Renders the Header component, providing a function to toggle the sidebar */}
        <Header onMenuToggle={() => setMenuOpen(!menuOpen)} />
        {/* Main content section, with scrollability and background color */}
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC]">
          {/* Inner container for content padding and overflow handling */}
          <div className="max-w-[100vw] overflow-x-hidden p-4 sm:p-6 md:p-8 lg:p-4">
            {children}{" "}
            {/* Renders the child components passed to LayoutShell */}
          </div>
        </main>
      </div>
    </div>
  );
}
