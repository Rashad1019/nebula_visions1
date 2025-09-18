
import HeroSection from '../components/hero-section'
import ShowSpotlight from '../components/show-spotlight'
import SocialFeeds from '../components/social-feeds'
import FanEngagement from '../components/fan-engagement'
import BehindScenes from '../components/behind-scenes'
import InteractiveElements from '../components/interactive-elements'
import StickyHeader from '../components/sticky-header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <StickyHeader />
      <HeroSection />
      <div id="shows">
        <ShowSpotlight />
      </div>
      <SocialFeeds />
      <div id="fan-engagement">
        <FanEngagement />
      </div>
      <BehindScenes />
      <div id="interactive">
        <InteractiveElements />
      </div>
      <Footer />
    </main>
  )
}
