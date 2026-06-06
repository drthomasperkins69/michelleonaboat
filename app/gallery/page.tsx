import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
import { galleryPhotos, galleryVideos, boat } from "@/lib/boat";
import MediaPlaceholder from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Photos & Videos",
  description: `Photo and video gallery of ${boat.name}, the ${boat.model} ${boat.year} 51ft Mediterranean cruiser for sale.`,
};

export default function GalleryPage() {
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
          Gallery
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
        >
          Photos & Videos
        </h1>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
          Take a tour of {boat.name} inside and out. More photos and video
          walkthroughs are being added — placeholders are shown where media is
          still on its way.
        </p>
      </section>

      {/* Photos */}
      <GalleryClient photos={galleryPhotos} />

      {/* Videos */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-teal)" }}>
              Watch
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}
            >
              Video Tours
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {galleryVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative aspect-video">
                  {video.src ? (
                    <video controls className="w-full h-full object-cover" preload="metadata">
                      <source src={video.src} />
                    </video>
                  ) : (
                    <MediaPlaceholder
                      label={video.caption}
                      kind="video"
                      className="absolute inset-0"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}>
                    {video.caption}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
