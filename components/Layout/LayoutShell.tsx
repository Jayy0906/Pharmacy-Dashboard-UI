"use client";

import { useEffect } from "react";
import { useSidebar } from "../../context/SidebarContext";
// import { usePathname } from 'next/navigation';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const { menuOpen, setMenuOpen } = useSidebar();
  // const pathname = usePathname();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setMenuOpen]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Blur overlay on small screens */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm transition-opacity lg:hidden ${menuOpen ? "block" : "hidden"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:relative lg:flex-shrink-0
        `}
      >
        <Sidebar menuOpen={menuOpen} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0 h-full">
        <Header onMenuToggle={() => setMenuOpen(!menuOpen)} />
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC]">
          <div className="max-w-[100vw] overflow-x-hidden p-4 sm:p-6 md:p-8 lg:p-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
