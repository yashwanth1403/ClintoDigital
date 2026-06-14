import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  Rocket,
  Calendar,
  MapPin,
  TrendingUp,
  Bot,
  Search,
  Megaphone,
  Monitor,
  Smartphone,
  Check,
  X,
  Stethoscope,
  Building,
  GraduationCap,
  Home,
  Sparkles,
  Eye,
  Users,
  MessageSquare,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Clinto Digital" },
      {
        name: "description",
        content:
          "Clinto Digital helps clinics, doctors, dental practices, diagnostics, real estate, and education businesses grow with tailored marketing, SEO, and automation strategies.",
      },
      { property: "og:title", content: "Growth Strategies Built Around Your Industry" },
      {
        property: "og:description",
        content:
          "Industry-specific marketing and automation for healthcare, real estate, education, and local businesses.",
      },
    ],
  }),
  component: IndustriesPage,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const overviewCards = [
  {
    icon: MapPin,
    title: "Local Visibility",
    description: "Be found where your customers are searching — Google Maps, local search, and review platforms.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description: "Attract qualified prospects through organic search, paid campaigns, and strategic content.",
  },
  {
    icon: Bot,
    title: "Automation",
    description: "Reduce manual work with intelligent workflows that nurture leads and book appointments.",
  },
  {
    icon: Sparkles,
    title: "Growth Systems",
    description: "Connect every channel into a cohesive system that compounds results over time.",
  },
];

const industries = [
  {
    emoji: "🏥",
    icon: Stethoscope,
    title: "Clinics",
    headline: "Helping Clinics Attract More Patients",
    challenges: [
      "Low local visibility",
      "Poor Google Maps rankings",
      "Limited online presence",
      "Appointment acquisition challenges",
    ],
    services: [
      { icon: MapPin, label: "GBP Optimization" },
      { icon: Search, label: "SEO" },
      { icon: Smartphone, label: "Social Media" },
      { icon: Bot, label: "Automation" },
    ],
  },
  {
    emoji: "👨‍⚕️",
    icon: Users,
    title: "Doctors",
    headline: "Build Visibility, Authority & Trust",
    challenges: [
      "Personal branding",
      "Search visibility",
      "Reputation management",
      "Patient acquisition",
    ],
    services: [
      { icon: Smartphone, label: "Social Media" },
      { icon: Search, label: "SEO" },
      { icon: MapPin, label: "Local SEO" },
      { icon: Bot, label: "Automation" },
    ],
  },
  {
    emoji: "🦷",
    icon: Sparkles,
    title: "Dental Clinics",
    headline: "Generate More High-Value Treatment Inquiries",
    challenges: [
      "Competitive local markets",
      "Treatment awareness",
      "Lead conversion",
      "Online reputation",
    ],
    services: [
      { icon: MapPin, label: "GBP Optimization" },
      { icon: Megaphone, label: "Ads" },
      { icon: Smartphone, label: "Social Media" },
      { icon: Search, label: "SEO" },
    ],
  },
  {
    emoji: "🧪",
    icon: Eye,
    title: "Diagnostic Centers",
    headline: "Increase Visibility & Appointment Requests",
    challenges: [
      "Local competition",
      "Search visibility",
      "Patient awareness",
      "Operational efficiency",
    ],
    services: [
      { icon: MapPin, label: "GBP" },
      { icon: Search, label: "SEO" },
      { icon: Bot, label: "Automation" },
      { icon: Smartphone, label: "Social Media" },
    ],
  },
  {
    emoji: "🏠",
    icon: Home,
    title: "Real Estate",
    headline: "Capture More Buyer & Seller Leads",
    challenges: [
      "Lead generation",
      "Follow-up systems",
      "Digital visibility",
      "Conversion tracking",
    ],
    services: [
      { icon: Megaphone, label: "Ads" },
      { icon: Monitor, label: "Websites" },
      { icon: Bot, label: "Automation" },
      { icon: Smartphone, label: "Social Media" },
    ],
  },
  {
    emoji: "🎓",
    icon: GraduationCap,
    title: "Education",
    headline: "Drive More Student Inquiries",
    challenges: [
      "Enrollment growth",
      "Brand visibility",
      "Lead nurturing",
      "Communication workflows",
    ],
    services: [
      { icon: Megaphone, label: "Ads" },
      { icon: Smartphone, label: "Social Media" },
      { icon: Bot, label: "Automation" },
      { icon: Monitor, label: "Landing Pages" },
    ],
  },
];

const challengeCategories = [
  {
    icon: Stethoscope,
    label: "Healthcare",
    items: ["Patient Acquisition", "Reputation", "Local Visibility"],
  },
  {
    icon: Home,
    label: "Real Estate",
    items: ["Lead Generation", "Follow-Up", "Conversion"],
  },
  {
    icon: GraduationCap,
    label: "Education",
    items: ["Enrollment", "Awareness", "Engagement"],
  },
  {
    icon: Building,
    label: "Local Businesses",
    items: ["Visibility", "Reviews", "Customer Acquisition"],
  },
];

const frameworkSteps = ["Visibility", "Traffic", "Leads", "Automation", "Growth"];

const comparison = {
  generic: [
    "Same strategy for everyone",
    "Generic messaging",
    "Weak positioning",
    "Poor relevance",
  ],
  industry: [
    "Relevant messaging",
    "Better visibility",
    "Higher trust",
    "Stronger conversion potential",
  ],
};

function IndustriesPage() {
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
              🏢 Industries We Serve
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-5xl md:text-7xl font-medium tracking-tight text-foreground"
            >
              Growth Strategies Built Around{" "}
              <span className="italic font-light text-muted-foreground">Your Industry</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-foreground-secondary"
            >
              Every industry has unique customer behaviors, buying journeys, competition, and growth
              challenges. We help businesses create marketing and automation systems tailored to their
              market.
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

      {/* OVERVIEW CARDS */}
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
            Focused On Industries Where Visibility Matters
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base md:text-lg text-foreground-secondary leading-relaxed"
          >
            Whether you&apos;re trying to attract patients, students, buyers, leads, or appointments,
            success depends on being visible at the right moment.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {overviewCards.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-md hover:border-foreground/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-surface">
                <Icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FEATURED INDUSTRIES */}
      <section className="container-page py-20 md:py-28">
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
            Featured Industries
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-foreground"
          >
            Who We Serve
          </motion.h2>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            const reverse = idx % 2 === 1;
            return (
              <motion.div
                key={industry.title}
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
                  <div className="relative rounded-3xl border border-border bg-surface p-10 md:p-14 overflow-hidden">
                    <div
                      aria-hidden
                      className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-40"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(91,91,214,0.18), transparent 70%)",
                      }}
                    />
                    <div className="relative flex flex-col items-start gap-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary-surface">
                        <Icon className="h-7 w-7 text-foreground" />
                      </div>
                      <div className="text-7xl md:text-8xl font-light tracking-tight text-foreground/10">
                        0{idx + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content side */}
                <motion.div variants={fadeUp}>
                  <div className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase mb-3">
                    Industry {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                    <span className="mr-2">{industry.emoji}</span>
                    {industry.headline}
                  </h3>

                  <div className="mt-6">
                    <div className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase mb-3">
                      Challenges
                    </div>
                    <ul className="space-y-2">
                      {industry.challenges.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground-secondary">
                          <span className="h-1 w-1 rounded-full bg-foreground/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <div className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase mb-3">
                      Relevant Services
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {industry.services.map(({ icon: SIcon, label }) => (
                        <span
                          key={label}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary-surface px-3 py-1.5 text-xs font-medium text-foreground"
                        >
                          <SIcon className="h-3.5 w-3.5 text-muted-foreground" />
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      Explore Growth Opportunities
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* INDUSTRY CHALLENGES */}
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
            Different Industries.{" "}
            <span className="italic font-light text-muted-foreground">Different Challenges.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {challengeCategories.map(({ icon: Icon, label, items }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-md hover:border-foreground/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-surface">
                <Icon className="h-4 w-4 text-foreground" />
              </div>
              <div className="mt-4 text-sm font-medium text-foreground">{label}</div>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground-secondary">
                    <span className="h-1 w-1 rounded-full bg-foreground/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SOLUTIONS FRAMEWORK */}
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
            Our Framework
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-foreground"
          >
            One Framework.{" "}
            <span className="italic font-light text-muted-foreground">Customized Execution.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-xl flex flex-col items-stretch gap-3"
        >
          {frameworkSteps.map((step, i) => (
            <motion.div key={step} variants={fadeUp} className="flex flex-col items-center">
              <div
                className={`group w-full flex items-center gap-4 rounded-2xl border px-5 py-4 transition-all hover:shadow-md hover:-translate-y-0.5 ${
                  i === frameworkSteps.length - 1
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-surface"
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    i === frameworkSteps.length - 1 ? "bg-background/10" : "bg-secondary-surface"
                  }`}
                >
                  <span className="text-sm font-medium">{i + 1}</span>
                </div>
                <span className="text-sm font-medium">{step}</span>
                {i === frameworkSteps.length - 1 && (
                  <Sparkles className="ml-auto h-4 w-4 opacity-70" />
                )}
              </div>
              {i < frameworkSteps.length - 1 && (
                <div className="my-1 h-6 w-px bg-border" aria-hidden />
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WHY INDUSTRY-SPECIFIC */}
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
            Generic Marketing{" "}
            <span className="italic font-light text-muted-foreground">Rarely Delivers</span>{" "}
            Exceptional Results
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-border bg-surface p-8 md:p-10"
          >
            <div className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase mb-4">
              Generic Approach
            </div>
            <h3 className="text-2xl font-medium text-foreground mb-6">One size fits all</h3>
            <ul className="space-y-4">
              {comparison.generic.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-border">
                    <X className="h-3 w-3 text-muted-foreground" />
                  </span>
                  <span className="text-foreground-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-foreground bg-foreground text-background p-8 md:p-10 shadow-xl"
          >
            <div className="text-xs font-medium tracking-[0.18em] text-background/60 uppercase mb-4">
              Industry-Specific Approach
            </div>
            <h3 className="text-2xl font-medium mb-6">Built for your market</h3>
            <ul className="space-y-4">
              {comparison.industry.map((item) => (
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

      {/* CTA */}
      <section className="container-page py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase"
          >
            <MessageSquare className="h-3.5 w-3.5" /> Start A Conversation
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl md:text-5xl font-medium tracking-tight text-foreground"
          >
            Let&apos;s Build A Growth Strategy Around{" "}
            <span className="italic font-light text-muted-foreground">Your Industry</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-foreground-secondary leading-relaxed"
          >
            Every business is different. Let&apos;s identify the opportunities, channels, and systems
            that make the most sense for your market.
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
              <Calendar className="h-4 w-4" />
              Book Strategy Call
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
