import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { boat, seller } from "@/lib/boat";

export const metadata: Metadata = {
  title: "Contact & Inspections",
  description: `Arrange an inspection of ${boat.name}. ${seller.inspections}. Contact ${seller.name} on ${seller.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image
          src="/images/scirocco-3.jpg"
          alt={`${boat.name} at ${boat.berth}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(15,45,78,0.7)" }} />
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-teal-light)" }}>
            Enquiries & Inspections
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Get in Touch
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            {seller.inspections} at {boat.berth}. Send an enquiry below or call{" "}
            {seller.name} directly to arrange a time to come aboard.
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
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
            >
              Contact the Seller
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Serious enquiries welcome. {boat.name} is a {boat.model} ({boat.year})
              and is priced at {boat.price} {boat.currency}. Reach out any time —
              inspections are held on Sunday afternoons.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: "👤",
                  label: "Seller",
                  value: seller.name,
                  href: undefined as string | undefined,
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: seller.phone,
                  href: seller.phoneHref,
                },
                {
                  icon: "📍",
                  label: "Berth",
                  value: boat.berth,
                  href: undefined,
                },
                {
                  icon: "🗓",
                  label: "Inspections",
                  value: "Sunday afternoons",
                  href: undefined,
                },
              ].map(({ icon, label, value, href }) => {
                const inner = (
                  <>
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
                      <p className="font-semibold" style={{ color: "var(--color-navy)" }}>
                        {value}
                      </p>
                    </div>
                  </>
                );
                return href ? (
                  <a key={label} href={href} className="flex items-center gap-4 group">
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4 group">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="mt-12 rounded-2xl p-6" style={{ backgroundColor: "var(--color-cream)" }}>
              <p className="font-semibold mb-2" style={{ color: "var(--color-navy)" }}>
                💲 Asking price
              </p>
              <p className="text-gray-600 text-sm">
                {boat.price} {boat.currency} — a 51ft {boat.model} Mediterranean
                cruiser, recently and completely overhauled.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </section>

      {/* Introduce yourself CTA */}
      <section className="px-6 pb-8">
        <div
          className="max-w-4xl mx-auto rounded-2xl p-8 md:p-10 text-center text-white"
          style={{ backgroundColor: "var(--color-teal)" }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Serious about Scirocco?
          </h2>
          <p className="mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            Introduce yourself as a prospective buyer — a few details about you
            help {seller.name} get to know you before an inspection.
          </p>
          <Link
            href="/introduce"
            className="inline-block bg-white font-semibold px-8 py-3.5 rounded-full transition-transform hover:scale-105 text-sm"
            style={{ color: "var(--color-navy)" }}
          >
            Introduce Yourself →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
          >
            Frequently Asked
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I inspect the boat?",
                a: `Yes — ${seller.name} holds inspections on Sunday afternoons at ${boat.berth}. Call ${seller.phone} to book a time.`,
              },
              {
                q: "What's the asking price?",
                a: `${boat.price} ${boat.currency}.`,
              },
              {
                q: "What work has recently been done?",
                a: "Scirocco has just had a complete overhaul: new electrics, an engine rebuild, a new fuel tank, the hull completely sanded and repainted, a refurbished generator, a new electrical distribution system, and all plumbing redone.",
              },
              {
                q: "What's included in the sale?",
                a: "The sale includes a 5m x 5m inflatable pool, entertainment system, TV, Starlink internet and an electric BBQ — along with everything that makes her a comfortable liveaboard.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold mb-2" style={{ color: "var(--color-navy)" }}>
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
