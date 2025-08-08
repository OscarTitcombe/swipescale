'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Card from '../ui/Card'
import Chip from '../ui/Chip'

const caseStudies = [
  {
    title: 'Fintech Utility',
    description: '0 → 10M impressions in 60 days',
    note: '(representative)',
         stats: ['10M/mo reach', '6+ pages', '<$0.30 CPM']
   },
   {
     title: 'Creator Tool',
     description: '7 niche pages → steady lead flow',
     note: '(representative)',
     stats: ['10M/mo reach', '6+ pages', '<$0.30 CPM']
   },
   {
     title: 'Consumer App',
     description: '<$0.30 CPM vs paid social',
     note: '(representative)',
     stats: ['10M/mo reach', '6+ pages', '<$0.30 CPM']
  }
]

export default function Proof() {
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
            Proof of concept
          </h2>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Representative case studies showing the potential of theme page marketing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="border" className="h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {study.title}
                  </h3>
                  <p className="text-neutral-700 mb-1">{study.description}</p>
                  <p className="text-xs text-neutral-500 italic">{study.note}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {study.stats.map((stat, statIndex) => (
                    <Chip key={statIndex} size="sm" variant="neutral">
                      {stat}
                    </Chip>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">10M/mo</div>
              <div className="text-sm text-neutral-600">Average Reach</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">6+</div>
              <div className="text-sm text-neutral-600">Theme Pages</div>
            </div>
            <div>
                           <div className="text-3xl font-bold text-accent mb-2">&lt;$0.30</div>
             <div className="text-sm text-neutral-600">Average CPM</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
} 