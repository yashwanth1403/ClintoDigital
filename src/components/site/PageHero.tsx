import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="container-page pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-3xl">
        {eyebrow && <div className="eyebrow mb-6">{eyebrow}</div>}
        <h1 className="font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-lg text-foreground-secondary leading-relaxed md:text-xl">
            {description}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
