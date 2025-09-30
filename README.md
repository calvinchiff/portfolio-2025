# Portfolio Website

Personal portfolio website built with Next.js, React, and Tailwind CSS. It includes a project showcase, skills section, and contact information.

## Features

- Responsive design
- About / Skills section
- Project showcase
- Contact form with email and LinkedIn/GitHub links
- SEO friendly (with sitemap)

## Tech Stack

- Framework: Next.js 15.2.0
- Frontend: React 19.0.0, Tailwind CSS 4
- Development Tools: TypeScript 5.0.0
- State Management: Context API for language switching
- Libraries: Framer Motion for animations, Three.js for 3D models

## Installation

Clone the repository:

```bash
git clone https://github.com/calvinchiffot/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Run in development mode:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

## Deployment

1. Build the project on your server:
   ```bash
   npm run build
   ```
2. Start the server:
   ```bash
   npm run start
   ```
3. Recommended: use **pm2** or **systemd** to keep the process running.
4. Put an Nginx reverse proxy in front to serve on port 80/443 with SSL.

## Project Structure

```
.
├── app/
│   ├── components/
│   │   ├── sections/
│   │   └── ui/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── utils/
├── public/
│   ├── contact/
│   ├── data/
├── package.json
├── next-sitemap.config.js
├── postcss.config.mjs
└── tsconfig.json
```

## License

MIT
