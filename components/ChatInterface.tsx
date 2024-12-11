'use client'

import { useState } from 'react'
import { Send, MessageSquare } from 'lucide-react'

export function ChatInterface() {
  const [message, setMessage] = useState('')

  return (
    <div className="bg-white rounded-xl shadow-inner min-h-[400px] flex flex-col">
      <div className="flex-1 p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-8 h-8 rounded-full bg-bbb-purple/10 flex items-center justify-center mt-1">
            <MessageSquare className="w-4 h-4 text-bbb-purple" />
          </div>
          <div className="bg-bbb-yellow/20 rounded-2xl rounded-tl-none p-4 max-w-md">
            <p className="text-bbb-black/80">Hello! How can I help you today? Feel free to ask any doubts you have about about the human brain or realted injuries and disabilities.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 p-4">
        <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-bbb-purple/30 focus:ring-2 focus:ring-bbb-purple/10 transition-all duration-200"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-bbb-purple text-white rounded-xl hover:bg-bbb-purple/90 transition-all duration-200 flex items-center gap-2"
          >
            Send
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  )
}

