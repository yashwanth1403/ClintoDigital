import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Rocket, Target, Bot, TrendingUp } from "lucide-react";
import { HeroDashboard } from "./HeroDashboard";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 14%, transparent), transparent)",
          }}
        />
        <div
          className="absolute right-0 top-40 h-[380px] w-[380px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 12%, transparent), transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
      </div>

      <div className="container-page grid grid-cols-1 items-center gap-16 pt-3.5 pb-20 md:grid-cols-2 md:gap-12 md:pt-6 md:pb-32">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-light bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-foreground-secondary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Social Media
              <span className="text-border">•</span>
              AI Search
              <span className="text-border">•</span>
              Automation
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-serif text-[2.75rem] leading-[1.04] text-foreground sm:text-5xl md:text-[4.25rem] md:leading-[1.02]"
          >
            Grow Faster with
            <br />
            Social Media,
            <br />
            <span className="text-primary italic">AI Search</span> &
            <br />
            Automation
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-[600px] text-base leading-relaxed text-foreground-secondary md:text-lg"
          >
            Clinto Digital helps businesses generate more leads through social
            media management, Google Business Profile optimization, SEO, AI
            search visibility, paid advertising, and intelligent automation
            systems.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/90 hover:shadow-[0_18px_40px_-18px_rgba(27,27,31,0.45)]"
            >
              <Rocket className="h-4 w-4" />
              Get a Free Growth Audit
            </Link>
            <Link
              to="/services"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface px-6 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.ul
            variants={container}
            className="mt-8 flex flex-wrap items-center gap-2.5"
          >
            {[
              { icon: <Target className="h-3.5 w-3.5" />, label: "ROI Focused" },
              { icon: <Bot className="h-3.5 w-3.5" />, label: "AI Powered" },
              { icon: <TrendingUp className="h-3.5 w-3.5" />, label: "Growth Driven" },
            ].map((chip) => (
              <motion.li
                key={chip.label}
                variants={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-border-light bg-surface px-3 py-1.5 text-xs font-medium text-foreground-secondary"
              >
                <span className="text-primary">{chip.icon}</span>
                {chip.label}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right */}
        <div className="relative">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
