'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Card from '../ui/Card'

const steps = [
  {
    title: 'Fit check',
    description: 'We assess if theme page marketing aligns with your goals and audience.',
    icon: '🔍'
  },
  {
    title: 'Setup',
    description: 'We create and optimize your theme pages across relevant platforms.',
    icon: '⚙️'
  },
  {
    title: 'Operate',
    description: 'We handle daily posting, community management, and growth strategies.',
    icon: '🚀'
  },
  {
    title: 'Report',
    description: 'Weekly reach reports and monthly CPM reconciliation keep you informed.',
    icon: '📈'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-neutral-100">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            How it works
          </h2>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            A simple 4-step process to get your theme page marketing running.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="border" className="h-full text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-sm text-accent font-semibold mb-2">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-700">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
} 