"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  neonColor?: string;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export const NeonCard = ({
  children,
  className,
  containerClassName,
  neonColor = "#00f2ff",
  as: Component = "div",
  href,
  target,
  rel,
  onClick,
  ...props
}: NeonCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine the component to render
  const CardComponent = href ? "a" : Component;
  const cardProps = href ? { href, target, rel } : {};
  
  // Convert hex to rgba for glow effect
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  
  const glowColor = hexToRgba(neonColor, 0.7);
  const shadowColor = hexToRgba(neonColor, 0.3);
  
  return (
    <motion.div
      className={cn(
        "relative rounded-xl overflow-hidden bg-black/90 transition-all duration-300",
        containerClassName
      )}
      style={{
        boxShadow: isHovered 
          ? `0 0 10px ${shadowColor}, 0 0 30px ${shadowColor}`
          : `0 0 5px ${shadowColor}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...props}
    >
      {/* Neon border effect */}
      <div 
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300"
        style={{
          boxShadow: `inset 0 0 2px ${neonColor}`,
          opacity: isHovered ? 1 : 0.7,
        }}
      />
      
      {/* Neon corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-xl transition-all duration-300"
        style={{ 
          borderColor: neonColor,
          opacity: isHovered ? 1 : 0.7,
        }} 
      />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-xl transition-all duration-300"
        style={{ 
          borderColor: neonColor,
          opacity: isHovered ? 1 : 0.7,
        }} 
      />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-xl transition-all duration-300"
        style={{ 
          borderColor: neonColor,
          opacity: isHovered ? 1 : 0.7,
        }} 
      />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-xl transition-all duration-300"
        style={{ 
          borderColor: neonColor,
          opacity: isHovered ? 1 : 0.7,
        }} 
      />
      
      {/* Content */}
      <CardComponent
        className={cn(
          "relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl p-8",
          className
        )}
        {...cardProps}
      >
        {children}
      </CardComponent>
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          opacity: isHovered ? 0.15 : 0,
        }}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
