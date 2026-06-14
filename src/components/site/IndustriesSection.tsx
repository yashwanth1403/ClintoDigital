import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Building2,
  UserCircle,
  Smile,
  FlaskConical,
  Home,
  GraduationCap,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
}

function IndustryCard({ icon, title, description, highlights }: IndustryCardProps) {
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

interface IndustryData {
  iconName: string;
  title: string;
  description: string;
  highlights: string[];
}

const industries: IndustryData[] = [
  {
    iconName: "Building2",
    title: "Clinics",
    description:
      "Marketing systems designed to attract more patients, improve local visibility, and increase appointment bookings.",
    highlights: ["Local SEO", "Google Business Profile", "Appointment Funnels", "Reputation Management"],
  },
  {
    iconName: "UserCircle",
    title: "Doctors",
    description:
      "Build personal brand authority and attract qualified patients through content, SEO, and AI visibility.",
    highlights: ["Doctor Branding", "Content Marketing", "SEO", "Reviews"],
  },
  {
    iconName: "Smile",
    title: "Dental Clinics",
    description:
      "Generate high-value treatment inquiries through local marketing and conversion-focused campaigns.",
    highlights: ["Maps Rankings", "Lead Generation", "Social Media", "Ads"],
  },
  {
    iconName: "FlaskConical",
    title: "Diagnostic Centers",
    description:
      "Increase local discoverability and patient acquisition through search visibility and automation.",
    highlights: ["Local SEO", "AI Search", "GBP Optimization", "Automation"],
  },
  {
    iconName: "Home",
    title: "Real Estate",
    description:
      "Capture more buyer and seller leads through digital campaigns, landing pages, and automation systems.",
    highlights: ["Lead Funnels", "Ads", "CRM Automation", "Landing Pages"],
  },
  {
    iconName: "GraduationCap",
    title: "Education",
    description:
      "Drive student inquiries using targeted campaigns, content marketing, and automated follow-up systems.",
    highlights: ["Lead Generation", "Social Media", "CRM", "Ads"],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 size={22} strokeWidth={1.5} />,
  UserCircle: <UserCircle size={22} strokeWidth={1.5} />,
  Smile: <Smile size={22} strokeWidth={1.5} />,
  FlaskConical: <FlaskConical size={22} strokeWidth={1.5} />,
  Home: <Home size={22} strokeWidth={1.5} />,
  GraduationCap: <GraduationCap size={22} strokeWidth={1.5} />,
};

export function IndustriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Subtle background treatment */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91, 91, 214, 0.06), transparent)",
        }}
      />

      <div className="container-page relative">
        <div className="text-center">
          <span className="eyebrow">Industries We Serve</span>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl leading-tight text-foreground md:text-5xl md:leading-[1.1]">
            Growth Strategies Tailored For Your Industry
          </h2>
          <p className="mx-auto mt-5 max-w-[700px] text-base leading-relaxed text-foreground-secondary md:text-lg">
            Every industry has unique customer journeys, marketing challenges, and growth
            opportunities. We build tailored systems that help businesses generate leads, book
            appointments, and grow sustainably.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <IndustryCard
              key={industry.title}
              icon={iconMap[industry.iconName]}
              title={industry.title}
              description={industry.description}
              highlights={industry.highlights}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="mt-16 text-center"
        >
          <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
            Don't See Your Industry?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-foreground-secondary">
            Our growth systems can be customized for a wide range of businesses and service
            providers.
          </p>
          <div className="mt-7">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              Let's Discuss Your Business
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
