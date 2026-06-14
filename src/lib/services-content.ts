/**
 * Structured content for individual service pages.
 * Add a new entry here to generate a fully SEO-optimized service page at
 * /services/<slug>. The template lives in src/components/services/ServiceTemplate.tsx.
 */

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string; // lucide-react icon name (see ICON_MAP in ServiceTemplate)
}

export interface ServiceBenefit {
  emoji: string;
  title: string;
  description: string;
}

export interface ServiceIndustry {
  emoji: string;
  label: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceContent {
  /** URL slug — must match the route param. */
  slug: string;

  /** Short category label shown above the hero headline. */
  category: string;
  categoryEmoji: string;

  /** SEO + Open Graph metadata. */
  seo: {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  };

  /** Hero section. */
  hero: {
    headline: string;
    description: string;
    primaryCta?: { label: string; emoji: string; href: string };
    secondaryCta?: { label: string; emoji: string; href: string };
  };

  /** Problem section. */
  problem: {
    eyebrow?: string;
    heading: string;
    description: string;
    points: { title: string; description: string }[];
  };

  /** Service overview — "What is X?" */
  overview: {
    eyebrow?: string;
    heading: string;
    paragraphs: string[];
    highlights?: string[];
  };

  /** What's included — feature grid. */
  whatsIncluded: {
    eyebrow?: string;
    heading: string;
    description?: string;
    features: ServiceFeature[];
  };

  /** Outcome-focused benefits. */
  benefits: {
    eyebrow?: string;
    heading: string;
    description?: string;
    items: ServiceBenefit[];
  };

  /** Industries this service is relevant to. */
  industries: {
    eyebrow?: string;
    heading: string;
    description?: string;
    items: ServiceIndustry[];
  };

  /** Service-specific FAQ. */
  faq: {
    eyebrow?: string;
    heading: string;
    items: ServiceFAQ[];
  };

  /** Optional before/after comparison block. */
  comparison?: {
    eyebrow?: string;
    heading: string;
    description?: string;
    without: { title: string; items: string[] };
    with: { title: string; items: string[] };
  };

  /** Final CTA. */
  cta: {
    heading: string;
    description: string;
    primaryCta?: { label: string; emoji: string; href: string };
    secondaryCta?: { label: string; emoji: string; href: string };
  };
}

// ---------- Default CTAs (can be overridden per service) ----------

export const DEFAULT_PRIMARY_CTA = {
  label: "Get A Free Growth Audit",
  emoji: "🚀",
  href: "/contact",
};

export const DEFAULT_SECONDARY_CTA = {
  label: "Book Strategy Call",
  emoji: "📅",
  href: "/contact",
};

// ---------- Content registry ----------
// Add additional services as new keys. The template needs no changes.

import { googleBusinessProfileOptimization } from "./services/google-business-profile-optimization";

export const servicesContent: Record<string, ServiceContent> = {
  [googleBusinessProfileOptimization.slug]: googleBusinessProfileOptimization,
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return servicesContent[slug];
}

export function listServiceSlugs(): string[] {
  return Object.keys(servicesContent);
}
