# Lifelong Language Agents: Theory and Practice

Website for the EMNLP 2026 tutorial **"Lifelong Language Agents: Theory and Practice."**

A field map for reasoning, tools, memory, alignment, evolution, and evaluation of long-running language agents — anchored by the Theory of Agent (ToA) as a diagnostic vocabulary for knowledge boundaries, epistemic necessity, and effort allocation.

## Organizers

- **Hongru Wang** (primary contact) — University of Edinburgh
- **Cheng Qian** — University of Illinois Urbana-Champaign
- **Emre Can Acikgoz** — University of Illinois Urbana-Champaign
- **Zhenfei Yin** — University of Oxford
- **Manling Li** — Northwestern University
- **Heng Ji** — University of Illinois Urbana-Champaign

Contact: `hongru.carrywang@gmail.com`

## Local Preview

```bash
python3 -m http.server 4322
# then open http://localhost:4322
```

The site is a static HTML/CSS/JS bundle — Bootstrap, AOS, and Bootstrap Icons are loaded from a CDN, so no build step is required.

## Structure

```
.
├── index.html
├── assets/
│   ├── css/style.css       # base styles adapted from the TheEvent template
│   ├── js/main.js          # nav, scroll, AOS init
│   └── img/
│       ├── background_san_fancisco.jpg
│       ├── about-bg.jpg
│       ├── organizers/     # organizer headshots
│       └── others/         # favicon
```

## Deployment

This site is designed to be served with GitHub Pages. Push to `main`, then enable GitHub Pages in the repository settings (Source: `Deploy from a branch`, Branch: `main`, Folder: `/ (root)`).

