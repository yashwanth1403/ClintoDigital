import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Users,
  MapPin,
  Search,
  Megaphone,
  Layout,
  Bot,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

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

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  to: string;
}

function ServiceCard({ icon, title, description, features, to }: ServiceCardProps) {
  return (
    <motion.div variants={item}>
      <Link
        to={to}
        className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_8px_24px_-16px_rgba(27,27,31,0.12)] md:p-10"
      >
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
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground-secondary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Learn More
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

interface ServiceData {
  iconName: string;
  title: string;
  description: string;
  features: string[];
  to: string;
}

const services: ServiceData[] = [
  {
    iconName: "Users",
    title: "Social Media Management",
    description:
      "Content creation, content strategy, social media management, reels, growth campaigns, and community management.",
    features: ["Content Strategy", "Content Creation", "Instagram Growth", "Community Management"],
    to: "/services",
  },
  {
    iconName: "MapPin",
    title: "Google Business Profile Optimization",
    description:
      "Improve visibility in Google Maps and local search results to attract more local customers.",
    features: ["GBP Setup", "Local SEO", "Review Management", "Maps Rankings"],
    to: "/services",
  },
  {
    iconName: "Search",
    title: "SEO & AI Search Optimization",
    description:
      "Increase visibility across Google Search, ChatGPT, Gemini, Perplexity, and modern AI-powered search experiences.",
    features: ["Technical SEO", "Content SEO", "GEO", "AI Search Visibility"],
    to: "/services",
  },
  {
    iconName: "Megaphone",
    title: "Google & Meta Ads",
    description:
      "Launch data-driven campaigns that generate qualified leads and measurable business growth.",
    features: ["Google Ads", "Meta Ads", "Retargeting", "Conversion Tracking"],
    to: "/services",
  },
  {
    iconName: "Layout",
    title: "Website Development",
    description:
      "Build high-converting websites, landing pages, and appointment funnels designed for growth.",
    features: ["Business Websites", "Landing Pages", "Funnels", "CRO"],
    to: "/services",
  },
  {
    iconName: "Bot",
    title: "AI Automation",
    description:
      "Automate lead qualification, appointment booking, customer support, and follow-up workflows.",
    features: ["Voice Agents", "Chatbots", "WhatsApp Automation", "Appointment Automation"],
    to: "/services",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={22} strokeWidth={1.5} />,
  MapPin: <MapPin size={22} strokeWidth={1.5} />,
  Search: <Search size={22} strokeWidth={1.5} />,
  Megaphone: <Megaphone size={22} strokeWidth={1.5} />,
  Layout: <Layout size={22} strokeWidth={1.5} />,
  Bot: <Bot size={22} strokeWidth={1.5} />,
};

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="container-page py-20 md:py-28">
      <div className="text-center">
        <span className="eyebrow">Our Services</span>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl leading-tight text-foreground md:text-5xl md:leading-[1.1]">
          Services That Drive Real Growth
        </h2>
        <p className="mx-auto mt-5 max-w-[700px] text-base leading-relaxed text-foreground-secondary md:text-lg">
          End-to-end marketing, AI visibility, and automation systems designed to
          help businesses attract more leads and grow faster.
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={iconMap[service.iconName]}
            title={service.title}
            description={service.description}
            features={service.features}
            to={service.to}
          />
        ))}
      </motion.div>
    </section>
  );
}
