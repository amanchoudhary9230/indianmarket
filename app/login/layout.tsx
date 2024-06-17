import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Access your IndianMarket account to explore products, connect with manufacturers, and manage your business opportunities.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Login to IndianMarket",
    description:
      "Access your IndianMarket account to explore products, connect with manufacturers, and manage your business opportunities.",
    url: "https://indianmarket.vercel.app/login",
    type: "website",
    siteName: "IndianMarket",
    images: [
      {
        url: "https://indianmarket.vercel.app/images/og-login-image.jpg",
        width: 1200,
        height: 630,
        alt: "IndianMarket Login",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@IndianMarket",
    title: "Login to IndianMarket",
    description:
      "Access your IndianMarket account to explore products, connect with manufacturers, and manage your business opportunities.",
    images: "https://indianmarket.vercel.app/images/twitter-login-image.jpg",
  },
  robots: "index, follow",
  keywords:
    "login, IndianMarket, products, manufacturers, India, marketplace, business, suppliers",
  viewport: "width=device-width, initial-scale=1.0",
};


export default function LogInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="md:mt-14">{children}</section>;
}
