/* ============================================
   CLIENT CONFIGURATION
   Change this file to set up a new client.
   This is the single source of truth for all
   client-specific content across the site.
   ============================================ */

export const client = {
  // ── Business Identity ──────────────────────
  name: "Hartwood Landscapes",
  shortName: "Hartwood",
  legalName: "Hartwood Landscapes Ltd",
  tagline: "LAWN CARE | HEDGE TRIMMING | PRUNING | PLANTING",
  logoInitials: "H L",

  // ── Founder / Director ─────────────────────
  founderName: "James",
  founderRole: "Owner",
  yearFounded: "2020",

  // ── Contact Details ────────────────────────
  phone: "07700 900123",
  email: "info@hartwoodlandscapes.co.uk",
  whatsapp: {
    display: "07700 900123",
    link: "https://wa.me/447700900123",
  },
  address: [
    "12 Oak Lane",
    "Prestbury",
    "Cheshire",
    "SK10 4AA",
  ],
  region: "Cheshire and the surrounding areas",
  basedIn: "Cheshire",

  // ── Business Hours ─────────────────────────
  hours: [
    { day: "Monday — Friday", time: "8:00 AM — 5:00 PM" },
    { day: "Saturday", time: "8:00 AM — 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  // ── Social Links ───────────────────────────
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ],

  // ── Awards & Recognition ───────────────────
  awards: [
    { title: "Google Reviews — 5.0 Stars", year: "2026", category: "REVIEWS" },
    { title: "32 Five-Star Reviews", year: "2026", category: "SERVICE" },
  ],

  // ── Partners ───────────────────────────────
  partners: [
    { name: "Local Suppliers", logo: null },
    { name: "Quality Materials", logo: null },
  ],

  // ── SEO / Metadata ─────────────────────────
  metaTitle: "Hartwood Landscapes — Professional Garden Maintenance in Cheshire",
  metaDescription:
    "Professional garden maintenance, hedge trimming, lawn care, fencing and landscaping in Cheshire. 5-star Google reviews. Call for a free estimate.",
};

// ── Derived helpers (do not edit) ────────────
export const phoneLink = `tel:${client.phone.replace(/\s/g, "")}`;
export const emailLink = `mailto:${client.email}`;
