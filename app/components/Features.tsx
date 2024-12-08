import { Brain, Book, Users } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-navy">Our Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain className="w-12 h-12 text-pink" />}
            title="Brain Injury Education"
            description="Learn about different types of brain injuries, their causes, and effects on daily life."
          />
          <FeatureCard
            icon={<Book className="w-12 h-12 text-pink" />}
            title="Resource Library"
            description="Access a comprehensive collection of articles, videos, and research on brain disabilities."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-pink" />}
            title="Community Support"
            description="Connect with others who understand your journey and share experiences."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-navy">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

