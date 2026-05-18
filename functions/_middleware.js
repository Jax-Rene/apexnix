const CANONICAL_HOST = "www.apexnix.com";
const APEX_HOST = "apexnix.com";
const PAGES_HOST = "apexnix.pages.dev";
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

export function onRequest(context) {
  const url = new URL(context.request.url);
  const isLocalPreview = LOCAL_HOSTS.has(url.hostname);
  let shouldRedirect = false;

  if (!isLocalPreview && (url.hostname === APEX_HOST || url.hostname === PAGES_HOST || url.protocol !== "https:")) {
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    shouldRedirect = true;
  }

  if (TRAILING_SLASH_PATHS.has(url.pathname)) {
    url.pathname = `${url.pathname}/`;
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
