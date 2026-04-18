"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div className="text-6xl mb-6">⛵</div>
        <h3
          className="text-2xl font-bold mb-3"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-navy)",
          }}
        >
          Message Sent!
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-sm">
          Thanks for reaching out — I&apos;ll get back to you as soon as I
          find a marina with decent WiFi. ⚓
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
            style={{ "--tw-ring-color": "var(--color-teal)" } as React.CSSProperties}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold mb-1.5"
            style={{ color: "var(--color-navy)" }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold mb-1.5"
          style={{ color: "var(--color-navy)" }}
        >
          Subject
        </label>
        <select
          id="subject"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
        >
          <option>Just saying hi 👋</option>
          <option>Photography inquiry</option>
          <option>Brand collaboration</option>
          <option>Crew / cruising together</option>
          <option>Media / press</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold mb-1.5"
          style={{ color: "var(--color-navy)" }}
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          placeholder="Tell me what's on your mind..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full text-white font-semibold py-4 rounded-xl transition-all duration-200 text-sm tracking-wide disabled:opacity-70"
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
