import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-navy to-navy-dark">
      <Hero />
      <FeatureCards />
      <Footer />
    </main>
  )
}

