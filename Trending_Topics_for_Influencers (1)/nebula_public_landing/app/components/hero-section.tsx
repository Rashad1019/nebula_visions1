

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Play, TrendingUp, Eye, Heart } from 'lucide-react'

export default function HeroSection() {
  const [currentViews, setCurrentViews] = useState(54203230)
  const targetViews = 54203230

  return (
    <section className="relative h-screen overflow-hidden cyber-grid scanlines">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/50 to-black z-10" />
        <Image
          src="https://www.shutterstock.com/shutterstock/photos/1420501517/display_1500/stock-photo-future-cyberpunk-underground-neon-glowing-laser-blue-purple-lights-garage-tunnel-studio-asphalt-1420501517.jpg"
          alt="Nebula Visions Studio Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-6xl mx-auto">
          {/* Studio Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black font-['Orbitron'] mb-4">
              <span 
                className="glitch neon-text text-purple-400" 
                data-text="NEBULA"
                style={{ color: 'var(--neon-purple)' }}
              >
                NEBULA
              </span>
              <br />
              <span 
                className="holographic"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                VISIONS
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-300 font-bold tracking-wide">
              WHERE REALITY BENDS
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <StatCard icon={Eye} label="Total Views" value={currentViews.toLocaleString()} color="cyan" />
            <StatCard icon={Heart} label="Likes" value="7.6M+" color="pink" />
            <StatCard icon={TrendingUp} label="Engagement" value="19.54%" color="green" />
            <StatCard icon={Play} label="Shows" value="4" color="purple" />
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <CTAButton primary>
              <Play className="w-5 h-5 mr-2 fill-current" />
              Watch Now
            </CTAButton>
            <CTAButton>
              <TrendingUp className="w-5 h-5 mr-2" />
              Join 54M+ Fans
            </CTAButton>
          </div>

          {/* Floating Show Previews */}
          <FloatingPreviews />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-30" />
    </section>
  )
}

function StatCard({ icon: Icon, label, value, color }: {
  icon: any
  label: string
  value: string
  color: 'cyan' | 'pink' | 'green' | 'purple'
}) {
  const colorClasses = {
    cyan: 'text-cyan-400 border-cyan-400/30',
    pink: 'text-pink-400 border-pink-400/30',
    green: 'text-green-400 border-green-400/30',
    purple: 'text-purple-400 border-purple-400/30'
  }

  return (
    <div className={`bg-black/40 backdrop-blur-sm rounded-lg p-4 border ${colorClasses[color]} hover:bg-black/60`}>
      <Icon className={`w-6 h-6 mx-auto mb-2 ${colorClasses[color].split(' ')[0]}`} />
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-readable-gray font-semibold">{label}</div>
    </div>
  )
}

function CTAButton({ children, primary = false }: { children: React.ReactNode, primary?: boolean }) {
  const handleClick = () => {
    if (primary) {
      // Watch Now - scroll to shows
      document.querySelector('#shows')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Join fans - scroll to fan engagement
      document.querySelector('#fan-engagement')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      className={`px-8 py-4 rounded-full font-bold text-lg flex items-center ${
        primary
          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25'
          : 'bg-transparent border-2 border-white/30 text-white hover:border-purple-400 hover:text-purple-400 font-semibold'
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

function FloatingPreviews() {
  const previews = [
    {
      title: "Shadows of Eldritch Hollow",
      image: "https://cdn.abacus.ai/images/f03af8c2-5d09-4ce2-ad26-31ab39c0d663.png",
      position: { top: '20%', left: '10%' }
    },
    {
      title: "Crimson Echoes",
      image: "https://cdn.abacus.ai/images/c02e92cb-2e9e-48d7-8fe7-84b6b2b2c4e9.png",
      position: { top: '60%', right: '10%' }
    },
    {
      title: "Quantum Exile", 
      image: "https://imgcdn.stablediffusionweb.com/2025/8/15/28b2e960-d258-4699-8f53-5ca0ba59b750.jpg",
      position: { bottom: '20%', left: '15%' }
    }
  ]

  return (
    <>
      {previews.map((preview) => (
        <div
          key={preview.title}
          className="hidden lg:block absolute w-24 h-32 rounded-lg overflow-hidden shadow-xl opacity-30 hover:opacity-70"
          style={preview.position}
        >
          <div className="relative w-full h-full">
            <Image
              src={preview.image}
              alt={preview.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-1 left-1 right-1">
              <div className="text-xs font-bold text-white truncate">{preview.title}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
