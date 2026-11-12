import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`font-display text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-cloud" : "text-ocean"}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-4 text-lg leading-relaxed text-pretty ${light ? "text-mist/80" : "text-slate-ink"}`}>{intro}</p>
      ) : null}
    </div>
  );
}
