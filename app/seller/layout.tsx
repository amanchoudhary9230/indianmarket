import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell on IndianMarket",
  description:
    "Create a seller account on IndianMarket to list your products and reach customers across India. Join our marketplace and grow your business with us.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sell on IndianMarket",
    description:
      "Create a seller account on IndianMarket to list your products and reach customers across India. Join our marketplace and grow your business with us.",
    url: "https://indianmarket.vercel.app/seller",
    type: "website",
    siteName: "IndianMarket",
    images: [
      {
        url: "https://indianmarket.vercel.app/images/og-seller-image.jpg",
        width: 1200,
        height: 630,
        alt: "IndianMarket Seller",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@IndianMarket",
    title: "Sell on IndianMarket",
    description:
      "Create a seller account on IndianMarket to list your products and reach customers across India. Join our marketplace and grow your business with us.",
    images: "https://indianmarket.vercel.app/images/twitter-seller-image.jpg",
  },
  robots: "index, follow",
  keywords:
    "sell, seller account, IndianMarket, products, manufacturers, India, marketplace, business, suppliers",
  viewport: "width=device-width, initial-scale=1.0",
};


export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
      </div>
    </section>
  );
}
