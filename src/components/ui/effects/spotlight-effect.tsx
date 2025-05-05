'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  spotlightClassName?: string;
  size?: number;
  color?: string;
  strength?: number;
  mode?: 'hover' | 'always';
}

export const Spotlight: React.FC<SpotlightProps> = ({
  children,
  className,
  spotlightClassName,
  size = 300,
  color = "blue",
  strength = 0.3,
  mode = 'hover',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [opacity, setOpacity] = useState(mode === 'always' ? strength : 0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Get the appropriate color values based on the color prop
  const getColorValue = () => {
    const colorMap: Record<string, string> = {
      blue: "64, 149, 252",
      purple: "149, 76, 233",
      red: "239, 68, 68",
      green: "34, 197, 94",
      yellow: "234, 179, 8",
      pink: "236, 72, 153",
      indigo: "79, 70, 229",
      cyan: "6, 182, 212",
      orange: "249, 115, 22",
      white: "255, 255, 255",
    };
    
    return colorMap[color] || colorMap.blue;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mousePosition.current = { x, y };
    
    // Update position state for rendering
    setPosition({ x, y });
    
    // If in hover mode, only show when hovered
    if (mode === 'hover' && isHovered) {
      setOpacity(strength);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (mode === 'hover') {
      setOpacity(strength);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (mode === 'hover') {
      setOpacity(0);
    }
  };

  // For "always" mode, track mouse movement even when not hovering
  useEffect(() => {
    if (mode === 'always') {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        handleMouseMove(e);
      };
      
      window.addEventListener('mousemove', handleGlobalMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove);
      };
    }
  }, [mode]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={mode === 'hover' ? handleMouseMove : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* The spotlight effect */}
      <motion.div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300",
          spotlightClassName
        )}
        style={{
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(${getColorValue()}, ${opacity}), transparent 80%)`,
          opacity: opacity > 0 ? 1 : 0,
        }}
        animate={{
          opacity: opacity > 0 ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      {children}
    </div>
  );
};
