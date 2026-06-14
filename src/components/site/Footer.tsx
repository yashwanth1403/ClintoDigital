import { Link } from "@tanstack/react-router";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Zap,
  Rocket,
  Calendar,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Smartphone,
  MapPinned,
  Search,
  Megaphone,
  Monitor,
  Bot,
  Stethoscope,
  UserRound,
  Microscope,
  Home as HomeIcon,
  GraduationCap,
} from "lucide-react";

const services = [
  { icon: Smartphone, label: "Social Media Management" },
  { icon: MapPinned, label: "Google Business Profile" },
  { icon: Search, label: "SEO & AI Search Optimization" },
  { icon: Megaphone, label: "Google & Meta Ads" },
  { icon: Monitor, label: "Website Development" },
  { icon: Bot, label: "AI Automation" },
];

const industries = [
  { icon: Stethoscope, label: "Clinics" },
  { icon: UserRound, label: "Doctors" },
  { icon: Stethoscope, label: "Dental Clinics" },
  { icon: Microscope, label: "Diagnostic Centers" },
  { icon: HomeIcon, label: "Real Estate" },
  { icon: GraduationCap, label: "Education" },
];

const company = [
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/", label: "Privacy Policy" },
  { to: "/", label: "Terms" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export function Footer() {
  return (
    <footer
      className="relative mt-24 border-t"
      style={{ backgroundColor: "#F2EFEB", borderColor: "#E5E0D9", color: "#1B1B1F" }}
    >
      <div className="container-page py-20 md:py-28">
        {/* Top CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-medium tracking-tight"
            style={{ color: "#1B1B1F" }}
          >
            Ready To Build Your{" "}
            <span className="italic font-light" style={{ color: "#6B7280" }}>
              Growth System?
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed"
            style={{ color: "#6B7280" }}
          >
            Marketing, AI visibility, websites, automation, and growth systems designed to help businesses attract more leads and opportunities.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{ backgroundColor: "#1B1B1F", color: "#F2EFEB" }}
            >
              <Rocket className="h-4 w-4" />
              Get A Free Growth Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all hover:bg-white"
              style={{ borderColor: "#E5E0D9", color: "#1B1B1F", backgroundColor: "#FFFFFF" }}
            >
              <Calendar className="h-4 w-4" />
              Book A Strategy Call
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="my-20 h-px w-full" style={{ backgroundColor: "#E5E0D9" }} />

        {/* Main Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="text-2xl font-semibold tracking-tight" style={{ color: "#1B1B1F" }}>
              Clinto<span style={{ color: "#6B7280" }}>.</span>Digital
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#1B1B1F" }}>
              Grow Faster with Social Media, AI Search &amp; Automation.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              Helping businesses improve visibility, generate leads, and build scalable growth systems.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <div className="mb-5 text-xs font-medium uppercase tracking-[0.18em]" style={{ color: "#6B7280" }}>
              Services
            </div>
            <ul className="space-y-3">
              {services.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href="/services"
                    className="group inline-flex items-center gap-2.5 text-sm transition-colors"
                    style={{ color: "#1B1B1F" }}
                  >
                    <Icon className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100" />
                    <span className="relative">
                      {label}
                      <span
                        className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                        style={{ backgroundColor: "#1B1B1F" }}
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries */}
          <motion.div variants={fadeUp}>
            <div className="mb-5 text-xs font-medium uppercase tracking-[0.18em]" style={{ color: "#6B7280" }}>
              Industries
            </div>
            <ul className="space-y-3">
              {industries.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href="/industries"
                    className="group inline-flex items-center gap-2.5 text-sm transition-colors"
                    style={{ color: "#1B1B1F" }}
                  >
                    <Icon className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100" />
                    <span className="relative">
                      {label}
                      <span
                        className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                        style={{ backgroundColor: "#1B1B1F" }}
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <div className="mb-5 text-xs font-medium uppercase tracking-[0.18em]" style={{ color: "#6B7280" }}>
              Company
            </div>
            <ul className="space-y-3">
              {company.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1.5 text-sm transition-colors"
                    style={{ color: "#1B1B1F" }}
                  >
                    <span className="relative">
                      {l.label}
                      <span
                        className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                        style={{ backgroundColor: "#1B1B1F" }}
                      />
                    </span>
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-60 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Highlights */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid gap-3 sm:grid-cols-3"
        >
          {[
            { icon: Mail, label: "hello@clintodigital.com" },
            { icon: MapPin, label: "Serving Businesses Worldwide" },
            { icon: Zap, label: "Fast Response Time" },
          ].map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex items-center gap-3 rounded-2xl border px-5 py-4 transition-all hover:shadow-sm"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E0D9" }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: "#F2EFEB" }}
              >
                <Icon className="h-4 w-4" style={{ color: "#1B1B1F" }} />
              </div>
              <span className="text-sm" style={{ color: "#1B1B1F" }}>
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <div
          className="mt-16 flex flex-col gap-6 border-t pt-8 md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "#E5E0D9" }}
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs" style={{ color: "#6B7280" }}>
            <span>© 2026 Clinto Digital</span>
            <span className="hidden md:inline" style={{ color: "#E5E0D9" }}>
              •
            </span>
            <span>Built for Growth</span>
            <span className="hidden md:inline" style={{ color: "#E5E0D9" }}>
              •
            </span>
            <Link to="/" className="transition-colors hover:text-foreground" style={{ color: "#6B7280" }}>
              Privacy Policy
            </Link>
            <Link to="/" className="transition-colors hover:text-foreground" style={{ color: "#6B7280" }}>
              Terms
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110 hover:shadow-sm"
                style={{ borderColor: "#E5E0D9", backgroundColor: "#FFFFFF" }}
              >
                <Icon
                  className="h-4 w-4 transition-colors"
                  style={{ color: "#6B7280" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
