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
- `functions/_middleware.js` - production canonical redirects for `https://www.apexnix.com`

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

## SEO Foundation

The site is generated with canonical URLs, indexable robots meta tags, `robots.txt`, and a sitemap for the canonical domain:

```text
https://www.apexnix.com/sitemap.xml
```

For Google Search Console:

1. Create a Domain property for `apexnix.com`.
2. Verify ownership with the DNS TXT record provided by Google.
3. Submit `https://www.apexnix.com/sitemap.xml`.
4. Use URL Inspection for the nine sitemap URLs and request indexing where needed.

Cloudflare Pages `_redirects` does not support domain-level redirects, so `functions/_middleware.js` handles canonical host and protocol redirects. It redirects `http://*`, `https://apexnix.com/*`, and `https://apexnix.pages.dev/*` to `https://www.apexnix.com/*` with a 301, preserving the path and query string. The middleware also mirrors the trailing-slash redirects as a safeguard, while `_redirects` remains the static path-level fallback.

If Google Search Console reports `Syntax not understood` for a `Content-Signal` line in `robots.txt`, that line is injected by Cloudflare's managed robots.txt setting, not this repository. To keep the public robots file strictly standard, turn off Cloudflare's managed robots.txt / content signals display in the Cloudflare dashboard.

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
