# Shuffle Lab

A free, step-by-step shuffle dance practice plan built from hand-picked YouTube tutorials.
Astro static site, English only, deployed to GitHub Pages. Progress is saved in the browser (localStorage).

- `requirements.md`: requirements (Korean)
- `research.md`: research notes and video candidates (Korean)

## Develop

```sh
npm install
npm run dev       # http://localhost:4321/shuffle-dance/
npm run build     # static output in dist/
npm run preview
```

## Edit content

Everything lives in `src/data/content.ts`: levels, lessons and highlights.
To swap a video, change its `videoId`. Pages, sitemap and structured data are generated at build time.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository, go to Settings > Pages and set Source to "GitHub Actions".
3. Every push to `main` runs `.github/workflows/deploy.yml`. It sets `SITE` and `BASE`
   from the repository owner and name, so the site works at `https://<owner>.github.io/<repo>/`.

For local builds the defaults in `astro.config.mjs` are `https://example.github.io` and `/shuffle-dance`.
Set the `SITE` and `BASE` environment variables to override them.
