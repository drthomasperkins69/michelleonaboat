"use client";

import { useState } from "react";
import { boat, seller } from "@/lib/boat";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all";
const labelClass = "block text-sm font-semibold mb-1.5";

export default function IntroduceForm() {
  const [submitted, setSubmitted] = useState(false);
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

  function buildBody() {
    return [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Facebook profile: ${form.facebook}`,
      `Occupation (self): ${form.occupation}`,
      `Occupation (partner): ${form.partnerOccupation || "—"}`,
      "",
      "Introduction:",
      form.introduction,
    ].join("\n");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Buyer introduction — ${boat.name} (${boat.model})`;
    const mailto = `mailto:${seller.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildBody())}`;
    // Open the visitor's email client pre-filled with their introduction.
    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="text-6xl mb-6">⚓</div>
        <h3
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
        >
          Thank you!
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
          Your email app should have opened with your introduction ready to
          send to {seller.name}. If it didn&apos;t, please copy the details
          below and email them to{" "}
          <a
            href={`mailto:${seller.email}`}
            className="font-semibold underline"
            style={{ color: "var(--color-navy)" }}
          >
            {seller.email}
          </a>
          , or call {seller.name} on{" "}
          <a href={seller.phoneHref} className="font-semibold underline" style={{ color: "var(--color-navy)" }}>
            {seller.phone}
          </a>
          .
        </p>
        <pre className="text-left text-sm bg-white rounded-xl p-4 border border-gray-200 whitespace-pre-wrap text-gray-700">
          {buildBody()}
        </pre>
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

      <button
        type="submit"
        className="w-full text-white font-semibold py-4 rounded-xl transition-all duration-200 text-sm tracking-wide"
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        Send Introduction
      </button>
      <p className="text-xs text-gray-400 text-center">
        Submitting opens your email app with the details ready to send to{" "}
        {seller.name}.
      </p>
    </form>
  );
}
