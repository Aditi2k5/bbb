'use client'

import Link from 'next/link'
import { Home, MessageSquare, Brain } from 'lucide-react'

interface SidebarProps {
  activeSection: 'chatbot' | 'brain-model'
  setActiveSection: (section: 'chatbot' | 'brain-model') => void
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  return (
    <div className="w-64 bg-white/80 backdrop-blur-sm border-r border-white/20 shadow-xl">
      <div className="p-6 border-b border-white/20">
        <h2 className="text-2xl font-edu-australia text-bbb-purple">BBB Portal</h2>
      </div>
      <nav className="p-4 space-y-2">
        <Link 
          href="/" 
          className="flex items-center px-4 py-3 text-bbb-black/80 hover:text-bbb-purple rounded-xl hover:bg-bbb-yellow/30 transition-all duration-200 group"
        >
          <Home className="w-5 h-5 mr-3 transition-transform duration-200 group-hover:scale-110" />
          <span>Home</span>
        </Link>
        <button
          onClick={() => setActiveSection('chatbot')}
          className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 w-full ${
            activeSection === 'chatbot' 
              ? 'bg-bbb-yellow/50 text-bbb-purple' 
              : 'text-bbb-black/80 hover:text-bbb-purple hover:bg-bbb-yellow/30'
          } group`}
        >
          <MessageSquare className="w-5 h-5 mr-3 transition-transform duration-200 group-hover:scale-110" />
          <span>Chatbot</span>
        </button>
        <button
          onClick={() => setActiveSection('brain-model')}
          className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 w-full ${
            activeSection === 'brain-model' 
              ? 'bg-bbb-yellow/50 text-bbb-purple' 
              : 'text-bbb-black/80 hover:text-bbb-purple hover:bg-bbb-yellow/30'
          } group`}
        >
        </button>
      </nav>
    </div>
  )
}

