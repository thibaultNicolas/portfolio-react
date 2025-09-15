import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fr"],

  // Used when no locale matches
  defaultLocale: "en",

  // Don't add locale prefix for default locale
  localePrefix: "as-needed",

  // Don't redirect for default locale
  localeDetection: false,
});

export const config = {
  // Match only French paths and exclude root
  matcher: ["/fr/:path*"],
};
