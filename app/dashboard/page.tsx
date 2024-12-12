'use client'

import { useState } from 'react'
import { Sidebar } from '../../components/SideBar'
import { ChatInterface } from '../../components/ChatInterface'
import { Forum } from '../../components/Forum'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<'chatbot' | 'forum'>('chatbot')

  return (
    <div className="flex h-screen bg-gradient-to-br from-bbb-yellow to-white">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            <div className="p-6 md:p-8">
              {activeSection === 'chatbot' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl md:text-3xl font-abril text-bbb-purple mb-4">
                    Interactive Chatbot
                  </h2>
                  <p className="text-bbb-black/80 mb-6 leading-relaxed max-w-3xl">
                    Welcome to our AI-powered chatbot! Start a conversation to get personalized mental health support and guidance. Our chatbot is available 24/7 to provide you with instant responses, coping strategies, and resources tailored to your needs.
                  </p>
                  <ChatInterface />
                </motion.div>
              )}
              {activeSection === 'forum' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl md:text-3xl font-abril text-bbb-purple mb-4">
                    Support Forum
                  </h2>
                  <p className="text-bbb-black/80 mb-6 leading-relaxed max-w-3xl">
                    Welcome to our support forum. This is a safe space to share your experiences, ask questions, and connect with others who understand what you are going through. Whether you are dealing with a brain injury, disability, or supporting someone who is, you will find a community of understanding and support here.
                  </p>
                  <Forum />
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

