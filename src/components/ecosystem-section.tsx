import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./ecosystem-section.module.css";

const brands = [
  { id: "alliance", name: "Revolt Healthcare Alliance", role: "Coordination platform", x: 63, description: "The umbrella brand and strategic center of the ecosystem, aligning the company’s healthcare vision, platform model, and market position." },
  { id: "human-resources", name: "Revolt Human Resources", role: "Employer distribution", x: 337, description: "The employer-facing brand focused on workforce solutions, benefits positioning, and distribution into employer groups and business channels." },
  { id: "network", name: "Revolt Healthcare Network", role: "Membership access", x: 611, description: "The membership-driven access brand serving individuals, families, and affinity audiences through a simplified bundled healthcare experience." },
  { id: "revos", name: "Revos Technology", role: "Platform infrastructure", x: 885, description: "The enabling technology layer supporting administration, coordination, member experience, and scalable platform expansion." },
  { id: "primary-care", name: "Revolt Healthcare Direct Primary Care", role: "Care delivery extension", x: 1158, description: "The clinical access extension that deepens vertical integration and expands Revolt’s ability to coordinate care more directly over time." },
] as const;

export function EcosystemSection() {
  return (
    <section id="revolt-ecosystem" className={styles.section} aria-labelledby="ecosystem-heading">
      <Image src="/images/ecosystem-background.webp" alt="" fill quality={90} sizes="100vw" className={styles.background} />
      <div className={styles.introduction}>
        <p className={styles.eyebrow}>The Revolt ecosystem</p><span className={styles.rule} aria-hidden="true" />
        <h2 id="ecosystem-heading">Five Integrated Brands.<br /><span>One Coordinated Platform.</span></h2>
        <p className={styles.description}>Revolt is not a single product. It is a coordinated ecosystem of brands designed<br className={styles.desktopBreak} /> to simplify healthcare access, distribution, technology, and care delivery across<br className={styles.desktopBreak} /> the New Healthcare Economy.</p>
      </div>
      <p className={styles.manifesto}>A <br />healthier <br />people <br />A stronger <br />tomorrow<span aria-hidden="true" /></p>
      <ul className={styles.brands} aria-label="Five integrated Revolt brands">
        {brands.map(({ id, name, role, x, description }) => (
          <li key={id} className={styles.brandCard}>
            <h3 className={styles.brandLogo} style={{ "--logo-x": x } as CSSProperties}>
              <span className={styles.srOnly}>{name}</span>
              <span className={styles.logoCrop} aria-hidden="true">
                <Image src="/images/ecosystem-reference.png" alt="" width={1440} height={1080} sizes="100vw" quality={90} className={styles.logoReference} />
              </span>
            </h3>
            <span className={styles.cardRule} aria-hidden="true" />
            <p className={styles.role}>{role}</p>
            <p className={styles.brandDescription}>{description}</p>
          </li>
        ))}
      </ul>
      <div className={styles.revenue}>
        <span className={styles.dollar} aria-hidden="true">$</span>
        <h3>Connected revenue lane</h3>
        <p>Private Health Insurance operates across the ecosystem as a solution and monetization layer rather than as a separate Revolt brand.</p>
      </div>
      <p className={styles.platform}>The ecosystem is the platform.</p>
    </section>
  );
}
