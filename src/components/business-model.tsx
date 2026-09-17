import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./business-model.module.css";

type IconName = "people" | "building" | "door" | "card" | "gear" | "heart" | "data" | "care" | "laptop" | "lab" | "pill" | "dollar" | "imaging" | "patient" | "shield";

function ModelIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    people: <><circle cx="24" cy="12" r="6" /><circle cx="9" cy="17" r="4" /><circle cx="39" cy="17" r="4" /><path d="M13 40v-8a11 11 0 0 1 22 0v8Zm-3-17c-6 0-9 5-9 12h9m28-12c6 0 9 5 9 12H38" /></>,
    building: <><path d="M10 43V8h22v35m0-22h8v22M6 43h38M17 8V3h10v5M19 43v-9h5v9" /><path d="M16 15h3m6 0h3m-12 7h3m6 0h3m-12 7h3m6 0h3" /></>,
    door: <><path d="M7 6h17v37L7 38Zm17 0h14v35H24M17 24v5" /></>,
    card: <><rect x="4" y="9" width="40" height="30" rx="2" /><path d="M4 19h40M31 31h6M10 28h9" /></>,
    gear: <><path d="m20 4 8 0 2 6 6 2 5-2 4 7-4 5v6l4 4-4 7-6-2-5 2-2 6h-8l-2-6-6-2-5 2-4-7 4-4v-6l-4-5 4-7 5 2 6-2Z" /><circle cx="24" cy="25" r="9" /></>,
    heart: <><path d="M24 21C9 10 15 1 22 7l2 3 3-3c7-6 13 3-3 14ZM5 42V31l8-5h8l6 3h7c5 0 5 6 0 7H21m12-5 7-5c5-4 10 1 5 5L32 42H17l-6-3" /></>,
    data: <path d="M6 28h7v16H6Zm14-9h7v25h-7ZM34 7h7v37h-7Z" />,
    care: <><path d="M9 4v13a9 9 0 0 0 18 0V4M5 4h8m10 0h8M18 26v6a11 11 0 0 0 22 0v-7" /><circle cx="40" cy="21" r="4" /></>,
    laptop: <><path d="M8 7h32v28H8ZM4 42l4-7h32l4 7Z" /></>,
    lab: <><path d="M19 5h10m-8 0v13L9 41c-1 2 1 3 3 3h24c2 0 4-1 3-3L27 18V5M15 29h18" /></>,
    pill: <><path d="M9 39a10 10 0 0 1 0-14L25 9a10 10 0 0 1 14 14L23 39a10 10 0 0 1-14 0ZM18 16l14 14M26 13l6 6" /></>,
    dollar: <><circle cx="24" cy="24" r="19" /><path d="M24 11v26m7-21c-11-9-20 6-7 8s6 15-8 7" /></>,
    imaging: <><path d="M4 29a20 20 0 0 1 40 0M10 29a14 14 0 0 1 28 0M16 29a8 8 0 0 1 16 0M22 29v-7h4v7M3 33h42M24 33l-9 11h18Z" /></>,
    patient: <><circle cx="24" cy="13" r="10" /><path d="M6 44c0-12 8-19 18-19s18 7 18 19" /></>,
    shield: <><path d="M24 3c6 5 12 6 17 6v15c0 11-9 17-17 21C16 41 7 35 7 24V9c5 0 11-1 17-6Z" /><path d="m16 24 6 6 11-13" /></>,
  };
  return <svg viewBox="0 0 48 48" className={styles.icon} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const coordination: { icon: IconName; label: ReactNode }[] = [
  { icon: "door", label: "One Front Door" },
  { icon: "people", label: "One Membership" },
  { icon: "card", label: <>One Payment<br />Experience</> },
  { icon: "gear", label: "Administration" },
  { icon: "heart", label: <>Concierge<br />Patient Advocacy</> },
  { icon: "data", label: "Data & Navigation" },
];
const services: { icon: IconName; label: ReactNode }[] = [
  { icon: "care", label: <>Direct<br />Primary Care</> },
  { icon: "laptop", label: <>Virtual<br />Care</> },
  { icon: "lab", label: "Labs" },
  { icon: "pill", label: <>Prescription<br />Access</> },
  { icon: "dollar", label: <>Cash-Pay<br />Specialists</> },
  { icon: "imaging", label: <>Imaging &<br />Procedures</> },
  { icon: "patient", label: <>Patient<br />Advocacy</> },
  { icon: "shield", label: <>Private Medical<br />Insurance Plans</> },
];
const oldEconomy = ["Fragmented vendors", "Confusing benefits", "Duplicated administration", "Hidden pricing", "Insurance-first thinking", "Disconnected experiences"];
const newEconomy = ["Lower operating costs", "Better utilization", "Stronger member retention", "Higher perceived value", "Recurring revenue", "Scalable distribution"];

function EconomyPanel({ economy }: { economy: "old" | "new" }) {
  const isNew = economy === "new";
  return (
    <div className={`${styles.economy} ${isNew ? styles.newEconomy : styles.oldEconomy}`}>
      <h3>The {economy} <br />healthcare <br />economy</h3>
      <ul>{(isNew ? newEconomy : oldEconomy).map((item) => <li key={item}><span aria-hidden="true">{isNew ? "✓" : "×"}</span>{item}</li>)}</ul>
      <p>{isNew ? <>Coordination <br />becomes <br />monetization.</> : <>Cost. <br />Confusion. <br />Friction.</>}</p>
    </div>
  );
}

export function BusinessModel() {
  return (
    <section id="business-model" className={styles.section} aria-labelledby="business-model-heading">
      <Image src="/images/business-background.webp" alt="" fill sizes="100vw" quality={90} className={styles.background} />
      <div className={styles.introduction}>
        <p className={styles.eyebrow}>Business model</p><span className={styles.rule} aria-hidden="true" />
        <h2 id="business-model-heading">We Remove the Friction.<br />We <span>Capture the Value.</span></h2>
        <p className={styles.description}>Revolt Healthcare doesn’t need to own every part of healthcare. We create value by coordinating fragmented components into one simpler, lower-cost experience for individuals, families, employers, and affinity networks.</p>
      </div>
      <p className={styles.manifesto}>A <br />healthier <br />people <br />A stronger <br />tomorrow<span aria-hidden="true" /></p>
      <div className={styles.model}>
        <EconomyPanel economy="old" />
        <div className={styles.flow}>
          <ul className={styles.audiences} aria-label="Who the coordination layer serves">
            <li><ModelIcon name="people" /><span>Individuals & Families</span></li>
            <li><ModelIcon name="building" /><span>Employers &<br />Affinity Networks</span></li>
          </ul>
          <svg className={styles.audienceLines} viewBox="0 0 1072 40" preserveAspectRatio="none" aria-hidden="true"><path d="M276 0v22h154v18M808 0v22H650v18" /><path className={styles.arrowhead} d="m424 40 6-12 6 12m208 0 6-12 6 12" /></svg>
          <div className={styles.hub}>
            <h3>Revolt Healthcare</h3><span className={styles.hubRule} aria-hidden="true" /><p>The coordination layer</p>
            <ul aria-label="Coordination capabilities">{coordination.map(({ icon, label }) => <li key={icon}><ModelIcon name={icon} /><span>{label}</span></li>)}</ul>
          </div>
          <svg className={styles.serviceLines} viewBox="0 0 1072 44" preserveAspectRatio="none" aria-hidden="true"><path d="M536 0v24M122 44V24h828v20M396 24v20M676 24v20" /><path className={styles.arrowhead} d="m117 44 5-10 5 10m264 0 5-10 5 10m270 0 5-10 5 10m269 0 5-10 5 10" /></svg>
          <svg className={styles.mobileServiceLines} viewBox="0 0 1072 44" preserveAspectRatio="none" aria-hidden="true"><path d="M536 0v24M264 44V24h544v20" /><path className={styles.arrowhead} d="m259 44 5-10 5 10m534 0 5-10 5 10" /></svg>
          <ul className={styles.services} aria-label="Healthcare services connected through Revolt">{services.map(({ icon, label }) => <li key={icon}><ModelIcon name={icon} /><span>{label}</span></li>)}</ul>
        </div>
        <EconomyPanel economy="new" />
      </div>
      <p className={styles.banner}><span aria-hidden="true">$</span><span>A simpler, lower-cost healthcare journey built around coordination instead of middlemen.</span></p>
    </section>
  );
}
