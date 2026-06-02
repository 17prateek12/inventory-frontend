import { useParams } from "react-router-dom";

import { useOrder } from "../hooks/useOrders";

export default function OrderDetailsPage() {

  const { id } = useParams();

  const {
    data,
    isLoading,
  } = useOrder(Number(id));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Order not found.</p>;
  }

  return (
    <div>

      <h1 className="mb-6 text-3xl font-bold">
        Order #{data.id}
      </h1>

      <div className="mb-6 rounded-xl border bg-white p-6">

        <p>
          Customer ID:
          {" "}
          {data.customer_id}
        </p>

        <p>
          Total Amount:
          {" "}
          ₹{data.total_amount}
        </p>

        <p>
          Created:
          {" "}
          {new Date(
            data.created_at
          ).toLocaleString()}
        </p>

      </div>

      <div className="rounded-xl border bg-white">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-3">
                Product Id
              </th>

              <th className="p-3">
                Quantity
              </th>

              <th className="p-3">
                Unit Price
              </th>

            </tr>

          </thead>

          <tbody>

            {data.items.map(
              (item: any, index: number) => (
                <tr
                  key={index}
                  className="border-b"
                >

                  <td className="p-3">
                    {item.product_id}
                  </td>

                  <td className="p-3">
                    {item.quantity}
                  </td>

                  <td className="p-3">
                    ₹{item.unit_price}
                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}