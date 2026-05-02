type Variant = "hero" | "diaspora";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScF2DhnU1FnyReKAlrp2pkykVigmFqAAgKPhJziQJt6-n-6kw/viewform?usp=publish-editor";

export function WaitlistForm({ variant = "hero" }: { variant?: Variant }) {
  if (variant === "diaspora") {
    return (
      <div className="mx-auto max-w-[360px]">
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-lg px-6 py-[12px] text-center text-[13px] font-semibold"
          style={{ background: "#1B5E20", color: "#FFFDE7" }}
        >
          Join diaspora waitlist →
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[360px]">
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 block w-full rounded-lg px-5 py-[12px] text-center text-[13px] font-semibold"
        style={{ background: "#F57F17", color: "#FFFDE7" }}
      >
        Join Waitlist →
      </a>
      <div className="text-[11px]" style={{ color: "rgba(255,253,231,0.45)" }}>
        Free for first 3 months · MTN MoMo billing · Cancel anytime
      </div>
    </div>
  );
}
