import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join IndianMarket",
  description:
    "Sign up to access a vast marketplace of products and manufacturers from all over India. Discover unique products, connect with suppliers, and enhance your business opportunities with IndianMarket.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Join IndianMarket",
    description:
      "Sign up to access a vast marketplace of products and manufacturers from all over India. Discover unique products, connect with suppliers, and enhance your business opportunities with IndianMarket.",
    url: "https://indianmarket.vercel.app/signup",
    type: "website",
    siteName: "IndianMarket",
    images: [
      {
        url: "https://indianmarket.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IndianMarket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@IndianMarket",
    title: "Join IndianMarket",
    description:
      "Sign up to access a vast marketplace of products and manufacturers from all over India. Discover unique products, connect with suppliers, and enhance your business opportunities with IndianMarket.",
    images: "https://indianmarket.vercel.app/images/twitter-image.jpg",
  },
  robots: "index, follow",
  keywords:
    "signup, IndianMarket, products, manufacturers, India, marketplace, business, suppliers",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
