import Image from "next/image";
import { Header } from "@/components/header";
import { Metrics } from "@/components/metrics";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { BusinessModel } from "@/components/business-model";
import { EcosystemSection } from "@/components/ecosystem-section";
import { RevenueSection } from "@/components/revenue-section";
import { InvestorInterest } from "@/components/investor-interest";

export default function InvestorPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="investor-hero" aria-label="Invest in a healthier tomorrow">
          <Image className="hero-background" src="/images/hero.webp" alt="" fill preload sizes="100vw" quality={90} />
          <div className="hero-content">
            <p className="eyebrow">Invest in a healthier tomorrow</p>
            <span className="eyebrow-rule" aria-hidden="true" />
            <h1><strong>We’re Built for<br />the New</strong><span>Healthcare Economy</span></h1>
            <p className="hero-description">A vertically integrated healthcare platform designed to reduce<br className="desktop-break" /> cost, confusion, and administrative friction across consumer,<br className="desktop-break" /> employer, and partner markets.</p>
          </div>
          <p className="hero-manifesto">A<br />healthier<br /><span>people</span>A stronger<br />tomorrow<i aria-hidden="true" /></p>
          <p className="skyline-caption">More than healthcare.<br />A stronger tomorrow.<span aria-hidden="true" /></p>
          <Metrics />
        </section>
        <ProblemSection />
        <SolutionSection />
        <BusinessModel />
        <EcosystemSection />
        <RevenueSection />
        <InvestorInterest />
      </main>
    </>
  );
}
