'use client'
import { HTMLAttributes, useEffect, useState } from 'react'
import useSpotlightEffect from '@/hooks/use-spotlight'

// Define an interface for the spotlight configuration
interface SpotlightConfig {
  radius?: number
  brightness?: number
  color?: string
  smoothing?: number
}

// Combine props with potential HTML canvas attributes
interface SpotlightCursorProps extends HTMLAttributes<HTMLCanvasElement> {
  config?: SpotlightConfig
}

const SpotlightCursor = ({
  config = {},
  className,
  ...rest
}: SpotlightCursorProps) => {
  // Use client-side only rendering to avoid hydration issues
  const [isMounted, setIsMounted] = useState(false);

  // Provide default configuration if not specified
  const spotlightConfig = {
    radius: 200,
    brightness: 0.15,
    color: '#ffffff',
    smoothing: 0.1,
    ...config,
  }

  const canvasRef = useSpotlightEffect(spotlightConfig)

  // Only mount the component on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return null during server-side rendering
  if (!isMounted) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] w-full h-full ${className || ''}`}
      {...rest}
    />
  )
}

export default SpotlightCursor
