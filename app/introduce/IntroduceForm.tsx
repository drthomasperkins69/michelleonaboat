"use client";

import { useState } from "react";
import { boat, seller } from "@/lib/boat";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all";
const labelClass = "block text-sm font-semibold mb-1.5";

// FormSubmit delivers the submission as an email to the seller's inbox.
const ENDPOINT = `https://formsubmit.co/ajax/${seller.email}`;

export default function IntroduceForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [form, setForm] = useState({
    name: "",
    phone: "",
    facebook: "",
    occupation: "",
    partnerOccupation: "",
    introduction: "",
  });

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Buyer introduction — ${boat.name} (${boat.model})`,
          _template: "table",
          _captcha: "false",
          Name: form.name,
          Phone: form.phone,
          "Facebook profile": form.facebook,
          "Occupation (self)": form.occupation,
          "Occupation (partner)": form.partnerOccupation || "—",
          Introduction: form.introduction,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="text-6xl mb-6">⚓</div>
        <h3
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
        >
          Thank you!
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
          Your introduction has been sent to {seller.name}. He&apos;ll be in
          touch to arrange an inspection. If you&apos;d like to reach him
          sooner, give him a call on{" "}
          <a href={seller.phoneHref} className="font-semibold underline" style={{ color: "var(--color-navy)" }}>
            {seller.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass} style={{ color: "var(--color-navy)" }}>
          Full name *
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={update("name")}
          placeholder="Your full name"
          className={inputClass}
          style={{ "--tw-ring-color": "var(--color-teal)" } as React.CSSProperties}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className={labelClass} style={{ color: "var(--color-navy)" }}>
            Phone number *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={update("phone")}
            placeholder="04XX XXX XXX"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="facebook" className={labelClass} style={{ color: "var(--color-navy)" }}>
            Facebook profile URL *
          </label>
          <input
            id="facebook"
            type="url"
            required
            value={form.facebook}
            onChange={update("facebook")}
            placeholder="https://facebook.com/your.profile"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="occupation" className={labelClass} style={{ color: "var(--color-navy)" }}>
            Your occupation *
          </label>
          <input
            id="occupation"
            type="text"
            required
            value={form.occupation}
            onChange={update("occupation")}
            placeholder="e.g. Electrician"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="partnerOccupation" className={labelClass} style={{ color: "var(--color-navy)" }}>
            Partner&apos;s occupation
          </label>
          <input
            id="partnerOccupation"
            type="text"
            value={form.partnerOccupation}
            onChange={update("partnerOccupation")}
            placeholder="If applicable"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="introduction" className={labelClass} style={{ color: "var(--color-navy)" }}>
          Formal introduction *
        </label>
        <textarea
          id="introduction"
          required
          rows={7}
          value={form.introduction}
          onChange={update("introduction")}
          placeholder="Tell us a little about yourself — who you are, your boating experience, and why you're interested in Scirocco."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your introduction. Please try again, or
          email {seller.name} directly at{" "}
          <a href={`mailto:${seller.email}`} className="font-semibold underline">
            {seller.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full text-white font-semibold py-4 rounded-xl transition-all duration-200 text-sm tracking-wide disabled:opacity-70"
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        {status === "loading" ? "Sending…" : "Send Introduction"}
      </button>
      <p className="text-xs text-gray-400 text-center">
        Your details are emailed directly to {seller.name}.
      </p>
    </form>
  );
}
