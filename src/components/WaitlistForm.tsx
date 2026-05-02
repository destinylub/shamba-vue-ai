type Variant = "hero" | "diaspora";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScF2DhnU1FnyReKAlrp2pkykVigmFqAAgKPhJziQJt6-n-6kw/viewform?embedded=true";

export function WaitlistForm({ variant = "hero" }: { variant?: Variant }) {
  const isDiaspora = variant === "diaspora";
  return (
    <div
      className="mx-auto w-full max-w-[640px] overflow-hidden rounded-xl"
      style={{
        background: "#FFFDE7",
        border: isDiaspora
          ? "1px solid rgba(255,253,231,0.35)"
          : "1px solid rgba(255,253,231,0.2)",
      }}
    >
      <iframe
        src={FORM_URL}
        title="Shamba Vue AI waitlist form"
        width="100%"
        height="1065"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        className="block w-full"
        loading="lazy"
      >
        Loading…
      </iframe>
    </div>
  );
}
