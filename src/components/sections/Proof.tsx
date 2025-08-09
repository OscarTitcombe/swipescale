'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Card from '../ui/Card'

export default function Proof() {
  const stats = [
    { label: "Views Generated", value: "20M+ in under 3 months" },
    { label: "Users Acquired", value: "16,000+" },
    { label: "Average CPM", value: "$0.15–$0.30" },
    { label: "Cost Advantage", value: "Up to 30× cheaper vs. TikTok ads" },
  ]

  return (
    <section id="proof" className="py-20 bg-white">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Proof of Concept
          </h2>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Theme page marketing that drives massive reach at a fraction of the cost of TikTok ads.
          </p>
        </motion.div>

        {/* Stat Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="border" className="h-full text-center">
                <div className="text-neutral-600 text-sm mb-2">{stat.label}</div>
                <div className="text-2xl font-bold text-accent">{stat.value}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Study Card */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card variant="border" className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                FragranceFinder.ai — Case Study
              </h3>
            </div>
            
            <ul className="space-y-3 text-neutral-700 mb-6">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>20M+ targeted views via niche theme pages (≤90 days)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>16,000+ users acquired from theme pages</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>CPM held between $0.15 and $0.30 (TikTok avg: $3.20–$10)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span>Consistently generated highly targeted views at ultra-low CPM.</span>
              </li>
            </ul>
            
            <p className="text-sm text-neutral-500 italic text-center">
              Representative results. CPM varies by niche and content.
            </p>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
} 