'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, MessageSquare, Users } from 'lucide-react'

interface SidebarProps {
  activeSection: 'chatbot' | 'brain-model' | 'forum'
  setActiveSection: (section: 'chatbot' | 'brain-model' | 'forum') => void
  isSidebarOpen: boolean
  setIsSidebarOpen: (isOpen: boolean) => void
}

export function Sidebar({ activeSection, setActiveSection, isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-white/90 backdrop-blur-md border-r border-white/20 shadow-xl"
    >
      <div className="p-6 border-b border-white/20">
        <h2 className="text-2xl font-abril text-bbb-purple">BBB Portal</h2>
      </div>
      <nav className="p-4 space-y-2">
        <Link 
          href="/" 
          className="flex items-center px-4 py-3 text-bbb-black/80 hover:text-bbb-purple rounded-xl hover:bg-bbb-yellow/30 transition-all duration-200 group"
        >
          <Home className="w-5 h-5 mr-3 transition-transform duration-200 group-hover:scale-110" />
          <span>Home</span>
        </Link>
        {['chatbot','forum'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section as 'chatbot' |  'forum')}
            className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 w-full ${
              activeSection === section 
                ? 'bg-bbb-yellow/50 text-bbb-purple font-semibold' 
                : 'text-bbb-black/80 hover:text-bbb-purple hover:bg-bbb-yellow/30'
            } group`}
          >
            {section === 'chatbot' && <MessageSquare className="w-5 h-5 mr-3 transition-transform duration-200 group-hover:scale-110" />}
            {section === 'forum' && <Users className="w-5 h-5 mr-3 transition-transform duration-200 group-hover:scale-110" />}
            <span className="capitalize">{section.replace('-', ' ')}</span>
          </button>
        ))}
      </nav>
    </motion.div>
  )
}

