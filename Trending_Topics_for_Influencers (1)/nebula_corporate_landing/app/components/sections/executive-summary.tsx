
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Award, Target, Zap } from 'lucide-react'

export function ExecutiveSummary() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
          Executive Summary
        </Badge>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Strategic Social Media Launch Results
        </h2>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Nebula Visions Studios has successfully executed its digital content strategy, 
          achieving remarkable performance metrics that demonstrate strong market validation 
          and exceptional growth potential in the short-form content ecosystem.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="metric-card">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <CardTitle className="text-slate-900">Market Performance</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="corporate-text">
              Our content portfolio achieved <strong>54+ million total views</strong> across 
              100 strategic content pieces, with an industry-leading <strong>19.54% engagement rate</strong> - 
              significantly outperforming industry averages of 12-15%.
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-50 p-3 rounded-lg">
                <div className="font-semibold text-slate-900">Views</div>
                <div className="text-slate-600">54,203,230</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg">
                <div className="font-semibold text-slate-900">Engagement</div>
                <div className="text-slate-600">19.54%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-purple-600" />
              </div>
              <CardTitle className="text-slate-900">Content Excellence</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="corporate-text">
              Strategic content diversification across four flagship shows delivered 
              exceptional results, with <strong>Vortex Renegades</strong> emerging as the 
              top performer and <strong>TikTok</strong> proving superior for engagement.
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-50 p-3 rounded-lg">
                <div className="font-semibold text-slate-900">Top Show</div>
                <div className="text-slate-600">Vortex Renegades</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg">
                <div className="font-semibold text-slate-900">Best Platform</div>
                <div className="text-slate-600">TikTok (24.2%)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-blue-600" />
              </div>
              <CardTitle className="text-slate-900">Strategic Positioning</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="corporate-text">
              Multi-genre content strategy successfully captures diverse audience segments, 
              with <strong>Horror content leading engagement</strong> at 50% of total portfolio 
              and demonstrating strong viral potential.
            </div>
            <div className="flex space-x-4 text-sm">
              <div className="bg-red-50 border border-red-200 p-3 rounded-lg flex-1">
                <div className="font-semibold text-red-900">Horror</div>
                <div className="text-red-700">27M+ views</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg flex-1">
                <div className="font-semibold text-blue-900">Action</div>
                <div className="text-blue-700">15.6M+ views</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-orange-600" />
              </div>
              <CardTitle className="text-slate-900">Growth Trajectory</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="corporate-text">
              Consistent performance growth with <strong>6.24% average conversion rate</strong> 
              indicates strong monetization potential and validates our content-to-commerce strategy.
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 p-4 rounded-lg">
              <div className="text-sm font-semibold text-orange-900 mb-1">Next 6 Months Projection</div>
              <div className="text-2xl font-bold text-orange-700">10.2M+ Views</div>
              <div className="text-xs text-orange-600 mt-1">20% from viral content strategy</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
