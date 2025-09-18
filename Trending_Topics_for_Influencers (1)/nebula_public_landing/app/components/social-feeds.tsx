
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, MessageCircle, Share2, Play, TrendingUp, Eye, Zap } from 'lucide-react'

const tiktokPosts = [
  {
    id: "N025",
    show: "Crimson Echoes",
    type: "Echo Effect Challenge",
    views: 856204,
    likes: 174884,
    shares: 45907,
    comments: 31855,
    thumbnail: "https://cdn.abacus.ai/images/c5f6b59d-1476-4884-b636-558d78068300.png",
    engagement: 29.5
  },
  {
    id: "N079",
    show: "Crimson Echoes", 
    type: "Echo Effect Challenge",
    views: 954537,
    likes: 175437,
    shares: 59734,
    comments: 21383,
    thumbnail: "https://cdn.abacus.ai/images/369871cd-024a-419a-8229-7ae5a550f37f.png",
    engagement: 26.9
  },
  {
    id: "N048",
    show: "Vortex Renegades",
    type: "Stunt Breakdown", 
    views: 825794,
    likes: 126783,
    shares: 45592,
    comments: 15797,
    thumbnail: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/1707828069_3703112781.jpg",
    engagement: 22.8
  },
  {
    id: "N050",
    show: "Vortex Renegades",
    type: "Stunt Breakdown",
    views: 564418,
    likes: 97135,
    shares: 32621,
    comments: 14348,
    thumbnail: "https://play-lh.googleusercontent.com/proxy/ggsbgHBMIfsUZXH7ExxivMptUa1p3OC_ycABTljVtI5LtYI_vq_mHPa4cXix88wusg-axZpz_ia9sM0VabLlU-4UpQuki5w9BHzD9xt_uaBBJzK8R5C04ng=s1920-w1920-h1080",
    engagement: 25.5
  }
]

const youtubePosts = [
  {
    id: "N080",
    show: "Shadows of Eldritch Hollow",
    type: "Jump Scare Clip",
    views: 733429,
    likes: 82923,
    shares: 24542,
    comments: 15729,
    thumbnail: "https://cdn.abacus.ai/images/73d3f878-4418-4ce4-aa85-e346ca4adea4.png",
    engagement: 16.8
  },
  {
    id: "N074",
    show: "Shadows of Eldritch Hollow",
    type: "Jump Scare Clip",
    views: 569731,
    likes: 71722,
    shares: 24544,
    comments: 11968,
    thumbnail: "https://cdn.abacus.ai/images/63d75ac3-3a8e-4e1b-8aab-aaf6c967f8a9.png",
    engagement: 19.0
  },
  {
    id: "N031",
    show: "Quantum Exile",
    type: "Twist Teaser",
    views: 498047,
    likes: 50756,
    shares: 16439,
    comments: 7474,
    thumbnail: "https://cdn.abacus.ai/images/09f02f08-9ada-4435-8272-860f437a4533.png",
    engagement: 15.0
  },
  {
    id: "N095",
    show: "Quantum Exile", 
    type: "Twist Teaser",
    views: 504578,
    likes: 53146,
    shares: 18067,
    comments: 9296,
    thumbnail: "https://thumbs.dreamstime.com/b/silhouetted-figure-stands-facing-series-recursively-diminishing-circles-resembling-portal-rings-each-infused-luminescent-384994733.jpg",
    engagement: 16.0
  }
]

export default function SocialFeeds() {
  const [activeTab, setActiveTab] = useState('tiktok')

  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-6">
            <span className="neon-text text-cyan-400">VIRAL</span>{' '}
            <span className="holographic">CONTENT</span>
          </h2>
          <p className="text-xl text-readable-light font-semibold max-w-3xl mx-auto mb-8">
            Our most explosive content breaking the internet. Join millions experiencing the next evolution of entertainment.
          </p>

          {/* Platform Tabs */}
          <div className="flex justify-center space-x-4">
            <TabButton 
              active={activeTab === 'tiktok'} 
              onClick={() => setActiveTab('tiktok')}
              icon="🎵"
              label="TikTok"
              count="25.7M views"
            />
            <TabButton 
              active={activeTab === 'youtube'} 
              onClick={() => setActiveTab('youtube')}
              icon="▶️"
              label="YouTube Shorts"
              count="28.5M views"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div>
          {activeTab === 'tiktok' ? (
            <TikTokGrid posts={tiktokPosts} />
          ) : (
            <YouTubeGrid posts={youtubePosts} />
          )}
        </div>

        {/* Live Stats Ticker */}
        <LiveStatsTicker />
      </div>
    </section>
  )
}

function TabButton({ active, onClick, icon, label, count }: {
  active: boolean
  onClick: () => void
  icon: string
  label: string
  count: string
}) {
  return (
    <button
      className={`px-6 py-3 rounded-xl flex items-center space-x-3 ${
        active 
          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg' 
          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
      }`}
      onClick={onClick}
    >
      <span className="text-xl">{icon}</span>
      <div className="text-left">
        <div className="font-bold text-base">{label}</div>
        <div className="text-sm opacity-90 font-semibold">{count}</div>
      </div>
    </button>
  )
}

function TikTokGrid({ posts }: { posts: typeof tiktokPosts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {posts.map((post, index) => (
        <TikTokCard key={post.id} post={post} index={index} />
      ))}
    </div>
  )
}

function YouTubeGrid({ posts }: { posts: typeof youtubePosts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.map((post, index) => (
        <YouTubeCard key={post.id} post={post} index={index} />
      ))}
    </div>
  )
}

function TikTokCard({ post, index }: { post: typeof tiktokPosts[0], index: number }) {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-900/20 to-cyan-900/20 border border-pink-500/30">
        <Image
          src={post.thumbnail}
          alt={`${post.show} - ${post.type}`}
          fill
          className="object-cover group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-8 h-8 text-white fill-current ml-1" />
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm bg-pink-600 px-3 py-1 rounded-full font-bold">{post.show}</span>
            <Zap className="w-4 h-4 text-yellow-400" />
          </div>
          <p className="text-base font-bold mb-3 text-white">{post.type}</p>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span className="font-semibold">{(post.views / 1000).toFixed(0)}K</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="font-semibold">{(post.likes / 1000).toFixed(0)}K</span>
              </div>
            </div>
            <div className="text-cyan-400 font-bold text-base">
              {post.engagement.toFixed(1)}%
            </div>
          </div>
        </div>

        {/* TikTok Branding */}
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
            🎵
          </div>
        </div>
      </div>
    </div>
  )
}

function YouTubeCard({ post, index }: { post: typeof youtubePosts[0], index: number }) {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30">
        <Image
          src={post.thumbnail}
          alt={`${post.show} - ${post.type}`}
          fill
          className="object-cover group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-2xl">
            <Play className="w-10 h-10 text-white fill-current ml-1" />
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-base bg-red-600 px-4 py-2 rounded-full font-bold">{post.show}</span>
            <span className="text-sm text-readable-light font-semibold">{post.type}</span>
          </div>
          
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xl font-bold">{(post.views / 1000).toFixed(0)}K</div>
              <div className="text-sm text-readable-gray font-semibold">Views</div>
            </div>
            <div>
              <div className="text-xl font-bold text-red-400">{(post.likes / 1000).toFixed(0)}K</div>
              <div className="text-sm text-readable-gray font-semibold">Likes</div>
            </div>
            <div>
              <div className="text-xl font-bold text-blue-400">{(post.shares / 1000).toFixed(0)}K</div>
              <div className="text-sm text-readable-gray font-semibold">Shares</div>
            </div>
            <div>
              <div className="text-xl font-bold text-green-400">{post.engagement.toFixed(1)}%</div>
              <div className="text-sm text-readable-gray font-semibold">Engagement</div>
            </div>
          </div>
        </div>

        {/* YouTube Branding */}
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white font-bold">
            ▶️
          </div>
        </div>
      </div>
    </div>
  )
}

function LiveStatsTicker() {
  const currentStats = {
    views: 54203230,
    likes: 7586920,
    shares: 2393557,
    engagement: 19.54
  }

  return (
    <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-purple-900/30 border border-purple-500/30">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold neon-text text-purple-400 mb-2">LIVE STATS</h3>
        <p className="text-readable-gray font-semibold text-base">Performance across all platforms</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCounter 
          label="Total Views"
          value={currentStats.views}
          format="number"
          color="cyan"
          icon={Eye}
        />
        <StatCounter 
          label="Total Likes"
          value={currentStats.likes}
          format="number"
          color="red"
          icon={Heart}
        />
        <StatCounter 
          label="Total Shares"
          value={currentStats.shares}
          format="number"
          color="green"
          icon={Share2}
        />
        <StatCounter 
          label="Avg Engagement"
          value={currentStats.engagement}
          format="percentage"
          color="purple"
          icon={TrendingUp}
        />
      </div>
    </div>
  )
}

function StatCounter({ label, value, format, color, icon: Icon }: {
  label: string
  value: number
  format: 'number' | 'percentage'
  color: string
  icon: any
}) {
  const displayValue = format === 'number' 
    ? value.toLocaleString()
    : `${value.toFixed(2)}%`

  const colorClasses = {
    cyan: 'text-cyan-400',
    red: 'text-red-400',
    green: 'text-green-400',
    purple: 'text-purple-400'
  }

  return (
    <div className="text-center">
      <Icon className={`w-6 h-6 mx-auto mb-2 ${colorClasses[color as keyof typeof colorClasses]}`} />
      <div className="text-2xl font-bold mb-1">{displayValue}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  )
}
