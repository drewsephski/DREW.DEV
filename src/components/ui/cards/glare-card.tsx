"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GlareCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  glareColor?: string;
  borderColor?: string;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export const GlareCard = ({
  children,
  className,
  containerClassName,
  glareColor = "rgba(255, 255, 255, 0.4)",
  borderColor = "rgba(255, 255, 255, 0.1)",
  as: Component = "div",
  href,
  target,
  rel,
  onClick,
  ...props
}: GlareCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const updateGlarePosition = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (!containerRef.current || !glareRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;
    
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOpacity(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateGlarePosition(e);
  };

  // Determine the component to render
  const CardComponent = href ? "a" : Component;
  const cardProps = href ? { href, target, rel } : {};

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-xl border bg-black/[0.01] dark:bg-white/[0.01]",
        containerClassName
      )}
      style={{
        borderColor: borderColor,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...props}
    >
      <CardComponent
        className={cn(
          "relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl p-8",
          className
        )}
        {...cardProps}
      >
        {children}
      </CardComponent>
      
      {/* Glare effect */}
      <motion.div
        ref={glareRef}
        className="pointer-events-none absolute -inset-full z-0 opacity-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glareColor}, transparent 40%)`,
        }}
        animate={{ opacity }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
};
