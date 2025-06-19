# Legal Care Landing Page Redesign Assignment

This project is an assignment from **Legal Care** to redesign their landing page with a modern, responsive UI and implement secure authentication. After logging in, users are redirected to an AI-powered chat interface similar to ChatGPT, where they can ask questions and receive responses.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Authentication Flow](#authentication-flow)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This project is a full redesign of the Legal Care landing page, focusing on:
- Clean, modern, and responsive design
- Clear presentation of pricing plans and features
- Secure authentication using Auth0
- Post-login experience: users are redirected to a chat interface inspired by ChatGPT, where they can interact with an AI assistant

---

## Features
- **Landing Page Redesign:**
  - Modern UI/UX with responsive layouts
  - Pricing plans with feature comparison
  - Testimonials and feature highlights
- **Authentication:**
  - Auth0 integration for secure login
  - Social and email login support (via Auth0)
- **Post-Login Chat Interface:**
  - ChatGPT-like UI for user questions and AI responses
  - Seamless transition from landing to chat after authentication
- **Accessibility & Performance:**
  - Optimized for fast load times and accessibility

---

## Tech Stack
- **Frontend:** Next.js (App Router), React, TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Authentication:** Auth0
- **Other:**
  - PostCSS
  - Modern best practices for performance and SEO

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm, yarn, pnpm, or bun

### Installation
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd legal-care/frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```
3. **Configure Auth0:**
   - Create a `.env.local` file in the `frontend` directory.
   - Add your Auth0 credentials:
     ```env
     AUTH0_DOMAIN=your-auth0-domain
     AUTH0_CLIENT_ID=your-auth0-client-id
     AUTH0_CLIENT_SECRET=your-auth0-client-secret
     AUTH0_REDIRECT_URI=http://localhost:3000/api/auth/callback
     AUTH0_POST_LOGOUT_REDIRECT_URI=http://localhost:3000/
     ```
   - (Refer to the Auth0 documentation for more details.)

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
5. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the landing page.

---

## Authentication Flow
1. **User visits the landing page.**
2. **Clicks "Login" or "Get Started"** — redirected to Auth0 for authentication.
3. **Upon successful login,** user is redirected to the chat interface (`/after-login`), which mimics the ChatGPT experience.
4. **User can log out** at any time, which returns them to the landing page.

---

## Usage
- **Landing Page:**
  - Explore pricing, features, and testimonials.
  - Click "Get Started" to begin authentication.
- **Chat Interface:**
  - After login, ask questions in the chat UI and receive AI-generated responses.

---

## Folder Structure
```
frontend/
├── public/                # Static assets (images, SVGs)
├── src/
│   ├── app/
│   │   ├── components/    # UI components (Navbar, Footer, Pricing, etc.)
│   │   ├── after-login/   # ChatGPT-like post-login page
│   │   ├── layout.tsx     # App layout
│   │   └── page.tsx       # Landing page entry
│   ├── lib/               # Utility functions
│   └── components/        # Shared or external components
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── ...
```

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. For major changes, open an issue first to discuss what you would like to change.

---

## License

This project is for assignment and demonstration purposes for Legal Care. For other uses, please contact the author or Legal Care for permission.
