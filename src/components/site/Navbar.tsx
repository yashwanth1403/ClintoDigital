import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-surface/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between md:h-20">
          <Logo />

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative px-4 py-2 text-sm text-foreground-secondary transition-colors hover:text-foreground"
                activeProps={{
                  className:
                    "relative px-4 py-2 text-sm font-medium text-primary after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-px after:bg-primary",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary">
              Book Strategy Call
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background" />
        <div className="relative flex h-full flex-col">
          <div className="container-page flex h-16 items-center justify-between">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-page flex flex-1 flex-col justify-center gap-2">
            {[
              { to: "/", label: "Home" },
              ...NAV,
              { to: "/contact", label: "Contact" },
            ].map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl text-foreground transition-opacity hover:opacity-60"
                style={{
                  transitionDelay: open ? `${i * 40}ms` : "0ms",
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  opacity: open ? 1 : 0,
                  transitionProperty: "transform, opacity",
                  transitionDuration: "400ms",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="container-page pb-10">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full h-12"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
