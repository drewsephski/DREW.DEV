"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  rounded?: "full" | "md";
  glow?: boolean;
  dot?: boolean;
  dotColor?: string;
  animated?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      rounded = "full",
      glow = false,
      dot = false,
      dotColor,
      animated = false,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary: "bg-blue-600/20 text-blue-500",
      secondary: "bg-neutral-700 text-neutral-300",
      outline: "bg-transparent border border-neutral-700 text-neutral-300",
      success: "bg-green-600/20 text-green-500",
      warning: "bg-yellow-600/20 text-yellow-500",
      danger: "bg-red-600/20 text-red-500",
    };

    const sizeStyles = {
      sm: "text-xs py-0.5 px-1.5",
      md: "text-xs py-1 px-2",
      lg: "text-sm py-1 px-3",
    };

    const roundedStyles = {
      full: "rounded-full",
      md: "rounded-md",
    };

    const glowStyles = glow
      ? "relative after:absolute after:inset-0 after:z-[-1] after:opacity-40 after:blur-xl after:bg-inherit"
      : "";

    const BadgeComponent = animated ? motion.span : "span";
    const animationProps = animated
      ? {
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { duration: 0.2 },
          whileHover: { scale: 1.05 },
        }
      : {};

    return (
      <BadgeComponent
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium",
          variantStyles[variant],
          sizeStyles[size],
          roundedStyles[rounded],
          glowStyles,
          className
        )}
        {...animationProps}
        {...props}
      >
        {dot && (
          <span
            className={cn("mr-1 h-2 w-2 rounded-full", {
              "bg-blue-500": variant === "primary" && !dotColor,
              "bg-neutral-400": variant === "secondary" && !dotColor,
              "bg-green-500": variant === "success" && !dotColor,
              "bg-yellow-500": variant === "warning" && !dotColor,
              "bg-red-500": variant === "danger" && !dotColor,
            })}
            style={dotColor ? { backgroundColor: dotColor } : {}}
          />
        )}
        {children}
      </BadgeComponent>
    );
  }
);

Badge.displayName = "Badge";
