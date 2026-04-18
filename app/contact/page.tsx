import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Michelle — for collaborations, questions, or just to say hi from wherever you are on this planet.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image
          src="/images/ai-contact-hero.png"
          alt="Golden-hour Queensland coastline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(15,45,78,0.7)" }}
        />
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-teal-light)" }}>
            Say Hello
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get in Touch
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            I&apos;d love to hear from you — whether you&apos;re a fellow
            sailor, a reader, a brand wanting to collaborate, or just someone
            who spotted my boat in a marina.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-navy)",
              }}
            >
              Let&apos;s Connect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              I&apos;m usually somewhere between a marina and an anchorage, but
              I check email whenever the satellite connection cooperates. Drop me
              a message and I&apos;ll get back to you as soon as I can.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "hello@michelleonaboat.com",
                  href: "mailto:hello@michelleonaboat.com",
                },
                {
                  icon: "📸",
                  label: "Instagram",
                  value: "@michelleonaboat",
                  href: "#",
                },
                {
                  icon: "▶",
                  label: "YouTube",
                  value: "Boatlatina",
                  href: "#",
                },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "var(--color-cream)" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    <p
                      className="font-semibold group-hover:underline"
                      style={{ color: "var(--color-navy)" }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div
              className="mt-12 rounded-2xl p-6"
              style={{ backgroundColor: "var(--color-cream)" }}
            >
              <p
                className="font-semibold mb-2"
                style={{ color: "var(--color-navy)" }}
              >
                📍 Current location
              </p>
              <p className="text-gray-600 text-sm">
                Somewhere between Moreton Bay and the Whitsundays — check
                Instagram for the latest coordinates.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-navy)",
            }}
          >
            Frequently Asked
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I come cruising with you?",
                a: "Sometimes! I occasionally take on crew for longer passages up the Queensland coast. If you're experienced and up for an adventure, send me a message and let's chat.",
              },
              {
                q: "Do you do photography commissions?",
                a: "Yes, I'm available for destination, travel, and brand photography — especially anything nautical. My rates are reasonable and I'll probably be there anyway.",
              },
              {
                q: "What camera gear do you use?",
                a: "I shoot with a Sony A7IV and a small collection of lenses I've carefully curated to fit in a waterproof pelican case. The iPhone does most of the work, honestly.",
              },
              {
                q: "Can I use your photos?",
                a: "Please reach out before using any images. For editorial use, I'm usually very accommodating. For commercial use, let's talk licensing.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3
                  className="font-bold mb-2"
                  style={{ color: "var(--color-navy)" }}
                >
                  {q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
