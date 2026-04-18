"use client";

import Image from "next/image";
import { useState } from "react";
import { Adventure, regions } from "@/lib/adventures";

export default function AdventuresClient({
  adventures,
}: {
  adventures: Adventure[];
}) {
  const [activeRegion, setActiveRegion] = useState<string>("All");

  const filtered =
    activeRegion === "All"
      ? adventures
      : adventures.filter((a) => a.region === activeRegion);

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={
              activeRegion === region
                ? {
                    backgroundColor: "var(--color-navy)",
                    color: "white",
                  }
                : {
                    backgroundColor: "var(--color-cream)",
                    color: "var(--color-navy)",
                    border: "2px solid var(--color-sand)",
                  }
            }
          >
            {region}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-gray-500 text-sm mb-8 text-center">
        {filtered.length} adventure{filtered.length !== 1 ? "s" : ""}
        {activeRegion !== "All" ? ` in ${activeRegion}` : ""}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((adventure) => (
          <div
            key={adventure.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src={adventure.image}
                alt={adventure.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span
                  className="text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide"
                  style={{ backgroundColor: "rgba(91,164,164,0.85)" }}
                >
                  {adventure.region}
                </span>
              </div>
              {adventure.featured && (
                <div className="absolute top-4 right-4">
                  <span
                    className="text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide"
                    style={{ backgroundColor: "rgba(201,150,59,0.9)" }}
                  >
                    Featured
                  </span>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium mb-2">
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{adventure.location}</span>
                <span className="text-gray-300">•</span>
                <span>{adventure.date}</span>
              </div>

              <h3
                className="text-xl font-bold mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy)",
                }}
              >
                {adventure.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {adventure.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24 text-gray-400">
          <span className="text-5xl block mb-4">🌊</span>
          <p className="text-lg">No adventures in this region yet.</p>
          <p className="text-sm mt-1">Check back after the next voyage!</p>
        </div>
      )}
    </section>
  );
}
