import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./solution-section.module.css";

const steps = [
  { id: "access", label: "One Front Door" },
  { id: "membership", label: "One Membership Experience" },
  { id: "administration", label: "Administration" },
  { id: "advocacy", label: "Concierge Patient Advocacy" },
  { id: "data", label: "Data & Navigation" },
  { id: "payment", label: "One Simplified Payment Experience" },
] as const;

function SolutionIcon({ name }: { name: (typeof steps)[number]["id"] }) {
  const icons: Record<typeof name, ReactNode> = {
    access: <><circle cx="36" cy="15" r="9" /><circle cx="15" cy="25" r="6" /><circle cx="57" cy="25" r="6" /><path d="M19 57v-7c0-12 7-21 17-21s17 9 17 21v7ZM18 35C9 36 5 43 5 53h11m38-18c9 1 13 8 13 18H56" /></>,
    membership: <><rect x="7" y="19" width="58" height="40" rx="4" /><rect x="32" y="9" width="8" height="16" rx="3" /><circle cx="24" cy="35" r="5" /><path d="M15 51v-3a9 9 0 0 1 18 0v3Zm26-18h15M41 40h15M41 47h15" /></>,
    administration: <><path d="M39 60H17V12h25l11 12v13M42 12v13h11M24 32h20M24 40h13M24 48h9" /><path d="m48 43 3-4 4 2 5-1 1 5 4 3-2 5 1 4-5 2-3 4-4-2-5 1-1-5-4-3 2-5-1-4Z" /><circle cx="53" cy="51" r="4" /></>,
    advocacy: <><path d="M36 26C17 12 24 2 32 8l4 4 4-4c8-6 15 4-4 18ZM10 60V44l10-5h9l9 4h10c7 0 7 8 0 9H30m17-6 9-7c7-5 13 1 6 7L45 59H25l-8-3Z" /></>,
    data: <><path d="M14 33h10v27H14Zm17-12h10v39H31ZM48 9h10v51H48Z" /></>,
    payment: <><rect x="8" y="15" width="57" height="43" rx="4" /><path d="M8 29h57M48 47h8" /></>,
  };
  return <svg className={styles.icon} viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}

export function SolutionSection() {
  return (
    <section id="revolt-solution" className={styles.section} aria-labelledby="solution-heading">
      <Image src="/images/solution-background.webp" alt="" fill sizes="100vw" quality={90} className={styles.background} />
      <p className={styles.eyebrow}>The Revolt solution</p>
      <span className={styles.rule} aria-hidden="true" />
      <h2 id="solution-heading" className={styles.heading}>
        <strong>Revolt Coordinates the</strong>
        <span><strong>Journey</strong> Instead of Adding</span>
        <span>Another Layer to It</span>
      </h2>
      <div className={styles.content}>
        <div className={styles.copy}>
          <p>Revolt Healthcare is designed to function as the coordination layer across a fragmented healthcare market. By aligning access, administration, membership, support, and enabling technology, Revolt simplifies the healthcare journey for individuals, families, employers, and affinity networks.</p>
          <p>The company’s model is built around reducing administrative friction while improving member experience, utilization, retention, and revenue quality. Rather than trying to own every component of healthcare delivery, Revolt creates value by making the system work better together.</p>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.conclusion}>Reduce friction. Improve experience. Capture value.</p>
        </div>
        <ul className={styles.diagram} aria-label="Six connected parts of the coordinated healthcare journey">
          {steps.map(({ id, label }) => (
            <li className={styles.card} key={id}>
              <SolutionIcon name={id} />
              <h3>{label}</h3>
              <span aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.manifesto}>A <br />healthier <br />people <br />A stronger <br />tomorrow<span aria-hidden="true" /></p>
    </section>
  );
}
