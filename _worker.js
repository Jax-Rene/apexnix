const CANONICAL_HOST = "www.apexnix.com";
const APEX_HOST = "apexnix.com";
const PAGES_HOST = "apexnix.pages.dev";
const PAGES_HOST_SUFFIX = ".apexnix.pages.dev";
const LOCAL_HOSTS = new Set(["127.0.0.1", "localhost"]);
const TRAILING_SLASH_PATHS = new Set([
  "/products",
  "/products/metal-bed-frames",
  "/products/bamboo-bed-frames",
  "/products/oem-custom-development",
  "/solutions",
  "/capabilities",
  "/about",
  "/contact",
]);

function isPagesPreviewHost(hostname) {
  return hostname === PAGES_HOST || hostname.endsWith(PAGES_HOST_SUFFIX);
}

function shouldCanonicalizeHost(hostname) {
  return hostname === APEX_HOST || isPagesPreviewHost(hostname);
}

export default {
  fetch(request, env) {
    const url = new URL(request.url);
    const isLocalPreview = LOCAL_HOSTS.has(url.hostname);
    let shouldRedirect = false;

    if (!isLocalPreview && (url.protocol !== "https:" || shouldCanonicalizeHost(url.hostname))) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      url.port = "";
      shouldRedirect = true;
    }

    if (TRAILING_SLASH_PATHS.has(url.pathname)) {
      url.pathname = `${url.pathname}/`;
      shouldRedirect = true;
    }

    if (shouldRedirect) {
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/_worker.js") {
      return new Response("Not found", { status: 404 });
    }

    return env.ASSETS.fetch(request);
  },
};
