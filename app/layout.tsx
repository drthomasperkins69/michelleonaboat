import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sciroccoboat.com"),
  title: {
    default: "Scirocco — 51ft Dyna 50 Mediterranean Cruiser For Sale",
    template: "%s | Scirocco For Sale",
  },
  description:
    "Scirocco — a 51ft Dyna 50 (circa 1993) Mediterranean cruiser for sale at Horizon Shores Marina, Jacobs Well. Twin 559hp Detroit diesels, completely overhauled. $299,999 AUD.",
  openGraph: {
    title: "Scirocco — 51ft Dyna 50 Mediterranean Cruiser For Sale",
    description:
      "Twin 559hp Detroit diesels, 2 cabins, 2 bathrooms, flybridge entertaining deck. Recently and completely overhauled. $299,999 AUD.",
    images: ["/images/scirocco-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
