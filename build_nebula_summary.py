from __future__ import annotations
import json
from pathlib import Path
from typing import Any

import pandas as pd

BASE_DIR = Path(__file__).resolve().parent
DATA_PATH = BASE_DIR / "nebula_visions_social_dataset.csv"
OUTPUT_DIR = BASE_DIR / "analysis"
OUTPUT_PATH = OUTPUT_DIR / "nebula_summary.json"

if not DATA_PATH.exists():
    raise FileNotFoundError(f"Dataset not found at {DATA_PATH}")

OUTPUT_DIR.mkdir(exist_ok=True)

df = pd.read_csv(DATA_PATH)
df['Upload_Date'] = pd.to_datetime(df['Upload_Date'])

summary: dict[str, Any] = {
    "total_posts": int(len(df)),
    "date_range": {
        "start": df['Upload_Date'].min().strftime('%Y-%m-%d'),
        "end": df['Upload_Date'].max().strftime('%Y-%m-%d')
    },
    "totals": {
        "views": int(df['Views'].sum()),
        "likes": int(df['Likes'].sum()),
        "shares": int(df['Shares'].sum()),
        "comments": int(df['Comments'].sum())
    },
    "average_conversion_rate": round(float(df['Conversion_Rate'].mean()), 4)
}

show_stats = (
    df.groupby('Show_Name')
      .agg(
          total_views=('Views', 'sum'),
          average_views=('Views', 'mean'),
          total_likes=('Likes', 'sum'),
          average_conversion_rate=('Conversion_Rate', 'mean'),
          post_count=('Post_ID', 'count')
      )
      .sort_values('total_views', ascending=False)
)

platform_stats = (
    df.groupby('Platform')
      .agg(
          total_views=('Views', 'sum'),
          average_views=('Views', 'mean'),
          median_length=('Length_s', 'median')
      )
      .sort_values('total_views', ascending=False)
)

top_posts = (
    df.sort_values(['Views', 'Likes'], ascending=False)
      .head(5)
      .loc[:, ['Post_ID', 'Show_Name', 'Platform', 'Clip_Type', 'Views', 'Likes', 'Shares', 'Hashtags']]
)

insights: dict[str, Any] = {
    "summary": summary,
    "shows": show_stats.round(2).reset_index().to_dict(orient='records'),
    "platforms": platform_stats.round(2).reset_index().to_dict(orient='records'),
    "top_posts": top_posts.to_dict(orient='records')
}

OUTPUT_PATH.write_text(json.dumps(insights, indent=2))

print(f"Wrote insights to {OUTPUT_PATH.relative_to(BASE_DIR)}")
