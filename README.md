# ⚡ Cykruit v3 Cybersecurity Career Platform

> **Version 3** · [cykruit.vercel.app](https://cykruit.vercel.app) · Built for the Frontend Intern Assignment

A complete redesign and rebuild of the Cykruit platform — the world's first dedicated recruitment and career development ecosystem built exclusively for the cybersecurity industry. This is **Version 3**, representing a full architectural overhaul focused on scalability, modularity, and production-readiness.

---

## 🔄 Version History

| Version | URL | Stack | Notes |
|---------|-----|-------|-------|
| v1 | — | Legacy | Original concept |
| v2 | [cykruit-redesign.vercel.app](https://cykruit-redesign.vercel.app) | Next.js | First redesign pass |
| **v3** | **[cykruit.vercel.app](https://cykruit.vercel.app)** | **React + Vite + TailwindCSS v4** | **Current — full rebuild** |

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                      CYKRUIT v3                         │
│                   React + Vite + Tailwind               │
└─────────────────────────────────────────────────────────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
   │   Pages /   │  │ Components/ │  │   Utils /   │
   │   Routes    │  │  Reusable   │  │  Helpers    │
   └─────────────┘  └─────────────┘  └─────────────┘
          │                │
          ▼                ▼
   ┌─────────────────────────────────┐
   │        React Router DOM v7      │
   │    (Client-side Navigation)     │
   └─────────────────────────────────┘
```

---

## 📁 Project Structure

```
cykruit-v3/
├── public/
│   ├── favicon.svg              # Cykruit logo mark
│   └── icons.svg                # Icon sprite sheet
│
├── src/
│   ├── assets/                  # Static assets
│   │
│   ├── components/              # Reusable UI primitives
│   │   ├── Button.tsx           # Multi-variant button
│   │   ├── Card.tsx             # Premium card container
│   │   ├── Navbar.tsx           # Responsive sticky nav
│   │   ├── Footer.tsx           # Full footer w/ links
│   │   └── Toast.tsx            # Global toast system
│   │
│   ├── pages/                   # Route-level components
│   │   ├── LandingPage.tsx      # Marketing homepage
│   │   ├── LoginPage.tsx        # Auth (Login + Signup)
│   │   ├── PricingPage.tsx      # Pricing tiers
│   │   ├── TrainersPage.tsx     # Expert directory
│   │   ├── StandaloneJobsPage.tsx  # Public jobs board
│   │   ├── JobSeekerDashboard.tsx  # Full user dashboard
│   │   ├── InfoPage.tsx         # About / Contact / Legal
│   │   └── ComingSoon.tsx       # Placeholder module page
│   │
│   ├── utils/
│   │   └── cn.ts                # clsx + tailwind-merge helper
│   │
│   ├── App.tsx                  # Router + layout shell
│   ├── main.tsx                 # Entry point + providers
│   └── index.css                # Global styles + Tailwind theme
│
├── index.html
├── vite.config.js
├── package.json
└── eslint.config.js
```

---

## 🔀 Application Flow

### User Journey — Job Seeker

```
Landing Page
     │
     ├──► Browse Jobs (public, no auth)
     │         │
     │         └──► CTA: "View Mission" ──► Login Page
     │
     ├──► Trainers Directory (public)
     │
     ├──► Pricing Page (public)
     │
     └──► Sign Up / Login
               │
               ▼
         Dashboard (authenticated)
               │
               ├── Overview     ← Stats + activity feed
               ├── Browse Jobs  ← Filtered + AI match scores
               ├── Applied Jobs ← Application tracker
               ├── Saved Jobs   ← Bookmarked roles
               ├── Profile      ← Resume + certs + bio
               ├── Notifications← Alerts + updates
               └── Settings
                     ├── Profile Settings
                     ├── Security & Auth (2FA)
                     ├── Professional Links
                     └── Preferences / Toggles
```

### User Journey — Recruiter / Employer

```
Landing Page
     │
     └──► "Hire Talent" CTA
               │
               ▼
         Contact Sales / Pricing Page
               │
               ▼
         Recruiter Onboarding (coming soon)
```

---

## 🧩 Component Architecture

### Button Component
```
Button (forwardRef)
  ├── variant: primary | secondary | ghost | outline
  ├── size:    sm | md | lg
  └── isLoading: boolean (spinner state)
```

### Toast System
```
ToastProvider (Context)
  └── useToast() hook
        └── showToast(message, type)
              ├── type: 'success' | 'error' | 'info'
              └── auto-dismiss: 5000ms
```

### Dashboard Sub-router
```
/dashboard
  ├── /          → OverviewTab
  ├── /jobs      → JobsTab (with filter + apply)
  ├── /applied   → AppliedTab
  ├── /saved     → SavedTab
  ├── /profile   → ProfileTab
  ├── /notifications → NotificationsTab
  └── /settings
        ├── profile
        ├── security
        ├── professional
        └── preferences
```

---

## 🛣️ Route Map

| Route | Component | Auth Required |
|-------|-----------|---------------|
| `/` | LandingPage | ❌ |
| `/login` | LoginPage | ❌ |
| `/signup` | LoginPage (isSignup) | ❌ |
| `/jobs` | StandaloneJobsPage | ❌ |
| `/trainers` | TrainersPage | ❌ |
| `/pricing` | PricingPage | ❌ |
| `/about` | InfoPage | ❌ |
| `/contact` | InfoPage | ❌ |
| `/privacy` | InfoPage | ❌ |
| `/terms` | InfoPage | ❌ |
| `/blog` | ComingSoon | ❌ |
| `/roadmap` | ComingSoon | ❌ |
| `/dashboard/*` | JobSeekerDashboard | ✅ |

---

## ⚙️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19.x |
| Bundler | Vite | 8.x |
| Routing | React Router DOM | 7.x |
| Styling | Tailwind CSS | 4.x |
| Animation | Framer Motion | 12.x |
| Icons | Lucide React | 1.x |
| Utilities | clsx + tailwind-merge | Latest |
| Language | TypeScript + JSX | ES2020 |

---

## 🎨 Design System

### Color Palette
```
Brand (Purple)
  brand-50  → #f5f3ff   (backgrounds)
  brand-100 → #ede9fe   (subtle fills)
  brand-500 → #8b5cf6   (primary accent)
  brand-600 → #7c3aed   (CTAs, buttons)
  brand-700 → #6d28d9   (hover states)

Supporting
  slate-50  → bg, sections
  slate-900 → headings
  emerald-*  → success states
  red-*      → danger/error states
```

### Typography
```
Font: Poppins (Google Fonts)
Weights: 100 → 900 (all)

Headings:  font-semibold, tracking-tight
Body:      text-slate-600, antialiased
Labels:    uppercase, tracking-wider, text-xs
```

### Spacing & Radius
```
Cards:     rounded-2xl  (1.5rem)
Buttons:   rounded-full (pill)
Inputs:    rounded-xl   (1rem)
Sections:  py-24 px-4→8
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 20.x`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/cykruit-v3.git
cd cykruit-v3

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment
No environment variables are required for local development. The app runs fully client-side with mock data.

---

## ✨ Key Features

### 🎯 AI-Guided Job Matching
Intelligent match scores (82%–98%) displayed per job role, derived from candidate skill DNA vs. job requirements.

### 🛡️ Verified Network
Manual verification system for both employers and trainers. Verified badges displayed across the platform using `ShieldCheck` icons + trust levels.

### 📊 Job Seeker Dashboard
Full-featured dashboard with nested routing, stats cards, application tracking, notification center, settings panels with live toggle states, and profile management.

### 🏫 Trainer Directory
Global directory of verified cybersecurity experts with ratings, hourly rates, specialty tags, booking flow, and direct messaging.

### 🔔 Toast Notification System
Context-based toast provider accessible via `useToast()` hook — supports success, error, and info types with auto-dismiss.

### 📱 Fully Responsive
Mobile-first design with responsive grids, collapsible mobile navbar, and touch-friendly interactive elements.

---

## 🔧 What Changed from v2 → v3

| Area | v2 (Next.js) | v3 (Vite + React) |
|------|-------------|-------------------|
| Framework | Next.js | React + Vite |
| CSS | Tailwind v3 | Tailwind v4 (CSS-first config) |
| Routing | Next.js App Router | React Router DOM v7 |
| Animation | Basic CSS | Framer Motion v12 |
| Dashboard | None | Full nested dashboard |
| State | Local only | Context API (Toast) |
| Bundler | Webpack (via Next) | Rolldown (Vite 8) |
| TypeScript | Partial | Full `.tsx` throughout |

---

## 📈 Performance Highlights

- **Vite 8 + Rolldown** bundler for near-instant HMR
- **Code splitting** via React Router lazy loading (ready to implement)
- **Tailwind v4** with native CSS variables — zero runtime overhead
- **Framer Motion** with `initial/animate` only on viewport entry
- **Font optimization** via Google Fonts display=swap

---

## 🧠 Design Decisions

### Why Vite over Next.js for v3?
This is a pure SPA (Single Page Application) without SSR requirements. Vite offers dramatically faster development iteration, simpler configuration, and the new Rolldown bundler for production — perfect for a client-rendered dashboard-heavy app.

### Why Tailwind v4?
Tailwind v4 moves all configuration into CSS via `@theme` directives — no more `tailwind.config.js`. This results in cleaner separation of concerns and better IDE performance.

### Why Framer Motion?
The landing page requires smooth entrance animations, scroll-based reveals, and hover micro-interactions. Framer Motion provides a declarative API that integrates naturally with React's component model.

---

## 👤 Author

Built as part of a **Frontend Intern Assignment** demonstrating:

- Production-grade component architecture
- Scalable routing and state management patterns
- UI/UX focused development with accessibility in mind
- Clean, maintainable TypeScript codebase
- Real-world feature implementation (auth flow, dashboards, forms)

---

## 📄 License

This project is built for evaluation purposes as part of an internship assignment.

---

<div align="center">

**Cykruit v3** — *Precision Match for the Security Era*

[Live Demo](https://cykruit.vercel.app) · [v2 Reference](https://cykruit-redesign.vercel.app)

</div>
