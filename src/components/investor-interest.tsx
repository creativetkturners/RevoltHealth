import Image from "next/image";
import { InvestorForm } from "./investor-form";
import styles from "./investor-interest.module.css";

export function InvestorInterest() {
  return <section id="investor-interest" className={styles.section} aria-labelledby="investor-interest-heading">
    <Image src="/images/investor-background.webp" alt="" fill sizes="100vw" quality={90} className={styles.background} />
    <div className={styles.content}>
      <p className={styles.eyebrow}>Investor Interest</p><span className={styles.rule} aria-hidden="true" />
      <h2 id="investor-interest-heading">When the Time Comes.<br /><span>We’ll Know Who to Call.</span></h2>
      <div className={styles.copy}>
        <p>We are not currently raising capital.</p>
        <p>Right now, our focus is building the business, expanding<br className={styles.desktopBreak} /> the platform, and proving the model at scale.</p>
        <p>If we choose to raise capital in the future, we want those<br className={styles.desktopBreak} /> conversations to begin with investors who have been<br className={styles.desktopBreak} /> paying attention.</p>
      </div>
      <span className={styles.closingRule} aria-hidden="true" />
      <p className={styles.statement}>We’re not raising. We’re building.</p>
    </div>
    <InvestorForm />
    <p className={styles.manifesto}>A<br /> healthier<br /> people<br /> a stronger<br /> tomorrow<span aria-hidden="true" /></p>
    <p className={styles.disclaimer}>Joining the investor list does not constitute an offer to sell, or a solicitation of an offer to purchase, any security.</p>
  </section>;
}
