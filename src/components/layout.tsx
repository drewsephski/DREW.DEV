"use client";

import React from "react";
import { MainNavbar } from "@/components/ui/navigation/main-navbar";
import { FloatingDock } from "@/components/ui/navigation/floating-dock";
import { usePathname } from "next/navigation";
import { IconHome, IconComponents, IconBook, IconCreditCard, IconLayoutDashboard } from "@tabler/icons-react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  // Navigation items for the floating dock
  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: <IconHome className="h-5 w-5" />,
    },
    {
      name: "Demo",
      href: "/demo",
      icon: <IconComponents className="h-5 w-5" />,
    },
    {
      name: "Docs",
      href: "/docs",
      icon: <IconBook className="h-5 w-5" />,
    },
    {
      name: "Pricing",
      href: "/pricing",
      icon: <IconCreditCard className="h-5 w-5" />,
    },
    {
      name: "Blog",
      href: "/blog",
      icon: <IconLayoutDashboard className="h-5 w-5" />,
    },
  ];

  return (
    <>
      <MainNavbar />
      <main>{children}</main>
      <FloatingDock items={navItems} />
    </>
  );
};
