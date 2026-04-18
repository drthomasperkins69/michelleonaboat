import Image from "next/image";
import Link from "next/link";
import { adventures } from "@/lib/adventures";

const featured = adventures.filter((a) => a.featured).slice(0, 3);
const recent = adventures.slice(0, 6);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/ai-hero.png"
          alt="Michelle on the bow of Scirocco at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/40 to-navy/70" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-sm px-4 py-2 rounded-full mb-8 font-medium tracking-wide">
            <span>⚓</span>
            <span>Life on the Water</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Adventures on the{" "}
            <em className="not-italic" style={{ color: "var(--color-teal-light)" }}>Open Water</em>
          </h1>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            Cruising the Queensland coast one anchorage at a time — photo
            journals from the reefs, islands, and hidden harbours I call home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/adventures"
              className="inline-block text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base tracking-wide hover:scale-105"
              style={{ backgroundColor: "var(--color-teal)" }}
            >
              Explore Adventures
            </Link>
            <Link
              href="/about"
              className="inline-block backdrop-blur-sm border border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              About Michelle
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y" style={{ backgroundColor: "var(--color-cream)", borderColor: "var(--color-sand)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "18k+", label: "Nautical Miles" },
              { value: "220+", label: "Anchorages" },
              { value: "4 yrs", label: "Liveaboard" },
              { value: "1", label: "Very Good Boat" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-4xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
                >
                  {value}
                </div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-widest">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Adventures */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-teal)" }}>
              Latest Voyages
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
            >
              Recent Adventures
            </h2>
          </div>
          <Link
            href="/adventures"
            className="text-sm font-semibold tracking-wide transition-colors inline-flex items-center gap-1 group"
            style={{ color: "var(--color-teal)" }}
          >
            View all adventures{" "}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((adventure, i) => (
            <Link
              key={adventure.id}
              href="/adventures"
              className={`group block overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "h-80" : "h-64"}`}>
                <Image
                  src={adventure.image}
                  alt={adventure.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 uppercase tracking-wide" style={{ backgroundColor: "rgba(91,164,164,0.9)" }}>
                    {adventure.region}
                  </span>
                  <h3
                    className="text-white font-bold text-xl leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {adventure.title}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-2">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {adventure.location} &bull; {adventure.date}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {adventure.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-teal)" }}>
              Around the World
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
            >
              From the Journal
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {recent.map((adventure) => (
              <Link
                key={adventure.id}
                href="/adventures"
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={adventure.image}
                  alt={adventure.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <p className="text-white font-bold text-sm">{adventure.title}</p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.8)" }}>{adventure.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/adventures"
              className="inline-block border-2 font-semibold px-8 py-3.5 rounded-full hover:text-white transition-all duration-200 text-sm tracking-wide"
              style={{
                borderColor: "var(--color-navy)",
                color: "var(--color-navy)",
              }}
            >
              See All Adventures
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <Image
                src="/images/ai-about.png"
                alt="Michelle at the rail of Scirocco, looking out at the Queensland coast"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 text-white rounded-2xl p-6 shadow-lg max-w-[200px]" style={{ backgroundColor: "var(--color-gold)" }}>
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Since 2020
              </div>
              <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.9)" }}>On the water full-time</div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-teal)" }}>
              The Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
            >
              From Land-Lover to Liveaboard
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I traded my apartment keys for anchor chain in 2020, and I&apos;ve
              never looked back. What started as a sabbatical on{" "}
              <em className="not-italic font-medium" style={{ color: "var(--color-navy)" }}>Scirocco</em>{" "}
              became a life — one I document through photos, journals, and
              occasionally terrible seasickness.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              This is where I share it all. The sunrises and the squalls, the
              hidden anchorages and the crowded marinas, the people I meet and the
              places that stay with me long after the anchor is up.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold transition-colors group"
              style={{ color: "var(--color-teal)" }}
            >
              Read my story{" "}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "var(--color-navy)" }}>
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/ai-cta-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center text-white">
          <span className="text-4xl mb-6 block">🌊</span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Come Cruise Along
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            New adventures, photo journals, and dispatches from the coast —
            sent whenever I manage to find decent WiFi at anchor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-full border text-white text-sm focus:outline-none backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                borderColor: "rgba(255,255,255,0.3)",
              }}
            />
            <button
              className="text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm whitespace-nowrap"
              style={{ backgroundColor: "var(--color-teal)" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
