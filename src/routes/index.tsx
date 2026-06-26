import { createFileRoute } from "@tanstack/react-router";
import { WaitlistForm } from "@/components/WaitlistForm";
import farmHero from "@/assets/farm-hero.jpg.asset.json";
import shambaLogo from "@/assets/shamba-logo.png.asset.json";


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
      } as any,
    ],
  }),
  component: Index,
});

const BRAND = "SHAMBA VUE AI";

// Accessibility-tuned palette — keeps brand identity, raises contrast.
const C = {
  cream: "#FFFDE7",
  green: "#1B5E20",        // brand deep green — strong contrast on cream
  greenDark: "#0E3A12",    // headings / body text on cream (AAA on cream)
  greenBorder: "#A8C8AE",  // visible borders for low-vision users
  body: "#1F2A20",         // primary body text on cream
  bodySoft: "#3D4F40",     // secondary body text — still AA on cream
  orange: "#F57F17",       // brand orange — used for fills only
  orangeText: "#9A4A00",   // brand orange for TEXT (darkened for contrast)
  orangeTint: "#FFF1DA",
  greenTint: "#E1F0E4",
  white: "#FFFFFF",
};

function Index() {
  return (
    <div
      className="pg w-full"
      style={{ fontFamily: "'Inter', sans-serif", background: C.cream, color: C.body, fontSize: 17, lineHeight: 1.6 }}
    >
      {/* NAV */}
      <div className="flex h-[60px] items-center justify-between px-8 border-b-2" style={{ background: C.cream, borderColor: C.greenBorder }}>
        <div className="flex items-center gap-2 text-[17px] font-bold tracking-wider" style={{ color: C.green }}>
          <img src={shambaLogo.url} alt="Shamba Vue AI logo" className="h-8 w-8 object-contain" />
          {BRAND}
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScF2DhnU1FnyReKAlrp2pkykVigmFqAAgKPhJziQJt6-n-6kw/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md px-5 py-[10px] text-sm font-bold"
          style={{ background: C.green, color: C.cream }}
        >
          Join Waitlist
        </a>
      </div>

      {/* HERO */}
      <div
        id="waitlist"
        className="relative overflow-hidden px-10 pb-14 pt-16 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(14,58,18,0.86), rgba(14,58,18,0.93)), url(${farmHero.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="mb-6 inline-block rounded-full px-4 py-[6px] text-[13px] font-bold uppercase tracking-[0.08em]"
          style={{ background: C.orange, color: "#1B1300", border: "2px solid #FFD89A" }}
        >
          Now accepting beta farms · Uganda
        </div>
        <h1 className="mx-auto mb-4 max-w-[560px] text-[40px] font-extrabold leading-[1.15]" style={{ color: C.cream }}>
          Your farm.<br />
          <span style={{ color: "#FFC04D" }}>Always in sight.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-[440px] text-[17px] leading-[1.7]" style={{ color: "#FFFDE7" }}>
          AI-powered monitoring for absentee farm owners. Get a daily WhatsApp report about your farm — no app, no login required.
        </p>
        <WaitlistForm />
        <div className="mt-12 flex justify-center gap-10 border-t pt-7" style={{ borderColor: "rgba(255,253,231,0.3)" }}>
          {[
            { n: "AI", l: "Powered" },
            { n: "24/7", l: "Monitoring" },
            { n: "0", l: "Apps to Download" },
          ].map((s) => (
            <div key={s.l}>
              <span className="block text-[26px] font-extrabold" style={{ color: "#FFC04D" }}>{s.n}</span>
              <span className="block text-[12px] font-semibold uppercase tracking-[0.06em]" style={{ color: "#FFFDE7" }}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <div className="px-10 py-14">
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: C.orangeText }}>The Problem</div>
        <h2 className="mb-3 text-[26px] font-extrabold leading-[1.25]" style={{ color: C.greenDark }}>
          Your farm is losing money<br />while you're away
        </h2>
        <p className="mb-8 max-w-[520px] text-[16px] leading-[1.7]" style={{ color: C.bodySoft }}>
          Thousands of Ugandans own farms they rarely visit. The result? Workers who don't show up, harvests stolen, and crops destroyed by disease — all while you have no idea.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { t: "Worker absenteeism", d: "No way to verify if workers arrive, leave early, or don't come at all." },
            { t: "Crop theft", d: "Coffee, matooke and maize stolen before harvest with no evidence or alerts." },
            { t: "Zero visibility", d: "You rely entirely on caretaker phone calls you can't verify." },
            { t: "Crop disease", d: "Disease spreads undetected across fields, wiping out entire harvests." },
          ].map((p) => (
            <div key={p.t} className="rounded-[10px] bg-white px-5 py-5" style={{ border: `2px solid ${C.greenBorder}` }}>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg text-lg font-bold" style={{ background: C.orangeTint, color: C.orangeText }}>!</div>
              <div className="mb-1 text-[16px] font-bold" style={{ color: C.greenDark }}>{p.t}</div>
              <div className="text-[15px] leading-[1.6]" style={{ color: C.bodySoft }}>{p.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-10 h-px" style={{ background: C.greenBorder }} />

      {/* HOW IT WORKS */}
      <div className="px-10 py-14">
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: C.orangeText }}>How It Works</div>
        <h2 className="mb-3 text-[26px] font-extrabold leading-[1.25]" style={{ color: C.greenDark }}>
          Simple. WhatsApp.<br />No tech skills needed.
        </h2>
        <div className="mt-7 flex flex-col">
          {[
            { t: "Subscribe via MTN MoMo", d: "Pay monthly using your MTN or Airtel Mobile Money. No bank card, no app download required." },
            { t: "We install solar cameras on your farm", d: "Our team visits within 3 days. Solar-powered cameras work through power cuts. Works on MTN 3G coverage." },
            { t: "AI monitors your farm 24/7", d: "Motion detection, crop disease scanning, worker arrival tracking, weather monitoring — all automatic." },
            { t: "Get your FarmBrain report every morning", d: "At 7am, your farm's full status arrives on WhatsApp. Alerts, photos, and AI advice — in plain English." },
          ].map((s, i) => (
            <div key={s.t} className="flex items-start gap-4 py-5 last:border-b-0" style={{ borderBottom: `2px dashed ${C.greenBorder}` }}>
              <div className="mt-[2px] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-[16px] font-extrabold" style={{ background: C.green, color: C.cream }}>
                {i + 1}
              </div>
              <div>
                <div className="mb-1 text-[17px] font-bold" style={{ color: C.greenDark }}>{s.t}</div>
                <div className="text-[15px] leading-[1.6]" style={{ color: C.bodySoft }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FARMBRAIN DEMO */}
      <div className="px-10 pb-14">
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: C.orangeText }}>FarmBrain · Live Example</div>
        <h2 className="mb-3 text-[26px] font-extrabold leading-[1.25]" style={{ color: C.greenDark }}>
          What you receive<br />every morning
        </h2>
        <div className="mb-4 mt-7 rounded-[14px] p-6" style={{ background: C.greenDark }}>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full text-base font-bold text-white" style={{ background: C.orange }}>F</div>
            <div>
              <div className="text-[15px] font-bold" style={{ color: C.cream }}>FarmBrain · Shamba Vue AI</div>
              <div className="text-[13px]" style={{ color: "rgba(255,253,231,0.75)" }}>Today at 7:02am</div>
            </div>
          </div>
          <div className="text-[15px] leading-[1.75]" style={{ color: C.cream }}>
            <div className="font-bold" style={{ color: C.cream }}>Good morning! Here is your Masaka farm update for Wednesday:</div>
            <br />
            {[
              // Each row carries an explicit symbol + label so meaning isn't conveyed by color alone (colorblind-safe).
              { c: "#9CE89C", icon: "✓", label: "OK", t: "Workers: All 3 arrived at 6:51am — on time" },
              { c: "#9CD7F5", icon: "☂", label: "Info", t: "Weather: Rain expected at 2pm — skip irrigation today" },
              { c: "#FF9E9E", icon: "▲", label: "Alert", t: "Movement near east boundary at 2:18am — photo attached" },
              { c: "#FFC04D", icon: "!",  label: "Action", t: "Crop: Coffee in Field B shows early leaf rust — apply fungicide by Thursday" },
              { c: "#9CE89C", icon: "✓", label: "OK", t: "Harvest forecast: Estimated 3rd week of June based on current growth" },
            ].map((r) => (
              <div key={r.t} className="mb-2 flex items-start gap-3">
                <span
                  className="mt-[2px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[12px] font-extrabold"
                  style={{ background: r.c, color: "#0E3A12" }}
                  aria-label={r.label}
                >
                  {r.icon}
                </span>
                <span>
                  <strong style={{ color: r.c }}>{r.label}:</strong> {r.t}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {["WhatsApp delivery", "English", "No app needed", "Works on 2G/3G"].map((t) => (
            <div key={t} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] font-semibold" style={{ border: `2px solid ${C.greenBorder}`, color: C.greenDark }}>
              <div className="flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold" style={{ background: C.green, color: C.cream }}>✓</div>
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-10 h-px" style={{ background: C.greenBorder }} />

      {/* FEATURES */}
      <div className="px-10 py-14">
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: C.orangeText }}>AI Features</div>
        <h2 className="mb-3 text-[26px] font-extrabold leading-[1.25]" style={{ color: C.greenDark }}>
          Everything your farm<br />needs. Built in.
        </h2>
        <div className="mt-7 grid grid-cols-2 gap-4">
          {[
            { p: "AI", t: "FarmBrain daily report", d: "Full farm status every morning at 7am — workers, weather, crop health, and alerts in one WhatsApp message." },
            { p: "Security", t: "Motion alerts", d: "AI detects people and animals at night. Instant photo alert on WhatsApp — know within seconds." },
            { p: "Crop AI", t: "Disease detection", d: "Photo a leaf, send to Shamba Vue AI on WhatsApp. AI identifies the disease and recommends treatment instantly." },
            { p: "Weather", t: "Farm-specific forecast", d: "Hyper-local weather for your exact GPS location. Irrigation advice, planting windows, harvest timing." },
            { p: "Workers", t: "Arrival tracking", d: "Know the exact time workers arrive and leave every day. AI alerts you when they're late or absent." },
            { p: "Solar", t: "Offline-first hardware", d: "Solar-powered cameras with SD backup. No footage lost during power cuts or network outages." },
          ].map((f) => (
            <div key={f.t} className="rounded-[10px] bg-white px-5 py-5" style={{ border: `2px solid ${C.greenBorder}` }}>
              <span className="mb-3 inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-[0.08em]" style={{ background: C.green, color: C.cream }}>{f.p}</span>
              <div className="mb-1 text-[16px] font-bold" style={{ color: C.greenDark }}>{f.t}</div>
              <div className="text-[15px] leading-[1.6]" style={{ color: C.bodySoft }}>{f.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-10 h-px" style={{ background: C.greenBorder }} />

      {/* PRICING */}
      <div className="px-10 py-14">
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: C.orangeText }}>Pricing</div>
        <h2 className="mb-3 text-[26px] font-extrabold leading-[1.25]" style={{ color: C.greenDark }}>
          Simple, transparent<br />pricing.
        </h2>
        <p className="mb-7 max-w-[520px] text-[16px] leading-[1.7]" style={{ color: C.bodySoft }}>
          One-time installation. Monthly AI intelligence. Cancel anytime — no hidden fees, ever.
        </p>

        {/* Founder offer banner */}
        <div className="mb-7 flex flex-wrap items-center gap-4 rounded-[12px] px-5 py-4" style={{ background: C.orange, color: "#1B1300", border: "2px solid #FFD89A" }}>
          <span className="rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em]" style={{ background: "#1B1300", color: C.orange }}>⚡ Limited</span>
          <div className="flex-1 min-w-[180px]">
            <div className="text-[16px] font-extrabold">Founding Member Offer</div>
            <div className="text-[14px]" style={{ color: "#3A2400" }}>First 10 customers — reduced installation fee + permanent founding badge.</div>
          </div>
          <div className="text-[22px] font-extrabold">7 <span className="text-[12px] font-semibold uppercase tracking-[0.08em]">spots left</span></div>
        </div>

        {/* UGANDA TIERS */}
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: C.orangeText }}>Uganda · MTN MoMo</div>
        <h3 className="mb-5 text-[20px] font-extrabold" style={{ color: C.greenDark }}>Built for Kampala & upcountry farms</h3>
        <div className="grid gap-4">
          <PriceCard
            tier="FarmEye Basic"
            badge="Founder Special"
            badgeTone="founder"
            install="UGX 250,000"
            installNote="One-time installation (founding price)"
            monthly="UGX 50,000"
            features={["1 solar 4G camera installed", "Daily FarmBrain report at 7am", "Motion alerts with photo on WhatsApp", "Weather advisory for your GPS", "WhatsApp chatbot — STATUS / ALERTS", "Solar-powered — works through outages", "Founding member badge + priority support"]}
          />
          <PriceCard
            tier="FarmEye Basic"
            badge="Standard"
            install="UGX 450,000"
            installNote="One-time installation"
            monthly="UGX 50,000"
            features={["1 solar 4G camera installed", "Daily FarmBrain report at 7am", "Motion alerts with photo", "Weather advisory", "WhatsApp chatbot", "Solar-powered hardware", "Local SD card recording"]}
          />
          <PriceCard
            tier="FarmEye Standard"
            badge="Most Popular"
            badgeTone="popular"
            featured
            install="UGX 900,000"
            installNote="One-time installation"
            monthly="UGX 120,000"
            features={["3 solar 4G cameras — full coverage", "Daily FarmBrain AI report", "Motion alerts with photo", "Worker arrival & departure tracking", "Crop disease detection from leaf photo", "Weekly worker productivity score", "Weather + planting advisory", "Full WhatsApp chatbot commands"]}
          />
          <PriceCard
            tier="FarmEye Premium"
            badge="Premium"
            install="UGX 1,500,000"
            installNote="One-time installation"
            monthly="UGX 250,000"
            features={["Unlimited cameras — full perimeter", "Everything in Standard, plus:", "Livestock behaviour AI", "Harvest forecast 4–6 weeks out", "Satellite NDVI crop health (Sentinel-2)", "Monthly 1-on-1 farm review call", "Priority alert response < 5 minutes", "Luganda-language reports on request"]}
          />
        </div>

        {/* DIASPORA TIERS */}
        <div className="mt-12 mb-3 text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: C.orangeText }}>Diaspora · USD / EUR</div>
        <h3 className="mb-5 text-[20px] font-extrabold" style={{ color: C.greenDark }}>For Ugandans abroad</h3>
        <div className="grid gap-4">
          <PriceCard
            tier="Diaspora Starter"
            badge="Starter"
            install="$120 USD"
            installNote="One-time installation · also €110"
            monthly="$30 USD"
            monthlyNote="/ month · also €28"
            features={["1 solar 4G camera, installed by our team", "Daily FarmBrain report on WhatsApp", "Motion alerts to your international number", "Weather advisory for your farm location", "Setup video call — we walk you through", "Pay by Wise, PayPal, bank transfer or card"]}
          />
          <PriceCard
            tier="Diaspora Standard"
            badge="Most Popular Diaspora"
            badgeTone="popular"
            featured
            install="$180 USD"
            installNote="One-time installation · also €165"
            monthly="$50 USD"
            monthlyNote="/ month · also €46"
            features={["2 solar 4G cameras — entrance + main area", "Daily FarmBrain AI report", "Instant motion alerts to your WhatsApp", "Worker arrival & departure log", "Crop disease detection from leaf photo", "Harvest window forecast", "Monthly WhatsApp check-in call", "Pay in USD or EUR — Wise / PayPal / card"]}
          />
          <PriceCard
            tier="Diaspora Elite"
            badge="Elite"
            install="$300 USD"
            installNote="One-time installation · also €275"
            monthly="$80 USD"
            monthlyNote="/ month · also €74"
            features={["3+ cameras — full perimeter", "Everything in Diaspora Standard, plus:", "Livestock behaviour AI", "Satellite crop health (Sentinel-2)", "Monthly PDF farm performance report", "Bi-weekly video call with our team", "Caretaker accountability scoring", "Emergency on-ground response protocol"]}
          />
        </div>

        {/* Payment note */}
        <div className="mt-7 rounded-[12px] bg-white px-5 py-5" style={{ border: `2px solid ${C.greenBorder}` }}>
          <div className="mb-1 text-[15px] font-extrabold" style={{ color: C.greenDark }}>💳 Diaspora payment methods</div>
          <div className="text-[15px] leading-[1.65]" style={{ color: C.bodySoft }}>
            International bank transfer (SWIFT/IBAN), Wise, PayPal, or major debit/credit cards in USD or EUR. Subscriptions billed monthly — cancel anytime with 7 days notice. Hardware installed in Uganda within 3–5 working days of payment.
          </div>
        </div>
      </div>

      {/* DIASPORA BAND */}
      <div className="px-10 py-10 text-center" style={{ background: C.greenDark }}>
        <h3 className="mb-2 text-[22px] font-extrabold" style={{ color: C.cream }}>
          Own a farm in Uganda<br />from anywhere in the world?
        </h3>
        <p className="mb-5 text-[15px]" style={{ color: "rgba(255,253,231,0.95)" }}>
          Join hundreds of diaspora Ugandans in the UK, USA, and UAE<br />monitoring their farms from their phones — in real time.
        </p>
        <WaitlistForm variant="diaspora" />
      </div>

      {/* FOOTER */}
      <div className="px-10 py-9" style={{ background: C.greenDark }}>
        <div className="mb-2 text-[18px] font-extrabold" style={{ color: C.cream }}>🌿 Shamba Vue AI</div>
        <div className="mb-5 text-[14px]" style={{ color: "rgba(255,253,231,0.85)" }}>Your farm. Always in sight. · Uganda, East Africa</div>
        <h3 className="mb-3 text-[18px] font-extrabold" style={{ color: C.cream }}>Contact Us</h3>
        <div className="mb-5 grid gap-3 text-[14px] font-semibold" style={{ color: C.cream }}>
          <a href="mailto:shambavueai@gmail.com" className="underline">Email us: shambavueai@gmail.com</a>
          <a href="https://wa.me/256764028496" target="_blank" rel="noopener noreferrer" className="underline">WhatsApp us: +256 764 028 496</a>
        </div>
        <div className="mt-5 border-t pt-4 text-[13px]" style={{ borderColor: "rgba(255,253,231,0.25)", color: "rgba(255,253,231,0.8)" }}>
          © 2026 Shamba Vue AI · Founded in Uganda
        </div>
      </div>
    </div>
  );
}

function PriceCard({
  tier,
  badge,
  badgeTone = "standard",
  install,
  installNote = "One-time installation",
  monthly,
  monthlyNote = "/ month",
  features,
  featured,
}: {
  tier: string;
  badge?: string;
  badgeTone?: "standard" | "founder" | "popular";
  install: string;
  installNote?: string;
  monthly: string;
  monthlyNote?: string;
  features: string[];
  featured?: boolean;
}) {
  const badgeStyle =
    badgeTone === "founder"
      ? { background: C.orange, color: "#1B1300" }
      : badgeTone === "popular"
      ? { background: C.green, color: C.cream }
      : { background: C.greenTint, color: C.greenDark };

  return (
    <div className="rounded-[12px] bg-white p-5" style={{ border: featured ? `3px solid ${C.green}` : `2px solid ${C.greenBorder}` }}>
      {badge && (
        <span className="mb-3 inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-[0.08em]" style={badgeStyle}>
          {badge}
        </span>
      )}
      <div className="mb-2 text-[18px] font-extrabold" style={{ color: C.greenDark }}>{tier}</div>
      <div className="text-[24px] font-extrabold leading-none" style={{ color: C.greenDark }}>{install}</div>
      <div className="mt-1 text-[12px] font-semibold uppercase tracking-[0.06em]" style={{ color: C.bodySoft }}>{installNote}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-[20px] font-extrabold" style={{ color: C.orangeText }}>{monthly}</span>
        <span className="text-[14px] font-semibold" style={{ color: C.bodySoft }}>{monthlyNote}</span>
      </div>
      <div className="mt-4">
        {features.map((f) => (
          <div key={f} className="flex items-start gap-2 py-2 text-[15px] last:border-b-0" style={{ color: C.body, borderBottom: `1px solid ${C.greenBorder}` }}>
            <div className="mt-[3px] flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold" style={{ background: C.green, color: C.cream }}>✓</div>
            <span>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
