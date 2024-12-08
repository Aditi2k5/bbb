'use client'

import { useState, FormEvent } from 'react'
import { Send } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Welcome to Beyond Broken Brains. How can I assist you today?' }
  ])
  const [input, setInput] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      setTimeout(() => {
        setMessages(msgs => [...msgs, { role: 'system', content: `You said: ${input}` }])
      }, 1000)
      setInput('')
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-navy to-navy-dark">
      <header className="bg-pink text-navy py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-2xl font-bold">
            Beyond Broken Brains
          </Link>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 overflow-auto">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-pink">Chatbot Dashboard</h1>
          <div className="space-y-4 mb-4">
            {messages.map((message, index) => (
              <div key={index} className={`p-3 rounded-lg ${message.role === 'user' ? 'bg-pink text-navy ml-auto' : 'bg-navy text-white'} max-w-[80%]`}>
                {message.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink bg-white bg-opacity-20 text-white placeholder-gray-300"
            />
            <button type="submit" className="bg-pink text-navy p-2 rounded-r-lg hover:bg-opacity-90">
              <Send />
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

