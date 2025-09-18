
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, Target, Zap } from 'lucide-react'

export function GrowthProjections() {
  const monthlyProjections = [
    { month: "Month 1", views: "1.0M+", revenue: "$10K", engagement: "15.2%" },
    { month: "Month 2", views: "2.5M+", revenue: "$25K", engagement: "17.8%" },
    { month: "Month 3", views: "4.2M+", revenue: "$42K", engagement: "19.5%" },
    { month: "Month 4", views: "6.8M+", revenue: "$68K", engagement: "21.2%" },
    { month: "Month 5", views: "8.5M+", revenue: "$85K", engagement: "22.4%" },
    { month: "Month 6", views: "10.2M+", revenue: "$102K", engagement: "24.1%" }
  ]

  const revenueStreams = [
    {
      stream: "Direct Ad Revenue",
      current: "$540K",
      projected: "$1.2M",
      growth: "+122%",
      description: "Platform monetization at $0.01-0.02/view",
      color: "blue"
    },
    {
      stream: "Brand Partnerships",
      current: "$0",
      projected: "$2.1M",
      growth: "New",
      description: "Premium content sponsorship deals",
      color: "green"
    },
    {
      stream: "Content Licensing",
      current: "$0",
      projected: "$890K",
      growth: "New",
      description: "IP licensing to streaming platforms",
      color: "purple"
    },
    {
      stream: "Merchandise",
      current: "$0",
      projected: "$450K",
      growth: "New",
      description: "Show-branded merchandise sales",
      color: "orange"
    }
  ]

  return (
    <section className="space-y-8">
      <div className="text-center">
        <Badge className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100">
          Growth Projections
        </Badge>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          6-Month Revenue & Growth Forecast
        </h2>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Data-driven projections based on current performance metrics, industry benchmarks, 
          and strategic expansion plans. Conservative estimates show significant revenue potential 
          with multiple monetization streams coming online throughout 2025.
        </p>
      </div>

      {/* Monthly Growth Timeline */}
      <Card className="metric-card">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <CardTitle className="text-slate-900">Monthly Performance Trajectory</CardTitle>
          </div>
          <p className="text-slate-600 text-sm mt-2">
            Conservative growth projections based on current 28% monthly growth rate with viral content multipliers
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {monthlyProjections?.map?.((month, index) => (
              <div 
                key={month?.month || `month-${index}`}
                className="text-center p-4 bg-gradient-to-b from-green-50 to-emerald-50 border border-green-200 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="text-lg font-bold text-green-700 mb-1">{month?.views}</div>
                <div className="text-sm font-semibold text-green-900">{month?.month}</div>
                <div className="text-xs text-green-600 mt-1">{month?.revenue} revenue</div>
                <div className="text-xs text-green-600">{month?.engagement} engagement</div>
                <div className="mt-2 w-full bg-green-200 rounded-full h-1">
                  <div 
                    className="bg-green-500 h-1 rounded-full transition-all duration-1000" 
                    style={{ width: `${(index + 1) * 16.67}%` }}
                  ></div>
                </div>
              </div>
            )) || []}
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-700 mb-2">68%</div>
              <div className="text-sm font-semibold text-blue-900 mb-1">Projected Growth Rate</div>
              <div className="text-xs text-blue-600">Monthly compounded growth</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-700 mb-2">20%</div>
              <div className="text-sm font-semibold text-purple-900 mb-1">Viral Content Target</div>
              <div className="text-xs text-purple-600">Expected viral hit ratio</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-orange-50 to-orange-100 rounded-lg border border-orange-200">
              <div className="text-2xl font-bold text-orange-700 mb-2">$4.6M</div>
              <div className="text-sm font-semibold text-orange-900 mb-1">Total Revenue Potential</div>
              <div className="text-xs text-orange-600">6-month projection</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Stream Analysis */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 text-center">Revenue Stream Diversification</h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {revenueStreams?.map?.((stream, index) => (
            <Card key={stream?.stream || `stream-${index}`} className="metric-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 bg-${stream?.color}-100 rounded-lg flex items-center justify-center`}>
                      <DollarSign className={`w-4 h-4 text-${stream?.color}-600`} />
                    </div>
                    <CardTitle className="text-slate-900">{stream?.stream}</CardTitle>
                  </div>
                  <Badge 
                    className={
                      stream?.growth === "New" 
                        ? "bg-green-50 text-green-700 border-green-200"
                        : `bg-${stream?.color}-50 text-${stream?.color}-700 border-${stream?.color}-200`
                    }
                  >
                    {stream?.growth}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="corporate-text text-sm">{stream?.description}</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-lg font-bold text-slate-900 mb-1">{stream?.current}</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wide">Current</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-lg font-bold text-slate-900 mb-1">{stream?.projected}</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wide">6-Month Target</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )) || []}
        </div>
      </div>

      {/* Strategic Milestones */}
      <Card className="metric-card">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-purple-600" />
            </div>
            <CardTitle className="text-slate-900">Strategic Milestones & Risk Assessment</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Key Success Milestones
              </h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-semibold text-green-900">Q2 2025: Platform Diversification</div>
                  <div className="text-green-700">Expand to Instagram Reels and Snapchat Spotlight</div>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-semibold text-blue-900">Q3 2025: Brand Partnership Launch</div>
                  <div className="text-blue-700">Secure first major brand sponsorship deals</div>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="font-semibold text-purple-900">Q4 2025: IP Licensing</div>
                  <div className="text-purple-700">License content to streaming platforms</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                Risk Mitigation Strategies
              </h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="font-semibold text-amber-900">Platform Algorithm Changes</div>
                  <div className="text-amber-700">Multi-platform distribution reduces dependency risk</div>
                </div>
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="font-semibold text-red-900">Content Saturation</div>
                  <div className="text-red-700">Premium genre focus maintains differentiation</div>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="font-semibold text-gray-900">Economic Downturn</div>
                  <div className="text-gray-700">Diverse revenue streams provide stability</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
