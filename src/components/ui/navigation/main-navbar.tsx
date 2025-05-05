"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/buttons/button";
import { DropdownOption } from "@/components/ui/dropdown/aceternity-dropdown";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  IconHome,
  IconComponents,
  IconPalette,
  IconCode,
  IconCreditCard,
  IconBook,
  IconChevronDown,
  IconBrandGithub,
  IconLayoutDashboard
} from "@tabler/icons-react";

interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
  dropdown?: DropdownOption[];
}

export const MainNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Navigation items
  const navItems: NavItem[] = [
    {
      name: "Home",
      href: "/",
      icon: <IconHome size={18} />,
    },
    {
      name: "Demo",
      href: "/demo",
      icon: <IconComponents size={18} />,
    },
    {
      name: "Blogs",
      href: "/blog",
      icon: <IconLayoutDashboard size={18} />,
    },
    {
      name: "Documentation",
      href: "#",
      icon: <IconBook size={18} />,
      dropdown: [
        { value: "/docs/components", label: "Components", icon: <IconComponents size={16} /> },
        { value: "/docs/design-tokens", label: "Design Tokens", icon: <IconPalette size={16} /> },
        { value: "/docs/api", label: "API Reference", icon: <IconCode size={16} /> },
        { value: "/docs/guides", label: "Guides", icon: <IconBook size={16} /> },
      ],
    },
    {
      name: "Pricing",
      href: "/pricing",
      icon: <IconCreditCard size={18} />,
    },
  ];

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-neutral-800/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/next.svg"
            alt="DZN.DEV Logo"
            width={80}
            height={24}
            className="dark:invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <div key={item.name} className="relative">
                  <button
                    type="button"
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors",
                      pathname === item.href
                        ? "text-white"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    )}
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  >
                    {item.name}
                    <motion.div
                      animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconChevronDown size={16} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-neutral-900 border border-neutral-800 rounded-md shadow-lg overflow-hidden z-50"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.value}
                            href={dropdownItem.value}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-300 hover:bg-blue-600/10 hover:text-blue-500 transition-colors"
                          >
                            {dropdownItem.icon}
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-white"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                )}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="https://github.com/drewsephski/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm">
              <IconBrandGithub className="mr-1" size={18} />
              GitHub
            </Button>
          </Link>
          <Link href="/demo">
            <Button variant="primary" size="sm">
              Try Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-neutral-400 hover:text-white hover:bg-white/5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-neutral-900 border-t border-neutral-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="flex flex-col">
                      <button
                        type="button"
                        className={cn(
                          "px-3 py-2 rounded-md text-sm font-medium flex items-center justify-between",
                          pathname === item.href
                            ? "text-white bg-white/5"
                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                        )}
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        <span className="flex items-center gap-2">
                          {item.icon}
                          {item.name}
                        </span>
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconChevronDown size={16} />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-8 mt-1 flex flex-col gap-1"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.value}
                                href={dropdownItem.value}
                                className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-md"
                              >
                                {dropdownItem.icon}
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2",
                      pathname === item.href
                        ? "text-white bg-white/5"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                );
              })}
              <div className="mt-4 flex flex-col gap-2">
                <Link href="https://github.com/drewsephski/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="w-full justify-start">
                    <IconBrandGithub className="mr-2" size={18} />
                    GitHub
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="primary" className="w-full justify-center">
                    Try Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
