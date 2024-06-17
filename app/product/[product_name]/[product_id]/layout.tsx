import { ReactNode } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { product_name: string; product_id: string };
}): Promise<Metadata> {
  const { product_name } = params;

  // You can fetch product details here if needed
  // const productDetails = await fetchProductDetails(product_id);

  if (!product_name) {
    notFound(); // Handle not found case
  }

  return {
    title: `${product_name}`,
    description: `Details and information about ${product_name}.`,
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: `${product_name}`,
      description: `Details and information about ${product_name}.`,
      url: `/product/${params.product_name}/${params.product_id}`,
    },
  };
}

export default function ProductLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
