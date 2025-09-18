import pandas as pd
import numpy as np
import json
from datetime import datetime, timedelta
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots

# Disable pandas truncation for better data inspection
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', None)
pd.set_option('display.width', None)
pd.set_option('display.max_colwidth', None)

# Read the CSV data
df = pd.read_csv('/home/ubuntu/Uploads/nebula_visions_social_dataset.csv')

print("=== NEBULA VISIONS STUDIOS - SOCIAL MEDIA DATA ANALYSIS ===\n")
print("Dataset Info:")
print(f"Total Posts: {len(df)}")
print(f"Date Range: {df['Upload_Date'].min()} to {df['Upload_Date'].max()}")
print(f"Platforms: {df['Platform'].unique()}")
print(f"Shows: {df['Show_Name'].unique()}")
print(f"Genres: {df['Genre'].unique()}")

# Basic statistics
print("\n=== PERFORMANCE OVERVIEW ===")
total_views = df['Views'].sum()
total_likes = df['Likes'].sum()
total_shares = df['Shares'].sum()
total_comments = df['Comments'].sum()
avg_conversion = df['Conversion_Rate'].mean()

print(f"Total Views: {total_views:,}")
print(f"Total Likes: {total_likes:,}")
print(f"Total Shares: {total_shares:,}")
print(f"Total Comments: {total_comments:,}")
print(f"Average Conversion Rate: {avg_conversion:.3f} ({avg_conversion*100:.1f}%)")

# Performance by show
print("\n=== PERFORMANCE BY SHOW ===")
show_stats = df.groupby('Show_Name').agg({
    'Views': ['sum', 'mean'],
    'Likes': ['sum', 'mean'],
    'Shares': ['sum', 'mean'],
    'Comments': ['sum', 'mean'],
    'Conversion_Rate': 'mean',
    'Post_ID': 'count'
}).round(0)

show_stats.columns = ['Total_Views', 'Avg_Views', 'Total_Likes', 'Avg_Likes', 
                     'Total_Shares', 'Avg_Shares', 'Total_Comments', 'Avg_Comments',
                     'Avg_Conversion_Rate', 'Post_Count']
print(show_stats)

# Performance by platform
print("\n=== PERFORMANCE BY PLATFORM ===")
platform_stats = df.groupby('Platform').agg({
    'Views': ['sum', 'mean'],
    'Likes': ['sum', 'mean'],
    'Shares': ['sum', 'mean'],
    'Comments': ['sum', 'mean'],
    'Conversion_Rate': 'mean',
    'Post_ID': 'count'
}).round(0)

platform_stats.columns = ['Total_Views', 'Avg_Views', 'Total_Likes', 'Avg_Likes', 
                          'Total_Shares', 'Avg_Shares', 'Total_Comments', 'Avg_Comments',
                          'Avg_Conversion_Rate', 'Post_Count']
print(platform_stats)

# Performance by genre
print("\n=== PERFORMANCE BY GENRE ===")
genre_stats = df.groupby('Genre').agg({
    'Views': ['sum', 'mean'],
    'Likes': ['sum', 'mean'],
    'Shares': ['sum', 'mean'],
    'Comments': ['sum', 'mean'],
    'Conversion_Rate': 'mean',
    'Post_ID': 'count'
}).round(0)

genre_stats.columns = ['Total_Views', 'Avg_Views', 'Total_Likes', 'Avg_Likes', 
                      'Total_Shares', 'Avg_Shares', 'Total_Comments', 'Avg_Comments',
                      'Avg_Conversion_Rate', 'Post_Count']
print(genre_stats)

# Top performing posts
print("\n=== TOP 10 PERFORMING POSTS (by Views) ===")
top_posts = df.nlargest(10, 'Views')[['Post_ID', 'Show_Name', 'Platform', 'Genre', 
                                      'Clip_Type', 'Views', 'Likes', 'Conversion_Rate']]
print(top_posts)

# Content length analysis
print("\n=== CONTENT LENGTH ANALYSIS ===")
length_stats = df.groupby('Length_s').agg({
    'Views': 'mean',
    'Likes': 'mean',
    'Conversion_Rate': 'mean',
    'Post_ID': 'count'
}).round(0)
print("Average performance by video length:")
print(length_stats)

# Calculate engagement rates
df['Engagement_Rate'] = (df['Likes'] + df['Shares'] + df['Comments']) / df['Views']
print(f"\nOverall Engagement Rate: {df['Engagement_Rate'].mean():.4f} ({df['Engagement_Rate'].mean()*100:.2f}%)")

# Save processed data
df.to_csv('/home/ubuntu/processed_nebula_visions_data.csv', index=False)
print("\nProcessed data saved to: /home/ubuntu/processed_nebula_visions_data.csv")

# Create comprehensive insights dictionary for landing pages
insights = {
    'studio_name': 'Nebula Visions Studios',
    'tagline': 'A cutting-edge fictional TV production house specializing in gripping, genre-bending narratives that push the boundaries of horror, sci-fi, and action',
    'total_metrics': {
        'views': int(total_views),
        'likes': int(total_likes),
        'shares': int(total_shares),
        'comments': int(total_comments),
        'posts': len(df),
        'avg_conversion_rate': float(avg_conversion),
        'avg_engagement_rate': float(df['Engagement_Rate'].mean())
    },
    'shows': [
        {
            'name': 'Shadows of Eldritch Hollow',
            'genre': 'Horror',
            'premise': 'In a fog-shrouded town cursed by ancient rituals, residents uncover eldritch horrors lurking in everyday shadows.',
            'content_type': 'Jump Scare Clips',
            'platform': 'YouTube Shorts'
        },
        {
            'name': 'Crimson Echoes',
            'genre': 'Horror', 
            'premise': 'A supernatural virus turns echoes into vengeful spirits that replay victims worst memories.',
            'content_type': 'Echo Effect Challenges',
            'platform': 'TikTok'
        },
        {
            'name': 'Quantum Exile',
            'genre': 'Sci-Fi',
            'premise': 'In a multiverse where exiles jump between realities, a rogue scientist battles alternate versions of herself.',
            'content_type': 'Twist Teasers',
            'platform': 'YouTube Shorts'
        },
        {
            'name': 'Vortex Renegades',
            'genre': 'Action',
            'premise': 'Elite operatives harness vortex tech to infiltrate criminal empires across dimensions.',
            'content_type': 'Stunt Breakdowns',
            'platform': 'TikTok'
        }
    ],
    'platforms': ['YouTube Shorts', 'TikTok'],
    'top_performing_show': show_stats['Total_Views'].idxmax(),
    'best_platform': platform_stats['Total_Views'].idxmax(),
    'growth_projections': {
        'month_1': '1M+ total views',
        'month_6': '10M+ views (20% from viral hits)',
        'monetization': '$0.01/view ad revenue'
    }
}

# Save insights as JSON for landing pages
with open('/home/ubuntu/nebula_visions_insights.json', 'w') as f:
    json.dump(insights, f, indent=2)

print("\nInsights saved to: /home/ubuntu/nebula_visions_insights.json")