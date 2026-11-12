import data from "@/data/tldr.json";
import { Icon } from "./icons";
import { SectionHeading } from "./section";

const fmt = new Intl.DateTimeFormat("en-CA", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

// Each TLDR issue title is a comma-separated list of headlines ("Foo ⚡, Bar 📊, …").
const headlines = (title: string) =>
  title
    .split(/,\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

export function Insights() {
  const updated = fmt.format(new Date(data.updated));
  return (
    <section id="insights" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights"
          title="What's moving in AI and software"
          intro="We read the industry so you don't have to. Here are the latest headlines from TLDR's daily AI and developer newsletters — the same signals we use to keep our clients' roadmaps current."
          aside={
            <p className="mt-4 text-sm text-slate-ink">
              Updated {updated} · via{" "}
              <a href="https://tldr.tech" className="font-semibold text-ocean hover:underline" rel="noopener" target="_blank">
                TLDR
              </a>
            </p>
          }
        />

        <div className="mt-14 grid gap-x-8 gap-y-14 lg:grid-cols-12">
          {data.feeds.map((feed, i) => (
            <div key={feed.id} className={`lg:col-span-4 ${i === 0 ? "lg:col-start-4" : ""} ${i === 1 ? "lg:col-span-5" : ""}`}>
              <div className="flex items-baseline justify-between border-b-2 border-navy pb-3">
                <h3 className="font-display text-lg font-bold text-navy">{feed.name}</h3>
                <a
                  href={feed.home}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-ocean hover:underline"
                >
                  All issues <Icon name="external" className="size-4" />
                </a>
              </div>

              {feed.items.length === 0 ? (
                <p className="mt-6 text-slate-ink">Fresh headlines are on their way — check back soon.</p>
              ) : (
                <ol className="divide-y divide-navy/10">
                  {feed.items.map((item) => (
                    <li key={item.link}>
                      <a href={item.link} target="_blank" rel="noopener" className="group grid grid-cols-[5.5rem_1fr] gap-4 py-4">
                        <time dateTime={item.date} className="pt-0.5 text-xs font-semibold text-slate-ink tabular-nums">
                          {fmt.format(new Date(item.date))}
                        </time>
                        <span className="text-[15px] leading-relaxed text-navy group-hover:text-ocean">
                          {headlines(item.title).map((h, j) => (
                            <span key={h}>
                              {j ? <span aria-hidden className="px-2 text-azure">/</span> : null}
                              {h}
                            </span>
                          ))}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
