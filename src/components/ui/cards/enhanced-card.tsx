'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  accentColor?: string;
  glowIntensity?: number;
  borderGlow?: boolean;
  depth?: number;
  glassEffect?: boolean;
}

export const EnhancedCard = ({
  children,
  className,
  containerClassName,
  as: Component = 'div',
  href,
  target,
  rel,
  onClick,
  accentColor = '#00f2ff',
  glowIntensity = 0.5,
  borderGlow = true,
  depth = 15,
  glassEffect = true,
  ...props
}: EnhancedCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Determine the component to render
  const CardComponent = href ? 'a' : Component;
  const cardProps = href ? { href, target, rel } : {};
  
  // Convert hex to rgba for glow effect
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  
  const glowColor = hexToRgba(accentColor, glowIntensity);
  const borderColor = hexToRgba(accentColor, 0.6);
  
  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation based on mouse position
    // Limit rotation to a reasonable range
    const rotationFactor = 10;
    const newRotateX = -mouseY / (rect.height / 2) * rotationFactor;
    const newRotateY = mouseX / (rect.width / 2) * rotationFactor;
    
    setRotateX(newRotateX);
    setRotateY(newRotateY);
    
    // Update mouse position for glare effect
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };
  
  const resetCard = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'relative perspective-[1000px] cursor-pointer overflow-hidden rounded-xl',
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetCard}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      {...props}
    >
      <motion.div
        className="relative w-full h-full transform-style-3d transition-all duration-200"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Main card face */}
        <CardComponent
          className={cn(
            'relative flex flex-col items-center justify-center rounded-xl p-8 backface-hidden',
            'transition-all duration-300',
            className
          )}
          style={{
            backgroundColor: 'rgba(15, 15, 15, 0.95)',
            boxShadow: isHovered 
              ? `0 0 20px ${glowColor}, 0 0 30px rgba(0, 0, 0, 0.3)`
              : '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
            transform: 'translateZ(0)',
            border: borderGlow ? `1px solid ${borderColor}` : 'none',
          }}
          {...cardProps}
        >
          {/* Glass effect overlay */}
          {glassEffect && (
            <div 
              className="absolute inset-0 rounded-xl backdrop-blur-sm pointer-events-none"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                opacity: isHovered ? 0.1 : 0.05,
              }}
            />
          )}
          
          {/* Neon corner accents */}
          {borderGlow && (
            <>
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-xl transition-all duration-300"
                style={{ 
                  borderColor: accentColor,
                  opacity: isHovered ? 1 : 0.7,
                }} 
              />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-xl transition-all duration-300"
                style={{ 
                  borderColor: accentColor,
                  opacity: isHovered ? 1 : 0.7,
                }} 
              />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-xl transition-all duration-300"
                style={{ 
                  borderColor: accentColor,
                  opacity: isHovered ? 1 : 0.7,
                }} 
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-xl transition-all duration-300"
                style={{ 
                  borderColor: accentColor,
                  opacity: isHovered ? 1 : 0.7,
                }} 
              />
            </>
          )}
          
          {/* Glare effect */}
          <div 
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </CardComponent>
        
        {/* Card back/depth effect */}
        {depth > 0 && (
          <div
            className="absolute inset-0 rounded-xl backface-hidden"
            style={{
              backgroundColor: 'rgba(10, 10, 10, 1)',
              transform: `translateZ(-${depth}px)`,
              boxShadow: '0 0 20px 5px rgba(0, 0, 0, 0.3) inset',
            }}
          />
        )}
        
        {/* Card edges for 3D effect */}
        {depth > 0 && (
          <>
            <div
              className="absolute top-0 left-0 right-0 h-[1px] transform-origin-top backface-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: `rotateX(90deg) translateZ(${depth/2}px)`,
                height: `${depth}px`,
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[1px] transform-origin-bottom backface-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: `rotateX(-90deg) translateZ(${depth/2}px)`,
                height: `${depth}px`,
              }}
            />
            <div
              className="absolute top-0 bottom-0 left-0 w-[1px] transform-origin-left backface-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: `rotateY(-90deg) translateZ(${depth/2}px)`,
                width: `${depth}px`,
              }}
            />
            <div
              className="absolute top-0 bottom-0 right-0 w-[1px] transform-origin-right backface-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: `rotateY(90deg) translateZ(${depth/2}px)`,
                width: `${depth}px`,
              }}
            />
          </>
        )}
      </motion.div>
    </motion.div>
  );
};
