import Container from '@/components/ui/Container'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-neutral-700 mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <div className="prose prose-lg max-w-none">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you fill out our contact form, 
              including your name, email address, company name, and reach goals.
            </p>
            
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries, provide our services, 
              and improve our website and services.
            </p>
            
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
            
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hello@swipescale.co" className="text-accent hover:underline">
                hello@swipescale.co
              </a>
            </p>
          </div>
        </div>
      </Container>
    </main>
  )
} 