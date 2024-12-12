'use client'

import { useState } from 'react'
import { User, Heart, MessageCircle, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'

interface Post {
  id: number
  author: string
  content: string
  likes: number
  comments: number
  shares: number
  tags: string[]
}

export function Forum() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Jane Doe',
      content: 'Living with a traumatic brain injury has been challenging, but I have found that daily mindfulness exercises have really helped me manage my symptoms. Has anyone else tried this?',
      likes: 15,
      comments: 3,
      shares: 2,
      tags: ['TBI', 'Mindfulness', 'Coping Strategies']
    },
    {
      id: 2,
      author: 'John Smith',
      content: 'I am struggling with memory issues after my stroke. Does anyone have tips for improving cognitive function or tools they have found helpful?',
      likes: 8,
      comments: 5,
      shares: 1,
      tags: ['Stroke', 'Memory', 'Cognitive Function']
    },
    {
      id: 3,
      author: 'Emily Johnson',
      content: 'Just wanted to share a win - I was able to return to work part-time after my brain injury! It has been a long journey, but I am proud of how far I have come. Do not give up hope, everyone!',
      likes: 22,
      comments: 7,
      shares: 4,
      tags: ['Recovery', 'Work', 'Hope']
    }
  ])

  const [newPost, setNewPost] = useState('')
  const [newPostTags, setNewPostTags] = useState('')

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPost.trim()) {
      const post: Post = {
        id: posts.length + 1,
        author: 'You',
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0,
        tags: newPostTags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
      }
      setPosts([post, ...posts])
      setNewPost('')
      setNewPostTags('')
    }
  }

  return (
    <div className="space-y-6">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onSubmit={handlePostSubmit}
        className="bg-white rounded-2xl shadow-md p-6"
      >
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your experience or ask for support..."
          className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bbb-purple/20 resize-none"
          rows={3}
        />
        <input
          type="text"
          value={newPostTags}
          onChange={(e) => setNewPostTags(e.target.value)}
          placeholder="Add tags (comma-separated)"
          className="w-full mt-3 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bbb-purple/20"
        />
        <button
          type="submit"
          className="mt-3 px-6 py-2 bg-bbb-purple text-white rounded-xl hover:bg-bbb-purple/90 transition-colors duration-200"
        >
          Post
        </button>
      </motion.form>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-bbb-purple/10 flex items-center justify-center mr-4">
                <User className="w-6 h-6 text-bbb-purple" />
              </div>
              <span className="font-semibold text-lg">{post.author}</span>
            </div>
            <p className="mb-4 text-bbb-black/90 leading-relaxed">{post.content}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-bbb-yellow/30 text-bbb-purple px-3 py-1 rounded-full text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <button className="flex items-center hover:text-bbb-purple transition-colors duration-200">
                <Heart className="w-5 h-5 mr-1" />
                {post.likes}
              </button>
              <button className="flex items-center hover:text-bbb-purple transition-colors duration-200">
                <MessageCircle className="w-5 h-5 mr-1" />
                {post.comments}
              </button>
              <button className="flex items-center hover:text-bbb-purple transition-colors duration-200">
                <Share2 className="w-5 h-5 mr-1" />
                {post.shares}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

