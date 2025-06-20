# ScoreKeeper – Two Player Game Tracker

This is a fully functional 2-player scorekeeping app created as part of the *Web Developer Bootcamp 2025*. It allows players to set custom names, track scores up to a selected value, and even generate a random opponent using an external API.

## Features

- Two-player interactive score tracking
- Set target score limit (1–10)
- Input player name manually
- Generate random player via external API
- Displays number of wins per player
- Resets and new match setup functionality
- Clean responsive layout using Bulma CSS

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (DOM manipulation & async API)  
- [Bulma](https://bulma.io/) CSS framework  
- [API Ninjas](https://api-ninjas.com/api/randomuser) – for fetching random opponent names

## Structure

ScoreKeeper/
├── index.html # App interface  
├── style.css # Custom styling   
├── app.js # Game logic and API integration  
├── slike/ # Contains image used in the app (pingpong.avif)  


## Usage

1. Open `index.html` in a browser
2. Enter your name and submit
3. Click “Random opponent” to generate a second player
4. Select a target score
5. Use buttons to increase scores
6. Reset or start a new game at any time

## Learning Highlights

- DOM manipulation
- Event handling
- Select dropdowns and real-time data
- Async/await with fetch and API headers
- Use of semantic HTML and Bulma components

---

> This project was a great way to practice dynamic interactivity, modular JavaScript logic, and API usage in the browser.
