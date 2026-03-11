// components/seoConfig.ts
//
// ⚠️  THIS FILE IS DEPRECATED — DO NOT USE
//
// All SEO data has been moved to components/SEO.tsx
// SEO.tsx is now the single source of truth for:
//   - All page titles, descriptions, keywords
//   - Organization, LocalBusiness, Service, WebSite JSON-LD schemas
//   - FAQ and AggregateRating schemas
//   - Competitor-researched keywords for all pages
//
// WHY THIS FILE WAS REPLACED:
//   1. Wrong keys: "mobile-app-development" / "full-stack-development"
//      didn't match actual page paths (/mobile-app, /full-stack)
//      → caused getPageSEO() to return undefined silently
//   2. No city targeting — missing Warangal, Hanamkonda, Khammam
//   3. Keywords were arrays (Next.js ignores array keywords in metadata)
//      should be a single comma-separated string
//   4. Missing pages: about, contact, ai-solutions
//   5. Weak keywords with no "near me", "best", "top" variants
//      that competitors SVAPPS and Krify rank #1 for
//
// HOW TO USE THE NEW SYSTEM:
//
//   Pages with layout.tsx (web-dev, digital-marketing, full-stack, mobile-app):
//     → Metadata comes from layout.tsx
//     → JSON-LD schemas come from <SEO page="..." /> in page.tsx
//
//   Pages without layout.tsx (ecommerce, ai-solutions, about, contact):
//     → Everything from <SEO page="..." /> in page.tsx
//
//   Homepage:
//     → <SEO includeFaq={true} includeRating={true} />
//
// DELETE THIS FILE once you confirm no remaining imports exist.
// Search your codebase for: import.*seoConfig  or  getPageSEO
// ─────────────────────────────────────────────────────────────────

export {};