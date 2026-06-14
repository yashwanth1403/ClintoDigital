import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-sm">
        C
      </span>
      <span className="font-serif text-lg tracking-tight text-foreground">
        Clinto <span className="text-foreground-secondary">Digital</span>
      </span>
    </Link>
  );
}
