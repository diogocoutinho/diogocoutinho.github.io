"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
