'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Card from '../ui/Card'

const benefits = [
  {
    title: 'Guaranteed Targeted Reach',
    description: 'We focus on specific niches where your audience actually hangs out. No spray-and-pray—just strategic reach.',
    icon: '🎯'
  },
  {
         title: 'Simple Pricing',
     description: 'From $1,000/month + $0.15 CPM. No hidden fees, no attribution headaches. Pay for reach, not promises.',
    icon: '💰'
  },
  {
    title: 'Hands-Off Execution',
    description: 'We handle everything: content creation, posting, community management. You focus on your business.',
    icon: '🤝'
  },
  {
    title: 'Predictable Reporting',
    description: 'Weekly reach reports and monthly CPM reconciliation. Clear metrics, no guesswork.',
    icon: '📊'
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-neutral-100">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Why SwipeScale?
          </h2>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            We've simplified theme page marketing to its core: targeted reach, transparent pricing, and hands-off execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="border" className="h-full text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-700">
                  {benefit.description}
                </p>
                {/* Accent dot */}
                <div className="w-2 h-2 bg-accent rounded-full mx-auto mt-4" />
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
} 