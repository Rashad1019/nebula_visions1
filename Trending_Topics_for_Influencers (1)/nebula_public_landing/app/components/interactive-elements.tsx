
'use client'

import { useState } from 'react'
import { Zap, Target, Atom, Ghost, Heart, Share2, Gamepad2, Trophy, Star } from 'lucide-react'

const shows = [
  { 
    id: 'eldritch', 
    name: 'Shadows of Eldritch Hollow', 
    color: 'from-green-500 to-emerald-600',
    icon: Ghost,
    tagline: 'Face your deepest fears'
  },
  { 
    id: 'crimson', 
    name: 'Crimson Echoes', 
    color: 'from-red-500 to-pink-600',
    icon: Heart,
    tagline: 'Your echoes remember everything'
  },
  { 
    id: 'quantum', 
    name: 'Quantum Exile', 
    color: 'from-blue-500 to-cyan-600',
    icon: Atom,
    tagline: 'Reality is just a suggestion'
  },
  { 
    id: 'vortex', 
    name: 'Vortex Renegades', 
    color: 'from-orange-500 to-yellow-600',
    icon: Target,
    tagline: 'Defy all dimensions'
  }
]

const achievements = [
  { id: 1, title: 'First Watch', description: 'Watched your first Nebula episode', icon: Star, unlocked: true },
  { id: 2, title: 'Binge Watcher', description: 'Watched 10 episodes in a day', icon: Trophy, unlocked: true },
  { id: 3, title: 'Community Creator', description: 'Shared fan content', icon: Heart, unlocked: false },
  { id: 4, title: 'Reality Bender', description: 'Unlocked all hidden content', icon: Zap, unlocked: false }
]

export default function InteractiveElements() {
  const [activeShow, setActiveShow] = useState('eldritch')
  const [points, setPoints] = useState(2847)
  const [level, setLevel] = useState(5)
  const [showAchievement, setShowAchievement] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-6">
            <span className="neon-text text-purple-400">INTERACTIVE</span>{' '}
            <span className="holographic">EXPERIENCE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just watch our shows—experience them. Interact, explore, and become part of the story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-purple-900/20 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-6 neon-text text-cyan-400">Choose Your Reality</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {shows.map((show) => {
                const IconComponent = show.icon
                const isActive = activeShow === show.id
                
                return (
                  <button
                    key={show.id}
                    className={`p-6 rounded-xl ${
                      isActive
                        ? `bg-gradient-to-r ${show.color} text-white shadow-lg scale-105`
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                    onClick={() => setActiveShow(show.id)}
                  >
                    <IconComponent className="w-8 h-8 mx-auto mb-3" />
                    <div className="text-sm font-semibold mb-1">{show.name.split(' ')[0]}</div>
                    <div className="text-xs opacity-80">{show.tagline}</div>
                  </button>
                )
              })}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-black/30">
              <div className="text-center">
                <div className="text-lg font-bold mb-2">
                  {shows.find(s => s.id === activeShow)?.name}
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  {shows.find(s => s.id === activeShow)?.tagline}
                </div>
                <button
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${shows.find(s => s.id === activeShow)?.color} text-white font-semibold`}
                  onClick={() => {
                    const showName = shows.find(s => s.id === activeShow)?.name
                    alert(`🎬 Welcome to ${showName}!\n\nYou're about to enter a world where reality bends. Are you ready to experience the impossible?`)
                  }}
                >
                  Experience Now
                </button>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-cyan-900/20 border border-cyan-500/30">
            <h3 className="text-2xl font-bold mb-6 neon-text text-purple-400">Your Journey</h3>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-3xl font-bold text-cyan-400">Level {level}</div>
                <div className="text-sm text-gray-400">{points.toLocaleString()} points</div>
              </div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Progress to Level {level + 1}</span>
                <span>70%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="h-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" style={{width: '70%'}} />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Achievements</h4>
              <div className="space-y-2">
                {achievements.slice(0, 3).map((achievement) => {
                  const IconComponent = achievement.icon
                  return (
                    <div
                      key={achievement.id}
                      className={`flex items-center space-x-3 p-2 rounded-lg ${
                        achievement.unlocked
                          ? 'bg-green-900/30 border border-green-500/30'
                          : 'bg-gray-800/30 border border-gray-700/30'
                      }`}
                    >
                      <IconComponent className={`w-5 h-5 ${
                        achievement.unlocked ? 'text-green-400' : 'text-gray-500'
                      }`} />
                      <div className="flex-1">
                        <div className={`text-sm font-medium ${
                          achievement.unlocked ? 'text-white' : 'text-gray-400'
                        }`}>
                          {achievement.title}
                        </div>
                        <div className="text-xs text-gray-500">{achievement.description}</div>
                      </div>
                      {achievement.unlocked && (
                        <div className="text-xs text-green-400 font-semibold">✓</div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "AR Horror Experience",
              description: "Use your camera to bring Eldritch creatures into your room",
              icon: Ghost,
              color: "from-green-500 to-emerald-600",
              action: "Launch AR"
            },
            {
              title: "Echo Memory Game",
              description: "Test your memory against Crimson Echoes' supernatural challenges",
              icon: Heart,
              color: "from-red-500 to-pink-600",
              action: "Play Now"
            },
            {
              title: "Quantum Puzzle",
              description: "Solve multiverse paradoxes and unlock hidden content",
              icon: Atom,
              color: "from-blue-500 to-cyan-600",
              action: "Enter Portal"
            },
            {
              title: "Stunt Simulator",
              description: "Master Vortex Renegades moves with motion controls",
              icon: Target,
              color: "from-orange-500 to-yellow-600",
              action: "Start Training"
            },
            {
              title: "Fan Art Generator",
              description: "Create and share your own Nebula-inspired content",
              icon: Star,
              color: "from-purple-500 to-pink-600",
              action: "Create Art"
            },
            {
              title: "Community Hub",
              description: "Connect with other fans and join exclusive events",
              icon: Trophy,
              color: "from-cyan-500 to-purple-600",
              action: "Join Community"
            }
          ].map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700 cursor-pointer"
                onClick={() => alert(`🎮 ${item.title} launching!\n\n${item.description}`)}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold mb-2 group-hover:text-purple-300">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 mb-4">{item.description}</p>
                
                <button className={`w-full py-2 rounded-lg bg-gradient-to-r ${item.color} text-white font-semibold text-sm`}>
                  {item.action}
                </button>
              </div>
            )
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 neon-text text-green-400">Mini Games</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Shadow Hunt', players: '12.4K', difficulty: 'Medium' },
              { name: 'Echo Match', players: '8.7K', difficulty: 'Hard' },
              { name: 'Quantum Jump', players: '15.2K', difficulty: 'Easy' },
              { name: 'Vortex Race', players: '9.8K', difficulty: 'Expert' }
            ].map((game) => (
              <div
                key={game.name}
                className="p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-green-900/20 border border-green-500/30 text-center"
              >
                <Gamepad2 className="w-8 h-8 mx-auto mb-3 text-green-400" />
                <div className="font-bold mb-1">{game.name}</div>
                <div className="text-sm text-gray-400 mb-2">{game.players} players</div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  game.difficulty === 'Easy' ? 'bg-green-600' :
                  game.difficulty === 'Medium' ? 'bg-yellow-600' :
                  game.difficulty === 'Hard' ? 'bg-orange-600' : 'bg-red-600'
                }`}>
                  {game.difficulty}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-pink-900/20 border border-pink-500/30">
          <h3 className="text-2xl font-bold mb-4 neon-text text-pink-400">Share Your Experience</h3>
          <p className="text-gray-400 mb-6">Join 45,782 fans sharing their Nebula moments</p>
          
          <div className="flex justify-center space-x-4">
            {[
              { platform: "TikTok", color: "from-pink-500 to-cyan-500", emoji: "🎵" },
              { platform: "YouTube", color: "from-red-500 to-orange-500", emoji: "▶️" },
              { platform: "Instagram", color: "from-purple-500 to-pink-500", emoji: "📸" },
              { platform: "Twitter", color: "from-blue-500 to-cyan-500", emoji: "🐦" }
            ].map((social) => (
              <button
                key={social.platform}
                className={`px-6 py-3 rounded-xl bg-gradient-to-r ${social.color} text-white font-semibold flex items-center space-x-2`}
                onClick={() => {
                  const url = social.platform === 'TikTok' 
                    ? 'https://www.tiktok.com/@nebulavisions'
                    : social.platform === 'YouTube'
                    ? 'https://www.youtube.com/@nebulavisions'
                    : social.platform === 'Instagram'
                    ? 'https://www.instagram.com/nebulavisions'
                    : 'https://twitter.com/nebulavisions'
                  window.open(url, '_blank', 'noopener,noreferrer')
                }}
              >
                <span className="text-lg">{social.emoji}</span>
                <span>{social.platform}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
