'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

export default function BookPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <Container>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Book a Call
          </h1>
          <p className="text-xl text-neutral-700 mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss if theme page marketing is right for your business. 
            No sales pressure—just an honest assessment.
          </p>
          
          {/* Calendly placeholder */}
          <motion.div
            className="bg-neutral-100 rounded-lg p-12 border-2 border-dashed border-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              Calendly Integration
            </h3>
            <p className="text-neutral-600 mb-6">
              Embed your Calendly widget here to enable direct booking.
            </p>
            <div className="bg-white rounded-lg p-8 border">
              <p className="text-sm text-neutral-500">
                Calendly embed code would go here
              </p>
            </div>
          </motion.div>
          
          <div className="mt-12 text-sm text-neutral-600">
            <p>Call duration: 30 minutes</p>
            <p>No preparation required</p>
            <p>We&apos;ll assess fit and discuss next steps</p>
          </div>
        </motion.div>
      </Container>
    </main>
  )
} 