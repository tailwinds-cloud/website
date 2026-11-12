import type { ReactNode } from "react";

/** Small section label. Sentence case on purpose: no tracked-out caps. */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`text-sm font-semibold ${light ? "text-cloud" : "text-ocean"}`}>{children}</p>;
}

/**
 * Editorial section header on a 12-column grid: a hairline rule across the container,
 * the label in the left 3 columns, the heading and intro in the right 9.
 * Section content lines up with the heading at lg:col-start-4.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  aside?: ReactNode;
}) {
  return (
    <div className={`grid gap-x-8 gap-y-4 border-t pt-6 lg:grid-cols-12 ${light ? "border-white/25" : "border-navy/15"}`}>
      <div className="lg:col-span-3">
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </div>
      <div className="lg:col-span-9">
        <h2
          className={`max-w-4xl font-display text-4xl leading-[1.05] font-bold tracking-[-0.025em] text-balance sm:text-5xl ${light ? "text-white" : "text-navy"}`}
        >
          {title}
        </h2>
        {intro ? (
          <p className={`mt-5 max-w-2xl text-lg leading-relaxed text-pretty ${light ? "text-mist/80" : "text-slate-ink"}`}>
            {intro}
          </p>
        ) : null}
        {aside}
      </div>
    </div>
  );
}
