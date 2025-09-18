
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Globe, Users, Smartphone, TrendingUp, BarChart3, Target } from 'lucide-react'

export function MarketOpportunity() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <Badge className="mb-4 bg-green-50 text-green-700 border-green-200 hover:bg-green-100">
          Market Opportunity
        </Badge>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Capturing the Short-Form Content Revolution
        </h2>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          The global short-form video market represents a $31.9 billion opportunity, 
          growing at 28% annually. Our strategic positioning in premium genre content 
          capitalizes on untapped market segments with exceptional revenue potential.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="metric-card">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-blue-600" />
              </div>
              <CardTitle className="text-slate-900">Global Market Size</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-3xl font-bold text-blue-600 mb-2">$31.9B</div>
            <div className="corporate-text">
              Total addressable market for short-form video content, with 
              <strong> 28% CAGR</strong> expected through 2027.
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">TikTok MAUs</span>
                <span className="font-semibold">1.7B+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">YouTube Shorts</span>
                <span className="font-semibold">2B+ monthly</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Instagram Reels</span>
                <span className="font-semibold">1.4B+ users</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-purple-600" />
              </div>
              <CardTitle className="text-slate-900">Audience Demographics</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="corporate-text">
              Our target demographics represent <strong>high-value, engaged audiences</strong> 
              with strong conversion potential and premium content appetite.
            </div>
            <div className="space-y-3">
              <div className="bg-slate-50 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-slate-900">Ages 18-34</span>
                  <span className="text-sm text-slate-600">68%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-[68%]"></div>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-slate-900">Premium Content Consumers</span>
                  <span className="text-sm text-slate-600">45%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-[45%]"></div>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-slate-900">High Engagement Rate</span>
                  <span className="text-sm text-slate-600">72%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-[72%]"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-green-600" />
              </div>
              <CardTitle className="text-slate-900">Competitive Advantage</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="corporate-text">
              Premium genre content represents an <strong>underserved niche</strong> 
              with significantly higher engagement rates and monetization potential.
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                <span className="font-semibold text-green-900">Our Engagement Rate</span>
                <span className="text-green-700 font-bold">19.54%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-semibold text-slate-700">Industry Average</span>
                <span className="text-slate-600">12-15%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <span className="font-semibold text-blue-900">Premium Content Gap</span>
                <span className="text-blue-700 font-bold">65%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Opportunity Breakdown */}
      <Card className="metric-card">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-yellow-600" />
            </div>
            <CardTitle className="text-slate-900">Revenue Opportunity Analysis</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-700 mb-2">$540K</div>
              <div className="text-sm font-semibold text-blue-900 mb-1">Direct Ad Revenue</div>
              <div className="text-xs text-blue-600">Based on $0.01/view at current performance</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-700 mb-2">$2.1M</div>
              <div className="text-sm font-semibold text-green-900 mb-1">Brand Partnership Potential</div>
              <div className="text-xs text-green-600">Premium content sponsorship opportunities</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-700 mb-2">$890K</div>
              <div className="text-sm font-semibold text-purple-900 mb-1">Merchandise & Licensing</div>
              <div className="text-xs text-purple-600">Content IP monetization across platforms</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
