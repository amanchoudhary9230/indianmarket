export default function Page({
  params,
}: {
  params: { product_name: string; product_id: number };
}) {
  return (
    <div>
      Product Name: {params.product_name} Prodcut_id: {params.product_id}
    </div>
  );
}
