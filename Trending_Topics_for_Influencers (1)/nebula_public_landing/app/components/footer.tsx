
'use client'

import { Heart, Zap, Users, Mail } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { platform: 'TikTok', url: '#', emoji: '🎵', color: 'from-pink-500 to-cyan-500' },
    { platform: 'YouTube', url: '#', emoji: '▶️', color: 'from-red-500 to-orange-500' },
    { platform: 'Instagram', url: '#', emoji: '📸', color: 'from-purple-500 to-pink-500' },
    { platform: 'Twitter', url: '#', emoji: '🐦', color: 'from-blue-500 to-cyan-500' }
  ]

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900/50 to-black py-16 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Studio Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-3 justify-center md:justify-start mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-2xl holographic">NEBULA VISIONS</span>
            </div>
            
            <p className="text-readable-gray font-semibold mb-6 max-w-sm text-base leading-relaxed">
              Where reality bends and impossible stories come to life. Join 54M+ fans experiencing the future of entertainment.
            </p>
            
            <div className="flex items-center justify-center md:justify-start space-x-4 text-base text-readable-gray">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span className="font-semibold">54M+ Fans</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="font-semibold">19.5% Engagement</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 neon-text text-cyan-400">Experience</h3>
            <div className="space-y-3">
              <FooterLink href="#" text="Watch Shows" />
              <FooterLink href="#" text="Fan Community" />
              <FooterLink href="#" text="Interactive Hub" />
            </div>
          </div>

          {/* Social & Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-6 neon-text text-purple-400">Connect</h3>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-end space-x-3 mb-6">
              {socialLinks.map((link) => (
                <SocialButton key={link.platform} {...link} />
              ))}
            </div>
            
            {/* Contact */}
            <div className="flex items-center justify-center md:justify-end space-x-2 text-base text-readable-gray">
              <Mail className="w-4 h-4" />
              <span className="font-semibold">hello@nebulavisions.com</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-base text-readable-gray">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold">&copy; 2025 Nebula Visions Studios. All realities reserved.</p>
          </div>
          
          <div className="flex items-center space-x-2 font-semibold">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>for the brave souls who dare to bend reality</span>
          </div>
        </div>

        {/* Floating Elements */}
        <FloatingElements />
      </div>
    </footer>
  )
}

function FooterLink({ href, text }: { href: string, text: string }) {
  return (
    <a
      href={href}
      className="block text-readable-gray hover:text-purple-400 font-semibold text-base"
    >
      {text}
    </a>
  )
}

function SocialButton({ platform, url, emoji, color }: {
  platform: string
  url: string
  emoji: string
  color: string
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const socialUrl = platform === 'TikTok' 
      ? 'https://www.tiktok.com/@nebulavisions'
      : platform === 'YouTube'
      ? 'https://www.youtube.com/@nebulavisions' 
      : platform === 'Instagram'
      ? 'https://www.instagram.com/nebulavisions'
      : 'https://twitter.com/nebulavisions'
    window.open(socialUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      className={`w-10 h-10 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white shadow-lg`}
      title={platform}
      onClick={handleClick}
    >
      <span className="text-sm">{emoji}</span>
    </button>
  )
}

function FloatingElements() {
  return (
    <>
      {/* Static particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
      
      {/* Static orbs */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute w-20 h-20 rounded-full opacity-10"
          style={{
            left: `${20 + i * 30}%`,
            top: `${Math.random() * 50}%`,
            background: `linear-gradient(45deg, ${
              i === 0 ? '#9945ff, #00d4ff' :
              i === 1 ? '#ff0080, #00ff88' : 
              '#ff6600, #4444ff'
            })`
          }}
        />
      ))}
    </>
  )
}
