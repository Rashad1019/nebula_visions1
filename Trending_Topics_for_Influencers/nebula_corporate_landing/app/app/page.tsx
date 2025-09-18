
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { 
  TrendingUp, 
  Target, 
  Users, 
  Eye, 
  Heart, 
  Share2, 
  MessageSquare,
  BarChart3,
  DollarSign,
  Zap,
  Award,
  Play,
  Building2,
  Calendar
} from 'lucide-react'
import { ExecutiveSummary } from '@/components/sections/executive-summary'
import { MarketOpportunity } from '@/components/sections/market-opportunity'
import { ContentStrategy } from '@/components/sections/content-strategy'
import { PerformanceMetrics } from '@/components/sections/performance-metrics'
import { GrowthProjections } from '@/components/sections/growth-projections'
import { InvestmentHighlights } from '@/components/sections/investment-highlights'
import { DataVisualization } from '@/components/sections/data-visualization'

export default function CorporateLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 corporate-gradient rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Nebula Visions Studios</h1>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Corporate Report</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Calendar className="w-4 h-4" />
              <span>Q1 2025 Social Media Launch</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="corporate-gradient text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            Investor Relations Update
          </Badge>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Social Media Launch<br />
            <span className="text-blue-200">Performance Report</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive analysis of Nebula Visions Studios' strategic entry into digital content distribution, 
            demonstrating exceptional market performance and growth potential across our flagship productions.
          </p>
          
          {/* Key Metrics Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">54M+</div>
              <div className="text-blue-200 text-sm uppercase tracking-wide">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">19.54%</div>
              <div className="text-blue-200 text-sm uppercase tracking-wide">Engagement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6.24%</div>
              <div className="text-blue-200 text-sm uppercase tracking-wide">Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100</div>
              <div className="text-blue-200 text-sm uppercase tracking-wide">Content Pieces</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Executive Summary */}
        <ExecutiveSummary />
        
        <div className="section-divider" />
        
        {/* Market Opportunity */}
        <MarketOpportunity />
        
        <div className="section-divider" />
        
        {/* Content Strategy */}
        <ContentStrategy />
        
        <div className="section-divider" />
        
        {/* Performance Metrics */}
        <PerformanceMetrics />
        
        <div className="section-divider" />
        
        {/* Data Visualization */}
        <DataVisualization />
        
        <div className="section-divider" />
        
        {/* Growth Projections */}
        <GrowthProjections />
        
        <div className="section-divider" />
        
        {/* Investment Highlights */}
        <InvestmentHighlights />
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 corporate-gradient rounded-lg flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">Nebula Visions Studios</span>
          </div>
          <p className="text-slate-400 text-sm">
            Cutting-edge television production house specializing in genre-bending narratives
          </p>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-xs text-slate-500">
              © 2025 Nebula Visions Studios. Confidential investor materials.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
