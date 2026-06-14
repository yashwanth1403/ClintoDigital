import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Rocket, Calendar, Target, TrendingUp, Cpu, Mail, MessageSquare, Zap } from "lucide-react";

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

const flowSteps = [
  { label: "Social Media", icon: <MessageSquare size={14} strokeWidth={1.5} /> },
  { label: "SEO & AI Search", icon: <Cpu size={14} strokeWidth={1.5} /> },
  { label: "Lead Generation", icon: <Target size={14} strokeWidth={1.5} /> },
  { label: "Automation", icon: <Zap size={14} strokeWidth={1.5} /> },
  { label: "Business Growth", icon: <TrendingUp size={14} strokeWidth={1.5} /> },
];

const trustBadges = [
  { icon: <Target size={14} strokeWidth={1.5} />, label: "Strategy First" },
  { icon: <TrendingUp size={14} strokeWidth={1.5} />, label: "Growth Focused" },
  { icon: <Cpu size={14} strokeWidth={1.5} />, label: "AI Powered" },
];

function GrowthFlow() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease }}
      className="mx-auto mt-14 max-w-sm md:mt-16"
    >
      <div className="relative flex flex-col items-center gap-1">
        {flowSteps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-center">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground shadow-sm"
            >
              <span className="text-primary">{step.icon}</span>
              {step.label}
            </motion.div>
            {i < flowSteps.length - 1 && (
              <div className="flex h-6 w-px items-center justify-center bg-border">
                <motion.div
                  className="w-full bg-primary/40"
                  initial={{ height: "0%" }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: 0.2 + i * 0.2 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function FinalCTASection() {
  const viewport = { once: true, amount: 0.15 } as const;

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(91, 91, 214, 0.04), transparent)",
        }}
      />

      <div className="container-page relative">
        {/* Main CTA Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={item} className="eyebrow inline-block">
            Ready To Grow?
          </motion.span>

          <motion.h2
            variants={item}
            className="mt-5 font-serif text-4xl leading-[1.05] text-foreground md:text-6xl md:leading-[1.05]"
          >
            Let&apos;s Build A Smarter Growth System
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-[750px] text-base leading-relaxed text-foreground-secondary md:text-lg"
          >
            Whether you&apos;re looking to improve your social media presence, rank higher in
            search results, generate more leads, or automate your customer journey, we&apos;re
            here to help you build a growth system that scales.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-flex h-14 items-center gap-2.5 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-hover hover:-translate-y-0.5"
            >
              <Rocket size={18} strokeWidth={1.5} />
              Get A Free Growth Audit
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-14 items-center gap-2.5 rounded-full border border-border bg-surface px-8 text-base font-medium text-foreground transition-all duration-200 hover:border-foreground hover:-translate-y-0.5"
            >
              <Calendar size={18} strokeWidth={1.5} />
              Book A Strategy Call
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          >
            {trustBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border-light bg-secondary-surface px-3.5 py-1.5 text-xs font-medium text-foreground-secondary"
              >
                <span className="text-primary">{badge.icon}</span>
                {badge.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Growth Flow Visual */}
        <GrowthFlow />

        {/* Mini Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="mx-auto mt-16 max-w-lg rounded-2xl border border-border bg-surface p-7 text-center md:mt-20 md:p-10"
        >
          <h3 className="font-serif text-xl font-medium text-foreground md:text-2xl">
            Prefer To Reach Out Directly?
          </h3>
          <div className="mt-5 flex flex-col items-center gap-3.5">
            <a
              href="mailto:hello@clintodigital.com"
              className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground-secondary transition-colors hover:text-primary md:text-base"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary">
                <Mail size={16} strokeWidth={1.5} />
              </span>
              hello@clintodigital.com
            </a>
            <div className="inline-flex items-center gap-2.5 text-sm text-foreground-secondary md:text-base">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-success-light text-success">
                <Zap size={16} strokeWidth={1.5} />
              </span>
              Quick Response Time
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
