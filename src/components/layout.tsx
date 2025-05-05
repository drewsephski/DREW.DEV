"use client";

import React from "react";
import { Footer } from "@/components/ui/navigation/footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* MainNavbar removed from here since it's already provided by NavigationProvider */}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};
