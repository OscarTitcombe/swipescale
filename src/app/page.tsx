import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Benefits from '@/components/sections/Benefits'
import Offer from '@/components/sections/Offer'
import Pricing from '@/components/sections/Pricing'
import Proof from '@/components/sections/Proof'
import Creative from '@/components/sections/Creative'
import Process from '@/components/sections/Process'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />
      <Benefits />
      <Offer />
      <Pricing />
      <Proof />
      <Creative />
      <Process />
      <FAQ />
      <Contact />
      
      <Footer />
    </main>
  )
} 