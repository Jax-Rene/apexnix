import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appPath = path.join(rootDir, "app.js");
const appSource = fs.readFileSync(appPath, "utf8");
const stylePath = path.join(rootDir, "styles.css");
const runtimeMarker = "\nfunction getRouteFromLocation()";
const runtimeIndex = appSource.indexOf(runtimeMarker);

if (runtimeIndex === -1) {
  throw new Error("Could not find app runtime marker for prerendering.");
}

const browserFreeSource = `${appSource.slice(0, runtimeIndex)}
globalThis.__apexnix = {
  SITE_URL,
  SITE_NAME,
  CONTACT_EMAIL,
  LOGO_FILE,
  LOGO_DARK_FILE,
  AVATAR_FILE,
  routes,
  routeMeta,
  indexableRoutes,
  imageDimensions,
  routeUrl,
  assetUrl,
  schemasForPath,
};
`;

const context = {
  URL,
  console,
  window: {
    location: {
      protocol: "https:",
      href: "https://www.apexnix.com/",
      pathname: "/",
      hash: "",
    },
  },
  document: {
    currentScript: {
      src: "https://www.apexnix.com/app.js",
    },
  },
};

vm.createContext(context);
vm.runInContext(browserFreeSource, context, { filename: "app.js" });

const site = context.__apexnix;
const appVersion = hashFile(appPath);
const styleVersion = hashFile(stylePath);

function hashFile(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex").slice(0, 10);
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeScriptJson(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function imageSize(src) {
  const fileName = String(src).split("/").pop();
  return site.imageDimensions[fileName] || [];
}

function pageUrl(routePath) {
  return site.routeUrl(routePath);
}

function relativePrefix(routePath) {
  if (routePath === "/") return "./";
  const depth = routePath.replace(/^\/|\/$/g, "").split("/").length;
  return "../".repeat(depth);
}

function rewriteRootAssetPaths(html, routePath) {
  const prefix = relativePrefix(routePath);
  return html
    .replaceAll('src="/assets/', `src="${prefix}assets/`)
    .replaceAll('href="/assets/', `href="${prefix}assets/`);
}

function buildHead(routePath) {
  const meta = site.routeMeta[routePath];
  const canonical = pageUrl(routePath);
  const image = site.assetUrl(meta.image);
  const prefix = relativePrefix(routePath);
  const imagePath = `${prefix}${String(meta.image).replace(/^\//, "")}`;
  const [imageWidth, imageHeight] = imageSize(meta.image);
  const imageSizeMeta = imageWidth && imageHeight
    ? `\n    <meta property="og:image:width" content="${imageWidth}" />\n    <meta property="og:image:height" content="${imageHeight}" />`
    : "";

  return `  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:site_name" content="${escapeHtml(site.SITE_NAME)}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />${imageSizeMeta}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="theme-color" content="#2f3a45" />
    <link rel="icon" href="${prefix}${site.AVATAR_FILE}" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="${prefix}${site.AVATAR_FILE}" />
    <link rel="manifest" href="${prefix}site.webmanifest" />
    <link rel="preload" as="image" href="${escapeHtml(imagePath)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Source+Sans+3:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <script>
      (() => {
        document.documentElement.classList.add("js");
        try {
          const savedTheme = localStorage.getItem("apexnix-theme");
          const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          document.documentElement.dataset.theme = savedTheme || (prefersDark ? "dark" : "light");
        } catch {
          document.documentElement.dataset.theme = "light";
        }
      })();
    </script>
    <link rel="stylesheet" href="${prefix}styles.css?v=${styleVersion}" />
    <script type="application/ld+json" data-route-schema>${escapeScriptJson(site.schemasForPath(routePath))}</script>
  </head>`;
}

function brandMarkup(prefix) {
  return `<span class="brand-logo-set" aria-hidden="true"><img class="brand-logo brand-logo-light" src="${prefix}${site.LOGO_FILE}" alt="" width="1271" height="336" /><img class="brand-logo brand-logo-dark" src="${prefix}${site.LOGO_DARK_FILE}" alt="" width="1271" height="336" /></span>`;
}

function buildHeader(routePath) {
  const prefix = relativePrefix(routePath);
  return `    <header class="site-header">
      <a class="brand" href="/" data-link aria-label="Apexnix">
        ${brandMarkup(prefix)}
      </a>
      <nav class="main-nav" aria-label="Primary navigation">
        <a href="/" data-link>Home</a>
        <div class="nav-group">
          <a href="/products/" data-link>Products</a>
          <div class="dropdown">
            <a href="/products/#product-philosophy" data-link>Product Philosophy</a>
            <a href="/products/metal-bed-frames/" data-link>Metal Bed Frames Collection</a>
            <a href="/products/bamboo-bed-frames/" data-link>Bamboo Bed Frames Collection</a>
            <a href="/products/oem-custom-development/" data-link>OEM / Custom Development</a>
            <a href="/products/#product-comparison" data-link>Product Comparison</a>
          </div>
        </div>
        <a href="/solutions/" data-link>Solutions</a>
        <a href="/capabilities/" data-link>Capabilities</a>
        <a href="/about/" data-link>About Us</a>
        <a href="/contact/" data-link>Contact Us</a>
      </nav>
      <div class="header-actions">
        <button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch theme" aria-pressed="false" title="Switch theme">
          <span class="theme-toggle-icon" aria-hidden="true">
            <svg class="theme-icon theme-icon-moon" viewBox="0 0 24 24" focusable="false">
              <path d="M20.2 14.4A7.7 7.7 0 0 1 9.6 3.8a8.8 8.8 0 1 0 10.6 10.6Z" />
            </svg>
            <svg class="theme-icon theme-icon-sun" viewBox="0 0 24 24" focusable="false">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
            </svg>
          </span>
        </button>
        <a class="header-cta" href="/contact/" data-link>Send Request <span class="soft-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg></span></a>
      </div>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </header>`;
}

function buildFooter(routePath) {
  const prefix = relativePrefix(routePath);
  return `    <footer class="site-footer">
      <div>
        <a class="brand footer-brand" href="/" data-link aria-label="Apexnix">${brandMarkup(prefix)}</a>
        <p>Focused bed frame products and development support for global partners.</p>
      </div>
      <div>
        <strong>Apexnix Co.,Ltd.</strong>
        <p>No.88 Anling 2nd Road , Huli District, Xiamen, China</p>
        <a href="mailto:${site.CONTACT_EMAIL}">${site.CONTACT_EMAIL}</a>
      </div>
      <div class="footer-links">
        <a class="footer-heading" href="/products/" data-link>Bed Frame Sourcing</a>
        <a href="/metal-bed-frame-manufacturer/" data-link>Metal Bed Frame Manufacturer</a>
        <a href="/oem-bed-frame-manufacturer/" data-link>OEM Bed Frame Manufacturer</a>
        <a href="/bed-frame-quality-control/" data-link>Bed Frame Quality Control</a>
        <a href="/metal-bed-frame-production-process/" data-link>Metal Bed Frame Production Process</a>
        <a href="/flat-pack-bed-frame-packaging/" data-link>Flat-Pack Packaging</a>
        <a href="/dormitory-bed-frame-supplier/" data-link>Dormitory Bed Frame Supplier</a>
      </div>
      <div class="footer-links">
        <a class="footer-heading" href="/about/" data-link>Company</a>
        <a href="/products/" data-link>Products</a>
        <a href="/solutions/" data-link>Solutions</a>
        <a href="/capabilities/" data-link>Capabilities</a>
        <a href="/about/" data-link>About</a>
        <a href="/contact/" data-link>Contact</a>
      </div>
    </footer>`;
}

function buildPage(routePath) {
  const render = site.routes[routePath];
  if (!render) throw new Error(`Missing renderer for ${routePath}`);
  const prefix = relativePrefix(routePath);
  const body = rewriteRootAssetPaths(render(), routePath);

  return `<!doctype html>
<html lang="en">
${buildHead(routePath)}
  <body>
${buildHeader(routePath)}
    <main id="app">${body}</main>
${buildFooter(routePath)}
    <script src="${prefix}app.js?v=${appVersion}" defer></script>
  </body>
</html>
`;
}

function outputPath(routePath) {
  if (routePath === "/") return path.join(rootDir, "index.html");
  return path.join(rootDir, routePath.replace(/^\//, ""), "index.html");
}

for (const routePath of site.indexableRoutes) {
  const target = outputPath(routePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, buildPage(routePath));
  console.log(`prerendered ${routePath} -> ${path.relative(rootDir, target)}`);
}

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${site.indexableRoutes.map((routePath) => {
  const meta = site.routeMeta[routePath];
  return `  <url>
    <loc>${pageUrl(routePath)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${meta.priority}</priority>
  </url>`;
}).join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${site.SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(rootDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(rootDir, "robots.txt"), robots);
console.log("wrote sitemap.xml and robots.txt");
