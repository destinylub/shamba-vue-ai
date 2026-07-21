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
          "AI farm monitoring for absentee owners. One WhatsApp report a day. No app.",
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
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
        media: "print",
        onLoad: "this.media='all'",
      } as any,
    ],
  }),
  component: Index,
});

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScF2DhnU1FnyReKAlrp2pkykVigmFqAAgKPhJziQJt6-n-6kw/viewform?usp=publish-editor";

// Brand palette
const C = {
  cream: "#FFFDE7",
  green: "#1B5E20",
  greenDark: "#0E3A12",
  greenBorder: "#A8C8AE",
  body: "#1F2A20",
  bodySoft: "#3D4F40",
  orange: "#F57F17",
  orangeText: "#9A4A00",
  orangeTint: "#FFF1DA",
  greenTint: "#E1F0E4",
};

// Dark theme tokens for the mid band (FarmBrain → Pricing)
const D = {
  bg: "#0A1A0D",
  bgSoft: "#0F2513",
  surface: "rgba(255,253,231,0.04)",
  surfaceHi: "rgba(255,253,231,0.08)",
  border: "rgba(255,253,231,0.14)",
  borderHi: "rgba(255,253,231,0.24)",
  text: "#F4F1DE",
  textSoft: "rgba(244,241,222,0.72)",
  textMute: "rgba(244,241,222,0.55)",
  amber: "#FFC04D",
};

function Index() {
  return (
    <div
      className="w-full"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: C.cream,
        color: C.body,
        fontSize: 17,
        lineHeight: 1.6,
        letterSpacing: "-0.011em",
      }}
    >
      {/* NAV */}
      <nav
        className="sticky top-0 z-30 flex h-[64px] items-center justify-between px-6 md:px-10 backdrop-blur-md"
        style={{ background: "rgba(255,253,231,0.85)", borderBottom: `1px solid ${C.greenBorder}` }}
      >
        <div className="flex items-center gap-2.5 text-[16px] font-extrabold tracking-tight" style={{ color: C.greenDark }}>
          <img src={shambaLogo.url} alt="Shamba Vue AI logo" className="h-8 w-8 object-contain" />
          Shamba Vue AI
        </div>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-5 py-2.5 text-[13px] font-bold transition hover:opacity-90"
          style={{ background: C.greenDark, color: C.cream }}
        >
          Join waitlist
        </a>
      </nav>

      {/* HERO — every.io cinematic */}
      <section
        className="relative overflow-hidden px-6 md:px-10 pt-24 pb-32"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10,26,13,0.55) 0%, rgba(10,26,13,0.75) 100%), url(${farmHero.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-[900px] text-center">
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] backdrop-blur"
            style={{ background: "rgba(255,192,77,0.15)", color: "#FFC04D", border: "1px solid rgba(255,192,77,0.35)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#FFC04D" }} />
            Beta · Uganda
          </div>
          <h1
            className="mx-auto mb-6 text-[52px] md:text-[76px] font-black leading-[1.02] tracking-[-0.03em]"
            style={{ color: C.cream }}
          >
            Your farm.<br />
            <span style={{ color: "#FFC04D" }}>Always in sight.</span>
          </h1>
          <p
            className="mx-auto mb-10 max-w-[560px] text-[19px] leading-[1.55]"
            style={{ color: "rgba(255,253,231,0.85)" }}
          >
            <b style={{ color: C.cream }}>AI monitoring on WhatsApp.</b> One daily report. No app. No login.
          </p>
          <WaitlistForm />
          <div className="mt-16 flex justify-center gap-12 md:gap-16">
            {[
              { n: "24/7", l: "AI watch" },
              { n: "0", l: "Apps" },
              { n: "7am", l: "Daily report" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-[28px] md:text-[32px] font-black" style={{ color: "#FFC04D" }}>{s.n}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "rgba(255,253,231,0.7)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM — light, tight */}
      <section className="px-6 md:px-10 py-24">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: C.orangeText }}>The problem</div>
          <h2 className="mb-4 text-[38px] md:text-[48px] font-black leading-[1.05] tracking-[-0.02em]" style={{ color: C.greenDark }}>
            Your farm loses money<br />
            <span style={{ color: C.orangeText }}>while you're away.</span>
          </h2>
          <p className="mb-12 max-w-[520px] text-[18px]" style={{ color: C.bodySoft }}>
            Workers skip. Harvests vanish. Disease spreads. You <b style={{ color: C.greenDark }}>never know</b>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { t: "Worker no-shows", d: "No way to verify hours." },
              { t: "Theft", d: "Coffee & maize disappear before harvest." },
              { t: "Zero visibility", d: "Only caretaker calls you can't verify." },
              { t: "Disease", d: "Spreads undetected across fields." },
            ].map((p) => (
              <div key={p.t} className="rounded-2xl bg-white px-6 py-5 transition hover:-translate-y-0.5" style={{ border: `1px solid ${C.greenBorder}` }}>
                <div className="mb-1 text-[17px] font-extrabold" style={{ color: C.greenDark }}>{p.t}</div>
                <div className="text-[15px]" style={{ color: C.bodySoft }}>{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — light */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: C.orangeText }}>How it works</div>
          <h2 className="mb-14 text-[38px] md:text-[48px] font-black leading-[1.05] tracking-[-0.02em]" style={{ color: C.greenDark }}>
            Simple. WhatsApp.<br />
            <span style={{ color: C.orangeText }}>Nothing to learn.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Subscribe via MoMo", d: "MTN or Airtel. No card." },
              { t: "We install", d: "Solar cameras in 3 days." },
              { t: "AI watches 24/7", d: "Motion, disease, workers, weather." },
              { t: "Report at 7am", d: "One WhatsApp. Plain English." },
            ].map((s, i) => (
              <div key={s.t} className="rounded-2xl bg-white p-6" style={{ border: `1px solid ${C.greenBorder}` }}>
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-black" style={{ background: C.greenDark, color: C.cream }}>
                  {i + 1}
                </div>
                <div className="mb-1 text-[18px] font-extrabold" style={{ color: C.greenDark }}>{s.t}</div>
                <div className="text-[15px]" style={{ color: C.bodySoft }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DARK BAND START ==================== */}
      <div style={{ background: D.bg, color: D.text }}>
        {/* FARMBRAIN DEMO — dark */}
        <section className="px-6 md:px-10 pt-24 pb-16">
          <div className="mx-auto max-w-[900px]">
            <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: D.amber }}>FarmBrain · Live example</div>
            <h2 className="mb-12 text-[38px] md:text-[48px] font-black leading-[1.05] tracking-[-0.02em]" style={{ color: D.text }}>
              What you get<br />
              <span style={{ color: D.amber }}>every morning.</span>
            </h2>
            <div className="rounded-3xl p-6 md:p-8 backdrop-blur" style={{ background: D.surface, border: `1px solid ${D.border}` }}>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-base font-black text-white" style={{ background: C.orange }}>F</div>
                <div>
                  <div className="text-[15px] font-extrabold" style={{ color: D.text }}>FarmBrain · Shamba Vue AI</div>
                  <div className="text-[12px]" style={{ color: D.textMute }}>Today · 7:02am</div>
                </div>
              </div>
              <div className="text-[15px] leading-[1.75]" style={{ color: D.textSoft }}>
                <div className="mb-3 font-extrabold" style={{ color: D.text }}>Masaka farm · Wednesday update</div>
                {[
                  { c: "#9CE89C", icon: "✓", label: "OK", t: "Workers: all 3 arrived 6:51am" },
                  { c: "#9CD7F5", icon: "☂", label: "Info", t: "Rain 2pm — skip irrigation" },
                  { c: "#FF9E9E", icon: "▲", label: "Alert", t: "Movement east boundary 2:18am — photo attached" },
                  { c: "#FFC04D", icon: "!", label: "Action", t: "Coffee Field B: leaf rust — fungicide by Thursday" },
                  { c: "#9CE89C", icon: "✓", label: "OK", t: "Harvest forecast: 3rd week of June" },
                ].map((r) => (
                  <div key={r.t} className="mb-2 flex items-start gap-3">
                    <span
                      className="mt-[3px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[12px] font-black"
                      style={{ background: r.c, color: "#0E3A12" }}
                      aria-label={r.label}
                    >
                      {r.icon}
                    </span>
                    <span>
                      <b style={{ color: r.c }}>{r.label}:</b>{" "}
                      <span style={{ color: D.text }}>{r.t}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["WhatsApp", "English", "No app", "Works on 2G/3G"].map((t) => (
                <div key={t} className="rounded-full px-3.5 py-1.5 text-[13px] font-semibold" style={{ background: D.surface, border: `1px solid ${D.border}`, color: D.textSoft }}>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES — dark */}
        <section className="px-6 md:px-10 py-16">
          <div className="mx-auto max-w-[900px]">
            <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: D.amber }}>AI features</div>
            <h2 className="mb-12 text-[38px] md:text-[48px] font-black leading-[1.05] tracking-[-0.02em]" style={{ color: D.text }}>
              Everything your farm<br />
              <span style={{ color: D.amber }}>needs. Built in.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { p: "AI", t: "Daily FarmBrain report", d: "Workers, weather, crops, alerts — one message at 7am." },
                { p: "Security", t: "Motion alerts", d: "AI spots people & animals. Instant photo on WhatsApp." },
                { p: "Crop AI", t: "Disease detection", d: "Photo a leaf. Get diagnosis & treatment in seconds." },
                { p: "Weather", t: "Hyper-local forecast", d: "GPS-precise irrigation & harvest windows." },
                { p: "Workers", t: "Arrival tracking", d: "Know exactly when they clock in and out." },
                { p: "Solar", t: "Offline-first", d: "Solar cameras. SD backup. Survives outages." },
              ].map((f) => (
                <div key={f.t} className="rounded-2xl p-6 backdrop-blur transition hover:-translate-y-0.5" style={{ background: D.surface, border: `1px solid ${D.border}` }}>
                  <span className="mb-3 inline-block rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em]" style={{ background: D.surfaceHi, color: D.amber, border: `1px solid ${D.border}` }}>{f.p}</span>
                  <div className="mb-1 text-[17px] font-extrabold" style={{ color: D.text }}>{f.t}</div>
                  <div className="text-[15px]" style={{ color: D.textSoft }}>{f.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING — dark */}
        <section id="pricing" className="px-6 md:px-10 py-16 pb-28">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: D.amber }}>Pricing</div>
            <h2 className="mb-4 text-[38px] md:text-[48px] font-black leading-[1.05] tracking-[-0.02em]" style={{ color: D.text }}>
              Simple.<br />
              <span style={{ color: D.amber }}>Transparent.</span>
            </h2>
            <p className="mb-8 max-w-[520px] text-[17px]" style={{ color: D.textSoft }}>
              One-time install. Monthly AI. <b style={{ color: D.text }}>Cancel anytime.</b>
            </p>

            {/* Founder banner */}
            <div className="mb-10 flex flex-wrap items-center gap-4 rounded-2xl px-5 py-4" style={{ background: "linear-gradient(90deg, rgba(245,127,23,0.18), rgba(245,127,23,0.06))", border: `1px solid rgba(245,127,23,0.45)` }}>
              <span className="rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em]" style={{ background: C.orange, color: "#1B1300" }}>⚡ Limited</span>
              <div className="flex-1 min-w-[180px]">
                <div className="text-[16px] font-extrabold" style={{ color: D.text }}>Founding member offer</div>
                <div className="text-[14px]" style={{ color: D.textSoft }}>First 10 customers — reduced install + founding badge.</div>
              </div>
              <div className="text-[22px] font-black" style={{ color: D.amber }}>7 <span className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: D.textSoft }}>spots left</span></div>
            </div>

            {/* UGANDA TIERS */}
            <div className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: D.amber }}>Uganda · MTN MoMo</div>
            <h3 className="mb-6 text-[22px] font-extrabold" style={{ color: D.text }}>Kampala & upcountry</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PriceCardDark
                tier="FarmBrain Basic"
                badge="Founder Special"
                badgeTone="founder"
                install="UGX 250,000"
                installNote="One-time install (founder price)"
                monthly="UGX 50,000"
                features={["1 solar 4G camera", "Daily FarmBrain report", "Motion alerts + photos", "Weather advisory", "WhatsApp chatbot", "Founding badge + priority support"]}
              />
              <PriceCardDark
                tier="FarmBrain Basic"
                badge="Standard"
                install="UGX 450,000"
                installNote="One-time install"
                monthly="UGX 50,000"
                features={["1 solar 4G camera", "Daily FarmBrain report", "Motion alerts + photos", "Weather advisory", "WhatsApp chatbot", "SD card recording"]}
              />
              <PriceCardDark
                tier="FarmBrain Standard"
                badge="Most Popular"
                badgeTone="popular"
                featured
                install="UGX 900,000"
                installNote="One-time install"
                monthly="UGX 120,000"
                features={["3 solar 4G cameras", "Daily FarmBrain AI report", "Worker arrival tracking", "Crop disease detection", "Productivity score", "Weather + planting advisory"]}
              />
              <PriceCardDark
                tier="FarmBrain Premium"
                badge="Premium"
                install="UGX 1,500,000"
                installNote="One-time install"
                monthly="UGX 250,000"
                features={["Unlimited cameras", "Everything in Standard", "Livestock behaviour AI", "Harvest forecast", "Satellite NDVI (Sentinel-2)", "Priority < 5min response"]}
              />
            </div>

            {/* DIASPORA */}
            <div className="mt-14 mb-3 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: D.amber }}>Diaspora · USD / EUR</div>
            <h3 className="mb-6 text-[22px] font-extrabold" style={{ color: D.text }}>For Ugandans abroad</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PriceCardDark
                tier="Diaspora Starter"
                badge="Starter"
                install="$120 USD"
                installNote="One-time · also €110"
                monthly="$30 USD"
                monthlyNote="/ mo · also €28"
                features={["1 solar 4G camera", "Daily report on WhatsApp", "Motion alerts", "Weather advisory", "Setup video call", "Wise / PayPal / card"]}
              />
              <PriceCardDark
                tier="Diaspora Standard"
                badge="Most Popular"
                badgeTone="popular"
                featured
                install="$180 USD"
                installNote="One-time · also €165"
                monthly="$50 USD"
                monthlyNote="/ mo · also €46"
                features={["2 solar 4G cameras", "Daily FarmBrain AI report", "Worker arrival log", "Crop disease detection", "Harvest forecast", "Monthly check-in call"]}
              />
              <PriceCardDark
                tier="Diaspora Elite"
                badge="Elite"
                install="$300 USD"
                installNote="One-time · also €275"
                monthly="$80 USD"
                monthlyNote="/ mo · also €74"
                features={["3+ cameras · full perimeter", "Everything in Standard", "Livestock behaviour AI", "Satellite crop health", "Monthly PDF report", "Bi-weekly video call"]}
              />
            </div>

            <div className="mt-8 rounded-2xl px-5 py-5" style={{ background: D.surface, border: `1px solid ${D.border}` }}>
              <div className="mb-1 text-[15px] font-extrabold" style={{ color: D.text }}>💳 Diaspora payment methods</div>
              <div className="text-[14px] leading-[1.6]" style={{ color: D.textSoft }}>
                SWIFT/IBAN, Wise, PayPal, or debit/credit card in USD or EUR. Billed monthly. Hardware installed in Uganda within 3–5 working days.
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ==================== DARK BAND END ==================== */}

      {/* DIASPORA CTA */}
      <section className="px-6 md:px-10 py-20 text-center" style={{ background: C.greenDark }}>
        <div className="mx-auto max-w-[720px]">
          <h3 className="mb-4 text-[32px] md:text-[42px] font-black leading-[1.05] tracking-[-0.02em]" style={{ color: C.cream }}>
            Own a farm in Uganda<br />
            <span style={{ color: "#FFC04D" }}>from anywhere?</span>
          </h3>
          <p className="mb-8 text-[17px]" style={{ color: "rgba(255,253,231,0.85)" }}>
            Join diaspora Ugandans in the <b style={{ color: C.cream }}>UK, USA & UAE</b> watching their farms in real time.
          </p>
          <WaitlistForm variant="diaspora" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-12" style={{ background: "#081208", color: C.cream }}>
        <div className="mx-auto max-w-[900px]">
          <div className="mb-1 flex items-center gap-2 text-[18px] font-extrabold">
            <img src={shambaLogo.url} alt="" className="h-7 w-7 object-contain" />
            Shamba Vue AI
          </div>
          <div className="mb-8 text-[14px]" style={{ color: "rgba(255,253,231,0.7)" }}>Your farm. Always in sight. · Uganda</div>
          <h3 className="mb-3 text-[16px] font-extrabold">Contact us</h3>
          <div className="grid gap-2 text-[14px] font-semibold">
            <a href="mailto:shambavueai@gmail.com" className="underline underline-offset-4">shambavueai@gmail.com</a>
            <a href="https://wa.me/256764028496" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">WhatsApp · +256 764 028 496</a>
          </div>
          <div className="mt-8 border-t pt-4 text-[13px]" style={{ borderColor: "rgba(255,253,231,0.15)", color: "rgba(255,253,231,0.6)" }}>
            © 2026 Shamba Vue AI · Founded in Uganda
          </div>
        </div>
      </footer>
    </div>
  );
}

function PriceCardDark({
  tier,
  badge,
  badgeTone = "standard",
  install,
  installNote = "One-time install",
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
      ? { background: D.amber, color: "#1B1300" }
      : { background: D.surfaceHi, color: D.text, border: `1px solid ${D.border}` };

  return (
    <div
      className="rounded-2xl p-6 backdrop-blur transition hover:-translate-y-0.5"
      style={{
        background: featured ? "rgba(255,192,77,0.06)" : D.surface,
        border: featured ? `1px solid ${D.amber}` : `1px solid ${D.border}`,
      }}
    >
      {badge && (
        <span className="mb-3 inline-block rounded-full px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.08em]" style={badgeStyle}>
          {badge}
        </span>
      )}
      <div className="mb-3 text-[17px] font-extrabold" style={{ color: D.text }}>{tier}</div>
      <div className="text-[28px] font-black leading-none tracking-[-0.02em]" style={{ color: D.text }}>{install}</div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: D.textMute }}>{installNote}</div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-[22px] font-black" style={{ color: D.amber }}>{monthly}</span>
        <span className="text-[13px] font-semibold" style={{ color: D.textSoft }}>{monthlyNote}</span>
      </div>
      <div className="mt-5 space-y-2.5">
        {features.map((f) => (
          <div key={f} className="flex items-start gap-2.5 text-[14px]" style={{ color: D.textSoft }}>
            <div className="mt-[3px] flex h-[16px] w-[16px] flex-shrink-0 items-center justify-center rounded-full text-[10px] font-black" style={{ background: D.amber, color: "#1B1300" }}>✓</div>
            <span>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
