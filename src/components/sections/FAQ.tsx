'use client'

import { motion } from 'framer-motion'
import Container from '../ui/Container'
import FAQAccordion from '../ui/FAQAccordion'

const faqItems = [
  {
    question: 'Why CPM vs affiliate/lead?',
    answer: 'CPM is transparent and predictable. You pay for reach, not promises. No attribution headaches, no complex tracking—just clear metrics on how many people see your content. Typical TikTok ads cost $3.20–$10 CPM, while SwipeScale delivers comparable reach at just $0.15–$0.30 CPM plus a flat retainer — making it 20×–30× cheaper without sacrificing audience quality.'
  },
  {
    question: 'What counts as reach?',
    answer: 'We count unique impressions across all your theme pages. This includes organic reach from posts, stories, and any viral content that gets shared.'
  },
  {
    question: 'Which platforms?',
    answer: 'We are primarily TikTok-focused, optimising all content for maximum performance on that platform. TikTok delivers the best reach and CPM for our campaigns. Optionally, we can also post the same content to Instagram theme pages to expand reach further.'
  },
  {
    question: 'Content sources?',
    answer: 'We create original content tailored to each theme page. This includes curated posts, original graphics, and community engagement content.'
  },
  {
    question: 'Timeline to results?',
    answer: 'You\'ll see initial reach within 2-4 weeks. Full momentum typically builds over 60-90 days as we optimize content and grow the pages.'
  },
  {
    question: 'Can we scale beyond the initial page count?',
    answer: 'Yes, we can scale to additional pages or increase posting frequency. Pricing adjusts proportionally based on reach and content volume.'
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Everything you need to know about our theme page marketing service.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FAQAccordion items={faqItems} />
        </motion.div>
      </Container>
    </section>
  )
} 