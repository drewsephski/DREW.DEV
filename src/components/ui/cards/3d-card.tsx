"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  depth?: number;
  backgroundColor?: string;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export const ThreeDCard = ({
  children,
  className,
  containerClassName,
  depth = 20,
  backgroundColor = "rgba(23, 23, 23, 1)",
  as: Component = "div",
  href,
  target,
  rel,
  onClick,
  ...props
}: ThreeDCardProps & React.HTMLAttributes<HTMLDivElement>) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine the component to render
  const CardComponent = href ? "a" : Component;
  const cardProps = href ? { href, target, rel } : {};
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation based on mouse position
    // Limit rotation to a reasonable range
    const rotationFactor = 15;
    const newRotateX = -mouseY / (rect.height / 2) * rotationFactor;
    const newRotateY = mouseX / (rect.width / 2) * rotationFactor;
    
    setRotateX(newRotateX);
    setRotateY(newRotateY);
  };
  
  const resetRotation = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative perspective-[1000px] cursor-pointer",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetRotation}
      onClick={onClick}
      {...props}
    >
      <motion.div
        className="relative w-full h-full transform-style-3d transition-transform duration-200"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Main card face */}
        <CardComponent
          className={cn(
            "relative flex flex-col items-center justify-center rounded-xl p-8 backface-hidden",
            className
          )}
          style={{
            backgroundColor,
            boxShadow: isHovered 
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              : "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
            transform: "translateZ(0)",
          }}
          {...cardProps}
        >
          {children}
        </CardComponent>
        
        {/* Card back/depth effect */}
        <div
          className="absolute inset-0 rounded-xl backface-hidden"
          style={{
            backgroundColor: "rgba(10, 10, 10, 1)",
            transform: `translateZ(-${depth}px)`,
            boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.3) inset",
          }}
        />
        
        {/* Card edges */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] transform-origin-top backface-hidden"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transform: `rotateX(90deg) translateZ(${depth/2}px)`,
            height: `${depth}px`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px] transform-origin-bottom backface-hidden"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transform: `rotateX(-90deg) translateZ(${depth/2}px)`,
            height: `${depth}px`,
          }}
        />
        <div
          className="absolute top-0 bottom-0 left-0 w-[1px] transform-origin-left backface-hidden"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transform: `rotateY(-90deg) translateZ(${depth/2}px)`,
            width: `${depth}px`,
          }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 w-[1px] transform-origin-right backface-hidden"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transform: `rotateY(90deg) translateZ(${depth/2}px)`,
            width: `${depth}px`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};
