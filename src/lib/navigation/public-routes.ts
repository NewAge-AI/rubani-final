const PUBLIC_PAGE_PATHS = new Set(["/", "/contact"]);

const PUBLIC_PREFIXES = [
  "/api",
  "/_next",
  "/brand",
  "/landing",
  "/logos",
  "/.well-known",
] as const;

const STATIC_FILE_PATTERN =
  /\.(?:png|jpe?g|webp|svg|ico|txt|xml|json|woff2?|md)$/i;

export function isPublicRoute(pathname: string): boolean {
  if (PUBLIC_PAGE_PATHS.has(pathname)) {
    return true;
  }

  if (STATIC_FILE_PATTERN.test(pathname)) {
    return true;
  }

  return PUBLIC_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}
