"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  iconClassName?: string;
}

export const AccordionItem = ({
  title,
  children,
  isOpen = false,
  onToggle,
  className,
  titleClassName,
  contentClassName,
  iconClassName,
}: AccordionItemProps) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    if (onToggle) onToggle();
  };

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300",
        isExpanded && "bg-white/10",
        className
      )}
    >
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          "flex w-full items-center justify-between p-6 text-left transition-all duration-300",
          isExpanded ? "text-white" : "text-white/90 hover:text-white",
          titleClassName
        )}
        aria-expanded={isExpanded}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <div
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300",
            isExpanded && "rotate-45 bg-white/20",
            iconClassName
          )}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-opacity"
          >
            <path
              d="M6 1.5V10.5M1.5 6H10.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div
              className={cn(
                "px-6 pb-6 text-white/70 text-sm",
                contentClassName
              )}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
  className?: string;
  itemClassName?: string;
  allowMultiple?: boolean;
}

export const Accordion = ({
  items,
  className,
  itemClassName,
  allowMultiple = false,
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openItems.includes(index)}
          onToggle={() => handleToggle(index)}
          className={itemClassName}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};
