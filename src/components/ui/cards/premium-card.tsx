"use client";

import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const PremiumCard = ({
  children,
  className,
  variant = "default",
  hoverEffect = "glow",
  glowColor = "rgba(59, 130, 246, 0.5)", // Default blue glow
  borderGradient = false,
  interactive = true,
  ...props
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Handle mouse move for interactive effects
  const handleMouseMove = (e) => {
    if (!interactive || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Set hovered state when mouse enters
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Variant styles
  const variantStyles = {
    default: "bg-neutral-900 border-neutral-800",
    gradient: "bg-gradient-to-br from-neutral-900 to-neutral-800 border-neutral-800",
    glass: "bg-neutral-900/40 backdrop-blur-xl border-neutral-800/50",
    dark: "bg-black border-neutral-800",
  };

  // Hover effect styles
  const getHoverStyles = () => {
    if (!interactive) return "";

    switch (hoverEffect) {
      case "glow":
        return "transition-all duration-300 hover:shadow-lg";
      case "lift":
        return "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg";
      case "border":
        return "transition-all duration-300 hover:border-blue-500/50";
      case "none":
      default:
        return "";
    }
  };

  // Calculate glow position
  const getGlowStyle = () => {
    if (!isHovered || hoverEffect !== "glow" || !interactive) return {};

    const { x, y } = mousePosition;
    const cardWidth = cardRef.current?.offsetWidth || 0;
    const cardHeight = cardRef.current?.offsetHeight || 0;

    return {
      background: `radial-gradient(circle at ${x}px ${y}px, ${glowColor} 0%, transparent 70%)`,
      opacity: 0.15,
      width: `${cardWidth * 1.5}px`,
      height: `${cardHeight * 1.5}px`,
      left: `${x - cardWidth * 0.75}px`,
      top: `${y - cardHeight * 0.75}px`,
    };
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative rounded-xl overflow-hidden",
        borderGradient && "p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Card Content */}
      <div
        className={cn(
          "relative z-10 rounded-xl border overflow-hidden",
          variantStyles[variant],
          getHoverStyles()
        )}
      >
        {children}
      </div>

      {/* Interactive Glow Effect */}
      {interactive && hoverEffect === "glow" && (
        <motion.div
          className="absolute pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={getGlowStyle()}
        />
      )}

      {/* Animated Border Gradient */}
      {borderGradient && (
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
            backgroundSize: "300% 100%",
            animation: "gradientShift 3s linear infinite",
          }}
        />
      )}

      {/* Global CSS for animation */}
      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  );
};

// Premium Card Header
export const PremiumCardHeader = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
};

// Premium Card Title
export const PremiumCardTitle = ({
  children,
  className,
  gradient = false,
  ...props
}) => {
  return (
    <h3
      className={cn(
        "text-xl font-bold",
        gradient ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500" : "text-white",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

// Premium Card Content
export const PremiumCardContent = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("p-6 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  );
};

// Premium Card Footer
export const PremiumCardFooter = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("p-6 pt-0 flex items-center", className)}
      {...props}
    >
      {children}
    </div>
  );
};

// Export all components
PremiumCard.Header = PremiumCardHeader;
PremiumCard.Title = PremiumCardTitle;
PremiumCard.Content = PremiumCardContent;
PremiumCard.Footer = PremiumCardFooter;
