'use client'

import { useEffect, useRef } from 'react'

interface SpotlightConfig {
  radius?: number
  brightness?: number
  color?: string
  smoothing?: number
}

const useSpotlightEffect = (config: SpotlightConfig = {}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Default configuration
    const {
      radius = 200,
      brightness = 0.15,
      color = '#ffffff',
      smoothing = 0.1
    } = config
    
    let mouseX = -1000
    let mouseY = -1000
    let currentX = -1000
    let currentY = -1000
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    // Handle touch movement for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX
        mouseY = e.touches[0].clientY
      }
    }
    
    // Hide cursor when it leaves the window
    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }
    
    // Animation loop
    const animate = () => {
      // Smooth transition to target position
      currentX += (mouseX - currentX) * smoothing
      currentY += (mouseY - currentY) * smoothing
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create radial gradient for spotlight effect
      if (currentX > -900 && currentY > -900) {
        const gradient = ctx.createRadialGradient(
          currentX, currentY, 0,
          currentX, currentY, radius
        )
        
        // Set gradient colors
        gradient.addColorStop(0, `${color}${Math.floor(brightness * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        
        // Draw spotlight
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      
      requestAnimationFrame(animate)
    }
    
    // Initialize
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    
    // Start animation
    const animationId = requestAnimationFrame(animate)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [config])
  
  return canvasRef
}

export default useSpotlightEffect
