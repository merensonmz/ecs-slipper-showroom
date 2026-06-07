# ECS Slipper Showroom

A modern, responsive product showroom website built for a slipper manufacturing business.

This project includes a public-facing product showcase and an admin panel structure powered by Supabase for managing website content and product-related data.

## 🚀 Live Demo

Live website: `<LIVE_DEMO_LINK>`

## 📌 Project Overview

ECS Slipper Showroom is a business-focused web application designed to present slipper products, company identity, and contact information through a clean and responsive interface.

Unlike a traditional e-commerce platform, this project focuses on product presentation and brand visibility rather than online payments or customer accounts. The project also includes an admin-oriented content management structure using Supabase, making it easier to manage showroom content from a backend service.

## 🛠️ Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui
* Radix UI
* React Router
* Supabase
* React Query
* Lucide React
* Vitest

## ✨ Features

* Responsive product showroom website
* Modern landing page design
* Product and content presentation sections
* Admin panel structure for content management
* Supabase integration for backend/data management
* Mobile-friendly navigation
* Reusable React components
* Clean and professional UI structure
* Contact-oriented layout for business inquiries
* Fast development setup with Vite
* Basic testing setup with Vitest

## 📁 Project Structure

```bash
ecs-slipper-showroom/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
└── README.md
```

## ⚙️ Getting Started

To run the project locally:

```bash
npm install
npm run dev
```

Then open the local development URL shown in the terminal.

## 🏗️ Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🧪 Tests

To run tests:

```bash
npm run test
```

For a single test run:

```bash
npm run test:run
```

## 🔐 Environment Variables

This project uses Supabase for backend/data management. Environment variables should be stored locally and must not be committed to the repository.

Create a local `.env` file if needed:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Do not commit private keys, service role keys, database passwords, or JWT secrets.

## 🎯 Purpose of the Project

This project was created to improve my hands-on experience with React, TypeScript, Supabase, responsive frontend development, component-based architecture, and real-world business website implementation.

It also represents my ability to turn a traditional business idea into a modern, deployable, and manageable web application.

## 📚 What I Learned

During this project, I improved my skills in:

* Building reusable React components
* Creating responsive layouts for desktop and mobile devices
* Structuring a Vite-based React project
* Working with TypeScript in a frontend application
* Integrating Supabase into a React project
* Designing a product showroom experience
* Building an admin-oriented content management structure
* Preparing a frontend project for deployment

## 📄 License

This project is for portfolio and demonstration purposes.
