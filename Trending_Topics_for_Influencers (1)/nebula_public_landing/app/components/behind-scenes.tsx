
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, Users, Camera, Zap, Clock, Award, Film, Lightbulb, Heart, Share2 } from 'lucide-react'

const btsContent = [
  {
    id: 1,
    type: "Making Of",
    title: "Creating the Eldritch Horrors",
    description: "Go behind the scenes of our most terrifying creatures and see how practical effects meet cutting-edge CGI",
    image: "https://cdn.abacus.ai/images/1d55a557-bc1f-4c73-b3cc-a0f59d312602.png",
    duration: "12:34",
    category: "VFX Breakdown",
    show: "Shadows of Eldritch Hollow",
    views: "2.3M",
    likes: "187K"
  },
  {
    id: 2,
    type: "Director's Cut",
    title: "Echo Chamber Techniques",
    description: "Discover the revolutionary audio techniques that make Crimson Echoes' supernatural sounds so haunting",
    image: "https://cdn.abacus.ai/images/c3659d27-4c42-4a7e-96a0-13a5cb6eb432.png",
    duration: "8:17",
    category: "Sound Design",
    show: "Crimson Echoes",
    views: "1.8M",
    likes: "156K"
  }
]

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Creative Director",
    specialty: "Reality-bending narratives",
    avatar: "AC",
    quote: "We don't just tell stories; we shatter the boundaries between fiction and reality.",
    experience: "15+ years"
  },
  {
    name: "Maya Rodriguez",
    role: "VFX Supervisor", 
    specialty: "Eldritch horror design",
    avatar: "MR",
    quote: "Every nightmare needs to feel tangible, every shadow needs to have weight.",
    experience: "12+ years"
  }
]

const productionStats = [
  { label: "Episodes Produced", value: "48", icon: Film },
  { label: "VFX Shots Created", value: "12,847", icon: Zap },
  { label: "Hours of Footage", value: "2,156", icon: Clock },
  { label: "Awards Won", value: "23", icon: Award }
]

export default function BehindScenes() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['all', 'VFX Breakdown', 'Sound Design']
  const filteredContent = activeCategory === 'all' ? btsContent : btsContent.filter(item => item.category === activeCategory)

  return (
    <section className="py-20 bg-gradient-to-b from-black via-orange-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-6">
            <span className="neon-text text-orange-400">BEHIND THE</span>{' '}
            <span className="holographic">VISIONS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Pull back the curtain and witness the magic, madness, and mastery that brings impossible worlds to life.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category === 'all' ? 'All Content' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredContent.map((content) => (
              <div key={content.id} className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-orange-900/20 border border-orange-500/30">
                <div className="relative aspect-video">
                  <Image
                    src={content.image}
                    alt={content.title}
                    fill
                    className="object-cover group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-20 h-20 rounded-full bg-orange-600 flex items-center justify-center shadow-2xl">
                      <Play className="w-10 h-10 text-white fill-current ml-1" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {content.duration}
                    </div>
                  </div>

                  <div className="absolute top-4 left-4">
                    <div className="bg-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {content.category}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-orange-400 font-semibold">{content.type}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-400">{content.show}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 group-hover:text-orange-300">
                    {content.title}
                  </h4>
                  <p className="text-gray-300 mb-4">{content.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{content.views}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-red-400">
                        <Heart className="w-4 h-4" />
                        <span>{content.likes}</span>
                      </div>
                    </div>
                    <button className="text-orange-400 hover:text-orange-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 neon-text text-cyan-400">Meet the Visionaries</h3>
            <p className="text-gray-400">The masterminds behind the madness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-cyan-900/20 border border-cyan-500/30">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto">
                  {member.avatar}
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <div className="text-cyan-400 font-semibold mb-2">{member.role}</div>
                <div className="text-sm text-gray-400 mb-3">{member.specialty}</div>
                <blockquote className="text-sm italic text-gray-300 mb-3">"{member.quote}"</blockquote>
                <div className="text-xs text-orange-400 font-semibold">{member.experience}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {productionStats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-black/30 border border-gray-700">
                <IconComponent className="w-8 h-8 mx-auto mb-3 text-orange-400" />
                <div className="text-3xl font-bold mb-1 neon-text text-orange-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <h3 className="text-4xl font-bold mb-4 neon-text text-purple-400">Innovation Lab</h3>
          <p className="text-gray-400 mb-12">Cutting-edge technologies pushing the boundaries of entertainment</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Horror",
                description: "Machine learning algorithms that analyze viewer biometrics to craft personalized scares",
                icon: Lightbulb,
                color: "from-red-500 to-pink-500"
              },
              {
                title: "Quantum Rendering",
                description: "Revolutionary rendering engine that processes multiple realities simultaneously", 
                icon: Zap,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Dimensional Audio",
                description: "3D spatial audio that makes echoes and sounds feel like they're coming from parallel worlds",
                icon: Camera,
                color: "from-green-500 to-emerald-500"
              }
            ].map((innovation, index) => (
              <div key={innovation.title} className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-purple-900/20 border border-purple-500/30">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${innovation.color} flex items-center justify-center mx-auto mb-6`}>
                  <innovation.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">{innovation.title}</h4>
                <p className="text-gray-300">{innovation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
