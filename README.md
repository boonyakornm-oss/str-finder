# StrengthsFinder

A web-based assessment tool that helps you discover your top 5 talent themes from 34 possible strengths across 4 domains — based on the CliftonStrengths 2.0 framework by Gallup.

## Features

- **177 paired-statement questions** with a 20-second timer per question to encourage instinctive responses
- **Top 5 strength results** ranked and scored with detailed descriptions and actionable advice
- **Domain balance visualization** showing how your strengths distribute across Executing, Influencing, Relationship Building, and Strategic Thinking
- **Session persistence** — close your browser and resume where you left off
- **Print/PDF export** of your results
- **Keyboard navigation** — use keys 1–5, arrow keys, and Enter for a fast flow
- **Fully client-side** — no backend, no account needed, data stays in your browser

## Getting Started

### Run locally

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

> **Note:** Opening `index.html` directly as a file won't work because the app uses ES modules, which require an HTTP server.

### Live demo

Visit the [GitHub Pages site](https://boonyakornm-oss.github.io/str-finder/) to try it online.

## Tech Stack

- **HTML5** — semantic markup, no build step
- **Tailwind CSS** (CDN) — utility-first styling with custom design tokens
- **Vanilla JavaScript** — ES6 modules, no frameworks or dependencies
- **LocalStorage** — client-side session persistence
- **Google Fonts** — Manrope (headlines) + Inter (body)

## Project Structure

```
├── index.html              # Landing page
├── assessment.html         # 177-question assessment
├── results.html            # Top 5 results display
└── js/
    ├── utils.js            # Session management (localStorage)
    ├── assessment.js       # Timer, question flow, scoring logic
    ├── results.js          # Results rendering, domain summary
    └── data/
        ├── questions.js    # 177 paired-statement questions
        └── themes.js       # 34 strength themes + 4 domains
```

## Contributors

- [boonyakornm-oss](https://github.com/boonyakornm-oss)
- tanakorn.karode@gmail.com
- warunsinx@gmail.com

## Acknowledgments

Educational recreation inspired by [CliftonStrengths 2.0](https://www.gallup.com/cliftonstrengths/) by Tom Rath and Gallup.
