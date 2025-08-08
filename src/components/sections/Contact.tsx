'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Card from '../ui/Card'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reachGoal: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setShowSuccess(true)
        setFormData({ name: '', email: '', company: '', reachGoal: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-neutral-100">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            Let&apos;s discuss how theme page marketing can work for your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card variant="border" className="bg-white">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Get in touch
              </h3>
              
              {showSuccess ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✅</div>
                  <h4 className="text-xl font-semibold text-primary mb-2">
                    Message sent!
                  </h4>
                  <p className="text-neutral-600">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Monthly reach goal
                    </label>
                    <input
                      type="text"
                      value={formData.reachGoal}
                      onChange={(e) => setFormData({ ...formData, reachGoal: e.target.value })}
                      placeholder="e.g., 5M, 10M+"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Other ways to reach us
                </h3>
                <p className="text-neutral-700 mb-6">
                  Prefer to talk directly? We&apos;re here to help you understand if theme page marketing is right for your business.
                </p>
              </div>
              
              <div className="space-y-4">
                                <Button 
                  href="mailto:hello@swipescale.co" 
                  variant="ghost" 
                  size="lg"
                  className="w-full justify-center"
                >
                  hello@swipescale.co
                </Button>
                
                <Button
                  href="/book"
                  size="lg"
                  className="w-full justify-center"
                >
                  Book a Call
                </Button>
              </div>
              
              <div className="text-sm text-neutral-600">
                <p>Response time: Within 24 hours</p>
                <p>Call duration: 30 minutes</p>
                <p>No sales pressure—just honest assessment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
} 