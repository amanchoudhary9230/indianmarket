import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about IndianMarket, our mission, vision, and the team behind the leading marketplace connecting products and manufacturers across India.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "About Us - IndianMarket",
    description:
      "Learn more about IndianMarket, our mission, vision, and the team behind the leading marketplace connecting products and manufacturers across India.",
    url: "https://indianmarket.vercel.app/about",
    type: "website",
    siteName: "IndianMarket",
    images: [
      {
        url: "https://indianmarket.vercel.app/images/og-about-image.jpg",
        width: 1200,
        height: 630,
        alt: "IndianMarket About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@IndianMarket",
    title: "About Us - IndianMarket",
    description:
      "Learn more about IndianMarket, our mission, vision, and the team behind the leading marketplace connecting products and manufacturers across India.",
    images: "https://indianmarket.vercel.app/images/twitter-about-image.jpg",
  },
  robots: "index, follow",
  keywords:
    "about, IndianMarket, mission, vision, team, marketplace, products, manufacturers, India",
  viewport: "width=device-width, initial-scale=1.0",
};


export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
      </div>
    </section>
  );
}
