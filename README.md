# Apexnix

Apexnix is a pure front-end static website for a B2B bed frame supplier. It uses plain HTML, CSS, and JavaScript with client-side routing, so it can be hosted directly on static hosting services.

## Project Structure

- `index.html` - site shell
- `styles.css` - global styles
- `app.js` - front-end routing and page rendering
- `assets/` - static images
- `404.html` - GitHub Pages fallback for front-end routes
- `_redirects` - Cloudflare Pages fallback for front-end routes
- `.nojekyll` - keeps GitHub Pages from processing the site with Jekyll

## Local Preview

You can open `index.html` directly in a browser, or run any simple static file server from this folder.

Example:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment

### Cloudflare Pages

Use these settings when deploying from GitHub:

- Framework preset: None
- Build command: leave empty
- Build output directory: `/`

### GitHub Actions auto deploy

This repository includes `.github/workflows/cloudflare-pages.yml`, which prepares the static site files and deploys them to the Cloudflare Pages project `apexnix` whenever `main` is pushed.

Before the workflow can deploy, add these GitHub repository secrets:

- `CLOUDFLARE_ACCOUNT_ID` - your Cloudflare account ID
- `CLOUDFLARE_API_TOKEN` - a Cloudflare API token with Account > Cloudflare Pages > Edit permission

If the Cloudflare Pages project uses a different name, update the `--project-name=apexnix` value in the workflow.

The site does not require a Node.js server, API route, database, or other back-end runtime.

### GitHub Pages

This project also supports GitHub Pages project hosting, including URLs like:

```text
https://jax-rene.github.io/apexnix/
```

Recommended GitHub Pages settings:

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/root`

The included `404.html` redirects deep links such as `/apexnix/products` back into the single-page app route, so refreshed or shared subpages continue to work.

## Repository

Target repository: <https://github.com/Jax-Rene/apexnix>
