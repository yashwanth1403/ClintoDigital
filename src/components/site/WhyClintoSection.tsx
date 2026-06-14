import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Bot,
  TrendingUp,
  Settings,
  Target,
  X,
  Check,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
}

function ValueCard({ icon, title, description, highlights }: ValueCardProps) {
  return (
    <motion.div variants={item}>
      <div className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_8px_24px_-16px_rgba(27,27,31,0.12)] md:p-10">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        <h3 className="font-serif text-xl font-medium leading-tight text-foreground md:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-foreground-secondary md:text-base">
          {description}
        </p>

        <ul className="mt-5 space-y-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-2 text-sm text-foreground-secondary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

const values: ValueCardProps[] = [
  {
    icon: <Bot size={22} strokeWidth={1.5} />,
    title: "AI-First Marketing",
    description:
      "We help businesses improve visibility not only on Google but also across ChatGPT, Gemini, Perplexity, and emerging AI-powered search platforms.",
    highlights: [
      "AI Search Visibility",
      "GEO",
      "LLM Optimization",
      "Future-Ready Strategy",
    ],
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Performance Focused",
    description:
      "Every campaign is designed around business outcomes such as leads, appointments, inquiries, and revenue opportunities.",
    highlights: [
      "Lead Generation",
      "Conversion Tracking",
      "Funnel Optimization",
      "Data-Driven Decisions",
    ],
  },
  {
    icon: <Settings size={22} strokeWidth={1.5} />,
    title: "Marketing + Automation",
    description:
      "We combine marketing execution with intelligent automation systems that save time and improve operational efficiency.",
    highlights: [
      "AI Chatbots",
      "Voice Agents",
      "CRM Automation",
      "Appointment Systems",
    ],
  },
  {
    icon: <Target size={22} strokeWidth={1.5} />,
    title: "End-To-End Growth Systems",
    description:
      "Instead of disconnected services, we create integrated systems that support every stage of the customer journey.",
    highlights: [
      "Social Media",
      "SEO",
      "Paid Ads",
      "Automation",
    ],
  },
];

const traditionalItems = [
  "Separate services",
  "Manual processes",
  "Limited reporting",
  "Focus on vanity metrics",
  "Reactive strategy",
];

const clintoItems = [
  "Connected growth systems",
  "Intelligent automation",
  "Data-driven decisions",
  "Lead-focused execution",
  "Long-term growth strategy",
];

export function WhyClintoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const comparisonRef = useRef<HTMLDivElement>(null);
  const comparisonInView = useInView(comparisonRef, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(91, 91, 214, 0.05), transparent)",
        }}
      />

      <div className="container-page relative">
        {/* Header */}
        <div className="text-center">
          <span className="eyebrow">Why Clinto Digital</span>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight text-foreground md:text-5xl md:leading-[1.1]">
            A Modern Growth Partner For Today's Businesses
          </h2>
          <p className="mx-auto mt-5 max-w-[750px] text-base leading-relaxed text-foreground-secondary md:text-lg">
            Most agencies focus on individual services. We focus on building connected
            growth systems that combine social media, search visibility, advertising,
            websites, and automation to generate measurable business results.
          </p>
        </div>

        {/* Value Cards */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </motion.div>

        {/* Comparison Block */}
        <motion.div
          ref={comparisonRef}
          initial={{ opacity: 0, y: 30 }}
          animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease }}
          className="mt-20 rounded-2xl border border-border bg-surface p-8 md:p-14"
        >
          <h3 className="text-center font-serif text-2xl font-medium text-foreground md:text-3xl">
            Traditional Agencies vs Clinto Digital
          </h3>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Traditional */}
            <div className="rounded-xl border border-border-light bg-secondary-surface/60 p-6 md:p-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-secondary">
                Traditional Agencies
              </h4>
              <ul className="mt-5 space-y-3.5">
                {traditionalItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground-secondary md:text-base">
                    <X size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinto */}
            <div className="rounded-xl border border-primary-light bg-primary-light/30 p-6 md:p-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Clinto Digital
              </h4>
              <ul className="mt-5 space-y-3.5">
                {clintoItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground md:text-base">
                    <Check size={18} strokeWidth={2.5} className="mt-0.5 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
