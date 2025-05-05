"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  blurStrength?: number;
  borderOpacity?: number;
  backgroundOpacity?: number;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export const GlassCard = ({
  children,
  className,
  containerClassName,
  blurStrength = 10,
  borderOpacity = 0.1,
  backgroundOpacity = 0.2,
  as: Component = "div",
  href,
  target,
  rel,
  onClick,
  ...props
}: GlassCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  // Determine the component to render
  const CardComponent = href ? "a" : Component;
  const cardProps = href ? { href, target, rel } : {};
  
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden",
        containerClassName
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...props}
    >
      {/* Glass effect */}
      <CardComponent
        className={cn(
          "relative z-10 flex h-full w-full flex-col overflow-hidden rounded-xl p-8",
          "border border-white/10",
          "backdrop-blur",
          className
        )}
        style={{
          backdropFilter: `blur(${blurStrength}px)`,
          backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
          borderColor: `rgba(255, 255, 255, ${borderOpacity})`,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
        {...cardProps}
      >
        {/* Subtle inner highlight */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </CardComponent>
    </motion.div>
  );
};
