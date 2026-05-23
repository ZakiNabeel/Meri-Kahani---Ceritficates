# میری کہانی — Certificate Generator

A web-based certificate generator for **Meri Kahani**, the FAST Outreach & Engagement Society. Students enter their name, department, and team, and receive a personalized Certificate of Appreciation they can download as a high-resolution PNG.
<img width="1440" height="805" alt="image" src="https://github.com/user-attachments/assets/b723a45e-1298-4715-b85c-44159fd88110" />

---

## Live Site

Deployed on Vercel — replace with your URL after deployment.

---

## Features

- **Personalized certificates** — name, department, and team are filled in dynamically
- **Department dropdown** — Events, Technical, PR Internals, PR Externals, Creatives
- **Cascading team dropdown** — team options update automatically based on selected department
- **Dynamic department leads** — the correct department lead name appears on each certificate
- **High-res PNG download** — exports at 2.5× scale for print-quality output
- **Brand-accurate design** — deep crimson, floral texture, spotlight beam, gold borders, Nastaliq Urdu typography

---

## Departments & Teams

| Department | Teams |
|---|---|
| Events | Task Force · Planning & Research · Hosts |
| Technical | Web Development · Automations |
| PR Internals | Social Media |
| PR Externals | Marketing · Sponsorship |
| Creatives | Videography & Editing · Photography · Graphic Design |

---

## Certificate Credits

| Role | Name |
|---|---|
| Mentor | Dr. Muhammad Ali |
| Co-Mentor | Ma'am Sanaa Ilyas |
| Events Lead | Insharah Irfan Nazir |
| Technical Lead | Muhammad Talha Shafi |
| PR Internals Lead | Zoya Ahmed |
| PR Externals Lead | Abdul Raffay |
| Creatives Lead | Rayaan Raza |
| Campus Lead | Zaki Nabeel |

---

## Tech Stack

- Plain HTML / CSS / JavaScript — no build step, no dependencies
- [Noto Nastaliq Urdu](https://fonts.google.com/noto/specimen/Noto+Nastaliq+Urdu) + [Cinzel Decorative](https://fonts.google.com/specimen/Cinzel+Decorative) + [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) via Google Fonts
- [html2canvas](https://html2canvas.hertzen.com/) for PNG export

---

## Deploy to Vercel

### Option A — Import from GitHub (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Select this repository
4. Click **Deploy** — no build settings needed

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## Local Development

No build step required. Just open `index.html` in a browser, or run any static file server:

```bash
npx serve .
```

---

## File Structure

```
├── index.html      # Form + certificate template
├── styles.css      # All styles
├── script.js       # Generation logic, dept/team mappings, PNG download
└── vercel.json     # Vercel static site config
```

---

*FAST Outreach & Engagement Society — میری کہانی*
