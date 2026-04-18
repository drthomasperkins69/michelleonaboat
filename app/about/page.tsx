import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of how Michelle swapped her land life for a boat and never looked back.",
};

const photos = [
  {
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    alt: "Michelle at the helm",
    className: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    alt: "Sailing through waves",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    alt: "Tropical anchorage",
  },
  {
    src: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=800&q=80",
    alt: "Greek island sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=800&q=80",
    alt: "Boat at anchor",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-teal)" }}
            >
              The Sailor
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-navy)",
              }}
            >
              Hi, I&apos;m Michelle.
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed mb-6">
              Sailor, photographer, and firm believer that the best sunsets are
              always seen from the water.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I&apos;ve been living aboard my 42-foot sloop,{" "}
              <em className="text-navy font-medium">Blue Meridian</em>, since
              2020. Before that, I was a travel photographer based in Melbourne —
              still doing that, just from a slightly saltier office.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85"
                alt="Michelle on Blue Meridian"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div
              className="absolute -top-4 -left-4 text-white rounded-xl px-4 py-3 text-sm font-semibold shadow-lg"
              style={{ backgroundColor: "var(--color-teal)" }}
            >
              🛥 Blue Meridian, 42ft
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--color-teal)" }}
        >
          The Story
        </p>
        <h2
          className="text-4xl font-bold mb-10"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-navy)",
          }}
        >
          How I Got Here
        </h2>

        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            I grew up in a landlocked city in the Australian outback, which
            meant the ocean was always something I visited, never something I
            lived beside. I took sailing lessons at 25 on a whim and spent the
            next few years learning everything I could about blue-water passage
            making.
          </p>
          <p>
            In early 2020, I bought Blue Meridian — sight unseen, from a
            blurry Craigslist photo — flew to the Mediterranean, and spent six
            months refitting her with the help of very patient boatyard workers
            who did not speak much English. My Spanish got very good. My
            plumbing skills got excellent.
          </p>
          <p>
            The plan was to sail for a year. That was four years ago. I&apos;ve
            covered over 28,000 nautical miles, visited 47 countries, and made
            more friends in marinas and anchorages than I did in a decade of
            regular life.
          </p>
          <p>
            This site is my attempt to document it — the places, the people, the
            light, and the feeling of waking up somewhere new and not knowing
            quite where you are yet.
          </p>
        </div>

        <blockquote
          className="my-12 pl-6 border-l-4 text-2xl leading-relaxed italic"
          style={{
            borderColor: "var(--color-teal)",
            fontFamily: "var(--font-display)",
            color: "var(--color-navy)",
          }}
        >
          &ldquo;The sea, once it casts its spell, holds one in its net of
          wonder forever.&rdquo;
          <footer className="text-base mt-3 text-gray-500 not-italic" style={{ fontFamily: "var(--font-sans)" }}>
            — Jacques Cousteau (and basically me, daily)
          </footer>
        </blockquote>
      </section>

      {/* Photo collage */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-navy)",
            }}
          >
            Life on the Water
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl ${
                  i === 0 ? "row-span-2" : ""
                }`}
                style={{ aspectRatio: i === 0 ? "1/2" : "1/1" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / boat */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-teal)" }}
            >
              The Numbers
            </p>
            <h2
              className="text-4xl font-bold mb-10"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-navy)",
              }}
            >
              Four Years at Sea
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "47", label: "Countries visited" },
                { value: "28,400", label: "Nautical miles" },
                { value: "12", label: "Ocean crossings" },
                { value: "340+", label: "Anchorages" },
                { value: "4", label: "Years liveaboard" },
                { value: "1", label: "Very good boat" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-navy)",
                    }}
                  >
                    {value}
                  </div>
                  <div className="text-sm text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-96">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
              alt="Blue Meridian underway"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Blue Meridian
              </p>
              <p className="text-white/80 text-sm">Bavaria 42, 2009</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        <h2
          className="text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Want to Follow Along?
        </h2>
        <p
          className="text-lg mb-8 max-w-xl mx-auto"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Browse the full adventure archive, or get in touch — I love hearing
          from fellow sailors and dreamers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/adventures"
            className="inline-block text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-sm"
            style={{ backgroundColor: "var(--color-teal)" }}
          >
            See All Adventures
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-sm"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
