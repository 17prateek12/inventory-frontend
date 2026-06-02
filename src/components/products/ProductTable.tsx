import type {
  Product,
} from "../../types/product";

import {
  useDeleteProduct,
} from "../../hooks/useProductMutations";

interface Props {
  products: Product[];
}

export default function ProductTable({
  products,
}: Props) {

  const deleteMutation =
    useDeleteProduct();

  return (
    <div className="overflow-auto rounded-xl border bg-white">

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="p-3">
              Image
            </th>

            <th className="p-3">
              Name
            </th>

            <th className="p-3">
              SKU
            </th>

            <th className="p-3">
              Price
            </th>

            <th className="p-3">
              Quantity
            </th>

            <th className="p-3">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {products.map(
            (product) => (
              <tr
                key={product.id}
                className="border-b"
              >

                <td className="p-3">

                  {product.image_url && (
                    <img
                      src={`${import.meta.env.VITE_API_URL}${product.image_url}`}
                      className="h-12 w-12 rounded object-cover"
                    />
                  )}

                </td>

                <td className="p-3">
                  {product.name}
                </td>

                <td className="p-3">
                  {product.sku}
                </td>

                <td className="p-3">
                  ₹{product.price}
                </td>

                <td className="p-3">
                  {product.stock_quantity}
                </td>

                <td className="p-3">

                  <button
                    onClick={() =>
                      deleteMutation.mutate(
                        product.id
                      )
                    }
                    className="rounded bg-red-500 px-3 py-1 text-white"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}