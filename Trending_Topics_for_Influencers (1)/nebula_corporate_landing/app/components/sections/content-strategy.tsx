
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Play, Zap, Target, Users } from 'lucide-react'

export function ContentStrategy() {
  const shows = [
    {
      name: "Shadows of Eldritch Hollow",
      genre: "Horror",
      premise: "In a fog-shrouded town cursed by ancient rituals, residents uncover eldritch horrors lurking in everyday shadows.",
      contentType: "Jump Scare Clips",
      platform: "YouTube Shorts",
      performance: "14M+ views",
      avgEngagement: "17.1%",
      color: "red"
    },
    {
      name: "Crimson Echoes",
      genre: "Horror",
      premise: "A supernatural virus turns echoes into vengeful spirits that replay victims' worst memories.",
      contentType: "Echo Effect Challenges",
      platform: "TikTok",
      performance: "13M+ views",
      avgEngagement: "26.2%",
      color: "rose"
    },
    {
      name: "Quantum Exile",
      genre: "Sci-Fi",
      premise: "In a multiverse where exiles jump between realities, a rogue scientist battles alternate versions of herself.",
      contentType: "Twist Teasers",
      platform: "YouTube Shorts",
      performance: "11.5M+ views",
      avgEngagement: "15.2%",
      color: "blue"
    },
    {
      name: "Vortex Renegades",
      genre: "Action",
      premise: "Elite operatives harness vortex tech to infiltrate criminal empires across dimensions.",
      contentType: "Stunt Breakdowns",
      platform: "TikTok",
      performance: "15.6M+ views",
      avgEngagement: "22.8%",
      color: "green"
    }
  ]

  return (
    <section className="space-y-8">
      <div className="text-center">
        <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100">
          Content Strategy
        </Badge>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Multi-Genre Content Portfolio
        </h2>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Our diversified content strategy leverages four flagship shows across high-engagement genres, 
          optimized for specific platforms to maximize reach and audience retention while building 
          scalable intellectual property assets.
        </p>
      </div>

      {/* Strategy Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="metric-card">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-indigo-600" />
              </div>
              <CardTitle className="text-slate-900 text-lg">Platform Optimization</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="corporate-text text-sm mb-4">
              Strategic platform allocation maximizes engagement through format-specific content optimization.
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-slate-50 rounded">
                <span className="text-slate-600">TikTok</span>
                <span className="font-semibold text-slate-900">24.2% avg engagement</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-50 rounded">
                <span className="text-slate-600">YouTube Shorts</span>
                <span className="font-semibold text-slate-900">16.0% avg engagement</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-emerald-600" />
              </div>
              <CardTitle className="text-slate-900 text-lg">Viral Content Design</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="corporate-text text-sm mb-4">
              Content formats engineered for viral potential with clear engagement triggers and shareability factors.
            </div>
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-emerald-50 border border-emerald-200 rounded">
                <div className="font-semibold text-emerald-900">Horror: Jump Scares</div>
                <div className="text-emerald-700">95% share rate</div>
              </div>
              <div className="p-2 bg-blue-50 border border-blue-200 rounded">
                <div className="font-semibold text-blue-900">Action: Stunt Breakdowns</div>
                <div className="text-blue-700">87% completion rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="metric-card">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-rose-600" />
              </div>
              <CardTitle className="text-slate-900 text-lg">Audience Segmentation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="corporate-text text-sm mb-4">
              Genre-specific audience targeting enables precision marketing and higher conversion rates.
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-slate-50 rounded">
                <span className="text-slate-600">Horror Enthusiasts</span>
                <span className="font-semibold text-slate-900">50% portfolio</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-50 rounded">
                <span className="text-slate-600">Action/Sci-Fi</span>
                <span className="font-semibold text-slate-900">50% portfolio</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Flagship Shows */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Flagship Show Performance</h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {shows?.map?.((show, index) => (
            <Card key={show?.name || `show-${index}`} className="metric-card">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className={`w-6 h-6 bg-${show?.color}-100 rounded-lg flex items-center justify-center`}>
                        <Play className={`w-3 h-3 text-${show?.color}-600`} />
                      </div>
                      <Badge className={`bg-${show?.color}-50 text-${show?.color}-700 border-${show?.color}-200`}>
                        {show?.genre}
                      </Badge>
                    </div>
                    <CardTitle className="text-slate-900 mb-1">{show?.name}</CardTitle>
                    <div className="text-sm text-slate-600">{show?.contentType} • {show?.platform}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-slate-900">{show?.performance}</div>
                    <div className="text-sm text-slate-600">{show?.avgEngagement} engagement</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="corporate-text text-sm">{show?.premise}</p>
              </CardContent>
            </Card>
          )) || []}
        </div>
      </div>

      {/* Content Calendar Strategy */}
      <Card className="metric-card">
        <CardHeader>
          <CardTitle className="text-slate-900">Content Distribution Strategy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="text-2xl font-bold text-red-700 mb-1">50%</div>
              <div className="text-sm font-semibold text-red-900">Horror Content</div>
              <div className="text-xs text-red-600 mt-1">High viral potential</div>
            </div>
            <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-2xl font-bold text-green-700 mb-1">25%</div>
              <div className="text-sm font-semibold text-green-900">Action Content</div>
              <div className="text-xs text-green-600 mt-1">Stunt showcases</div>
            </div>
            <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="text-2xl font-bold text-blue-700 mb-1">25%</div>
              <div className="text-sm font-semibold text-blue-900">Sci-Fi Content</div>
              <div className="text-xs text-blue-600 mt-1">Twist reveals</div>
            </div>
            <div className="text-center p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="text-2xl font-bold text-purple-700 mb-1">100</div>
              <div className="text-sm font-semibold text-purple-900">Total Posts</div>
              <div className="text-xs text-purple-600 mt-1">Strategic launch</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
