# Apexnix

Apexnix is a prerendered static website for a B2B bed frame supplier. It uses plain HTML, CSS, and JavaScript, with static HTML generated for each public route so search engines and visitors can read page content before JavaScript runs.

## Project Structure

- `index.html` - prerendered homepage
- `products/`, `solutions/`, `capabilities/`, `about/`, `contact/` - prerendered static routes
- `styles.css` - global styles
- `app.js` - route content, metadata, and front-end interactions
- `scripts/prerender.mjs` - generates static route HTML, `sitemap.xml`, and `robots.txt`
- `assets/` - optimized static images
- `robots.txt` and `sitemap.xml` - search engine crawl hints for `https://www.apexnix.com`
- `404.html` - custom noindex page for unknown routes
- `_redirects` - clean trailing-slash redirects for Cloudflare Pages

## Local Preview

Run any simple static file server from this folder.

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Static Generation

After editing route content, metadata, or the canonical domain in `app.js`, regenerate the static pages:

```bash
node scripts/prerender.mjs
```

The canonical production domain is:

```text
https://www.apexnix.com
```

## Deployment

### Cloudflare Pages

Use these settings when deploying from GitHub:

- Framework preset: None
- Build command: `node scripts/prerender.mjs`
- Build output directory: `/`

### GitHub Actions auto deploy

This repository includes `.github/workflows/cloudflare-pages.yml`, which regenerates the static site files and deploys them to the Cloudflare Pages project `apexnix` whenever `main` is pushed.

Before the workflow can deploy, add these GitHub repository secrets:

- `CLOUDFLARE_ACCOUNT_ID` - your Cloudflare account ID
- `CLOUDFLARE_API_TOKEN` - a Cloudflare API token with Account > Cloudflare Pages > Edit permission

If the Cloudflare Pages project uses a different name, update the `--project-name=apexnix` value in the workflow.

The site does not require a Node.js server, API route, database, or other back-end runtime.

## Repository

Target repository: <https://github.com/Jax-Rene/apexnix>
