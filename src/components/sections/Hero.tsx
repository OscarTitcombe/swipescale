'use client'

import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import Container from '../ui/Container'
import Button from '../ui/Button'
import StatCard from '../ui/StatCard'

export default function Hero() {
  const valueBullets = [
         '$1,000/mo base + $400 per additional page',
     '+$0.15 CPM performance bonus (varies by niche)',
    'Zero attribution headaches—pay for reach',
    'Hands-off: we run the pages, you get attention'
  ]

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-600 to-primary-700 text-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Theme pages that{' '}
              <span className="gradient-text">print attention.</span>
            </h1>
            
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              We run niche theme pages that deliver targeted reach and leads—without the attribution circus.
            </p>

            {/* Value bullets */}
            <div className="space-y-3 mb-8">
              {valueBullets.map((bullet, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-neutral-200">{bullet}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/book" 
                size="lg"
                onClick={() => track('hero_book_call_clicked')}
              >
                Book a Call
              </Button>
              <Button 
                href="mailto:hello@swipescale.co" 
                variant="ghost" 
                size="lg"
                className="text-white border-white/20 hover:bg-white/10"
                onClick={() => track('hero_email_clicked')}
              >
                Email Us
              </Button>
            </div>
          </motion.div>

          {/* Analytics Mock */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Analytics Dashboard */}
            <div className="relative">
              <div className="text-sm text-neutral-400 mb-3">July</div>
              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  title="Total Views"
                  value="12.6M"
                  className="col-span-2"
                />
                <StatCard
                  title="Niche"
                  value="Perfume / Beauty"
                />
                <StatCard
                  title="Content Posted"
                  value="178"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full opacity-30" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
} 