"use client";

import Image from "next/image";
import { useState } from "react";
import { GalleryPhoto, photoCategories } from "@/lib/boat";
import MediaPlaceholder from "@/components/MediaPlaceholder";

export default function GalleryClient({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {photoCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={
              active === category
                ? { backgroundColor: "var(--color-navy)", color: "white" }
                : {
                    backgroundColor: "var(--color-cream)",
                    color: "var(--color-navy)",
                    border: "2px solid var(--color-sand)",
                  }
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-gray-500 text-sm mb-8 text-center">
        {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
        {active !== "All" ? ` — ${active}` : ""}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((photo) => (
          <div
            key={photo.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-60 overflow-hidden">
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <MediaPlaceholder label={photo.caption} className="absolute inset-0" />
              )}
              <div className="absolute top-4 left-4">
                <span
                  className="text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide"
                  style={{ backgroundColor: "rgba(91,164,164,0.85)" }}
                >
                  {photo.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <p className="font-semibold" style={{ color: "var(--color-navy)" }}>
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
