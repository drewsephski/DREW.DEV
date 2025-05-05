"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

// Custom NavbarLogo component for the landing page
const LandingNavbarLogo = () => {
  return (
    <motion.a
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Image
        src="/next.svg"
        alt="DZN.DEV"
        width={24}
        height={24}
        className="dark:invert"
      />
      <span className="font-medium text-black dark:text-white">DZN.DEV</span>
    </motion.a>
  );
};

export default function LandingNavbar() {
  // Define all navigation items
  const allNavItems = [
    {
      name: "Home",
      link: "/",
      showOnMobile: false, // Hide on mobile
    },
    {
      name: "Blogs",
      link: "/blog",
      showOnMobile: true,
    },
    {
      name: "Demo",
      link: "/demo",
      showOnMobile: true,
    },
    {
      name: "Pricing",
      link: "/pricing",
      showOnMobile: false, // Hide on mobile as requested
    },
  ];

  // Filter items for desktop and mobile
  const desktopNavItems = allNavItems;
  const mobileNavItems = allNavItems.filter(item => item.showOnMobile);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="fixed inset-x-0 top-0 z-50">
        {/* Desktop Navigation */}
        <NavBody className="bg-white/10 dark:bg-black/10 backdrop-blur-md">
          <LandingNavbarLogo />
          <NavItems
            items={desktopNavItems}
            className="font-semibold text-base tracking-wide"
          />
          <div className="flex items-center gap-4">
            {/* Hide "Try Demo" button on smaller screens */}
            <NavbarButton
              variant="secondary"
              className="hidden md:flex hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 font-bold"
              onClick={() => window.location.href = '/demo'}
            >
              Try Demo
            </NavbarButton>
            <NavbarButton
              variant="primary"
              className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 font-bold text-sm md:text-base"
              onClick={() => window.location.href = '/pricing'}
            >
              View Pricing
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="bg-white/10 dark:bg-black/10 backdrop-blur-md">
          <MobileNavHeader className="justify-between px-4">
            <LandingNavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-black/80 backdrop-blur-lg"
          >
            {/* Use the filtered mobile navigation items */}
            {mobileNavItems.map((item, idx) => (
              <motion.a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white font-semibold text-lg py-3 px-4 w-full border-b border-white/10"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: idx * 0.05 }
                }}
              >
                <span className="block">{item.name}</span>
              </motion.a>
            ))}
            {/* Mobile menu footer - spacing preserved for layout */}
            <div className="flex w-full flex-col gap-4 mt-6 px-4">
              {/* "View Pricing" button removed as requested */}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
