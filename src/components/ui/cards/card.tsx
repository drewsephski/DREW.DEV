"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated" | "glass" | "gradient";
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  hoverEffect?: "scale" | "lift" | "glow" | "border" | "none";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      interactive = false,
      gradientFrom,
      gradientTo,
      hoverEffect = "none",
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: "bg-neutral-800",
      bordered: "bg-neutral-800 border border-neutral-700",
      elevated: "bg-neutral-800 shadow-lg shadow-black/20",
      glass: "bg-neutral-800/30 backdrop-blur-md border border-neutral-700/50",
      gradient: gradientFrom && gradientTo
        ? `bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`
        : "bg-gradient-to-br from-blue-600/20 to-purple-600/20",
    };

    const sizeStyles = {
      sm: "p-3 rounded-lg",
      md: "p-4 rounded-lg",
      lg: "p-6 rounded-xl",
    };

    const hoverStyles = interactive
      ? {
          scale: "hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300",
          lift: "hover:-translate-y-1 transition-transform duration-300",
          glow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-shadow duration-300",
          border: "hover:border-blue-500/50 transition-colors duration-300",
          none: "",
        }[hoverEffect]
      : "";

    const Component = interactive ? motion.div : "div";
    const motionProps = interactive
      ? {
          whileHover: hoverEffect === "scale" ? { scale: 1.02 } : {},
          whileTap: hoverEffect === "scale" ? { scale: 0.98 } : {},
        }
      : {};

    return (
      <Component
        ref={ref}
        className={cn(
          "overflow-hidden",
          variantStyles[variant],
          sizeStyles[size],
          hoverEffect !== "scale" ? hoverStyles : "",
          className
        )}
        {...motionProps}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-4", className)}
    {...props}
  />
));

export const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-neutral-400", className)}
    {...props}
  />
));

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 pt-0", className)} {...props} />
));

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-4 pt-0", className)}
    {...props}
  />
));

Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";
CardFooter.displayName = "CardFooter";
