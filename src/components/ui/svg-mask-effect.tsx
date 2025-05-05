"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

export const MaskContainer = ({
  children,
  className,
  revealText,
  size = 10, // Default size in pixels
  revealSize = 400,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  revealText?: string;
  size?: number;
  revealSize?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [initialSize] = useState(size); // Store initial size to avoid "auto" to numeric animation

  useEffect(() => {
    // Initialize mouse position to center of container
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: width / 2, y: height / 2 });
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      setMousePosition({ x, y });
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ position: "relative" }} // Ensure non-static position
      {...props}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">{children}</div>

      {/* Mask */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center"
        style={{
          WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent, black ${isHovered ? revealSize : initialSize}px)`,
          maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent, black ${isHovered ? revealSize : initialSize}px)`,
        }}
        initial={false}
        animate={{
          WebkitMaskSize: isHovered ? `${revealSize * 2}px` : `${initialSize * 2}px`,
          maskSize: isHovered ? `${revealSize * 2}px` : `${initialSize * 2}px`,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {revealText && (
          <div className="text-white text-4xl font-bold">{revealText}</div>
        )}
      </motion.div>
    </motion.div>
  );
};
