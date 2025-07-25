"use client"; // Marks this file as a Client Component in Next.js, indicating it will run on the client side.

import { createContext, useContext, useState } from "react"; // Imports React hooks for context and state management.

/**
 * SidebarContext
 *
 * Creates a React Context to manage the open/closed state of the sidebar
 * across different components in the application without prop drilling.
 *
 * It provides two values:
 * - `menuOpen`: A boolean indicating if the sidebar is currently open.
 * - `setMenuOpen`: A function to update the `menuOpen` state.
 */
const SidebarContext = createContext<{
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}>({
  menuOpen: false, // Default value for `menuOpen`
  setMenuOpen: () => {}, // Default no-op function for `setMenuOpen`
});

/**
 * SidebarProvider Component
 *
 * A React Context Provider that wraps components that need access to the sidebar's
 * open/closed state. It manages the `menuOpen` state internally and provides it
 * to its children via the SidebarContext.
 *
 * @param {object} props - The component's properties.
 * @param {React.ReactNode} props.children - The child components that will consume this context.
 */
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  // `useState` hook to manage the `menuOpen` state within this provider.
  // `menuOpen` is the current state, `setMenuOpen` is the function to update it.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Provides the `menuOpen` state and `setMenuOpen` function to all wrapped children.
    <SidebarContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

/**
 * useSidebar Custom Hook
 *
 * A custom hook that allows any functional component to easily access the
 * `menuOpen` state and `setMenuOpen` function from the nearest SidebarContext.
 * This simplifies consuming the context without directly importing useContext and SidebarContext
 * in every component.
 *
 * @returns {object} An object containing `menuOpen` (boolean) and `setMenuOpen` (function).
 */
export function useSidebar() {
  return useContext(SidebarContext); // Consumes the SidebarContext.
}
