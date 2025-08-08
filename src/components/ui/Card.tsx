'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  variant?: 'glass' | 'border'
  className?: string
}

export default function Card({ children, variant = 'glass', className = '' }: CardProps) {
  const baseClasses = 'rounded-xl p-6 transition-all duration-200'
  
  const variantClasses = {
    glass: 'glass-card shadow-custom',
    border: 'bg-white border border-neutral-300 shadow-sm hover:shadow-md'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`
  
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
} 