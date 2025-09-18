

'use client'

import { useState, useEffect } from 'react'
import { Play, Heart, Share2, Users } from 'lucide-react'

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-lg border-b border-purple-500/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-black fill-current" />
            </div>
            <span className="font-bold text-xl holographic">NEBULA VISIONS</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <HeaderButton icon={Play} text="Shows" />
            <HeaderButton icon={Users} text="Community" />
            <HeaderButton icon={Heart} text="Fan Zone" />
            <HeaderButton icon={Share2} text="Share" />
          </nav>

          <div className="flex items-center space-x-3">
            <SocialButton platform="tiktok" />
            <SocialButton platform="youtube" />
          </div>
        </div>
      </div>
    </header>
  )
}

function HeaderButton({ icon: Icon, text }: { icon: any, text: string }) {
  const handleClick = () => {
    if (text === 'Shows') {
      document.querySelector('#shows')?.scrollIntoView({ behavior: 'smooth' })
    } else if (text === 'Community') {
      document.querySelector('#fan-engagement')?.scrollIntoView({ behavior: 'smooth' })
    } else if (text === 'Fan Zone') {
      document.querySelector('#interactive')?.scrollIntoView({ behavior: 'smooth' })
    } else if (text === 'Share') {
      if (navigator.share) {
        navigator.share({
          title: 'Nebula Visions Studios',
          text: 'Experience the future of entertainment - 54M+ fans can\'t be wrong!',
          url: window.location.href
        }).catch(() => {})
      } else {
        navigator.clipboard?.writeText(window.location.href)
      }
    }
  }

  return (
    <button
      className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-purple-600/30"
      onClick={handleClick}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-bold">{text}</span>
    </button>
  )
}

function SocialButton({ platform }: { platform: 'tiktok' | 'youtube' }) {
  const colors = platform === 'tiktok' 
    ? 'from-pink-500 to-cyan-500' 
    : 'from-red-500 to-orange-500'
  
  const handleClick = () => {
    const url = platform === 'tiktok' 
      ? 'https://www.tiktok.com/@nebulavisions'
      : 'https://www.youtube.com/@nebulavisions'
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  
  return (
    <button
      className={`w-10 h-10 rounded-full bg-gradient-to-r ${colors} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
      onClick={handleClick}
    >
      {platform === 'tiktok' ? '🎵' : '▶️'}
    </button>
  )
}
