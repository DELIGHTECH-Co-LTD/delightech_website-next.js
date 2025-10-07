# Next.js Glassy Dark Landing (TypeScript + Tailwind)

## What's included
- Next.js + TypeScript skeleton
- TailwindCSS + PostCSS config
- Components: Navbar, Hero, Services, About, Team, Showreel, Footer
- Glassy dark styles in `styles/globals.css`
- A sample hero image placed at `public/hero-sample.png`

## How to run
1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000

Replace assets and tweak styles as needed.

## Troubleshooting
- Make sure you have **Node.js v18+** or newer and `npm` (or `pnpm`/`yarn`) installed.
- Run `npm install` (or `pnpm install` / `yarn`) before `npm run dev`.
- If TypeScript complains about missing types, run `npm i -D @types/react @types/react-dom @types/node`.
- If you see an error about `next/types/global`, this project includes a fixed `next-env.d.ts` — try removing `node_modules` and reinstalling.
