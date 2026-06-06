import Link from "next/link";
import { boat, seller } from "@/lib/boat";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚓</span>
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {boat.name}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {boat.model} ({boat.year}) — a 51ft Mediterranean cruiser for
              sale, recently and completely overhauled. {boat.price}{" "}
              {boat.currency}.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-teal-light mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Photos & Videos" },
                { href: "/specifications", label: "Features & Specifications" },
                { href: "/contact", label: "Contact & Inspections" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-teal-light mb-4">
              Enquiries
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{seller.name}</li>
              <li>
                <a href={seller.phoneHref} className="hover:text-white transition-colors">
                  {seller.phone}
                </a>
              </li>
              <li>{boat.berth}</li>
              <li>Inspections: Sunday afternoons</li>
            </ul>
            <p className="text-gray-400 text-xs mt-6">
              © {new Date().getFullYear()} {boat.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
