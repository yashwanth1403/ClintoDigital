import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageCircle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We primarily help clinics, doctors, dental practices, diagnostic centers, and local businesses grow through digital marketing, search visibility, paid advertising, websites, and automation systems.",
  },
  {
    question: "What services does Clinto Digital provide?",
    answer:
      "Our services include Social Media Management, Google Business Profile Optimization, SEO, AI Search Optimization, Paid Advertising, Website Development, AI Automation, and CRM Automation.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term growth strategy. While some improvements may be visible within a few weeks, meaningful results typically take several months depending on competition, website quality, and market conditions.",
  },
  {
    question: "What is AI Search Optimization?",
    answer:
      "AI Search Optimization helps businesses improve visibility across platforms such as ChatGPT, Gemini, Perplexity, and other AI-powered search experiences through structured content, entity optimization, and authority-building strategies.",
  },
  {
    question: "Why is Google Business Profile important?",
    answer:
      "Google Business Profile plays a critical role in local visibility. An optimized profile can improve Google Maps rankings, increase calls, website visits, and appointment bookings.",
  },
  {
    question: "Will I receive reports?",
    answer:
      "Yes. Performance reporting helps track progress, identify opportunities, and measure results across campaigns, visibility, and lead generation activities.",
  },
  {
    question: "Do I need all services to get started?",
    answer:
      "No. We can start with the service that best aligns with your current goals and expand your growth system over time.",
  },
  {
    question: "How do I get started?",
    answer:
      "The first step is a discovery conversation where we learn about your business, goals, and opportunities before recommending the most suitable strategy.",
  },
];

function AccordionItemCustom({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div variants={item}>
      <div
        className={
          "rounded-xl border bg-surface transition-colors duration-300 " +
          (isOpen
            ? "border-foreground/15 shadow-[0_4px_20px_-12px_rgba(27,27,31,0.1)]"
            : "border-border hover:border-foreground/20")
        }
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7 md:py-6"
          aria-expanded={isOpen}
        >
          <span className="font-serif text-base font-medium leading-snug text-foreground md:text-lg">
            {faq.question}
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
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const viewport = { once: true, amount: 0.15 } as const;

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(91, 91, 214, 0.03), transparent)",
        }}
      />

      <div className="container-page relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl leading-tight text-foreground md:text-5xl md:leading-[1.1]">
            Questions, Answered Clearly
          </h2>
          <p className="mx-auto mt-5 max-w-[650px] text-base leading-relaxed text-foreground-secondary md:text-lg">
            Everything you need to know about working with Clinto Digital.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-14 max-w-3xl space-y-3 md:mt-16 md:space-y-4"
        >
          {faqs.map((faq, i) => (
            <AccordionItemCustom
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Contact Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-surface p-7 text-center md:mt-16 md:p-10"
        >
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary">
            <MessageCircle size={22} strokeWidth={1.5} />
          </div>
          <h3 className="mt-4 font-serif text-xl font-medium text-foreground md:text-2xl">
            Still Have Questions?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-foreground-secondary md:text-base">
            We&apos;re happy to discuss your business, goals, and growth opportunities.
          </p>
          <a href="#contact" className="btn-primary mt-6 inline-flex gap-2">
            <MessageCircle size={16} strokeWidth={1.5} />
            Talk With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
