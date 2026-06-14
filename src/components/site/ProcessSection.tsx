import { motion } from "motion/react";
import { Search, Brain, Rocket, BarChart3, Target, Database, RefreshCw } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

interface StepCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  deliverables: string[];
}

function StepCard({ number, icon, title, description, deliverables }: StepCardProps) {
  return (
    <motion.div variants={item} className="relative">
      <div className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_8px_24px_-16px_rgba(27,27,31,0.12)] md:p-8">
        {/* Step number + icon row */}
        <div className="flex items-center justify-between">
          <span className="font-sans text-4xl font-semibold tracking-tight text-primary/20 md:text-5xl">
            {number}
          </span>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>

        <h3 className="mt-5 font-serif text-xl font-medium leading-tight text-foreground md:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-foreground-secondary md:text-base">
          {description}
        </p>

        <ul className="mt-5 space-y-2">
          {deliverables.map((deliverable) => (
            <li
              key={deliverable}
              className="flex items-center gap-2 text-sm text-foreground-secondary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {deliverable}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

const steps: StepCardProps[] = [
  {
    number: "01",
    icon: <Search size={20} strokeWidth={1.5} />,
    title: "Discover",
    description:
      "We learn about your business, audience, competitors, goals, and growth challenges.",
    deliverables: [
      "Business Audit",
      "Market Analysis",
      "Competitor Research",
      "Opportunity Assessment",
    ],
  },
  {
    number: "02",
    icon: <Brain size={20} strokeWidth={1.5} />,
    title: "Strategy",
    description:
      "We create a customized growth roadmap tailored to your business objectives.",
    deliverables: [
      "Marketing Strategy",
      "Channel Selection",
      "Content Plan",
      "Growth Roadmap",
    ],
  },
  {
    number: "03",
    icon: <Rocket size={20} strokeWidth={1.5} />,
    title: "Execute",
    description:
      "We launch campaigns, create content, optimize visibility, and deploy automation systems.",
    deliverables: [
      "Campaign Launches",
      "Content Creation",
      "SEO Optimization",
      "Automation Setup",
    ],
  },
  {
    number: "04",
    icon: <BarChart3 size={20} strokeWidth={1.5} />,
    title: "Optimize",
    description:
      "We continuously monitor performance, identify opportunities, and improve results.",
    deliverables: [
      "Reporting",
      "Conversion Optimization",
      "Growth Experiments",
      "Scaling Strategy",
    ],
  },
];

const badges = [
  { icon: <Target size={16} strokeWidth={1.5} />, label: "Strategy First" },
  { icon: <Database size={16} strokeWidth={1.5} />, label: "Data Driven" },
  { icon: <RefreshCw size={16} strokeWidth={1.5} />, label: "Continuous Improvement" },
];

export function ProcessSection() {
  const viewport = { once: true, amount: 0.1 } as const;

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(199, 109, 58, 0.04), transparent)",
        }}
      />

      <div className="container-page relative">
        {/* Header */}
        <div className="text-center">
          <span className="eyebrow">How We Work</span>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight text-foreground md:text-5xl md:leading-[1.1]">
            A Proven Process For Sustainable Growth
          </h2>
          <p className="mx-auto mt-5 max-w-[750px] text-base leading-relaxed text-foreground-secondary md:text-lg">
            Every successful growth strategy starts with understanding your business,
            building the right systems, and continuously improving performance through
            data and insights.
          </p>
        </div>

        {/* Timeline — Desktop horizontal, Mobile vertical */}
        <div className="mt-14 md:mt-16">
          {/* Desktop: horizontal timeline with connector line */}
          <div className="hidden md:block">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="relative grid grid-cols-4 gap-6"
            >
              {/* Connector line behind cards */}
              <div className="absolute left-0 right-0 top-[72px] flex items-center justify-center px-[12%]">
                <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-border-light">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-primary/30"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={viewport}
                    transition={{ duration: 1.2, ease, delay: 0.3 }}
                  />
                </div>
              </div>

              {steps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </motion.div>
          </div>

          {/* Mobile: vertical timeline with connector line */}
          <div className="md:hidden">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="relative space-y-8"
            >
              {/* Vertical connector line */}
              <div className="absolute left-[27px] top-0 bottom-0 w-[2px] overflow-hidden rounded-full bg-border-light">
                <motion.div
                  className="absolute left-0 right-0 top-0 bg-primary/30"
                  initial={{ height: "0%" }}
                  whileInView={{ height: "100%" }}
                  viewport={viewport}
                  transition={{ duration: 1.2, ease, delay: 0.3 }}
                />
              </div>

              {steps.map((step) => (
                <div key={step.number} className="relative pl-16">
                  {/* Dot on timeline */}
                  <div className="absolute left-[22px] top-8 h-3 w-3 rounded-full border-2 border-primary bg-surface" />
                  <StepCard {...step} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Summary Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease }}
          className="mt-20 rounded-2xl border border-border bg-surface p-8 md:mt-24 md:p-14"
        >
          <div className="text-center">
            <h3 className="font-serif text-2xl font-medium leading-tight text-foreground md:text-3xl">
              Growth Is A Process, Not A One-Time Campaign
            </h3>
            <p className="mx-auto mt-4 max-w-[640px] text-base leading-relaxed text-foreground-secondary md:text-lg">
              Our goal is to build systems that continue generating leads, appointments,
              and growth opportunities long after launch.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border-light bg-secondary-surface px-4 py-2 text-sm font-medium text-foreground-secondary"
                >
                  <span className="text-primary">{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
