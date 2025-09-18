import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import json

# Read processed data
df = pd.read_csv('/home/ubuntu/processed_nebula_visions_data.csv')

# 1. Show Performance Dashboard Chart
fig1 = make_subplots(
    rows=2, cols=2,
    subplot_titles=('Views by Show', 'Engagement by Platform', 'Genre Distribution', 'Growth Timeline'),
    specs=[[{"type": "bar"}, {"type": "bar"}],
           [{"type": "pie"}, {"type": "scatter"}]]
)

# Views by Show
show_views = df.groupby('Show_Name')['Views'].sum().sort_values(ascending=True)
fig1.add_trace(
    go.Bar(y=show_views.index, x=show_views.values, orientation='h', 
           name='Views', marker_color=['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4']),
    row=1, col=1
)

# Engagement by Platform  
platform_engagement = df.groupby('Platform')['Engagement_Rate'].mean()
fig1.add_trace(
    go.Bar(x=platform_engagement.index, y=platform_engagement.values,
           name='Engagement Rate', marker_color=['#FF9F43', '#6C5CE7']),
    row=1, col=2
)

# Genre Distribution
genre_views = df.groupby('Genre')['Views'].sum()
fig1.add_trace(
    go.Pie(labels=genre_views.index, values=genre_views.values,
           name='Views by Genre', 
           marker_colors=['#A29BFE', '#FD79A8', '#00B894']),
    row=2, col=1
)

# Growth Timeline (mock future projections)
months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6']
views = [1000000, 2500000, 4200000, 6800000, 8500000, 10200000]
fig1.add_trace(
    go.Scatter(x=months, y=views, mode='lines+markers',
               name='Projected Growth', line=dict(color='#00B894', width=3)),
    row=2, col=2
)

fig1.update_layout(
    height=800,
    title_text="Nebula Visions Studios - Social Media Performance Dashboard",
    title_x=0.5,
    showlegend=False,
    plot_bgcolor='rgba(0,0,0,0)',
    paper_bgcolor='rgba(0,0,0,0)'
)

fig1.write_html('/home/ubuntu/nebula_dashboard.html', include_plotlyjs='cdn')

# 2. Engagement Metrics Chart for Shareholders
fig2 = go.Figure()

shows = df['Show_Name'].unique()
colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4']

for i, show in enumerate(shows):
    show_data = df[df['Show_Name'] == show]
    fig2.add_trace(go.Scatter(
        x=show_data['Upload_Date'],
        y=show_data['Views'],
        mode='markers',
        marker=dict(
            size=show_data['Engagement_Rate'] * 100,
            color=colors[i],
            opacity=0.7
        ),
        name=show,
        hovertemplate='<b>%{fullData.name}</b><br>' +
                      'Views: %{y:,.0f}<br>' +
                      'Date: %{x}<br>' +
                      '<extra></extra>'
    ))

fig2.update_layout(
    title='Social Media Performance Timeline - Views & Engagement by Show',
    xaxis_title='Upload Date',
    yaxis_title='Views',
    plot_bgcolor='rgba(0,0,0,0)',
    paper_bgcolor='white',
    height=500
)

fig2.write_html('/home/ubuntu/engagement_timeline.html', include_plotlyjs='cdn')

# 3. Top Performing Content Analysis
top_posts = df.nlargest(10, 'Views')
fig3 = px.bar(
    top_posts,
    x='Views',
    y=range(len(top_posts)),
    orientation='h',
    color='Genre',
    title='Top 10 Performing Posts',
    labels={'y': 'Post Rank'},
    color_discrete_map={'Horror': '#FF6B6B', 'Action': '#45B7D1', 'Sci-Fi': '#4ECDC4'}
)

fig3.update_layout(
    height=500,
    yaxis=dict(tickmode='array', tickvals=list(range(len(top_posts))), 
               ticktext=[f"{post['Show_Name']} - {post['Clip_Type']}" for _, post in top_posts.iterrows()]),
    plot_bgcolor='rgba(0,0,0,0)',
    paper_bgcolor='white'
)

fig3.write_html('/home/ubuntu/top_posts.html', include_plotlyjs='cdn')

# 4. Create chart data for JSON (for potential web app use)
chart_data = {
    'show_performance': {
        'shows': show_views.index.tolist(),
        'views': show_views.values.tolist()
    },
    'platform_engagement': {
        'platforms': platform_engagement.index.tolist(),
        'engagement_rates': platform_engagement.values.tolist()
    },
    'genre_distribution': {
        'genres': genre_views.index.tolist(),
        'views': genre_views.values.tolist()
    },
    'growth_projection': {
        'months': months,
        'views': views
    },
    'top_posts': {
        'show_names': top_posts['Show_Name'].tolist(),
        'views': top_posts['Views'].tolist(),
        'genres': top_posts['Genre'].tolist(),
        'clip_types': top_posts['Clip_Type'].tolist()
    }
}

with open('/home/ubuntu/chart_data.json', 'w') as f:
    json.dump(chart_data, f, indent=2)

print("Visualizations created:")
print("- /home/ubuntu/nebula_dashboard.html")
print("- /home/ubuntu/engagement_timeline.html") 
print("- /home/ubuntu/top_posts.html")
print("- /home/ubuntu/chart_data.json")