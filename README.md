# lykakis.dev

Personal blog built with [VitePress](https://vitepress.dev/) and hosted on GitHub Pages.

### Categories

- **Projects** — open-source work I create and maintain
- **Articles** — notes and thoughts on software engineering
- **Photos projects** — personal photography projects
- **About** — about me

## Use this for your own blog

1. Fork this repository.
2. Enable **GitHub Pages** in your repo settings (Source: GitHub Actions).
3. Edit `docs/.vitepress/config.mts` — change `title`, `description`, and `siteTitle`.
4. Replace `docs/public/CNAME` with your domain (or delete it to use `username.github.io`).
5. Update the nav links in `docs/.vitepress/config.mts`.
6. Replace the content in `docs/` with your own.
7. Push to `main` — GitHub Actions builds and deploys automatically.

### Local development

```bash
npm install
npm run dev     # local dev server
npm run build   # production build
npm run preview # preview build
```

### Structure

```
docs/
├── .vitepress/config.mts   VitePress config
├── projects/               Project pages
├── articles/               Blog articles
├── photos/                 Photo project pages
├── public/                 Static assets (CNAME, photos)
├── index.md                Homepage
└── about.md                About page
```

No article publishing form, no write access for visitors — standard static site on GitHub Pages.
