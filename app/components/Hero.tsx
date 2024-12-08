import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-pink">
          We are not Broken,<br />We are beyond
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-white">
          Beyond Broken Brains
        </h2>
        <Link 
          href="/dashboard" 
          className="bg-pink text-navy px-10 py-4 rounded-full text-xl font-semibold hover:bg-opacity-90 transition-colors inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}

