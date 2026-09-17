import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Investors | Revolt Healthcare Alliance", template: "%s | Revolt Healthcare Alliance" },
  description: "Invest in a healthier tomorrow. A vertically integrated healthcare platform designed to reduce cost, confusion, and administrative friction across consumer, employer, and partner markets.",
};

export const viewport: Viewport = { themeColor: "#111112" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
