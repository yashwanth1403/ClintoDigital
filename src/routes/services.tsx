import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  Rocket,
  Calendar,
  Zap,
  Smartphone,
  MapPinned,
  Search,
  Megaphone,
  Monitor,
  Bot,
  Check,
  X,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Clinto Digital" },
      {
        name: "description",
        content:
          "Social media, SEO, AI search, paid ads, websites, and automation — connected growth services built for modern businesses.",
      },
      { property: "og:title", content: "Growth Services Built For Modern Businesses" },
      {
        property: "og:description",
        content: "Connected growth systems — from visibility to automation. Built for measurable results.",
      },
    ],
  }),
  component: ServicesPage,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const services = [
  {
    icon: Smartphone,
    emoji: "📱",
    title: "Social Media Management",
    image: "/images/services/social-media-management.png",
    description: "Build awareness, trust, engagement, and consistent content systems.",
    items: [
      "Content Strategy",
      "Content Creation",
      "Reels & Short Form Content",
      "Instagram Management",
      "Facebook Management",
      "LinkedIn Management",
      "Community Management",
    ],
  },
  {
    icon: MapPinned,
    emoji: "📍",
    title: "Google Business Profile Optimization",
    image: "/images/services/google-business-profile-optimization.png",
    description: "Improve local visibility and attract more customers through Google Maps and local search.",
    items: [
      "GBP Setup",
      "GBP Optimization",
      "Local SEO",
      "Citation Building",
      "Review Management",
      "Maps Ranking Strategy",
    ],
  },
  {
    icon: Search,
    emoji: "🔍",
    title: "SEO & AI Search Optimization",
    image: "/images/services/seo-ai-search-optimization.png",
    description: "Improve visibility across traditional and AI-powered search platforms.",
    items: [
      "Technical SEO",
      "On-Page SEO",
      "Content SEO",
      "SEO Audits",
      "GEO",
      "ChatGPT Visibility",
      "AI Search Optimization",
      "Knowledge Base Optimization",
    ],
  },
  {
    icon: Megaphone,
    emoji: "📢",
    title: "Google & Meta Ads",
    image: "/images/services/google-meta-ads.png",
    description: "Generate leads through highly targeted advertising campaigns.",
    items: [
      "Google Ads",
      "Meta Ads",
      "Retargeting",
      "Conversion Tracking",
      "Lead Generation Campaigns",
    ],
  },
  {
    icon: Monitor,
    emoji: "💻",
    title: "Website Development",
    image: "/images/services/website-development.png",
    description: "Build websites and landing pages optimized for conversion and growth.",
    items: [
      "Business Websites",
      "Landing Pages",
      "Conversion Funnels",
      "CRO",
      "Analytics Setup",
    ],
  },
  {
    icon: Bot,
    emoji: "🤖",
    title: "AI Automation",
    image: "/images/services/ai-automation.png",
    description: "Automate lead qualification, customer communication, and appointment booking.",
    items: [
      "AI Voice Agents",
      "AI Chatbots",
      "WhatsApp Automation",
      "Appointment Booking",
      "CRM Integrations",
    ],
  },
];

const ecosystem = [
  { label: "Social Media", icon: Smartphone },
  { label: "SEO & AI Search", icon: Search },
  { label: "Paid Advertising", icon: Megaphone },
  { label: "Website & Funnels", icon: Monitor },
  { label: "AI Automation", icon: Bot },
  { label: "Business Growth", icon: TrendingUp },
];

function ServicesPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(91,91,214,0.06), transparent 60%)",
          }}
        />
        <div className="container-page pt-20 md:pt-28 pb-16 md:pb-24">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase"
            >
              <Zap className="h-3.5 w-3.5" /> Services
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-5xl md:text-7xl font-medium tracking-tight text-foreground"
            >
              Growth Services Built For{" "}
              <span className="italic font-light text-muted-foreground">Modern Businesses</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-foreground-secondary"
            >
              From social media and search visibility to paid advertising, websites, and automation,
              Clinto Digital helps businesses build connected growth systems that generate measurable
              results.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <Rocket className="h-4 w-4" />
                Get A Free Growth Audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-foreground"
              >
                <Calendar className="h-4 w-4" />
                Book Strategy Call
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="container-page py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase"
          >
            The Ecosystem
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-foreground"
          >
            One connected growth system.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base md:text-lg text-foreground-secondary leading-relaxed"
          >
            Each service strengthens the next — visibility feeds traffic, traffic feeds conversion,
            and automation compounds the result.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-md flex flex-col items-stretch gap-3"
        >
          {ecosystem.map(({ label, icon: Icon }, i) => (
            <motion.div key={label} variants={fadeUp} className="flex flex-col items-center">
              <div
                className={`group w-full flex items-center gap-4 rounded-2xl border px-5 py-4 transition-all hover:shadow-md hover:-translate-y-0.5 ${
                  i === ecosystem.length - 1
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-surface"
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    i === ecosystem.length - 1 ? "bg-background/10" : "bg-secondary-surface"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{label}</span>
                {i === ecosystem.length - 1 && (
                  <Sparkles className="ml-auto h-4 w-4 opacity-70" />
                )}
              </div>
              {i < ecosystem.length - 1 && (
                <div className="my-1 h-6 w-px bg-border" aria-hidden />
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="container-page py-20 md:py-28 border-t border-border">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase"
          >
            Capabilities
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-foreground"
          >
            Six disciplines. One growth engine.
          </motion.h2>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const reverse = idx % 2 === 1;
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
                className={`grid gap-10 md:gap-16 md:grid-cols-2 items-center ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Visual side */}
                <motion.div variants={fadeUp}>
                  <div className="relative rounded-3xl border border-border bg-surface overflow-hidden aspect-[4/3] flex items-center justify-center shadow-sm group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-surface/90 backdrop-blur-md shadow-sm border border-border">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="absolute bottom-6 right-6 text-4xl font-light tracking-tight text-foreground/35 bg-surface/80 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-border/50">
                      0{idx + 1}
                    </div>
                  </div>
                </motion.div>

                {/* Content side */}
                <motion.div variants={fadeUp}>
                  <div className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase mb-3">
                    Service {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                    <span className="mr-2">{service.emoji}</span>
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base md:text-lg text-foreground-secondary leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="h-1 w-1 rounded-full bg-foreground/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* WHY INTEGRATED */}
      <section className="container-page py-20 md:py-28 border-t border-border">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-medium tracking-tight text-foreground"
          >
            Most businesses don't need more tools.
            <br />
            <span className="italic font-light text-muted-foreground">
              They need better systems.
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto"
        >
          {/* Traditional */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-border bg-surface p-8 md:p-10"
          >
            <div className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase mb-4">
              Traditional Approach
            </div>
            <h3 className="text-2xl font-medium text-foreground mb-6">Fragmented marketing</h3>
            <ul className="space-y-4">
              {[
                "Disconnected tools",
                "Manual follow-ups",
                "Siloed marketing",
                "Inconsistent results",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-border">
                    <X className="h-3 w-3 text-muted-foreground" />
                  </span>
                  <span className="text-foreground-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Clinto */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-foreground bg-foreground text-background p-8 md:p-10 shadow-xl"
          >
            <div className="text-xs font-medium tracking-[0.18em] text-background/60 uppercase mb-4">
              Clinto Digital Approach
            </div>
            <h3 className="text-2xl font-medium mb-6">Connected growth system</h3>
            <ul className="space-y-4">
              {[
                "Connected systems",
                "Automation",
                "Better visibility",
                "Measurable growth",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-background/15">
                    <Check className="h-3 w-3 text-background" />
                  </span>
                  <span className="text-background/90">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

    </SiteLayout>
  );
}
