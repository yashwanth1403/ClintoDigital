import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Clinto Digital" },
      { name: "description", content: "Real-world results and growth stories from Clinto Digital clients." },
      { property: "og:title", content: "Case Studies — Clinto Digital" },
      { property: "og:description", content: "Selected client work and results." },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Case Studies"
        title={<>Work that compounds.</>}
        description="A look at the engagements we're proud of."
      />
      <Section eyebrow="Coming soon">
        <div className="flex min-h-[360px] items-center justify-center rounded-3xl border border-dashed border-border bg-card/50 p-12 text-center">
          <div className="max-w-md">
            <div className="eyebrow mb-3">In production</div>
            <p className="font-serif text-3xl text-foreground md:text-4xl">
              Case studies coming soon.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              We're preparing detailed write-ups of recent engagements. Check back shortly.
            </p>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
