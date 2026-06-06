import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { boat, quickSpecs, featureSections, seller } from "@/lib/boat";

export const metadata: Metadata = {
  title: "Features & Specifications",
  description: `Full features and specifications for ${boat.name}, a ${boat.model} ${boat.year} 51ft Mediterranean cruiser.`,
};

export default function SpecificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-teal)" }}>
              Features & Specifications
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
            >
              Everything aboard {boat.name}
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed mb-6">{boat.summary}</p>
            <div
              className="inline-block text-white font-bold text-2xl px-6 py-2 rounded-full"
              style={{ backgroundColor: "var(--color-gold)", fontFamily: "var(--font-display)" }}
            >
              {boat.price} {boat.currency}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/scirocco-2.jpg"
                alt={`${boat.name}, ${boat.model} ${boat.year}`}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              className="absolute -top-4 -left-4 text-white rounded-xl px-4 py-3 text-sm font-semibold shadow-lg"
              style={{ backgroundColor: "var(--color-teal)" }}
            >
              🛥 {boat.model} &bull; {boat.year}
            </div>
          </div>
        </div>
      </section>

      {/* Quick specs table */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
        >
          At a Glance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: "var(--color-sand)" }}>
          {quickSpecs.map(({ label, value }) => (
            <div key={label} className="bg-white p-6 text-center">
              <div
                className="text-2xl font-bold mb-1"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
              >
                {value}
              </div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-widest">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature sections */}
      <section className="pb-8 px-6 max-w-4xl mx-auto space-y-16">
        {featureSections.map((section) => (
          <div key={section.id}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-teal)" }}>
              {section.id === "overhaul" ? "Recently Done" : "Specifications"}
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
            >
              {section.title}
            </h2>
            {section.intro && (
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{section.intro}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <div key={item.name} className="rounded-2xl p-5 flex gap-3" style={{ backgroundColor: "var(--color-cream)" }}>
                  <span className="text-lg flex-shrink-0" style={{ color: "var(--color-teal)" }}>✓</span>
                  <div>
                    <h3 className="font-bold" style={{ color: "var(--color-navy)" }}>
                      {item.name}
                    </h3>
                    {item.detail && (
                      <p className="text-gray-600 text-sm leading-relaxed mt-0.5">{item.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center mt-12" style={{ backgroundColor: "var(--color-navy)" }}>
        <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Interested in {boat.name}?
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
          {seller.inspections} at {boat.berth}. Contact {seller.name} on{" "}
          <a href={seller.phoneHref} className="font-semibold underline">{seller.phone}</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/gallery"
            className="inline-block text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-sm"
            style={{ backgroundColor: "var(--color-teal)" }}
          >
            View Photos & Videos
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-sm"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            Book an Inspection
          </Link>
        </div>
      </section>
    </>
  );
}
