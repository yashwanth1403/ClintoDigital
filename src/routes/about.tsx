import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  Rocket,
  MessageCircle,
  Eye,
  Target,
  Cog,
  TrendingUp,
  Check,
  X,
  Sparkles,
  Compass,
  Lightbulb,
  Zap,
  BarChart3,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Clinto Digital — Modern Growth Systems For Ambitious Businesses" },
      {
        name: "description",
        content:
          "Clinto Digital helps businesses improve visibility, generate leads, and build scalable growth systems through marketing, AI search, websites, and automation.",
      },
      { property: "og:title", content: "About Clinto Digital — Modern Growth Systems" },
      {
        property: "og:description",
        content:
          "Our story, mission, and approach to building connected growth systems for ambitious businesses.",
      },
    ],
  }),
  component: AboutPage,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const approach = [
  {
    icon: Eye,
    emoji: "📈",
    title: "Visibility",
    description: "Helping businesses get discovered across search, social, and AI.",
  },
  {
    icon: Target,
    emoji: "🎯",
    title: "Conversion",
    description: "Turning attention into qualified opportunities.",
  },
  {
    icon: Cog,
    emoji: "⚙️",
    title: "Automation",
    description: "Reducing manual effort with intelligent workflows.",
  },
  {
    icon: TrendingUp,
    emoji: "🚀",
    title: "Growth",
    description: "Building sustainable systems that compound over time.",
  },
];

const values = [
  {
    title: "Transparency",
    description: "Clear communication, no jargon, honest expectations.",
  },
  {
    title: "Simplicity",
    description: "Focus on what actually moves the business forward.",
  },
  {
    title: "Innovation",
    description: "Modern tools and AI-first thinking, built for what's next.",
  },
  {
    title: "Results Focus",
    description: "Business outcomes over vanity metrics.",
  },
];

const traditional = [
  "Individual services",
  "Manual workflows",
  "Short-term tactics",
  "Fragmented strategy",
];

const clinto = [
  "Connected systems",
  "Automation-first thinking",
  "Long-term growth focus",
  "Modern search visibility",
];

const futureTopics = [
  {
    icon: Sparkles,
    title: "AI Search",
    description:
      "Customers are shifting from blue links to conversational answers. Brands that show up inside AI results win the next decade of attention.",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Repetitive marketing and operations tasks are being absorbed by intelligent systems, freeing teams to focus on judgment and creativity.",
  },
  {
    icon: Compass,
    title: "Local Visibility",
    description:
      "Maps, reviews, and local intent signals quietly drive a huge share of revenue for service businesses — and the gap between leaders and laggards is widening.",
  },
  {
    icon: Lightbulb,
    title: "Digital Experiences",
    description:
      "Websites are evolving from brochures into product-grade experiences that guide customers, qualify them, and convert in fewer steps.",
  },
  {
    icon: BarChart3,
    title: "Intelligent Customer Journeys",
    description:
      "Growth is moving toward connected journeys where every touchpoint informs the next — powered by data, content, and automation working together.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary-surface/40 via-background to-background" />
        <div className="container-page pt-24 md:pt-32 pb-20 md:pb-28">
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
              🚀 About Clinto Digital
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-5xl md:text-7xl font-medium tracking-tight text-foreground"
            >
              Building Modern Growth Systems For{" "}
              <span className="italic font-light text-muted-foreground">Ambitious Businesses</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-foreground-secondary"
            >
              Clinto Digital helps businesses improve visibility, generate leads, and create
              scalable growth systems through marketing, AI search optimization, websites, and
              automation.
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
                <MessageCircle className="h-4 w-4" />
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="container-page py-20 md:py-28 border-t border-border">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase text-center"
          >
            Our Story
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-foreground text-center"
          >
            Why Clinto Digital Exists
          </motion.h2>

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground-secondary">
            <motion.p variants={fadeUp}>
              Most businesses struggle because marketing, websites, SEO, automation, and customer
              acquisition often operate in isolation — a patchwork of tools and tactics that rarely
              add up to a system.
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              className="my-10 border-l-2 border-foreground pl-6 py-2"
            >
              <p className="text-2xl md:text-3xl font-medium tracking-tight text-foreground leading-snug">
                Businesses don't need more tools.
                <br />
                <span className="italic font-light text-muted-foreground">
                  They need better systems.
                </span>
              </p>
            </motion.blockquote>

            <motion.p variants={fadeUp}>
              Clinto Digital was created around that simple belief. Our focus is helping businesses
              build connected growth systems that attract customers, improve visibility, and create
              sustainable opportunities — not just campaigns that end when the budget does.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* MISSION */}
      <section className="container-page py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            variants={fadeUp}
            className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase text-center"
          >
            Our Mission
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 relative overflow-hidden rounded-3xl border border-border bg-foreground text-background p-10 md:p-16"
          >
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-background/5 blur-3xl" />
            <div className="relative">
              <Sparkles className="h-8 w-8 opacity-70" />
              <p className="mt-6 text-2xl md:text-4xl font-medium tracking-tight leading-snug">
                Help businesses grow through modern marketing, search visibility, automation, and
                intelligent systems.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* OUR APPROACH */}
      <section className="container-page py-20 md:py-28 border-t border-border">
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
            Our Approach
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-foreground"
          >
            How We Think About Growth
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {approach.map(({ icon: Icon, emoji, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-md hover:border-foreground/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-surface text-lg">
                <span aria-hidden>{emoji}</span>
                <Icon className="hidden" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CORE VALUES */}
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
            Core Values
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-foreground"
          >
            What We Stand For
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2"
        >
          {values.map(({ title, description }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="bg-background p-8 md:p-10 transition-colors hover:bg-surface"
            >
              <div className="text-xs font-medium tracking-[0.18em] text-muted-foreground">
                0{i + 1}
              </div>
              <h3 className="mt-4 text-2xl font-medium tracking-tight text-foreground">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground-secondary">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="container-page py-20 md:py-28 border-t border-border">
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
            What Makes Us Different
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-foreground"
          >
            More Than A Marketing Agency
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-border bg-surface p-8 md:p-10"
          >
            <div className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Traditional Agency
            </div>
            <h3 className="mt-3 text-2xl font-medium tracking-tight text-foreground">
              Services in silos
            </h3>
            <ul className="mt-6 space-y-3">
              {traditional.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground-secondary">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-foreground bg-foreground text-background p-8 md:p-10 shadow-lg"
          >
            <div className="text-xs font-medium tracking-[0.18em] text-background/60 uppercase">
              Clinto Digital
            </div>
            <h3 className="mt-3 text-2xl font-medium tracking-tight">A connected system</h3>
            <ul className="mt-6 space-y-3">
              {clinto.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-background/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* FUTURE VISION */}
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
            Future Vision
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-foreground"
          >
            Where Business Growth Is Heading
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base md:text-lg text-foreground-secondary leading-relaxed"
          >
            The next decade of growth won't be won by louder marketing. It will be won by
            businesses that build smarter, more connected systems.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-5xl divide-y divide-border rounded-3xl border border-border bg-surface"
        >
          {futureTopics.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group grid gap-4 p-8 md:grid-cols-[220px_1fr] md:gap-10 md:p-10"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background border border-border">
                  <Icon className="h-4 w-4 text-foreground" />
                </div>
                <h3 className="text-lg font-medium tracking-tight text-foreground pt-1.5">
                  {title}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-foreground-secondary">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-28 border-t border-border">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-medium tracking-tight text-foreground"
          >
            Let's build something{" "}
            <span className="italic font-light text-muted-foreground">meaningful.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-foreground-secondary"
          >
            Whether you're looking to improve visibility, generate leads, or create scalable
            systems, we'd love to learn about your business.
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
              Free Growth Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
