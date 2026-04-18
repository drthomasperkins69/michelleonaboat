import type { Metadata } from "next";
import AdventuresClient from "./AdventuresClient";
import { adventures } from "@/lib/adventures";

export const metadata: Metadata = {
  title: "Adventures",
  description:
    "Photo journals and sailing dispatches from around the world — Greece, Croatia, the Atlantic, the Pacific, and beyond.",
};

export default function AdventuresPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-24 px-6 text-center"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--color-teal)" }}
        >
          Photo Journal
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-navy)",
          }}
        >
          Adventures
        </h1>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
          From Mediterranean anchorages to Atlantic crossings — every voyage
          tells a story. Browse the full collection below.
        </p>
      </section>

      <AdventuresClient adventures={adventures} />
    </>
  );
}
