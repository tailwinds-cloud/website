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
    <section id="insights" className="bg-mist/60 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="What's moving in AI and software"
            intro="We read the industry so you don't have to. Here are the latest headlines from TLDR's daily AI and developer newsletters — the same signals we use to keep our clients' roadmaps current."
          />
          <p className="shrink-0 text-sm text-slate-ink">
            Updated {updated} · via{" "}
            <a href="https://tldr.tech" className="font-semibold text-ocean hover:underline" rel="noopener" target="_blank">
              TLDR
            </a>
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {data.feeds.map((feed) => (
            <div key={feed.id} className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between">
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
                <ol className="mt-6 divide-y divide-navy/10">
                  {feed.items.map((item) => (
                    <li key={item.link}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener"
                        className="group -mx-3 block rounded-2xl px-3 py-4 transition hover:bg-mist/70"
                      >
                        <time dateTime={item.date} className="text-xs font-semibold uppercase tracking-wider text-azure">
                          {fmt.format(new Date(item.date))}
                        </time>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {headlines(item.title).map((h) => (
                            <li
                              key={h}
                              className="rounded-full bg-mist px-3 py-1 text-sm text-navy ring-1 ring-cloud/60 group-hover:bg-white"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
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
