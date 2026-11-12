import { Header } from "@/components/header";
import { Icon, type IconName } from "@/components/icons";
import { Insights } from "@/components/insights";
import { Eyebrow, SectionHeading } from "@/components/section";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------ content */

const aiServices: { icon: IconName; title: string; body: string; points: string[] }[] = [
  {
    icon: "compass",
    title: "AI Strategy & Roadmapping",
    body: "Cut through the hype and find where AI will actually move the needle for your business — then get a clear, prioritized plan to get there.",
    points: ["Opportunity & ROI mapping", "12-month AI roadmap", "Build vs. buy guidance"],
  },
  {
    icon: "spark",
    title: "AI Readiness Assessment",
    body: "A fast, structured look at your data, systems, people and risk posture so you know exactly what's ready today and what needs work first.",
    points: ["Data & systems audit", "Risk & governance review", "Quick-win shortlist"],
  },
  {
    icon: "agent",
    title: "AI Implementation & Automation",
    body: "We design and ship practical AI: assistants grounded in your own documents, agents that handle repetitive workflows, and integrations with the tools you already use.",
    points: ["Custom assistants & agents", "Workflow automation", "LLM integrations & evaluation"],
  },
  {
    icon: "coach",
    title: "AI Coaching & Team Enablement",
    body: "Hands-on workshops and ongoing coaching that turn your team into confident, responsible AI users — not just spectators.",
    points: ["Leadership briefings", "Role-based workshops", "Prompting & tooling playbooks"],
  },
  {
    icon: "helm",
    title: "Fractional AI Leadership",
    body: "Senior AI guidance on a part-time basis. We sit at your table, steer your initiatives and help you hire, without the cost of a full-time executive.",
    points: ["Monthly advisory retainer", "Vendor & tool selection", "Board-ready reporting"],
  },
  {
    icon: "shield",
    title: "Responsible AI & Governance",
    body: "Policies, guardrails and privacy practices that let you move quickly with AI while protecting your customers, your data and your reputation.",
    points: ["AI acceptable-use policy", "PIPEDA & U.S. privacy alignment", "Human-in-the-loop design"],
  },
];

const softwareServices: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "code",
    title: "Custom Software & Integrations",
    body: "Web apps, internal tools, APIs and integrations built with modern, maintainable stacks — designed to grow with you.",
  },
  {
    icon: "cloud",
    title: "Cloud & Modernization",
    body: "Move legacy systems to the cloud, tame spreadsheets-as-software, and set up the data foundations AI needs to succeed.",
  },
];

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We listen first. A focused discovery call and short assessment uncover your goals, constraints and the highest-value opportunities.",
  },
  {
    n: "02",
    title: "Chart the course",
    body: "You get a plain-English plan: what to do, in what order, what it costs and how we'll measure success. No jargon, no lock-in.",
  },
  {
    n: "03",
    title: "Build & launch",
    body: "We deliver in short, visible iterations — pilots first, then production — so you see value in weeks, not quarters.",
  },
  {
    n: "04",
    title: "Coach & scale",
    body: "We train your people, hand over clean documentation and stay on call as your crew takes the helm.",
  },
];

const engagements = [
  {
    name: "AI Jumpstart",
    length: "2–3 weeks",
    body: "A readiness assessment and prioritized roadmap. The fastest way to know where you stand and what to do next.",
    points: ["Stakeholder interviews", "Readiness report", "Roadmap & quick wins"],
  },
  {
    name: "Pilot to Production",
    length: "6–12 weeks",
    body: "We take one high-value use case from idea to a working solution in the hands of your team.",
    points: ["Proof of concept", "Production build", "Training & hand-off"],
    featured: true,
  },
  {
    name: "Fractional Partner",
    length: "Monthly",
    body: "Ongoing strategy, coaching and engineering capacity on a predictable retainer.",
    points: ["Dedicated advisor", "Flexible build hours", "Quarterly roadmap reviews"],
  },
];

// Illustrative scenarios (not client case studies) — replace with real outcomes as they land.
const examples = [
  {
    sector: "Professional services",
    title: "From inbox overload to a 24/7 intake assistant",
    body: "An assistant grounded in the firm's own FAQs and policies answers routine client questions and routes complex ones to the right person.",
  },
  {
    sector: "Manufacturing & automotive supply",
    title: "Turning tribal knowledge into searchable answers",
    body: "Decades of manuals, SOPs and tickets become a secure internal search tool that helps new technicians get up to speed faster.",
  },
  {
    sector: "Retail & e-commerce",
    title: "Hours of manual reporting, automated",
    body: "A lightweight data pipeline and AI summaries replace weekly spreadsheet wrangling with a dashboard and plain-language insights.",
  },
];

const faqs = [
  {
    q: "We're a small business. Is AI really worth it for us?",
    a: "Often more than for large enterprises — small teams feel every hour saved. We start with a low-cost assessment so you only invest where there's a clear return.",
  },
  {
    q: "Do you work with clients in both Canada and the United States?",
    a: "Yes. We're a remote-first, cross-border team rooted in the Windsor–Detroit region, and we work with businesses throughout Canada and the U.S. We can invoice in CAD or USD.",
  },
  {
    q: "Which AI tools and models do you use?",
    a: "We're vendor-neutral. We recommend whatever fits your needs, budget and privacy requirements — from off-the-shelf tools like Microsoft Copilot or ChatGPT to custom solutions built on leading models.",
  },
  {
    q: "What happens to our data?",
    a: "Your data stays yours. We design with privacy first, follow Canadian (PIPEDA) and U.S. privacy expectations, and will never use your information to train public models.",
  },
  {
    q: "How do we get started?",
    a: `Call us at ${site.phone.display} or email ${site.email}. We'll set up a free 30-minute discovery call to understand your goals and suggest a sensible first step.`,
  },
];

/* ------------------------------------------------------------------ art */

/** Streamlines swept up and to the right, like the arrow in the mark: the one decorative motif. */
function WindLines({ className = "" }: { className?: string }) {
  const lines = [
    [0, 0.9, 1.6],
    [26, 0.7, 1.2],
    [52, 0.55, 1],
    [78, 0.4, 1],
    [104, 0.3, 1],
    [130, 0.2, 1],
  ] as const;
  return (
    <svg viewBox="0 0 1200 560" fill="none" aria-hidden className={className} preserveAspectRatio="xMaxYMax slice">
      {lines.map(([d, o, w]) => (
        <path
          key={d}
          d={`M-40 ${560 - d * 0.4} C 360 ${560 - d * 0.6}, 760 ${470 - d}, 1240 ${70 - d * 0.5}`}
          stroke="currentColor"
          strokeOpacity={o}
          strokeWidth={w}
        />
      ))}
    </svg>
  );
}

/** Hand-drawn underline in the shape of the swoosh, used once under the headline. */
function Swoosh({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 24" fill="none" aria-hidden className={className} preserveAspectRatio="none">
      <path d="M3 19 C 80 22, 190 18, 296 4" stroke="currentColor" strokeWidth={6} strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ page */

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />

      <main id="main" className="flex-1">
        {/* ------------------------------------------------ hero */}
        <section id="top" className="relative overflow-hidden bg-white">
          <WindLines className="pointer-events-none absolute right-0 bottom-0 h-[55%] w-full text-azure/35 lg:w-[70%]" />
          <div className="relative mx-auto grid max-w-7xl gap-x-8 gap-y-16 px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:grid-cols-12 lg:px-8 lg:pt-28 lg:pb-32">
            <div className="lg:col-span-8">
              <p className="flex items-center gap-3 text-sm font-semibold text-ocean">
                <span aria-hidden className="h-px w-8 bg-ocean" />
                AI consulting for small &amp; mid-sized businesses
              </p>
              <h1 className="mt-8 font-display text-5xl leading-[0.98] font-extrabold tracking-[-0.035em] text-navy text-balance sm:text-6xl lg:text-[5.5rem]">
                AI that puts the wind at{" "}
                <span className="relative inline-block whitespace-nowrap">
                  your back.
                  <Swoosh className="absolute -bottom-2 left-0 h-3 w-[105%] text-azure sm:-bottom-3 sm:h-4" />
                </span>
              </h1>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-slate-ink text-pretty sm:text-xl">
                Tailwinds Cloud Technologies helps growing businesses turn AI from a buzzword into a real advantage — with
                practical strategy, hands-on coaching and the software to make it work.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.phone.href}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-ocean px-6 py-3.5 font-semibold text-white transition hover:bg-navy"
                >
                  <Icon name="phone" className="size-5" />
                  Call {site.phone.display}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-navy/20 bg-white px-6 py-3.5 font-semibold text-navy transition hover:border-navy"
                >
                  <Icon name="mail" className="size-5" />
                  Email us
                </a>
              </div>
              <ul className="mt-10 flex flex-col gap-y-1 text-sm text-slate-ink sm:flex-row sm:flex-wrap">
                {["Remote-first team", "Windsor, ON & Detroit, MI", "Serving Canada & the U.S."].map((t, i) => (
                  <li key={t} className={i ? "sm:ml-4 sm:border-l sm:border-navy/20 sm:pl-4" : ""}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="self-end lg:col-span-3 lg:col-start-10">
              {[
                ["100%", "AI enablement and cloud focused"],
                ["2", "Countries"],
                ["1", "Point of contact"],
              ].map(([v, l]) => (
                <div key={l} className="flex items-baseline justify-between gap-6 border-t border-navy/15 py-4 lg:flex-col-reverse lg:items-start lg:gap-1">
                  <dt className="text-sm text-slate-ink">{l}</dt>
                  <dd className="font-display text-5xl font-bold tracking-[-0.03em] text-navy tabular-nums lg:text-6xl">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ------------------------------------------------ value strip */}
        <section aria-label="Why clients choose us" className="bg-navy text-white">
          <div className="mx-auto grid max-w-7xl px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[
              ["Vendor-neutral", "Advice based on your needs, not a reseller agreement."],
              ["Plain English", "Clear recommendations your whole team can act on."],
              ["Built for SMBs", "Right-sized engagements with measurable ROI."],
              ["Privacy-first", "Your data stays yours — on both sides of the border."],
            ].map(([t, d], i) => (
              <div
                key={t}
                className={`py-8 sm:pr-8 ${i ? "border-t border-white/15 sm:border-t-0" : ""} ${i % 2 ? "sm:border-l sm:border-white/15 sm:pl-8" : ""} ${i === 2 ? "lg:border-l lg:border-white/15 lg:pl-8" : ""}`}
              >
                <p className="font-display font-bold">{t}</p>
                <p className="mt-1 text-sm text-mist/75">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------ services */}
        <section id="services" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Services"
              title="AI expertise first. Engineering that ships."
              intro="Most of our work helps businesses adopt AI with confidence. When you need software to bring it to life, our engineers build it."
            />

            <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <ul className="border-b border-navy/15 lg:col-span-9 lg:col-start-4">
                {aiServices.map((s) => (
                  <li key={s.title} className="grid gap-x-8 gap-y-3 border-t border-navy/15 py-8 md:grid-cols-9">
                    <h3 className="font-display text-xl leading-snug font-bold text-navy md:col-span-3">{s.title}</h3>
                    <div className="md:col-span-6">
                      <p className="leading-relaxed text-slate-ink">{s.body}</p>
                      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-navy">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-center gap-2">
                            <span aria-hidden className="size-1.5 bg-azure" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-20 grid gap-x-8 gap-y-10 rounded-xl bg-mist px-6 py-10 sm:px-10 lg:grid-cols-12 lg:py-12">
              <div className="lg:col-span-4">
                <Eyebrow>Software development</Eyebrow>
                <h3 className="mt-3 font-display text-3xl leading-tight font-bold tracking-[-0.02em] text-navy">
                  The engineering behind the advice
                </h3>
                <p className="mt-3 text-slate-ink">Strategy is only as good as what gets built. Our developers make it real.</p>
              </div>
              {softwareServices.map((s) => (
                <div key={s.title} className="border-t border-navy/15 pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                  <h4 className="font-display text-lg font-bold text-navy">{s.title}</h4>
                  <p className="mt-2 leading-relaxed text-slate-ink">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ approach */}
        <section id="approach" className="bg-navy py-24 text-white sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              light
              eyebrow="Our approach"
              title="A clear course from first conversation to lasting results"
              intro="Every engagement follows the same proven rhythm, scaled to your size and ambition."
            />
            <ol className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n} className="relative border-t border-white/25 pt-8">
                  <span aria-hidden className="absolute -top-[5px] left-0 size-[9px] bg-cloud" />
                  <span className="font-display text-sm font-bold text-cloud tabular-nums">{s.n}</span>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em]">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-mist/75">{s.body}</p>
                </li>
              ))}
            </ol>

            <div className="mt-28">
              <div className="grid gap-x-8 border-t border-white/25 pt-6 lg:grid-cols-12">
                <h3 className="font-display text-3xl font-bold tracking-[-0.02em] lg:col-span-9 lg:col-start-4">
                  Ways to work together
                </h3>
              </div>
              <div className="mt-12 grid gap-x-8 gap-y-12 lg:grid-cols-12">
                <div className="hidden lg:col-span-3 lg:block" />
                {engagements.map((e) => (
                  <div
                    key={e.name}
                    className={`flex flex-col pt-6 lg:col-span-3 ${e.featured ? "border-t-4 border-cloud" : "border-t border-white/25"}`}
                  >
                    <p className={`text-sm font-semibold ${e.featured ? "text-cloud" : "text-mist/70"}`}>{e.length}</p>
                    <h4 className="mt-1 font-display text-2xl font-bold tracking-[-0.02em]">{e.name}</h4>
                    <p className="mt-4 leading-relaxed text-mist/75">{e.body}</p>
                    <ul className="mt-6 divide-y divide-white/10 border-y border-white/10 text-sm">
                      {e.points.map((p) => (
                        <li key={p} className="py-2.5">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ examples */}
        <section aria-labelledby="examples-title" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="What it looks like"
              title={<span id="examples-title">AI that earns its keep</span>}
              intro="A few illustrative examples of the kinds of problems we help small and mid-sized businesses solve."
            />
            <div className="mt-16 grid gap-x-8 gap-y-12 lg:grid-cols-12">
              <div className="hidden lg:col-span-3 lg:block" />
              {examples.map((x) => (
                <article key={x.title} className="border-t-2 border-navy pt-6 lg:col-span-3">
                  <p className="text-sm font-semibold text-ocean">{x.sector}</p>
                  <h3 className="mt-3 font-display text-xl leading-snug font-bold text-navy">{x.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-ink">{x.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ about */}
        <section id="about" className="bg-mist py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="About us" title="Two cities. One border. One team in your corner." />
            <div className="mt-12 grid gap-x-8 gap-y-14 lg:grid-cols-12">
              <div className="space-y-5 text-lg leading-relaxed text-slate-ink lg:col-span-5 lg:col-start-4">
                <p>
                  Tailwinds Cloud Technologies was founded on a simple idea: the AI revolution shouldn&apos;t be reserved
                  for companies with Silicon Valley budgets. Small and mid-sized businesses deserve the same expertise —
                  delivered with honesty, clarity and care.
                </p>
                <p>
                  We&apos;re a remote-first, cross-border team rooted in the Windsor–Detroit corridor, one of North
                  America&apos;s busiest hubs of industry and innovation. That means we understand the realities of
                  running a business in both Canada and the U.S., and we bring the same hands-on, roll-up-your-sleeves
                  approach to every client, wherever you are.
                </p>
                <p className="font-display text-2xl leading-snug font-bold tracking-[-0.015em] text-navy">
                  Like a good tailwind, our job is to help you go further, faster — and make the journey feel easier
                  along the way.
                </p>
              </div>
              <dl className="lg:col-span-4 lg:col-start-9">
                {[
                  { t: "Remote-first", d: "Senior talent wherever it lives, collaborating in your time zone." },
                  { t: "Cross-border", d: "Windsor, Ontario and Detroit, Michigan — fluent in both markets." },
                  { t: "Trustworthy", d: "Transparent pricing, honest advice and no vendor kickbacks." },
                  { t: "People-centred", d: "We measure success by what your team can do after we leave." },
                ].map((c) => (
                  <div key={c.t} className="border-t border-navy/15 py-5 first:border-t-2 first:border-navy">
                    <dt className="font-display font-bold text-navy">{c.t}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-slate-ink">{c.d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <Insights />

        {/* ------------------------------------------------ faq */}
        <section id="faq" className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="FAQ" title="Questions we hear often" />
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="border-b border-navy/15 lg:col-span-9 lg:col-start-4">
                {faqs.map((f) => (
                  <details key={f.q} className="group border-t border-navy/15">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-lg font-bold text-navy transition hover:text-ocean [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <svg
                        viewBox="0 0 24 24"
                        className="mt-1 size-5 shrink-0 text-ocean transition group-open:rotate-45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden
                      >
                        <path d="M12 4v16M4 12h16" />
                      </svg>
                    </summary>
                    <p className="max-w-2xl pb-6 leading-relaxed text-slate-ink">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ contact */}
        <section id="contact" className="relative overflow-hidden bg-ocean text-white">
          <WindLines className="pointer-events-none absolute right-0 bottom-0 h-1/2 w-full text-white/20" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/icon-white.webp"
            alt=""
            width={800}
            height={504}
            className="pointer-events-none absolute -right-16 -bottom-16 hidden w-[32rem] opacity-15 lg:block"
          />
          <div className="relative mx-auto grid max-w-7xl gap-x-8 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-3">
              <p className="text-sm font-semibold text-white/80">Contact</p>
            </div>
            <div className="mt-4 lg:col-span-8 lg:mt-0">
              <h2 className="font-display text-5xl leading-[0.98] font-extrabold tracking-[-0.035em] text-balance sm:text-7xl">
                Ready to catch the tailwind?
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-white/85">
                Book a free 30-minute discovery call. We&apos;ll talk through your goals and leave you with at least one
                idea you can put to work right away — no strings attached.
              </p>
              <div className="mt-12 grid gap-x-8 sm:grid-cols-2">
                <a href={site.phone.href} className="group border-t border-white/40 py-5 transition hover:border-white">
                  <p className="flex items-center gap-2 text-sm font-medium text-white/75">
                    <Icon name="phone" className="size-4" />
                    Call us
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold">{site.phone.display}</p>
                </a>
                <a href={`mailto:${site.email}`} className="group border-t border-white/40 py-5 transition hover:border-white">
                  <p className="flex items-center gap-2 text-sm font-medium text-white/75">
                    <Icon name="mail" className="size-4" />
                    Email us
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold">
                    {/* allow a clean wrap after "@" on narrow phones */}
                    {site.email.split("@")[0]}@<wbr />
                    {site.email.split("@")[1]}
                  </p>
                </a>
              </div>
              <p className="mt-8 text-sm text-white/75">
                Existing client? Reach our support team at{" "}
                <a href={`mailto:${site.supportEmail}`} className="font-semibold text-white underline underline-offset-4">
                  {site.supportEmail}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------------------------ footer */}
      <footer className="bg-navy text-mist/80">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-12 lg:px-8">
          <div className="md:col-span-6 lg:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-horizontal-white.webp" alt={site.name} width={720} height={169} className="h-12 w-auto" />
            <p className="mt-4 max-w-xs text-sm">
              AI strategy, consulting, coaching and software for small and mid-sized businesses.
            </p>
          </div>
          <div className="md:col-span-3 lg:col-start-7">
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={site.phone.href} className="hover:text-white">{site.phone.display}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
              <li>
                <a href={`mailto:${site.supportEmail}`} className="hover:text-white">{site.supportEmail}</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 lg:col-start-10">
            <h2 className="text-sm font-semibold text-white">Where we work</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Windsor, Ontario, Canada</li>
              <li>Detroit, Michigan, USA</li>
              <li>Remote across North America</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl px-4 py-6 text-xs sm:px-6 lg:px-8">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
