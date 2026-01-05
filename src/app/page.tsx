import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Protocol from '@/components/Protocol'
import Token from '@/components/Token'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-checkerboard">
      <Navbar />
      <Hero />
      <Features />
      <Protocol />
      <Token />
      <Footer />
    </main>
  )
}
