
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, Heart, Share2, Users, Zap, Ghost, Atom, Target } from 'lucide-react'

const shows = [
  {
    id: 1,
    title: "Shadows of Eldritch Hollow",
    genre: "Horror",
    tagline: "Ancient horrors lurk in everyday shadows",
    premise: "In a fog-shrouded town cursed by ancient rituals, residents uncover eldritch horrors lurking in everyday shadows.",
    platform: "YouTube Shorts",
    contentType: "Jump Scare Clips",
    heroImage: "https://cdn.abacus.ai/images/a6592c25-128f-4436-a992-a4a0d306923f.png",
    cardImage: "https://cdn.abacus.ai/images/f03af8c2-5d09-4ce2-ad26-31ab39c0d663.png",
    icon: Ghost,
    color: "from-green-500 to-emerald-600",
    accentColor: "green-400",
    stats: { views: "12.5M", engagement: "18.7%" }
  },
  {
    id: 2,
    title: "Crimson Echoes",
    genre: "Horror",
    tagline: "Echoes become vengeful spirits",
    premise: "A supernatural virus turns echoes into vengeful spirits that replay victims worst memories.",
    platform: "TikTok",
    contentType: "Echo Effect Challenges",
    heroImage: "https://cdn.abacus.ai/images/a399deeb-4517-4afe-9e01-1786b98fdd81.png",
    cardImage: "https://cdn.abacus.ai/images/c02e92cb-2e9e-48d7-8fe7-84b6b2b2c4e9.png",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    accentColor: "red-400",
    stats: { views: "18.2M", engagement: "26.8%" }
  },
  {
    id: 3,
    title: "Quantum Exile",
    genre: "Sci-Fi",
    tagline: "Battle alternate versions of yourself",
    premise: "In a multiverse where exiles jump between realities, a rogue scientist battles alternate versions of herself.",
    platform: "YouTube Shorts",
    contentType: "Twist Teasers",
    heroImage: "https://cdn.abacus.ai/images/7fdd01ed-6a19-4e6b-997e-a8735f5391c4.png",
    cardImage: "https://imgcdn.stablediffusionweb.com/2025/8/15/28b2e960-d258-4699-8f53-5ca0ba59b750.jpg",
    icon: Atom,
    color: "from-blue-500 to-cyan-600",
    accentColor: "blue-400",
    stats: { views: "11.4M", engagement: "14.8%" }
  },
  {
    id: 4,
    title: "Vortex Renegades",
    genre: "Action",
    tagline: "Elite operatives across dimensions",
    premise: "Elite operatives harness vortex tech to infiltrate criminal empires across dimensions.",
    platform: "TikTok",
    contentType: "Stunt Breakdowns",
    heroImage: "https://play-lh.googleusercontent.com/proxy/ggsbgHBMIfsUZXH7ExxivMptUa1p3OC_ycABTljVtI5LtYI_vq_mHPa4cXix88wusg-axZpz_ia9sM0VabLlU-4UpQuki5w9BHzD9xt_uaBBJzK8R5C04ng=s1920-w1920-h1080",
    cardImage: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/1707828069_3703112781.jpg",
    icon: Target,
    color: "from-orange-500 to-yellow-600",
    accentColor: "orange-400",
    stats: { views: "12.1M", engagement: "22.4%" }
  }
]

export default function ShowSpotlight() {
  const [activeShow, setActiveShow] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-6">
            <span className="holographic">FLAGSHIP</span>{' '}
            <span className="neon-text text-purple-400">SHOWS</span>
          </h2>
          <p className="text-xl text-readable-light font-semibold max-w-3xl mx-auto">
            Four genre-defining series pushing the boundaries of horror, sci-fi, and action across TikTok and YouTube Shorts
          </p>
        </div>

        {/* Featured Show Display */}
        <div className="mb-16">
          <FeaturedShow show={shows[activeShow]} />
        </div>

        {/* Show Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shows.map((show, index) => (
            <ShowCard 
              key={show.id} 
              show={show} 
              index={index}
              isActive={activeShow === index}
              onClick={() => setActiveShow(index)}
            />
          ))}
        </div>

        {/* Platform Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <PlatformCard 
            platform="TikTok"
            stats="25.7M views • 28.2% engagement"
            color="from-pink-500 to-cyan-500"
            shows={["Crimson Echoes", "Vortex Renegades"]}
          />
          <PlatformCard 
            platform="YouTube Shorts"
            stats="28.5M views • 16.4% engagement"
            color="from-red-500 to-orange-500"
            shows={["Shadows of Eldritch Hollow", "Quantum Exile"]}
          />
        </div>
      </div>
    </section>
  )
}

function FeaturedShow({ show }: { show: typeof shows[0] }) {
  const IconComponent = show.icon

  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 p-1">
      <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={show.heroImage}
            alt={show.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${show.color} flex items-center justify-center`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm bg-purple-600 px-3 py-1 rounded-full font-bold">{show.genre}</span>
                <span className="text-sm text-readable-light font-semibold">{show.platform}</span>
              </div>
              <div className="text-sm text-readable-gray font-semibold mt-1">{show.contentType}</div>
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-2 glitch" data-text={show.title}>
            {show.title}
          </h3>
          <p className={`text-lg mb-4 neon-text text-${show.accentColor} font-bold`}>
            {show.tagline}
          </p>
          <p className="text-readable-light mb-6 max-w-2xl font-medium text-lg">
            {show.premise}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{show.stats.views}</div>
                <div className="text-sm text-readable-gray font-semibold">Views</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{show.stats.engagement}</div>
                <div className="text-sm text-readable-gray font-semibold">Engagement</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <ActionButton icon={Play} primary />
              <ActionButton icon={Heart} />
              <ActionButton icon={Share2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ShowCard({ show, index, isActive, onClick }: {
  show: typeof shows[0]
  index: number
  isActive: boolean
  onClick: () => void
}) {
  const IconComponent = show.icon

  return (
    <div
      className={`cursor-pointer group relative rounded-xl overflow-hidden ${
        isActive ? 'ring-2 ring-purple-500 scale-105' : 'hover:scale-105'
      }`}
      onClick={onClick}
    >
      <div className="relative aspect-[3/4]">
        <Image
          src={show.cardImage}
          alt={show.title}
          fill
          className="object-cover group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${show.color} opacity-20 group-hover:opacity-30`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center space-x-2 mb-2">
          <IconComponent className={`w-4 h-4 text-${show.accentColor}`} />
          <span className="text-sm bg-black/60 px-3 py-1 rounded-full font-bold">{show.genre}</span>
        </div>
        <h4 className="font-bold text-white group-hover:text-purple-300 text-base">
          {show.title}
        </h4>
        <p className="text-sm text-readable-gray font-semibold mt-1">{show.contentType}</p>
      </div>
    </div>
  )
}

function ActionButton({ icon: Icon, primary = false }: { icon: any, primary?: boolean }) {
  return (
    <button
      className={`w-12 h-12 rounded-full flex items-center justify-center ${
        primary
          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
          : 'bg-black/50 text-white hover:bg-purple-600/50'
      }`}
    >
      <Icon className="w-5 h-5" />
    </button>
  )
}

function PlatformCard({ platform, stats, color, shows }: {
  platform: string
  stats: string
  color: string
  shows: string[]
}) {
  return (
    <div className={`relative rounded-xl p-6 bg-gradient-to-r ${color} bg-opacity-10 border border-gray-700`}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-2xl font-bold">{platform}</h4>
        <div className="text-3xl">{platform === 'TikTok' ? '🎵' : '▶️'}</div>
      </div>
      <p className="text-readable-light font-semibold mb-4 text-lg">{stats}</p>
      <div className="space-y-2">
        {shows.map(show => (
          <div key={show} className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`} />
            <span className="text-base text-readable-gray font-semibold">{show}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
