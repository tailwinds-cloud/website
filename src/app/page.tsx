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

/* ------------------------------------------------------------------ page */

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />

      <main id="main" className="flex-1">
        {/* ------------------------------------------------ hero */}
        <section id="top" className="relative overflow-hidden bg-gradient-to-b from-mist via-white to-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-40 size-[38rem] rounded-full bg-cloud/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-60 -left-40 size-[28rem] rounded-full bg-azure/15 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:grid-cols-12 lg:px-8 lg:pb-28">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-navy shadow-sm ring-1 ring-navy/10">
                <span className="size-2 rounded-full bg-ocean" />
                AI consulting for small &amp; mid-sized businesses
              </p>
              <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-navy text-balance sm:text-5xl lg:text-6xl">
                AI that puts the <span className="text-ocean">wind at your back.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-ink text-pretty sm:text-xl">
                Tailwinds Cloud Technologies helps growing businesses turn AI from a buzzword into a real advantage — with
                practical strategy, hands-on coaching and the software to make it work.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.phone.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ocean px-7 py-3.5 font-semibold text-white shadow-lg shadow-ocean/30 transition hover:bg-navy"
                >
                  <Icon name="phone" className="size-5" />
                  Call {site.phone.display}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-navy ring-1 ring-navy/15 transition hover:ring-ocean"
                >
                  <Icon name="mail" className="size-5" />
                  Email us
                </a>
              </div>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-ink">
                {["Remote-first team", "Windsor, ON & Detroit, MI", "Serving Canada & the U.S."].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Icon name="check" className="size-4 text-ocean" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-[2rem] bg-white/70 p-8 shadow-2xl shadow-navy/10 ring-1 ring-navy/5 backdrop-blur sm:p-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/icon.webp" alt="" width={800} height={493} className="mx-auto w-full max-w-xs" />
                <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-navy/10 pt-6 text-center">
                  {[
                    ["70%", "AI focus"],
                    ["2", "Countries"],
                    ["1", "Point of contact"],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <dt className="sr-only">{l}</dt>
                      <dd className="font-display text-2xl font-extrabold text-navy">{v}</dd>
                      <dd className="mt-1 text-xs font-medium tracking-wide text-slate-ink uppercase">{l}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ value strip */}
        <section aria-label="Why clients choose us" className="border-y border-navy/10 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[
              ["Vendor-neutral", "Advice based on your needs, not a reseller agreement."],
              ["Plain English", "Clear recommendations your whole team can act on."],
              ["Built for SMBs", "Right-sized engagements with measurable ROI."],
              ["Privacy-first", "Your data stays yours — on both sides of the border."],
            ].map(([t, d]) => (
              <div key={t}>
                <p className="font-display font-bold text-navy">{t}</p>
                <p className="mt-1 text-sm text-slate-ink">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------ services */}
        <section id="services" className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Services"
              title="AI expertise first. Engineering that ships."
              intro="Most of our work helps businesses adopt AI with confidence. When you need software to bring it to life, our engineers build it."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {aiServices.map((s) => (
                <article
                  key={s.title}
                  className="group flex flex-col rounded-3xl border border-navy/10 bg-white p-7 transition hover:-translate-y-1 hover:border-azure/40 hover:shadow-xl hover:shadow-navy/5"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-mist text-ocean transition group-hover:bg-ocean group-hover:text-white">
                    <Icon name={s.icon} className="size-6" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-ink">{s.body}</p>
                  <ul className="mt-5 space-y-2 border-t border-navy/10 pt-5 text-sm text-ink">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <Icon name="check" className="mt-0.5 size-4 shrink-0 text-ocean" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-6 rounded-3xl bg-navy p-8 text-white sm:p-10 lg:grid-cols-3 lg:items-center">
              <div>
                <Eyebrow light>Software development</Eyebrow>
                <h3 className="mt-3 font-display text-2xl font-bold">The engineering behind the advice</h3>
                <p className="mt-3 text-mist/80">
                  Strategy is only as good as what gets built. Our developers make it real.
                </p>
              </div>
              {softwareServices.map((s) => (
                <div key={s.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <Icon name={s.icon} className="size-7 text-cloud" />
                  <h4 className="mt-4 font-display font-bold">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-mist/80">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ approach */}
        <section id="approach" className="relative overflow-hidden bg-navy py-24 text-white sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-48 -left-24 size-[36rem] rounded-full bg-ocean/40 blur-3xl"
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              light
              eyebrow="Our approach"
              title="A clear course from first conversation to lasting results"
              intro="Every engagement follows the same proven rhythm, scaled to your size and ambition."
            />
            <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n} className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur">
                  <span className="font-display text-sm font-extrabold tracking-widest text-cloud">{s.n}</span>
                  <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-mist/80">{s.body}</p>
                </li>
              ))}
            </ol>

            <div className="mt-20">
              <h3 className="font-display text-2xl font-bold">Ways to work together</h3>
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {engagements.map((e) => (
                  <div
                    key={e.name}
                    className={`flex flex-col rounded-3xl p-8 ${
                      e.featured ? "bg-white text-ink shadow-2xl shadow-black/20" : "bg-white/5 ring-1 ring-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h4 className={`font-display text-lg font-bold ${e.featured ? "text-navy" : ""}`}>{e.name}</h4>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          e.featured ? "bg-mist text-ocean" : "bg-white/10 text-cloud"
                        }`}
                      >
                        {e.length}
                      </span>
                    </div>
                    <p className={`mt-4 leading-relaxed ${e.featured ? "text-slate-ink" : "text-mist/80"}`}>{e.body}</p>
                    <ul className="mt-6 space-y-2 text-sm">
                      {e.points.map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <Icon name="check" className={`size-4 ${e.featured ? "text-ocean" : "text-cloud"}`} />
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
        <section aria-labelledby="examples-title" className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="What it looks like"
              title={<span id="examples-title">AI that earns its keep</span>}
              intro="A few illustrative examples of the kinds of problems we help small and mid-sized businesses solve."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {examples.map((x) => (
                <article key={x.title} className="rounded-3xl bg-mist/60 p-8 ring-1 ring-cloud/50">
                  <p className="text-xs font-semibold tracking-wider text-ocean uppercase">{x.sector}</p>
                  <h3 className="mt-3 font-display text-xl font-bold text-navy">{x.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-ink">{x.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ about */}
        <section id="about" className="border-t border-navy/10 bg-white py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <SectionHeading
                eyebrow="About us"
                title="Two cities. One border. One team in your corner."
              />
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-ink">
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
                <p>
                  Like a good tailwind, our job is to help you go further, faster — and make the journey feel easier
                  along the way.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: "globe" as const, t: "Remote-first", d: "Senior talent wherever it lives, collaborating in your time zone." },
                { icon: "compass" as const, t: "Cross-border", d: "Windsor, Ontario and Detroit, Michigan — fluent in both markets." },
                { icon: "shield" as const, t: "Trustworthy", d: "Transparent pricing, honest advice and no vendor kickbacks." },
                { icon: "coach" as const, t: "People-centred", d: "We measure success by what your team can do after we leave." },
              ].map((c) => (
                <div key={c.t} className="rounded-3xl border border-navy/10 p-6">
                  <Icon name={c.icon} className="size-7 text-ocean" />
                  <h3 className="mt-4 font-display font-bold text-navy">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-ink">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Insights />

        {/* ------------------------------------------------ faq */}
        <section id="faq" className="py-24 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionHeading center eyebrow="FAQ" title="Questions we hear often" />
            <div className="mt-12 divide-y divide-navy/10 rounded-3xl border border-navy/10">
              {faqs.map((f) => (
                <details key={f.q} className="group p-6 open:bg-mist/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display font-bold text-navy [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mist text-ocean transition group-open:rotate-45">
                      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-ink">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ contact */}
        <section id="contact" className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ocean to-navy px-6 py-16 text-white sm:px-12 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-cloud/30 blur-3xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/icon-white.webp"
              alt=""
              width={800}
              height={504}
              className="pointer-events-none absolute -right-10 -bottom-10 hidden w-96 opacity-10 lg:block"
            />
            <div className="relative max-w-2xl">
              <Eyebrow light>Contact</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
                Ready to catch the tailwind?
              </h2>
              <p className="mt-5 text-lg text-mist/85">
                Book a free 30-minute discovery call. We&apos;ll talk through your goals and leave you with at least one
                idea you can put to work right away — no strings attached.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a
                  href={site.phone.href}
                  className="group rounded-2xl bg-white p-6 text-navy shadow-xl shadow-black/10 transition hover:-translate-y-0.5"
                >
                  <Icon name="phone" className="size-6 text-ocean" />
                  <p className="mt-4 text-sm font-medium text-slate-ink">Call us</p>
                  <p className="mt-1 font-display text-xl font-bold">{site.phone.display}</p>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="group rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <Icon name="mail" className="size-6 text-cloud" />
                  <p className="mt-4 text-sm font-medium text-mist/80">Email us</p>
                  <p className="mt-1 font-display text-lg font-bold sm:text-xl">
                    {/* allow a clean wrap after "@" on narrow phones */}
                    {site.email.split("@")[0]}@<wbr />
                    {site.email.split("@")[1]}
                  </p>
                </a>
              </div>
              <p className="mt-8 text-sm text-mist/70">
                Existing client? Reach our support team at{" "}
                <a href={`mailto:${site.supportEmail}`} className="font-semibold text-white underline-offset-4 hover:underline">
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
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-horizontal-white.webp" alt={site.name} width={720} height={169} className="h-12 w-auto" />
            <p className="mt-4 max-w-xs text-sm">
              AI strategy, consulting, coaching and software for small and mid-sized businesses.
            </p>
          </div>
          <div>
            <h2 className="font-display text-sm font-bold tracking-wider text-white uppercase">Contact</h2>
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
          <div>
            <h2 className="font-display text-sm font-bold tracking-wider text-white uppercase">Where we work</h2>
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
