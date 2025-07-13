"use client";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext<{
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}>({
  menuOpen: false,
  setMenuOpen: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
