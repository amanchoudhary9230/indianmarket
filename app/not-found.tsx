import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "Oops! The page you are looking for could not be found on IndianMarket. Explore our vast marketplace for products and manufacturers across India.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Page Not Found - IndianMarket",
    description:
      "Oops! The page you are looking for could not be found on IndianMarket. Explore our vast marketplace for products and manufacturers across India.",
    url: "https://indianmarket.vercel.app/404",
    type: "website",
    siteName: "IndianMarket",
    images: [
      {
        url: "https://indianmarket.vercel.app/images/og-404-image.jpg",
        width: 1200,
        height: 630,
        alt: "IndianMarket 404",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@IndianMarket",
    title: "Page Not Found - IndianMarket",
    description:
      "Oops! The page you are looking for could not be found on IndianMarket. Explore our vast marketplace for products and manufacturers across India.",
    images: "https://indianmarket.vercel.app/images/twitter-404-image.jpg",
  },
  robots: "noindex, nofollow",
  viewport: "width=device-width, initial-scale=1.0",
};


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80%]">
      <h1 className="text-8xl font-extrabold text-rose-600">404</h1>
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
    </div>
  );
}
