[![Watch Live](https://img.shields.io/badge/▶_Watch_Live-YouTube-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/@TheEfficientDev)
[![Trading Bot](https://img.shields.io/badge/Trading_Bot-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/felix-helleckes/TradingBot)
[![Portfolio](https://img.shields.io/badge/Portfolio-felix--helleckes.github.io-0a66c2?style=for-the-badge&logo=github)](https://felix-helleckes.github.io/)


# The Mandalorian & Grogu – Movie Countdown

A fan-made React countdown website for the upcoming **"The Mandalorian & Grogu"** movie, releasing in cinemas on **May 22, 2026**.

Live demo: **[mando-countdown.netlify.app](https://mando-countdown.netlify.app)**

---

## Features

- **Live Countdown** – Updates every second, counting down to the release date
- **Scroll Snapping** – One scroll = one full page section, smooth and instant
- **Animated Star Field** – Canvas-based twinkling star background
- **Embedded YouTube Trailer** – Official trailer embedded via YouTube IFrame
- **Character Cards** – Din Djarin & Grogu with hover effects and descriptions
- **Responsive Design** – Works on all screen sizes

---

## Tech Stack

| Technology | Usage |
|---|---|
| [React 18](https://react.dev/) | UI library, component architecture |
| [Vite 6](https://vitejs.dev/) | Build tool & dev server |
| CSS Modules (plain CSS) | Per-component scoped styles |
| `useState` / `useEffect` / `useRef` | React hooks for timer, canvas, state |
| Canvas API | Animated star field background |
| CSS Scroll Snap | Full-page scroll snapping |
| CSS Custom Properties | Design tokens (colors, fonts) |
| Google Fonts | Cinzel (titles) + Exo 2 (body) |
| YouTube IFrame Embed | Trailer integration |

---

## Project Structure

```
src/
├── App.jsx               # Root component, section layout
├── main.jsx              # React DOM entry point
├── index.css             # Global styles, CSS variables, scroll snap
└── components/
    ├── Stars.jsx / .css       # Canvas star animation
    ├── Hero.jsx / .css        # Landing section + countdown timer
    ├── Characters.jsx / .css  # Din Djarin & Grogu cards
    ├── Trailer.jsx / .css     # YouTube embed
    └── Footer.jsx / .css      # Links, disclaimer
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment (Netlify)

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

---

## Analytics & SEO

This project follows my standard setup for all web projects:

| Tool | Purpose |
|---|---|
| **Google Analytics** (`G-NFGRXLN9L8`) | Visitor tracking, traffic sources, real-time stats |
| **Google Search Console** | Search indexing, sitemap submission, crawl monitoring |
| **sitemap.xml** | Auto-discovered by Google for faster indexing |
| **robots.txt** | Crawler permissions + sitemap reference |
| **JSON-LD Movie Schema** | Structured data for potential Rich Snippets |
| **Open Graph / Twitter Card** | Rich previews when sharing on social media |

Google Analytics and Search Console are standard on every project I build.

---

## What I Learned

- Structuring a React app into reusable components
- Using `useEffect` and `setInterval` for a real-time countdown
- Drawing and animating on an HTML5 `<canvas>` with `requestAnimationFrame`
- Implementing CSS Scroll Snap for full-page scrolling
- Working with CSS Custom Properties for consistent theming
- Embedding third-party content (YouTube IFrame API)
- Deploying a Vite/React project to Netlify
- Setting up Google Analytics & Search Console as standard practice

---

## Disclaimer

This is a fan project. Star Wars, The Mandalorian, Grogu, and all related characters and trademarks are the property of Lucasfilm Ltd. & Disney. All rights reserved.

*"This is The Way."*
