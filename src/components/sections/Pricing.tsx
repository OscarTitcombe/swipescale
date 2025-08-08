'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Card from '../ui/Card'
import PricingCalculator from '../PricingCalculator'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-primary via-primary-600 to-primary-700">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            No hidden fees, no attribution headaches. Pay for reach, not promises.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card variant="border" className="text-center bg-gradient-to-r from-accent to-accent-600 text-white">
              <div className="mb-8">
                               <h3 className="text-3xl font-bold mb-2">$1,000/month base + $400 per additional page</h3>
               <p className="text-xl opacity-90">+$0.15 CPM on combined monthly reach (varies by niche)</p>
              </div>
              
              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex justify-between items-center">
                  <span>Month-to-month</span>
                  <span className="font-semibold">✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>7-day invoice terms</span>
                  <span className="font-semibold">✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>30-day cancellation</span>
                  <span className="font-semibold">✓</span>
                </div>
              </div>
              
              <p className="mt-6 text-sm opacity-80">
                Cheaper than in-house, zero management overhead.
              </p>
            </Card>
          </motion.div>

          {/* Interactive Pricing Calculator */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <PricingCalculator 
              defaultPages={6}
              defaultReach={10_000_000}
              defaultCPM={0.15}
              onChange={(values) => {
                console.log('Pricing updated:', values)
              }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
} 