import {
  useDeleteOrder,
} from "../../hooks/useOrderMutations";

import {
  Link,
} from "react-router-dom";

interface Props {
  orders: any[];
}

export default function OrdersTable({
  orders,
}: Props) {

  const deleteMutation =
    useDeleteOrder();

  return (
    <div className="overflow-auto rounded-xl border bg-white">

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="p-3">
              ID
            </th>

            <th className="p-3">
              Customer
            </th>

            <th className="p-3">
              Total
            </th>

            <th className="p-3">
              Created
            </th>

            <th className="p-3">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {orders?.map(
            (order) => (
              <tr
                key={order.id}
                className="border-b"
              >

                <td className="p-3">
                  {order.id}
                </td>

                <td className="p-3">
                  {
                    order.customer_id
                  }
                </td>

                <td className="p-3">
                  ₹
                  {
                    order.total_amount
                  }
                </td>

                <td className="p-3">
                  {new Date(
                    order.created_at
                  ).toLocaleDateString()}
                </td>

                <td className="flex gap-2 p-3">

                  <Link
                    to={`/orders/${order.id}`}
                    className="rounded bg-blue-500 px-3 py-1 text-white"
                  >
                    View
                  </Link>

                  <button
                    onClick={() =>
                      deleteMutation.mutate(
                        order.id
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