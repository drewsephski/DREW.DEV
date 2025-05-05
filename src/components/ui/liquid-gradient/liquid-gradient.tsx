'use client';

import React, { useEffect, useRef } from 'react';

interface LiquidProps {
  isHovered: boolean;
  colors: Record<string, string>;
}

export const Liquid: React.FC<LiquidProps> = ({ isHovered, colors }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Gradient parameters
    let time = 0;
    const speed = isHovered ? 0.003 : 0.001;
    const colorKeys = Object.keys(colors);
    const colorValues = colorKeys.map(key => colors[key]);

    // Animation function
    const animate = () => {
      time += speed;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient
      const gradient = ctx.createLinearGradient(
        canvas.width * (0.5 + 0.5 * Math.sin(time * 0.7)), 
        canvas.width * (0.5 + 0.5 * Math.cos(time * 0.8)),
        canvas.width * (0.5 + 0.5 * Math.cos(time * 0.9)), 
        canvas.width * (0.5 + 0.5 * Math.sin(time))
      );
      
      // Add color stops
      colorValues.forEach((color, index) => {
        const offset = (index / (colorValues.length - 1) + time * 0.2) % 1;
        gradient.addColorStop(offset, color);
      });
      
      // Draw gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Continue animation
      requestIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, [isHovered, colors]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full mix-blend-overlay"
      style={{ opacity: 0.8 }}
    />
  );
};
