# Md Tanvir Arabi — Portfolio

Personal portfolio of **Md Tanvir Arabi**, Software Engineer (AI/ML) at Datasoft Manufacturing & Assembly Limited, Dhaka.
Built with **React 19** and **Vite**, with content taken from my CV.

## Features

- **Sections:** hero, about with animated stats, experience timeline, filterable projects, skills, publication and training, education, and contact.
- **Light and dark themes.** The site follows the visitor's system setting until they pick one, then remembers the choice.
- **Project filters** by category: Industry, Machine Learning, NLP, Data Science, Full-Stack, Database, and QA & Testing.
- **Working contact form** with validation, a spam honeypot, and a copy-email button.
- **Downloadable CV** from the navbar, the hero, and the mobile menu.
- **Polish:** scroll-spy navigation, scroll progress bar, back-to-top button, reveal-on-scroll animations, and a typewriter role line.
- **Responsive** from 320px phones to wide desktops, with a full-screen mobile menu.
- **Accessible:** skip link, keyboard focus styles, ARIA labels, and support for the reduced-motion setting.
- **SEO:** meta description, Open Graph tags, and JSON-LD `Person` data.

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

## Editing content

All text lives in one file: [`src/data/portfolio.js`](src/data/portfolio.js).
Update your profile, experience, projects, skills, publications, and education there. The components pick up the changes automatically.

| To change | Edit |
| --- | --- |
| Profile photo | Replace `public/profile.jpg` with a 4:5 portrait, ideally 960 × 1200 px |
| CV download | Replace `public/Md-Tanvir-Arabi-CV.pdf` |
| Colours and fonts | Edit the tokens at the top of `src/styles/base.css` |
| Page title and SEO | Edit `index.html` |

## Contact form

By default, the form opens the visitor's email app with the message already filled in.

To deliver messages straight to your inbox instead:

1. Get a free access key at [web3forms.com](https://web3forms.com) using `tanvirarabi8@gmail.com`.
2. Copy `.env.example` to `.env` and paste the key into `VITE_WEB3FORMS_KEY`.
3. Rebuild the site. If you deploy with a hosting service, add the same variable in its settings.

## Deployment

`npm run build` produces a static site in `dist/` that works on any static host. Asset paths are relative, so it also works from a sub-path such as GitHub Pages.

- **Netlify or Vercel:** import the repository. Use `npm run build` as the build command and `dist` as the output folder.
- **GitHub Pages:** build the site and publish the `dist/` folder, for example with the official *Deploy to GitHub Pages* action.

## Project structure

```
├── index.html              # HTML shell, fonts, SEO tags, theme bootstrap
├── public/                 # Static files: photo, CV, favicon
└── src/
    ├── data/portfolio.js   # All site content
    ├── components/         # One component + stylesheet per section
    ├── hooks/              # Theme, scroll-spy, typewriter, in-view, count-up
    ├── styles/base.css     # Design tokens, reset, shared UI
    ├── App.jsx
    └── main.jsx
```

## License

MIT
