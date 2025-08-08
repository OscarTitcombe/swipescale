'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StatCardProps {
  title: string
  value: string
  delta?: string
  className?: string
}

export default function StatCard({ title, value, delta, className = '' }: StatCardProps) {
  return (
    <motion.div
      className={`glass-card p-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="text-sm text-neutral-300 mb-1">{title}</div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      {delta && (
        <div className="text-xs text-accent font-medium">{delta}</div>
      )}
    </motion.div>
  )
} 