
'use client';

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue } from "motion/react";
import { usePathname } from "next/navigation";
import { throttle, cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";

export interface FloatingDockItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const FloatingDock = ({
  items,
  className = "",
  desktopClassName = "",
  mobileClassName = "",
}: {
  items: FloatingDockItem[];
  className?: string;
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY;

      // Show when:
      // 1. User has scrolled past the header (> 100px)
      // 2. User is scrolling up
      // 3. User has reached the bottom of the page
      const isScrollingUp = currentScrollY < lastScrollY;
      const isAtTop = currentScrollY < 100;
      const isAtBottom = window.innerHeight + currentScrollY >= document.body.offsetHeight - 100;

      if (isAtTop) {
        // Hide when at the top of the page (navbar is visible)
        setIsVisible(false);
      } else if (isAtBottom) {
        // Always show when at the bottom of the page
        setIsVisible(true);
      } else if (isScrollingUp) {
        // Show when scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide when scrolling down (and not at the bottom)
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    }, 100), // 100ms throttle
    [lastScrollY]
  );

  useEffect(() => {
    setIsMounted(true);

    // Set initial scroll position
    setLastScrollY(window.scrollY);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Return null during server-side rendering
  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className={cn(`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50`, className)}
        >
          <div className="hidden md:flex items-center justify-center p-2.5 bg-black/40 backdrop-blur-lg rounded-full border border-white/10 shadow-lg">
            <div className="flex space-x-2">
              {items.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    className={cn(
                      `relative flex items-center justify-center p-2.5 rounded-full transition-all duration-300`,
                      isActive
                        ? "bg-white/20 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    )}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-white/20 rounded-full"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">
                      {item.icon}
                    </span>
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={isActive ? { opacity: 1, width: "auto" } : { opacity: 0, width: 0 }}
                      className="ml-1.5 text-sm font-medium whitespace-nowrap overflow-hidden"
                    >
                      {item.name}
                    </motion.span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Mobile version */}
          <div className={cn("relative block md:hidden", mobileClassName)}>
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  layoutId="nav"
                  className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
                >
                  {items.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                        transition: {
                          delay: idx * 0.05,
                        },
                      }}
                      transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                    >
                      <a
                        href={item.href}
                        key={item.name}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                      >
                        <div className="h-4 w-4">{item.icon}</div>
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <button
              type="button"
              onClick={() => setIsVisible(!isVisible)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
              aria-label="Toggle navigation menu"
              title="Toggle navigation menu"
            >
              <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Default dock items with Tabler icons
export const defaultDockItems: FloatingDockItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: 'Components',
    href: '/blog/components',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

// We can keep specialized dock items for different sections if needed
export const blogDockItems = defaultDockItems;
