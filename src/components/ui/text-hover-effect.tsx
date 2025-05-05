"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration = 0,
  automatic = false,
  size = "7xl",
  fontWeight = "bold",
  strokeWidth = "0.3",
  fontFamily = "helvetica",
  colors = ["#eab308", "#ef4444", "#3b82f6", "#06b6d4", "#8b5cf6"],
  maskSize = "20%",
  className = "",
  strokeColor = "neutral-200",
  darkStrokeColor = "neutral-800",
  interactive = true,
  glowEffect = false,
  pulseEffect = false,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  size?: string;
  fontWeight?: string;
  strokeWidth?: string;
  fontFamily?: string;
  colors?: string[];
  maskSize?: string;
  className?: string;
  strokeColor?: string;
  darkStrokeColor?: string;
  interactive?: boolean;
  glowEffect?: boolean;
  pulseEffect?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(automatic);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [dimensions, setDimensions] = useState({ width: 300, height: 100 });

  // Handle automatic mode
  useEffect(() => {
    if (automatic) {
      const interval = setInterval(() => {
        setMaskPosition({
          cx: `${Math.random() * 100}%`,
          cy: `${Math.random() * 100}%`,
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [automatic]);

  // Handle cursor tracking
  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null && interactive) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor, interactive]);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const { width, height } = svgRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Calculate text dimensions for viewBox
  useEffect(() => {
    if (svgRef.current) {
      const textElement = svgRef.current.querySelector('text');
      if (textElement) {
        const bbox = textElement.getBBox();
        setDimensions({
          width: bbox.width + 40, // Add padding
          height: bbox.height + 20, // Add padding
        });
      }
    }
  }, [text]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={`select-none ${className}`}
    >
      <defs>
        <linearGradient
          id={`textGradient-${text}`}
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && colors.map((color, index) => (
            <stop 
              key={index} 
              offset={`${(index / (colors.length - 1)) * 100}%`} 
              stopColor={color} 
            />
          ))}
        </linearGradient>

        {glowEffect && (
          <filter id={`glow-${text}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        )}

        <motion.radialGradient
          id={`revealMask-${text}`}
          gradientUnits="userSpaceOnUse"
          r={maskSize}
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ 
            duration: duration, 
            ease: "easeOut",
            ...(pulseEffect && {
              r: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                from: maskSize,
                to: `${parseInt(maskSize) * 1.5}%`,
              }
            })
          }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id={`textMask-${text}`}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#revealMask-${text})`}
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth={strokeWidth}
        className={`fill-transparent stroke-${strokeColor} font-[${fontFamily}] text-${size} font-${fontWeight} dark:stroke-${darkStrokeColor}`}
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth={strokeWidth}
        className={`fill-transparent stroke-${strokeColor} font-[${fontFamily}] text-${size} font-${fontWeight} dark:stroke-${darkStrokeColor}`}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke={`url(#textGradient-${text})`}
        strokeWidth={strokeWidth}
        mask={`url(#textMask-${text})`}
        className={`fill-transparent font-[${fontFamily}] text-${size} font-${fontWeight}`}
        style={glowEffect ? { filter: `url(#glow-${text})` } : undefined}
      >
        {text}
      </text>
    </svg>
  );
};
