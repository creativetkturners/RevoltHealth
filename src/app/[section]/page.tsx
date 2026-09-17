import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";

const pages = {
  solutions: { title: "Healthcare solutions", eyebrow: "Consumer. Employer. Partner.", description: "A vertically integrated healthcare platform designed to reduce cost, confusion, and administrative friction across consumer, employer, and partner markets." },
  ecosystem: { title: "Our ecosystem", eyebrow: "One integrated alliance", description: "Five integrated brands. Multiple revenue channels. A distribution model built across consumer, employer, and affinity markets." },
  impact: { title: "A healthier people. A stronger tomorrow.", eyebrow: "More than healthcare", description: "The alliance at a glance: $19M+ in premium sold, approximately 1,000 network members, and five integrated brands." },
  about: { title: "Revolt Healthcare Alliance", eyebrow: "Built for the new healthcare economy", description: "A vertically integrated healthcare platform connecting consumer, employer, and partner markets. More than healthcare. A stronger tomorrow." },
  quote: { title: "Let’s find your healthcare solution.", eyebrow: "Get a quote", description: "Speak with Revolt Healthcare Alliance about solutions for you, your organization, or your network." },
} as const;

type Props = { params: Promise<{ section: string }> };
function isSection(section: string): section is keyof typeof pages { return Object.hasOwn(pages, section); }

export function generateStaticParams() { return Object.keys(pages).map((section) => ({ section })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params;
  return isSection(section) ? { title: pages[section].title } : {};
}

export default async function InformationPage({ params }: Props) {
  const { section } = await params;
  if (!isSection(section)) notFound();
  const page = pages[section];
  return (
    <>
      <Header active={section} />
      <main id="main-content" className="information-page">
        <p className="eyebrow">{page.eyebrow}</p>
        <span className="eyebrow-rule" aria-hidden="true" />
        <h1>{page.title}</h1>
        <p>{page.description}</p>
        {section === "solutions" && (
          <>
            <section id="consumer"><h2>For consumers</h2><p>Explore healthcare solutions for you and your family.</p></section>
            <section id="employer"><h2>For employers</h2><p>Discuss healthcare solutions for your organization.</p></section>
            <section id="partner"><h2>For partners</h2><p>Connect with the alliance about your network.</p></section>
          </>
        )}
        <a href="tel:8557386585" className="quote-button">Call 855.738.6585</a>
        <div><Link href="/" className="back-link">← Back to investors</Link></div>
      </main>
    </>
  );
}
