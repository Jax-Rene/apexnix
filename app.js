const scriptUrl = new URL(document.currentScript?.src || "./app.js", window.location.href);
const deployedBase = scriptUrl.pathname.replace(/\/app\.js$/, "").replace(/\/$/, "");
const BASE_PATH = window.location.protocol === "file:" ? "" : deployedBase;
const SITE_URL = "https://www.apexnix.com";
const SITE_NAME = "Apexnix";
const CONTACT_EMAIL = "business@apexnix.com";
const LOGO_FILE = "apexnix-logo-light.svg";
const LOGO_DARK_FILE = "apexnix-logo-dark.svg";
const AVATAR_FILE = "apexnix-avatar.svg";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "596ad054-05e1-4abb-b4c5-d12debc21725";
const THEME_KEY = "apexnix-theme";
const A = window.location.protocol === "file:" ? new URL("assets/", scriptUrl).href : `${BASE_PATH}/assets/`;
const insightsData = globalThis.APEXNIX_INSIGHTS || { categories: [], articles: [] };
const bambooStory = insightsData.bambooStory || insightsData.articles.find((article) => article.slug === "from-bamboo-grove-to-bamboo-bed-frame");
const sizeGuide = insightsData.sizeGuide || insightsData.articles.find((article) => article.slug === "bed-frame-size-guide-us-uk-eu");
const basePattern = new RegExp(`^${BASE_PATH.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=/|$)`);
const img = {
  home1: A + "home-hero-bed-frame-supplier.jpg",
  home2: A + "bed-frame-manufacturing-capability.jpg",
  statement: A + "apexnix-brand-statement-bed-frame-business.jpg",
  metalCard: A + "metal-bed-frame-card.jpg",
  bambooCard: A + "bamboo-bed-frame-card.jpg",
  oemCard: A + "oem-custom-bed-frame-development-card.jpg",
  productHero: A + "bed-frame-products-hero.jpg",
  philosophy: A + "bed-frame-product-philosophy.jpg",
  heavy: A + "heavy-duty-metal-platform-bed-frame.jpg",
  bambooMore: A + "bamboo-bed-frame-style-directions.jpg",
  bambooPlatform: A + "bamboo-platform-bed-frame.jpg",
  bambooMinimal: A + "minimal-bamboo-bed-frame.jpg",
  metalMore: A + "metal-bed-frame-design-directions.jpg",
  oem: A + "oem-custom-bed-frame-development.jpg",
  solutionsHero: A + "bed-frame-solutions-hero.jpg",
  solutionOem: A + "oem-private-label-bed-frame-partners.jpg",
  ecommerce: A + "ecommerce-online-retail-bed-frame-solution.jpg",
  retail: A + "furniture-retail-wholesale-bed-frame-solution.jpg",
  project: A + "accommodation-project-bed-frame-supply.jpg",
  headboard: A + "metal-bed-frame-with-headboard.jpg",
  bunkDormitory: A + "bunk-dormitory-bed-frame-solutions.jpg",
  projectManufacturing: A + "project-based-bed-frame-manufacturing.jpg",
  contactHero: A + "contact-apexnix-bed-frame-project.jpg",
  ourStory: A + "apexnix-bed-frame-supplier-story.jpg",
  capabilitiesHero: A + "bed-frame-supply-capabilities-hero.jpg",
  valueEngineering: A + "value-engineering-bed-frame.jpg",
  oemSupport: A + "oem-custom-support-bed-frame.jpg",
  qualityControl: A + "quality-control-bed-frame-manufacturing.jpg",
  exportSupport: A + "export-support-bed-frame-supply.jpg",
};
const imageDimensions = {
  "home-hero-bed-frame-supplier.jpg": [1200, 675],
  "bed-frame-manufacturing-capability.jpg": [1200, 800],
  "apexnix-brand-statement-bed-frame-business.jpg": [1200, 675],
  "metal-bed-frame-card.jpg": [900, 1124],
  "bamboo-bed-frame-card.jpg": [900, 1026],
  "oem-custom-bed-frame-development-card.jpg": [900, 1029],
  "bed-frame-products-hero.jpg": [1200, 800],
  "bed-frame-product-philosophy.jpg": [1100, 825],
  "heavy-duty-metal-platform-bed-frame.jpg": [1100, 825],
  "bamboo-bed-frame-style-directions.jpg": [1100, 825],
  "bamboo-platform-bed-frame.jpg": [1100, 825],
  "minimal-bamboo-bed-frame.jpg": [1100, 825],
  "metal-bed-frame-design-directions.jpg": [1200, 675],
  "oem-custom-bed-frame-development.jpg": [1200, 631],
  "bed-frame-solutions-hero.jpg": [1200, 908],
  "oem-private-label-bed-frame-partners.jpg": [1200, 675],
  "ecommerce-online-retail-bed-frame-solution.jpg": [1100, 825],
  "furniture-retail-wholesale-bed-frame-solution.jpg": [1100, 825],
  "accommodation-project-bed-frame-supply.jpg": [1100, 825],
  "metal-bed-frame-with-headboard.jpg": [950, 950],
  "bunk-dormitory-bed-frame-solutions.jpg": [1200, 675],
  "project-based-bed-frame-manufacturing.jpg": [950, 950],
  "contact-apexnix-bed-frame-project.jpg": [1200, 800],
  "apexnix-bed-frame-supplier-story.jpg": [1100, 825],
  "bed-frame-supply-capabilities-hero.jpg": [1200, 800],
  "value-engineering-bed-frame.jpg": [700, 631],
  "oem-custom-support-bed-frame.jpg": [1100, 825],
  "quality-control-bed-frame-manufacturing.jpg": [950, 950],
  "export-support-bed-frame-supply.jpg": [950, 950],
  "bamboo-grove-growth-story-hero.webp": [1600, 900],
  "bamboo-grove-growth-story-og.webp": [1200, 630],
  "bamboo-material-from-culm-to-board.webp": [1000, 1000],
  "bamboo-bed-frame-natural-style.webp": [1200, 900],
  "bed-frame-size-guide-hero.svg": [1600, 900],
  "bed-frame-size-guide-hero-og.webp": [1200, 630],
};

const specMetal = [
  ["Market size", "Market-specific size direction worldwide; exact dimensions confirmed by product"],
  ["Frame type", "Platform, headboard, bunk, daybed, foldable, rail frame or custom structure"],
  ["Height and clearance", "Adjusted according to product design, storage direction and use case"],
  ["Structure and support", "Tube layout, center support, legs, slats and connection method"],
  ["Finish and color", "Surface finish and color direction confirmed by model and program"],
  ["Hardware and instructions", "Hardware set, labeling and assembly instructions"],
  ["Packaging", "Flat-pack or project-specific packaging discussion"],
  ["Private label", "Brand labels, artwork and packaging requirements reviewed by project"],
];
const specBamboo = [
  ["Product Types", "Bamboo platform beds; bamboo beds with headboard; minimal bamboo beds; storage-style headboard options; OEM / custom bamboo structures"],
  ["Size Platform", "US: Twin, Twin XL, Full, Queen, King, Cal King / Europe: Single, Double, King, Super King; support custom dimensions"],
  ["Core Height Option", "Standard height 14''; support custom height"],
  ["Structure Options", "Basic bamboo platform frame; bamboo bed with headboard; bamboo bed with storage-style or open-slot headboard"],
  ["Frame Material", "Bamboo-based frame structure, depending on product design and requirement"],
  ["Support System", "Steel slats or customized support structure"],
  ["Surface / Appearance", "Natural bamboo appearance; finish details can be discussed based on product positioning"],
  ["Packaging", "KD / flat-pack packaging; carton, instruction manual, label, and private label options available"],
];
const customMatrix = [
  ["Size and fit", "Target market dimensions, mattress fit and overall product dimensions"],
  ["Structure", "Frame layout, headboard or footboard direction, connections, center support and legs"],
  ["Height", "Overall height, under-bed clearance and use-case requirements"],
  ["Material combination", "Metal structure, bamboo frame with steel slats, and other project-specific combinations"],
  ["Finish and color", "Surface direction and color aligned with the product and channel"],
  ["Support configuration", "Slats, center support, legs and related structural elements"],
  ["Hardware and instructions", "Hardware organization, labels and assembly instructions"],
  ["Packaging and private label", "Carton direction, protection, artwork, labels and channel requirements"],
];

function canonicalInternalHref(href = "/") {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || /^https?:\/\//i.test(href)) return href;
  if (!href.startsWith("/")) return href;
  const [pathPart, hash = ""] = href.split("#");
  const cleanPath = pathPart === "/" ? "/" : pathPart.replace(/\/$/, "");
  const canonicalPath = cleanPath === "/" ? "/" : `${cleanPath}/`;
  return `${canonicalPath}${hash ? `#${hash}` : ""}`;
}

function cta(label = "Send Request", href = "/contact", alt = false) {
  return `<a class="btn ${alt ? "alt" : ""}" href="${canonicalInternalHref(href)}" data-link>${label} ${arrowIcon()}</a>`;
}
function arrowIcon(direction = "right") {
  if (direction === "both") return `<span class="soft-arrow soft-arrow-both" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M4 12h16"></path><path d="m8 6-6 6 6 6"></path><path d="m16 6 6 6-6 6"></path></svg></span>`;
  return `<span class="soft-arrow${direction === "left" ? " soft-arrow-left" : ""}" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg></span>`;
}
function escapeAttr(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function fileNameFromSrc(src) {
  return String(src).split("/").pop().split("?")[0];
}
function imageTag(src, alt, options = {}) {
  const [width, height] = imageDimensions[fileNameFromSrc(src)] || [];
  const priority = Boolean(options.priority);
  const loading = priority ? "eager" : "lazy";
  const dimensions = width && height ? ` width="${width}" height="${height}"` : "";
  const fetchPriority = priority ? ` fetchpriority="high"` : "";
  const sizes = options.sizes ? ` sizes="${escapeAttr(options.sizes)}"` : "";
  return `<img src="${escapeAttr(src)}" alt="${escapeAttr(alt)}"${dimensions} loading="${loading}" decoding="async"${fetchPriority}${sizes} />`;
}
function tags(items, light = false) {
  return `<ul class="tag-list ${light ? "light-tags" : ""}">${items.map((x) => `<li>${x}</li>`).join("")}</ul>`;
}
function table(rows, h1 = "Specification Item", h2 = "Available Options") {
  return `<div class="table-wrap"><table><thead><tr><th>${h1}</th><th>${h2}</th></tr></thead><tbody>${rows.map((r) => `<tr><td data-label="${h1}">${r[0]}</td><td data-label="${h2}">${r[1]}</td></tr>`).join("")}</tbody></table></div>`;
}
function simpleHero({ title, subtitle, body = "", image, tagItems = [], actions = "", eyebrow = "Apexnix" }) {
  return `<section class="hero short">
    <div class="hero-bg active">${imageTag(image, title, { priority: true })}</div>
    <div class="hero-content fade-in">
      <span class="kicker">${eyebrow}</span>
      <h1>${title}</h1>
      <p>${subtitle}</p>${body ? `\n      <p>${body}</p>` : ""}
      ${tagItems.length ? tags(tagItems) : ""}
      ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
    </div>
  </section>`;
}
function productCard(title, body, image, link, button) {
  return `<article class="card fade-in">
    <div class="card-image">${imageTag(image, title)}</div>
    <div class="card-body"><h3>${title}</h3><p>${body}</p>${cta(button, link, true)}</div>
  </article>`;
}
function iconGrid(cards, gridClass = "grid-4") {
  return `<div class="${gridClass}">${cards.map((x) => `<article class="card icon-card fade-in"><span class="line-icon">${x.icon}</span><h3>${x.title}</h3><p>${x.body}</p></article>`).join("")}</div>`;
}
function linkGrid(links) {
  return `<div class="grid-3">${links.map((x) => `<article class="card icon-card link-card fade-in"><h3>${x[0]}</h3><p>${x[1]}</p><div class="actions">${cta(x[2], x[3], true)}</div></article>`).join("")}</div>`;
}
function section(title, intro, body, cls = "", id = "") {
  return `<section class="section ${cls}" ${id ? `id="${id}"` : ""}><div class="container"><div class="section-head fade-in"><span class="kicker">Apexnix</span><h2>${title}</h2>${intro ? `<p>${intro}</p>` : ""}</div>${body}</div></section>`;
}
function faqSection(items = []) {
  return section("Frequently Asked Questions", "", `<div class="article-faq">${items.map((item) => `<details><summary>${item.question}</summary><p>${item.answer}</p></details>`).join("")}</div>`, "alt");
}
function twoCol(title, subtitle, body, image, extra = "", reverse = false, cls = "", id = "") {
  return `<section class="section ${cls}" ${id ? `id="${id}"` : ""}><div class="container split ${reverse ? "reverse" : ""}">
    <div class="fade-in"><span class="kicker">Apexnix</span><h2>${title}</h2><p><strong>${subtitle}</strong></p><p>${body}</p>${extra}</div>
    <div class="image-panel fade-in">${imageTag(image, title)}</div>
  </div></section>`;
}

function formatArticleDate(date) {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
    .format(new Date(`${date}T00:00:00Z`));
}

function articleParagraphs(items = []) {
  return items.map((item) => `<p>${item}</p>`).join("");
}

function articleBullets(items = []) {
  return items.length ? `<ul class="article-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";
}

function articleGroups(items = []) {
  return items.length ? `<div class="article-groups">${items.map((item) => `<section><h3>${item.title}</h3><p>${item.body}</p></section>`).join("")}</div>` : "";
}

function insightFeature({ eyebrow, title, body, linkLabel, className = "" }) {
  return `<section class="section insight-feature ${className}"><div class="container insight-feature__layout">
    <figure class="insight-feature__media fade-in">${imageTag(bambooStory.cardImage, bambooStory.cardAlt, { sizes: "(max-width: 800px) 100vw, 560px" })}</figure>
    <div class="insight-feature__copy fade-in"><span class="kicker">${eyebrow}</span><h2>${title}</h2><p>${body}</p><div class="actions">${cta(linkLabel, `/insights/${bambooStory.slug}`, true)}</div></div>
  </div></section>`;
}

function insightsPage() {
  let selectedCategory = "all";
  try {
    selectedCategory = new URL(window.location.href).searchParams.get("category") || "all";
  } catch {}

  const categorySlug = (category) => category === "All"
    ? "all"
    : category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const categoryLinks = insightsData.categories.map((category) => {
    const slug = categorySlug(category);
    const href = slug === "all" ? "/insights/" : `/insights/?category=${slug}`;
    return `<a class="${slug === selectedCategory ? "active" : ""}" href="${href}" ${slug === selectedCategory ? 'aria-current="page"' : ""}>${category}</a>`;
  }).join("");

  const cards = insightsData.articles
    .filter((article) => article.slug !== bambooStory.slug)
    .filter((article) => selectedCategory === "all" || article.categorySlug === selectedCategory)
    .map((article) => `<article class="insight-card fade-in" data-insight-category="${escapeAttr(article.categorySlug)}">
      <a class="insight-card__media" href="/insights/${article.slug}/" data-link aria-label="Read ${escapeAttr(article.shortTitle)}">${imageTag(article.cardImage, article.cardAlt, { sizes: "(max-width: 800px) 100vw, 560px" })}</a>
      <div class="insight-card__body"><span class="kicker">${article.category}</span><h3><a href="/insights/${article.slug}/" data-link>${article.shortTitle}</a></h3><p>${article.excerpt}</p><div class="insight-card__meta"><time datetime="${article.publishedAt}">${formatArticleDate(article.publishedAt)}</time><span>${article.readingTime}</span></div><div class="actions">${cta("Read Guide", `/insights/${article.slug}`, true)}</div></div>
    </article>`).join("");

  const selectedLabel = insightsData.categories.find((category) => categorySlug(category) === selectedCategory) || "All";
  const showFeaturedArticle = selectedCategory === "all" || selectedCategory === bambooStory.categorySlug;
  const showArticleLibrary = Boolean(cards) || !showFeaturedArticle;

  return `<section class="section insights-index-hero"><div class="container">
    <div class="insights-index-hero__copy fade-in"><span class="kicker">Apexnix Insights</span><h1>Bed Frame Insights for Better Product and Sourcing Decisions</h1><p>Practical articles on bed frame materials, structure, manufacturing, packaging, quality control, OEM development, and market-fit product planning.</p></div>
    <nav class="insights-categories" aria-label="Insight categories">${categoryLinks}</nav>
  </div></section>
  ${showFeaturedArticle ? `<section class="section alt insights-featured"><div class="container">
    <div class="section-head fade-in"><span class="kicker">Featured Article</span><h2>Product &amp; Material</h2></div>
    <article class="featured-article fade-in">
      <a class="featured-article__media" href="/insights/${bambooStory.slug}/" data-link aria-label="Read ${escapeAttr(bambooStory.shortTitle)}">${imageTag(bambooStory.cardImage, bambooStory.cardAlt, { sizes: "(max-width: 800px) 100vw, 650px" })}</a>
      <div class="featured-article__body"><span class="kicker">${bambooStory.category}</span><h3><a href="/insights/${bambooStory.slug}/" data-link>${bambooStory.shortTitle}</a></h3><p>${bambooStory.excerpt}</p><div class="actions">${cta("Read Article", `/insights/${bambooStory.slug}`, true)}</div></div>
    </article>
  </div></section>` : ""}
  ${showArticleLibrary ? `<section class="section insights-library"><div class="container">
    <div class="section-head fade-in"><span class="kicker">${selectedLabel}</span><h2>${selectedCategory === "sourcing-guides" ? "Sourcing Guides" : "Latest Guides & Articles"}</h2></div>
    ${cards ? `<div class="insights-grid">${cards}</div>` : `<p class="insights-empty">No additional articles are available in this category yet.</p>`}
  </div></section>` : ""}`;
}

function renderArticleSection(sectionData) {
  if (sectionData.kind === "material") {
    return `<section class="article-section article-section--material" id="${sectionData.id}">
      <div class="article-media-split">
        <figure class="article-media-split__figure">${imageTag(bambooStory.materialImage, bambooStory.materialAlt, { sizes: "(max-width: 800px) 100vw, 360px" })}<figcaption>${bambooStory.materialCaption}</figcaption></figure>
        <div class="article-media-split__copy"><h2>${sectionData.title}</h2>${articleParagraphs(sectionData.lead)}</div>
      </div>
      <div class="article-process-content"><p>${sectionData.transition}</p><ol class="article-process">${sectionData.steps.map((step) => `<li>${step}</li>`).join("")}</ol>${articleParagraphs(sectionData.paragraphs)}</div>
    </section>`;
  }

  const content = [
    `<h2>${sectionData.title}</h2>`,
    articleParagraphs(sectionData.paragraphs),
    articleBullets(sectionData.bullets),
    articleParagraphs(sectionData.afterBullets),
    articleBullets(sectionData.secondaryBullets),
    articleGroups(sectionData.groups),
    sectionData.closing ? `<p>${sectionData.closing}</p>` : "",
    sectionData.productFigure ? `<figure class="article-figure article-figure--product">${imageTag(bambooStory.productImage, bambooStory.productAlt, { sizes: "(max-width: 800px) 100vw, 820px" })}<figcaption>${bambooStory.productCaption}</figcaption></figure>` : "",
  ].filter(Boolean);

  return `<section class="article-section" id="${sectionData.id}">
    ${content.join("\n    ")}
  </section>`;
}

function articlePage() {
  const tocItems = [...bambooStory.sections.map((item) => ({ id: item.id, title: item.title })), { id: "frequently-asked-questions", title: "Frequently Asked Questions" }];
  const toc = `<ol>${tocItems.map((item) => `<li><a href="#${item.id}" data-link>${item.title}</a></li>`).join("")}</ol>`;
  const video = bambooStory.video;
  return `<article class="insight-article">
    <header class="article-header section"><div class="container">
      <nav class="article-breadcrumb" aria-label="Breadcrumb"><ol>
        <li><a href="/" data-link>Home</a></li><li><a href="/insights/" data-link>Insights</a></li><li><a href="/insights/?category=product-material">Product &amp; Material</a></li><li><span aria-current="page">${bambooStory.shortTitle}</span></li>
      </ol></nav>
      <div class="article-heading fade-in"><span class="kicker">${bambooStory.category}</span><h1>${bambooStory.title}</h1><p class="article-intro">${bambooStory.intro}</p><div class="article-meta"><time datetime="${bambooStory.publishedAt}">${formatArticleDate(bambooStory.publishedAt)}</time><span>${bambooStory.readingTime}</span><span>Reviewed by ${bambooStory.author}</span></div></div>
      <figure class="article-hero-media fade-in">${imageTag(bambooStory.heroImage, bambooStory.heroAlt, { priority: true, sizes: "(max-width: 768px) 100vw, 1200px" })}<figcaption>${bambooStory.heroCaption}</figcaption></figure>
    </div></header>
    <div class="article-layout container">
      <main class="article-content">
        <details class="article-mobile-toc"><summary>On this page</summary>${toc}</details>
        <section class="article-opening">${articleParagraphs(bambooStory.opening.paragraphs)}${articleBullets(bambooStory.opening.bullets)}<p>${bambooStory.opening.closing}</p><blockquote class="article-key-message">${bambooStory.opening.keyMessage}</blockquote></section>
        <section class="article-video-section" aria-labelledby="bamboo-story-video-title">
          <div class="article-video-section__heading"><span class="kicker">WATCH THE STORY</span><h2 id="bamboo-story-video-title">${video.name}</h2><p>${video.description}</p></div>
          <video class="article-video" controls playsinline preload="metadata" poster="${video.poster}" width="1280" height="720" data-lazy-video>
            <source data-src="${video.contentUrl}" type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </section>
        ${bambooStory.sections.map(renderArticleSection).join("")}
        <section class="article-section article-faq" id="frequently-asked-questions"><h2>Frequently Asked Questions</h2>${bambooStory.faqs.map((item) => `<details><summary>${item.question}</summary><p>${item.answer}</p></details>`).join("")}</section>
      </main>
      <aside class="article-toc" aria-label="On this page"><strong>On this page</strong>${toc}</aside>
    </div>
    <section class="section article-cta"><div class="container"><div class="article-cta__inner fade-in"><span class="kicker">Bamboo Bed Frame Development</span><h2>Exploring a Bamboo Bed Frame Product Line?</h2><p>Apexnix supports bamboo bed frame development for retail, online and private-label programs, combining bamboo frames with steel slats and market-specific product planning. Share your target market, product direction and packaging requirements to start the discussion.</p><p><a href="/products/bamboo-bed-frames/" data-link>bamboo bed frames for B2B product lines</a></p><div class="actions">${cta("Explore Bamboo Bed Frames", "/products/bamboo-bed-frames")} ${cta("Contact Apexnix", "/contact", true)}</div></div></div></section>
  </article>`;
}

function articleDataTable({ caption, headers, rows, label }) {
  return `<div class="article-table-wrap" role="region" aria-label="${escapeAttr(label || caption)}" tabindex="0">
    <table class="article-data-table">
      <caption>${caption}</caption>
      <thead><tr>${headers.map((header) => `<th scope="col">${header}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((row) => `<tr>${row.map((cell, index) => index === 0 ? `<th scope="row">${cell}</th>` : `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  </div>`;
}

function sizeGuideLayerDiagram() {
  return `<figure class="size-layer-diagram">
    <svg viewBox="0 0 760 510" role="img" aria-labelledby="size-layer-title size-layer-desc">
      <title id="size-layer-title">Mattress, inner fit and overall bed frame footprint</title>
      <desc id="size-layer-desc">Three nested rectangles distinguish the nominal mattress area, the inner frame fit and the maximum overall frame footprint.</desc>
      <defs>
        <marker id="size-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 10 5 0 10Z" /></marker>
      </defs>
      <rect class="size-layer-diagram__overall" x="85" y="58" width="590" height="350" rx="24" />
      <rect class="size-layer-diagram__inner" x="136" y="108" width="488" height="250" rx="16" />
      <rect class="size-layer-diagram__mattress" x="174" y="142" width="412" height="182" rx="10" />
      <path class="size-layer-diagram__arrow" d="M174 370H586" marker-start="url(#size-arrow)" marker-end="url(#size-arrow)" />
      <path class="size-layer-diagram__arrow" d="M648 108V358" marker-start="url(#size-arrow)" marker-end="url(#size-arrow)" />
      <g class="size-layer-diagram__labels">
        <text x="380" y="240" text-anchor="middle">Nominal mattress</text>
        <text x="380" y="94" text-anchor="middle">Inner mattress-fit dimensions</text>
        <text x="380" y="448" text-anchor="middle">Overall bed frame footprint</text>
      </g>
    </svg>
  </figure>`;
}

function sizeGuidePage() {
  const tocItems = [
    { id: "why-bed-size-names-do-not-travel-well", title: "Why Bed Size Names Do Not Travel Well" },
    { id: "us-uk-and-european-mattress-size-reference", title: "US, UK and European Mattress Size Reference" },
    { id: "closest-comparisons-are-not-exact-equivalents", title: "Closest Comparisons Are Not Exact Equivalents" },
    { id: "mattress-size-is-not-the-same-as-bed-frame-size", title: "Mattress Size Is Not the Same as Bed Frame Size" },
    ...sizeGuide.sizingLayers.map((item) => ({ id: item.id, title: item.title, level: 3 })),
    { id: "why-the-finished-frame-footprint-varies", title: "Why the Finished Frame Footprint Varies" },
    { id: "what-changes-when-a-bed-frame-changes-size", title: "What Changes When a Bed Frame Changes Size" },
    ...sizeGuide.sizeChangeGroups.map((item) => ({ id: item.id, title: item.title, level: 3 })),
    { id: "market-specific-considerations-for-b2b-buyers", title: "Market-Specific Considerations for B2B Buyers" },
    ...sizeGuide.marketGroups.map((item) => ({ id: item.id, title: item.title, level: 3 })),
    { id: "b2b-bed-frame-size-confirmation-checklist", title: "B2B Bed Frame Size Confirmation Checklist" },
    { id: "example-of-a-clear-buyer-size-brief", title: "Example of a Clear Buyer Size Brief" },
    { id: "how-apexnix-supports-market-specific-development", title: "How Apexnix Supports Market-Specific Development" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
    ...sizeGuide.faqs.map((item) => ({ id: item.id, title: item.question, level: 3 })),
    { id: "confirm-the-market-before-confirming-the-size", title: "Confirm the Market Before Confirming the Size" },
    { id: "planning-a-bed-frame-range-for-a-specific-market", title: "Planning a Bed Frame Range for a Specific Market?" },
    { id: "reference-note", title: "Reference Note" },
  ];
  const toc = `<ol>${tocItems.map((item) => `<li class="${item.level === 3 ? "toc-level-3" : ""}"><a href="#${item.id}" data-link>${item.title}</a></li>`).join("")}</ol>`;

  const sizeTable = articleDataTable({
    caption: "Common nominal mattress size references for early B2B discussion",
    label: "US, UK and European mattress size reference table",
    headers: ["Market", "Common label", "Nominal mattress size", "B2B interpretation"],
    rows: sizeGuide.sizeRows,
  });
  const comparisonTable = articleDataTable({
    caption: "Closest cross-market comparisons are not exact equivalents",
    label: "Cross-market mattress size comparison table",
    headers: ["Reference comparison", "What looks similar", "Why the buyer must still confirm"],
    rows: sizeGuide.comparisonRows,
  });
  const briefTable = articleDataTable({
    caption: "Example buyer information — not a fixed Apexnix product specification",
    label: "Example B2B buyer size brief",
    headers: ["Field", "Example buyer information"],
    rows: sizeGuide.briefRows,
  });

  return `<article class="insight-article size-guide-page">
    <header class="article-header section"><div class="container">
      <nav class="article-breadcrumb" aria-label="Breadcrumb"><ol>
        <li><a href="/" data-link>Home</a></li><li><a href="/insights/" data-link>Insights</a></li><li><a href="/insights/?category=sourcing-guides">Sourcing Guides</a></li><li><span aria-current="page">${sizeGuide.shortTitle}</span></li>
      </ol></nav>
      <div class="article-heading fade-in"><span class="kicker">${sizeGuide.category}</span><h1>${sizeGuide.title}</h1><p class="article-intro">${sizeGuide.intro}</p><div class="article-meta"><time datetime="${sizeGuide.publishedAt}">${formatArticleDate(sizeGuide.publishedAt)}</time><span>${sizeGuide.readingTime}</span><span>Reviewed by ${sizeGuide.author}</span></div></div>
      <figure class="article-hero-media article-hero-media--technical fade-in">${imageTag(sizeGuide.heroImage, sizeGuide.heroAlt, { priority: true, sizes: "(max-width: 768px) 100vw, 1200px" })}</figure>
    </div></header>
    <div class="article-layout container">
      <div class="article-content">
        <details class="article-mobile-toc"><summary>On this page</summary>${toc}</details>
        <section class="article-opening">${articleParagraphs(sizeGuide.opening)}<blockquote class="article-key-message"><strong>Core sizing rule</strong>${sizeGuide.keyMessage}</blockquote></section>

        <section class="article-section" aria-labelledby="why-bed-size-names-do-not-travel-well"><h2 id="why-bed-size-names-do-not-travel-well">Why Bed Size Names Do Not Travel Well</h2>
          <p>Bed and mattress terminology developed differently across markets. The United States commonly uses inch-based names such as Twin, Full, Queen and King. The United Kingdom uses names such as Single, Small Double, Double and King, with dimensions that do not match the American system. Continental European buyers often work more directly with metric dimensions, such as 90 x 200 cm or 160 x 200 cm, although local naming and commonly stocked sizes can still vary by country and retailer.</p>
          <p>This means that a size name is a market label, not a universal engineering specification.</p>
          <p>Even when two sizes appear close, a difference of a few centimetres can affect whether the mattress sits correctly inside the frame, whether gaps are visible around the mattress, and whether the finished product can be described accurately in a retail listing.</p>
        </section>

        <section class="article-section" aria-labelledby="us-uk-and-european-mattress-size-reference"><h2 id="us-uk-and-european-mattress-size-reference">US, UK and European Mattress Size Reference</h2>
          <p>The dimensions below are commonly referenced nominal mattress sizes. They are useful for early product discussions, but they should not replace the approved product drawing, the buyer's market requirement or the final product specification.</p>
          ${sizeTable}
          <p>Additional sizes such as US Twin XL, California King, UK Super King and country-specific European dimensions may also be commercially important. They should be added to a product range only when they match the intended market and channel.</p>
        </section>

        <section class="article-section" aria-labelledby="closest-comparisons-are-not-exact-equivalents"><h2 id="closest-comparisons-are-not-exact-equivalents">Closest Comparisons Are Not Exact Equivalents</h2>
          <p>Cross-market comparisons can be useful during an initial discussion, but the phrase closest equivalent should never be interpreted as automatically compatible.</p>
          ${comparisonTable}
          <p>For product development, the correct question is not 'What is the European equivalent of a US Queen?' The correct question is 'What exact mattress dimensions and retail size name does the target market require?'</p>
        </section>

        <section class="article-section" aria-labelledby="mattress-size-is-not-the-same-as-bed-frame-size"><h2 id="mattress-size-is-not-the-same-as-bed-frame-size">Mattress Size Is Not the Same as Bed Frame Size</h2>
          <p>A mattress dimension describes the nominal sleeping surface. It does not automatically describe the finished footprint of the bed frame.</p>
          ${sizeGuideLayerDiagram()}
          <div class="article-groups size-layer-definitions">${sizeGuide.sizingLayers.map((item) => `<section aria-labelledby="${item.id}"><h3 id="${item.id}">${item.title}</h3><p>${item.body}</p></section>`).join("")}</div>
          <aside class="article-note" aria-label="No universal frame-addition formula"><strong>No universal frame-addition formula</strong><p>Consumer guides sometimes estimate that a bed frame adds a few inches around a mattress. That estimate may help with room planning, but it is not precise enough for B2B product development. A platform frame, decorative headboard bed, bamboo frame, bunk bed or upholstered structure can have a very different finished footprint.</p></aside>
        </section>

        <section class="article-section" aria-labelledby="why-the-finished-frame-footprint-varies"><h2 id="why-the-finished-frame-footprint-varies">Why the Finished Frame Footprint Varies</h2>
          <p>Two bed frames designed for the same mattress can have different overall dimensions. The difference may come from:</p>${articleBullets(sizeGuide.footprintFactors)}
          <p>This is why a B2B specification should record both the intended mattress fit and the maximum finished product dimensions.</p>
        </section>

        <section class="article-section" aria-labelledby="what-changes-when-a-bed-frame-changes-size"><h2 id="what-changes-when-a-bed-frame-changes-size">What Changes When a Bed Frame Changes Size</h2>
          <p>Changing a bed frame from one regional size to another is not always a simple scale adjustment. The full product system may need to be reviewed.</p>
          <div class="article-groups">${sizeGuide.sizeChangeGroups.map((item) => `<section aria-labelledby="${item.id}"><h3 id="${item.id}">${item.title}</h3><p>${item.body}</p></section>`).join("")}</div>
        </section>

        <section class="article-section" aria-labelledby="market-specific-considerations-for-b2b-buyers"><h2 id="market-specific-considerations-for-b2b-buyers">Market-Specific Considerations for B2B Buyers</h2>
          <div class="article-groups market-groups">${sizeGuide.marketGroups.map((item) => `<section aria-labelledby="${item.id}"><h3 id="${item.id}">${item.title}</h3><p>${item.body}</p></section>`).join("")}</div>
        </section>

        <section class="article-section size-guide-checklist" aria-labelledby="b2b-bed-frame-size-confirmation-checklist" data-size-guide-checklist>
          <div class="checklist-print-preview-bar" aria-live="polite">
            <div class="checklist-print-preview-copy"><strong>PDF checklist preview</strong><span data-checklist-print-status>Download the ready-to-use A4 PDF checklist below. No print dialog is required.</span></div>
            <div class="checklist-print-preview-actions"><button class="btn alt" type="button" data-close-checklist-print>Back to Guide</button><a class="btn" href="/output/pdf/apexnix-b2b-bed-frame-size-confirmation-checklist.pdf" download="apexnix-b2b-bed-frame-size-confirmation-checklist.pdf" data-download-checklist-pdf>Download PDF Checklist</a></div>
          </div>
          <div class="checklist-heading"><div><span class="kicker">Printable sourcing tool</span><h2 id="b2b-bed-frame-size-confirmation-checklist">B2B Bed Frame Size Confirmation Checklist</h2></div><button class="btn alt checklist-print-button" type="button" data-open-checklist-print>View / Download PDF</button></div>
          <p>Before requesting a quotation, sample or new product development, the buyer should provide the information currently available. Not every field needs to be final at the first discussion, but each item should be confirmed before production approval.</p>
          <div class="checklist-print-meta"><strong>Apexnix</strong><span>Global Bed Frame Size Guide for B2B Buyers</span><span>https://www.apexnix.com/insights/bed-frame-size-guide-us-uk-eu/</span></div>
          <ul class="size-guide-checklist__items">${sizeGuide.checklist.map((item) => `<li><span aria-hidden="true"></span>${item}</li>`).join("")}</ul>
          <p class="checklist-disclaimer"><strong>Reference note:</strong> ${sizeGuide.disclaimer}</p>
        </section>

        <section class="article-section" aria-labelledby="example-of-a-clear-buyer-size-brief"><h2 id="example-of-a-clear-buyer-size-brief">Example of a Clear Buyer Size Brief</h2>
          <p>A useful first brief does not need to contain a finished engineering drawing. It needs to remove the main market and sizing ambiguity.</p>
          ${briefTable}
          <p>This brief gives the supplier enough context to review the product direction without pretending that every technical detail has already been finalized.</p>
        </section>

        <section class="article-section" aria-labelledby="how-apexnix-supports-market-specific-development"><h2 id="how-apexnix-supports-market-specific-development">How Apexnix Supports Market-Specific Development</h2>
          <p>Apexnix supports both ground-up development of new bed frame structures and practical adaptation of existing platforms. A market-size adaptation may include the mattress fit, overall dimensions, height, support configuration, hardware, finish, labels, instructions and packaging.</p>
          <p>Because these elements work as one product system, feasibility should be reviewed as a complete combination rather than as a single size change.</p>
          <p>Buyers can begin with a target market, a mattress size, a product reference or an existing design direction. The next step is to identify which specifications are already fixed and which items still require product and manufacturing review.</p>
          <p>Review our <a href="/products/oem-custom-development/" data-link>custom bed frame development support</a>.</p>
          <p>Explore our <a href="/products/metal-bed-frames/" data-link>metal bed frame collection</a> or <a href="/products/bamboo-bed-frames/" data-link>bamboo bed frame collection</a>.</p>
        </section>

        <section class="article-section article-faq" aria-labelledby="frequently-asked-questions"><h2 id="frequently-asked-questions">Frequently Asked Questions</h2>${sizeGuide.faqs.map((item) => `<details><summary><h3 id="${item.id}">${item.question}</h3></summary><p>${item.answer}</p></details>`).join("")}</section>

        <section class="article-section" aria-labelledby="confirm-the-market-before-confirming-the-size"><h2 id="confirm-the-market-before-confirming-the-size">Confirm the Market Before Confirming the Size</h2>
          <p>A successful bed frame program begins with a shared definition of size.</p>
          <p>Regional names are useful for sales and communication, but exact dimensions are required for development. Mattress size, inner fit, overall frame dimensions and packaged dimensions should be treated as separate specifications.</p>
          <p>When the target market and dimensional requirements are clear, the buyer and manufacturer can make better decisions about structure, components, packaging, labels and the final SKU range.</p>
        </section>

        <section class="article-section size-guide-inline-cta" aria-labelledby="planning-a-bed-frame-range-for-a-specific-market"><span class="kicker">Market-specific development</span><h2 id="planning-a-bed-frame-range-for-a-specific-market">Planning a Bed Frame Range for a Specific Market?</h2>
          <p>Share the target country, mattress size and product direction currently available. Apexnix will help identify the dimensions and product details that need to be confirmed before development moves forward.</p>
          <div class="actions">${cta("Review Custom Development Support", "/products/oem-custom-development")} ${cta("Send a Bed Frame Sizing Request", "/contact", true)}</div>
        </section>

        <section class="article-section article-reference-note" aria-labelledby="reference-note"><h2 id="reference-note">Reference Note</h2>
          <p>${sizeGuide.disclaimer}</p>
          <p>Industry references: International Sleep Products Association, Voluntary Dimensional Guidelines for Bedding; Better Sleep Council, Mattress Sizes; National Bed Federation, Regulations &amp; Standards.</p>
          <p class="reference-links">Reference URLs: <a href="https://sleepproducts.org/publications/voluntary-dimensional-guidelines-for-bedding-products-components/">https://sleepproducts.org/publications/voluntary-dimensional-guidelines-for-bedding-products-components/</a> | <a href="https://bettersleep.org/mattress-sizes/">https://bettersleep.org/mattress-sizes/</a> | <a href="https://www.bedfed.org.uk/resources/regulations-standards/">https://www.bedfed.org.uk/resources/regulations-standards/</a></p>
        </section>
      </div>
      <aside class="article-toc" aria-label="On this page"><strong>On this page</strong>${toc}</aside>
    </div>
  </article>`;
}

function home() {
  return `<section class="hero" data-carousel>
    ${[
      [img.home1, "B2B Metal & Bamboo Bed Frame Supplier", "Apexnix helps global partners develop practical, cost-efficient, and market-ready bed frame products, including metal bed frames, bamboo bed frames, and OEM/custom bed frame solutions.", ["25+ Years Bed Frame Manufacturing Know-How", "Metal & Bamboo Bed Frame Product Directions", "Flat-Pack and Easy-Assembly Support", "OEM / Custom Development Discussion", "Packaging, Quality and Export Coordination"], cta("Explore Bed Frame Products", "/products") + cta("Send Bed Frame Sourcing Request", "/contact", true)],
      [img.home2, "Focused Manufacturing Know-How", "With long-term focus on bed frame structure, packaging, assembly, and quality control, we build products that balance strength, cost efficiency, and reliable supply.", [], cta("View Manufacturing and Quality Control Capabilities", "/capabilities")],
      [img.oem, "Beyond Products, We Help You Build the Right Bed Frame Line", "We work with partners to understand their market, channel, product positioning, packaging needs, and long-term supply plan.", [], cta("Discuss Your Bed Frame Project", "/contact")],
    ].map((s, i) => `<div class="hero-bg ${i === 0 ? "active" : ""}">${imageTag(s[0], s[1], { priority: i === 0 })}</div>
      <div class="hero-content slide-copy ${i === 0 ? "active" : ""}" ${i ? "hidden" : ""}>
        <span class="kicker">Focused B2B Bed Frame Supplier</span>${i === 0 ? `<h1>${s[1]}</h1>` : `<p class="hero-slide-title">${s[1]}</p>`}<p>${s[2]}</p>${tags(s[3])}<div class="hero-actions">${s[4]}</div>
      </div>`).join("")}
    <div class="hero-arrows"><button class="icon-button" data-prev aria-label="Previous slide">${arrowIcon("left")}</button><button class="icon-button" data-next aria-label="Next slide">${arrowIcon()}</button></div>
    <div class="hero-dots">${[0,1,2].map((_, i) => `<button class="${i === 0 ? "active" : ""}" data-dot="${i}" aria-label="Show slide ${i + 1}"></button>`).join("")}</div>
  </section>
  ${twoCol("Better Bed Frames. Better Business Conversations.", "", "With years of focused experience in bed frame manufacturing, we understand that a competitive bed frame is not only about production.<br><br>It also needs the right structure, reliable quality, efficient packaging, easy assembly, and a cost-performance balance that supports your business model.<br><br>That is why we combine manufacturing know-how with market understanding, helping partners build bed frame products that are not only well-made, but ready for real sales channels.", img.statement, "", false)}
  ${section("Focused Bed Frame Products", "Instead of offering every type of furniture, we focus on bed frame products. This allows us to go deeper into structure, packaging, assembly, cost balance, and channel needs.", `<div class="grid-3">
    ${productCard("Metal Bed Frame Collection", "Practical and cost-efficient metal bed frame solutions for retail, online sales, wholesale, and project supply.", img.metalCard, "/products/metal-bed-frames", "Explore Metal Bed Frame Collection")}
    ${productCard("Bamboo Bed Frame Collection", "A differentiated natural-style bed frame option for partners looking to expand into warm, natural-style, or compact living product lines.", img.bambooCard, "/products/bamboo-bed-frames", "Explore Bamboo Bed Frame Collection")}
    ${productCard("OEM / Custom Bed Frame Development", "Flexible support for size, color, structure, packaging, private label, and target-price development.", img.oemCard, "/products/oem-custom-development", "Explore OEM Bed Frame Development")}
  </div>`, "alt")}
  ${section("Bed Frame Supply Support", "A stronger bed frame program depends on product direction, manufacturing support, packaging planning, and quality-control discussion.", linkGrid([
    ["Metal Bed Frame Manufacturer", "Manufacturing and development support for retail, wholesale, project, and private-label metal bed frame programs.", "Metal Bed Frame Manufacturer", "/metal-bed-frame-manufacturer"],
    ["OEM Bed Frame Manufacturer", "OEM and custom development support for partners planning market-fit bed frame product lines.", "OEM Bed Frame Manufacturer", "/oem-bed-frame-manufacturer"],
    ["Quality and Packaging Support", "Review quality control and flat-pack packaging topics that affect B2B bed frame sourcing.", "View Quality Control", "/bed-frame-quality-control"],
  ]))}
  ${insightFeature({
    eyebrow: "Latest Insight",
    title: "From Bamboo Grove to Bamboo Bed Frame",
    body: "Bamboo brings more than a natural appearance. Explore how its growth pattern, engineered processing, and product positioning come together in a modern bamboo bed frame.",
    linkLabel: "Read the Material Story",
    className: "alt",
  })}
  ${section("What Makes Us Different", "We combine bed frame manufacturing know-how with global business thinking, so our cooperation starts before the quotation.", iconGrid([
    { icon: "◇", title: "Value-Engineered Products", body: "We balance structure, cost, quality, packaging, and assembly for stronger product competitiveness." },
    { icon: arrowIcon("both"), title: "Channel-Fit Solutions", body: "We develop bed frame solutions based on how you sell: online, retail, wholesale, or project supply." },
    { icon: "□", title: "Flat-Pack & Easy Assembly", body: "We focus on carton efficiency, clear instructions, and lower after-sales risk." },
    { icon: "＋", title: "Business-Oriented Partnership", body: "We discuss your market, your customer, and your product line strategy." },
  ]))}
  <section class="section cta-band">${imageTag(img.project, "Export-ready bed frame supply")}<div class="container fade-in"><h2>Ready to Build Your Bed Frame Product Line?</h2><p>Share your market, sales channel, product idea, and supply needs. We will help you explore suitable bed frame solutions that match your business.</p><div class="actions">${cta("Send Bed Frame Sourcing Request", "/contact")}</div></div></section>`;
}

function products() {
  return `${simpleHero({
    title: "Bed Frame Products for B2B Sourcing",
    subtitle: "Apexnix focuses on bed frame products for global B2B partners, covering practical metal bed frames, differentiated bamboo bed frames, and OEM/custom development support.",
    body: "Our product structure is designed for retailers, online brands, wholesalers, project partners, and private-label programs that need market-ready bed frame solutions.",
    image: img.productHero,
    tagItems: ["Metal Bed Frames", "Bamboo Bed Frames", "OEM / Custom Development", "Market-Ready Product Lines"],
    actions: cta("Explore Bed Frame Product Collections", "#collections") + cta("Send Bed Frame Sourcing Request", "/contact", true),
  })}
  ${twoCol("Focused Categories. Flexible Development.", "", "For partners, a bed frame is not only a product to manufacture. It must fit a sales channel, a commercial positioning, a packaging requirement, an assembly experience, and a long-term supply plan. That is why we focus on value-engineered bed frame products, balancing structure, material, cost, packaging, assembly, and market competitiveness.", img.philosophy, "", false, "alt", "product-philosophy")}
  ${section("Product Collections", "Our product structure is built around three core directions: metal bed frames, bamboo bed frames, and custom development support.", `<div id="collections" class="grid-3">
    ${productCard("Metal Bed Frames Collection", "Practical and cost-efficient metal bed frame directions for retail, online sales, wholesale, accommodation projects, and private-label programs.", img.metalCard, "/products/metal-bed-frames", "Explore Metal Bed Frames")}
    ${productCard("Bamboo Bed Frames Collection", "Natural-style bamboo bed frame directions for partners looking to add warm, differentiated, and lifestyle-friendly products to their collections.", img.bambooCard, "/products/bamboo-bed-frames", "Explore Bamboo Bed Frames")}
    ${productCard("OEM / Custom Bed Frame Development", "Development support for custom sizes, structures, colors, materials, packaging, private label needs, and target-price product planning.", img.oemCard, "/products/oem-custom-development", "Explore OEM Bed Frame Development")}
  </div>`)}
  ${section("More Ways to Explore Bed Frame Supply", "A stronger bed frame program depends on the right product direction, development support, packaging plan, and quality-control discussion.", linkGrid([
    ["Metal Bed Frame Manufacturer", "Review metal bed frame manufacturing and development support for B2B channels.", "View Metal Bed Frame Manufacturer", "/metal-bed-frame-manufacturer"],
    ["OEM Bed Frame Manufacturer", "Explore OEM development support for private-label and custom bed frame programs.", "View OEM Bed Frame Manufacturer", "/oem-bed-frame-manufacturer"],
    ["Flat-Pack Packaging", "See packaging discussion points for KD and flat-pack bed frame products.", "View Flat-Pack Packaging", "/flat-pack-bed-frame-packaging"],
  ]), "alt")}
  ${section("Product Comparison", "Different product directions support different business needs. Use this comparison as a starting point for product discussion.", table([
    ["Metal Bed Frames", "Retail, online sales, wholesale, project supply — Practical, cost-efficient, flexible"],
    ["Bamboo Bed Frames", "Natural-style retail and online collections — Differentiated, warm, nature-inspired"],
    ["OEM / Custom Development", "Private label and product line partners — Flexible, market-fit, development-driven"],
  ], "Product Type", "Best For / Key Value"), "alt", "product-comparison")}
  <section class="section cta-band">${imageTag(img.oem, "Product sourcing discussion")}<div class="container fade-in"><h2>Ready to Explore the Bed Frame Solution?</h2><p>Share your market, sales channel, product idea, and supply needs. We will help you explore suitable metal bed frame, bamboo bed frame, or custom development solutions.</p><div class="actions">${cta("Send Bed Frame Sourcing Request", "/contact")}</div></div></section>`;
}

function metalPage() {
  return `${simpleHero({
    title: "Wholesale Metal Bed Frames for B2B Partners",
    subtitle: "Explore metal bed frames for wholesale, retail, online and project supply. The Apexnix range covers platform beds, headboard frames, bunk and dormitory solutions, daybeds, foldable beds, universal rail frames and custom metal structures. Specifications and packaging can be reviewed for the target market and channel.",
    image: img.metalCard,
    tagItems: ["Platform Beds", "Headboard Frames", "Bunk & Dormitory Beds", "Custom Metal Structures"],
    actions: `${cta("Request Product Information", "/contact")} ${cta("View Manufacturing Capability", "/metal-bed-frame-manufacturer", true)}`,
    eyebrow: "METAL BED FRAME PRODUCT RANGE",
  })}
  ${section("Metal Bed Frame Product Directions", "The collection is organized by product direction rather than a fixed list of standard items. Buyers can start from an existing model or use the range as a reference for a customized product discussion.", `<div class="grid-4">
    <article class="card fade-in"><div class="card-image">${imageTag(img.heavy, "Platform and heavy-duty bed frames")}</div><div class="card-body"><h3>Platform and Heavy-Duty Bed Frames</h3><p>Practical platform structures for retail, online, wholesale and project programs, with different height, support and packaging directions available for discussion.</p></div></article>
    <article class="card fade-in"><div class="card-image">${imageTag(img.headboard, "Metal bed frames with headboards")}</div><div class="card-body"><h3>Bed Frames with Headboards</h3><p>Metal bed frames with integrated headboard or headboard-and-footboard designs for more decorative and collection-led product lines.</p></div></article>
    <article class="card fade-in"><div class="card-image">${imageTag(img.bunkDormitory, "Bunk and dormitory bed frames")}</div><div class="card-body"><h3>Bunk and Dormitory Bed Frames</h3><p>Bed frame directions for schools, staff housing, hostels, rental accommodation and other high-use environments, subject to project-specific structure and compliance requirements. Review our <a href="/dormitory-bed-frame-supplier/" data-link>dormitory bed frame solutions</a>.</p></div></article>
    <article class="card fade-in"><div class="card-image">${imageTag(img.metalMore, "More metal bed frame directions")}</div><div class="card-body"><h3>More Metal Bed Frame Directions</h3><p>Daybeds, foldable beds, universal rail frames and other metal structures can be reviewed as standalone products or as additions to a wider bed frame collection.</p><p>Planning a regional size range? Review our <a href="/insights/bed-frame-size-guide-us-uk-eu/" data-link>US, UK and European bed frame sizing guide</a> before confirming the product specification.</p></div></article>
  </div><div class="gallery"><figure>${imageTag(img.headboard, "Headboard bed frame")}<figcaption>Modern Minimal</figcaption></figure><figure>${imageTag(img.home1, "Metal frame")}<figcaption>Clean Line</figcaption></figure><figure>${imageTag(img.heavy, "Retail bed frame")}<figcaption>Retail Friendly</figcaption></figure><figure>${imageTag(img.metalMore, "Private label direction")}<figcaption>Private Label Potential</figcaption></figure></div>`, "alt")}
  ${section("Options to Define for Each Product", "The final product specification should be confirmed around the intended market, use case and sales channel. The options below are discussion fields, not a claim that every combination applies to every model.", table(specMetal, "Specification field", "Discussion direction"))}
  ${section("Product Selection by Sales Channel", "A product range should be planned around how it will be sold and used. Apexnix reviews product direction together with the buyer's channel requirements.", iconGrid([
    { icon: "01", title: "Wholesale and Distribution", body: "Build a focused range with clear product differences, repeatable specifications and packaging suitable for distribution." },
    { icon: "02", title: "Retail and Online", body: "Review product presentation, assembly experience, packaging protection and the role of each item within the collection." },
    { icon: "03", title: "Accommodation and Project Supply", body: "Confirm environment, use intensity, dimensions, structure, installation, packaging and delivery requirements before selecting the product direction." },
    { icon: "04", title: "Private-Label Programs", body: "Use an existing platform as a starting point or move into a custom development project for a more differentiated product." },
  ]), "alt")}
  ${section("Manufacturing and Supply Support", "", `<p>Apexnix connects the product range with its own <a href="/metal-bed-frame-manufacturer/" data-link>metal bed frame manufacturing capability</a>, routine quality control, OEM development and <a href="/flat-pack-bed-frame-packaging/" data-link>flat-pack packaging support</a>. Order terms, sampling and production arrangements are confirmed according to the selected model, specification, packaging and purchasing plan.</p>`)}
  <section class="section cta-band">${imageTag(img.oem, "Metal bed frame product information")}<div class="container fade-in"><h2>Looking for the Right Metal Bed Frame Direction?</h2><p>Share the products you are interested in, your target market, preferred size range, channel, packaging requirements and expected purchasing plan. We will help organize the next product discussion.</p><div class="actions">${cta("Request Product Information", "/contact")}</div></div></section>
  ${faqSection([
    { question: "What types of wholesale metal bed frames does Apexnix supply?", answer: "The range includes platform beds, bed frames with headboards, bunk and dormitory beds, daybeds, foldable beds, universal rail frames and custom metal structures." },
    { question: "Can metal bed frame sizes be adapted for different markets?", answer: "Yes. Product dimensions can be reviewed and adapted for market requirements worldwide, including but not limited to the US, UK and EU, subject to the structure and specification of each model." },
    { question: "Are MOQ and lead time the same for every metal bed frame?", answer: "No. Order terms, sampling and lead time depend on the model, specification, packaging and purchasing plan and are confirmed during the project discussion." },
  ])}`;
}

function bambooPage() {
  return `${simpleHero({
    title: "Bamboo Bed Frame Supplier for Natural-Style Collections",
    subtitle: "Apexnix develops bamboo bed frames with bamboo frames and steel slats for retail, online and private-label product lines. Product size, structure, finish and packaging can be reviewed according to the target market and sales channel.",
    image: img.bambooCard,
    tagItems: ["Natural Material Appeal", "Renewable Material Story", "Storage-Friendly", "Easy Assembly", "Private-Label Potential"],
    actions: cta("Discuss Bamboo Bed Frame Options", "/contact"),
  })}
  ${section("Bamboo Bed Frame Product Directions", "This collection includes clean bamboo platform beds, bamboo beds with headboard options, and additional bamboo style directions for selected markets and natural-style product lines.", iconGrid([
    { icon: "◌", title: "Bamboo Platform Beds", body: "Clean platform structures with natural material appeal." },
    { icon: "▭", title: "Minimal Bamboo Beds", body: "Headboard options for a stronger natural-style product identity." },
    { icon: "✦", title: "Warm Home Collection", body: "Lifestyle-friendly directions for selected retail and online channels." },
    { icon: "□", title: "Custom Bamboo Structures", body: "Size, appearance, packaging, and private-label discussion." },
  ]), "alt")}
  ${twoCol("Bamboo Platform Beds", "A clean and natural platform bed direction for partners looking for a differentiated bed frame line.", "Bamboo platform beds bring a warmer and more natural visual language compared with standard metal frames. With a clean platform structure, natural material appearance, and storage-friendly clearance, this direction is suitable for partners looking to add a softer, nature-inspired product option to their bed frame collection.", img.bambooPlatform, `<ul class="check-list"><li>Natural bamboo appearance</li><li>Clean platform structure</li><li>No box spring needed</li><li>Storage-friendly clearance</li><li>Easy assembly design</li></ul><div class="actions">${cta("Explore Bamboo Platform Beds", "/contact", true)}</div>`)}
  ${twoCol("Minimal Bamboo Beds", "Bamboo bed frames with headboard options for a stronger natural-style product identity.", "Minimal bamboo beds are designed for partners who want a more complete bedroom product with natural material appeal and stronger visual identity. Compared with basic bamboo platform beds, this direction is more suitable for lifestyle retail, online product pages, and private label collections.", img.bambooMinimal, `${tags(["Minimal Natural Design", "Modern Bamboo Style", "Warm Home Collection", "Compact Living Product Line"], true)}<div class="actions">${cta("Discuss Minimal Bamboo Bed Options", "/contact", true)}</div>`, true, "alt")}
  ${twoCol("More Bamboo Style Directions", "", "Beyond our core bamboo platform and minimal bamboo bed directions, we can discuss different headboard styles, decorative details, and natural-style design variations based on your product line needs. These styles help partners create a more distinctive bamboo bed frame collection for selected markets and lifestyle-focused channels.", img.bambooMore, `${tags(["Bamboo Platform Style", "Full-Panel Headboard", "Open-Slot Headboard", "Decorative Headboard", "Natural Minimal Style", "Compact Living Style", "Warm Home Collection", "Private Label Direction"], true)}<p>The designs shown here are used as development references. Final specifications and availability can be confirmed during product discussion.</p>`)}
  ${section("Bamboo Bed Frame Specification Options", "", table(specBamboo), "alt")}
  ${section("Bamboo Bed Frame Development Support", "Bamboo bed frame projects often need early discussion around structure, packaging, material direction, and the sales channel they are designed for.", linkGrid([
    ["OEM / Custom Bed Frame Development", "Discuss custom size, structure, packaging, label, and material-direction needs.", "Explore OEM Development", "/products/oem-custom-development"],
    ["Flat-Pack Packaging", "Review packaging topics connected with carton planning, parts organization, and instructions.", "View Flat-Pack Packaging", "/flat-pack-bed-frame-packaging"],
    ["Contact Apexnix", "Share your bamboo bed frame idea, target market, and sourcing requirements.", "Send Bed Frame Sourcing Request", "/contact"],
  ]), "alt")}
  ${insightFeature({
    eyebrow: "Related Insight",
    title: "Understand the Material Story Behind Bamboo Bed Frames",
    body: "From the growth pattern of bamboo to engineered furniture components, this article explains what gives a bamboo bed frame its material identity, and what sourcing teams should confirm before development.",
    linkLabel: "bamboo bed frame material story",
  })}
  <section class="section cta-band">${imageTag(img.bambooMore, "Bamboo bed frame discussion")}<div class="container fade-in"><h2>Looking for a Natural-Style Bed Frame Direction?</h2><p>Share your product line idea and market needs. We will help you explore suitable bamboo bed frame options.</p><div class="actions">${cta("Send Bed Frame Sourcing Request", "/contact")}</div></div></section>`;
}

function oemPage() {
  return `${simpleHero({
    title: "Custom Bed Frame Development from Concept to Production",
    subtitle: "Develop a bed frame around your market, channel and product direction. Apexnix supports both ground-up development of new structures and practical adaptations of existing platforms, including size, height, structure, finish, support configuration, hardware, instructions and packaging.",
    image: img.oem,
    tagItems: ["New Structures", "Existing Platform Adaptation", "Packaging & Labels", "Sample Review"],
    actions: `${cta("Start a Development Discussion", "/contact")} ${cta("View OEM Manufacturing", "/oem-bed-frame-manufacturer", true)}`,
    eyebrow: "CUSTOM PRODUCT DEVELOPMENT",
  })}
  ${section("Two Custom Development Routes", "Not every custom project needs to begin in the same way. The right route depends on how clearly the product has been defined, the level of differentiation required and the buyer's commercial objective.", `<div class="split"><div class="grid-2">
    <article class="card icon-card fade-in"><h3>Develop a New Structure</h3><p>Start from a concept, reference, drawing or functional requirement and work toward a new bed frame structure. The discussion may cover overall layout, support system, connections, dimensions, materials, finish, assembly, packaging and target positioning.</p></article>
    <article class="card icon-card fade-in"><h3>Adapt an Existing Platform</h3><p>Use an existing Apexnix or buyer reference as a starting point and adjust selected elements such as size, height, color, finish, support configuration, hardware, labels or packaging. This route is suitable when the basic product direction is already clear.</p></article>
  </div><div class="image-panel fade-in">${imageTag(img.oemCard, "Custom bed frame development routes")}</div></div>`, "alt")}
  ${section("What Can Be Customized?", "Customization is reviewed as a connected product system. A change to size or structure may also affect support, hardware, packaging and assembly, so the final combination must be evaluated as one product rather than a list of independent options.", table(customMatrix, "Development area", "Typical discussion points"))}
  <section class="section contextual-insight-link"><div class="container"><p>For a practical comparison of US, UK and European mattress references, see our <a href="/insights/bed-frame-size-guide-us-uk-eu/" data-link>global bed frame size guide for B2B buyers</a>.</p></div></section>
  ${section("Custom Bed Frame Development Workflow", "The workflow below is a practical framework. The exact sequence may vary according to how complete the buyer's initial information is and whether the project starts from a new or existing structure.", `<ol class="process">${[
    ["Share the Starting Information", "Share the market, channel, product direction, reference information and commercial requirements."],
    ["Review the Product System", "Review the structure, dimensions, materials, finish, support configuration and packaging implications."],
    ["Align the Sample Direction", "Align the proposed product and sample direction."],
    ["Review and Adjust the Sample", "Review the sample and collect the required adjustments."],
    ["Confirm Product and Packaging Details", "Confirm the product specification, hardware, instructions, labels and packaging direction."],
    ["Move into Manufacturing Preparation", "Move the approved direction into OEM manufacturing and production preparation."],
  ].map(x => `<li class="fade-in"><div><h3>${x[0]}</h3><p>${x[1]}</p></div></li>`).join("")}</ol>`, "alt")}
  ${twoCol("What Should the Buyer Prepare?", "", "A development discussion moves faster when the commercial objective and product requirements are both visible. Buyers do not need to have every technical detail finalized before the first discussion.", img.ecommerce, `<ul class="check-list"><li>Target country or region and sales channel</li><li>Product category and intended use</li><li>Reference images, drawings, samples or links, if available</li><li>Required sizes, height, structure and key functions</li><li>Preferred finish, color and visual direction</li><li>Packaging, labeling and private-label requirements</li><li>Expected purchasing plan and target schedule</li></ul>`, false, "alt")}
  ${twoCol("Moving from Development to Manufacturing", "", "Once the product and packaging direction are agreed, the project moves into manufacturing preparation. Specifications, sample decisions and packaging requirements should remain aligned so the approved direction can be transferred into repeatable production.", img.projectManufacturing, `<p>Continue with an <a href="/oem-bed-frame-manufacturer/" data-link>OEM bed frame manufacturer</a>, review the <a href="/products/metal-bed-frames/" data-link>metal bed frame collection</a>, or explore the <a href="/products/bamboo-bed-frames/" data-link>bamboo bed frame collection</a>.</p>`)}
  <section class="section cta-band">${imageTag(img.oem, "Custom bed frame development discussion")}<div class="container fade-in"><h2>Ready to Develop a Bed Frame for Your Market?</h2><p>Share the product direction and the information currently available. Apexnix will help identify whether the project should begin from a new structure or an adaptation of an existing platform, and what needs to be confirmed next.</p><div class="actions">${cta("Start a Development Discussion", "/contact")}</div></div></section>
  ${faqSection([
    { question: "Can a custom bed frame project start from a concept or reference image?", answer: "Yes. A project can begin from a concept, reference image, drawing, sample or functional requirement, subject to product and manufacturing review." },
    { question: "Can Apexnix modify an existing bed frame instead of creating a new structure?", answer: "Yes. Existing platforms can be reviewed for changes to size, height, structure, finish, configuration, hardware, labels and packaging." },
    { question: "What affects the custom development process?", answer: "The process depends on the starting information, structural complexity, target market, product specification, sample requirements and packaging direction." },
  ])}`;
}

const solutionData = [
  {
    title: "For E-commerce & Online Retail",
    image: img.project,
    headline: "Bed frames designed to sell online, and survive the full customer journey.",
    body: "For online sales, a bed frame must do more than look good in photos. It needs to be easy to ship, easy to assemble, easy to understand, and stable enough to reduce complaints after delivery.",
    pain: ["Carton size affects shipping cost.", "Complicated assembly leads to bad reviews.", "Weak packaging increases damage risk.", "Unclear product selling points reduce conversion."],
    support: ["Flat-pack structure discussion", "Compact carton planning", "Easy-assembly design direction", "Private label packaging options"],
    cta: "Discuss E-commerce Bed Frame Solutions",
  },
  {
    title: "For Furniture Retailers & Wholesalers",
    image: img.retail,
    headline: "Build a bed frame line that is easy to position, repeat, and sell.",
    body: "Retailers and wholesalers need more than one good-looking product. They need a clear product line, stable supply, suitable price levels, and SKUs that can serve different customer needs.",
    pain: ["Too many similar products make selection difficult.", "Low-price products may create quality and complaint risks.", "Unstable supply affects repeat orders.", "Poor packaging increases warehouse and logistics problems."],
    support: ["Product line planning", "Multiple size options", "Color and finish options", "Stable repeatable product selection", "Export packaging support"],
    cta: "Build Your Retail / Wholesale Bed Frame Line",
  },
  {
    title: "For Accommodation & Project Supply",
    image: img.project,
    headline: "Durable bed frame options for high-use environments.",
    body: "Accommodation projects require bed frames that are practical, durable, easy to install, and simple to maintain. The focus is structure, stability, bulk supply, and long-term use.",
    pain: ["Products must handle frequent use.", "Installation needs to be simple for bulk projects.", "Maintenance and replacement should be manageable.", "Packaging should support bulk delivery."],
    support: ["Metal bed frame options for project use", "Bunk bed / dormitory bed discussion", "Reinforced structure options", "Bulk packaging support"],
    cta: "Discuss Project Bed Frame Supply",
  },
  {
    title: "For OEM / Private Label Partners",
    image: img.solutionOem,
    headline: "Turn your market idea into a manufacturable bed frame product.",
    body: "For private label partners, the real question is whether the product fits your brand, channel, target price, packaging standard, and customer expectations.",
    pain: ["Existing factory models may not fit the target market.", "Product cost and structure need to match the price strategy.", "Packaging and labels must support the partner's brand.", "Sampling without clear direction wastes time."],
    support: ["Market and channel discussion", "Target-price development", "Structure adjustment", "Size and color customization", "Mass production follow-up"],
    cta: "Start OEM / Private Label Discussion",
  },
];

function solutions() {
  return `${simpleHero({
    title: "Bed Frame Solutions Based on How You Sell",
    subtitle: "Different channels need different bed frame solutions. Apexnix supports product discussion based on sales channel, product positioning, packaging needs, price range, installation environment, and long-term supply expectations.",
    image: img.solutionsHero,
    actions: cta("Send Bed Frame Sourcing Request", "/contact"),
  })}
  ${section("Why Channel Fit Matters", "A bed frame that works well for online retail may not be the best option for a dormitory project. That is why we start by understanding how you sell before recommending what to supply.", `<div class="grid-4">${["Online Retail / Packaging & Assembly", "Retail / Wholesale / Product Line & Price Range", "Projects / Strength & Maintenance", "OEM / Custom Development"].map(x => `<article class="card icon-card fade-in"><span class="line-icon">${arrowIcon()}</span><h3>${x}</h3></article>`).join("")}</div>`, "alt")}
  ${section("Solutions by Business Type", "", `<div class="tabs" data-tabs><div class="tab-list">${solutionData.map((x, i) => `<button class="${i === 0 ? "active" : ""}" data-tab="${i}">${x.title}</button>`).join("")}</div><div class="tab-panel" data-panel>${renderTab(0)}</div></div>`)}
  ${section("How We Work With Partners", "", `<ol class="process">${[
    ["Understand Your Market", "We first learn about your target customers, sales channel, and product positioning."],
    ["Clarify Product Direction", "We discuss suitable bed frame types, structure, price range, packaging, and customization needs."],
    ["Recommend Suitable Options", "We help select existing options or define a custom development direction."],
    ["Support Sampling", "We coordinate sample details, packaging, structure, and specification confirmation."],
    ["Move Toward Production", "Once the product direction is confirmed, we support order planning, packaging, quality control, and export coordination."],
  ].map(x => `<li class="fade-in"><div><h3>${x[0]}</h3><p>${x[1]}</p></div></li>`).join("")}</ol>`, "alt")}
  ${section("Solutions for Different Buying Scenarios", "Different sales channels and project environments need different product structures, packaging priorities, and development support.", linkGrid([
    ["Dormitory Bed Frame Supplier", "Project-use and accommodation bed frame discussion for schools, staff housing, hostels, and rental apartments.", "View Dormitory Solutions", "/dormitory-bed-frame-supplier"],
    ["OEM Bed Frame Manufacturer", "Private-label and custom development support based on market, channel, packaging, and target price.", "View OEM Manufacturer Page", "/oem-bed-frame-manufacturer"],
    ["Metal Bed Frames", "Practical metal bed frame directions for retail, wholesale, online, and project supply.", "Explore Metal Bed Frames", "/products/metal-bed-frames"],
  ]), "alt")}
  <section class="section cta-band">${imageTag(img.oem, "Business discussion")}<div class="container fade-in"><h2>Looking for a Bed Frame Supplier Who Understands Your Business?</h2><p>Tell us how you sell, who you sell to, and what kind of product line you want to build. We will help you explore suitable bed frame solutions.</p><div class="actions">${cta("Send Bed Frame Sourcing Request", "/contact")}</div></div></section>`;
}

function renderTab(i = 0) {
  const s = solutionData[i];
  return `<div class="tab-image">${imageTag(s.image, s.title)}</div><div class="tab-panel-body"><span class="kicker">${s.title}</span><h3>${s.headline}</h3><p>${s.body}</p><div class="grid-2"><div><h3>Customer Pain Points</h3><ul class="check-list">${s.pain.map(x => `<li>${x}</li>`).join("")}</ul></div><div><h3>How We Support</h3><ul class="check-list">${s.support.map(x => `<li>${x}</li>`).join("")}</ul></div></div>${cta(s.cta, "/contact", true)}</div>`;
}

function capabilities() {
  const caps = [
    ["Product Development", img.oemCard, "We support bed frame development from product idea to practical structure discussion. This includes size, material, frame structure, support legs, headboard / footboard options, surface finish, and usage scenario."],
    ["Value Engineering", img.valueEngineering, "We help balance strength, material use, cost, packaging size, assembly experience, and market competitiveness."],
    ["Packaging Optimization", img.ecommerce, "Carton size, protection, hardware organization, instruction manuals, loading efficiency, and shipping requirements can directly affect cost and customer experience."],
    ["Quality Control", img.qualityControl, "Quality control is part of our product discussion and production coordination. Depending on the product type and project requirements, inspection points may include material check, dimension review, welding and structure check, surface finish inspection, trial assembly, hardware check, packaging inspection, and pre-shipment review."],
    ["OEM / Custom Support", img.oemSupport, "Customization can include size, color, structure, headboard style, packaging, instruction manual, carton mark and private label presentation."],
    ["Export Support", img.exportSupport, "We support export-ready packaging, carton marks, product labels, loading discussion, documentation coordination, and order communication."],
  ];
  return `${simpleHero({
    title: "Bed Frame Manufacturing and Supply Capabilities",
    subtitle: "Apexnix focuses on the practical capabilities that matter in B2B bed frame sourcing: product development, cost and structure balance, packaging optimization, quality control, sample coordination, OEM support, and export communication.",
    image: img.capabilitiesHero,
    actions: cta("Discuss Your Bed Frame Requirements", "/contact"),
  })}
  <section class="section"><div class="container"><div class="section-head fade-in"><span class="kicker">Apexnix</span><h2>Core Bed Frame Manufacturing and Supply Capabilities</h2><p>Our capabilities cover the practical steps required to turn a bed frame direction into a market-ready B2B product, including product development, value engineering, packaging, quality control, OEM support and supply coordination.</p></div><ol class="process">${caps.map((x) => `<li class="fade-in"><div class="split"><div><h3>${x[0]}</h3><p>${x[2]}</p></div><div class="image-panel soft">${imageTag(x[1], x[0])}</div></div></li>`).join("")}</ol></div></section>
  ${section("Supply Details That Shape the Final Product", "Manufacturing flow, inspection points, packaging, and OEM development decisions all affect how a bed frame performs in real sales channels.", linkGrid([
    ["Metal Bed Frame Production Process", "Understand the typical production flow for metal bed frame products.", "View Production Process", "/metal-bed-frame-production-process"],
    ["Bed Frame Quality Control", "Review quality control points that may apply during sampling, production, packaging, and shipment.", "View Quality Control", "/bed-frame-quality-control"],
    ["Flat-Pack Packaging", "Explore carton planning, protection, instruction, labeling, and loading discussion points.", "View Packaging Support", "/flat-pack-bed-frame-packaging"],
    ["OEM Bed Frame Manufacturer", "Review OEM and custom development support for market-fit product lines.", "View OEM Manufacturer Page", "/oem-bed-frame-manufacturer"],
    ["Contact Apexnix", "Share your requirements so we can discuss suitable product and supply directions.", "Send Bed Frame Sourcing Request", "/contact"],
  ]), "alt")}
  <section class="section cta-band">${imageTag(img.oem, "Product development table")}<div class="container fade-in"><h2>Need a Bed Frame Product Built Around Your Market?</h2><p>Share your product idea and requirements. We will help you evaluate the right development direction.</p><div class="actions">${cta("Discuss Your Bed Frame Requirements", "/contact")}</div></div></section>`;
}

function about() {
  return `${simpleHero({
    title: "About Apexnix",
    subtitle: "Apexnix is built as a focused B2B bed frame supplier for global partners who need practical products, manufacturing know-how, and business-oriented communication.",
    body: "We focus on metal bed frames, bamboo bed frames, OEM/custom development, packaging discussion, quality coordination, and export-ready supply support.",
    image: img.oem,
    actions: cta("Contact Apexnix", "/contact"),
  })}
  ${twoCol("Our Story", "", "Our story began with a simple belief: a bed frame should not be treated as just another product to quote. Behind every successful bed frame business, there is a target market to understand, a sales channel to fit, a price level to compete in, and a customer experience to protect.<br><br>Our brand was created by bringing together long-term bed frame manufacturing experience and a commercial team with deep global business background. This combination shapes the way we work: we discuss market fit, channel needs, packaging, assembly, cost balance, and long-term product line development.", img.ourStory)}
  ${section("What We Believe", "", `<div class="grid-3">
    <article class="card icon-card fade-in"><h3>A good bed frame is not only well-made.</h3><p>It should be market-ready.</p></article>
    <article class="card icon-card fade-in"><h3>A good supplier does not only quote.</h3><p>It should understand the customer's business.</p></article>
    <article class="card icon-card fade-in"><h3>A good cooperation does not start with the lowest price.</h3><p>It starts with the right product direction.</p></article>
  </div>`, "alt")}
  ${section("What We Do", "We provide focused bed frame products and development support for partners, including metal bed frames, bamboo bed frames, OEM / custom development, packaging discussion, product line planning, and export supply coordination.", iconGrid([
    { icon: "M", title: "Manufacturing Know-How", body: "Practical knowledge of metal bed frame products, structure, production, packaging, and quality control." },
    { icon: "G", title: "Global B2B Business Thinking", body: "Experience from international B2B markets where channels and long-term cooperation matter." },
    { icon: "M", title: "Market-Ready Partner", body: "A supplier conversation built around product direction, not only price." },
    { icon: "S", title: "Supply Coordination", body: "Support across sampling, packaging, production, quality control, and export communication." },
  ]))}
  ${section("How We Work", "", `<ol class="process">${["Understand your market", "Clarify your sales channel", "Discuss your target price", "Recommend suitable product direction", "Support sampling and customization", "Coordinate production, packaging, and delivery"].map(x => `<li class="fade-in"><div><h3>${x}</h3></div></li>`).join("")}</ol>`, "alt")}
  <section class="section cta-band">${imageTag(img.oem, "Business conversation")}<div class="container fade-in"><h2>Let's Start With a Better Business Conversation</h2><p>Tell us what kind of bed frame business you want to build. We will help you explore the right product direction.</p><div class="actions">${cta("Contact Us", "/contact")}</div></div></section>`;
}

function contact() {
  return `${simpleHero({
    title: "Contact Apexnix for Your Bed Frame Project",
    subtitle: "Share your target market, sales channel, product direction, quantity estimate, packaging needs, and target price range.",
    body: "Apexnix will help evaluate suitable bed frame solutions for your sourcing or development project.",
    image: img.contactHero,
  })}
  <section class="section"><div class="container contact-layout">
    <aside class="contact-card fade-in"><h2>Apexnix Co.,Ltd.</h2><p>No.88 Anling 2nd Road , Huli District, Xiamen, China</p><br><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></aside>
    <div class="fade-in"><div class="section-head"><span class="kicker">Send Request</span><h2>Get In Touch About Your Needs</h2><p>To help us understand your needs better, please share your market, sales channel, target price, quantity, and product requirements. The more details you provide, the faster we can understand your project and recommend a suitable product direction.</p></div>
      <form data-contact-form action="${WEB3FORMS_ENDPOINT}" method="post">
        <input type="hidden" name="access_key" value="${WEB3FORMS_ACCESS_KEY}" />
        <input type="hidden" name="subject" value="Apexnix Bed Frame Request" />
        <input type="hidden" name="from_name" value="Apexnix Website" />
        <input type="checkbox" name="botcheck" class="botcheck" tabindex="-1" autocomplete="off" />
        ${[
          ["Name", "name", "text"],
          ["Country", "country", "text"],
          ["Company", "company", "text"],
          ["Your Website", "website", "text"],
          ["Email", "email", "email"],
          ["WhatsApp / Phone", "phone", "text"],
          ["Estimated Quantity", "estimated_quantity", "text"],
          ["Target Price Range", "target_price_range", "text"],
        ].map(([label, name, type]) => `<label>${label}<input type="${type}" name="${name}" /></label>`).join("")}
        <label>Business Type<select name="business_type"><option>E-commerce / Online Retail</option><option>Furniture Retailer</option><option>Wholesaler / Importer</option><option>Accommodation / Project Contractor</option><option>OEM / Private Label Partner</option><option>Other</option></select></label>
        <label>Interested Products<select name="interested_products"><option>Metal Bed Frames</option><option>Bamboo Bed Frames</option><option>Bunk Beds / Dormitory Beds</option><option>OEM / Custom Bed Frames</option><option>Not Sure Yet</option></select></label>
        <label>Sales Channel<select name="sales_channel"><option>Online Retail</option><option>Offline Retail</option><option>Wholesale Distribution</option><option>Project Supply</option><option>Private Label / Brand</option><option>Other</option></select></label>
        <label class="full">Message<textarea name="message"></textarea></label>
        <p class="form-status full" data-contact-status hidden></p>
        <button class="btn full" type="submit">Send Request ${arrowIcon()}</button>
      </form>
    </div>
  </div></section>
  ${section("Start with the Right Product Direction", "A clearer product direction helps us understand your market, supply needs, packaging expectations, and development requirements faster.", linkGrid([
    ["Metal Bed Frames", "Review practical metal bed frame directions for retail, wholesale, online, and project supply.", "Explore Metal Bed Frames", "/products/metal-bed-frames"],
    ["Bamboo Bed Frames", "Review bamboo bed frame directions for selected natural-style product lines.", "Explore Bamboo Bed Frames", "/products/bamboo-bed-frames"],
    ["OEM Development", "Prepare custom size, structure, packaging, label, and target-price discussion points.", "Explore OEM Development", "/products/oem-custom-development"],
    ["Capabilities", "Review manufacturing, packaging, quality control, and export coordination support.", "View Capabilities", "/capabilities"],
  ]), "alt")}`;
}

function metalManufacturerPage() {
  return `${simpleHero({
    title: "Metal Bed Frame Manufacturer for B2B Supply",
    subtitle: "Apexnix supports retailers, wholesalers, project buyers and private-label brands with metal bed frame manufacturing, product development, routine factory quality control and flat-pack packaging. Our own factory brings more than 25 years of bed frame manufacturing experience.",
    image: img.heavy,
    tagItems: ["Own Manufacturing Facility", "25+ Years of Factory Experience", "B2B Product Support", "Routine Factory QC"],
    actions: `${cta("Discuss Your Project", "/contact")} ${cta("Explore Metal Bed Frames", "/products/metal-bed-frames", true)}`,
    eyebrow: "FACTORY-BACKED BED FRAME SUPPLY",
  })}
  <section class="section alt"><div class="container">
    <div class="split">
      <div class="fade-in"><span class="kicker">Apexnix</span><h2>A Focused Metal Bed Frame Manufacturer</h2><p>Apexnix is built around the bed frame category. Instead of presenting an unrelated mix of furniture products, we focus on metal and bamboo bed frames, OEM development and the practical supply details that matter to B2B buyers. This focus helps us connect product direction, manufacturing, quality control and packaging within one project discussion.</p></div>
      <div class="image-panel fade-in">${imageTag(img.metalMore, "A Focused Metal Bed Frame Manufacturer")}</div>
    </div>
    ${iconGrid([
      { icon: "01", title: "Own Manufacturing Facility", body: "Apexnix operates its own bed frame factory, allowing product and production discussions to stay connected from the beginning of a project." },
      { icon: "02", title: "25+ Years of Factory Experience", body: "Our factory has more than 25 years of bed frame manufacturing experience across structure development, production, surface finishing, assembly review and packaging." },
      { icon: "03", title: "B2B Product and Supply Support", body: "We work with retail, wholesale, online, private-label and project requirements, with product specifications and order terms confirmed according to each program." },
    ], "grid-3 manufacturer-feature-grid")}
  </div></section>
  ${section("Metal Bed Frame Manufacturing Scope", "Our manufacturing scope covers mainstream metal bed frame categories as well as custom structures. Product dimensions, height, finish, support configuration, hardware and packaging can be reviewed according to the target market and sales channel.", `<ul class="check-list"><li>Platform and heavy-duty metal bed frames</li><li>Metal bed frames with headboards and footboards</li><li>Bunk beds and dormitory bed frame solutions</li><li>Daybeds, foldable beds, universal rail frames and custom metal structures</li></ul><p>Explore the <a href="/products/metal-bed-frames/" data-link>wholesale metal bed frame range</a>.</p>`)}
  ${section("From Product Direction to Manufacturing", "A manufacturing project begins with the commercial requirement rather than a generic product list. We review the intended market, channel, product type, structure, finish, packaging and target positioning before aligning the sample and production direction.", `${iconGrid([
    { icon: "01", title: "Requirement and Product Review", body: "Confirm the intended market, use case, key specifications and commercial positioning." },
    { icon: "02", title: "Sample and Specification Alignment", body: "Review the proposed structure and sample direction, then confirm the product details that will guide production." },
    { icon: "03", title: "Production Preparation", body: "Align materials, components, surface requirements, hardware, instructions and packaging before production." },
    { icon: "04", title: "Production and Quality Review", body: "Carry out routine factory checks during production and review the finished product and packaging before shipment coordination." },
  ])}<p>Projects that need a new structure or platform adaptation can begin with <a href="/products/oem-custom-development/" data-link>custom bed frame development</a>.</p>`, "alt")}
  ${section("Routine Factory Quality Control", "", `<p>Quality control is integrated into normal factory work. Depending on the product, routine checks may cover materials and components, dimensions, frame structure, welding and connections, surface finish, trial assembly, hardware, instructions, packaging and pre-shipment review.</p><p>Review the <a href="/bed-frame-quality-control/" data-link>bed frame quality control process</a>.</p>`)}
  ${section("Support for Different B2B Channels", "", `<p>The same bed frame does not fit every channel in the same way. Retail and online programs may prioritize product presentation, compact packaging and assembly experience. Wholesale programs may focus on range planning and repeat supply. Accommodation and dormitory projects may place greater emphasis on structure, use intensity and installation requirements. Apexnix reviews these differences during product and supply planning.</p>`, "alt")}
  <section class="section cta-band">${imageTag(img.oem, "Metal bed frame project discussion")}<div class="container fade-in"><h2>Discuss Your Metal Bed Frame Project</h2><p>Share your target market, sales channel, product direction, required specifications, packaging expectations and purchasing plan. Apexnix will review the manufacturing direction and identify the information needed for the next discussion.</p><div class="actions">${cta("Send Your Requirements", "/contact")}</div></div></section>
  ${faqSection([
    { question: "Is Apexnix a metal bed frame manufacturer or a trading company?", answer: "Apexnix is a B2B bed frame brand and company with its own bed frame manufacturing facility." },
    { question: "How much manufacturing experience does the factory have?", answer: "The Apexnix factory has more than 25 years of bed frame manufacturing experience." },
    { question: "Can Apexnix manufacture custom metal bed frames?", answer: "Yes. Apexnix can develop a new structure from the beginning or adapt an existing structure through changes to size, height, finish, configuration and packaging." },
  ])}`;
}

function oemManufacturerPage() {
  return `${simpleHero({
    title: "OEM Bed Frame Manufacturer for Private Label Programs",
    subtitle: "Apexnix supports private-label, retail, online, wholesale and project customers with OEM bed frame manufacturing. Our own factory has more than 25 years of bed frame manufacturing experience and can support both new product structures and adaptations of existing platforms.",
    image: img.oem,
    tagItems: ["Own Bed Frame Factory", "Factory Experience", "Production Readiness", "Routine Quality & Packaging"],
    actions: `${cta("Discuss an OEM Program", "/contact")} ${cta("View Custom Development", "/products/oem-custom-development", true)}`,
    eyebrow: "FACTORY-BACKED OEM MANUFACTURING",
  })}
  ${section("Why Work with Apexnix as Your OEM Manufacturer?", "An OEM program needs more than a product image and a price. The manufacturer must understand how the product direction, structure, sample, production specification, quality control and packaging connect. Apexnix keeps these discussions within one factory-backed bed frame program.", iconGrid([
    { icon: "01", title: "Own Bed Frame Factory", body: "Manufacturing discussions are connected directly to the facility responsible for bed frame production." },
    { icon: "02", title: "25+ Years of Factory Experience", body: "The factory brings more than 25 years of practical bed frame manufacturing experience." },
    { icon: "03", title: "Development-to-Production Support", body: "A project can begin with a new structure or an existing platform and move through sample review, specification confirmation and production preparation." },
    { icon: "04", title: "Routine Quality and Packaging Control", body: "Quality and packaging checks are treated as part of the manufacturing process rather than separate marketing claims." },
  ]), "alt")}
  ${section("OEM Manufacturing Scope", "Apexnix supports different levels of OEM involvement depending on the buyer's starting point and commercial objective.", `<ul class="check-list"><li>Ground-up development of a new bed frame structure</li><li>Adaptation of an existing platform by size, height, structure, finish or configuration</li><li>Hardware, instructions, labels and private-label packaging discussion</li><li>Metal bed frame, bamboo bed frame and project-specific product directions</li></ul>`)}
  ${section("From Approved Direction to Production Readiness", `The OEM manufacturer page focuses on the transition from an agreed product direction to repeatable manufacturing. Detailed concept development is covered in the <a href="/products/oem-custom-development/" data-link>custom bed frame development process</a>.`, `<ol class="process">${[
    ["Confirm the Product Specification", "Align dimensions, structure, finish, support configuration, hardware and other product details."],
    ["Confirm Packaging and Label Requirements", "Review carton direction, protection, hardware organization, instructions, labels and private-label artwork requirements."],
    ["Prepare the Manufacturing Standard", "Use the approved product and packaging direction as the basis for production preparation."],
    ["Run Production and Routine Checks", "Carry out production with routine checks covering the relevant materials, dimensions, connections, surface, assembly, hardware and packaging."],
    ["Coordinate Final Review and Shipment", "Review the completed product and packaging before shipment coordination according to the agreed order requirements."],
  ].map(x => `<li class="fade-in"><div><h3>${x[0]}</h3><p>${x[1]}</p></div></li>`).join("")}</ol>`, "alt")}
  ${section("Quality and Packaging Coordination", "", `<p>Routine factory checks may include materials and components, dimensions and frame structure, welding and connections, surface finish, trial assembly, hardware and instructions, packaging and pre-shipment review. Additional testing or inspection requirements can be discussed when a customer or target market has a specific need.</p><p>Review our approach to <a href="/bed-frame-quality-control/" data-link>bed frame quality control</a>.</p>`)}
  <section class="section cta-band">${imageTag(img.oem, "OEM bed frame manufacturing discussion")}<div class="container fade-in"><h2>Start an OEM Manufacturing Discussion</h2><p>To begin, share the target market and channel, product category, reference images or drawings, key dimensions, expected structure, finish, packaging direction and purchasing plan. If the product has not yet been fully defined, the project can begin through the custom development process.</p><div class="actions">${cta("Discuss an OEM Program", "/contact")}</div></div></section>
  ${faqSection([
    { question: "Can Apexnix develop a completely new bed frame structure?", answer: "Yes. Apexnix can support a new structure from the beginning as well as adaptations based on an existing bed frame platform." },
    { question: "Does Apexnix support private-label bed frame programs?", answer: "Yes. Private-label discussions can cover product specifications, labels, instructions and packaging requirements." },
    { question: "How are MOQ, samples and production timing confirmed?", answer: "They are confirmed according to the product structure, specification, packaging and purchasing plan rather than published as one standard condition for every project." },
  ])}`;
}

function qualityControlPage() {
  return `${simpleHero({
    title: "Bed Frame Quality Control Process",
    subtitle: "Quality control is critical in B2B bed frame supply because it affects product stability, assembly experience, packaging safety, after-sales risk, and long-term customer confidence.",
    body: "Apexnix focuses on practical quality control points throughout product discussion, sampling, production, packaging, and shipment coordination.",
    image: img.qualityControl,
    tagItems: ["Material Check", "Structure Review", "Trial Assembly", "Packaging Inspection"],
    actions: cta("Discuss Quality Requirements", "/contact"),
  })}
  ${section("Why Quality Control Matters for Bed Frame Partners", "For bed frame partners, quality is not only about appearance. A competitive bed frame must have reliable structure, accurate dimensions, stable support, clean surface finish, complete hardware, clear assembly logic, and packaging that protects the product during transportation.", `<p>These details directly affect customer experience and after-sales risk.</p>`, "alt")}
  ${section("Key Quality Control Points", "", iconGrid([
    { icon: "01", title: "Material and Component Check", body: "Review key tubes, slats, brackets, hardware, and components based on product requirements." },
    { icon: "02", title: "Dimension and Structure Review", body: "Check important dimensions, connection points, support layout, and overall structure consistency." },
    { icon: "03", title: "Welding and Connection Check", body: "Review welding areas, connection stability, hole positions, and assembly-related details." },
    { icon: "04", title: "Surface Finish Inspection", body: "Check powder coating appearance, color consistency, scratches, visible defects, and surface coverage." },
    { icon: "05", title: "Trial Assembly Review", body: "Review whether parts fit correctly, assembly logic is clear, and structure is stable after installation." },
    { icon: "06", title: "Hardware and Instruction Check", body: "Check screws, tools, accessory packs, labels, and instruction manual completeness." },
    { icon: "07", title: "Packaging Inspection", body: "Review carton structure, protection materials, part placement, labeling, and packaging reliability." },
    { icon: "08", title: "Pre-Shipment Review", body: "Support final review based on order requirements before shipment coordination." },
  ]))}
  ${twoCol("Quality Starts Before Mass Production", "", "Good quality control starts before mass production. During product discussion and sample confirmation, Apexnix works with partners to clarify structure, size, packaging, assembly method, target market, and key risk points. This helps reduce uncertainty before the order moves into production.", img.valueEngineering)}
  ${section("Quality Control for Different Business Needs", "", `<ul class="check-list"><li>Online sellers: packaging protection, easy assembly, lower complaint risk</li><li>Retailers and wholesalers: stable product quality and consistent product line</li><li>Project partners: structure, installation, maintenance, replacement parts</li><li>OEM partners: specification consistency, labeling, packaging, private-label requirements</li></ul>`, "alt")}
  ${section("Bed Frame Quality Support", "", linkGrid([
    ["Capabilities", "Review Apexnix manufacturing, packaging, quality control, and export coordination capabilities.", "View Capabilities", "/capabilities"],
    ["Production Process", "Understand how quality topics connect with the typical metal bed frame production process.", "View Production Process", "/metal-bed-frame-production-process"],
    ["Metal Bed Frames", "Explore practical metal bed frame product directions.", "Explore Metal Bed Frames", "/products/metal-bed-frames"],
  ]))}
  <section class="section cta-band">${imageTag(img.qualityControl, "Bed frame quality control discussion")}<div class="container fade-in"><h2>Discuss Quality Requirements for Your Bed Frame Project</h2><p>Tell us your product type, market, packaging needs, and quality concerns so we can discuss practical inspection points.</p><div class="actions">${cta("Discuss Quality Requirements for Your Bed Frame Project", "/contact")}</div></div></section>`;
}

function productionProcessPage() {
  return `${simpleHero({
    title: "Metal Bed Frame Production Process",
    subtitle: "A clear production process helps partners understand how metal bed frames move from product requirements to finished goods.",
    body: "Apexnix focuses on practical production coordination for metal bed frame products, with attention to structure, surface finish, packaging, assembly, and quality control.",
    image: img.metalMore,
    tagItems: ["Typical Process", "Production Coordination", "Surface Finish", "Packaging Preparation"],
    actions: cta("Discuss Your Production Requirement", "/contact"),
  })}
  ${section("Typical Metal Bed Frame Manufacturing Flow", "", `<ol class="process">${[
    ["Requirement Review", "Confirm product type, size, structure, material direction, surface finish, packaging needs, quantity, and target market."],
    ["Material Preparation", "Prepare steel tubes, slats, brackets, hardware, and related components based on product specification."],
    ["Tube Cutting and Processing", "Cut tubes and components according to required dimensions and structure design."],
    ["Punching, Drilling, or Bending", "Process holes, connection points, bends, and structure-related details as needed."],
    ["Welding and Frame Assembly", "Weld or assemble key structural parts and review important connection areas."],
    ["Grinding and Surface Preparation", "Prepare the surface before coating to support better appearance and finish consistency."],
    ["Powder Coating / Surface Treatment", "Apply surface finish based on product color and appearance requirements."],
    ["Trial Assembly and Quality Review", "Check fitting, dimensions, structure, hardware, and assembly logic before packaging."],
    ["Packaging Preparation", "Organize parts, hardware, instructions, labels, protection materials, and carton packing."],
    ["Pre-Shipment and Loading Coordination", "Review packaging, order details, shipping marks, and shipment-related requirements."],
  ].map(x => `<li class="fade-in"><div><h3>${x[0]}</h3><p>${x[1]}</p></div></li>`).join("")}</ol>`, "alt")}
  ${twoCol("Production Details That Affect Product Competitiveness", "", "For B2B bed frame partners, production is closely connected with cost, packaging, assembly, and after-sales performance. A small structure change may affect material use, carton size, shipping efficiency, installation experience, and final product positioning. That is why Apexnix supports product discussion from both manufacturing and commercial perspectives.", img.valueEngineering)}
  ${section("Connected Quality Control Points", "", `<ul class="check-list"><li>Dimension consistency</li><li>Welding and connection review</li><li>Surface appearance inspection</li><li>Hardware completeness</li><li>Trial assembly</li><li>Packaging protection</li><li>Label and carton mark check</li></ul>`, "alt")}
  ${twoCol("From Production to B2B Supply", "", "Beyond manufacturing, B2B partners often need support with product line planning, sample confirmation, packaging discussion, private-label requirements, order coordination, and export communication. Apexnix supports these discussions to help partners build more practical bed frame supply programs.", img.exportSupport)}
  ${section("Production Support for Metal Bed Frame Programs", "", linkGrid([
    ["Metal Bed Frame Manufacturer", "Review metal bed frame manufacturing and development support for B2B channels.", "View Manufacturer Page", "/metal-bed-frame-manufacturer"],
    ["Quality Control", "Review practical quality control points connected with production and shipment.", "View Quality Control", "/bed-frame-quality-control"],
    ["Flat-Pack Packaging", "Explore packaging preparation, carton planning, and instruction topics.", "View Packaging Support", "/flat-pack-bed-frame-packaging"],
    ["Capabilities", "Review broader supply capabilities and coordination support.", "View Capabilities", "/capabilities"],
  ]), "alt")}
  <section class="section cta-band">${imageTag(img.metalMore, "Metal bed frame production discussion")}<div class="container fade-in"><h2>Discuss Your Metal Bed Frame Production Requirement</h2><p>Share your product type, structure, quantity, target market, and packaging needs so we can discuss a practical production direction.</p><div class="actions">${cta("Discuss Your Metal Bed Frame Production Requirement", "/contact")}</div></div></section>`;
}

function flatPackPackagingPage() {
  return `${simpleHero({
    title: "Flat-Pack Bed Frame Packaging Solutions",
    subtitle: "For B2B bed frame products, packaging is part of product competitiveness.",
    body: "Flat-pack and KD packaging can affect shipping cost, warehouse handling, assembly experience, customer satisfaction, and after-sales risk. Apexnix supports packaging discussion based on product structure, sales channel, and target market.",
    image: img.ecommerce,
    tagItems: ["KD Packaging", "Carton Planning", "Instruction Manual", "Private-Label Packaging"],
    actions: cta("Discuss Flat-Pack Packaging", "/contact"),
  })}
  ${section("Why Packaging Matters in Bed Frame Sourcing", "A bed frame is not only judged by its structure. Partners also need to consider carton size, protection method, part organization, hardware completeness, instruction clarity, barcode labels, carton marks, and loading efficiency.", `<p>Good packaging helps reduce damage risk, improve handling efficiency, and support a smoother customer experience.</p>`, "alt")}
  ${section("Packaging Discussion Scope", "", `<ul class="check-list"><li>KD / flat-pack packaging structure</li><li>Carton size planning</li><li>Protection material discussion</li><li>Part layout and organization</li><li>Hardware pack and tool pack</li><li>Instruction manual support</li><li>Carton mark and barcode label</li><li>Private-label packaging direction</li><li>Loading and shipment discussion</li></ul>`)}
  ${section("Packaging by Sales Channel", "", iconGrid([
    { icon: "01", title: "Online Retail", body: "Focus on compact carton size, product protection, easy assembly, clear instructions, and lower complaint risk." },
    { icon: "02", title: "Retail and Wholesale", body: "Focus on stable packaging standards, labeling, warehouse handling, and product line consistency." },
    { icon: "03", title: "Project Supply", body: "Focus on bulk handling, installation efficiency, maintenance needs, and replacement part organization." },
    { icon: "04", title: "Private Label", body: "Focus on carton mark, barcode label, product label, instruction manual, and brand presentation." },
  ]), "alt")}
  ${twoCol("Packaging Should Be Discussed Early", "", "Packaging should not be left until the end of development. Structure, part size, hardware quantity, carton dimensions, and instruction design are connected. Discussing packaging early helps partners evaluate cost, logistics, customer experience, and product positioning more realistically.", img.oemCard)}
  ${section("Packaging and Supply Support", "", linkGrid([
    ["OEM Bed Frame Manufacturer", "Review custom development support connected with packaging, labels, and target-price planning.", "View OEM Manufacturer Page", "/oem-bed-frame-manufacturer"],
    ["Capabilities", "Review packaging optimization and broader supply capabilities.", "View Capabilities", "/capabilities"],
    ["Contact Apexnix", "Share your packaging and product requirements for discussion.", "Send Packaging Requirements", "/contact"],
  ]), "alt")}
  <section class="section cta-band">${imageTag(img.ecommerce, "Flat-pack bed frame packaging discussion")}<div class="container fade-in"><h2>Discuss Flat-Pack Packaging for Your Bed Frame Project</h2><p>Share your product structure, carton needs, sales channel, labels, and packaging concerns so we can discuss practical options.</p><div class="actions">${cta("Discuss Flat-Pack Packaging for Your Bed Frame Project", "/contact")}</div></div></section>`;
}

function dormitorySupplierPage() {
  return `${simpleHero({
    title: "Dormitory Bed Frame Supplier for Accommodation and Project Use",
    subtitle: "Dormitory and accommodation projects require bed frames that are practical, durable, easy to install, and suitable for repeated use.",
    body: "Apexnix supports metal bed frame and bunk bed direction discussion for schools, staff housing, hostels, rental apartments, and other bulk-use environments.",
    image: img.bunkDormitory,
    tagItems: ["Dormitories", "Staff Housing", "Hostels", "Rental Apartments", "Project Supply"],
    actions: cta("Discuss Dormitory Bed Frame Requirements", "/contact"),
  })}
  ${section("Bed Frame Solutions for High-Use Environments", "Project-use bed frames are different from ordinary retail products. Partners may need to consider structure strength, installation efficiency, maintenance, replacement parts, packaging method, and long-term use.", `<p>Apexnix supports early-stage product direction discussion based on the project environment and customer requirements.</p><ul class="check-list"><li>Student dormitories</li><li>Staff housing</li><li>Hostels</li><li>Rental apartments</li><li>Accommodation projects</li><li>Bulk-use furniture supply</li></ul>`, "alt")}
  ${section("Project Discussion Points", "", `<ul class="check-list"><li>Bed type: single bed, bunk bed, platform structure, reinforced frame</li><li>Size requirements</li><li>Installation environment</li><li>Durability and maintenance expectations</li><li>Packaging and bulk delivery needs</li><li>Replacement parts discussion</li><li>Compliance discussion based on target market</li></ul>`)}
  ${twoCol("Metal Bunk and Dormitory Bed Directions", "", "Metal bed frames are often considered for dormitory and accommodation use because they can support practical structure, space efficiency, and easier maintenance discussion. Depending on project needs, Apexnix can discuss bunk structures, reinforced support, simple appearance, bulk packaging, and installation-related details.", img.project)}
  ${section("From Requirement to Sample Discussion", "", `<ol class="process">${[
    ["Share project type and location", "Tell us the application scenario, target country, and project environment."],
    ["Confirm bed type and size", "Discuss single bed, bunk bed, platform structure, and size requirements."],
    ["Discuss structure and use intensity", "Clarify expected use, maintenance needs, and structure direction."],
    ["Review packaging and delivery needs", "Discuss bulk handling, part organization, labels, and installation support."],
    ["Align sample direction", "Confirm key specifications and sample focus before moving forward."],
    ["Move toward order coordination", "After confirmation, we support production, packaging, quality, and export communication."],
  ].map(x => `<li class="fade-in"><div><h3>${x[0]}</h3><p>${x[1]}</p></div></li>`).join("")}</ol>`, "alt")}
  ${section("Project Supply Support for Accommodation Programs", "", linkGrid([
    ["Metal Bed Frames", "Explore metal platform, headboard, bunk, and custom structure directions.", "Explore Metal Bed Frames", "/products/metal-bed-frames"],
    ["Solutions", "Review bed frame solutions by business type and sales channel.", "View Solutions", "/solutions"],
    ["Quality Control", "Review quality points connected with project-use bed frame products.", "View Quality Control", "/bed-frame-quality-control"],
  ]))}
  <section class="section cta-band">${imageTag(img.bunkDormitory, "Dormitory bed frame sourcing discussion")}<div class="container fade-in"><h2>Discuss Dormitory Bed Frame Requirements</h2><p>Share your project type, bed type, size, location, quantity, packaging needs, and installation expectations.</p><div class="actions">${cta("Discuss Dormitory Bed Frame Requirements", "/contact")}</div></div></section>`;
}

const routes = {
  "/": home,
  "/products": products,
  "/products/metal-bed-frames": metalPage,
  "/products/bamboo-bed-frames": bambooPage,
  "/products/oem-custom-development": oemPage,
  "/solutions": solutions,
  "/capabilities": capabilities,
  "/insights": insightsPage,
  "/insights/from-bamboo-grove-to-bamboo-bed-frame": articlePage,
  "/insights/bed-frame-size-guide-us-uk-eu": sizeGuidePage,
  "/about": about,
  "/contact": contact,
  "/metal-bed-frame-manufacturer": metalManufacturerPage,
  "/oem-bed-frame-manufacturer": oemManufacturerPage,
  "/bed-frame-quality-control": qualityControlPage,
  "/metal-bed-frame-production-process": productionProcessPage,
  "/flat-pack-bed-frame-packaging": flatPackPackagingPage,
  "/dormitory-bed-frame-supplier": dormitorySupplierPage,
};
const routeMeta = {
  "/": {
    title: "Apexnix | B2B Metal & Bamboo Bed Frame Supplier",
    description: "Apexnix is a focused B2B supplier of metal bed frames, bamboo bed frames, and OEM custom bed frame development for retailers, wholesalers, online brands, project partners, and private-label programs.",
    image: img.home1,
    priority: "1.0",
    breadcrumb: [{ name: "Home", path: "/" }],
  },
  "/products": {
    title: "Bed Frame Products | Metal, Bamboo & OEM Collections",
    description: "Explore Apexnix bed frame product directions, including metal bed frames, bamboo bed frames, and OEM custom bed frame development for global B2B sourcing.",
    image: img.productHero,
    priority: "0.9",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }],
  },
  "/products/metal-bed-frames": {
    title: "Wholesale Metal Bed Frames | B2B Product Range",
    description: "Explore Apexnix metal bed frames for wholesale, retail and project supply, including platform beds, headboard frames, bunk beds and custom structures.",
    image: img.metalCard,
    priority: "0.85",
    lastmod: "2026-07-28",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "Metal Bed Frames", path: "/products/metal-bed-frames" }],
  },
  "/products/bamboo-bed-frames": {
    title: "Bamboo Bed Frame Supplier for Natural-Style Product Lines",
    description: "Apexnix offers bamboo bed frame directions for natural-style retail, online, and private-label product lines, including bamboo platform beds, minimal bamboo beds, and custom bamboo bed frame discussions.",
    image: img.bambooCard,
    priority: "0.85",
    lastmod: "2026-07-28",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "Bamboo Bed Frames", path: "/products/bamboo-bed-frames" }],
  },
  "/products/oem-custom-development": {
    title: "Custom Bed Frame Development | OEM Support by Apexnix",
    description: "Develop a custom bed frame with Apexnix, from a new structure or existing platform to sizes, finish, configuration, packaging and sample review.",
    image: img.oem,
    priority: "0.85",
    lastmod: "2026-07-28",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "OEM Custom Development", path: "/products/oem-custom-development" }],
  },
  "/solutions": {
    title: "Bed Frame Solutions by Business Type | Apexnix",
    description: "Apexnix helps e-commerce sellers, furniture retailers, wholesalers, project partners, accommodation programs, and OEM/private-label partners select market-fit bed frame solutions.",
    image: img.solutionsHero,
    priority: "0.8",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }],
  },
  "/capabilities": {
    title: "Bed Frame Manufacturing, Packaging & Quality Control Capabilities",
    description: "Learn about Apexnix bed frame supply capabilities, including product development, value engineering, packaging optimization, quality control, OEM support, sample coordination, and export-ready supply support.",
    image: img.capabilitiesHero,
    priority: "0.75",
    lastmod: "2026-07-28",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Capabilities", path: "/capabilities" }],
  },
  "/insights": {
    title: "Bed Frame Insights for Sourcing and Product Development | Apexnix",
    description: "Explore practical insights on bed frame materials, structure, manufacturing, packaging, quality control, OEM development, and market-fit product planning.",
    image: bambooStory.cardImage,
    priority: "0.8",
    lastmod: "2026-08-04",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }],
  },
  "/insights/from-bamboo-grove-to-bamboo-bed-frame": {
    title: "From Bamboo Grove to Bamboo Bed Frame | Apexnix",
    description: "See how bamboo grows, becomes engineered components, and shapes modern bamboo bed frames for retail, online, and private-label product lines.",
    ogTitle: "From Bamboo Grove to Bamboo Bed Frame",
    ogDescription: "The material story, product engineering, and commercial positioning behind modern bamboo bed frames.",
    ogType: "article",
    image: bambooStory.ogImage,
    preloadImage: bambooStory.heroImage,
    priority: "0.82",
    lastmod: "2026-07-28",
    article: bambooStory,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Insights", path: "/insights" },
      { name: "Product & Material", path: "/insights" },
      { name: bambooStory.shortTitle, path: `/insights/${bambooStory.slug}` },
    ],
  },
  "/insights/bed-frame-size-guide-us-uk-eu": {
    title: "Bed Frame Size Guide: US, UK & EU for B2B Buyers | Apexnix",
    description: "Compare common US, UK and EU mattress sizes, understand mattress fit versus overall frame dimensions, and use a practical B2B sourcing checklist.",
    ogTitle: "Bed Frame Size Guide: US, UK & EU for B2B Buyers | Apexnix",
    ogDescription: "Compare common US, UK and EU mattress sizes, understand mattress fit versus overall frame dimensions, and use a practical B2B sourcing checklist.",
    ogType: "article",
    image: sizeGuide.ogImage,
    preloadImage: sizeGuide.heroImage,
    priority: "0.82",
    lastmod: "2026-08-04",
    article: sizeGuide,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Insights", path: "/insights" },
      { name: "Sourcing Guides", path: "/insights" },
      { name: sizeGuide.shortTitle, path: `/insights/${sizeGuide.slug}` },
    ],
  },
  "/about": {
    title: "About Apexnix | Focused B2B Bed Frame Supplier",
    description: "Apexnix is a focused B2B bed frame supplier supporting metal bed frames, bamboo bed frames, OEM/custom development, packaging discussion, product line planning, and export supply coordination.",
    image: img.ourStory,
    priority: "0.7",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }],
  },
  "/contact": {
    title: "Contact Apexnix for Bed Frame Sourcing & RFQ",
    description: "Contact Apexnix to discuss metal bed frames, bamboo bed frames, OEM custom development, project supply, packaging needs, target price, quantity, and export-ready bed frame sourcing.",
    image: img.contactHero,
    priority: "0.75",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact" }],
  },
  "/metal-bed-frame-manufacturer": {
    title: "Metal Bed Frame Manufacturer | B2B & OEM Supply",
    description: "Apexnix is a metal bed frame manufacturer with its own factory and 25+ years of factory experience, supporting wholesale, project and OEM programs.",
    image: img.heavy,
    priority: "0.82",
    lastmod: "2026-07-28",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Metal Bed Frame Manufacturer", path: "/metal-bed-frame-manufacturer" }],
  },
  "/oem-bed-frame-manufacturer": {
    title: "OEM Bed Frame Manufacturer | Private Label Supply",
    description: "Work with Apexnix for OEM bed frame manufacturing, from new structures and sample development to routine factory QC, packaging and production support.",
    image: img.oem,
    priority: "0.82",
    lastmod: "2026-07-28",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "OEM Bed Frame Manufacturer", path: "/oem-bed-frame-manufacturer" }],
  },
  "/bed-frame-quality-control": {
    title: "Bed Frame Quality Control Process | Apexnix",
    description: "Learn how Apexnix approaches bed frame quality control, including material checks, welding and structure review, surface inspection, dimension check, trial assembly, packaging inspection, and pre-shipment coordination.",
    image: img.qualityControl,
    priority: "0.78",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Bed Frame Quality Control", path: "/bed-frame-quality-control" }],
  },
  "/metal-bed-frame-production-process": {
    title: "Metal Bed Frame Production Process | Apexnix",
    description: "Learn the typical metal bed frame production process, including material preparation, tube cutting, punching, bending, welding, grinding, surface treatment, trial assembly, packaging, and shipment coordination.",
    image: img.metalMore,
    priority: "0.78",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Metal Bed Frame Production Process", path: "/metal-bed-frame-production-process" }],
  },
  "/flat-pack-bed-frame-packaging": {
    title: "Flat-Pack Bed Frame Packaging Solutions | Apexnix",
    description: "Apexnix supports flat-pack and KD bed frame packaging discussion, including carton size planning, protection, hardware organization, instruction manual, labels, private-label packaging, and loading efficiency.",
    image: img.ecommerce,
    priority: "0.78",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Flat-Pack Bed Frame Packaging", path: "/flat-pack-bed-frame-packaging" }],
  },
  "/dormitory-bed-frame-supplier": {
    title: "Dormitory Bed Frame Supplier for Accommodation & Project Use",
    description: "Apexnix supports dormitory and accommodation bed frame solutions for schools, staff housing, hostels, rental apartments, and project partners, including metal bunk beds, reinforced structures, packaging, installation, and maintenance discussion.",
    image: img.bunkDormitory,
    priority: "0.78",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Dormitory Bed Frame Supplier", path: "/dormitory-bed-frame-supplier" }],
  },
};
const indexableRoutes = Object.keys(routeMeta);

function routePath(path = "/") {
  return path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
}

function routeUrl(path = "/") {
  return `${SITE_URL}${routePath(path)}`;
}

function assetUrl(src) {
  if (/^https?:\/\//i.test(src)) return src;
  const path = String(src).replace(/^\.?\//, "/");
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function runtimeAssetHref(fileName) {
  if (window.location.protocol === "file:") return new URL(fileName, scriptUrl).href;
  return `${BASE_PATH}/${fileName}`;
}

function getRouteMeta(path = "/") {
  return routeMeta[path] || routeMeta["/"];
}

function schemasForPath(path = "/") {
  const meta = getRouteMeta(path);
  const breadcrumb = meta.breadcrumb || routeMeta["/"].breadcrumb;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Apexnix Co.,Ltd.",
      url: routeUrl("/"),
      email: CONTACT_EMAIL,
      logo: `${SITE_URL}/${LOGO_FILE}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "No.88 Anling 2nd Road , Huli District",
        addressLocality: "Xiamen",
        addressCountry: "CN",
      },
      knowsAbout: [
        "Metal bed frames",
        "Bamboo bed frames",
        "OEM bed frame development",
        "Private label bed frames",
        "Export-ready bed frame supply",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: routeUrl("/"),
      publisher: { "@type": "Organization", name: "Apexnix Co.,Ltd." },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: meta.title,
      description: meta.description,
      url: routeUrl(path),
      image: assetUrl(meta.image),
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: routeUrl("/") },
      about: { "@type": "Thing", name: "B2B bed frame supplier" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: routeUrl(item.path),
      })),
    },
  ];

  if (meta.article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: meta.article.title,
      description: meta.description,
      image: assetUrl(meta.article.ogImage),
      datePublished: meta.article.publishedAt,
      dateModified: meta.article.modifiedAt,
      articleSection: meta.article.category,
      author: {
        "@type": "Organization",
        name: "Apexnix Product Team",
        url: routeUrl("/about"),
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: routeUrl("/"),
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": routeUrl(path),
      },
    });

    if (meta.article.video) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: meta.article.video.name,
        description: meta.article.video.description,
        thumbnailUrl: assetUrl(meta.article.video.poster),
        contentUrl: assetUrl(meta.article.video.contentUrl),
        uploadDate: meta.article.video.uploadDate,
        duration: meta.article.video.duration,
      });
    }
  }

  return schemas;
}

function ensureHeadTag(selector, createTag) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = createTag();
    document.head.appendChild(node);
  }
  return node;
}

function ensureMetaName(name) {
  return ensureHeadTag(`meta[name="${name}"]`, () => {
    const node = document.createElement("meta");
    node.setAttribute("name", name);
    return node;
  });
}

function ensureMetaProperty(property) {
  return ensureHeadTag(`meta[property="${property}"]`, () => {
    const node = document.createElement("meta");
    node.setAttribute("property", property);
    return node;
  });
}

function ensureLinkRel(rel) {
  return ensureHeadTag(`link[rel="${rel}"]`, () => {
    const node = document.createElement("link");
    node.setAttribute("rel", rel);
    return node;
  });
}

function updateDocumentMeta(path = "/") {
  const meta = getRouteMeta(path);
  const canonical = routeUrl(path);
  const image = assetUrl(meta.image);
  const socialTitle = meta.ogTitle || meta.title;
  const socialDescription = meta.ogDescription || meta.description;
  document.title = meta.title;
  ensureMetaName("description").setAttribute("content", meta.description);
  ensureMetaName("robots").setAttribute("content", "index, follow");
  ensureLinkRel("canonical").setAttribute("href", canonical);
  ensureMetaProperty("og:site_name").setAttribute("content", SITE_NAME);
  ensureMetaProperty("og:type").setAttribute("content", meta.ogType || "website");
  ensureMetaProperty("og:locale").setAttribute("content", "en_US");
  ensureMetaProperty("og:title").setAttribute("content", socialTitle);
  ensureMetaProperty("og:description").setAttribute("content", socialDescription);
  ensureMetaProperty("og:url").setAttribute("content", canonical);
  ensureMetaProperty("og:image").setAttribute("content", image);
  ensureMetaName("twitter:card").setAttribute("content", "summary_large_image");
  ensureMetaName("twitter:title").setAttribute("content", socialTitle);
  ensureMetaName("twitter:description").setAttribute("content", socialDescription);
  ensureMetaName("twitter:image").setAttribute("content", image);
  ensureLinkRel("icon").setAttribute("href", runtimeAssetHref(AVATAR_FILE));
  ensureLinkRel("apple-touch-icon").setAttribute("href", runtimeAssetHref(AVATAR_FILE));
  ensureLinkRel("manifest").setAttribute("href", runtimeAssetHref("site.webmanifest"));

  ["article:published_time", "article:modified_time", "article:author"].forEach((property) => {
    document.head.querySelector(`meta[property="${property}"]`)?.remove();
  });
  if (meta.article) {
    ensureMetaProperty("article:published_time").setAttribute("content", meta.article.publishedAt);
    ensureMetaProperty("article:modified_time").setAttribute("content", meta.article.modifiedAt);
    ensureMetaProperty("article:author").setAttribute("content", meta.article.author);
  }

  const schemaNode = ensureHeadTag('script[type="application/ld+json"][data-route-schema]', () => {
    const node = document.createElement("script");
    node.setAttribute("type", "application/ld+json");
    node.setAttribute("data-route-schema", "");
    return node;
  });
  schemaNode.textContent = JSON.stringify(schemasForPath(path));
}

function getRouteFromLocation() {
  if (window.location.protocol === "file:" || window.location.hash.startsWith("#/")) {
    const hashRoute = window.location.hash.startsWith("#/") ? window.location.hash.slice(1) : "/";
    const [path, anchor] = hashRoute.split("#");
    return {
      path: (path.replace(/\/$/, "") || "/"),
      anchor: anchor ? `#${anchor}` : "",
    };
  }

  const pathname = window.location.pathname
    .replace(/\/index\.html$/, "")
    .replace(basePattern, "")
    .replace(/\/$/, "") || "/";
  return {
    path: pathname,
    anchor: window.location.hash,
  };
}

function normalizeRoute(route = "/") {
  const [pathPart = "/", hash = ""] = String(route).split("#");
  const cleanPath = pathPart.replace(/\/index\.html$/, "").replace(/\/$/, "") || "/";
  return `${cleanPath}${hash ? `#${hash}` : ""}`;
}

function getRouteFromHref(href) {
  if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return null;
  if (/^https?:\/\//i.test(href)) {
    const url = new URL(href);
    if (url.origin !== window.location.origin) return null;
    return normalizeRoute(`${url.pathname.replace(basePattern, "") || "/"}${url.hash}`);
  }
  if (href.startsWith("#")) return normalizeRoute(`${getRouteFromLocation().path}${href}`);
  if (href.startsWith("/")) return normalizeRoute(href);
  const url = new URL(href, window.location.href);
  return normalizeRoute(`${url.pathname.replace(basePattern, "") || "/"}${url.hash}`);
}

function toDeployedPath(route) {
  const [path, hash = ""] = normalizeRoute(route).split("#");
  const canonicalPath = routePath(path);
  if (window.location.protocol === "file:") return `${canonicalPath}${hash ? `#${hash}` : ""}`;
  return `${BASE_PATH}${canonicalPath}${hash ? `#${hash}` : ""}`;
}

function getStoredTheme() {
  try {
    const theme = localStorage.getItem(THEME_KEY);
    return theme === "dark" || theme === "light" ? theme : "";
  } catch {
    return "";
  }
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme, persist = true) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.style.colorScheme = nextTheme;

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    const targetTheme = nextTheme === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", `Switch to ${targetTheme} mode`);
    button.setAttribute("title", `Switch to ${targetTheme} mode`);
    button.setAttribute("aria-pressed", String(nextTheme === "dark"));
  });

  if (!persist) return;
  try {
    localStorage.setItem(THEME_KEY, nextTheme);
  } catch {}
}

function bindThemeToggle() {
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.onclick = () => {
      const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    };
  });
}

function render() {
  const { path, anchor } = getRouteFromLocation();
  updateDocumentMeta(path);
  document.querySelector("#app").innerHTML = (routes[path] || home)();
  document.querySelector(".main-nav").classList.remove("open");
  bindLinks();
  bindCarousel();
  bindTabs();
  bindContactForm();
  bindLazyVideos();
  bindChecklistPrint();
  observe();
  if (anchor) setTimeout(() => document.querySelector(anchor)?.scrollIntoView(), 50);
  else window.scrollTo({ top: 0 });
}

function bindLinks() {
  if (document.documentElement.dataset.linksBound) return;
  document.documentElement.dataset.linksBound = "true";
  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest("a[data-link]");
    if (!link || link.target) return;
    const route = getRouteFromHref(link.getAttribute("href"));
    if (!route) return;
    event.preventDefault();
    const nextPath = toDeployedPath(route);
    if (window.location.protocol === "file:") {
      window.location.hash = nextPath;
    } else {
      history.pushState({}, "", nextPath);
    }
    render();
  });
}
function bindCarousel() {
  const el = document.querySelector("[data-carousel]");
  if (!el) return;
  let i = 0;
  const bgs = [...el.querySelectorAll(".hero-bg")];
  const copies = [...el.querySelectorAll(".slide-copy")];
  const dots = [...el.querySelectorAll("[data-dot]")];
  const show = (n) => {
    i = (n + bgs.length) % bgs.length;
    bgs.forEach((x, k) => x.classList.toggle("active", k === i));
    copies.forEach((x, k) => { x.classList.toggle("active", k === i); x.hidden = k !== i; });
    dots.forEach((x, k) => x.classList.toggle("active", k === i));
  };
  el.querySelector("[data-prev]").onclick = () => show(i - 1);
  el.querySelector("[data-next]").onclick = () => show(i + 1);
  dots.forEach((d) => d.onclick = () => show(Number(d.dataset.dot)));
  clearInterval(window.carouselTimer);
  window.carouselTimer = setInterval(() => show(i + 1), 12000);
}
function bindTabs() {
  const tabs = document.querySelector("[data-tabs]");
  if (!tabs) return;
  const panel = tabs.querySelector("[data-panel]");
  const buttons = [...tabs.querySelectorAll("[data-tab]")];
  const show = (i) => {
    buttons.forEach((b, k) => b.classList.toggle("active", k === i));
    panel.innerHTML = renderTab(i);
  };
  buttons.forEach((b) => b.onclick = () => show(Number(b.dataset.tab)));
  show(0);
}
function bindContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  form.onsubmit = async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const subject = ["Bed Frame Request", company || name].filter(Boolean).join(" - ");
    const status = form.querySelector("[data-contact-status]");
    const button = form.querySelector("button[type='submit']");
    const buttonLabel = button?.innerHTML;

    data.set("access_key", WEB3FORMS_ACCESS_KEY);
    data.set("subject", subject);
    data.set("from_name", "Apexnix Website");

    if (status) {
      status.hidden = false;
      status.classList.remove("error");
      status.textContent = "Sending your request...";
    }
    if (button) {
      button.disabled = true;
      button.textContent = "Sending...";
    }

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error(result.message || "Form submission failed");
      form.reset();
      if (status) status.textContent = "Thank you. Your request has been sent successfully.";
    } catch (error) {
      if (status) {
        status.classList.add("error");
        status.textContent = `Sorry, your request could not be sent. Please email us at ${CONTACT_EMAIL}.`;
      }
    } finally {
      if (button) {
        button.disabled = false;
        button.innerHTML = buttonLabel;
      }
    }
  };
}
function bindLazyVideos() {
  const videos = [...document.querySelectorAll("video[data-lazy-video]")];
  if (!videos.length) return;

  const loadVideo = (video) => {
    const source = video.querySelector("source[data-src]");
    if (!source) return;
    source.src = source.dataset.src;
    source.removeAttribute("data-src");
    video.load();
  };

  if (!("IntersectionObserver" in window)) {
    videos.forEach(loadVideo);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      loadVideo(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.01 });

  videos.forEach((video) => observer.observe(video));
}
function bindChecklistPrint() {
  const openButton = document.querySelector("[data-open-checklist-print]");
  const downloadLink = document.querySelector("[data-download-checklist-pdf]");
  const closeButton = document.querySelector("[data-close-checklist-print]");
  const printStatus = document.querySelector("[data-checklist-print-status]");
  if (!openButton || !downloadLink || !closeButton || !printStatus) return;

  const defaultStatus = "Download the ready-to-use A4 PDF checklist below. No print dialog is required.";

  const closePreview = () => {
    document.body.classList.remove("size-guide-print-preview-mode", "size-guide-print-mode");
    printStatus.textContent = defaultStatus;
    openButton.focus({ preventScroll: true });
  };

  openButton.onclick = () => {
    document.body.classList.add("size-guide-print-preview-mode");
    printStatus.textContent = defaultStatus;
    window.scrollTo({ top: 0, behavior: "smooth" });
    downloadLink.focus({ preventScroll: true });
  };

  closeButton.onclick = closePreview;
  downloadLink.onclick = () => {
    printStatus.textContent = "PDF download started. Check your browser's downloads if the file does not open automatically.";
  };
}
function observe() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".fade-in").forEach((x) => io.observe(x));
}

document.querySelector(".nav-toggle").onclick = (e) => {
  const nav = document.querySelector(".main-nav");
  nav.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", nav.classList.contains("open"));
};
applyTheme(getStoredTheme() || document.documentElement.dataset.theme || getSystemTheme(), false);
bindThemeToggle();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (!getStoredTheme()) applyTheme(event.matches ? "dark" : "light", false);
});
window.addEventListener("popstate", render);
window.addEventListener("hashchange", () => {
  if (window.location.protocol === "file:" || window.location.hash.startsWith("#/")) render();
});
render();
