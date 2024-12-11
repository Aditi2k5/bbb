'use client'

import { useState } from 'react'
import { Sidebar } from '../../components/SideBar'
import { ChatInterface } from '../../components/ChatInterface'
import { BrainModel } from '../../components/BrainModel'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<'chatbot' | 'brain-model'>('chatbot')

  return (
    <div className="flex h-screen bg-gradient-to-br from-bbb-yellow to-white">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
            {activeSection === 'chatbot' ? (
              <div className="p-8">
                <h2 className="text-3xl font-abril text-bbb-purple mb-4">
                  Interactive Chatbot
                </h2>
                <p className="text-bbb-black/80 mb-6 leading-relaxed max-w-3xl">
                  Welcome to our AI-powered chatbot! Start a conversation to clarify doubts you may have regarding the functional uunit of the human body, know more about the brain injuries and disabilities.
                </p>
                <ChatInterface />
              </div>
            ) : (
              <div className="p-8">
                <h2 className="text-3xl font-abril text-bbb-purple mb-4">
                  3D Brain Model
                </h2>
                <p className="text-bbb-black/80 mb-6 leading-relaxed max-w-3xl">
                  Explore the human brain in stunning 3D detail. Click and drag to rotate the model and learn about different brain regions and their functions.
                </p>
                <div className="w-full h-[600px] bg-white rounded-xl shadow-inner">
                  <BrainModel isAnimating={true} />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  )
}

