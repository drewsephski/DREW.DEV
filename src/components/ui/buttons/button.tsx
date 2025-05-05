"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  glowEffect?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      glowEffect = false,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
      secondary: "bg-neutral-800 text-neutral-200 hover:bg-neutral-700 shadow-sm",
      outline: "border border-neutral-700 text-neutral-200 hover:bg-neutral-800/50",
      ghost: "text-neutral-200 hover:bg-neutral-800/50",
      link: "text-blue-500 hover:underline p-0 h-auto",
      destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-xs rounded-md",
      md: "h-10 px-4 text-sm rounded-md",
      lg: "h-12 px-6 text-base rounded-lg",
      icon: "h-10 w-10 rounded-md p-0 flex items-center justify-center",
    };

    const glowStyles = glowEffect
      ? "relative after:absolute after:inset-0 after:z-[-1] after:opacity-40 after:blur-xl after:bg-inherit"
      : "";

    const loadingStyles = isLoading
      ? "opacity-80 cursor-not-allowed pointer-events-none"
      : "";

    const ButtonComponent = motion.button;

    return (
      <ButtonComponent
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          glowStyles,
          loadingStyles,
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </ButtonComponent>
    );
  }
);

Button.displayName = "Button";
