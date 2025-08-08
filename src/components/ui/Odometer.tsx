'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface OdometerProps {
  value: number
  prefix?: string
  suffix?: string
  className?: string
  formatOptions?: Intl.NumberFormatOptions
}

export default function Odometer({ 
  value, 
  prefix = '', 
  suffix = '', 
  className = '',
  formatOptions = { 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }
}: OdometerProps) {
  const [displayValue, setDisplayValue] = useState(value)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (value !== displayValue) {
      setIsAnimating(true)
      setDisplayValue(value)
      const timer = setTimeout(() => setIsAnimating(false), 500)
      return () => clearTimeout(timer)
    }
  }, [value, displayValue])

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', formatOptions).format(num)
  }

  const formattedValue = formatNumber(displayValue)
  const characters = formattedValue.split('')

  return (
    <div className={`inline-flex items-center ${className}`}>
      {prefix && <span className="mr-1">{prefix}</span>}
      <div className="flex">
        {characters.map((char, index) => {
          const isDigit = /[0-9]/.test(char)
          
          if (!isDigit) {
            return (
              <span key={index} className="inline-block">
                {char}
              </span>
            )
          }

          const digit = parseInt(char)
          const digitHeight = 20 // Height of each digit
          const totalHeight = digitHeight * 10 // Total height for all digits

          return (
            <div key={index} className="relative overflow-hidden" style={{ height: digitHeight }}>
              <motion.div
                className="flex flex-col"
                animate={{ 
                  y: isAnimating ? -digit * digitHeight : -digit * digitHeight 
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.5
                }}
                style={{ height: totalHeight }}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center"
                    style={{ height: digitHeight }}
                  >
                    {i}
                  </div>
                ))}
              </motion.div>
            </div>
          )
        })}
      </div>
      {suffix && <span className="ml-1">{suffix}</span>}
    </div>
  )
} 