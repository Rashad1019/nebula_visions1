
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Eye, Heart, Share2, MessageSquare, TrendingUp, BarChart3 } from 'lucide-react'

export function PerformanceMetrics() {
  const platformMetrics = [
    {
      platform: "TikTok",
      posts: 50,
      views: "28.6M+",
      engagement: "24.2%",
      avgViews: "572K",
      topPost: "954K views",
      color: "purple"
    },
    {
      platform: "YouTube Shorts", 
      posts: 50,
      views: "25.6M+",
      engagement: "16.0%",
      avgViews: "512K",
      topPost: "733K views",
      color: "red"
    }
  ]

  const genrePerformance = [
    {
      genre: "Horror",
      posts: 45,
      views: "27.0M+",
      avgEngagement: "25.1%",
      conversionRate: "7.8%",
      color: "red"
    },
    {
      genre: "Action",
      posts: 25,
      views: "15.6M+", 
      avgEngagement: "22.8%",
      conversionRate: "6.9%",
      color: "green"
    },
    {
      genre: "Sci-Fi",
      posts: 30,
      views: "11.6M+",
      avgEngagement: "15.2%",
      conversionRate: "5.8%",
      color: "blue"
    }
  ]

  return (
    <section className="space-y-8">
      <div className="text-center">
        <Badge className="mb-4 bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100">
          Performance Metrics
        </Badge>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Comprehensive Analytics Dashboard
        </h2>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Detailed performance analysis across all content pillars, demonstrating exceptional 
          engagement rates, strong audience retention, and significant conversion potential 
          that validates our strategic approach to premium short-form content.
        </p>
      </div>

      {/* Top-Level Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="metric-card text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">54.2M+</div>
            <div className="text-sm text-slate-600 uppercase tracking-wide">Total Views</div>
          </CardContent>
        </Card>

        <Card className="metric-card text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">7.6M+</div>
            <div className="text-sm text-slate-600 uppercase tracking-wide">Total Likes</div>
          </CardContent>
        </Card>

        <Card className="metric-card text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Share2 className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">2.4M+</div>
            <div className="text-sm text-slate-600 uppercase tracking-wide">Total Shares</div>
          </CardContent>
        </Card>

        <Card className="metric-card text-center">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">1.1M+</div>
            <div className="text-sm text-slate-600 uppercase tracking-wide">Comments</div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Performance */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 text-center">Platform Performance Analysis</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {platformMetrics?.map?.((platform, index) => (
            <Card key={platform?.platform || `platform-${index}`} className="metric-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 bg-${platform?.color}-100 rounded-lg flex items-center justify-center`}>
                      <BarChart3 className={`w-4 h-4 text-${platform?.color}-600`} />
                    </div>
                    <CardTitle className="text-slate-900">{platform?.platform}</CardTitle>
                  </div>
                  <Badge className={`bg-${platform?.color}-50 text-${platform?.color}-700 border-${platform?.color}-200`}>
                    {platform?.posts} posts
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900 mb-1">{platform?.views}</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wide">Total Views</div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900 mb-1">{platform?.engagement}</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wide">Avg Engagement</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Average per post:</span>
                  <span className="font-semibold text-slate-900">{platform?.avgViews}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Top performing post:</span>
                  <span className="font-semibold text-slate-900">{platform?.topPost}</span>
                </div>
              </CardContent>
            </Card>
          )) || []}
        </div>
      </div>

      {/* Genre Performance */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 text-center">Genre Performance Breakdown</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {genrePerformance?.map?.((genre, index) => (
            <Card key={genre?.genre || `genre-${index}`} className="metric-card">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 bg-${genre?.color}-100 rounded-lg flex items-center justify-center`}>
                    <TrendingUp className={`w-4 h-4 text-${genre?.color}-600`} />
                  </div>
                  <CardTitle className="text-slate-900">{genre?.genre}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 mb-1">{genre?.views}</div>
                  <div className="text-sm text-slate-600">Total Views</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Posts:</span>
                    <span className="font-semibold text-slate-900">{genre?.posts}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Avg Engagement:</span>
                    <span className="font-semibold text-slate-900">{genre?.avgEngagement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Conversion Rate:</span>
                    <span className="font-semibold text-slate-900">{genre?.conversionRate}</span>
                  </div>
                </div>
                <div className={`mt-3 p-3 bg-${genre?.color}-50 border border-${genre?.color}-200 rounded-lg`}>
                  <div className={`text-xs font-semibold text-${genre?.color}-900 mb-1`}>Performance Rating</div>
                  <div className="w-full bg-white rounded-full h-2">
                    <div 
                      className={`bg-${genre?.color}-500 h-2 rounded-full`} 
                      style={{ width: genre?.genre === 'Horror' ? '92%' : genre?.genre === 'Action' ? '85%' : '78%' }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )) || []}
        </div>
      </div>

      {/* Key Performance Indicators */}
      <Card className="metric-card">
        <CardHeader>
          <CardTitle className="text-slate-900 text-center">Key Performance Indicators (KPIs)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="text-xl font-bold text-blue-700 mb-1">542K</div>
              <div className="text-sm font-semibold text-blue-900">Avg Views/Post</div>
              <div className="text-xs text-blue-600 mt-1">Industry: 180K</div>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-xl font-bold text-green-700 mb-1">19.54%</div>
              <div className="text-sm font-semibold text-green-900">Engagement Rate</div>
              <div className="text-xs text-green-600 mt-1">Industry: 12-15%</div>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="text-xl font-bold text-purple-700 mb-1">6.24%</div>
              <div className="text-sm font-semibold text-purple-900">Conversion Rate</div>
              <div className="text-xs text-purple-600 mt-1">Industry: 3-5%</div>
            </div>
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="text-xl font-bold text-orange-700 mb-1">4.4%</div>
              <div className="text-sm font-semibold text-orange-900">Share Rate</div>
              <div className="text-xs text-orange-600 mt-1">Viral threshold</div>
            </div>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="text-xl font-bold text-red-700 mb-1">85%</div>
              <div className="text-sm font-semibold text-red-900">View Completion</div>
              <div className="text-xs text-red-600 mt-1">Above average</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
