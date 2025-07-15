<div align="center">
  <img src="https://img.shields.io/badge/PERN%20Stack-Full--Stack-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/AI%20Powered-Gemini%20API-yellowgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployed-Neon%20+%20Vercel-6c63ff?style=for-the-badge" />
  <br />
  <h1>🚀 ZapAI – AI-Powered SaaS Application</h1>
  <p>A full-stack AI SaaS platform with subscriptions, content/image generation, and resume analytics – built on the PERN stack.</p>
</div>

---

## 🌐 Live Site

🔗 **Production App:** [https://zap-ai.vercel.app](https://zap-ai.vercel.app)

---

## 🧠 About ZapAI

ZapAI is a modern AI SaaS application built with the **PERN Stack** (PostgreSQL, Express.js, React, Node.js). It empowers users with tools for AI-generated content, images, and resume analysis, with secure authentication and premium billing.

---

## ⚙️ Tech Stack

| Frontend | Backend | Auth | AI | Database |
|----------|---------|------|----|----------|
| ![React](https://img.shields.io/badge/React-20232a?logo=react&logoColor=61DAFB&style=for-the-badge) | ![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=for-the-badge) | ![Clerk](https://img.shields.io/badge/Clerk-3A3A3A?logo=clerk&logoColor=white&style=for-the-badge) | ![Gemini](https://img.shields.io/badge/Gemini%20API-4285F4?logo=google&logoColor=white&style=for-the-badge) | ![Neon](https://img.shields.io/badge/NeonDB-0C2238?logo=postgresql&logoColor=white&style=for-the-badge) |



---

## 🔐 Authentication

- User sign-up, sign-in, and session management via **Clerk**
- Secure API routes with middleware
- Role-based access for premium features

---

## 💳 Subscription Billing

- Premium subscription gates access to advanced AI tools
- Seamless subscription flows via Clerk (Stripe-compatible)
- Usage control based on user plan

---

## 🧩 AI Features

| Feature | Description |
|--------|-------------|
| ✍️ **Article Generator** | Enter a title and length → get a full article |
| 🧠 **Blog Title Generator** | Input keyword & category → generate blog titles |
| 🎨 **Image Generator** | Describe a prompt → generate an image |
| 🖼 **Background Remover** | Upload image → get transparent background |
| 🚫 **Object Remover** | Upload image + object description → remove objects |
| 📄 **Resume Analyzer** | Upload your resume → get AI-driven review |

---

## 📦 Client Dependencies

- `react`, `react-dom`, `vite`, `tailwindcss`
- `@clerk/clerk-react`, `react-hot-toast`, `react-markdown`
- `lucide-react`, `react-router-dom`

## 📦 Server Dependencies

- `express`, `dotenv`, `cors`, `axios`, `multer`
- `@clerk/express`, `@neondatabase/serverless`
- `cloudinary`, `pdf-parse`, `openai` or `Gemini` (via axios)
- `nodemon` (for development)

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/zapai.git
cd zapai

# Install client dependencies
cd client
npm install
npm run dev

# Install server dependencies
cd ../server
npm install
npm run server
