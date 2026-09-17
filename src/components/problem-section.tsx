import Image from "next/image";
import styles from "./problem-section.module.css";

const problems = [
  "Fragmented vendors",
  "Confusing benefits",
  "Duplicated administration",
  "Hidden pricing",
  "Insurance-first thinking",
  "Disconnected member experiences",
] as const;

export function ProblemSection() {
  return (
    <section id="the-problem" className={styles.section} aria-labelledby="problem-heading">
      <Image src="/images/problem-background.webp" alt="" fill sizes="100vw" quality={90} className={styles.background} />
      <div className={styles.introduction}>
        <p className={styles.eyebrow}>The problem</p>
        <span className={styles.rule} aria-hidden="true" />
        <h2 id="problem-heading" className={styles.heading}>
          <strong>Healthcare Is Still Built as a</strong>
          <span>Collection of Disconnected Parts</span>
        </h2>
        <p className={styles.description}>
          Traditional healthcare is often delivered through a fragmented network of carriers,<br className={styles.desktopBreak} />
          {" "}vendors, administrators, and point solutions that rarely work together in a cohesive way.<br className={styles.desktopBreak} />
          {" "}That fragmentation creates cost, confusion, and friction for both consumers and<br className={styles.desktopBreak} />
          {" "}organizations.
        </p>
      </div>
      <p className={styles.manifesto}>A <br />healthier <br />people <br />A stronger <br />tomorrow<span aria-hidden="true" /></p>
      <div className={styles.comparison}>
        <div className={styles.oldEconomy}>
          <h3>The old healthcare economy</h3>
          <ul>
            {problems.map((problem) => (
              <li key={problem}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 3 18 18M21 3 3 21" /></svg>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
          <p className={styles.cardConclusion}>Cost. Confusion. Friction.</p>
        </div>
        <svg className={styles.arrow} viewBox="0 0 88 40" fill="none" aria-hidden="true">
          <defs><linearGradient id="problem-arrow-gradient"><stop stopColor="#f51d23" stopOpacity=".25" /><stop offset=".5" stopColor="#f51d23" /></linearGradient></defs>
          <path d="M1 20h84m-18-18 18 18-18 18" stroke="url(#problem-arrow-gradient)" strokeWidth="2" />
        </svg>
        <div className={styles.friction}>
          <h3>A System Defined by Friction</h3>
          <p className={styles.frictionDescription}>The result is a system where access is difficult, navigation is inconsistent, and the value of healthcare spending is diluted across too many intermediaries. This creates a substantial opportunity for a company that can simplify and coordinate the experience end to end.</p>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.conclusion}><strong>Fragmentation creates the opportunity.</strong><br />Coordination creates the value.</p>
        </div>
      </div>
    </section>
  );
}
