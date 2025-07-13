// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutShell from "../components/Layout/LayoutShell";
import { SidebarProvider } from "../context/SidebarContext";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pathly Pharmacy Dashboard",
  description: "Pharmacy management dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="min-h-screen">
            {/* Always use LayoutShell */}
            <LayoutShell>{children}</LayoutShell>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
