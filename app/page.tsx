import Image from "next/image";
import Link from "next/link";
import {
  boat,
  quickSpecs,
  featureSections,
  galleryPhotos,
  seller,
} from "@/lib/boat";
import MediaPlaceholder from "@/components/MediaPlaceholder";

const overhaul = featureSections.find((s) => s.id === "overhaul")!;
const extras = featureSections.find((s) => s.id === "extras")!;
const teaserPhotos = galleryPhotos.slice(0, 6);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/scirocco-hero.jpg"
          alt={`${boat.name} — ${boat.model} ${boat.year} motor cruiser`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/45 to-navy/80" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-sm px-4 py-2 rounded-full mb-8 font-medium tracking-wide">
            <span>⚓</span>
            <span>For Sale &bull; {boat.berth}</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {boat.name}
          </h1>
          <p className="text-xl md:text-2xl mb-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
            {boat.tagline}
          </p>
          <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            {boat.model} &bull; {boat.year} &bull; 51ft Mediterranean Cruiser
          </p>
          <div
            className="inline-block text-white font-bold text-3xl md:text-4xl px-8 py-3 rounded-full mb-10"
            style={{ backgroundColor: "var(--color-gold)", fontFamily: "var(--font-display)" }}
          >
            {boat.price} {boat.currency}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="inline-block text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base tracking-wide hover:scale-105"
              style={{ backgroundColor: "var(--color-teal)" }}
            >
              View Photos & Videos
            </Link>
            <Link
              href="/contact"
              className="inline-block backdrop-blur-sm border border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              Book an Inspection
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6"
            style={{ color: "rgba(255,255,255,0.6)" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Quick specs */}
      <section className="py-12 border-y" style={{ backgroundColor: "var(--color-cream)", borderColor: "var(--color-sand)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {quickSpecs.map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-2xl md:text-3xl font-bold mb-1"
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
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-teal)" }}>
              The Boat
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
            >
              Move-in ready, hard work done
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{boat.summary}</p>
            <Link
              href="/specifications"
              className="inline-flex items-center gap-2 font-semibold transition-colors group"
              style={{ color: "var(--color-teal)" }}
            >
              See full features & specifications{" "}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/scirocco-stern.jpg"
              alt={`${boat.name} stern and swim platform`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Recent overhaul */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-teal)" }}>
              Recently & Completely Overhauled
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
            >
              {overhaul.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              {overhaul.intro}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {overhaul.items.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 shadow-sm flex gap-3">
                <span className="text-xl" style={{ color: "var(--color-teal)" }}>✓</span>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "var(--color-navy)" }}>
                    {item.name}
                  </h3>
                  {item.detail && (
                    <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo teaser */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-teal)" }}>
              Take a Look
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
            >
              Photos & Videos
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-sm font-semibold tracking-wide transition-colors inline-flex items-center gap-1 group"
            style={{ color: "var(--color-teal)" }}
          >
            View full gallery{" "}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {teaserPhotos.map((photo) => (
            <Link
              key={photo.id}
              href="/gallery"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <MediaPlaceholder label={photo.caption} className="absolute inset-0" />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </section>

      {/* Included extras */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-teal)" }}>
            {extras.intro}
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
          >
            {extras.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {extras.items.map((item) => (
              <span
                key={item.name}
                className="bg-white rounded-full px-5 py-3 shadow-sm text-sm font-semibold"
                style={{ color: "var(--color-navy)" }}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "var(--color-navy)" }}>
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/scirocco-3.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center text-white">
          <span className="text-4xl mb-6 block">⚓</span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Come and See Her
          </h2>
          <p className="text-lg mb-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            {seller.inspections} at {boat.berth}.
          </p>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            Contact {seller.name} on{" "}
            <a href={seller.phoneHref} className="font-semibold underline">
              {seller.phone}
            </a>{" "}
            to arrange a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={seller.phoneHref}
              className="inline-block text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base"
              style={{ backgroundColor: "var(--color-teal)" }}
            >
              Call {seller.phone}
            </a>
            <Link
              href="/contact"
              className="inline-block backdrop-blur-sm border border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              Enquire Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
