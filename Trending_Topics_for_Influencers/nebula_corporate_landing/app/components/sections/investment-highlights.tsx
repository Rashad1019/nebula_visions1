
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Zap, Target, TrendingUp, Shield, Star } from 'lucide-react'

export function InvestmentHighlights() {
  const investmentPoints = [
    {
      title: "Market-Leading Performance",
      metric: "19.54% Engagement Rate",
      description: "Outperforming industry average by 30%+ with consistent growth trajectory",
      impact: "Validates premium content strategy and audience demand",
      icon: Award,
      color: "blue"
    },
    {
      title: "Scalable Content Pipeline", 
      metric: "4 Flagship Shows",
      description: "Diversified portfolio across high-engagement genres with proven viral potential",
      impact: "Reduces risk while maximizing market opportunity",
      icon: Zap,
      color: "purple"
    },
    {
      title: "Strong Unit Economics",
      metric: "$0.01-0.02 Revenue/View",
      description: "Industry-standard monetization with multiple revenue stream expansion",
      impact: "Clear path to profitability with scaling benefits",
      icon: Target,
      color: "green"
    },
    {
      title: "Rapid Growth Trajectory",
      metric: "28% Monthly Growth",
      description: "Sustained growth rate with viral content multiplier effects",
      impact: "Projected $4.6M revenue potential in 6 months",
      icon: TrendingUp,
      color: "orange"
    }
  ]

  const competitiveAdvantages = [
    {
      advantage: "Premium Genre Focus",
      description: "Unique positioning in underserved horror/sci-fi/action content space",
      marketGap: "65% of short-form content is lifestyle/comedy",
      color: "red"
    },
    {
      advantage: "Multi-Platform Optimization",
      description: "Platform-specific content strategy maximizing engagement per channel",
      marketGap: "Most creators use one-size-fits-all approach",
      color: "blue"
    },
    {
      advantage: "IP Development Pipeline",
      description: "Content serves as proof-of-concept for full-length productions",
      marketGap: "Traditional studios lack short-form validation",
      color: "purple"
    },
    {
      advantage: "Data-Driven Strategy",
      description: "Advanced analytics driving content optimization and audience targeting",
      marketGap: "Most content creators rely on intuition over data",
      color: "green"
    }
  ]

  return (
    <section className="space-y-8">
      <div className="text-center">
        <Badge className="mb-4 bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100">
          Investment Highlights
        </Badge>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Strategic Investment Opportunity
        </h2>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Nebula Visions Studios represents a compelling investment opportunity in the rapidly 
          expanding short-form content market, with proven performance metrics, scalable business 
          model, and significant competitive advantages positioning for exceptional returns.
        </p>
      </div>

      {/* Key Investment Points */}
      <div className="grid lg:grid-cols-2 gap-8">
        {investmentPoints?.map?.((point, index) => {
          const IconComponent = point?.icon || Star
          return (
            <Card key={point?.title || `point-${index}`} className="metric-card">
              <CardHeader className="pb-3">
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 bg-${point?.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`w-5 h-5 text-${point?.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-slate-900 mb-1">{point?.title}</CardTitle>
                    <div className={`text-lg font-bold text-${point?.color}-600`}>{point?.metric}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="corporate-text text-sm">{point?.description}</div>
                <div className={`p-3 bg-${point?.color}-50 border border-${point?.color}-200 rounded-lg`}>
                  <div className={`text-sm font-semibold text-${point?.color}-900`}>Investment Impact</div>
                  <div className={`text-sm text-${point?.color}-700 mt-1`}>{point?.impact}</div>
                </div>
              </CardContent>
            </Card>
          )
        }) || []}
      </div>

      {/* Competitive Advantages */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 text-center">Sustainable Competitive Advantages</h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {competitiveAdvantages?.map?.((item, index) => (
            <Card key={item?.advantage || `advantage-${index}`} className="metric-card">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 bg-${item?.color}-100 rounded-lg flex items-center justify-center`}>
                    <Shield className={`w-4 h-4 text-${item?.color}-600`} />
                  </div>
                  <CardTitle className="text-slate-900">{item?.advantage}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="corporate-text text-sm">{item?.description}</div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="text-sm font-semibold text-slate-900">Market Opportunity</div>
                  <div className="text-sm text-slate-700 mt-1">{item?.marketGap}</div>
                </div>
              </CardContent>
            </Card>
          )) || []}
        </div>
      </div>

      {/* Financial Projections Summary */}
      <Card className="metric-card bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="text-slate-900 text-center text-xl">Investment Summary & Financial Outlook</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-white/80 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-700 mb-1">$4.6M</div>
              <div className="text-sm font-semibold text-blue-900">6-Month Revenue Target</div>
              <div className="text-xs text-blue-600 mt-1">Conservative projection</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-700 mb-1">68%</div>
              <div className="text-sm font-semibold text-green-900">Monthly Growth Rate</div>
              <div className="text-xs text-green-600 mt-1">Sustained trajectory</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-700 mb-1">4x</div>
              <div className="text-sm font-semibold text-purple-900">Revenue Multiplier</div>
              <div className="text-xs text-purple-600 mt-1">Multiple monetization</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg border border-orange-200">
              <div className="text-2xl font-bold text-orange-700 mb-1">$31.9B</div>
              <div className="text-sm font-semibold text-orange-900">TAM Opportunity</div>
              <div className="text-xs text-orange-600 mt-1">Global market size</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Key Success Factors</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Proven content-market fit with 19.54% engagement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Multi-platform distribution strategy reducing risk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-700">Scalable IP development with franchise potential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-slate-700">Data-driven optimization for sustained growth</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Investment Rationale</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <p>
                  Nebula Visions Studios is positioned at the intersection of multiple high-growth trends: 
                  short-form content consumption, premium genre entertainment, and creator economy monetization.
                </p>
                <p>
                  Our exceptional performance metrics validate market demand while our diversified 
                  content strategy and multiple revenue streams provide both growth potential and 
                  risk mitigation for investors.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
