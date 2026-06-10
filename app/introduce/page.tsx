import type { Metadata } from "next";
import Image from "next/image";
import IntroduceForm from "./IntroduceForm";
import { boat, seller } from "@/lib/boat";

export const metadata: Metadata = {
  title: "Introduce Yourself",
  description: `Introduce yourself as a prospective buyer of ${boat.name}, the ${boat.model} ${boat.year} Mediterranean cruiser.`,
};

export default function IntroducePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image
          src="/images/scirocco-hero.jpg"
          alt={`${boat.name} at ${boat.berth}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(15,45,78,0.72)" }} />
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-teal-light)" }}>
            Prospective Buyers
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Introduce Yourself
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            {boat.name} is more than a boat — she&apos;s been a home. If
            you&apos;re interested in becoming her next owner, {seller.name}{" "}
            would love a proper introduction before arranging an inspection.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
            >
              Tell us a little about yourself
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Please share a few details so we can get to know you. All fields
              marked with an asterisk (*) are required.
            </p>
          </div>
          <IntroduceForm />
        </div>
      </section>
    </>
  );
}
