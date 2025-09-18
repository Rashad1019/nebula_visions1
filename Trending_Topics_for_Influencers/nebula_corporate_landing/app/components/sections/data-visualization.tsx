
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChart3, TrendingUp, PieChart } from 'lucide-react'
import { useEffect } from 'react'

export function DataVisualization() {
  useEffect(() => {
    // Load the iframe content after component mounts to ensure proper rendering
    const dashboardFrame = document?.getElementById?.('dashboard-frame') as HTMLIFrameElement
    const timelineFrame = document?.getElementById?.('timeline-frame') as HTMLIFrameElement
    const topPostsFrame = document?.getElementById?.('top-posts-frame') as HTMLIFrameElement
    
    if (dashboardFrame) {
      dashboardFrame.src = '/data/nebula_dashboard.html'
    }
    if (timelineFrame) {
      timelineFrame.src = '/data/engagement_timeline.html'
    }
    if (topPostsFrame) {
      topPostsFrame.src = '/data/top_posts.html'
    }
  }, [])

  return (
    <section className="space-y-8">
      <div className="text-center">
        <Badge className="mb-4 bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100">
          Data Visualization
        </Badge>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Interactive Performance Analytics
        </h2>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Comprehensive visual analysis of our social media performance across all flagship shows, 
          platforms, and content types. These interactive dashboards provide real-time insights 
          into engagement patterns, growth trajectories, and market opportunities.
        </p>
      </div>

      {/* Main Dashboard */}
      <Card className="chart-container">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-blue-600" />
            </div>
            <CardTitle className="text-slate-900">Multi-Dimensional Performance Dashboard</CardTitle>
          </div>
          <p className="text-slate-600 text-sm mt-2">
            Consolidated view of views by show, platform engagement rates, genre distribution, and projected growth timeline
          </p>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[800px] rounded-lg overflow-hidden border border-slate-200">
            <iframe
              id="dashboard-frame"
              className="w-full h-full"
              frameBorder="0"
              title="Nebula Visions Performance Dashboard"
            />
          </div>
        </CardContent>
      </Card>

      {/* Timeline Analysis */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="chart-container">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <CardTitle className="text-slate-900">Engagement Timeline</CardTitle>
            </div>
            <p className="text-slate-600 text-sm mt-2">
              Temporal analysis showing content performance evolution and engagement patterns by show
            </p>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[500px] rounded-lg overflow-hidden border border-slate-200">
              <iframe
                id="timeline-frame"
                className="w-full h-full"
                frameBorder="0"
                title="Social Media Performance Timeline"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="chart-container">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <PieChart className="w-4 h-4 text-purple-600" />
              </div>
              <CardTitle className="text-slate-900">Top Performing Content</CardTitle>
            </div>
            <p className="text-slate-600 text-sm mt-2">
              Analysis of highest-performing posts by views, highlighting viral content patterns
            </p>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[500px] rounded-lg overflow-hidden border border-slate-200">
              <iframe
                id="top-posts-frame"
                className="w-full h-full"
                frameBorder="0"
                title="Top Performing Posts Analysis"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights from Data */}
      <Card className="metric-card">
        <CardHeader>
          <CardTitle className="text-slate-900">Key Data Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                Horror Content Dominance
              </h4>
              <div className="corporate-text text-sm">
                Horror content represents 50% of our portfolio and consistently achieves the highest 
                engagement rates, with <strong>Crimson Echoes</strong> leading viral performance 
                at 954K views on top post.
              </div>
              <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                Strategic Implication: Increase horror content allocation by 15% in Q2
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Platform Optimization Success
              </h4>
              <div className="corporate-text text-sm">
                TikTok delivers 51% higher engagement than YouTube Shorts, with 
                <strong>24.2% vs 16.0%</strong> engagement rates. Action and horror content 
                particularly excel on TikTok format.
              </div>
              <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                Strategic Implication: Prioritize TikTok for new content rollouts
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Growth Trajectory Validation
              </h4>
              <div className="corporate-text text-sm">
                Consistent upward trend in engagement with <strong>Q1 showing 28% growth</strong> 
                from launch. Peak performance correlates with genre-specific content timing.
              </div>
              <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                Strategic Implication: Confirms 10M+ view projection for 6-month timeline
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
