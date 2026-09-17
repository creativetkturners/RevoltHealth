import Image from "next/image";
import styles from "./revenue-section.module.css";

type IconName = "people" | "insurance" | "gear" | "laptop" | "care" | "repeat" | "bars" | "growth";

function Icon({ name, shield = false }: { name: IconName; shield?: boolean }) {
  return <svg viewBox="0 0 80 90" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {shield && <path d="M40 5c-11 7-21 10-32 11v26c0 22 13 34 32 44 19-10 32-22 32-44V16C61 15 51 12 40 5Z" />}
    <g transform={shield ? "translate(14 23) scale(.65)" : "translate(0 4)"}>
      {name === "people" && <><g fill="currentColor" stroke="none"><circle cx="40" cy="23" r="11" /><circle cx="18" cy="29" r="8" /><circle cx="62" cy="29" r="8" /><path d="M23 60V49c0-21 34-21 34 0v11ZM5 60V48c0-12 13-17 21-11-6 6-7 12-7 23ZM61 60c0-11-1-17-7-23 8-6 21-1 21 11v12Z" /></g></>}
      {name === "insurance" && <><path d="M42 67H17V9h34l12 12v16M51 9v13h12M26 23h17M26 33h13M26 43h7M26 53h7" /><path d="M54 32c7 5 13 7 20 8v12c0 13-9 21-20 27-11-6-20-14-20-27V40c7-1 13-3 20-8Z" /><path d="m44 53 7 7 14-15" /></>}
      {name === "gear" && <><path d="m34 9 12 0 3 10 8 4 10-3 6 10-7 8v10l7 8-6 10-10-3-8 4-3 10H34l-3-10-8-4-10 3-6-10 7-8V38l-7-8 6-10 10 3 8-4Z" /><circle cx="40" cy="43" r="13" /></>}
      {name === "laptop" && <><path d="M16 17h48v36H16ZM8 61l8-8h48l8 8H8ZM33 61h14" /></>}
      {name === "care" && <><path d="M17 14v20a14 14 0 0 0 28 0V14M14 14h7M41 14h7M31 49v10a17 17 0 0 0 34 0V45" /><circle cx="65" cy="37" r="8" /></>}
      {name === "repeat" && <><path d="M11 35a29 29 0 0 1 51-17l10 10M72 11v17H55M69 50a29 29 0 0 1-51 17L8 57M8 74V57h17" /></>}
      {name === "bars" && <><path d="M10 72V46h12v26ZM34 72V30h12v42ZM58 72V12h12v60Z" /></>}
      {name === "growth" && <><path d="m6 68 24-25 16 12 27-37M57 18h16v16" /></>}
    </g>
  </svg>;
}

const streams: { title: string; description: string; icon: IconName; color: string }[] = [
  { title: "Membership Revenue", description: "Recurring revenue generated through membership-based healthcare access models, particularly through Revolt Health Network.", icon: "people", color: "#ed070d" },
  { title: "Private Insurance Sales", description: "Commission-based revenue generated through private health insurance plan enrollment and related distribution activity.", icon: "insurance", color: "#ef0060" },
  { title: "Employer / Affinity Distribution", description: "Revenue generated through employer-facing and affinity-network channels that distribute Revolt solutions to defined populations.", icon: "people", color: "#005766" },
  { title: "Administrative / Coordination Value", description: "Economic value captured through simplified enrollment, navigation, communication, support, and administrative coordination across the member experience.", icon: "gear", color: "#d80b0e" },
  { title: "Technology Enablement", description: "Current and future monetization opportunities tied to REVOS Technology, including infrastructure, enablement, and scalable partner deployment.", icon: "laptop", color: "#0083c5" },
  { title: "Clinical / Care Delivery Expansion", description: "Revenue associated with direct care delivery and other clinical extensions, including the evolution of Revolt DPC.", icon: "care", color: "#d80b0e" },
];

const benefits: { title: string; description: string; icon: IconName }[] = [
  { title: "Recurring Revenue", description: "A stable foundation through ongoing member and customer relationships.", icon: "repeat" },
  { title: "Diversified Channels", description: "Multiple go-to-market paths that reduce reliance on any single revenue source.", icon: "bars" },
  { title: "Scalable Infrastructure", description: "A technology-enabled platform that supports efficient growth.", icon: "gear" },
  { title: "Platform Expansion", description: "Additional revenue opportunities through care delivery and new solution verticals.", icon: "growth" },
];

export function RevenueSection() {
  return <section id="revenue-model" className={styles.section} aria-labelledby="revenue-heading">
    <Image src="/images/revenue-background.webp" alt="" fill sizes="100vw" quality={90} className={styles.background} />
    <div className={styles.introduction}>
      <p className={styles.eyebrow}>Revenue / Monetization Logic</p>
      <span className={styles.rule} aria-hidden="true" />
      <h2 id="revenue-heading">Multiple Revenue Streams.<br /><span>One Coordinated Experience.</span></h2>
      <p className={styles.description}>Revolt’s monetization model is designed around coordination rather than<br className={styles.desktopBreak} /> dependence on a single healthcare product. The platform combines recurring<br className={styles.desktopBreak} /> revenue with distribution-based and service-based revenue streams,<br className={styles.desktopBreak} /> creating a diversified and scalable business structure.</p>
    </div>
    <p className={styles.manifesto}>A<br /> healthier<br /> people<br /> a stronger<br /> tomorrow<span aria-hidden="true" /></p>
    <ul className={styles.streams}>{streams.map(stream => <li key={stream.title} className={styles.card}>
      <div className={styles.shield} style={{ color: stream.color }}><Icon name={stream.icon} shield /></div>
      <h3>{stream.title}</h3><span className={styles.cardRule} aria-hidden="true" /><p>{stream.description}</p>
    </li>)}</ul>
    <p className={styles.divider}>A stronger business through diversification</p>
    <ul className={styles.benefits}>{benefits.map(benefit => <li key={benefit.title}>
      <div className={styles.benefitIcon}><Icon name={benefit.icon} /></div><div><h3>{benefit.title}</h3><p>{benefit.description}</p></div>
    </li>)}</ul>
    <p className={styles.insurance}><span aria-hidden="true">$</span><span>Private health insurance is a key monetization lane across the Revolt ecosystem.</span></p>
  </section>;
}
