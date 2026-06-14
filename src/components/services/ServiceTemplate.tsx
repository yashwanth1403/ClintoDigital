import { useState } from "react";

import { motion, AnimatePresence, type Variants } from "motion/react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  Layers,
  BarChart3,
  Megaphone,
  Search,
  Cpu,
  Lightbulb,
  Settings,
  Users,
  Shield,
  X,
  type LucideIcon,
} from "lucide-react";

import {
  DEFAULT_PRIMARY_CTA,
  DEFAULT_SECONDARY_CTA,
  type ServiceContent,
} from "@/lib/services-content";
import { ProcessSection } from "@/components/site/ProcessSection";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const viewport = { once: true, amount: 0.15 } as const;

// Map icon names from data → lucide components. Add as needed.
const ICON_MAP: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  target: Target,
  trending: TrendingUp,
  zap: Zap,
  layers: Layers,
  chart: BarChart3,
  megaphone: Megaphone,
  search: Search,
  cpu: Cpu,
  lightbulb: Lightbulb,
  settings: Settings,
  users: Users,
  shield: Shield,
};

function Icon({ name }: { name?: string }) {
  const Cmp = (name && ICON_MAP[name]) || Sparkles;
  return <Cmp size={18} strokeWidth={1.5} />;
}

// ============================================================
// Hero
// ============================================================
function Hero({ content }: { content: ServiceContent }) {
  const primary = content.hero.primaryCta ?? DEFAULT_PRIMARY_CTA;
  const secondary = content.hero.secondaryCta ?? DEFAULT_SECONDARY_CTA;

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(91, 91, 214, 0.05), transparent)",
        }}
      />
      <div className="container-page relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-foreground-secondary"
          >
            <span>{content.categoryEmoji}</span>
            {content.category}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-6xl md:leading-[1.05]"
          >
            {content.hero.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground-secondary md:text-lg"
          >
            {content.hero.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={primary.href}
              className="inline-flex h-13 items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:-translate-y-0.5"
            >
              <span>{primary.emoji}</span>
              {primary.label}
            </a>
            <a
              href={secondary.href}
              className="inline-flex h-13 items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-base font-medium text-foreground transition-all duration-200 hover:border-foreground hover:-translate-y-0.5"
            >
              <span>{secondary.emoji}</span>
              {secondary.label}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Problem
// ============================================================
function ProblemSection({ content }: { content: ServiceContent }) {
  const { problem } = content;
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          {problem.eyebrow && (
            <motion.span variants={fadeUp} className="eyebrow">
              {problem.eyebrow}
            </motion.span>
          )}
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-5xl md:leading-[1.1]"
          >
            {problem.heading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground-secondary md:text-lg"
          >
            {problem.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mt-14 grid gap-5 md:mt-16 md:grid-cols-3"
        >
          {problem.points.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light text-accent">
                <Sparkles size={18} strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-medium text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary md:text-base">
                {p.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Overview
// ============================================================
function Overview({ content }: { content: ServiceContent }) {
  const { overview } = content;
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="container-page grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger}>
          {overview.eyebrow && (
            <motion.span variants={fadeUp} className="eyebrow">
              {overview.eyebrow}
            </motion.span>
          )}
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-5xl md:leading-[1.05]"
          >
            {overview.heading}
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger}>
          {overview.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="mb-5 text-base leading-relaxed text-foreground-secondary md:text-lg"
            >
              {p}
            </motion.p>
          ))}

          {overview.highlights && overview.highlights.length > 0 && (
            <motion.ul variants={fadeUp} className="mt-6 space-y-3">
              {overview.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-foreground-secondary">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                    <Check size={12} strokeWidth={2} />
                  </span>
                  <span className="text-base md:text-lg">{h}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// What's Included — feature grid
// ============================================================
function WhatsIncluded({ content }: { content: ServiceContent }) {
  const { whatsIncluded } = content;
  return (
    <section className="border-t border-border-light bg-secondary-surface/40 py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          {whatsIncluded.eyebrow && (
            <motion.span variants={fadeUp} className="eyebrow">
              {whatsIncluded.eyebrow}
            </motion.span>
          )}
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-5xl md:leading-[1.1]"
          >
            {whatsIncluded.heading}
          </motion.h2>
          {whatsIncluded.description && (
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground-secondary md:text-lg"
            >
              {whatsIncluded.description}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {whatsIncluded.features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="group rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_8px_24px_-16px_rgba(27,27,31,0.12)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary transition-transform duration-300 group-hover:scale-110">
                <Icon name={f.icon} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-medium text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary md:text-base">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Benefits
// ============================================================
function Benefits({ content }: { content: ServiceContent }) {
  const { benefits } = content;
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          {benefits.eyebrow && (
            <motion.span variants={fadeUp} className="eyebrow">
              {benefits.eyebrow}
            </motion.span>
          )}
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-5xl md:leading-[1.1]"
          >
            {benefits.heading}
          </motion.h2>
          {benefits.description && (
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground-secondary md:text-lg"
            >
              {benefits.description}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mt-14 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-4"
        >
          {benefits.items.map((b) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20"
            >
              <div className="text-3xl">{b.emoji}</div>
              <h3 className="mt-4 font-serif text-lg font-medium text-foreground">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                {b.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Industries
// ============================================================
function Industries({ content }: { content: ServiceContent }) {
  const { industries } = content;
  return (
    <section className="border-t border-border-light bg-secondary-surface/40 py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          {industries.eyebrow && (
            <motion.span variants={fadeUp} className="eyebrow">
              {industries.eyebrow}
            </motion.span>
          )}
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-5xl md:leading-[1.1]"
          >
            {industries.heading}
          </motion.h2>
          {industries.description && (
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground-secondary md:text-lg"
            >
              {industries.description}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {industries.items.map((i) => (
            <motion.span
              key={i.label}
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary"
            >
              <span>{i.emoji}</span>
              {i.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// FAQ
// ============================================================
function FAQ({ content }: { content: ServiceContent }) {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          {faq.eyebrow && (
            <motion.span variants={fadeUp} className="eyebrow">
              {faq.eyebrow}
            </motion.span>
          )}
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-5xl md:leading-[1.1]"
          >
            {faq.heading}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mx-auto mt-12 max-w-3xl space-y-3 md:mt-16 md:space-y-4"
        >
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div key={item.question} variants={fadeUp}>
                <div
                  className={
                    "rounded-xl border bg-surface transition-colors duration-300 " +
                    (isOpen
                      ? "border-foreground/15 shadow-[0_4px_20px_-12px_rgba(27,27,31,0.1)]"
                      : "border-border hover:border-foreground/20")
                  }
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7 md:py-6"
                  >
                    <span className="font-serif text-base font-medium leading-snug text-foreground md:text-lg">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="shrink-0 text-muted-foreground"
                    >
                      <ChevronDown size={18} strokeWidth={1.5} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sm leading-relaxed text-foreground-secondary md:px-7 md:pb-6 md:text-base">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Final CTA
// ============================================================
function CTA({ content }: { content: ServiceContent }) {
  const primary = content.cta.primaryCta ?? DEFAULT_PRIMARY_CTA;
  const secondary = content.cta.secondaryCta ?? DEFAULT_SECONDARY_CTA;

  return (
    <section className="relative overflow-hidden border-t border-border-light py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(91, 91, 214, 0.05), transparent)",
        }}
      />
      <div className="container-page relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl leading-tight text-foreground md:text-5xl md:leading-[1.05]"
          >
            {content.cta.heading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground-secondary md:text-lg"
          >
            {content.cta.description}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={primary.href}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:-translate-y-0.5"
            >
              <span>{primary.emoji}</span>
              {primary.label}
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
            <a
              href={secondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-base font-medium text-foreground transition-all duration-200 hover:border-foreground hover:-translate-y-0.5"
            >
              <span>{secondary.emoji}</span>
              {secondary.label}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Comparison (optional)
// ============================================================
function Comparison({ content }: { content: ServiceContent }) {
  if (!content.comparison) return null;
  const { comparison } = content;
  return (
    <section className="border-t border-border-light py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          {comparison.eyebrow && (
            <motion.span variants={fadeUp} className="eyebrow">
              {comparison.eyebrow}
            </motion.span>
          )}
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-serif text-3xl leading-tight text-foreground md:text-5xl md:leading-[1.1]"
          >
            {comparison.heading}
          </motion.h2>
          {comparison.description && (
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground-secondary md:text-lg"
            >
              {comparison.description}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-surface p-7 md:p-8"
          >
            <h3 className="font-serif text-xl font-medium text-foreground md:text-2xl">
              {comparison.without.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {comparison.without.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-foreground-secondary"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <X size={12} strokeWidth={2.5} />
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-primary/30 bg-surface p-7 shadow-[0_8px_24px_-16px_rgba(91,91,214,0.25)] md:p-8"
          >
            <h3 className="font-serif text-xl font-medium text-foreground md:text-2xl">
              {comparison.with.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {comparison.with.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-foreground-secondary"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Template root
// ============================================================
export function ServiceTemplate({ content }: { content: ServiceContent }) {
  return (
    <>
      <Hero content={content} />
      <ProblemSection content={content} />
      <Overview content={content} />
      <WhatsIncluded content={content} />
      <Benefits content={content} />
      <ProcessSection />
      <Industries content={content} />
      <Comparison content={content} />
      <FAQ content={content} />
      <CTA content={content} />
    </>
  );
}
