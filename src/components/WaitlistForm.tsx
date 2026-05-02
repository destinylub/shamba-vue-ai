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
      <div className="mx-auto max-w-[360px]">
        <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            type="tel"
            placeholder="WhatsApp number (e.g. +44...)"
            className="flex-1 rounded-lg px-[14px] py-[10px] text-[13px] outline-none"
            style={{ background: "rgba(255,253,231,0.15)", border: "1px solid rgba(255,253,231,0.35)", color: "#FFFDE7" }}
            aria-label="WhatsApp number"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="whitespace-nowrap rounded-lg px-6 py-[10px] text-[13px] font-semibold disabled:opacity-60"
            style={{ background: "#1B5E20", color: "#FFFDE7" }}
          >
            {status === "loading" ? "Joining..." : "Join diaspora waitlist →"}
          </button>
        </form>
        {status === "ok" && (
          <div className="mt-2 text-[11px]" style={{ color: "#FFFDE7" }}>✓ You're on the list — thank you!</div>
        )}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[360px]">
      <form onSubmit={onSubmit} className="mb-4 flex gap-2">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          type="tel"
          placeholder="Enter your WhatsApp number"
          className="flex-1 rounded-lg px-[14px] py-[10px] text-[13px] outline-none"
          style={{ background: "rgba(255,253,231,0.1)", border: "1px solid rgba(255,253,231,0.2)", color: "#FFFDE7" }}
          aria-label="WhatsApp number"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="whitespace-nowrap rounded-lg px-5 py-[10px] text-[13px] font-semibold disabled:opacity-60"
          style={{ background: "#F57F17", color: "#FFFDE7" }}
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </button>
      </form>
      <div className="text-[11px]" style={{ color: "rgba(255,253,231,0.35)" }}>
        {status === "ok"
          ? "✓ You're on the waitlist — welcome to Shamba Vue AI!"
          : status === "err"
            ? "Please enter a valid WhatsApp number."
            : "Free for first 3 months · MTN MoMo billing · Cancel anytime"}
      </div>
    </div>
  );
}
