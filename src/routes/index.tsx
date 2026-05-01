import { createFileRoute } from "@tanstack/react-router";
import { WaitlistForm } from "@/components/WaitlistForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shamba Vue AI — Your farm. Always in sight." },
      {
        name: "description",
        content:
          "AI-powered farm monitoring for absentee owners. Daily WhatsApp reports, motion alerts, crop disease detection — no app required.",
      },
      { property: "og:title", content: "Shamba Vue AI" },
      {
        property: "og:description",
        content: "AI farm monitoring on WhatsApp. Join the waitlist.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

const BRAND = "SHAMBA VUE AI";

function Index() {
  return (
    <div className="w-full">
      {/* NAV */}
      <nav className="flex h-14 items-center justify-between bg-primary px-6 sm:px-10">
        <div className="flex items-center gap-2 text-sm font-bold tracking-wider text-primary-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {BRAND}
        </div>
        <a
          href="#waitlist"
          className="rounded-md bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground hover:opacity-90"
        >
          Join Waitlist
        </a>
      </nav>

      {/* HERO */}
      <section id="waitlist" className="relative overflow-hidden bg-primary px-6 py-14 text-center sm:px-10 sm:py-20">
        <span className="mb-5 inline-block rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent">
          Now accepting beta farms · East Africa
        </span>
        <h1 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">
          Your farm.<br />
          <span className="text-accent">Always in sight.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/65 sm:text-base">
          AI-powered monitoring for absentee farm owners. Get a daily WhatsApp report about your shamba — no app, no login required.
        </p>
        <div className="mt-7">
          <WaitlistForm />
        </div>

        <div className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/10 pt-7">
          {[
            { n: "AI", l: "Powered" },
            { n: "24/7", l: "Monitoring" },
            { n: "0", l: "Apps to Download" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl font-extrabold text-accent">{s.n}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-primary-foreground/45">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-6 py-14 sm:px-10">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-accent">The Problem</div>
        <h2 className="mt-2 text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
          Your farm is losing money<br />while you're away
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thousands own farms they rarely visit. Workers who don't show up, harvests stolen, and crops destroyed by disease — all while you have no idea.
        </p>
        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { t: "Worker absenteeism", d: "No way to verify if workers arrive, leave early, or don't come at all." },
            { t: "Crop theft", d: "Coffee, maize and matooke stolen before harvest with no evidence or alerts." },
            { t: "Zero visibility", d: "You rely entirely on caretaker phone calls you can't verify." },
            { t: "Crop disease", d: "Disease spreads undetected across fields, wiping out entire harvests." },
          ].map((p) => (
            <div key={p.t} className="rounded-xl border border-border bg-card p-4">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">●</div>
              <div className="text-sm font-bold text-primary">{p.t}</div>
              <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-6 h-px bg-border sm:mx-10" />

      {/* HOW IT WORKS */}
      <section className="px-6 py-14 sm:px-10">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-accent">How It Works</div>
        <h2 className="mt-2 text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
          Simple. WhatsApp.<br />No tech skills needed.
        </h2>
        <div className="mt-6">
          {[
            { t: "Subscribe via M-Pesa or MoMo", d: "Pay monthly with mobile money. No bank card, no app download required." },
            { t: "We install solar cameras on your farm", d: "Our team visits within 3 days. Solar cameras work through power cuts. Runs on 3G." },
            { t: "AI monitors your shamba 24/7", d: "Motion detection, crop disease scanning, worker arrival, weather — all automatic." },
            { t: "Get your daily Vue report every morning", d: "At 7am, your full farm status arrives on WhatsApp — alerts, photos, and AI advice in English or Kiswahili." },
          ].map((s, i) => (
            <div key={s.t} className="flex items-start gap-4 border-b border-dashed border-border py-4 last:border-b-0">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <div>
                <div className="text-sm font-bold text-primary">{s.t}</div>
                <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FARM REPORT DEMO */}
      <section className="px-6 pb-14 sm:px-10">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-accent">Daily Vue · Live Example</div>
        <h2 className="mt-2 text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
          What you receive<br />every morning
        </h2>
        <div className="mt-5 rounded-2xl bg-primary p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
              S
            </div>
            <div>
              <div className="text-sm font-bold text-primary-foreground">Daily Vue · Shamba Vue AI</div>
              <div className="text-[11px] text-primary-foreground/40">Today at 7:02am</div>
            </div>
          </div>
          <div className="text-xs leading-relaxed text-primary-foreground/85 sm:text-sm">
            <div className="font-semibold text-primary-foreground">
              Habari za asubuhi! Here is your Nakuru farm update for Wednesday:
            </div>
            <div className="mt-3 space-y-1.5">
              {[
                { c: "bg-green-400", t: "Workers: All 3 arrived at 6:51am — on time" },
                { c: "bg-blue-400", t: "Weather: Rain expected at 2pm — skip irrigation today" },
                { c: "bg-red-400", t: "Alert: Movement near east boundary at 2:18am — photo attached" },
                { c: "bg-accent", t: "Crop: Coffee in Field B shows early leaf rust — apply fungicide by Thursday" },
                { c: "bg-green-400", t: "Harvest forecast: Estimated 3rd week of June based on current growth" },
              ].map((r) => (
                <div key={r.t} className="flex items-start gap-2">
                  <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${r.c}`} />
                  <span>{r.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["WhatsApp delivery", "English or Kiswahili", "No app needed", "Works on 2G/3G"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary">
              <span className="text-green-700">✓</span> {t}
            </span>
          ))}
        </div>
      </section>

      <div className="mx-6 h-px bg-border sm:mx-10" />

      {/* FEATURES */}
      <section className="px-6 py-14 sm:px-10">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-accent">AI Features</div>
        <h2 className="mt-2 text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
          Everything your shamba<br />needs. Built in.
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { p: "AI", t: "Daily Vue report", d: "Full farm status every morning at 7am — workers, weather, crop health, alerts in one WhatsApp message." },
            { p: "Security", t: "Motion alerts", d: "AI detects people and animals at night. Instant photo alert on WhatsApp." },
            { p: "Crop AI", t: "Disease detection", d: "Photo a leaf, send to Shamba Vue on WhatsApp. AI identifies disease and recommends treatment." },
            { p: "Weather", t: "Farm-specific forecast", d: "Hyper-local weather for your GPS location. Irrigation, planting, harvest timing." },
            { p: "Workers", t: "Arrival tracking", d: "Know exactly when workers arrive and leave. AI alerts when they're late or absent." },
            { p: "Solar", t: "Offline-first hardware", d: "Solar cameras with SD backup. No footage lost during outages." },
          ].map((f) => (
            <div key={f.t} className="rounded-xl border border-border bg-card p-4">
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                {f.p}
              </span>
              <div className="mt-2 text-sm font-bold text-primary">{f.t}</div>
              <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.d}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-6 h-px bg-border sm:mx-10" />

      {/* PRICING */}
      <section className="px-6 py-14 sm:px-10">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-accent">Pricing</div>
        <h2 className="mt-2 text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
          Simple monthly plans.<br />Mobile money billing.
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <PriceCard
            tier="Basic"
            amount="KES 1,500"
            features={["1 camera", "Daily Vue report", "Motion alerts + photos", "Weather advisory"]}
          />
          <PriceCard
            tier="Standard"
            amount="KES 3,500"
            featured
            features={["3 cameras", "Worker arrival tracking", "Crop disease detection", "Productivity score"]}
          />
        </div>
        <div className="mt-3 flex items-center justify-between rounded-xl border border-border bg-card p-4">
          <div>
            <div className="text-sm font-bold text-primary">Diaspora Premium</div>
            <div className="text-xs text-muted-foreground">For owners abroad — billed in USD</div>
          </div>
          <div className="text-base font-extrabold text-accent">$50/mo</div>
        </div>
      </section>

      {/* DIASPORA BAND */}
      <section className="bg-accent px-6 py-10 text-center sm:px-10">
        <h3 className="text-lg font-extrabold text-accent-foreground sm:text-2xl">
          Own a farm back home<br />from anywhere in the world?
        </h3>
        <p className="mx-auto mt-2 max-w-md text-xs text-accent-foreground/80 sm:text-sm">
          Join hundreds of diaspora farm owners in the UK, USA, and UAE monitoring their shambas in real time.
        </p>
        <div className="mt-5">
          <WaitlistForm variant="diaspora" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary px-6 py-10 sm:px-10">
        <div className="text-base font-extrabold text-primary-foreground">🌿 Shamba Vue AI</div>
        <div className="mt-1 text-xs text-primary-foreground/40">
          Your farm. Always in sight. · East Africa
        </div>
        <div className="mt-5 flex flex-wrap gap-5 text-xs text-primary-foreground/55">
          <a href="#" className="hover:text-primary-foreground">How it works</a>
          <a href="#" className="hover:text-primary-foreground">Pricing</a>
          <a href="#" className="hover:text-primary-foreground">Contact us</a>
          <a href="#" className="hover:text-primary-foreground">WhatsApp us</a>
        </div>
        <div className="mt-5 border-t border-primary-foreground/10 pt-4 text-[11px] text-primary-foreground/30">
          © 2026 Shamba Vue AI · hello@shambavue.ai
        </div>
      </footer>
    </div>
  );
}

function PriceCard({
  tier,
  amount,
  features,
  featured,
}: {
  tier: string;
  amount: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div className={`rounded-2xl bg-card p-5 ${featured ? "border-2 border-primary" : "border border-border"}`}>
      {featured && (
        <span className="mb-2 inline-block rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
          Most Popular
        </span>
      )}
      <div className="text-sm font-bold text-primary">{tier}</div>
      <div className="mt-1 text-2xl font-extrabold text-primary">
        {amount} <span className="text-xs font-normal text-muted-foreground">/month</span>
      </div>
      <div className="mt-3 space-y-2">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-2 border-b border-border/50 py-1.5 text-xs text-muted-foreground last:border-b-0">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">✓</span>
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}
