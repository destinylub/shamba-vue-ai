import { useState, type FormEvent } from "react";
import {
  GOOGLE_FORM_ACTION,
  GOOGLE_FORM_PHONE_ENTRY,
  GOOGLE_FORM_ID,
} from "@/lib/waitlist-config";

type Variant = "hero" | "diaspora";

export function WaitlistForm({ variant = "hero" }: { variant?: Variant }) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = phone.trim();
    if (trimmed.length < 7) {
      setStatus("err");
      return;
    }
    if (GOOGLE_FORM_ID.startsWith("REPLACE_")) {
      // Form not configured yet — still simulate success so UX works during dev.
      setStatus("ok");
      setPhone("");
      console.warn("[WaitlistForm] Google Form ID not configured. Update src/lib/waitlist-config.ts.");
      return;
    }
    setStatus("loading");
    try {
      const body = new FormData();
      body.append(GOOGLE_FORM_PHONE_ENTRY, trimmed);
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body,
      });
      setStatus("ok");
      setPhone("");
    } catch {
      setStatus("err");
    }
  }

  if (variant === "diaspora") {
    return (
      <form onSubmit={onSubmit} className="mx-auto mt-2 flex max-w-md flex-col items-center gap-2 sm:flex-row">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          type="tel"
          placeholder="WhatsApp number (e.g. +44...)"
          className="w-full flex-1 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-primary-foreground/60"
          aria-label="WhatsApp number"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full whitespace-nowrap rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? "Joining..." : "Join diaspora waitlist →"}
        </button>
        {status === "ok" && (
          <p className="w-full text-center text-xs text-primary-foreground/90 sm:absolute sm:mt-12">
            ✓ You're on the list — asante sana!
          </p>
        )}
      </form>
    );
  }

  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          type="tel"
          placeholder="Enter your WhatsApp number"
          className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none focus:border-accent"
          aria-label="WhatsApp number"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="whitespace-nowrap rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </button>
      </form>
      <div className="mt-3 text-center text-[11px] text-primary-foreground/40">
        {status === "ok"
          ? "✓ You're on the waitlist — karibu Shamba Vue AI!"
          : status === "err"
            ? "Please enter a valid WhatsApp number."
            : "Free for first 3 months · M-Pesa / MoMo billing · Cancel anytime"}
      </div>
    </div>
  );
}
