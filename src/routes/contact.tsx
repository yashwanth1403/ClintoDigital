import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Rocket,
  Calendar,
  MessageSquare,
  ArrowRight,
  Check,
  Clock,
  TrendingUp,
  Sparkles,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Clinto Digital — Let's Talk About Growth" },
      {
        name: "description",
        content:
          "Request a free growth audit, book a strategy call, or share your business goals with Clinto Digital. Premium consulting for visibility, leads, and automation.",
      },
      { property: "og:title", content: "Contact Clinto Digital — Let's Talk About Growth" },
      {
        property: "og:description",
        content:
          "Start a growth conversation with Clinto Digital. Free audits, strategy calls, and consulting for ambitious local and digital businesses.",
      },
    ],
  }),
  component: ContactPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function ContactPage() {
  return (
    <SiteLayout>
      <Hero />
      <ContactOptions />
      <LeadForm />
      <StrategyCall />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}

/* -------------------------------- Hero -------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(91, 91, 214, 0.05), transparent 70%)",
        }}
      />
      <div className="container-page relative pt-20 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="eyebrow mb-6">
            <span className="mr-1.5">💬</span> Contact Clinto Digital
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl leading-[1.05] text-foreground md:text-7xl"
          >
            Let's talk about growth.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-foreground-secondary leading-relaxed md:text-xl"
          >
            Whether you're looking to improve visibility, generate more leads, build a better
            website, or automate your customer journey — we'd love to learn more about your
            business.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#growth-audit-form"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-hover hover:-translate-y-0.5"
            >
              <Rocket size={16} strokeWidth={1.75} />
              Request Free Growth Audit
            </a>
            <a
              href="#strategy-call"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface px-6 text-sm font-medium text-foreground transition-all hover:border-foreground hover:-translate-y-0.5"
            >
              <Calendar size={16} strokeWidth={1.75} />
              Book Strategy Call
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------- Contact Options --------------------------- */

const options = [
  {
    icon: <Rocket size={20} strokeWidth={1.5} />,
    eyebrow: "Growth Audit",
    title: "Discover hidden growth opportunities",
    description:
      "Receive personalized recommendations and an actionable plan to improve your visibility, leads, and conversions.",
    cta: "Request Audit",
    href: "#growth-audit-form",
  },
  {
    icon: <Calendar size={20} strokeWidth={1.5} />,
    eyebrow: "Strategy Call",
    title: "30-minute consultation",
    description:
      "Schedule a focused conversation to discuss your goals, current challenges, and growth opportunities.",
    cta: "Book Call",
    href: "#strategy-call",
  },
  {
    icon: <MessageSquare size={20} strokeWidth={1.5} />,
    eyebrow: "General Inquiry",
    title: "Have a question?",
    description:
      "Reach out about partnerships, services, or anything else — we'll get back within one business day.",
    cta: "Send Message",
    href: "mailto:hello@clintodigital.com",
  },
];

function ContactOptions() {
  return (
    <section className="container-page py-20 md:py-28 border-t border-border-light">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 md:grid-cols-3"
      >
        {options.map((opt) => (
          <motion.a
            key={opt.eyebrow}
            href={opt.href}
            variants={fadeUp}
            className="group relative flex flex-col rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-foreground/20 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
          >
            <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
              {opt.icon}
            </div>
            <div className="eyebrow mb-2">{opt.eyebrow}</div>
            <h3 className="font-serif text-2xl leading-snug text-foreground">{opt.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
              {opt.description}
            </p>
            <div className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-transform group-hover:translate-x-0.5">
              {opt.cta}
              <ArrowRight size={14} strokeWidth={1.75} />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

/* ----------------------------- Lead Form ----------------------------- */

type FormData = {
  businessName: string;
  website: string;
  industry: string;
  budget: string;
  services: string[];
  challenge: string;
  name: string;
  email: string;
  phone: string;
};

const initialForm: FormData = {
  businessName: "",
  website: "",
  industry: "",
  budget: "",
  services: [],
  challenge: "",
  name: "",
  email: "",
  phone: "",
};

const industries = [
  "🏥 Healthcare",
  "🦷 Dental",
  "🏠 Real Estate",
  "🎓 Education",
  "🛠 Services",
  "Other",
];

const budgets = ["₹10K – ₹25K", "₹25K – ₹50K", "₹50K – ₹1L", "₹1L+"];

const serviceOptions = [
  { id: "social", label: "Social Media", icon: "📱" },
  { id: "gbp", label: "GBP Optimization", icon: "📍" },
  { id: "seo", label: "SEO & AI Search", icon: "🔍" },
  { id: "ads", label: "Paid Ads", icon: "📢" },
  { id: "web", label: "Website Development", icon: "💻" },
  { id: "ai", label: "AI Automation", icon: "🤖" },
];

const steps = [
  { label: "Business" },
  { label: "Goals" },
  { label: "Contact" },
];

function LeadForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>(initialForm);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const toggleService = (id: string) => {
    setData((d) => ({
      ...d,
      services: d.services.includes(id)
        ? d.services.filter((s) => s !== id)
        : [...d.services, id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="growth-audit-form"
      className="container-page py-20 md:py-28 border-t border-border-light"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        {/* Left intro */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="eyebrow mb-5">
            Growth Audit
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl leading-tight text-foreground md:text-5xl"
          >
            Tell us about your business.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base text-foreground-secondary leading-relaxed md:text-lg"
          >
            A few quick questions help us understand where you are today — so the first
            conversation is already a productive one.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-10 space-y-3.5">
            {[
              "Free, no-obligation analysis",
              "Personalized recommendations",
              "Response within 1 business day",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground-secondary">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-light text-primary">
                  <Check size={12} strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="rounded-3xl border border-border bg-surface p-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.2)] md:p-10"
        >
          {submitted ? (
            <SubmittedState onReset={() => { setSubmitted(false); setStep(0); setData(initialForm); }} />
          ) : (
            <form onSubmit={handleSubmit}>
              <Progress current={step} />

              {step === 0 && (
                <StepWrap key="0">
                  <Field label="Business name">
                    <Input
                      value={data.businessName}
                      onChange={(v) => update("businessName", v)}
                      placeholder="Acme Clinic"
                    />
                  </Field>
                  <Field label="Website">
                    <Input
                      value={data.website}
                      onChange={(v) => update("website", v)}
                      placeholder="https://"
                    />
                  </Field>
                  <Field label="Industry">
                    <Select
                      value={data.industry}
                      onChange={(v) => update("industry", v)}
                      options={industries}
                      placeholder="Select industry"
                    />
                  </Field>
                  <Field label="Monthly marketing budget">
                    <Select
                      value={data.budget}
                      onChange={(v) => update("budget", v)}
                      options={budgets}
                      placeholder="Select range"
                    />
                  </Field>
                </StepWrap>
              )}

              {step === 1 && (
                <StepWrap key="1">
                  <Field label="Services you're interested in">
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {serviceOptions.map((s) => {
                        const active = data.services.includes(s.id);
                        return (
                          <button
                            type="button"
                            key={s.id}
                            onClick={() => toggleService(s.id)}
                            className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                              active
                                ? "border-primary bg-primary-light text-foreground"
                                : "border-border bg-background text-foreground-secondary hover:border-foreground/30"
                            }`}
                          >
                            <span className="text-base">{s.icon}</span>
                            <span className="flex-1 font-medium">{s.label}</span>
                            <span
                              className={`flex h-4 w-4 items-center justify-center rounded-[5px] border transition-colors ${
                                active
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-border"
                              }`}
                            >
                              {active && <Check size={10} strokeWidth={3} />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </Field>
                  <Field label="Biggest growth challenge">
                    <textarea
                      value={data.challenge}
                      onChange={(e) => update("challenge", e.target.value)}
                      rows={5}
                      placeholder="Tell us about your current growth challenges..."
                      className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-foreground-tertiary focus:border-primary focus:ring-4 focus:ring-primary-light"
                    />
                  </Field>
                </StepWrap>
              )}

              {step === 2 && (
                <StepWrap key="2">
                  <Field label="Your name">
                    <Input
                      value={data.name}
                      onChange={(v) => update("name", v)}
                      placeholder="Full name"
                    />
                  </Field>
                  <Field label="Email">
                    <Input
                      type="email"
                      value={data.email}
                      onChange={(v) => update("email", v)}
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="Phone">
                    <Input
                      type="tel"
                      value={data.phone}
                      onChange={(v) => update("phone", v)}
                      placeholder="+91"
                    />
                  </Field>
                </StepWrap>
              )}

              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex h-11 items-center gap-1.5 rounded-full px-4 text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground disabled:opacity-0"
                >
                  <ChevronLeft size={16} />
                  Back
                </button>

                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                    className="inline-flex h-12 items-center gap-1.5 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                  >
                    Continue
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <Rocket size={16} strokeWidth={1.75} />
                    Request Free Growth Audit
                  </button>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function StepWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
      className="space-y-6"
    >
      {children}
    </motion.div>
  );
}

function Progress({ current }: { current: number }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      {steps.map((s, i) => {
        const active = i <= current;
        return (
          <div key={s.label} className="flex flex-1 items-center gap-3">
            <div className="flex items-center gap-2.5">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium transition-colors ${
                  active
                    ? "bg-foreground text-background"
                    : "bg-secondary-surface text-foreground-tertiary"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`hidden text-xs font-medium uppercase tracking-wider sm:inline ${
                  active ? "text-foreground" : "text-foreground-tertiary"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="h-px flex-1 bg-border">
                <div
                  className={`h-px bg-foreground transition-all duration-500 ${
                    i < current ? "w-full" : "w-0"
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-foreground-secondary">
        {label}
      </label>
      {children}
    </div>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-foreground-tertiary focus:border-primary focus:ring-4 focus:ring-primary-light"
    />
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-12 w-full appearance-none rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary-light"
    >
      <option value="">{placeholder ?? "Select"}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function SubmittedState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
      className="py-8 text-center"
    >
      <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success-light text-success">
        <Check size={24} strokeWidth={2} />
      </div>
      <h3 className="font-serif text-3xl text-foreground">Request received.</h3>
      <p className="mx-auto mt-3 max-w-sm text-sm text-foreground-secondary leading-relaxed">
        Thanks for sharing the details. We'll review your business and reach out within one
        business day.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 inline-flex h-11 items-center gap-1.5 rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
      >
        Send another request
      </button>
    </motion.div>
  );
}

/* ---------------------------- Strategy Call ---------------------------- */

function StrategyCall() {
  return (
    <section
      id="strategy-call"
      className="container-page py-20 md:py-28 border-t border-border-light"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="eyebrow mb-5">
            Strategy Call
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl leading-tight text-foreground md:text-5xl"
          >
            Prefer a conversation?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base text-foreground-secondary leading-relaxed md:text-lg"
          >
            Book a 30-minute strategy call and discuss your business goals directly with our
            team. No slides, no sales pitch — just a focused conversation about where you can
            grow next.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 space-y-3.5">
            {[
              { icon: <Clock size={14} strokeWidth={1.75} />, label: "30-minute consultation" },
              { icon: <MessageSquare size={14} strokeWidth={1.75} />, label: "Growth discussion" },
              { icon: <TrendingUp size={14} strokeWidth={1.75} />, label: "Opportunity review" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-sm text-foreground">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-primary">
                  {item.icon}
                </span>
                {item.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="rounded-3xl border border-border bg-surface p-7 md:p-10"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="eyebrow mb-2">Available this week</div>
              <h3 className="font-serif text-2xl text-foreground">Pick a time that works</h3>
            </div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
              <Calendar size={18} strokeWidth={1.5} />
            </span>
          </div>

          {/* Calendar placeholder */}
          <div className="mt-8 rounded-2xl border border-border-light bg-background p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">June 2026</span>
              <div className="flex gap-1">
                <button
                  type="button"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md text-foreground-secondary hover:bg-secondary-surface"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  type="button"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md text-foreground-secondary hover:bg-secondary-surface"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-medium uppercase tracking-wider text-foreground-tertiary">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-7 gap-1.5">
              {Array.from({ length: 30 }).map((_, i) => {
                const day = i + 1;
                const available = [16, 17, 18, 22, 23, 24, 25].includes(day);
                const isToday = day === 14;
                return (
                  <button
                    type="button"
                    key={day}
                    disabled={!available}
                    className={`aspect-square rounded-md text-xs font-medium transition-colors ${
                      isToday
                        ? "bg-foreground text-background"
                        : available
                          ? "bg-primary-light text-primary hover:bg-primary hover:text-primary-foreground"
                          : "text-foreground-tertiary"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          <Link
            to="/contact"
            className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Calendar size={16} strokeWidth={1.75} />
            Book Strategy Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------------- FAQ --------------------------------- */

const faqs = [
  {
    q: "How quickly will I hear back?",
    a: "We respond to every inquiry within one business day — usually much sooner. For audit requests, you'll receive a confirmation immediately and a personalized review within 2–3 business days.",
  },
  {
    q: "Is the growth audit free?",
    a: "Yes. The initial growth audit is completely free with no obligation. It includes a review of your current visibility, channels, and a set of personalized recommendations.",
  },
  {
    q: "What industries do you work with?",
    a: "We specialize in healthcare, dental, real estate, education, and local service businesses — but we partner with any ambitious business that values measurable growth.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Absolutely. We work with solo practitioners, small clinics, and growing teams. Our systems are designed to scale with you, no matter where you start.",
  },
  {
    q: "Can I request multiple services?",
    a: "Yes — most of our clients combine services like SEO, GBP optimization, and automation into one integrated growth system. We'll recommend the right mix during your audit.",
  },
  {
    q: "What happens after I submit the form?",
    a: "You'll receive an instant confirmation. Within one business day, our team reviews your details and reaches out with next steps — either a scheduled call or your initial audit.",
  },
];

function FAQ() {
  return (
    <section className="container-page py-20 md:py-28 border-t border-border-light">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="eyebrow mb-5">
            FAQ
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl leading-tight text-foreground md:text-5xl"
          >
            Common questions.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-sm text-base text-foreground-secondary leading-relaxed"
          >
            Still curious? Email us at{" "}
            <a
              href="mailto:hello@clintodigital.com"
              className="text-foreground underline underline-offset-4"
            >
              hello@clintodigital.com
            </a>
            .
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-border-light"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline md:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm text-foreground-secondary leading-relaxed md:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ Final CTA ------------------------------ */

function FinalCTA() {
  return (
    <section className="container-page py-20 md:py-28 border-t border-border-light">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
        className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 md:px-16 md:py-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(91, 91, 214, 0.4), transparent 60%)",
          }}
        />
        <div className="relative max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-background/60">
            <Sparkles size={12} strokeWidth={1.75} />
            Next Step
          </div>
          <h2 className="font-serif text-4xl leading-[1.05] text-background md:text-6xl">
            Ready to take the next step?
          </h2>
          <p className="mt-6 max-w-lg text-base text-background/70 md:text-lg leading-relaxed">
            Let's explore opportunities to improve your visibility, attract more customers, and
            build scalable growth systems.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#growth-audit-form"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-hover hover:-translate-y-0.5"
            >
              <Rocket size={16} strokeWidth={1.75} />
              Free Growth Audit
            </a>
            <a
              href="#strategy-call"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-background/25 px-6 text-sm font-medium text-background transition-all hover:bg-background/10 hover:-translate-y-0.5"
            >
              <Calendar size={16} strokeWidth={1.75} />
              Strategy Call
            </a>
            <a
              href="mailto:hello@clintodigital.com"
              className="inline-flex h-12 items-center gap-2 rounded-full px-2 text-sm font-medium text-background/70 transition-colors hover:text-background"
            >
              <Mail size={14} strokeWidth={1.75} />
              hello@clintodigital.com
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
