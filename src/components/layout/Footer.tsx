'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-neutral-300">
              © {currentYear} SwipeScale
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <a
              href="/privacy"
              className="text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Terms
            </a>
            <a
              href="mailto:hello@swipescale.co"
              className="text-neutral-300 hover:text-white transition-colors duration-200"
            >
              hello@swipescale.co
            </a>
          </motion.div>
        </div>

        {/* Accent dot */}
        <motion.div
          className="w-2 h-2 bg-accent rounded-full mx-auto mt-8"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
      </div>
    </footer>
  )
} 