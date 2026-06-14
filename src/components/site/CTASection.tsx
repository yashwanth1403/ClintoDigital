import { Link } from "@tanstack/react-router";

export function CTASection() {
  return (
    <section className="container-page py-20 md:py-28 border-t border-border-light">
      <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 md:px-16 md:py-24">
        <div className="relative max-w-2xl">
          <div
            className="mb-6 text-xs font-medium tracking-[0.14em] uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Get started
          </div>
          <h2 className="font-serif text-4xl leading-[1.05] text-background md:text-6xl">
            Let's build the growth engine for your practice.
          </h2>
          <p className="mt-6 text-base text-background/70 md:text-lg max-w-lg">
            Book a strategy call and we'll map a clear, measurable path forward.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Book Strategy Call
            </Link>
            <Link
              to="/services"
              className="inline-flex h-12 items-center rounded-full border border-background/25 px-6 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
