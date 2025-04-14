// components/XHeartAnimation.tsx
"use client"

import { useState, useEffect } from 'react'

interface XHeartAnimationProps {
  size: 'mini' | 'small' | 'large'
  inverse?: boolean
}

export default function XHeartAnimation({ size, inverse = false }: XHeartAnimationProps) {
  const [animationState, setAnimationState] = useState<'x' | 'heart'>('x')
  const [isBeating, setIsBeating] = useState(false)

  // Size classes based on the size prop
  const sizeClasses = {
    mini: "w-8 h-8",
    small: "w-12 h-12",
    large: "w-64 h-64"
  }
  
  const baseColor = inverse ? "white" : "#16a34a" // green-600 in Tailwind
  const strokeWidth = size === 'large' ? 2 : 3

  // Animation cycle: X -> Heart -> Beating -> Heart -> X
  useEffect(() => {
    const cycleAnimation = () => {
      setTimeout(() => {
        setAnimationState('heart')
        
        setTimeout(() => {
          setIsBeating(true)
          
          setTimeout(() => {
            setIsBeating(false)
            
            setTimeout(() => {
              setAnimationState('x')
            }, 1000)
          }, 3000)
        }, 1000)
      }, 2000)
    }

    // Start the animation cycle
    cycleAnimation()
    
    // Set up interval for continuous animation
    const interval = setInterval(cycleAnimation, 8000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`${sizeClasses[size]} relative`}>
      <svg
        viewBox="0 0 100 100"
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          animationState === 'x' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* X Symbol */}
        <path
          d="M20,20 L80,80 M80,20 L20,80"
          stroke={baseColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      
      <svg
        viewBox="0 0 100 100"
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          animationState === 'heart' ? 'opacity-100' : 'opacity-0'
        } ${isBeating ? 'animate-pulse' : ''}`}
      >
        {/* Heart Symbol */}
        <path
          d="M50,30 C20,0 0,20 0,40 C0,60 20,80 50,95 C80,80 100,60 100,40 C100,20 80,0 50,30 Z"
          fill={baseColor}
          className={`transition-transform duration-300 ${isBeating ? 'scale-110' : ''}`}
        />
      </svg>
    </div>
  )
}