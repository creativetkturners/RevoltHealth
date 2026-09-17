"use client";

import { useState, type FormEvent } from "react";
import styles from "./investor-interest.module.css";

export function InvestorForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("This form is a preview. Investor registrations are not being sent yet.");
  }

  return <form className={styles.form} onSubmit={handleSubmit} aria-labelledby="investor-form-heading">
    <h3 id="investor-form-heading">Join the Investor List</h3>
    <span className={styles.formRule} aria-hidden="true" />
    <div className={styles.fields}>
      <div className={styles.field}><label htmlFor="investor-name">Name</label><input id="investor-name" name="name" autoComplete="name" placeholder="Your name" required maxLength={150} /></div>
      <div className={styles.field}><label htmlFor="investor-email">Email</label><input id="investor-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254} /></div>
      <div className={styles.field}><label htmlFor="investor-company">Firm / Company <span>(Optional)</span></label><input id="investor-company" name="company" autoComplete="organization" placeholder="Your firm or company" maxLength={200} /></div>
      <div className={styles.field}><label htmlFor="investor-type">Investor Type</label><div className={styles.selectWrapper}><select id="investor-type" name="investorType" required defaultValue=""><option value="" disabled>Select investor type</option><option value="individual">Individual Investor</option><option value="angel">Angel Investor</option><option value="family-office">Family Office</option><option value="venture-capital">Venture Capital</option><option value="private-equity">Private Equity</option><option value="strategic">Strategic Investor</option><option value="other">Other</option></select><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 7 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg></div></div>
      <div className={styles.field}><label htmlFor="investor-comments">Comments</label><textarea id="investor-comments" name="comments" placeholder="Share any additional information (optional)" rows={3} maxLength={3000} /></div>
    </div>
    <button type="submit">Join Investor List <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h17m-7-8 8 8-8 8" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg></button>
    <p className={styles.status} role="status">{message}</p>
  </form>;
}
