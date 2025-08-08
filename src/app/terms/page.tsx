import Container from '@/components/ui/Container'

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-neutral-700 mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <div className="prose prose-lg max-w-none">
            <h2>Services</h2>
            <p>
              SwipeScale provides theme page marketing services, including content creation, 
              posting, and community management across social media platforms.
            </p>
            
            <h2>Pricing and Payment</h2>
            <p>
              Services are billed at $3,000/month retainer plus $0.15 CPM on combined monthly reach. 
              Invoices are due within 7 days. Services are month-to-month with 30-day cancellation notice.
            </p>
            
            <h2>Service Delivery</h2>
            <p>
              We deliver 6 managed theme pages with approximately 180 posts per month. 
              Weekly reach reports and monthly CPM reconciliation are provided.
            </p>
            
            <h2>Limitations</h2>
            <p>
              We do not guarantee specific sales, signups, or conversion rates. Our metric is reach. 
              Results may vary based on industry, audience, and market conditions.
            </p>
            
            <h2>Contact</h2>
            <p>
              For questions about these terms, contact us at{' '}
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