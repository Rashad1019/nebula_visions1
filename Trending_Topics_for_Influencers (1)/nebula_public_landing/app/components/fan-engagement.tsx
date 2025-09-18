
'use client'

import { useState } from 'react'
import { MessageSquare, Heart, Users, Share2, Trophy, Star, Crown, Flame, Camera } from 'lucide-react'

const fanPosts = [
  {
    id: 1,
    user: "@ShadowSeeker2024",
    content: "That jump scare in Eldritch Hollow literally made me throw my phone 😱 #NebulaVisions is changing the game!",
    likes: 15420,
    replies: 892,
    show: "Shadows of Eldritch Hollow",
    verified: true,
    engagement: "Creator Response ✨"
  },
  {
    id: 2,
    user: "@CrimsonFanatic",
    content: "The echo effect in Crimson Echoes hits different when you're home alone at 3am... WHO APPROVED THIS?! 🔥",
    likes: 23891,
    replies: 1456,
    show: "Crimson Echoes",
    verified: false,
    engagement: "Trending #1"
  },
  {
    id: 3,
    user: "@QuantumTheory",
    content: "Mind = BLOWN 🤯 The multiverse theory in Quantum Exile is actually scientifically accurate! As a physics student, I'm obsessed",
    likes: 8734,
    replies: 445,
    show: "Quantum Exile",
    verified: true,
    engagement: "Expert Review"
  },
  {
    id: 4,
    user: "@VortexWarrior",
    content: "Just tried recreating that Vortex Renegades stunt... my parents are NOT happy about the broken vase 😅 #WorthIt",
    likes: 31245,
    replies: 2103,
    show: "Vortex Renegades",
    verified: false,
    engagement: "Viral Alert 🚨"
  }
]

const challenges = [
  {
    id: 1,
    name: "Eldritch Shadow Challenge",
    description: "Recreate the creepiest shadow you can find",
    participants: 45780,
    hashtag: "#EldritchShadows",
    prize: "Featured in next episode",
    difficulty: "Medium",
    show: "Shadows of Eldritch Hollow"
  },
  {
    id: 2,
    name: "Echo Memory Challenge", 
    description: "Share your most haunting memory using echo effects",
    participants: 67320,
    hashtag: "#CrimsonMemories",
    prize: "$1000 + Show cameo",
    difficulty: "Hard",
    show: "Crimson Echoes"
  },
  {
    id: 3,
    name: "Quantum Split Challenge",
    description: "Show yourself in multiple realities",
    participants: 23456,
    hashtag: "#QuantumSplit",
    prize: "Behind-the-scenes visit",
    difficulty: "Expert",
    show: "Quantum Exile"
  },
  {
    id: 4,
    name: "Vortex Stunt Challenge",
    description: "Safest most creative stunt recreation",
    participants: 89123,
    hashtag: "#VortexStunts",
    prize: "Stunt coordinator meeting",
    difficulty: "Easy",
    show: "Vortex Renegades"
  }
]

export default function FanEngagement() {
  const [activeTab, setActiveTab] = useState('community')

  return (
    <section className="py-20 bg-gradient-to-b from-black via-cyan-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-6">
            <span className="neon-text text-pink-400">FAN</span>{' '}
            <span className="holographic">UNIVERSE</span>
          </h2>
          <p className="text-xl text-readable-light font-semibold max-w-3xl mx-auto mb-8">
            Join a community of creators, dreamers, and reality-benders. Your creativity shapes our universe.
          </p>

          <div className="flex justify-center space-x-4">
            <button
              className={`px-6 py-3 rounded-xl flex items-center space-x-3 ${
                activeTab === 'community' 
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
              onClick={() => setActiveTab('community')}
            >
              <Users className="w-5 h-5" />
              <span className="font-bold text-base">Community</span>
            </button>
            <button
              className={`px-6 py-3 rounded-xl flex items-center space-x-3 ${
                activeTab === 'challenges' 
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
              onClick={() => setActiveTab('challenges')}
            >
              <Trophy className="w-5 h-5" />
              <span className="font-bold text-base">Challenges</span>
            </button>
            <button
              className={`px-6 py-3 rounded-xl flex items-center space-x-3 ${
                activeTab === 'create' 
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
              onClick={() => setActiveTab('create')}
            >
              <Camera className="w-5 h-5" />
              <span className="font-bold text-base">Create</span>
            </button>
          </div>
        </div>

        <div>
          {activeTab === 'community' && (
            <div className="space-y-6">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 neon-text text-cyan-400">Latest from the Community</h3>
                <p className="text-readable-gray font-semibold text-base">Real fans, real reactions, real impact</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fanPosts.map((post) => (
                  <div key={post.id} className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl p-6 border border-purple-500/30">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-cyan-500">
                        <div className="absolute inset-1 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-xs font-bold">
                            {post.user.slice(1, 3).toUpperCase()}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-bold text-base">{post.user}</span>
                          {post.verified && <Star className="w-4 h-4 text-yellow-400 fill-current" />}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm bg-purple-600 px-3 py-1 rounded-full font-bold">{post.show}</span>
                          <span className="text-sm text-readable-gray font-semibold">{post.engagement}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-readable-light mb-4 font-medium text-base leading-relaxed">{post.content}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button 
                          className="flex items-center space-x-2 text-red-400 hover:text-red-300"
                          onClick={() => {
                            // Simulate like action with visual feedback
                            alert(`Liked ${post.user}'s post about ${post.show}!`);
                          }}
                        >
                          <Heart className="w-4 h-4" />
                          <span className="text-sm font-semibold">{post.likes.toLocaleString()}</span>
                        </button>
                        <button 
                          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                          onClick={() => {
                            // Simulate reply action with visual feedback
                            alert(`Opening replies for ${post.user}'s ${post.show} post...`);
                          }}
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span className="text-sm font-semibold">{post.replies}</span>
                        </button>
                        <button 
                          className="flex items-center space-x-2 text-green-400 hover:text-green-300"
                          onClick={() => {
                            if (navigator.share) {
                              navigator.share({
                                title: `Check out this ${post.show} fan post!`,
                                text: post.content,
                                url: window.location.href
                              }).catch(() => {})
                            } else {
                              navigator.clipboard?.writeText(`${post.content} - ${window.location.href}`)
                              alert('Post content copied to clipboard!')
                            }
                          }}
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                      <Flame className="w-5 h-5 text-orange-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'challenges' && (
            <div className="space-y-6">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 neon-text text-purple-400">Active Challenges</h3>
                <p className="text-readable-gray font-semibold text-base">Show your creativity and win amazing prizes</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="bg-gradient-to-br from-gray-900/50 to-cyan-900/20 rounded-2xl p-6 border border-cyan-500/30">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-2">{challenge.name}</h4>
                        <div className={`text-xs px-3 py-1 rounded-full ${
                          challenge.difficulty === 'Easy' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          challenge.difficulty === 'Medium' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                          challenge.difficulty === 'Hard' ? 'bg-gradient-to-r from-orange-500 to-red-500' : 
                          'bg-gradient-to-r from-red-500 to-purple-500'
                        } text-white font-semibold inline-block`}>
                          {challenge.difficulty}
                        </div>
                      </div>
                      <Trophy className="w-6 h-6 text-yellow-400" />
                    </div>
                    
                    <p className="text-gray-300 mb-4">{challenge.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Participants</span>
                        <span className="font-semibold text-cyan-400">{challenge.participants.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Hashtag</span>
                        <span className="font-semibold text-purple-400">{challenge.hashtag}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Prize</span>
                        <span className="font-semibold text-green-400">{challenge.prize}</span>
                      </div>
                    </div>
                    
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold">
                      Join Challenge
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'create' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 neon-text text-green-400">Create with Us</h3>
                <p className="text-gray-400">Ready to bend reality? Here's how to get started</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    step: 1,
                    title: "Choose Your Genre",
                    description: "Horror, Sci-Fi, or Action - pick your playground",
                    icon: Star,
                    color: "from-red-500 to-pink-500"
                  },
                  {
                    step: 2,
                    title: "Create Your Content",
                    description: "Use our effects, your imagination, and push boundaries",
                    icon: Camera,
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    step: 3,
                    title: "Join the Universe",
                    description: "Tag us, get featured, become part of the story",
                    icon: Crown,
                    color: "from-purple-500 to-pink-500"
                  }
                ].map((item) => {
                  const IconComponent = item.icon
                  return (
                    <div key={item.step} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold mb-2 text-gray-300">{item.step}</div>
                      <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  )
                })}
              </div>

              <div className="mt-12 text-center">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg">
                  Start Creating Now
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: "2.1M+", label: "Community Members", color: "text-blue-400" },
            { icon: Heart, value: "500K+", label: "Daily Interactions", color: "text-red-400" },
            { icon: Trophy, value: "12", label: "Active Challenges", color: "text-yellow-400" },
            { icon: Star, value: "98.7%", label: "Satisfaction Rate", color: "text-green-400" }
          ].map((stat) => {
            const IconComponent = stat.icon
            return (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-black/30 border border-gray-700">
                <IconComponent className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
