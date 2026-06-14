import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceTemplate } from "@/components/services/ServiceTemplate";
import { getServiceContent, type ServiceContent } from "@/lib/services-content";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const content = getServiceContent(params.slug);
    if (!content) throw notFound();
    return { content };
  },
  head: ({ loaderData, params }) => {
    const content = loaderData?.content as ServiceContent | undefined;
    if (!content) {
      return {
        meta: [{ title: "Service not found — Clinto Digital" }],
      };
    }

    const path = `/services/${params.slug}`;
    const ogTitle = content.seo.ogTitle ?? content.seo.title;
    const ogDescription = content.seo.ogDescription ?? content.seo.description;

    const meta: Array<Record<string, string>> = [
      { title: content.seo.title },
      { name: "description", content: content.seo.description },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle },
      { name: "twitter:description", content: ogDescription },
    ];

    if (content.seo.ogImage) {
      meta.push({ property: "og:image", content: content.seo.ogImage });
      meta.push({ name: "twitter:image", content: content.seo.ogImage });
    }

    // Structured data — Service, BreadcrumbList, FAQPage
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: content.seo.title,
      description: content.seo.description,
      serviceType: content.category,
      provider: {
        "@type": "Organization",
        name: "Clinto Digital",
      },
      areaServed: content.industries.items.map((i) => i.label),
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
        { "@type": "ListItem", position: 3, name: content.category, item: path },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faq.items.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };

    return {
      meta,
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(serviceSchema),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbSchema),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <section className="container-page py-32 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
          Service not found
        </h1>
        <p className="mt-4 text-foreground-secondary">
          The service you&apos;re looking for doesn&apos;t exist yet.
        </p>
      </section>
    </SiteLayout>
  ),
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <section className="container-page py-32 text-center">
        <h1 className="font-serif text-3xl text-foreground">Something went wrong</h1>
        <p className="mt-4 text-foreground-secondary">{error.message}</p>
        <button onClick={reset} className="btn-primary mt-6">
          Try again
        </button>
      </section>
    </SiteLayout>
  ),
  component: ServiceSlugPage,
});

function ServiceSlugPage() {
  const { content } = Route.useLoaderData();
  return (
    <SiteLayout>
      <ServiceTemplate content={content} />
    </SiteLayout>
  );
}
