const scriptUrl = new URL(document.currentScript?.src || "./app.js", window.location.href);
const deployedBase = scriptUrl.pathname.replace(/\/app\.js$/, "").replace(/\/$/, "");
const BASE_PATH = window.location.protocol === "file:" ? "" : deployedBase;
const SITE_URL = "https://www.apexnix.com";
const SITE_NAME = "Apexnix";
const CONTACT_EMAIL = "sales@apextella.com";
const LOGO_FILE = "apexnix-logo-light.svg";
const LOGO_DARK_FILE = "apexnix-logo-dark.svg";
const AVATAR_FILE = "apexnix-avatar.svg";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "596ad054-05e1-4abb-b4c5-d12debc21725";
const THEME_KEY = "apexnix-theme";
const A = window.location.protocol === "file:" ? new URL("assets/", scriptUrl).href : `${BASE_PATH}/assets/`;
const insightsData = globalThis.APEXNIX_INSIGHTS || { categories: [], articles: [] };
const bambooStory = insightsData.articles[0];
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
};

const specMetal = [
  ["Product Types", "Platform metal bed frames; bed frames with headboard; storage-friendly frames; bunk beds & dormitory solutions; OEM / custom structures"],
  ["Size Platform", "US: Twin, Twin XL, Full, Queen, King, Cal King / Europe: Single, Double, King, Super King; support custom dimensions"],
  ["Core Height Options", "14'' / 18''; support custom height"],
  ["Structure Options", "Basic platform frame; frame with headboard / footboard; project-based bunk or dormitory structure"],
  ["Frame Material", "Steel / iron frame structure, depending on product design and requirement"],
  ["Slat / Support System", "Metal slats, reinforced support bars, or customized support structure"],
  ["Surface Finish", "Powder coating; common colors include matte black, white, grey, or custom colors"],
  ["Packaging", "KD / flat-pack packaging; carton, instruction manual, label, and private label options available"],
  ["Customization", "Size, height, structure, color, packaging, label, instruction manual, and project-based development"],
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
  ["Size", "US / EU / UK size platforms, custom dimensions, project-specific requirements"],
  ["Height", "14'' / 18'', or custom height based on product direction"],
  ["Structure", "Platform frame, headboard / footboard, reinforced structure, bunk structure, storage-friendly structure"],
  ["Material", "Steel / iron frame, bamboo-based structure, mixed material direction"],
  ["Surface / Appearance", "Powder coating, common colors, natural bamboo appearance, custom finish / color discussion"],
  ["Packaging", "KD / flat-pack packaging, carton size, protection, instruction manual"],
  ["Private Label", "Carton mark, barcode label, product label, retail label, brand presentation"],
  ["Project Requirements", "Bulk delivery, installation discussion, maintenance, replacement parts, compliance discussion based on target market"],
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
function simpleHero({ title, subtitle, body = "", image, tagItems = [], actions = "" }) {
  return `<section class="hero short">
    <div class="hero-bg active">${imageTag(image, title, { priority: true })}</div>
    <div class="hero-content fade-in">
      <span class="kicker">Apexnix</span>
      <h1>${title}</h1>
      <p>${subtitle}</p>
      ${body ? `<p>${body}</p>` : ""}
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
function iconGrid(cards) {
  return `<div class="grid-4">${cards.map((x) => `<article class="card icon-card fade-in"><span class="line-icon">${x.icon}</span><h3>${x.title}</h3><p>${x.body}</p></article>`).join("")}</div>`;
}
function linkGrid(links) {
  return `<div class="grid-3">${links.map((x) => `<article class="card icon-card link-card fade-in"><h3>${x[0]}</h3><p>${x[1]}</p><div class="actions">${cta(x[2], x[3], true)}</div></article>`).join("")}</div>`;
}
function section(title, intro, body, cls = "", id = "") {
  return `<section class="section ${cls}" ${id ? `id="${id}"` : ""}><div class="container"><div class="section-head fade-in"><span class="kicker">Apexnix</span><h2>${title}</h2>${intro ? `<p>${intro}</p>` : ""}</div>${body}</div></section>`;
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
  const categoryLinks = insightsData.categories.map((category) => {
    const slug = category === "All" ? "" : category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const href = slug ? `/insights/?category=${slug}` : "/insights/";
    return `<a class="${category === "All" ? "active" : ""}" href="${href}">${category}</a>`;
  }).join("");

  return `<section class="section insights-index-hero"><div class="container">
    <div class="insights-index-hero__copy fade-in"><span class="kicker">Apexnix Insights</span><h1>Bed Frame Insights for Better Product and Sourcing Decisions</h1><p>Practical articles on bed frame materials, structure, manufacturing, packaging, quality control, OEM development, and market-fit product planning.</p></div>
    <nav class="insights-categories" aria-label="Insight categories">${categoryLinks}</nav>
  </div></section>
  <section class="section alt insights-featured"><div class="container">
    <div class="section-head fade-in"><span class="kicker">Featured Article</span><h2>Product &amp; Material</h2></div>
    <article class="featured-article fade-in">
      <a class="featured-article__media" href="/insights/${bambooStory.slug}/" data-link aria-label="Read ${escapeAttr(bambooStory.shortTitle)}">${imageTag(bambooStory.cardImage, bambooStory.cardAlt, { sizes: "(max-width: 800px) 100vw, 650px" })}</a>
      <div class="featured-article__body"><span class="kicker">${bambooStory.category}</span><h3><a href="/insights/${bambooStory.slug}/" data-link>${bambooStory.shortTitle}</a></h3><p>${bambooStory.excerpt}</p><div class="actions">${cta("Read Article", `/insights/${bambooStory.slug}`, true)}</div></div>
    </article>
  </div></section>`;
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
    <section class="section article-cta"><div class="container"><div class="article-cta__inner fade-in"><span class="kicker">Bamboo Bed Frame Development</span><h2>Exploring a Bamboo Bed Frame Product Line?</h2><p>Apexnix supports bamboo bed frame discussions for retailers, online brands, wholesalers, and private-label partners looking for a differentiated natural-style product direction.</p><p>Review our bamboo bed frame product directions or share your target market, sales channel, expected quantity, and product requirements with our team.</p><p>Share your target market, sales channel, expected quantity, and product requirements. Apexnix will help you evaluate suitable bamboo bed frame structures, sizes, packaging, and private-label directions.</p><div class="actions">${cta("Explore Bamboo Bed Frame Options", "/products/bamboo-bed-frames")} ${cta("Send a Bed Frame Sourcing Request", "/contact", true)}</div></div></div></section>
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
    title: "Metal Bed Frame Supplier for B2B Partners",
    subtitle: "Apexnix provides practical metal bed frame product directions for retailers, online brands, wholesalers, private-label partners, and project teams.",
    body: "Our metal bed frame collection focuses on strong structure, efficient packaging, easy assembly, flexible sizing, and cost-performance balance.",
    image: img.metalCard,
    tagItems: ["Metal Platform Beds", "Headboard Bed Frames", "Bunk & Dormitory Solutions", "OEM / Custom Structures"],
    actions: cta("Discuss Your Metal Bed Frame Project", "/contact"),
  })}
  ${section("Metal Bed Frame Product Directions", "This collection covers core platform frames, retail-facing decorative metal beds, accommodation-use bunk solutions, and additional design directions available for development discussion.", iconGrid([
    { icon: "▣", title: "Platform Frames", body: "Core durable structures for retail, online sales, wholesale, and project use." },
    { icon: "▥", title: "Headboard Frames", body: "Clean-line decorative metal beds for more complete bedroom product lines." },
    { icon: "▤", title: "Dormitory Solutions", body: "Space-efficient and durable concepts for accommodation projects." },
    { icon: "◎", title: "Custom Structures", body: "Size, height, finish, packaging, and private-label support." },
  ]), "alt")}
  ${twoCol("Heavy-Duty Platform Beds", "A practical metal platform bed direction built for strength, stability, and cost-efficient supply.", "Heavy-duty platform beds are one of our core metal bed frame directions. With clean structure, strong steel support, and practical under-bed clearance, this type is suitable for retail, online sales, wholesale, rental housing, or project use.<br><br>The design focuses on durability, easy assembly, flat-pack potential, and cost-performance balance.", img.heavy, `<ul class="check-list"><li>Strong steel structure</li><li>Platform support system</li><li>No box spring needed</li><li>Storage-friendly under-bed clearance</li><li>Flat-pack packaging potential</li></ul><div class="mini-features"><span>Heavy Duty</span><span>No Box Spring Needed</span><span>Storage Friendly</span><span>Easy Assembly</span><span>Flat-Pack Ready</span></div><div class="actions">${cta("Discuss Platform Bed Options", "/contact", true)}</div>`)}
  ${twoCol("Bed Frames with Headboard", "A more complete metal bed frame direction for partners who need both structure and visual appeal.", "Bed frames with headboards give users a more finished bedroom product compared with basic platform frames. This direction combines practical metal support with clean-line decorative design, making it suitable for retail, online product pages, and private label collections.", img.headboard, `<div class="gallery"><figure>${imageTag(img.headboard, "Headboard bed frame")}<figcaption>Modern Minimal</figcaption></figure><figure>${imageTag(img.home1, "Metal frame")}<figcaption>Clean Line</figcaption></figure><figure>${imageTag(img.heavy, "Retail bed frame")}<figcaption>Retail Friendly</figcaption></figure><figure>${imageTag(img.metalMore, "Private label direction")}<figcaption>Private Label Potential</figcaption></figure></div><div class="actions">${cta("Explore Headboard Bed Frame Options", "/contact", true)}</div>`, true, "alt")}
  ${section("Bunk Beds & Dormitory Solutions", "Metal bed frame solutions for accommodation and high-use environment.", `<div class="split"><div class="image-panel fade-in">${imageTag(img.bunkDormitory, "Dormitory bed frame solutions")}</div><div class="fade-in"><p>For dormitories, schools, staff housing, hostels, rental apartments, and other accommodation projects, bed frames need to be durable, space-efficient, easy to install, and simple to maintain. We can support development for bunk beds, dormitory beds, and accommodation-use metal bed frame solutions based on your requirements.</p><br><ul class="check-list"><li>Single bed and bunk bed concepts</li><li>Dormitory-use structure discussion</li><li>Reinforced support</li><li>Simple installation</li><li>Bulk order coordination</li></ul><div class="actions">${cta("Discuss Bunk Bed Solutions", "/contact")}</div></div></div>`, "steel-band")}
  ${twoCol("More Metal Bed Frame Design Directions", "", "In addition to our core metal platform and headboard bed frame directions, we can discuss more design variations based on your product line needs. These directions may include storage-friendly frames, foldable structures, decorative metal styles, sofa bed options, box spring support frames, and project-based concepts.", img.metalMore, `${tags(["Basic Platform Frames", "Metal Frames with Headboard", "Storage-Friendly High Clearance Frames", "Foldable / Easy-Assembly Frames", "Sofa Bed Options", "Decorative Metal Frame Styles", "Box Spring Support Frames", "Project-Based Concepts"], true)}<p>The designs shown here represent available bed frame directions and development references. Final product selection, specifications, and quotation can be confirmed during product discussion.</p>`)}
  ${section("Metal Bed Frame Specification Options", "", table(specMetal), "alt")}
  ${section("Metal Bed Frame Supply Planning", "Metal bed frame sourcing is easier to evaluate when product direction, production flow, quality control, packaging, and project-use requirements are discussed together.", linkGrid([
    ["Metal Bed Frame Manufacturer", "Manufacturing and development support for retail, wholesale, project, and private-label metal bed frame programs.", "View Manufacturer Page", "/metal-bed-frame-manufacturer"],
    ["Production Process", "Understand the typical metal bed frame production flow from requirements to packaging.", "View Production Process", "/metal-bed-frame-production-process"],
    ["Quality Control", "Review practical inspection points for structure, surface finish, hardware, assembly, and packaging.", "View Quality Control", "/bed-frame-quality-control"],
    ["Flat-Pack Packaging", "Explore KD and flat-pack packaging discussion points for bed frame sourcing.", "View Packaging Support", "/flat-pack-bed-frame-packaging"],
    ["Dormitory Bed Frame Supplier", "Review project-use and accommodation bed frame discussion points.", "View Dormitory Solutions", "/dormitory-bed-frame-supplier"],
    ["Contact Apexnix", "Share your target market, quantity, target price, and product requirements.", "Send Bed Frame Sourcing Request", "/contact"],
  ]))}
  <section class="section cta-band">${imageTag(img.oem, "Metal bed frame discussion")}<div class="container fade-in"><h2>Looking for the Right Metal Bed Frame Direction?</h2><p>Share your market, sales channel, product idea, and supply needs. We will help you explore suitable metal bed frame solutions for your business.</p><div class="actions">${cta("Send Bed Frame Sourcing Request", "/contact")}</div></div></section>`;
}

function bambooPage() {
  return `${simpleHero({
    title: "Bamboo Bed Frame Supplier for Natural-Style Collections",
    subtitle: "Apexnix provides bamboo bed frame product directions for partners looking to add natural-style, warm, and differentiated bed frame options to their product lines.",
    body: "Bamboo bed frames can support selected retail, online, compact living, and private-label collections where material identity and visual warmth matter.",
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
    linkLabel: "Read the Bamboo Material Story",
  })}
  <section class="section cta-band">${imageTag(img.bambooMore, "Bamboo bed frame discussion")}<div class="container fade-in"><h2>Looking for a Natural-Style Bed Frame Direction?</h2><p>Share your product line idea and market needs. We will help you explore suitable bamboo bed frame options.</p><div class="actions">${cta("Send Bed Frame Sourcing Request", "/contact")}</div></div></section>`;
}

function oemPage() {
  return `${simpleHero({
    title: "OEM / Custom Bed Frame Development",
    subtitle: "Apexnix supports OEM and custom bed frame development for partners who need more than standard models.",
    body: "We help discuss product positioning, target market, structure, size, material direction, packaging, private label needs, and target-price requirements before moving into sampling and production coordination.",
    image: img.oem,
    tagItems: ["OEM Product Development", "Custom Sizes & Structures", "Packaging Customization", "Private Label Support", "Project-Based Manufacturing", "Material Combination Solutions"],
    actions: cta("Start Custom Development", "/contact"),
  })}
  ${twoCol("From Standard Models to Market-Fit Product Lines", "", "In B2B bed frame sourcing, a standard model is often only the starting point. Different partners may need different structures, size platforms, packaging methods, labels, finishes, or project requirements.<br><br>Our custom development approach focuses on turning product ideas into practical, manufacturable, and supply-ready bed frame solutions.", img.oemCard, `<ul class="check-list"><li>What product direction fits the market</li><li>What structure supports the use scenario</li><li>What packaging supports the sales channel</li><li>What customization is necessary</li><li>What can remain standardized for better efficiency</li></ul>`, false, "alt")}
  ${section("Development Scope", "", iconGrid([
    { icon: "01", title: "OEM Product Development", body: "Develop or adjust bed frame products based on your brand, channel, and product line needs." },
    { icon: "02", title: "Custom Sizes & Structures", body: "Support discussion on size platforms, height, headboard design, support structure, storage clearance, and frame construction." },
    { icon: "03", title: "Packaging Customization", body: "Discuss carton size, protection, instruction manual, labels, and private label packaging." },
    { icon: "04", title: "Project-Based Manufacturing", body: "Support product direction discussion for dormitories, rental housing, accommodation projects, and bulk-use environment." },
  ]) + `<div class="grid-2" style="margin-top:22px">${[
    ["Material Combination Solutions", "Explore metal, bamboo, wood-look, mixed material, and finish combinations based on product positioning."],
    ["Commercial Positioning Support", "Discuss how the product should be positioned for online sales, retail, wholesale, project supply, or private-label collections."],
  ].map(x => `<article class="card icon-card fade-in"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("")}</div>`)}
  ${section("Customization Matrix", "", table(customMatrix, "Custom Area", "What Can Be Discussed"), "alt")}
  ${section("How Custom Development Works", "", `<ol class="process">${[
    ["Share Your Requirement", "Tell us your product idea, sales channel, target market, quantity estimate, and customization needs."],
    ["Clarify Product Direction", "We discuss suitable bed frame type, structure, material direction, packaging logic, and commercial positioning."],
    ["Review Existing References", "We check whether an existing platform can be adapted, or whether a new development direction is needed."],
    ["Confirm Sample Direction", "We align on structure, size, appearance, packaging, label, and key requirements before sampling."],
    ["Sample & Adjustment", "Samples can be reviewed and adjusted based on assembly, structure, packaging, and market feedback."],
    ["Move Toward Production", "After confirmation, we support production coordination, packaging preparation, quality control, and export communication."],
  ].map(x => `<li class="fade-in"><div><h3>${x[0]}</h3><p>${x[1]}</p></div></li>`).join("")}</ol>`)}
  ${twoCol("Packaging and Private Label Support", "", "For B2B bed frame products, packaging is part of product competitiveness. It affects logistics, warehouse efficiency, customer experience, assembly clarity, and after-sales risk.", img.ecommerce, `<ul class="check-list"><li>KD / flat-pack packaging</li><li>Carton size planning</li><li>Protection material discussion</li><li>Instruction manual support</li><li>Carton mark and barcode label</li><li>Private-label packaging direction</li></ul>`, false, "alt")}
  ${twoCol("Project-Based Manufacturing Support", "", "For accommodation, rental, dormitory, hospitality, and bulk-use environments, product development needs to consider use intensity, structure, installation, maintenance, packaging, and delivery coordination.", img.projectManufacturing, `<ul class="check-list"><li>Project-use metal bed frame direction</li><li>Bunk and dormitory bed concepts</li><li>Reinforced support options</li><li>Bulk packaging</li><li>Maintenance and replacement considerations</li><li>Compliance testing discussion based on target market</li></ul>`)}
  ${section("What to Prepare for RFQ", "A clear RFQ helps us recommend the right product direction faster.", iconGrid([
    { icon: "1", title: "Market & Channel", body: "Target country, sales channel, and customer type." },
    { icon: "2", title: "Product Direction", body: "Metal, bamboo, headboard, platform, bunk, or custom concept." },
    { icon: "3", title: "Commercial Needs", body: "Quantity estimate, target price range, packaging needs, and branding requirements." },
    { icon: "4", title: "References", body: "Photos, drawings, sizes, benchmark products, or project requirements." },
  ]), "alt")}
  ${section("Custom Bed Frame Development Support", "OEM bed frame development works best when product requirements, packaging logic, quality expectations, and RFQ details are aligned from the beginning.", linkGrid([
    ["OEM Bed Frame Manufacturer", "Review OEM development support for private-label partners, online brands, retailers, wholesalers, and project teams.", "View OEM Manufacturer Page", "/oem-bed-frame-manufacturer"],
    ["Flat-Pack Packaging", "Explore carton planning, protection, instructions, labeling, and private-label packaging topics.", "View Packaging Support", "/flat-pack-bed-frame-packaging"],
    ["Quality Control", "Review practical quality points for structure, assembly, surface finish, hardware, and packaging.", "View Quality Control", "/bed-frame-quality-control"],
  ]))}
  <section class="section cta-band">${imageTag(img.oem, "Custom bed frame development")}<div class="container fade-in"><h2>Ready to Develop a Bed Frame Product Around Your Market?</h2><p>Share your product idea, customization needs, and supply expectations. We will help you explore a practical development direction.</p><div class="actions">${cta("Start Custom Development", "/contact")}</div></div></section>`;
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
  <section class="section"><div class="container"><ol class="process">${caps.map((x) => `<li class="fade-in"><div class="split"><div><h3>${x[0]}</h3><p>${x[2]}</p></div><div class="image-panel soft">${imageTag(x[1], x[0])}</div></div></li>`).join("")}</ol></div></section>
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
    title: "Metal Bed Frame Manufacturer for Retail, Wholesale and Project Supply",
    subtitle: "Apexnix supports global B2B partners with practical metal bed frame product directions, including platform beds, bed frames with headboards, bunk and dormitory solutions, and OEM/custom metal bed frame development.",
    body: "Our focus is to help partners balance structure, cost, packaging, assembly, and market-fit requirements.",
    image: img.heavy,
    tagItems: ["Retail and Wholesale Supply", "Online Brand Programs", "Accommodation Projects", "Private-Label Development"],
    actions: cta("Discuss Your Metal Bed Frame Project", "/contact"),
  })}
  ${section("Metal Bed Frame Solutions for B2B Channels", "Different sales channels require different metal bed frame solutions. Online sellers may focus on flat-pack packaging and easy assembly. Retailers and wholesalers may need stable product lines and flexible size options. Project partners may care more about structure, installation, maintenance, and bulk-use durability.", `<ul class="check-list"><li>Online brands and e-commerce sellers</li><li>Furniture retailers and wholesalers</li><li>Importers and distributors</li><li>Accommodation and dormitory project partners</li><li>OEM and private-label partners</li></ul>`, "alt")}
  ${section("Product Directions We Can Discuss", "", iconGrid([
    { icon: "01", title: "Heavy-Duty Metal Platform Beds", body: "Practical platform structures for retail, online sales, wholesale, rental housing, and project use." },
    { icon: "02", title: "Metal Bed Frames with Headboard", body: "Clean-line metal bed frames for partners who need a more complete bedroom product line." },
    { icon: "03", title: "Bunk Beds and Dormitory Solutions", body: "Metal bed frame directions for dormitories, staff housing, hostels, schools, rental apartments, and bulk-use environments." },
    { icon: "04", title: "OEM / Custom Metal Structures", body: "Custom discussion for size, structure, height, support system, finish, packaging, and private-label requirements." },
  ]))}
  ${section("Key Sourcing Discussion Points", "A clear sourcing discussion helps connect product structure with sales channel, commercial position, and packaging needs.", `<ul class="check-list"><li>Size platform: US, UK, EU, or custom dimensions</li><li>Height options: 14 inch, 18 inch, or custom height discussion</li><li>Structure: platform, headboard, footboard, bunk, reinforced structure</li><li>Surface finish: powder coating and common color direction</li><li>Packaging: KD / flat-pack packaging, carton planning, labels, instruction manual</li><li>Commercial target: commercial positioning, sales channel, quantity, and product positioning</li></ul>`, "alt")}
  ${twoCol("Why Work with a Focused Bed Frame Supplier", "", "A focused bed frame supplier can support more than production. Product competitiveness also depends on structure, packaging efficiency, assembly experience, cost balance, and after-sales risk. Apexnix works with partners to discuss these factors before quotation, sampling, and production coordination.", img.metalMore, `${tags(["Structure Discussion", "Packaging Efficiency", "Assembly Experience", "Cost Balance", "After-Sales Risk Reduction"], true)}<div class="actions">${cta("Discuss Your Metal Bed Frame Project", "/contact", true)}</div>`)}
  ${section("Metal Bed Frame Supply Support", "", linkGrid([
    ["Metal Bed Frames Collection", "Explore current metal platform, headboard, bunk, and custom structure directions.", "Explore Metal Bed Frames", "/products/metal-bed-frames"],
    ["Production Process", "Review a typical metal bed frame production flow.", "View Production Process", "/metal-bed-frame-production-process"],
    ["Quality Control", "Review practical quality control points for bed frame products.", "View Quality Control", "/bed-frame-quality-control"],
    ["Flat-Pack Packaging", "Explore packaging and carton planning topics.", "View Packaging Support", "/flat-pack-bed-frame-packaging"],
  ]), "alt")}
  <section class="section cta-band">${imageTag(img.oem, "Metal bed frame project discussion")}<div class="container fade-in"><h2>Discuss Your Metal Bed Frame Project</h2><p>Share your target market, product direction, quantity, target price, and packaging needs. We will help you evaluate suitable metal bed frame options.</p><div class="actions">${cta("Send Bed Frame Sourcing Request", "/contact")}</div></div></section>`;
}

function oemManufacturerPage() {
  return `${simpleHero({
    title: "OEM Bed Frame Manufacturer for Private Label and Custom Development",
    subtitle: "Apexnix supports OEM and custom bed frame development for partners who need products aligned with their market, channel, target price, packaging needs, and brand positioning.",
    body: "We help discuss product direction before moving into sample confirmation and production coordination.",
    image: img.oem,
    tagItems: ["Private Label", "Custom Structures", "Target-Price Planning", "Packaging and Labels"],
    actions: cta("Send Your OEM Bed Frame RFQ", "/contact"),
  })}
  ${section("OEM Bed Frame Development Based on Your Market", "OEM development should start with commercial context, not only drawings. A bed frame for online sales may need compact packaging and easy assembly. A private-label retail product may need stronger appearance identity and packaging presentation. A project-use bed frame may need reinforced structure and maintenance-friendly details.", `<p>Apexnix supports development discussion around the partner's actual channel and use scenario.</p>`, "alt")}
  ${section("What Can Be Customized", "", table([
    ["Size", "US, UK, EU size platforms, custom dimensions, project requirements"],
    ["Height", "14 inch, 18 inch, or custom height"],
    ["Structure", "Platform frame, headboard, footboard, bunk, reinforced support, storage-friendly structure"],
    ["Material Direction", "Metal, bamboo, mixed material, or product-specific discussion"],
    ["Surface / Appearance", "Powder coating, common colors, bamboo appearance, custom finish discussion"],
    ["Packaging", "KD / flat-pack carton, protection, instruction manual, labels, barcode, carton mark"],
    ["Private Label", "Product label, carton label, retail label, brand presentation"],
    ["Commercial Target", "Quantity, target price, sales channel, market positioning"],
  ], "Custom Area", "Discussion Scope"))}
  ${section("OEM Development Process", "", `<ol class="process">${[
    ["Share Your Requirement", "Tell us your target market, sales channel, product concept, quantity estimate, and customization needs."],
    ["Clarify Product Direction", "We discuss suitable bed frame type, structure, material direction, packaging logic, and commercial positioning."],
    ["Review Existing References", "We check whether an existing platform can be adapted or whether a new development direction is needed."],
    ["Confirm Sample Direction", "We align on structure, size, appearance, packaging, label, and key requirements before sampling."],
    ["Sample and Adjustment", "Samples can be reviewed and adjusted based on assembly, structure, packaging, and market feedback."],
    ["Move Toward Production", "After confirmation, we support production coordination, packaging preparation, quality control, and export communication."],
  ].map(x => `<li class="fade-in"><div><h3>${x[0]}</h3><p>${x[1]}</p></div></li>`).join("")}</ol>`, "alt")}
  ${section("What to Prepare for an OEM RFQ", "", `<ul class="check-list"><li>Target market and sales channel</li><li>Product type or reference design</li><li>Size and height requirements</li><li>Estimated quantity</li><li>Target price range</li><li>Packaging and private label needs</li><li>Photos, drawings, benchmark products, or project requirements</li></ul>`)}
  ${section("OEM Development Support", "", linkGrid([
    ["OEM / Custom Development", "Explore Apexnix custom bed frame development scope and RFQ preparation.", "Explore OEM Development", "/products/oem-custom-development"],
    ["Flat-Pack Packaging", "Review packaging discussion for carton planning, protection, instructions, and labels.", "View Packaging Support", "/flat-pack-bed-frame-packaging"],
    ["Quality Control", "Review practical inspection points for custom bed frame projects.", "View Quality Control", "/bed-frame-quality-control"],
  ]), "alt")}
  <section class="section cta-band">${imageTag(img.oem, "OEM bed frame RFQ discussion")}<div class="container fade-in"><h2>Send Your OEM Bed Frame RFQ</h2><p>Share your product concept, market, size, packaging, label, quantity, and target-price requirements so we can discuss the right development direction.</p><div class="actions">${cta("Send Your OEM Bed Frame RFQ", "/contact")}</div></div></section>`;
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
    title: "Metal Bed Frame Supplier for Retail, Wholesale & Projects",
    description: "Apexnix supplies metal platform beds, bed frames with headboards, bunk and dormitory solutions, and custom metal bed frame options for retail, wholesale, online, project, and OEM programs.",
    image: img.metalCard,
    priority: "0.85",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "Metal Bed Frames", path: "/products/metal-bed-frames" }],
  },
  "/products/bamboo-bed-frames": {
    title: "Bamboo Bed Frame Supplier for Natural-Style Product Lines",
    description: "Apexnix offers bamboo bed frame directions for natural-style retail, online, and private-label product lines, including bamboo platform beds, minimal bamboo beds, and custom bamboo bed frame discussions.",
    image: img.bambooCard,
    priority: "0.85",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "Bamboo Bed Frames", path: "/products/bamboo-bed-frames" }],
  },
  "/products/oem-custom-development": {
    title: "OEM Bed Frame Manufacturer & Custom Development Support",
    description: "Apexnix supports OEM and custom bed frame development, including size, structure, material direction, packaging, private label, target-price planning, and project-based manufacturing discussion.",
    image: img.oem,
    priority: "0.85",
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
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Capabilities", path: "/capabilities" }],
  },
  "/insights": {
    title: "Bed Frame Insights for Sourcing and Product Development | Apexnix",
    description: "Explore practical insights on bed frame materials, structure, manufacturing, packaging, quality control, OEM development, and market-fit product planning.",
    image: bambooStory.cardImage,
    priority: "0.8",
    lastmod: "2026-07-22",
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
    lastmod: bambooStory.modifiedAt,
    article: bambooStory,
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Insights", path: "/insights" },
      { name: "Product & Material", path: "/insights" },
      { name: bambooStory.shortTitle, path: `/insights/${bambooStory.slug}` },
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
    title: "Metal Bed Frame Manufacturer for Retail, Wholesale & Project Supply",
    description: "Apexnix supports metal bed frame manufacturing and development for retailers, wholesalers, online brands, accommodation projects, and private-label partners, covering platform beds, headboard frames, bunk solutions, packaging, and OEM discussion.",
    image: img.heavy,
    priority: "0.82",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Metal Bed Frame Manufacturer", path: "/metal-bed-frame-manufacturer" }],
  },
  "/oem-bed-frame-manufacturer": {
    title: "OEM Bed Frame Manufacturer for Private Label & Custom Development",
    description: "Apexnix supports OEM bed frame development for private-label partners, online brands, retailers, wholesalers, and project partners, covering custom sizes, structures, materials, packaging, labels, and target-price discussion.",
    image: img.oem,
    priority: "0.82",
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
