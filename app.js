const scriptUrl = new URL(document.currentScript?.src || "./app.js", window.location.href);
const deployedBase = scriptUrl.pathname.replace(/\/app\.js$/, "").replace(/\/$/, "");
const BASE_PATH = window.location.protocol === "file:" ? "" : deployedBase;
const SITE_URL = "https://www.apexnix.com";
const SITE_NAME = "Apexnix";
const CONTACT_EMAIL = "sales@apextella.com";
const ROBOTS_META = "index, follow, max-image-preview:large";
const OG_LOCALE = "en_US";
const LOGO_FILE = "apexnix-logo-light.svg";
const LOGO_DARK_FILE = "apexnix-logo-dark.svg";
const AVATAR_FILE = "apexnix-avatar.svg";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "596ad054-05e1-4abb-b4c5-d12debc21725";
const THEME_KEY = "apexnix-theme";
const A = window.location.protocol === "file:" ? new URL("assets/", scriptUrl).href : `${BASE_PATH}/assets/`;
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
  return `<img src="${escapeAttr(src)}" alt="${escapeAttr(alt)}"${dimensions} loading="${loading}" decoding="async"${fetchPriority} />`;
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
function textCard(title, body, link = "", button = "Learn More") {
  return `<article class="card icon-card fade-in"><h3>${title}</h3><p>${body}</p>${link ? cta(button, link, true) : ""}</article>`;
}
function iconGrid(cards) {
  return `<div class="grid-4">${cards.map((x) => `<article class="card icon-card fade-in"><span class="line-icon">${x.icon}</span><h3>${x.title}</h3><p>${x.body}</p></article>`).join("")}</div>`;
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
function faqSection(items = [], cls = "alt") {
  if (!items.length) return "";
  return section("Frequently Asked Questions", "", `<div class="faq-grid">${items.map((item) => `<article class="faq-item fade-in"><h3>${item.question}</h3><p>${item.answer}</p></article>`).join("")}</div>`, cls);
}
function routeFaq(path = "/") {
  return routeMeta[path]?.faq || [];
}

function home() {
  return `<section class="hero" data-carousel>
    ${[
      [img.home1, "Heavy-Duty Metal & Bamboo Bed Frame Solutions", "Backed by 25+ years of focused bed frame manufacturing, we help retailers, online brands, wholesalers, and project contractors develop value-engineered bed frame products for their channels.", ["25+ Years Bed Frame Manufacturing", "Metal & Bamboo Bed Frames", "Flat-Pack & Easy Assembly", "OEM / Custom Support"], cta("View Products", "/products") + cta("Send Request", "/contact", true)],
      [img.home2, "Focused Manufacturing Know-How", "With long-term focus on bed frame structure, packaging, assembly, and quality control, we build products that balance strength, cost efficiency, and reliable supply.", [], cta("View Capabilities", "/capabilities")],
      [img.oem, "Beyond Products, We Help You Build the Right Bed Frame Line", "We work with partners to understand their market, channel, product positioning, packaging needs, and long-term supply plan.", [], cta("Discuss Your Project", "/contact")],
    ].map((s, i) => `<div class="hero-bg ${i === 0 ? "active" : ""}">${imageTag(s[0], s[1], { priority: i === 0 })}</div>
      <div class="hero-content slide-copy ${i === 0 ? "active" : ""}" ${i ? "hidden" : ""}>
        <span class="kicker">Focused B2B Bed Frame Supplier</span>${i === 0 ? `<h1>${s[1]}</h1>` : `<p class="hero-slide-title">${s[1]}</p>`}<p>${s[2]}</p>${tags(s[3])}<div class="hero-actions">${s[4]}</div>
      </div>`).join("")}
    <div class="hero-arrows"><button class="icon-button" data-prev aria-label="Previous slide">${arrowIcon("left")}</button><button class="icon-button" data-next aria-label="Next slide">${arrowIcon()}</button></div>
    <div class="hero-dots">${[0,1,2].map((_, i) => `<button class="${i === 0 ? "active" : ""}" data-dot="${i}" aria-label="Show slide ${i + 1}"></button>`).join("")}</div>
  </section>
  ${twoCol("Better Bed Frames. Better Business Conversations.", "", "With years of focused experience in bed frame manufacturing, we understand that a competitive bed frame is not only about production.<br><br>It also needs the right structure, reliable quality, efficient packaging, easy assembly, and a cost-performance balance that supports your business model.<br><br>That is why we combine manufacturing know-how with market understanding, helping partners build bed frame products that are not only well-made, but ready for real sales channels.", img.statement, "", false)}
  ${section("Focused Bed Frame Products", "Instead of offering every type of furniture, we focus on bed frame products. This allows us to go deeper into structure, packaging, assembly, cost balance, and channel needs.", `<div class="grid-3">
    ${productCard("Metal Bed Frame Collection", "Practical and cost-efficient metal bed frame solutions for retail, online sales, wholesale, and project supply.", img.metalCard, "/products/metal-bed-frames", "View Metal Bed Frames")}
    ${productCard("Bamboo Bed Frame Collection", "A differentiated natural-style bed frame option for buyers looking to expand into warm, eco-inspired, or compact living product lines.", img.bambooCard, "/products/bamboo-bed-frames", "View Bamboo Bed Frames")}
    ${productCard("OEM / Custom Bed Frame Development", "Flexible support for size, color, structure, packaging, private label, and target-price development.", img.oemCard, "/products/oem-custom-development", "Explore OEM Support")}
  </div>`, "alt")}
  ${section("What Makes Us Different", "We combine bed frame manufacturing know-how with global business thinking, so our cooperation starts before the quotation.", iconGrid([
    { icon: "◇", title: "Value-Engineered Products", body: "We balance structure, cost, quality, packaging, and assembly for stronger product competitiveness." },
    { icon: arrowIcon("both"), title: "Channel-Fit Solutions", body: "We develop bed frame solutions based on how you sell: online, retail, wholesale, or project supply." },
    { icon: "□", title: "Flat-Pack & Easy Assembly", body: "We focus on carton efficiency, clear instructions, and lower after-sales risk." },
    { icon: "＋", title: "Business-Oriented Partnership", body: "We discuss your market, your customer, and your product line strategy." },
  ]))}
  ${faqSection(routeFaq("/"))}
  <section class="section cta-band">${imageTag(img.project, "Export-ready bed frame supply")}<div class="container fade-in"><h2>Ready to Build Your Bed Frame Product Line?</h2><p>Share your market, sales channel, product idea, and supply needs. We will help you explore suitable bed frame solutions that match your business.</p><div class="actions">${cta("Send Request", "/contact")}</div></div></section>`;
}

function products() {
  return `${simpleHero({
    title: "Focused Bed Frame Products",
    subtitle: "We focus on metal bed frames, bamboo bed frames, and custom bed frame development, helping partners build practical, cost-efficient, and market-ready product lines.",
    image: img.productHero,
    tagItems: ["Metal Bed Frames", "Bamboo Bed Frames", "OEM / Custom Development", "Market-Ready Product Lines"],
    actions: cta("Explore Collections", "#collections") + cta("Send Request", "/contact", true),
  })}
  ${twoCol("Focused Categories. Flexible Development.", "", "For partners, a bed frame is not only a product to manufacture. It must fit a sales channel, a commercial positioning, a packaging requirement, an assembly experience, and a long-term supply plan. That is why we focus on value-engineered bed frame products, balancing structure, material, cost, packaging, assembly, and market competitiveness.", img.philosophy, "", false, "alt", "product-philosophy")}
  ${section("Product Collections", "Our product structure is built around three core directions: metal bed frames, bamboo bed frames, and custom development support.", `<div id="collections" class="grid-3">
    ${productCard("Metal Bed Frames Collection", "Our core collection for partners looking for practical, durable, cost-efficient, and flexible bed frame products.", img.metalCard, "/products/metal-bed-frames", "Explore Metal Bed Frames")}
    ${productCard("Bamboo Bed Frames Collection", "A natural-style collection for partners who want to add differentiated bed frame options beyond standard metal frames.", img.bambooCard, "/products/bamboo-bed-frames", "Explore Bamboo Bed Frames")}
    ${productCard("OEM / Custom Bed Frame Development", "Flexible development support for custom sizes, structures, colors, packaging, private label presentation, or project-based manufacturing.", img.oemCard, "/products/oem-custom-development", "Discuss Custom Development")}
  </div>`)}
  ${section("Product Comparison", "Different product directions support different business needs. Use this comparison as a starting point for product discussion.", table([
    ["Metal Bed Frames", "Retail, online sales, wholesale, project supply — Practical, cost-efficient, flexible"],
    ["Bamboo Bed Frames", "Natural-style retail and online collections — Differentiated, warm, nature-inspired"],
    ["OEM / Custom Development", "Private label and product line partners — Flexible, market-fit, development-driven"],
  ], "Product Type", "Best For / Key Value"), "alt", "product-comparison")}
  ${faqSection(routeFaq("/products"), "")}
  <section class="section cta-band">${imageTag(img.oem, "Product sourcing discussion")}<div class="container fade-in"><h2>Ready to Explore the Bed Frame Solution?</h2><p>Share your market, sales channel, product idea, and supply needs. We will help you explore suitable metal bed frame, bamboo bed frame, or custom development solutions.</p><div class="actions">${cta("Send Request", "/contact")}</div></div></section>`;
}

function metalPage() {
  return `${simpleHero({
    title: "Metal Bed Frames Collection",
    subtitle: "Practical, durable, and flexible metal bed frame directions for retail, online sales, wholesale, private-label programs, and project supply.",
    body: "Our metal bed frame collection is built around practical supply needs: strong structure, efficient packaging, easy assembly, flexible sizing, and cost-performance balance.",
    image: img.metalCard,
    tagItems: ["Metal Platform Beds", "Headboard Bed Frames", "Bunk & Dormitory Solutions", "OEM / Custom Structures"],
    actions: cta("Send Request", "/contact"),
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
  ${faqSection(routeFaq("/products/metal-bed-frames"), "")}
  <section class="section cta-band">${imageTag(img.oem, "Metal bed frame discussion")}<div class="container fade-in"><h2>Looking for the Right Metal Bed Frame Direction?</h2><p>Share your market, sales channel, product idea, and supply needs. We will help you explore suitable metal bed frame solutions for your business.</p><div class="actions">${cta("Send Request", "/contact")}</div></div></section>`;
}

function bambooPage() {
  return `${simpleHero({
    title: "Bamboo Bed Frames Collection",
    subtitle: "Natural-style bamboo bed frame directions for partners looking to add warmer, softer, and more differentiated products to their bed frame line.",
    body: "Bamboo bed frames bring a warmer and more natural visual language compared with standard metal frames. This collection is suitable for lifestyle retail, online home collections, compact living concepts, and partners looking to add a softer natural-style option.",
    image: img.bambooCard,
    tagItems: ["Natural Material Appeal", "Eco-friendly", "Storage-Friendly", "Easy Assembly", "Private-Label Potential"],
    actions: cta("Send Request", "/contact"),
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
  ${faqSection(routeFaq("/products/bamboo-bed-frames"), "")}
  <section class="section cta-band">${imageTag(img.bambooMore, "Bamboo bed frame discussion")}<div class="container fade-in"><h2>Looking for a Natural-Style Bed Frame Direction?</h2><p>Share your product line idea and market needs. We will help you explore suitable bamboo bed frame options.</p><div class="actions">${cta("Send Request", "/contact")}</div></div></section>`;
}

function oemPage() {
  return `${simpleHero({
    title: "OEM / Custom Bed Frame Development",
    subtitle: "Flexible development support for partners who need more than standard models.",
    body: "For partners who need more than standard product directions, we support OEM and custom bed frame development based on product positioning, sales channel, structure requirements, packaging needs, and supply expectations.",
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
  ${faqSection(routeFaq("/products/oem-custom-development"), "")}
  <section class="section cta-band">${imageTag(img.oem, "Custom bed frame development")}<div class="container fade-in"><h2>Ready to Develop a Bed Frame Product Around Your Market?</h2><p>Share your product idea, customization needs, and supply expectations. We will help you explore a practical development direction.</p><div class="actions">${cta("Start Custom Development", "/contact")}</div></div></section>`;
}

const solutionData = [
  {
    path: "/solutions/ecommerce-bed-frame-supply",
    title: "For E-commerce & Online Retail",
    metaTitle: "E-commerce Bed Frame Supplier | Flat-Pack Online Retail Supply",
    metaDescription: "Apexnix supports e-commerce bed frame sellers with flat-pack metal and bamboo bed frames, easy assembly, compact cartons, private label packaging, and OEM development.",
    heroTitle: "E-commerce Bed Frame Supplier for Online Retail",
    heroSubtitle: "Flat-pack, easy-assembly bed frame solutions for online sellers, marketplace brands, and direct-to-consumer furniture businesses.",
    image: img.project,
    headline: "Bed frames designed to sell online, and survive the full customer journey.",
    body: "For online sales, a bed frame must do more than look good in photos. It needs to be easy to ship, easy to assemble, easy to understand, and stable enough to reduce complaints after delivery.",
    pain: ["Carton size affects shipping cost.", "Complicated assembly leads to bad reviews.", "Weak packaging increases damage risk.", "Unclear product selling points reduce conversion."],
    support: ["Flat-pack structure discussion", "Compact carton planning", "Easy-assembly design direction", "Private label packaging options", "Product-page selling point support"],
    productDirections: [
      ["Metal Platform Beds", "Cost-efficient steel platform bed frames with no-box-spring support and storage-friendly clearance.", "/products/metal-bed-frames"],
      ["Bamboo Platform Beds", "Natural-style platform beds for online home and compact living collections.", "/products/bamboo-bed-frames"],
      ["Private Label Packaging", "Carton marks, barcodes, instruction manuals, and packaging details for marketplace operations.", "/products/oem-custom-development"],
    ],
    faq: [
      { question: "What bed frame features matter most for online retail?", answer: "Online retail bed frames usually need compact cartons, clear instructions, easy assembly, stable structure, and photo-friendly product stories." },
      { question: "Can Apexnix support private label packaging for e-commerce sellers?", answer: "Yes. Packaging discussion can include carton marks, barcode labels, instruction manuals, protection details, and private label presentation." },
      { question: "Which product direction is best for a first online bed frame line?", answer: "Most new online lines start with practical metal platform bed frames, then add bamboo or headboard options once positioning is clear." },
    ],
    cta: "Discuss E-commerce Bed Frame Solutions",
  },
  {
    path: "/solutions/furniture-retail-wholesale-bed-frames",
    title: "For Furniture Retailers & Wholesalers",
    metaTitle: "Wholesale Bed Frame Supplier | Retail & Distributor Bed Frames",
    metaDescription: "Apexnix helps furniture retailers, importers, and wholesalers build repeatable metal, bamboo, and private-label bed frame lines with stable supply and export packaging.",
    heroTitle: "Wholesale Bed Frame Supplier for Retailers and Distributors",
    heroSubtitle: "Build a repeatable bed frame product line with practical structures, multiple size options, stable supply, and export-ready packaging.",
    image: img.retail,
    headline: "Build a bed frame line that is easy to position, repeat, and sell.",
    body: "Retailers and wholesalers need more than one good-looking product. They need a clear product line, stable supply, suitable price levels, and SKUs that can serve different customer needs.",
    pain: ["Too many similar products make selection difficult.", "Low-price products may create quality and complaint risks.", "Unstable supply affects repeat orders.", "Poor packaging increases warehouse and logistics problems."],
    support: ["Product line planning", "Multiple size options", "Color and finish options", "Stable repeatable product selection", "Export packaging support"],
    productDirections: [
      ["Core Metal Bed Frames", "Practical platform and headboard bed frames for repeatable retail and wholesale programs.", "/products/metal-bed-frames"],
      ["Bamboo Bed Frame Collection", "A differentiated natural-style option for retailers who need warmer product stories.", "/products/bamboo-bed-frames"],
      ["OEM Line Development", "Adjust size, finish, packaging, and private label details for distributor programs.", "/products/oem-custom-development"],
    ],
    faq: [
      { question: "Can Apexnix support multiple bed frame sizes for wholesale programs?", answer: "Yes. Standard size platforms can include US and European sizes, with custom dimensions discussed based on market and order plan." },
      { question: "How do wholesalers reduce bed frame product risk?", answer: "Start with a focused product line, confirm packaging and assembly logic early, and choose structures that can be repeated reliably across orders." },
      { question: "Does Apexnix supply both metal and bamboo bed frames?", answer: "Yes. Apexnix focuses on metal bed frames, bamboo bed frames, and OEM custom development for B2B partners." },
    ],
    cta: "Build Your Retail / Wholesale Bed Frame Line",
  },
  {
    path: "/solutions/accommodation-project-bed-frames",
    title: "For Accommodation & Project Supply",
    metaTitle: "Project Bed Frame Supplier | Dormitory & Rental Housing Beds",
    metaDescription: "Apexnix supports accommodation, dormitory, hostel, and rental housing buyers with durable metal bed frames, bunk bed concepts, bulk packaging, and supply coordination.",
    heroTitle: "Project Bed Frame Supplier for Accommodation and Dormitories",
    heroSubtitle: "Durable metal bed frame and bunk bed directions for high-use environments, bulk delivery, and project-based supply.",
    image: img.project,
    headline: "Durable bed frame options for high-use environments.",
    body: "Accommodation projects require bed frames that are practical, durable, easy to install, and simple to maintain. The focus is structure, stability, bulk supply, and long-term use.",
    pain: ["Products must handle frequent use.", "Installation needs to be simple for bulk projects.", "Maintenance and replacement should be manageable.", "Packaging should support bulk delivery."],
    support: ["Metal bed frame options for project use", "Bunk bed / dormitory bed discussion", "Reinforced structure options", "Bulk packaging support", "Replacement and maintenance discussion"],
    productDirections: [
      ["Heavy-Duty Platform Beds", "Steel platform frames for rental housing, staff housing, and repeated-use environments.", "/products/metal-bed-frames"],
      ["Bunk and Dormitory Bed Concepts", "Space-efficient metal bed directions for schools, hostels, and accommodation projects.", "/products/metal-bed-frames"],
      ["Project-Based Manufacturing", "Structure, packaging, installation, and bulk supply details discussed around the project scenario.", "/products/oem-custom-development"],
    ],
    faq: [
      { question: "What matters most for accommodation project bed frames?", answer: "Project buyers usually care about durable structure, simple installation, manageable maintenance, bulk packaging, and stable replacement support." },
      { question: "Can Apexnix discuss bunk bed or dormitory bed concepts?", answer: "Yes. Metal bunk bed and dormitory bed concepts can be discussed based on use environment, size, structure, and bulk order needs." },
      { question: "Are project bed frames the same as retail bed frames?", answer: "Not always. Project-use frames often need stronger structure, simpler installation, easier maintenance, and packaging that fits bulk delivery." },
    ],
    cta: "Discuss Project Bed Frame Supply",
  },
  {
    path: "/solutions/private-label-oem-bed-frames",
    title: "For OEM / Private Label Partners",
    metaTitle: "Private Label Bed Frame Manufacturer | OEM Custom Development",
    metaDescription: "Apexnix provides OEM and private label bed frame development for brands and importers, including custom sizes, structures, packaging, labels, and target-price discussion.",
    heroTitle: "Private Label Bed Frame Manufacturer and OEM Development Partner",
    heroSubtitle: "Turn a market idea into a manufacturable metal, bamboo, or mixed-material bed frame product line.",
    image: img.solutionOem,
    headline: "Turn your market idea into a manufacturable bed frame product.",
    body: "For private label partners, the real question is whether the product fits your brand, channel, target price, packaging standard, and customer expectations.",
    pain: ["Existing factory models may not fit the target market.", "Product cost and structure need to match the price strategy.", "Packaging and labels must support the partner's brand.", "Sampling without clear direction wastes time."],
    support: ["Market and channel discussion", "Target-price development", "Structure adjustment", "Size and color customization", "Private label packaging", "Mass production follow-up"],
    productDirections: [
      ["OEM Metal Bed Frames", "Adjust steel frame size, height, support, finish, packaging, and label details around your channel.", "/products/metal-bed-frames"],
      ["OEM Bamboo Bed Frames", "Develop natural-style bamboo bed frame directions for lifestyle retail or online collections.", "/products/bamboo-bed-frames"],
      ["Custom Development Process", "Clarify product direction, review references, align sample scope, then move toward production.", "/products/oem-custom-development"],
    ],
    faq: [
      { question: "What can be customized for private label bed frames?", answer: "Customization can include size, height, structure, material direction, color, packaging, carton marks, labels, instruction manuals, and project requirements." },
      { question: "Can Apexnix help before a final product drawing is ready?", answer: "Yes. The process can start from market, channel, benchmark products, target price, and product direction before detailed sample alignment." },
      { question: "Does OEM development require a completely new structure?", answer: "Not always. Many projects start from an existing platform and adjust size, finish, packaging, or structure for better market fit." },
    ],
    cta: "Start OEM / Private Label Discussion",
  },
];

function solutionCard(solution) {
  return productCard(solution.heroTitle, solution.metaDescription, solution.image, solution.path, solution.cta);
}

function solutionLandingPage(solution) {
  return `${simpleHero({
    title: solution.heroTitle,
    subtitle: solution.heroSubtitle,
    body: solution.body,
    image: solution.image,
    tagItems: solution.support.slice(0, 4),
    actions: cta(solution.cta, "/contact"),
  })}
  ${section("Common Buyer Requirements", "These are the practical sourcing questions that usually decide whether a bed frame line works in the real channel.", `<div class="grid-4">${solution.pain.map((item) => textCard(item, "Apexnix uses the RFQ discussion to clarify this requirement before recommending a product direction.")).join("")}</div>`, "alt")}
  ${twoCol(solution.headline, "", `${solution.body}<br><br>We connect product structure, packaging, assembly, target price, and supply planning so the selected bed frame direction fits the buyer's business model, not only the factory catalog.`, solution.image, `<ul class="check-list">${solution.support.map((item) => `<li>${item}</li>`).join("")}</ul><div class="actions">${cta("Send Project Details", "/contact", true)}</div>`)}
  ${section("Recommended Product Directions", "Use these directions as a starting point for sourcing discussion. Final specifications, sizes, materials, and packaging can be confirmed during RFQ.", `<div class="grid-3">${solution.productDirections.map((item) => textCard(item[0], item[1], item[2], "View Related Products")).join("")}</div>`, "alt")}
  ${faqSection(solution.faq, "")}
  <section class="section cta-band">${imageTag(img.oem, solution.heroTitle)}<div class="container fade-in"><h2>Ready to Discuss This Bed Frame Supply Scenario?</h2><p>Share your market, sales channel, target price, quantity estimate, packaging needs, and product references. We will help you evaluate a practical product direction.</p><div class="actions">${cta(solution.cta, "/contact")}</div></div></section>`;
}

function solutions() {
  return `${simpleHero({
    title: "Bed Frame Solutions Based on How You Sell",
    subtitle: "Different customers need different bed frames. We help partners select and develop products based on their real sales channel.",
    image: img.solutionsHero,
    actions: cta("Send Request", "/contact"),
  })}
  ${section("Why Channel Fit Matters", "A bed frame that works well for online retail may not be the best option for a dormitory project. That is why we start by understanding how you sell before recommending what to supply.", `<div class="grid-4">${["Online Retail / Packaging & Assembly", "Retail / Wholesale / Product Line & Price Range", "Projects / Strength & Maintenance", "OEM / Custom Development"].map(x => `<article class="card icon-card fade-in"><span class="line-icon">${arrowIcon()}</span><h3>${x}</h3></article>`).join("")}</div>`, "alt")}
  ${section("Solutions by Sourcing Scenario", "Choose the page that best matches your sourcing scenario. Each page explains buyer needs, product directions, and RFQ details for that channel.", `<div class="grid-2">${solutionData.map(solutionCard).join("")}</div>`)}
  ${section("Solutions by Buyer Type", "", `<div class="tabs" data-tabs><div class="tab-list">${solutionData.map((x, i) => `<button class="${i === 0 ? "active" : ""}" data-tab="${i}">${x.title}</button>`).join("")}</div><div class="tab-panel" data-panel>${renderTab(0)}</div></div>`, "alt")}
  ${section("How We Work With Partners", "", `<ol class="process">${[
    ["Understand Your Market", "We first learn about your target customers, sales channel, and product positioning."],
    ["Clarify Product Direction", "We discuss suitable bed frame types, structure, price range, packaging, and customization needs."],
    ["Recommend Suitable Options", "We help select existing options or define a custom development direction."],
    ["Support Sampling", "We coordinate sample details, packaging, structure, and specification confirmation."],
    ["Move Toward Production", "Once the product direction is confirmed, we support order planning, packaging, quality control, and export coordination."],
  ].map(x => `<li class="fade-in"><div><h3>${x[0]}</h3><p>${x[1]}</p></div></li>`).join("")}</ol>`, "alt")}
  ${faqSection(routeFaq("/solutions"), "")}
  <section class="section cta-band">${imageTag(img.oem, "Business discussion")}<div class="container fade-in"><h2>Looking for a Bed Frame Supplier Who Understands Your Business?</h2><p>Tell us how you sell, who you sell to, and what kind of product line you want to build. We will help you explore suitable bed frame solutions.</p><div class="actions">${cta("Send Request", "/contact")}</div></div></section>`;
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
    ["Quality Control", img.qualityControl, "We focus on material inspection, welding checks, surface treatment, dimension accuracy, trial assembly, packaging inspection, and pre-shipment review."],
    ["OEM / Custom Support", img.oemSupport, "Customization can include size, color, structure, headboard style, packaging, instruction manual, carton mark and private label presentation."],
    ["Export Support", img.exportSupport, "We support export-ready packaging, carton marks, product labels, loading discussion, documentation coordination, and order communication."],
  ];
  return `${simpleHero({
    title: "Apexnix Bed Frame Supply Capabilities",
    subtitle: "From structure and cost balance to packaging, assembly, custom support, quality control, and export coordination, we focus on the details that matter to global bed frame partners.",
    image: img.capabilitiesHero,
    actions: cta("Discuss Your Requirements", "/contact"),
  })}
  <section class="section"><div class="container"><ol class="process">${caps.map((x) => `<li class="fade-in"><div class="split"><div><h3>${x[0]}</h3><p>${x[2]}</p></div><div class="image-panel soft">${imageTag(x[1], x[0])}</div></div></li>`).join("")}</ol></div></section>
  ${faqSection(routeFaq("/capabilities"))}
  <section class="section cta-band">${imageTag(img.oem, "Product development table")}<div class="container fade-in"><h2>Need a Bed Frame Product Built Around Your Market?</h2><p>Share your product idea and requirements. We will help you evaluate the right development direction.</p><div class="actions">${cta("Discuss Your Requirements", "/contact")}</div></div></section>`;
}

function about() {
  return `${simpleHero({
    title: "About Apexnix",
    subtitle: "Apexnix is a focused B2B bed frame supplier combining manufacturing know-how, global business thinking, and export-ready cooperation support.",
    image: img.oem,
    actions: cta("Contact Us", "/contact"),
  })}
  ${twoCol("Our Story", "", "Our story began with a simple belief: a bed frame should not be treated as just another product to quote. Behind every successful bed frame business, there is a target market to understand, a sales channel to fit, a price level to compete in, and a customer experience to protect.<br><br>Our brand was created by bringing together long-term bed frame manufacturing experience and a commercial team with deep global business background. This combination shapes the way we work: we discuss market fit, channel needs, packaging, assembly, cost balance, and long-term product line development.", img.ourStory)}
  ${section("What We Believe", "", `<div class="grid-3">
    <article class="card icon-card fade-in"><h3>A good bed frame is not only well-made.</h3><p>It should be market-ready.</p></article>
    <article class="card icon-card fade-in"><h3>A good supplier does not only quote.</h3><p>It should understand the customer's business.</p></article>
    <article class="card icon-card fade-in"><h3>A good cooperation does not start with the lowest price.</h3><p>It starts with the right product direction.</p></article>
  </div>`, "alt")}
  ${section("What We Do", "We provide focused bed frame products and development support for partners, including metal bed frames, bamboo bed frames, OEM / custom development, packaging discussion, product line planning, and export supply coordination.", iconGrid([
    { icon: "M", title: "Manufacturing Know-How", body: "Practical knowledge of metal bed frame products, structure, production, packaging, and quality control." },
    { icon: "B", title: "Global B2B Business Thinking", body: "Experience from international B2B markets where channels and long-term cooperation matter." },
    { icon: "P", title: "Market-Ready Partner", body: "A supplier conversation built around product direction, not only price." },
    { icon: "S", title: "Supply Coordination", body: "Support across sampling, packaging, production, quality control, and export communication." },
  ]))}
  ${section("How We Work", "", `<ol class="process">${["Understand your market", "Clarify your sales channel", "Discuss your target price", "Recommend suitable product direction", "Support sampling and customization", "Coordinate production, packaging, and delivery"].map(x => `<li class="fade-in"><div><h3>${x}</h3></div></li>`).join("")}</ol>`, "alt")}
  ${faqSection(routeFaq("/about"), "")}
  <section class="section cta-band">${imageTag(img.oem, "Business conversation")}<div class="container fade-in"><h2>Let's Start With a Better Business Conversation</h2><p>Tell us what kind of bed frame business you want to build. We will help you explore the right product direction.</p><div class="actions">${cta("Contact Us", "/contact")}</div></div></section>`;
}

function contact() {
  return `${simpleHero({
    title: "Contact Apexnix for Your Bed Frame Project",
    subtitle: "Whether you are sourcing for online retail, wholesale, furniture stores, accommodation projects, or private label development, tell us what you are looking for. We will help you explore suitable bed frame solutions.",
    image: img.contactHero,
  })}
  <section class="section"><div class="container contact-layout">
    <aside class="contact-card fade-in"><h2>Apexnix Co.,Ltd.</h2><p>Unit A, Room 504<br>No.88 Anling 2nd Road<br>Huli District, Xiamen, China</p><br><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></aside>
    <div class="fade-in"><div class="section-head"><span class="kicker">Send Request</span><h2>Get In Touch About Your Needs</h2><p>To help us understand your needs better, please share your market, sales channel, target price, quantity, and product requirements. The more context you provide, the better we can recommend suitable bed frame solutions.</p></div>
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
        <label>Business Type<select name="business_type"><option>E-commerce / Online Retail</option><option>Furniture Retailer</option><option>Wholesaler / Importer</option><option>Accommodation / Project Contractor</option><option>OEM / Private Label Buyer</option><option>Other</option></select></label>
        <label>Interested Products<select name="interested_products"><option>Metal Bed Frames</option><option>Bamboo Bed Frames</option><option>Bunk Beds / Dormitory Beds</option><option>OEM / Custom Bed Frames</option><option>Not Sure Yet</option></select></label>
        <label>Sales Channel<select name="sales_channel"><option>Online Retail</option><option>Offline Retail</option><option>Wholesale Distribution</option><option>Project Supply</option><option>Private Label / Brand</option><option>Other</option></select></label>
        <label class="full">Message<textarea name="message"></textarea></label>
        <p class="form-status full" data-contact-status hidden></p>
        <button class="btn full" type="submit">Send Request ${arrowIcon()}</button>
      </form>
    </div>
  </div></section>
  ${faqSection(routeFaq("/contact"), "alt")}`;
}

const routes = {
  "/": home,
  "/products": products,
  "/products/metal-bed-frames": metalPage,
  "/products/bamboo-bed-frames": bambooPage,
  "/products/oem-custom-development": oemPage,
  "/solutions": solutions,
  "/solutions/ecommerce-bed-frame-supply": () => solutionLandingPage(solutionData[0]),
  "/solutions/furniture-retail-wholesale-bed-frames": () => solutionLandingPage(solutionData[1]),
  "/solutions/accommodation-project-bed-frames": () => solutionLandingPage(solutionData[2]),
  "/solutions/private-label-oem-bed-frames": () => solutionLandingPage(solutionData[3]),
  "/capabilities": capabilities,
  "/about": about,
  "/contact": contact,
};
const routeMeta = {
  "/": {
    title: "Bed Frame Manufacturer & OEM Supplier | Apexnix",
    description: "Apexnix is a B2B bed frame manufacturer and OEM supplier for metal bed frames, bamboo bed frames, private label development, packaging, and export-ready supply.",
    image: img.home1,
    priority: "1.0",
    changefreq: "weekly",
    breadcrumb: [{ name: "Home", path: "/" }],
    faq: [
      { question: "What does Apexnix supply?", answer: "Apexnix supplies focused B2B bed frame solutions, including metal bed frames, bamboo bed frames, OEM custom development, private label packaging, and export-ready coordination." },
      { question: "Who is Apexnix best suited for?", answer: "Apexnix is best suited for online retailers, furniture retailers, wholesalers, importers, accommodation project buyers, and private label bed frame partners." },
      { question: "Can Apexnix help choose the right bed frame direction?", answer: "Yes. Apexnix starts from the buyer's market, channel, product positioning, target price, packaging needs, and supply plan before recommending a product direction." },
    ],
  },
  "/products": {
    title: "Bed Frame Products | Metal, Bamboo & OEM Collections",
    description: "Explore Apexnix bed frame products for B2B buyers, including metal platform beds, bamboo bed frames, OEM custom development, and private label product lines.",
    image: img.productHero,
    priority: "0.9",
    changefreq: "weekly",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }],
    schemaType: "CollectionPage",
    itemList: [
      { name: "Metal Bed Frames", description: "Platform, headboard, bunk, dormitory, and custom metal bed frame directions.", url: "/products/metal-bed-frames", image: img.metalCard },
      { name: "Bamboo Bed Frames", description: "Natural-style bamboo platform and headboard bed frame directions.", url: "/products/bamboo-bed-frames", image: img.bambooCard },
      { name: "OEM Custom Bed Frame Development", description: "Custom size, structure, packaging, private label, and project development support.", url: "/products/oem-custom-development", image: img.oem },
    ],
    faq: [
      { question: "What bed frame product categories does Apexnix focus on?", answer: "Apexnix focuses on metal bed frames, bamboo bed frames, and OEM custom bed frame development for global B2B buyers." },
      { question: "Can product specifications be adjusted?", answer: "Yes. Size, height, structure, material direction, color, packaging, labels, and project requirements can be discussed based on the buyer's market and order plan." },
      { question: "Are these finished retail products or development references?", answer: "The pages show product directions and development references. Final specifications, availability, and quotation are confirmed during RFQ discussion." },
    ],
  },
  "/products/metal-bed-frames": {
    title: "Metal Bed Frame Manufacturer | Wholesale Platform Beds",
    description: "Apexnix supplies wholesale metal bed frames, platform beds, headboard frames, bunk and dormitory bed concepts, flat-pack packaging, and OEM custom structures.",
    image: img.metalCard,
    priority: "0.85",
    changefreq: "weekly",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "Metal Bed Frames", path: "/products/metal-bed-frames" }],
    schemaType: "CollectionPage",
    itemList: [
      { name: "Heavy-Duty Metal Platform Beds", description: "Steel platform bed frames with no-box-spring support and storage-friendly clearance.", url: "/products/metal-bed-frames", image: img.heavy },
      { name: "Metal Bed Frames with Headboard", description: "Retail-friendly metal bed frame directions with cleaner bedroom presentation.", url: "/products/metal-bed-frames", image: img.headboard },
      { name: "Bunk Beds and Dormitory Solutions", description: "Project-use metal bed frame and dormitory bed concepts for accommodation buyers.", url: "/products/metal-bed-frames", image: img.bunkDormitory },
    ],
    faq: [
      { question: "What metal bed frame types can Apexnix discuss?", answer: "Apexnix can discuss metal platform beds, bed frames with headboards, storage-friendly frames, bunk bed and dormitory concepts, and custom metal bed frame structures." },
      { question: "Are metal bed frames suitable for online retail?", answer: "Yes. Metal platform bed frames can be designed around flat-pack packaging, easy assembly, storage-friendly clearance, and no-box-spring support for online retail." },
      { question: "Can Apexnix support project-use metal bed frames?", answer: "Yes. Project-use discussions can include reinforced support, bulk packaging, installation, maintenance, and bunk or dormitory bed concepts." },
    ],
  },
  "/products/bamboo-bed-frames": {
    title: "Bamboo Bed Frame Supplier | Natural Platform Beds",
    description: "Apexnix supplies bamboo bed frame directions for B2B buyers, including bamboo platform beds, minimal bamboo beds, natural-style collections, and OEM options.",
    image: img.bambooCard,
    priority: "0.85",
    changefreq: "weekly",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "Bamboo Bed Frames", path: "/products/bamboo-bed-frames" }],
    schemaType: "CollectionPage",
    itemList: [
      { name: "Bamboo Platform Beds", description: "Clean bamboo platform bed frames with natural material appeal.", url: "/products/bamboo-bed-frames", image: img.bambooPlatform },
      { name: "Minimal Bamboo Beds", description: "Bamboo bed frames with headboard options for lifestyle retail collections.", url: "/products/bamboo-bed-frames", image: img.bambooMinimal },
      { name: "Custom Bamboo Structures", description: "Size, appearance, packaging, and private label discussion for bamboo bed frame programs.", url: "/products/oem-custom-development", image: img.bambooMore },
    ],
    faq: [
      { question: "Why choose bamboo bed frames for a product line?", answer: "Bamboo bed frames create a warmer natural-style product story, which can help retailers and online sellers differentiate from standard metal frame collections." },
      { question: "Can bamboo bed frames be customized?", answer: "Yes. Size, appearance, headboard direction, packaging, private label presentation, and structure details can be discussed based on the product line." },
      { question: "Are bamboo bed frames only for eco-focused brands?", answer: "No. They can also support warm home, compact living, lifestyle retail, and online product lines that need a softer visual identity." },
    ],
  },
  "/products/oem-custom-development": {
    title: "OEM Custom Bed Frame Development | Private Label Supplier",
    description: "Apexnix provides OEM custom bed frame development for private label partners, including custom sizes, structures, materials, packaging, labels, and project manufacturing.",
    image: img.oem,
    priority: "0.85",
    changefreq: "weekly",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "OEM Custom Development", path: "/products/oem-custom-development" }],
    service: { name: "OEM Custom Bed Frame Development", serviceType: "OEM bed frame development", areaServed: "Worldwide" },
    faq: [
      { question: "What is included in OEM custom bed frame development?", answer: "OEM development can include size, height, structure, material direction, color, packaging, labels, instruction manuals, target price discussion, and project-based manufacturing support." },
      { question: "Can Apexnix help with private label bed frame packaging?", answer: "Yes. Packaging discussion can cover carton size, protection, instruction manuals, carton marks, barcode labels, and private label presentation." },
      { question: "What should buyers prepare for a custom bed frame RFQ?", answer: "Useful RFQ details include target country, sales channel, customer type, quantity estimate, target price range, product references, size needs, and packaging requirements." },
    ],
  },
  "/solutions": {
    title: "Bed Frame Solutions by Buyer Type | Retail, Project & OEM",
    description: "Find bed frame solutions for e-commerce sellers, furniture retailers, wholesalers, project buyers, accommodation supply, and private label OEM partners.",
    image: img.solutionsHero,
    priority: "0.8",
    changefreq: "weekly",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }],
    schemaType: "CollectionPage",
    itemList: solutionData.map((solution) => ({
      name: solution.heroTitle,
      description: solution.metaDescription,
      url: solution.path,
      image: solution.image,
      type: "Service",
    })),
    faq: [
      { question: "Why does Apexnix organize bed frame solutions by buyer type?", answer: "Different channels need different products. Online retail, wholesale, accommodation projects, and private label programs each have different packaging, assembly, durability, price, and SKU requirements." },
      { question: "Which buyer type should I choose if I am not sure?", answer: "Start with the sales channel. Online sellers should review e-commerce supply, distributors should review wholesale supply, project buyers should review accommodation supply, and brands should review OEM/private label development." },
      { question: "Can one product serve multiple buyer types?", answer: "Sometimes yes, but the specification, packaging, instruction manual, carton mark, and product positioning may still need channel-specific adjustments." },
    ],
  },
  "/solutions/ecommerce-bed-frame-supply": {
    title: solutionData[0].metaTitle,
    description: solutionData[0].metaDescription,
    image: solutionData[0].image,
    priority: "0.82",
    changefreq: "weekly",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }, { name: "E-commerce Bed Frame Supply", path: solutionData[0].path }],
    service: { name: solutionData[0].heroTitle, serviceType: "E-commerce bed frame supply", areaServed: "Worldwide" },
    faq: solutionData[0].faq,
  },
  "/solutions/furniture-retail-wholesale-bed-frames": {
    title: solutionData[1].metaTitle,
    description: solutionData[1].metaDescription,
    image: solutionData[1].image,
    priority: "0.82",
    changefreq: "weekly",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }, { name: "Wholesale Bed Frames", path: solutionData[1].path }],
    service: { name: solutionData[1].heroTitle, serviceType: "Wholesale bed frame supply", areaServed: "Worldwide" },
    faq: solutionData[1].faq,
  },
  "/solutions/accommodation-project-bed-frames": {
    title: solutionData[2].metaTitle,
    description: solutionData[2].metaDescription,
    image: solutionData[2].image,
    priority: "0.82",
    changefreq: "weekly",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }, { name: "Project Bed Frames", path: solutionData[2].path }],
    service: { name: solutionData[2].heroTitle, serviceType: "Project bed frame supply", areaServed: "Worldwide" },
    faq: solutionData[2].faq,
  },
  "/solutions/private-label-oem-bed-frames": {
    title: solutionData[3].metaTitle,
    description: solutionData[3].metaDescription,
    image: solutionData[3].image,
    priority: "0.82",
    changefreq: "weekly",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }, { name: "Private Label OEM Bed Frames", path: solutionData[3].path }],
    service: { name: solutionData[3].heroTitle, serviceType: "Private label bed frame manufacturing", areaServed: "Worldwide" },
    faq: solutionData[3].faq,
  },
  "/capabilities": {
    title: "Bed Frame Manufacturing Capabilities | OEM Supply Support",
    description: "Review Apexnix bed frame manufacturing capabilities: product development, value engineering, packaging optimization, quality control, OEM support, and export supply.",
    image: img.capabilitiesHero,
    priority: "0.75",
    changefreq: "monthly",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Capabilities", path: "/capabilities" }],
    service: { name: "Bed frame manufacturing and supply capabilities", serviceType: "B2B bed frame manufacturing support", areaServed: "Worldwide" },
    faq: [
      { question: "What manufacturing capabilities does Apexnix emphasize?", answer: "Apexnix emphasizes product development, value engineering, packaging optimization, quality control, OEM customization, and export coordination for bed frame projects." },
      { question: "Why is packaging optimization important for bed frames?", answer: "Packaging affects shipping cost, warehouse handling, damage risk, assembly experience, and after-sales complaints, especially for online and export channels." },
      { question: "Can Apexnix support quality control before shipment?", answer: "Yes. Quality control discussion can include material checks, welding, surface treatment, dimensions, trial assembly, packaging inspection, and pre-shipment review." },
    ],
  },
  "/about": {
    title: "About Apexnix | Focused B2B Bed Frame Manufacturer",
    description: "Learn about Apexnix, a focused B2B bed frame manufacturer combining manufacturing know-how, global business thinking, product line support, and export coordination.",
    image: img.ourStory,
    priority: "0.7",
    changefreq: "monthly",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }],
    faq: [
      { question: "What makes Apexnix different from a general furniture supplier?", answer: "Apexnix focuses on bed frame products instead of broad furniture categories, allowing deeper work on structure, packaging, assembly, cost balance, and channel fit." },
      { question: "Does Apexnix only quote existing models?", answer: "No. Apexnix starts with market and channel discussion, then recommends standard, adjusted, or custom product directions based on buyer needs." },
      { question: "Where is Apexnix located?", answer: "Apexnix Co.,Ltd. is located in Xiamen, China, and works with global B2B partners on export-ready bed frame supply." },
    ],
  },
  "/contact": {
    title: "Contact Apexnix | Bed Frame RFQ & OEM Project Discussion",
    description: "Contact Apexnix Co.,Ltd. for bed frame RFQ discussion covering metal bed frames, bamboo bed frames, OEM custom development, project supply, packaging, and export support.",
    image: img.contactHero,
    priority: "0.75",
    changefreq: "monthly",
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact" }],
    faq: [
      { question: "What information should I include in a bed frame RFQ?", answer: "Please include target country, sales channel, business type, product direction, size needs, estimated quantity, target price range, packaging needs, and any reference photos or drawings." },
      { question: "Can I contact Apexnix without final specifications?", answer: "Yes. You can share your market, channel, budget, and product idea first. Apexnix can help clarify the most practical bed frame direction." },
      { question: "What email can I use for direct contact?", answer: `You can contact Apexnix at ${CONTACT_EMAIL} for bed frame product and OEM project discussions.` },
    ],
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
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Apexnix Co.,Ltd.",
    url: routeUrl("/"),
    email: CONTACT_EMAIL,
    logo: `${SITE_URL}/${LOGO_FILE}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit A, Room 504, No.88 Anling 2nd Road, Huli District",
      addressLocality: "Xiamen",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["en"],
    },
    knowsAbout: [
      "Metal bed frames",
      "Bamboo bed frames",
      "OEM bed frame development",
      "Private label bed frames",
      "Wholesale bed frame supply",
      "Project bed frame supply",
      "Export-ready bed frame supply",
    ],
  };
  const schemas = [
    organization,
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: routeUrl("/"),
      publisher: { "@type": "Organization", name: "Apexnix Co.,Ltd." },
    },
    {
      "@context": "https://schema.org",
      "@type": meta.schemaType || "WebPage",
      name: meta.title,
      description: meta.description,
      url: routeUrl(path),
      image: assetUrl(meta.image),
      primaryImageOfPage: assetUrl(meta.image),
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: routeUrl("/") },
      about: { "@type": "Thing", name: "B2B bed frame supplier and OEM manufacturer" },
      provider: { "@type": "Organization", name: "Apexnix Co.,Ltd.", url: routeUrl("/") },
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
  if (meta.itemList?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: meta.title,
      itemListElement: meta.itemList.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": item.type || "Product",
          name: item.name,
          description: item.description,
          image: assetUrl(item.image),
          url: routeUrl(item.url),
          ...(item.type === "Service"
            ? { provider: { "@type": "Organization", name: "Apexnix Co.,Ltd." } }
            : {
                brand: { "@type": "Brand", name: SITE_NAME },
                manufacturer: { "@type": "Organization", name: "Apexnix Co.,Ltd." },
              }),
        },
      })),
    });
  }
  if (meta.service) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: meta.service.name,
      serviceType: meta.service.serviceType,
      description: meta.description,
      areaServed: meta.service.areaServed || "Worldwide",
      provider: organization,
      url: routeUrl(path),
    });
  }
  if (meta.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: meta.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
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

function ensureAlternate(hreflang) {
  return ensureHeadTag(`link[rel="alternate"][hreflang="${hreflang}"]`, () => {
    const node = document.createElement("link");
    node.setAttribute("rel", "alternate");
    node.setAttribute("hreflang", hreflang);
    return node;
  });
}

function updateDocumentMeta(path = "/") {
  const meta = getRouteMeta(path);
  const canonical = routeUrl(path);
  const image = assetUrl(meta.image);
  document.title = meta.title;
  ensureMetaName("description").setAttribute("content", meta.description);
  ensureMetaName("robots").setAttribute("content", ROBOTS_META);
  ensureMetaName("googlebot").setAttribute("content", ROBOTS_META);
  ensureLinkRel("canonical").setAttribute("href", canonical);
  ensureAlternate("en").setAttribute("href", canonical);
  ensureAlternate("x-default").setAttribute("href", canonical);
  ensureMetaProperty("og:site_name").setAttribute("content", SITE_NAME);
  ensureMetaProperty("og:locale").setAttribute("content", OG_LOCALE);
  ensureMetaProperty("og:type").setAttribute("content", "website");
  ensureMetaProperty("og:title").setAttribute("content", meta.title);
  ensureMetaProperty("og:description").setAttribute("content", meta.description);
  ensureMetaProperty("og:url").setAttribute("content", canonical);
  ensureMetaProperty("og:image").setAttribute("content", image);
  ensureMetaName("twitter:card").setAttribute("content", "summary_large_image");
  ensureMetaName("twitter:title").setAttribute("content", meta.title);
  ensureMetaName("twitter:description").setAttribute("content", meta.description);
  ensureMetaName("twitter:image").setAttribute("content", image);
  ensureLinkRel("icon").setAttribute("href", runtimeAssetHref(AVATAR_FILE));
  ensureLinkRel("apple-touch-icon").setAttribute("href", runtimeAssetHref(AVATAR_FILE));
  ensureLinkRel("manifest").setAttribute("href", runtimeAssetHref("site.webmanifest"));

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
  window.carouselTimer = setInterval(() => show(i + 1), 5600);
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
