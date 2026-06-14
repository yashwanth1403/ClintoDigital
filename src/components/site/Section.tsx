import type { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  bordered?: boolean;
  className?: string;
}

export function Section({
  eyebrow,
  title,
  description,
  children,
  bordered = true,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`container-page py-20 md:py-28 ${
        bordered ? "border-t border-border-light" : ""
      } ${className}`}
    >
      {(eyebrow || title || description) && (
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16 mb-14">
          <div>
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          </div>
          <div>
            {title && (
              <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 max-w-xl text-base text-foreground-secondary md:text-lg leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
      {children}
    </section>
  );
}

export function PlaceholderBlock({ label }: { label: string }) {
  return (
    <div className="card-surface flex min-h-[260px] items-center justify-center p-8 text-center">
      <div>
        <div className="eyebrow mb-2">Placeholder</div>
        <p className="font-serif text-xl text-foreground">{label}</p>
      </div>
    </div>
  );
}
