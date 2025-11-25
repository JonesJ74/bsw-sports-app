# Box Score Watchers Stats App

A mobile app built with React Native + Expo that allows users to search players, view stats, track in-game performance, and manage basketball data in a clean and intuitive interface.

## Features
Player Search

   Search through a player database

   Filter results by name

   Displays key info at a glance

👤 Player Detail Pages(In Progress)

   Dynamic pages for each player

   Shows detailed stats, position, team info, etc.

   Extensible for advanced analytics later   

📝 Real-Time Stats Tracking (In Progress)

   Track points, rebounds, assists, steals, blocks

   Reset and save game stats

   Designed for coaches, players, and fans

🗂 Local Data Storage (Planned)

   Save game logs

   Track player improvements over time

🎥 Highlights System (Future Feature)

   Potential integration for real-time or post-game highlights

   Connects to external sports APIs

## Tech Stack
   React Native

   Expo

   JavaScript

   React Navigation

   AsyncStorage (planned)

   Custom player dataset (players.json)
## Get started


1. Clone repository

   ```bash
   git clone https://github.com/JonesJ74/bsw-sports-app.git
   cd bsw-sports-app
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
   npx expo start
   ```


## How It Works
Player Search Logic

   Loads players from players.json

   Converts query to lowercase

   Filters player list by matching names

Dynamic Player Page(in progress)

   Uses React Navigation route params

   Displays player-specific data based on selected card

Stats Tracking(in progress)

   Tracks each stat using React state

   Buttons for +1, -1, reset

   Will soon support saving stats to storage

## Current Roadmap

   Setup Expo project

   Build Player Search screen

   Connect player data

   Add Player Detail pages(we are here)

   Implement Stats Tracking

   Add local storage for saved games

   UI polish and animations

   Add highlight support using sports APIs

## Contributions
   This is a personal portfolio project, however one day I may add this to the app store. Contributions, comments, and suggestions are not only welcomed but encouraged.

## License
Copyright (c) 2025 Julian Jones

All rights reserved.

This source code is the property of Julian Jones. 
Unauthorized copying, modification, distribution, or use of this software, 
via any medium, is strictly prohibited unless express written permission 
is granted by the copyright holder.

This software is intended solely for educational, personal development, 
or portfolio demonstration purposes. Commercial use is prohibited 
without prior written consent.