# Blueflex Slipper Showroom

<<<<<<< ours
Blueflex Slipper Showroom is a multi-page React + TypeScript experience that highlights Blueflex indoor slipper lines, customization workflows, and factory capabilities for wholesale buyers. It is built with Vite, Tailwind CSS, shadcn-ui, React Router, and TanStack Query with multi-language support.

## Prerequisites
- Node.js 18+ (Node 20 LTS recommended for Vite 5)
- npm (bundled with Node.js)

## Getting started
1) Clone the repository and enter the project folder.
2) Install dependencies: `npm install`.
3) Start the local dev server: `npm run dev` (defaults to http://localhost:5173).

## Available scripts
- `npm run dev` � start the Vite dev server with hot reload.
- `npm run build` � create a production build in `dist/`.
- `npm run build:dev` � build in development mode for debugging bundled output.
- `npm run preview` � serve the built `dist/` locally (run after `npm run build`).
- `npm run lint` � lint the project with ESLint.

## Development workflow
- Pages live in `src/pages`, shared components in `src/components`, and routing is defined in `src/App.tsx`.
- Styling uses Tailwind CSS and shadcn-ui; adjust design tokens in `tailwind.config.ts`.
- Locale strings and language handling are under `src/i18n`.

## Testing & quality
- Run `npm run lint` before committing to catch lint and type issues; add tests as needed alongside features.

## Build & deployment
- Build for production with `npm run build`; output files are emitted to `dist/`.
- Preview the production build locally via `npm run preview`.
- Deploy by serving the `dist/` folder on any static host or behind your CI/CD pipeline (e.g., Vercel, Netlify, S3 + CloudFront, or nginx).

## Tech stack
- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn-ui + Radix primitives
- React Router and TanStack Query
=======
Modern, Vite-powered React UI that highlights the Blueflex slipper collection with responsive layouts, animations, and shadcn-ui components.

## Prerequisites
- Node.js **18+** (Node 20 recommended). Install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for easy version management.
- npm (ships with Node.js).

## Developer setup
1. Clone the repository and navigate into it.
   ```sh
   git clone <YOUR_GIT_URL>
   cd ecs-slipper-showroom
   ```
2. Install dependencies.
   ```sh
   npm install
   ```
3. Start the development server with hot reload.
   ```sh
   npm run dev
   ```
   Vite prints the local and network URLs in the terminal (default: http://localhost:5173).

## Available scripts
- **npm run dev** – Start the Vite dev server for local development.
- **npm run build** – Create an optimized production build in the `dist/` directory.
- **npm run build:dev** – Produce a development-mode bundle (useful for integration environments that expect a build artifact but still need readable output).
- **npm run preview** – Serve the contents of `dist/` to verify a production build locally.
- **npm run lint** – Run ESLint across the project source.

## Testing, linting, and builds
- Run linters before committing to keep code quality consistent:
  ```sh
  npm run lint
  ```
- Create a production build to validate that assets compile correctly:
  ```sh
  npm run build
  ```
- Inspect the compiled build locally (after running `npm run build`):
  ```sh
  npm run preview
  ```

## Deployment
1. Ensure dependencies are installed and the project builds successfully (`npm run build`).
2. Deploy the contents of the `dist/` directory to your static hosting of choice (e.g., Netlify, Vercel, or an S3 + CDN setup).
3. If your platform supports build commands, configure it to run `npm install` followed by `npm run build` with Node.js 18+.
>>>>>>> theirs
