# ALI.INIT — Personal Portfolio

> Not a website *about* an AI engineer. It *is* what an AI engineer would build for themselves.

Live at → **[your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)**

---

## Overview

A precision dark portfolio built as a living interface — part editorial magazine, part command center. Every section has a distinct interactive personality: terminals you can type in, a draggable skill constellation, expandable project case studies, and an experience section that reads like a `git log`.

---

## Sections

| Section | Design |
|---|---|
| **Hero** | Massive display type, type animation, mini interactive terminal, profile photo with HUD overlays |
| **About** | Manifesto text + typewriter `cat about.txt` terminal |
| **Skills** | Scrolling ticker + draggable/zoomable D3 force constellation graph |
| **Projects** | Numbered case studies — click to expand with metrics, stack, links |
| **Experience** | Styled as `git log --all --graph` output |
| **Certifications** | Horizontal scroll shelf — all cards link to verified credentials |
| **Contact** | Fully interactive terminal (`mail ali`, `github`, `linkedin`, `help`) |

---

## Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4 + custom CSS design system
- **Animation** — Framer Motion
- **Graph** — react-force-graph-2d (D3 under the hood)
- **Icons** — @tabler/icons-react
- **Type animation** — react-type-animation
- **Fonts** — Bebas Neue · Syne · Fira Code

---

## Design System

```css
--bg:      #08080F   /* deep ink background    */
--accent:  #4DFFB4   /* mint green — used once */
--orange:  #FF6B35   /* hover / interaction    */
--text:    #EDEDF0
--surface: rgba(255,255,255,0.04)  /* glass cards */
```

**Typography**
- `Bebas Neue` — display / section headers
- `Syne` — body / subheadings
- `Fira Code` — all technical content, terminals

---

## Features

- Interactive terminals in Hero and Contact (type real commands)
- Draggable, zoomable D3 skill constellation
- Custom cursor — dot + trailing ring with link hover states
- Scroll-aware navbar — transparent → frosted glass on scroll
- Konami code easter egg — ↑ ↑ ↓ ↓ ← → ← → B A
- Fully responsive — mobile menu, adaptive layouts

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment

Deployed on Vercel. No environment variables required.

```bash
npm run build
```

---

## Author

**Ali Shaikh** — AI Engineer & CS Undergraduate, Mumbai

[GitHub](https://github.com/Ali-shaiikh) · [LinkedIn](https://www.linkedin.com/in/ali-shaikhh/) · [Email](mailto:alishaikhh15@gmail.com)
