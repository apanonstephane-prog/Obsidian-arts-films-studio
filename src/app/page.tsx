import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ForWho } from "@/components/sections/ForWho";
import { Approach } from "@/components/sections/Approach";
import { WhyObsidian } from "@/components/sections/WhyObsidian";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABlock } from "@/components/sections/CTABlock";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ForWho />
      <Approach />
      <WhyObsidian />
      <PortfolioGrid limit={3} showFilters={false} showCTA />
      <FAQSection />
      <CTABlock dark />
    </>
  );
}
