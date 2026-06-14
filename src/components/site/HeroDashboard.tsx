import { motion } from "motion/react";
import {
  TrendingUp,
  Calendar,
  IndianRupee,
  Bot,
  Target,
  ArrowUpRight,
} from "lucide-react";

const chartPoints = [22, 34, 28, 46, 52, 48, 64, 72, 68, 84, 92, 110];

export function HeroDashboard() {
  const max = Math.max(...chartPoints);
  const w = 320;
  const h = 110;
  const stepX = w / (chartPoints.length - 1);
  const path = chartPoints
    .map((p, i) => {
      const x = i * stepX;
      const y = h - (p / max) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;

  return (
    <div className="relative">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[3rem] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 50% at 60% 40%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%), radial-gradient(40% 40% at 30% 80%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative rounded-3xl border border-border-light bg-surface p-5 shadow-[0_30px_80px_-40px_rgba(27,27,31,0.25)]"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-1 pb-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f1c40f]/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#2ecc71]/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted">
              Clinto · Growth OS
            </div>
            <div className="text-[10px] text-muted">Live</div>
          </div>

          {/* Top metric row */}
          <div className="grid grid-cols-3 gap-3">
            <MetricCard
              icon={<TrendingUp className="h-4 w-4" />}
              label="Leads / mo"
              value="1,284"
              delta="+38.2%"
              tone="primary"
            />
            <MetricCard
              icon={<Calendar className="h-4 w-4" />}
              label="Appointments"
              value="412"
              delta="+24.1%"
              tone="accent"
            />
            <MetricCard
              icon={<IndianRupee className="h-4 w-4" />}
              label="Revenue"
              value="₹18.6L"
              delta="+52.4%"
              tone="success"
            />
          </div>

          {/* Chart */}
          <div className="mt-4 rounded-2xl border border-border-light bg-secondary-surface/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  Pipeline Growth
                </div>
                <div className="mt-0.5 font-serif text-xl text-foreground">
                  Last 12 weeks
                </div>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-success-light px-2 py-1 text-[11px] font-medium text-[#15803d]">
                <ArrowUpRight className="h-3 w-3" />
                42%
              </div>
            </div>
            <svg
              viewBox={`0 0 ${w} ${h}`}
              className="h-28 w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="heroArea" x1="0" x2="0" y1="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--primary)"
                    stopOpacity="0.28"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--primary)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <path d={area} fill="url(#heroArea)" />
              <motion.path
                d={path}
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
              />
              {chartPoints.map((p, i) => {
                const x = i * stepX;
                const y = h - (p / max) * h;
                if (i !== chartPoints.length - 1) return null;
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="var(--surface)"
                    stroke="var(--primary)"
                    strokeWidth="2"
                  />
                );
              })}
            </svg>
          </div>

          {/* Bottom row */}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <SmallCard
              icon={<Bot className="h-4 w-4" />}
              title="Automation"
              line1="2,431 messages"
              line2="response · 38s"
            />
            <SmallCard
              icon={<Target className="h-4 w-4" />}
              title="Campaigns"
              line1="6 active · ROAS 4.8x"
              line2="CPL ↓ ₹84"
            />
          </div>
        </motion.div>

        {/* Floating chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute -left-6 top-24 hidden rounded-2xl border border-border-light bg-surface px-4 py-3 shadow-[0_20px_60px_-30px_rgba(27,27,31,0.25)] md:block"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary">
              <TrendingUp className="h-4 w-4" />
            </span>
            <div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-muted">
                New lead
              </div>
              <div className="text-sm font-medium text-foreground">
                Dr. Mehta · Dental Clinic
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
  delta,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delta: string;
  tone: "primary" | "accent" | "success";
}) {
  const toneStyles = {
    primary: "bg-primary-light text-primary",
    accent: "bg-accent-light text-accent",
    success: "bg-success-light text-[#15803d]",
  }[tone];

  return (
    <div className="rounded-2xl border border-border-light bg-surface p-3">
      <div className="flex items-center justify-between">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-lg ${toneStyles}`}
        >
          {icon}
        </span>
        <span className="text-[10px] font-medium text-[#15803d]">{delta}</span>
      </div>
      <div className="mt-2.5 font-serif text-xl leading-none text-foreground">
        {value}
      </div>
      <div className="mt-1 text-[11px] text-muted">{label}</div>
    </div>
  );
}

function SmallCard({
  icon,
  title,
  line1,
  line2,
}: {
  icon: React.ReactNode;
  title: string;
  line1: string;
  line2: string;
}) {
  return (
    <div className="rounded-2xl border border-border-light bg-surface p-3">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary-surface text-foreground-secondary">
          {icon}
        </span>
        <span className="text-xs font-medium text-foreground">{title}</span>
      </div>
      <div className="mt-2 text-sm text-foreground">{line1}</div>
      <div className="text-[11px] text-muted">{line2}</div>
    </div>
  );
}
