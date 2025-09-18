# Nebula Visions

This project is a data analysis and web dashboard for Nebula Visions, a TV studio. It analyzes social media data to provide insights and a landing page to announce the studio's arrival on social media.

## Project Overview

The goal of this project is to leverage data analysis to create a compelling social media presence for Nebula Visions. This repository contains the scripts for data analysis, the generated insights, and the source code for a corporate landing page.

## File Structure

-   `nebula_visions_social_dataset.csv`: The raw social media dataset.
-   `tv_studios_social_strategy.md`: A document outlining the social media strategy.
-   `build_nebula_summary.py`: A Python script that generates a summary of the social media data.
-   `analysis/nebula_summary.json`: The generated summary in JSON format.
-   `Trending_Topics_for_Influencers/`: A directory containing the core data analysis and web components.
    -   `analyze_studio_data.py`: A script that processes and analyzes the social media data.
    -   `create_visualizations.py`: A script that creates various data visualizations.
    -   `processed_nebula_visions_data.csv`: The processed and cleaned social media data.
    -   `nebula_dashboard.html`, `engagement_timeline.html`, `top_posts.html`: HTML files that visualize the data insights.
    -   `nebula_corporate_landing/`: A Next.js application for the corporate landing page.

## Getting Started

### Prerequisites

-   Python 3.x
-   Node.js and npm (or yarn)

### Installation and Usage

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Rashad1019/nebula_visions.git
    cd nebula_visions
    ```

2.  **Run the data analysis scripts:**
    ```bash
    python build_nebula_summary.py
    python Trending_Topics_for_Influencers/analyze_studio_data.py
    python Trending_Topics_for_Influencers/create_visualizations.py
    ```

3.  **Run the landing page:**
    ```bash
    cd Trending_Topics_for_Influencers/nebula_corporate_landing/app
    npm install
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:3000`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
