"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "@tabler/icons-react";

export interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface AceternityDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  dropdownClassName?: string;
  optionClassName?: string;
  disabled?: boolean;
  label?: string;
  error?: string;
  variant?: "default" | "minimal" | "bordered" | "glass";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const AceternityDropdown: React.FC<AceternityDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  dropdownClassName = "",
  optionClassName = "",
  disabled = false,
  label,
  error,
  variant = "default",
  size = "md",
  fullWidth = false,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Variant styles
  const variantStyles = {
    default: "bg-neutral-800 border border-neutral-700 text-neutral-200",
    minimal: "bg-transparent text-neutral-200 hover:bg-neutral-800/50",
    bordered: "bg-transparent border border-neutral-700 text-neutral-200",
    glass: "bg-neutral-800/30 backdrop-blur-md border border-neutral-700/50 text-neutral-200",
  };

  // Size styles
  const sizeStyles = {
    sm: "text-xs py-1.5 px-2",
    md: "text-sm py-2 px-3",
    lg: "text-base py-2.5 px-4",
  };

  // Width styles
  const widthStyles = fullWidth ? "w-full" : "w-auto";

  return (
    <div className={cn("relative", fullWidth && "w-full", className)} ref={dropdownRef}>
      {label && (
        <label className="block text-xs text-neutral-400 mb-1 font-medium">
          {label}
        </label>
      )}
      
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-between rounded-md transition-all duration-200",
          variantStyles[variant],
          sizeStyles[size],
          widthStyles,
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-neutral-600",
          isOpen && "ring-2 ring-blue-500/40",
          error && "border-red-500/50 focus:ring-red-500/40"
        )}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 truncate">
          {icon && <span className="text-neutral-400">{icon}</span>}
          {selectedOption ? (
            <span className="flex items-center gap-2">
              {selectedOption.icon && <span>{selectedOption.icon}</span>}
              <span className="truncate">{selectedOption.label}</span>
            </span>
          ) : (
            <span className="text-neutral-500 truncate">{placeholder}</span>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-2 text-neutral-400"
        >
          <IconChevronDown size={16} />
        </motion.div>
      </button>

      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md py-1",
              variantStyles[variant],
              "shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
              dropdownClassName
            )}
            role="listbox"
          >
            {options.map((option) => (
              <motion.div
                key={option.value}
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                className={cn(
                  "cursor-pointer select-none px-3 py-2 text-sm flex items-center gap-2",
                  option.value === value && "bg-blue-600/20 text-blue-500",
                  optionClassName
                )}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                role="option"
                aria-selected={option.value === value}
              >
                {option.icon && <span>{option.icon}</span>}
                <span className="truncate">{option.label}</span>
                {option.value === value && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
