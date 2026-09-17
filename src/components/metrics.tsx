import type { ReactNode } from "react";

type IconName = "growth" | "members" | "brands" | "channels" | "building";

const metrics: { id: IconName; value: ReactNode; label: ReactNode; compact?: boolean }[] = [
  { id: "growth", value: "$22M", label: "In premium sold" },
  { id: "members", value: "~1,000", label: "Network members" },
  { id: "brands", value: "5", label: <>Integrated<br />brands</> },
  { id: "channels", value: "Multiple", label: "Revenue channels", compact: true },
  { id: "building", value: <>Consumer +<br />employer + affinity</>, label: "Distribution model", compact: true },
];

function MetricIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    growth: <g fill="currentColor"><path d="M4 31h10v17H4zm15-12h10v29H19zm15-13h10v42H34z" /></g>,
    members: <g fill="currentColor"><circle cx="26" cy="14" r="8" /><circle cx="9" cy="19" r="6" /><circle cx="43" cy="19" r="6" /><path d="M13 46V34c0-8 6-13 13-13s13 5 13 13v12ZM1 43V33c0-6 4-10 9-10 2 0 4 1 5 2-4 3-5 8-5 13v5Zm41 0v-5c0-5-1-10-5-13 1-1 3-2 5-2 5 0 9 4 9 10v10Z" /></g>,
    brands: <g stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" fill="none"><path d="m26 4 21 12-21 12L5 16Zm-21 22 21 12 21-12M5 36l21 12 21-12" /></g>,
    channels: <g stroke="currentColor" strokeWidth="3.5" fill="none"><path d="m14 37 9-11m6-7 9-11M29 27l10 13" /><circle cx="9" cy="42" r="6" /><circle cx="26" cy="22" r="6" /><circle cx="42" cy="6" r="5" /><circle cx="43" cy="45" r="5" /></g>,
    building: <g stroke="currentColor" strokeWidth="3" strokeLinejoin="miter" fill="none"><path d="M6 48V10h23v38m0-30h15v30M2 48h46M13 10V3h10v7M15 48V37h6v11" /><path d="M12 17h4m6 0h3m-13 7h4m6 0h3m-13 7h4m6 0h3m10-5h4m-4 8h4m-4 8h4" /></g>,
  };
  return <svg className="metric-icon" viewBox="0 0 52 52" aria-hidden="true">{paths[name]}</svg>;
}

export function Metrics() {
  return (
    <section className="metrics" aria-label="Alliance at a glance">
      <dl className="metrics-list">
        {metrics.map(({ id, value, label, compact }) => (
          <div className={`metric ${compact ? "metric-compact" : ""}`} key={id}>
            <MetricIcon name={id} />
            <div className="metric-copy"><dt>{label}</dt><dd>{value}</dd><span className="metric-rule" aria-hidden="true" /></div>
          </div>
        ))}
      </dl>
    </section>
  );
}
