> An employee skill assessment platform that measures the gap between **perceived knowledge** and **actual knowledge** — then turns that gap into actionable insights.

![Tech Stack](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Node](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=flat&logo=postgresql)
![Deployed on Vercel](https://img.shields.io/badge/Frontend-Vercel-black?style=flat&logo=vercel)
![Deployed on Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=flat&logo=render)

---

## What It Does

Most platforms test what employees know. SkillAssess goes further — it first asks employees to rate their own confidence across key skills, then puts them through an actual MCQ assessment. The system compares both results and produces a **Confidence Accuracy Index (CAI)**, showing not just performance but self-awareness.

```
CAI = 100 - |Self-Assessment Score - Actual Score|
```

A high CAI means an employee has accurate self-knowledge. A low CAI reveals either overconfidence or underconfidence — both of which matter for team planning and L&D decisions.

---

## Features

### Employee Side
- **Self-Assessment** — Rate yourself 1–5 across HTML, CSS, JavaScript, React, Communication, and Problem Solving
- **MCQ Test** — Timed assessment fetched from the question bank; one attempt only; auto-submits on timeout
- **Results Page** — Side-by-side comparison of self vs. actual scores, bar chart, radar chart, and topic-level breakdown
- **Leaderboard** — Ranked by actual score with CAI shown alongside; your row is highlighted

### Admin Side
- **Dashboard** — Overview stats: total employees, assessments completed, average scores, average CAI
- **Employee Management** — Full CRUD with search
- **Question Bank** — Full CRUD with topic tagging and difficulty
- **Analytics Dashboard** — Four charts: Self vs. Actual, Gap Analysis, Question Difficulty, Top Performers
- **CSV Export** — Download all results with name, email, self score, actual score, gap, and CAI

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS, React Router v6 |
| UI Components | React Bits, Recharts |
| HTTP Client | Axios |
| Backend | Node.js, Express.js |
| ORM | Prisma |
| Auth | JWT + bcrypt |
| Database | PostgreSQL (Neon Serverless) |
| Frontend Deploy | Vercel |
| Backend Deploy | Render |

---

## Project Structure

```
skillassess-platform/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.js
│   └── src/
│       ├── index.js
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   ├── selfAssessment.controller.js
│       │   ├── test.controller.js
│       │   ├── question.controller.js
│       │   ├── analytics.controller.js
│       │   ├── leaderboard.controller.js
│       │   └── admin.controller.js
│       ├── middleware/
│       │   ├── auth.middleware.js
│       │   └── validate.middleware.js
│       ├── routes/
│       │   ├── auth.routes.js
│       │   ├── user.routes.js
│       │   ├── selfAssessment.routes.js
│       │   ├── question.routes.js
│       │   ├── test.routes.js
│       │   ├── analytics.routes.js
│       │   ├── leaderboard.routes.js
│       │   └── admin.routes.js
│       └── utils/
│           ├── prisma.js
│           ├── jwt.js
│           ├── response.js
│           └── scoring.js
└── frontend/
    └── src/
        ├── App.jsx
        ├── context/
        │   └── AuthContext.jsx
        ├── services/
        │   ├── api.js
        │   └── index.js
        ├── hooks/
        │   └── useApi.js
        ├── utils/
        │   └── helpers.js
        ├── components/
        │   ├── ui/
        │   │   ├── index.jsx
        │   │   └── ProtectedRoute.jsx
        │   ├── layout/
        │   │   └── index.jsx
        │   └── charts/
        │       └── index.jsx
        └── pages/
            ├── auth/LoginPage.jsx
            ├── employee/
            │   ├── DashboardPage.jsx
            │   ├── SelfAssessmentPage.jsx
            │   ├── TestPage.jsx
            │   ├── ResultsPage.jsx
            │   └── LeaderboardPage.jsx
            └── admin/
                ├── DashboardPage.jsx
                ├── EmployeesPage.jsx
                ├── QuestionsPage.jsx
                └── AnalyticsPage.jsx
```

---

## Database Schema

Five tables with the following relationships:

```
users
  └── self_assessments (1:1)
  └── test_attempts (1:1)
        └── responses (1:N)
              └── questions (N:1)
```

**users** — `id, email, password_hash, name, department, role (EMPLOYEE | ADMIN)`

**self_assessments** — `id, user_id, html_rating, css_rating, js_rating, react_rating, communication_rating, problem_solving_rating, overall_percentage, completed_at`

**questions** — `id, question_text, option_a–d, correct_answer, topic, difficulty`

**test_attempts** — `id, user_id, started_at, submitted_at, time_taken_seconds, score_percentage, total_questions, correct_answers, status`

**responses** — `id, attempt_id, question_id, selected_answer, is_correct`

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- A [Neon](https://neon.tech) PostgreSQL database

### 1. Clone the repo

```bash
git clone https://github.com/your-username/skillassess-platform.git
cd skillassess-platform
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRES_IN=7d
PORT=5000
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

Run migrations and seed the database:

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

Start the backend:

```bash
npm run dev
```

### 3. Set up the frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

The app will be running at `http://localhost:5173`.

---

## Seed Credentials

The seed script creates one admin and five employees you can log in with immediately.

| Role | Email | Password |
|---|---|---|
| Admin | admin@skillassess.io | Admin@123 |
| Employee | alice@skillassess.io | Employee@123 |
| Employee | bob@skillassess.io | Employee@123 |
| Employee | carol@skillassess.io | Employee@123 |
| Employee | david@skillassess.io | Employee@123 |
| Employee | eve@skillassess.io | Employee@123 |

---

## API Overview

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/api/auth/login` | Public | Login, returns JWT |
| GET | `/api/auth/me` | Auth | Current user profile |
| POST | `/api/self-assessment` | Employee | Submit self-assessment |
| GET | `/api/self-assessment` | Employee | Get own self-assessment |
| GET | `/api/questions` | Employee | Fetch test questions |
| POST | `/api/test/start` | Employee | Start test attempt |
| POST | `/api/test/submit` | Employee | Submit answers |
| GET | `/api/test/result` | Employee | Get own results |
| GET | `/api/leaderboard` | Employee | Get leaderboard |
| GET | `/api/analytics/overview` | Admin | Aggregate stats |
| GET | `/api/analytics/gap` | Admin | Gap analysis data |
| GET | `/api/analytics/difficulty` | Admin | Per-question difficulty |
| GET | `/api/analytics/top-performers` | Admin | Top 10 employees |
| GET | `/api/analytics/export` | Admin | CSV export |
| GET | `/api/admin/employees` | Admin | List all employees |
| POST | `/api/admin/employees` | Admin | Create employee |
| PUT | `/api/admin/employees/:id` | Admin | Update employee |
| DELETE | `/api/admin/employees/:id` | Admin | Delete employee |
| GET | `/api/questions` | Admin | List all questions |
| POST | `/api/questions` | Admin | Add question |
| PUT | `/api/questions/:id` | Admin | Edit question |
| DELETE | `/api/questions/:id` | Admin | Delete question |

---

## Deployment

### Database — Neon

1. Create a project at [neon.tech](https://neon.tech)
2. Copy the connection string from the dashboard
3. Set it as `DATABASE_URL` in your backend environment

### Backend — Render

1. Push your repo to GitHub
2. Create a new **Web Service** on [render.com](https://render.com)
3. Set root directory to `backend/`
4. Build command: `npm install && npx prisma generate && npx prisma migrate deploy`
5. Start command: `node src/index.js`
6. Add all environment variables from `.env.example`

### Frontend — Vercel

1. Import your repo on [vercel.com](https://vercel.com)
2. Set root directory to `frontend/`
3. Set `VITE_API_URL` to your Render backend URL
4. Deploy — Vercel auto-detects Vite

---

## Environment Variables Reference

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `JWT_SECRET` | Secret key for signing JWTs (min 32 chars) |
| `JWT_EXPIRES_IN` | Token expiry e.g. `7d` |
| `PORT` | Server port (default `5000`) |
| `CLIENT_URL` | Frontend URL for CORS (e.g. `https://your-app.vercel.app`) |
| `NODE_ENV` | `development` or `production` |

### Frontend (`frontend/.env`)

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend URL (e.g. `https://your-api.onrender.com`) |

---
