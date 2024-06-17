import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the IndianMarket team for any queries, support, or feedback. We are here to help you with all your needs.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Contact Us - IndianMarket",
    description:
      "Get in touch with the IndianMarket team for any queries, support, or feedback. We are here to help you with all your needs.",
    url: "https://indianmarket.vercel.app/contact",
    type: "website",
    siteName: "IndianMarket",
    images: [
      {
        url: "https://indianmarket.vercel.app/images/og-contact-image.jpg",
        width: 1200,
        height: 630,
        alt: "IndianMarket Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@IndianMarket",
    title: "Contact Us - IndianMarket",
    description:
      "Get in touch with the IndianMarket team for any queries, support, or feedback. We are here to help you with all your needs.",
    images: "https://indianmarket.vercel.app/images/twitter-contact-image.jpg",
  },
  robots: "index, follow",
  keywords:
    "contact, IndianMarket, support, queries, feedback, help, India, marketplace",
  viewport: "width=device-width, initial-scale=1.0",
};


export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="md:mt-14">{children}</section>;
}
