import { ReactNode } from 'react'

interface ChipProps {
  children: ReactNode
  variant?: 'accent' | 'neutral'
  size?: 'sm' | 'md'
  className?: string
}

export default function Chip({ 
  children, 
  variant = 'neutral', 
  size = 'md', 
  className = '' 
}: ChipProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full'
  
  const variantClasses = {
    accent: 'bg-gradient-to-r from-accent to-accent-600 text-white',
    neutral: 'bg-neutral-200 text-neutral-700'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  return (
    <span className={classes}>
      {children}
    </span>
  )
} 