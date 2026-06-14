import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HomeHero } from "@/components/site/HomeHero";
import { ServicesSection } from "@/components/site/ServicesSection";
import { IndustriesSection } from "@/components/site/IndustriesSection";
import { WhyClintoSection } from "@/components/site/WhyClintoSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { FAQSection } from "@/components/site/FAQSection";
import { FinalCTASection } from "@/components/site/FinalCTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clinto Digital — Grow Faster with Social, AI Search & Automation" },
      {
        name: "description",
        content:
          "Clinto Digital helps businesses generate more leads through social media, Google Business Profile, SEO, AI search visibility, paid ads, and automation.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <HomeHero />
      <ServicesSection />
      <IndustriesSection />
      <WhyClintoSection />
      <ProcessSection />
      <FAQSection />
      <FinalCTASection />
    </SiteLayout>
  );
}
