import Link from "next/link";
import { Brand } from "./brand";

function Navigation({ active }: { active: string }) {
  return (
    <>
      <details className="nav-dropdown">
        <summary className={active === "solutions" ? "nav-link active" : "nav-link"}>Solutions <Chevron /></summary>
        <div className="dropdown-menu">
          <Link href="/solutions#consumer">For consumers</Link>
          <Link href="/solutions#employer">For employers</Link>
          <Link href="/solutions#partner">For partners</Link>
        </div>
      </details>
      <Link href="/ecosystem" className={`nav-link ${active === "ecosystem" ? "active" : ""}`} aria-current={active === "ecosystem" ? "page" : undefined}>Our ecosystem</Link>
      <Link href="/impact" className={`nav-link ${active === "impact" ? "active" : ""}`} aria-current={active === "impact" ? "page" : undefined}>Impact</Link>
      <Link href="/" className={`nav-link ${active === "investors" ? "active" : ""}`} aria-current={active === "investors" ? "page" : undefined}>Investors</Link>
      <details className="nav-dropdown">
        <summary className={active === "about" ? "nav-link active" : "nav-link"}>About <Chevron /></summary>
        <div className="dropdown-menu">
          <Link href="/about">Our alliance</Link>
          <Link href="/quote">Contact us</Link>
        </div>
      </details>
    </>
  );
}

function Chevron() {
  return <svg viewBox="0 0 16 10" width="14" height="9" fill="none" aria-hidden="true"><path d="m1 1 7 7 7-7" stroke="currentColor" strokeWidth="1.5" /></svg>;
}

export function Header({ active = "investors" }: { active?: string }) {
  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation"><Navigation active={active} /></nav>
      <div className="header-actions">
        <a className="phone-link" href="tel:8557386585">855.738.6585</a>
        <Link className="quote-button" href="/quote">Get a quote</Link>
      </div>
      <details className="mobile-menu">
        <summary aria-label="Toggle navigation"><span /><span /><span /></summary>
        <nav aria-label="Mobile navigation"><Navigation active={active} /><a className="mobile-phone" href="tel:8557386585">855.738.6585</a></nav>
      </details>
    </header>
  );
}
