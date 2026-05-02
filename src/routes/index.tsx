import { createFileRoute } from "@tanstack/react-router";
import { WaitlistForm } from "@/components/WaitlistForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shamba Vue AI — Your farm. Always in sight." },
      {
        name: "description",
        content:
          "AI-powered farm monitoring for absentee owners. Daily WhatsApp report, motion alerts, crop disease detection — no app required.",
      },
      { property: "og:title", content: "Shamba Vue AI" },
      {
        property: "og:description",
        content: "AI farm monitoring on WhatsApp. Join the waitlist.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
        media: "print",
        onLoad: "this.media='all'",
      },
    ],
  }),
  component: Index,
});

const BRAND = "SHAMBA VUE AI";

function Index() {
  return (
    <div className="pg w-full" style={{ fontFamily: "'Inter', sans-serif", background: "#FFFDE7", color: "#1B2E1B" }}>
      {/* NAV */}
      <div className="flex h-[52px] items-center justify-between px-8" style={{ background: "#1B5E20" }}>
        <div className="flex items-center gap-2 text-[15px] font-bold tracking-wider" style={{ color: "#FFFDE7" }}>
          <div className="h-2 w-2 rounded-full" style={{ background: "#F57F17" }} />
          {BRAND}
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScF2DhnU1FnyReKAlrp2pkykVigmFqAAgKPhJziQJt6-n-6kw/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md px-4 py-[7px] text-xs font-semibold"
          style={{ background: "#F57F17", color: "#FFFDE7" }}
        >
          Join Waitlist
        </a>
      </div>

      {/* HERO */}
      <div id="waitlist" className="relative overflow-hidden px-10 pb-12 pt-14 text-center" style={{ background: "#1B5E20" }}>
        <div
          className="mb-5 inline-block rounded-full px-[14px] py-[5px] text-[11px] font-semibold uppercase tracking-[0.1em]"
          style={{ background: "rgba(245,127,23,0.18)", color: "#F57F17", border: "1px solid rgba(245,127,23,0.3)" }}
        >
          Now accepting beta farms · Uganda
        </div>
        <h1 className="mx-auto mb-[14px] max-w-[480px] text-[32px] font-extrabold leading-[1.15]" style={{ color: "#FFFDE7" }}>
          Your farm.<br />
          <span style={{ color: "#F57F17" }}>Always in sight.</span>
        </h1>
        <p className="mx-auto mb-7 max-w-[380px] text-sm leading-[1.7]" style={{ color: "rgba(255,253,231,0.65)" }}>
          AI-powered monitoring for absentee farm owners. Get a daily WhatsApp report about your farm — no app, no login required.
        </p>
        <WaitlistForm />
        <div className="mt-11 flex justify-center gap-10 border-t pt-7" style={{ borderColor: "rgba(255,253,231,0.1)" }}>
          {[
            { n: "AI", l: "Powered" },
            { n: "24/7", l: "Monitoring" },
            { n: "0", l: "Apps to Download" },
          ].map((s) => (
            <div key={s.l}>
              <span className="block text-[22px] font-extrabold" style={{ color: "#F57F17" }}>{s.n}</span>
              <span className="block text-[11px] uppercase tracking-[0.06em]" style={{ color: "rgba(255,253,231,0.45)" }}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <div className="px-10 py-12">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#F57F17" }}>The Problem</div>
        <div className="mb-2 text-[22px] font-extrabold leading-[1.25]" style={{ color: "#1B5E20" }}>
          Your farm is losing money<br />while you're away
        </div>
        <p className="mb-7 max-w-[420px] text-[13px] leading-[1.65]" style={{ color: "#5a7a62" }}>
          Thousands of Ugandans own farms they rarely visit. The result? Workers who don't show up, harvests stolen, and crops destroyed by disease — all while you have no idea.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { t: "Worker absenteeism", d: "No way to verify if workers arrive, leave early, or don't come at all." },
            { t: "Crop theft", d: "Coffee, matooke and maize stolen before harvest with no evidence or alerts." },
            { t: "Zero visibility", d: "You rely entirely on caretaker phone calls you can't verify." },
            { t: "Crop disease", d: "Disease spreads undetected across fields, wiping out entire harvests." },
          ].map((p) => (
            <div key={p.t} className="rounded-[10px] bg-white px-[18px] py-4" style={{ border: "1px solid #c8e6d0" }}>
              <div className="mb-[10px] flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "#FFF8E1", color: "#F57F17" }}>●</div>
              <div className="mb-1 text-[13px] font-bold" style={{ color: "#1B5E20" }}>{p.t}</div>
              <div className="text-xs leading-[1.55]" style={{ color: "#5a7a62" }}>{p.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-10 h-px" style={{ background: "#c8e6d0" }} />

      {/* HOW IT WORKS */}
      <div className="px-10 py-12">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#F57F17" }}>How It Works</div>
        <div className="mb-2 text-[22px] font-extrabold leading-[1.25]" style={{ color: "#1B5E20" }}>
          Simple. WhatsApp.<br />No tech skills needed.
        </div>
        <div className="mt-7 flex flex-col">
          {[
            { t: "Subscribe via MTN MoMo", d: "Pay monthly using your MTN or Airtel Mobile Money. No bank card, no app download required." },
            { t: "We install solar cameras on your farm", d: "Our team visits within 3 days. Solar-powered cameras work through power cuts. Works on MTN 3G coverage." },
            { t: "AI monitors your farm 24/7", d: "Motion detection, crop disease scanning, worker arrival tracking, weather monitoring — all automatic." },
            { t: "Get your FarmBrain report every morning", d: "At 7am, your farm's full status arrives on WhatsApp. Alerts, photos, and AI advice — in plain English." },
          ].map((s, i) => (
            <div key={s.t} className="flex items-start gap-4 py-4 last:border-b-0" style={{ borderBottom: "1px dashed #c8e6d0" }}>
              <div className="mt-[2px] flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-bold" style={{ background: "#1B5E20", color: "#FFFDE7" }}>
                {i + 1}
              </div>
              <div>
                <div className="mb-[3px] text-sm font-bold" style={{ color: "#1B5E20" }}>{s.t}</div>
                <div className="text-xs leading-[1.55]" style={{ color: "#5a7a62" }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FARMBRAIN DEMO */}
      <div className="px-10 pb-12">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#F57F17" }}>FarmBrain · Live Example</div>
        <div className="mb-2 text-[22px] font-extrabold leading-[1.25]" style={{ color: "#1B5E20" }}>
          What you receive<br />every morning
        </div>
        <div className="mb-4 mt-7 rounded-[14px] p-5" style={{ background: "#1B5E20" }}>
          <div className="mb-[14px] flex items-center gap-[10px]">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: "#F57F17" }}>F</div>
            <div>
              <div className="text-[13px] font-bold" style={{ color: "#FFFDE7" }}>FarmBrain · Shamba Vue AI</div>
              <div className="text-[11px]" style={{ color: "rgba(255,253,231,0.4)" }}>Today at 7:02am</div>
            </div>
          </div>
          <div className="text-xs leading-[1.7]" style={{ color: "rgba(255,253,231,0.85)" }}>
            <div className="font-semibold" style={{ color: "#FFFDE7" }}>Good morning! Here is your Masaka farm update for Wednesday:</div>
            <br />
            {[
              { c: "#4CAF50", t: "Workers: All 3 arrived at 6:51am — on time" },
              { c: "#42A5F5", t: "Weather: Rain expected at 2pm — skip irrigation today" },
              { c: "#ef5350", t: "Alert: Movement near east boundary at 2:18am — photo attached" },
              { c: "#F57F17", t: "Crop: Coffee in Field B shows early leaf rust — apply fungicide by Thursday" },
              { c: "#4CAF50", t: "Harvest forecast: Estimated 3rd week of June based on current growth" },
            ].map((r) => (
              <div key={r.t} className="mb-1 flex items-baseline gap-[6px]">
                <div className="mt-[5px] h-[6px] w-[6px] flex-shrink-0 rounded-full" style={{ background: r.c }} />
                <span>{r.t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {["WhatsApp delivery", "English", "No app needed", "Works on 2G/3G"].map((t) => (
            <div key={t} className="flex items-center gap-[6px] rounded-full bg-white px-[14px] py-[7px] text-xs font-medium" style={{ border: "1px solid #c8e6d0", color: "#1B5E20" }}>
              <div className="flex h-4 w-4 items-center justify-center rounded-full text-[9px]" style={{ background: "#E8F5E9", color: "#2E7D32" }}>✓</div>
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-10 h-px" style={{ background: "#c8e6d0" }} />

      {/* FEATURES */}
      <div className="px-10 py-12">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#F57F17" }}>AI Features</div>
        <div className="mb-2 text-[22px] font-extrabold leading-[1.25]" style={{ color: "#1B5E20" }}>
          Everything your farm<br />needs. Built in.
        </div>
        <div className="mt-7 grid grid-cols-2 gap-3">
          {[
            { p: "AI", t: "FarmBrain daily report", d: "Full farm status every morning at 7am — workers, weather, crop health, and alerts in one WhatsApp message." },
            { p: "Security", t: "Motion alerts", d: "AI detects people and animals at night. Instant photo alert on WhatsApp — know within seconds." },
            { p: "Crop AI", t: "Disease detection", d: "Photo a leaf, send to Shamba Vue AI on WhatsApp. AI identifies the disease and recommends treatment instantly." },
            { p: "Weather", t: "Farm-specific forecast", d: "Hyper-local weather for your exact GPS location. Irrigation advice, planting windows, harvest timing." },
            { p: "Workers", t: "Arrival tracking", d: "Know the exact time workers arrive and leave every day. AI alerts you when they're late or absent." },
            { p: "Solar", t: "Offline-first hardware", d: "Solar-powered cameras with SD backup. No footage lost during power cuts or network outages." },
          ].map((f) => (
            <div key={f.t} className="rounded-[10px] bg-white px-[18px] py-4" style={{ border: "1px solid #c8e6d0" }}>
              <span className="mb-[10px] inline-block rounded-full px-[9px] py-[3px] text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ background: "#E8F5E9", color: "#2E7D32" }}>{f.p}</span>
              <div className="mb-1 text-[13px] font-bold" style={{ color: "#1B5E20" }}>{f.t}</div>
              <div className="text-xs leading-[1.55]" style={{ color: "#5a7a62" }}>{f.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-10 h-px" style={{ background: "#c8e6d0" }} />

      {/* PRICING */}
      <div className="px-10 py-12">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#F57F17" }}>Pricing</div>
        <div className="mb-2 text-[22px] font-extrabold leading-[1.25]" style={{ color: "#1B5E20" }}>
          Simple monthly plans.<br />MTN MoMo billing.
        </div>
        <div className="mb-3 mt-7 grid grid-cols-2 gap-3">
          <PriceCard tier="Basic" amount="UGX 50,000" features={["1 camera", "Daily FarmBrain report", "Motion alerts + photos", "Weather advisory"]} />
          <PriceCard tier="Standard" amount="UGX 120,000" featured features={["3 cameras", "Worker arrival tracking", "Crop disease detection", "Productivity score"]} />
        </div>
        <div className="flex items-center justify-between rounded-[10px] bg-white px-[18px] py-[14px]" style={{ border: "1px solid #c8e6d0" }}>
          <div>
            <div className="text-[13px] font-bold" style={{ color: "#1B5E20" }}>Diaspora Premium</div>
            <div className="text-xs" style={{ color: "#5a7a62" }}>For Ugandans abroad — billed in USD</div>
          </div>
          <div className="text-base font-extrabold" style={{ color: "#F57F17" }}>$50 USD/mo</div>
        </div>
      </div>

      {/* DIASPORA BAND */}
      <div className="px-10 py-7 text-center" style={{ background: "#F57F17" }}>
        <h3 className="mb-[6px] text-lg font-extrabold" style={{ color: "#FFFDE7" }}>
          Own a farm in Uganda<br />from anywhere in the world?
        </h3>
        <p className="mb-4 text-xs" style={{ color: "rgba(255,253,231,0.75)" }}>
          Join hundreds of diaspora Ugandans in the UK, USA, and UAE<br />monitoring their farms from their phones — in real time.
        </p>
        <WaitlistForm variant="diaspora" />
      </div>

      {/* FOOTER */}
      <div className="px-10 py-8" style={{ background: "#1B5E20" }}>
        <div className="mb-1 text-base font-extrabold" style={{ color: "#FFFDE7" }}>🌿 Shamba Vue AI</div>
        <div className="mb-5 text-xs" style={{ color: "rgba(255,253,231,0.4)" }}>Your farm. Always in sight. · Uganda, East Africa</div>
        <div className="flex flex-wrap gap-5">
          {["How it works", "Pricing", "Contact us", "WhatsApp us"].map((l) => (
            <span key={l} className="cursor-pointer text-xs" style={{ color: "rgba(255,253,231,0.5)" }}>{l}</span>
          ))}
        </div>
        <div className="mt-5 border-t pt-4 text-[11px]" style={{ borderColor: "rgba(255,253,231,0.1)", color: "rgba(255,253,231,0.25)" }}>
          © 2026 Shamba Vue AI · Built at Makerere University · contact@shambavue.ai
        </div>
      </div>
    </div>
  );
}

function PriceCard({ tier, amount, features, featured }: { tier: string; amount: string; features: string[]; featured?: boolean }) {
  return (
    <div className="rounded-[12px] bg-white p-5" style={{ border: featured ? "2px solid #1B5E20" : "1px solid #c8e6d0" }}>
      {featured && (
        <span className="mb-[10px] inline-block rounded-full px-[9px] py-[3px] text-[10px] font-semibold tracking-[0.08em]" style={{ background: "#1B5E20", color: "#FFFDE7" }}>
          Most Popular
        </span>
      )}
      <div className="mb-1 text-[13px] font-bold" style={{ color: "#1B5E20" }}>{tier}</div>
      <div className="text-[22px] font-extrabold" style={{ color: "#1B5E20" }}>
        {amount} <span className="text-[11px] font-normal" style={{ color: "#5a7a62" }}>/month</span>
      </div>
      <div className="mt-3">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-[6px] py-[5px] text-xs last:border-b-0" style={{ color: "#5a7a62", borderBottom: "1px solid #f0f4f0" }}>
            <div className="flex h-[14px] w-[14px] items-center justify-center rounded-full text-[9px]" style={{ background: "#E8F5E9", color: "#2E7D32" }}>✓</div>
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}
