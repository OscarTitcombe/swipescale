'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Card from '../ui/Card'

const offerItems = [
  '6 managed theme pages',
  '1 post per page per day (≈180 posts/month)',
  'Growth playbook: collabs, hooks, DM CTAs',
  'Weekly reach report; end-of-month CPM reconciliation',
  'No meetings required (optional monthly review)'
]

export default function Offer() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              What you get
            </h2>
            <p className="text-xl text-neutral-700 mb-8">
              A complete theme page marketing solution that scales with your business.
            </p>
            
            <div className="space-y-4">
              {offerItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-700">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-8 p-4 bg-neutral-100 rounded-lg border-l-4 border-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-neutral-600 italic">
                No guarantees of sales/signups—our metric is reach.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card variant="glass" className="bg-gradient-to-br from-primary to-primary-600 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Monthly Deliverables</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span>Theme Pages</span>
                    <span className="font-semibold">6</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Posts per Month</span>
                    <span className="font-semibold">~180</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly Reports</span>
                    <span className="font-semibold">4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Strategy Calls</span>
                    <span className="font-semibold">Optional</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
} 