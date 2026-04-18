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
    src: "/images/ai-lifestyle.png",
    alt: "Walking back to Scirocco, K'gari",
    className: "row-span-2",
  },
  {
    src: "/images/adv-whitehaven.png",
    alt: "Whitehaven Beach, Whitsundays",
  },
  {
    src: "/images/adv-hardy-reef.png",
    alt: "Hardy Reef, outer Great Barrier Reef",
  },
  {
    src: "/images/adv-nara-inlet.png",
    alt: "Nara Inlet, Hook Island",
  },
  {
    src: "/images/adv-noosa.png",
    alt: "Laguna Bay, Noosa",
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
              Boater, photographer, and firm believer that the best sunsets are
              always seen from the water.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I&apos;ve been living aboard my motor cruiser,{" "}
              <em
                className="font-medium"
                style={{ color: "var(--color-navy)" }}
              >
                Scirocco
              </em>
              , since 2020. Before that I was a travel photographer based in
              Brisbane — still doing that, just from a slightly saltier office.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ai-about.png"
                alt="Michelle at the rail of Scirocco, Queensland coast"
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
              🛥 Scirocco
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
            I grew up in Brisbane, which meant the ocean was always close but
            never quite close enough. I got my boat licence at 25 on a whim and
            spent the next few years learning everything I could about engines,
            navigation, and the slightly unhinged community of people who
            choose to call a boat home.
          </p>
          <p>
            In early 2020, I bought{" "}
            <em
              className="not-italic font-medium"
              style={{ color: "var(--color-navy)" }}
            >
              Scirocco
            </em>{" "}
            — sight unseen, from a blurry marketplace listing down at the Gold
            Coast — and spent six months fixing the bits I hadn&apos;t noticed
            were broken. I got very good at diesel troubleshooting. I got
            excellent at plumbing.
          </p>
          <p>
            The plan was to cruise up the coast for a year. That was four years
            ago. Since then we&apos;ve pottered between the Whitsundays,
            K&apos;gari, Moreton Bay and a dozen little SEQ anchorages in
            between, and made more friends in marinas than I did in a decade of
            regular life on land.
          </p>
          <p>
            This site is my attempt to document it — the places, the people,
            the light, and the feeling of waking up somewhere new and not quite
            knowing where you are yet.
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
                { value: "18,200", label: "Nautical miles" },
                { value: "4", label: "Trips to the Whitsundays" },
                { value: "220+", label: "Anchorages" },
                { value: "47", label: "Marina showers" },
                { value: "4 yrs", label: "Liveaboard" },
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
              src="/images/ai-lifestyle.png"
              alt="Scirocco anchored off K'gari"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Scirocco
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                Motor cruiser &bull; Home since 2020
              </p>
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
