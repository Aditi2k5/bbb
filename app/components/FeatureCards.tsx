import { Brain, Users } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCards() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FeatureCard
            icon={<Brain className="w-16 h-16 text-pink" />}
            title="Brain Injury Education"
            description="Learn about different types of brain injuries, their causes, and effects on daily life. Access comprehensive resources to understand and cope with brain-related challenges."
          />
          <FeatureCard
            icon={<Users className="w-16 h-16 text-pink" />}
            title="Community Support"
            description="Connect with others who understand your journey. Share experiences, find support, and build relationships within our caring community of individuals and families affected by brain injuries."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-white border-opacity-20">
      <div className="mb-6 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-center text-pink">{title}</h3>
      <p className="text-gray-200 text-center">{description}</p>
    </div>
  )
}

